(() => {
  const decisions = [
    {
      segment: 'Shanghai · Airport → City',
      status: '선택',
      choice: 'Maglev + Metro Pass · 55 CNY',
      reason: '22시간 레이오버지만 실제 시내 관광은 오후 한 번뿐이라 Line 2만 타는 것보다 시내 진입 시간을 줄이는 쪽을 우선.',
      considered: ['Metro Line 2 only', 'Taxi'],
      checked: '2026-08-27'
    },
    {
      segment: 'Shanghai · Yu Garden',
      status: '선택',
      choice: '정원 내부 제외 · Yuyuan Bazaar / 구곡교만',
      reason: '항공편 도착시간상 정식 정원 마지막 입장시간에 맞추기 어렵고, 18:30 페리 막차와 일몰 동선을 살리는 편이 여행 만족도가 높다고 판단.',
      considered: ['Yu Garden 내부 입장', '야간개장'],
      checked: '2026-08-27'
    },
    {
      segment: 'Shanghai · Huangpu River',
      status: '선택',
      choice: 'East Jinling Road → Dongchang Road Ferry',
      reason: '2 CNY로 이동 자체가 관광이 되고, Lujiazui 일몰과 Bund 야경을 한 동선으로 연결할 수 있음. Puxi 출발 18:30 종료가 핵심 제약.',
      considered: ['Sightseeing cruise', 'Metro로 강 건너기'],
      checked: '2026-08-27'
    },
    {
      segment: 'Tbilisi · Airport → City',
      status: '우선안',
      choice: '앱 호출 차량 / 택시',
      reason: '상하이에서 약 10시간 비행 후 19:00 도착, 수하물까지 있으므로 첫날은 체력과 시간을 우선. 337번 버스는 비용 절감용 백업.',
      considered: ['Bus #337 · 1 GEL · 06:59–22:59'],
      checked: '2026-08-27'
    },
    {
      segment: 'Tbilisi · Old Town',
      status: '선택',
      choice: 'Rike Park → Cable Car → Narikala → 도보 하산',
      reason: '2.5 GEL 케이블카로 먼저 고도를 올린 뒤 Mother of Georgia와 Abanotubani 방향으로 내려오면 오르막을 크게 줄일 수 있음.',
      considered: ['처음부터 도보 등반'],
      checked: '2026-08-27'
    },
    {
      segment: 'Georgia · Rental Car',
      status: '비교중',
      choice: '최종 업체 미확정',
      reason: '가격, 보험 범위, 차량 상태와 장거리 로드트립 적합성을 같이 보고 결정. Hertz는 전체 가격이 높을 가능성이 커 우선순위가 낮아짐.',
      considered: ['Klook · Dacia Logan', 'Toyota Yaris · OK Mobility', 'QCar Mobility', 'Hertz + SuperCover'],
      checked: '2026-08-27'
    },
    {
      segment: 'Turkey · Sep 17–27',
      status: '확정',
      choice: 'Istanbul Airport rental · Automatic Renault Clio or equivalent',
      reason: '터키 구간은 야간버스 피로를 피하고 자유로운 이동을 위해 렌터카 우선. 무제한 주행거리 조건.',
      considered: ['Night bus', '대중교통 중심', '편도 렌터카'],
      extra: '현재 확인된 예약 총액 약 ₩561,389 · Sep 17–27',
      checked: '2026-08-27'
    },
    {
      segment: 'Later Route · Caucasus / Balkans',
      status: '보류',
      choice: 'Georgia 중심으로 이후 구간 계속 조정',
      reason: '조지아는 반드시 포함. Armenia 육로 연결과 Bulgaria 등 Balkans 확장을 검토했고, 전체 이동거리·10월 기온·짐 무게를 함께 고려해야 함.',
      considered: ['Turkey → Armenia → Georgia', 'Turkey → Balkans → Georgia', 'Georgia 이후 UAE / Asia → Brisbane'],
      checked: '2026-08-27'
    }
  ];

  function escapeHtml(value = '') {
    return String(value).replace(/[&<>\"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[ch]));
  }

  const tripView = document.getElementById('tripView');
  if (!tripView) return;

  const section = document.createElement('section');
  section.innerHTML = `
    <div class="section-head compact">
      <div>
        <div class="eyebrow">DECISION LOG</div>
        <h2>고민했던 선택 · 결정 이유</h2>
      </div>
    </div>
    <div class="cards">
      ${decisions.map(d => `
        <article class="place-card">
          <div class="status-row">
            <span class="status planned">${escapeHtml(d.status)}</span>
            <span class="type">${escapeHtml(d.segment)}</span>
          </div>
          <h3>${escapeHtml(d.choice)}</h3>
          <p>${escapeHtml(d.reason)}</p>
          ${d.extra ? `<p style="margin-top:8px;color:var(--ink);font-weight:650">${escapeHtml(d.extra)}</p>` : ''}
          <div class="badges">
            ${d.considered.map(x => `<span class="badge">검토 · ${escapeHtml(x)}</span>`).join('')}
          </div>
          <div style="margin-top:10px;font-size:11px;color:var(--muted)">마지막 확인 ${escapeHtml(d.checked)}</div>
        </article>
      `).join('')}
    </div>`;
  tripView.appendChild(section);
})();
