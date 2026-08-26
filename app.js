(() => {
  const DATA = window.MJ_TRIP_DATA;
  if (!DATA) return;

  const state = {
    selectedDay: DATA.days[0].id,
    dayMap: null,
    allMap: null,
    deferredInstall: null,
    visited: JSON.parse(localStorage.getItem('mj-travel-visited') || '{}'),
    notes: JSON.parse(localStorage.getItem('mj-travel-notes') || '{}')
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s = '') => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const gm = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const dir = query => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
  const selectedDay = () => DATA.days.find(d => d.id === state.selectedDay) || DATA.days[0];

  function localDateISO() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function currentDayOrFirst() {
    return DATA.days.find(d => d.id === localDateISO()) || DATA.days[0];
  }

  function findNextStop(day) {
    if (day.id !== localDateISO()) return day.route[0];
    const now = new Date();
    const hhmm = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    return day.route.find(s => s.time >= hhmm) || day.route[day.route.length - 1];
  }

  function initHero() {
    const day = currentDayOrFirst();
    const next = findNextStop(day);
    const flight = DATA.flights.find(f => f.date === day.id);
    $('#todayHero').innerHTML = `
      <div class="hero-date">${esc(day.dateLabel)} · ${esc(day.country)}</div>
      <h2>${esc(day.city)}</h2>
      <div class="hero-sub">${esc(day.subtitle)}</div>
      <div class="hero-next">
        <span class="hero-pill">NEXT · ${esc(next.time)} ${esc(next.name)}</span>
        ${flight ? `<span class="hero-pill">✈ ${esc(flight.flight)} · ${esc(flight.depart)} → ${esc(flight.arrive)}</span>` : ''}
      </div>`;
  }

  function initTabs() {
    $$('.tab').forEach(btn => btn.addEventListener('click', () => {
      $$('.tab').forEach(b => b.classList.toggle('is-active', b === btn));
      $$('.view').forEach(v => v.classList.remove('is-active'));
      $(`#${btn.dataset.view}View`).classList.add('is-active');
      if (btn.dataset.view === 'map') {
        setTimeout(renderAllMap, 50);
      }
    }));
  }

  function initDaySelect() {
    const sel = $('#daySelect');
    sel.innerHTML = DATA.days.map(d => `<option value="${d.id}">${esc(d.dateLabel)} · ${esc(d.city)}</option>`).join('');
    state.selectedDay = currentDayOrFirst().id;
    sel.value = state.selectedDay;
    sel.addEventListener('change', e => {
      state.selectedDay = e.target.value;
      renderDay();
    });
  }

  function pinIcon(n) {
    return L.divIcon({ className: '', html: `<div class="route-pin">${n}</div>`, iconSize: [29,29], iconAnchor:[14,14] });
  }

  // Leaflet은 로컬(self-host)에서 뜨므로, 온라인 타일이 없어도 핀과 동선은 그대로 렌더된다.
  // 온라인일 때만 OSM 타일을 얹고, 타일 로드 실패/오프라인이면 작은 상태 표시를 보여준다.
  function addBaseTiles(map, mapEl) {
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    });
    let note = mapEl.querySelector('.map-offline-note');
    if (!note) {
      note = document.createElement('div');
      note.className = 'map-offline-note';
      note.textContent = '오프라인 · 지도 배경 없이 이동 순서만 표시';
      mapEl.appendChild(note);
    }
    tiles.on('tileerror', () => note.classList.add('show'));
    tiles.on('tileload', () => note.classList.remove('show'));
    if (!navigator.onLine) note.classList.add('show');
    tiles.addTo(map);
    return tiles;
  }

  function ensureDayMap() {
    if (!window.L) {
      $('#dayMap').innerHTML = '<div style="padding:20px">지도를 불러오지 못했습니다. 일정의 길찾기 버튼은 계속 사용할 수 있습니다.</div>';
      return null;
    }
    if (!state.dayMap) {
      state.dayMap = L.map('dayMap', { scrollWheelZoom: false, zoomControl: true });
      addBaseTiles(state.dayMap, $('#dayMap'));
    }
    return state.dayMap;
  }

  function renderDayMap(day) {
    const map = ensureDayMap();
    if (!map) return;
    map.eachLayer(layer => {
      if (!(layer instanceof L.TileLayer)) map.removeLayer(layer);
    });
    const coords = [];
    day.route.forEach(stop => {
      if (!Number.isFinite(stop.lat) || !Number.isFinite(stop.lng)) return;
      coords.push([stop.lat, stop.lng]);
      L.marker([stop.lat, stop.lng], { icon: pinIcon(stop.order) })
        .addTo(map)
        .bindPopup(`<strong>${stop.order}. ${esc(stop.name)}</strong><br>${esc(stop.time)} · ${esc(stop.note || '')}<br><a href="${gm(stop.mapQuery || stop.name)}" target="_blank" rel="noopener">Google Maps</a>`);
    });
    if (coords.length > 1) {
      L.polyline(coords, { color: '#20372f', weight: 3, opacity: .72, dashArray: '7,7' }).addTo(map);
      map.fitBounds(L.latLngBounds(coords), { padding:[34,34] });
    } else if (coords.length === 1) map.setView(coords[0], 14);
    setTimeout(() => map.invalidateSize(), 80);
  }

  function renderTimeline(day) {
    $('#timeline').innerHTML = day.route.map(stop => {
      const visited = !!state.visited[`${day.id}:${stop.id}`];
      return `<div class="timeline-item">
        <div class="time">${esc(stop.time)}</div>
        <div class="timeline-track"><div class="dot"></div></div>
        <div class="stop-card">
          <div class="stop-top">
            <div>
              <h3>${stop.order}. ${esc(stop.name)}</h3>
              <p>${esc(stop.note || '')}</p>
            </div>
            ${visited ? '<span class="badge visited">방문 완료</span>' : ''}
          </div>
          <div class="badges">
            ${stop.duration ? `<span class="badge">체류 ${esc(stop.duration)}</span>` : ''}
            ${stop.transportToNext ? `<span class="badge transport">다음: ${esc(stop.transportToNext)} ${esc(stop.travelTimeToNext || '')}</span>` : ''}
            ${stop.costToNext ? `<span class="badge cost">${esc(stop.costToNext)}</span>` : ''}
          </div>
          <div class="actions">
            <a class="action-btn primary" href="${dir(stop.mapQuery || stop.name)}" target="_blank" rel="noopener">길찾기</a>
            <a class="action-btn" href="${gm(stop.mapQuery || stop.name)}" target="_blank" rel="noopener">지도에서 보기</a>
            <button class="action-btn visit-stop" type="button" data-day="${day.id}" data-stop="${stop.id}">${visited ? '방문 취소' : '방문 완료'}</button>
          </div>
        </div>
      </div>`;
    }).join('');

    $$('.visit-stop', $('#timeline')).forEach(btn => btn.addEventListener('click', () => {
      const key = `${btn.dataset.day}:${btn.dataset.stop}`;
      state.visited[key] = !state.visited[key];
      localStorage.setItem('mj-travel-visited', JSON.stringify(state.visited));
      renderDay();
      renderPlaces();
      renderJournal();
    }));
  }

  function renderQuick(day) {
    $('#quickInfo').innerHTML = day.quick.map(q => `<div class="quick-card">
      <div class="label">${esc(q.label)}</div>
      <div class="value">${esc(q.value)}</div>
      <div class="sub">${esc(q.sub)}</div>
    </div>`).join('');
  }

  function renderFood(day) {
    $('#foodList').innerHTML = day.food.map(p => {
      const visited = !!state.visited[`place:${p.id}`];
      return `<article class="place-card">
        <div class="type">${p.kind === 'cafe' ? 'CAFE' : 'FOOD'} · ${esc(p.area)}</div>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.note)}</p>
        <div class="badges">
          <span class="badge">${esc(p.hours)}</span>
          <span class="badge cost">${esc(p.price)}</span>
          ${visited ? '<span class="badge visited">먹어봄</span>' : ''}
        </div>
        <div class="actions">
          <a class="action-btn primary" href="${dir(p.mapQuery || p.name)}" target="_blank" rel="noopener">길찾기</a>
          <button class="action-btn food-visit" data-id="${p.id}" type="button">${visited ? '방문 취소' : '가봄 체크'}</button>
        </div>
      </article>`;
    }).join('');
    $$('.food-visit', $('#foodList')).forEach(btn => btn.addEventListener('click', () => {
      const key = `place:${btn.dataset.id}`;
      state.visited[key] = !state.visited[key];
      localStorage.setItem('mj-travel-visited', JSON.stringify(state.visited));
      renderFood(selectedDay());
      renderPlaces();
      renderJournal();
    }));
  }

  function renderDay() {
    const day = selectedDay();
    $('#dayTitle').textContent = `${day.dateLabel} · ${day.city}`;
    $('#alertBox').innerHTML = day.alert ? `<div class="alert"><strong>${esc(day.alert.title)}</strong>${esc(day.alert.text)}</div>` : '';
    renderDayMap(day);
    renderTimeline(day);
    renderQuick(day);
    renderFood(day);
  }

  function renderTrip() {
    $('#tripTimeline').innerHTML = DATA.days.map(day => `
      <article class="trip-day">
        <div class="date">${esc(day.dateLabel)} · ${esc(day.country)}</div>
        <h3>${esc(day.city)} — ${esc(day.title)}</h3>
        <p>${esc(day.subtitle)}</p>
        <div class="actions"><button type="button" class="action-btn open-day" data-day="${day.id}">이 날짜 열기</button></div>
      </article>`).join('');
    $$('.open-day').forEach(btn => btn.addEventListener('click', () => {
      state.selectedDay = btn.dataset.day;
      $('#daySelect').value = state.selectedDay;
      $$('.tab').forEach(b => b.classList.toggle('is-active', b.dataset.view === 'today'));
      $$('.view').forEach(v => v.classList.toggle('is-active', v.id === 'todayView'));
      renderDay();
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }));
  }

  function renderAllMap() {
    if (!window.L) return;
    if (!state.allMap) {
      state.allMap = L.map('allMap', { scrollWheelZoom:false });
      addBaseTiles(state.allMap, $('#allMap'));
    }
    const map = state.allMap;
    map.eachLayer(layer => { if (!(layer instanceof L.TileLayer)) map.removeLayer(layer); });
    const allCoords = [];
    DATA.days.forEach((day, dayIndex) => {
      const coords = [];
      day.route.forEach(stop => {
        if (!Number.isFinite(stop.lat) || !Number.isFinite(stop.lng)) return;
        const ll = [stop.lat, stop.lng];
        coords.push(ll); allCoords.push(ll);
        L.marker(ll, { icon: pinIcon(stop.order) }).addTo(map)
          .bindPopup(`<strong>${esc(day.dateLabel)} · ${stop.order}. ${esc(stop.name)}</strong><br>${esc(stop.time)} · ${esc(day.city)}`);
      });
      if (coords.length > 1) L.polyline(coords, { color: dayIndex % 2 ? '#7a5f43' : '#20372f', weight:3, opacity:.65, dashArray:'6,7' }).addTo(map);
    });
    if (allCoords.length) map.fitBounds(L.latLngBounds(allCoords), { padding:[35,35] });
    $('#mapLegend').innerHTML = DATA.days.map(d => `<span class="legend-item">${esc(d.dateLabel)} · ${esc(d.city)}</span>`).join('');
    setTimeout(() => map.invalidateSize(), 80);
  }

  function getAllPlaces() {
    const routePlaces = DATA.days.flatMap(day => day.route.map(s => ({
      id: `${day.id}:${s.id}`,
      name: s.name,
      city: day.city,
      kind: s.type === 'food' ? 'food' : 'route',
      note: s.note || '',
      mapQuery: s.mapQuery || s.name,
      status: state.visited[`${day.id}:${s.id}`] ? 'visited' : 'planned',
      dayId: day.id
    })));
    const foodPlaces = DATA.days.flatMap(day => day.food.map(p => ({
      id: `place:${p.id}`,
      name:p.name,
      city:day.city,
      kind:'food',
      note:p.note,
      mapQuery:p.mapQuery || p.name,
      status: state.visited[`place:${p.id}`] ? 'visited' : 'planned',
      dayId:day.id
    })));
    const unique = new Map();
    [...routePlaces, ...foodPlaces].forEach(p => unique.set(p.id, p));
    return [...unique.values()];
  }

  function renderPlaces(filter = $('.filter.is-active')?.dataset.filter || 'all') {
    let places = getAllPlaces();
    if (filter === 'visited') places = places.filter(p => p.status === 'visited');
    if (filter === 'planned') places = places.filter(p => p.status === 'planned');
    if (filter === 'food') places = places.filter(p => p.kind === 'food');
    $('#placesGrid').innerHTML = places.map(p => `<article class="place-card">
      <div class="status-row">
        <span class="status ${p.status}">${p.status === 'visited' ? '가본 곳' : '가볼 곳'}</span>
        <span class="type">${p.kind === 'food' ? 'FOOD' : 'PLACE'}</span>
      </div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.note)}</p>
      <div class="actions">
        <a class="action-btn primary" href="${dir(p.mapQuery)}" target="_blank" rel="noopener">길찾기</a>
        <button class="action-btn place-toggle" data-id="${esc(p.id)}" type="button">${p.status === 'visited' ? '가볼 곳으로' : '가본 곳으로'}</button>
      </div>
    </article>`).join('') || '<div class="journal-intro">아직 해당 상태의 장소가 없습니다.</div>';

    $$('.place-toggle', $('#placesGrid')).forEach(btn => btn.addEventListener('click', () => {
      state.visited[btn.dataset.id] = !state.visited[btn.dataset.id];
      localStorage.setItem('mj-travel-visited', JSON.stringify(state.visited));
      renderPlaces(filter);
      renderDay();
      renderJournal();
    }));
  }

  function initPlaceFilters() {
    $$('.filter').forEach(btn => btn.addEventListener('click', () => {
      $$('.filter').forEach(b => b.classList.toggle('is-active', b === btn));
      renderPlaces(btn.dataset.filter);
    }));
  }

  function renderJournal() {
    $('#journalList').innerHTML = DATA.days.map(day => {
      const visitedNames = day.route.filter(s => state.visited[`${day.id}:${s.id}`]).map(s => s.name);
      const eaten = day.food.filter(p => state.visited[`place:${p.id}`]).map(p => p.name);
      const note = state.notes[day.id] || '';
      return `<article class="journal-entry">
        <div class="eyebrow">${esc(day.dateLabel)} · ${esc(day.city)}</div>
        <h3>${visitedNames.length ? `${visitedNames.length}곳 방문 기록` : '아직 현장 기록 없음'}</h3>
        <div class="badges">
          ${visitedNames.map(n => `<span class="badge visited">${esc(n)}</span>`).join('')}
          ${eaten.map(n => `<span class="badge cost">먹어봄 · ${esc(n)}</span>`).join('')}
        </div>
        <textarea data-note-day="${day.id}" placeholder="오늘 좋았던 곳, 별로였던 곳, 실제 이동시간, 먹은 메뉴, 다시 올지 등을 자유롭게 메모">${esc(note)}</textarea>
        <button type="button" class="action-btn save-note" data-day="${day.id}">메모 저장</button>
      </article>`;
    }).join('');
    $$('.save-note').forEach(btn => btn.addEventListener('click', () => {
      const ta = $(`textarea[data-note-day="${btn.dataset.day}"]`);
      state.notes[btn.dataset.day] = ta.value.trim();
      localStorage.setItem('mj-travel-notes', JSON.stringify(state.notes));
      btn.textContent = '저장됨';
      setTimeout(() => btn.textContent = '메모 저장', 1000);
    }));
  }

  function initInstall() {
    const btn = $('#installBtn');
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      state.deferredInstall = e;
      btn.hidden = false;
    });
    btn.addEventListener('click', async () => {
      if (!state.deferredInstall) return;
      state.deferredInstall.prompt();
      await state.deferredInstall.userChoice;
      state.deferredInstall = null;
      btn.hidden = true;
    });
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  $('#dataChecked').textContent = `정보 확인: ${DATA.meta.lastChecked} · ${DATA.meta.note}`;
  initHero();
  initTabs();
  initDaySelect();
  initPlaceFilters();
  renderDay();
  renderTrip();
  renderPlaces();
  renderJournal();
  initInstall();
})();
