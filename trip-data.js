window.MJ_TRIP_DATA = {
  meta: {
    title: "MJ Journey 2026",
    lastChecked: "2026-08-27",
    note: "가격·운영시간은 확인일 기준. 출발 직전 공식 채널 재확인.",
    privacy: "Public 저장소에는 여권번호, 카드번호, 예약번호 등 민감정보를 저장하지 않음."
  },
  flights: [
    { date: "2026-09-01", from: "ICN T1", to: "PVG T1", flight: "FM3068 / MU5042 운항", depart: "12:55", arrive: "14:15", status: "확정" },
    { date: "2026-09-02", from: "PVG T1", to: "TBS", flight: "MU285", depart: "12:50", arrive: "19:00", status: "확정" }
  ],
  days: [
    {
      id: "2026-09-01",
      dateLabel: "SEP 01 · TUE",
      city: "Shanghai",
      country: "China",
      title: "Shanghai Layover",
      subtitle: "예원상성 → 황푸강 페리 → 루자쭈이 일몰 → 난징동루 → 와이탄 야경",
      alert: {
        title: "오늘의 핵심 제약",
        text: "East Jinling Road의 Dongjin Line은 Puxi 기준 18:30 종료. 숙소 도착이 17:00 이후면 예원상성을 줄이고 페리부터 이동."
      },
      quick: [
        { label: "FLIGHT", value: "ICN 12:55 → PVG 14:15", sub: "PVG Terminal 1" },
        { label: "STAY", value: "No.1 International Youth Hostel", sub: "9F, No.59 Yan'an East Rd · Yu Garden 인근" },
        { label: "TRANSPORT PASS", value: "Maglev + Metro 55 CNY", sub: "편도 Maglev + 24시간 Metro · 2026-06 확인" },
        { label: "FERRY", value: "2 CNY", sub: "East Jinling → Dongchang · 보행자" }
      ],
      route: [
        { id: "pvg", order: 1, time: "14:15", name: "Shanghai Pudong Airport T1", type: "airport", lat: 31.1443, lng: 121.8083, duration: "입국·수하물 약 60–75분 예상", note: "입국심사 후 Maglev 표 또는 Maglev+Metro Pass 구매.", transportToNext: "Maglev + Metro", travelTimeToNext: "약 50–65분", costToNext: "55 CNY 패스 추천", mapQuery: "Shanghai Pudong International Airport Terminal 1" },
        { id: "hostel", order: 2, time: "16:20", name: "No.1 International Youth Hostel", type: "stay", lat: 31.2297, lng: 121.4906, duration: "20분", note: "짐만 놓고 바로 출발. 9F, No.59 Yan'an East Road. 예원과 와이탄 사이 위치.", transportToNext: "도보", travelTimeToNext: "약 5–10분", costToNext: "0 CNY", mapQuery: "No. 59 Yan'an East Road Huangpu Shanghai" },
        { id: "yuyuan", order: 3, time: "16:45", name: "Yuyuan Bazaar · 九曲桥", type: "sight", lat: 31.2270, lng: 121.4922, duration: "35분", note: "정식 Yu Garden 내부가 아니라 상성·구곡교 위주. 정원은 늦은 도착 때문에 일정에서 제외.", transportToNext: "도보", travelTimeToNext: "약 15분", costToNext: "0 CNY", mapQuery: "Yuyuan Bazaar Shanghai" },
        { id: "jinling-ferry", order: 4, time: "17:45", name: "East Jinling Road Ferry Pier", type: "transport", lat: 31.2299, lng: 121.4983, duration: "약 10–15분", note: "Dongjin Line. Puxi 출발 운영 07:15–18:30. 보행자 2 CNY. 일몰 전 강을 건너는 핵심 구간.", transportToNext: "황푸강 페리", travelTimeToNext: "약 10분", costToNext: "2 CNY", mapQuery: "East Jinling Road Ferry Pier Shanghai" },
        { id: "dongchang", order: 5, time: "18:00", name: "Dongchang Road Ferry Pier · Lujiazui", type: "sight", lat: 31.2358, lng: 121.5071, duration: "45분", note: "강변에서 일몰과 푸시 스카이라인 감상. 전망대 입장보다 거리·강변에 집중.", transportToNext: "Metro Line 2", travelTimeToNext: "약 20–25분", costToNext: "24h Metro Pass 포함", mapQuery: "Dongchang Road Ferry Pier Shanghai" },
        { id: "nanjing", order: 6, time: "19:10", name: "East Nanjing Road", type: "sight", lat: 31.2370, lng: 121.4815, duration: "저녁 포함 약 90분", note: "저녁 식사 후 보행거리에서 와이탄 방향으로 천천히 이동.", transportToNext: "도보", travelTimeToNext: "약 15–20분", costToNext: "0 CNY", mapQuery: "East Nanjing Road Pedestrian Street Shanghai" },
        { id: "bund", order: 7, time: "20:40", name: "The Bund", type: "sight", lat: 31.2400, lng: 121.4906, duration: "약 70분", note: "오늘 상하이 일정의 메인. 푸동 야경과 역사 건축을 같이 보는 구간.", transportToNext: "도보", travelTimeToNext: "약 10–15분", costToNext: "0 CNY", mapQuery: "The Bund Shanghai" },
        { id: "hostel-return", order: 8, time: "22:10", name: "Hostel Return", type: "stay", lat: 31.2297, lng: 121.4906, duration: "취침", note: "다음날 장거리 비행. 야식보다 수면 우선.", mapQuery: "No. 59 Yan'an East Road Huangpu Shanghai" }
      ],
      food: [
        { id: "sh-laofandian", name: "Shanghai Lao Fan Dian · 上海老饭店", kind: "food", status: "planned", area: "Yuyuan", hours: "10:00–22:00 확인", price: "중간", note: "상하이식 요리를 먹고 싶을 때 우선 후보. 예원 동선 안쪽이라 이동 손실이 적음.", mapQuery: "Shanghai Lao Fan Dian Fuyou Road 242", sourceNote: "2026-08 business listing 확인" },
        { id: "sh-nanxiang", name: "Nanxiang Mantou Dian · 南翔馒头店", kind: "food", status: "planned", area: "Yuyuan Bazaar", hours: "07:00–21:00 확인", price: "중간", note: "유명 샤오롱바오. 관광객이 많아 줄이 길면 과감히 패스. 이번 일정은 페리 시간이 더 중요.", mapQuery: "Nanxiang Mantou Dian Yuyuan Shanghai", sourceNote: "2026-08 운영시간 확인" },
        { id: "sh-arabica", name: "% Arabica Shanghai Yu Garden", kind: "cafe", status: "planned", area: "Yuyuan", hours: "대체로 07:30–22:00대", price: "카페", note: "커피가 필요할 때만. 관광 시간 침범하면 제외.", mapQuery: "% Arabica Shanghai Yu Garden", sourceNote: "2026-08 business listing 확인" }
      ]
    },
    {
      id: "2026-09-02",
      dateLabel: "SEP 02 · WED",
      city: "Shanghai → Tbilisi",
      country: "China / Georgia",
      title: "Flight Day + First Night",
      subtitle: "상하이에서 일찍 공항 → MU285 → 트빌리시 체크인 → 늦은 저녁",
      alert: {
        title: "오늘은 관광 추가 금지",
        text: "12:50 국제선 출발. 09:30 전후 PVG T1 도착을 목표로 하고 트빌리시 도착 후에는 식사와 짧은 산책만."
      },
      quick: [
        { label: "FLIGHT", value: "MU285 · 12:50 → 19:00", sub: "PVG T1 → TBS" },
        { label: "AIRPORT DEPART", value: "숙소 08:00 출발", sub: "PVG 09:30 전후 목표" },
        { label: "TBS BUS", value: "#337 · 1 GEL", sub: "06:59–22:59 · 90분 환승 포함" },
        { label: "FIRST NIGHT", value: "체크인 + Georgian dinner", sub: "Narikala/온천은 다음날" }
      ],
      route: [
        { id: "sh-checkout", order: 1, time: "07:50", name: "Hostel Check-out", type: "stay", lat: 31.2297, lng: 121.4906, duration: "10분", note: "08:00 숙소 출발.", transportToNext: "Metro", travelTimeToNext: "약 80–100분 여유 잡기", costToNext: "전날 24h pass 유효 여부 확인", mapQuery: "No. 59 Yan'an East Road Huangpu Shanghai" },
        { id: "pvg-depart", order: 2, time: "09:30", name: "PVG Terminal 1", type: "airport", lat: 31.1443, lng: 121.8083, duration: "체크인·출국·보안", note: "국제선 수속을 위해 약 3시간 전 도착 목표.", transportToNext: "MU285", travelTimeToNext: "약 10시간 10분", costToNext: "항공권 결제 완료", mapQuery: "Shanghai Pudong International Airport Terminal 1" },
        { id: "tbs", order: 3, time: "19:00", name: "Tbilisi International Airport", type: "airport", lat: 41.6692, lng: 44.9547, duration: "입국·수하물 약 60분 예상", note: "현금이 필요하면 소액만. 시내 이동은 앱 차량/택시 또는 337번 버스 비교.", transportToNext: "앱 차량/택시 추천", travelTimeToNext: "약 20–30분", costToNext: "현장 앱 요금 확인 · 337번은 1 GEL", mapQuery: "Tbilisi International Airport" },
        { id: "tbilisi-stay", order: 4, time: "20:45", name: "Tbilisi Stay · 숙소 위치 입력 필요", type: "stay", lat: 41.6938, lng: 44.8015, duration: "30분", note: "현재는 Freedom Square를 임시 기준점으로 사용. 숙소 확정 후 정확한 핀과 공항 이동비 업데이트.", transportToNext: "도보", travelTimeToNext: "숙소 위치에 따라 결정", costToNext: "-", mapQuery: "Freedom Square Tbilisi" },
        { id: "first-dinner", order: 5, time: "21:15", name: "Old Tbilisi · First Dinner", type: "food", lat: 41.6903, lng: 44.8080, duration: "60–75분", note: "첫날은 조지아 음식 한 끼와 짧은 구시가지 산책 정도만.", transportToNext: "도보/앱 차량", travelTimeToNext: "숙소 기준", costToNext: "식비 현장", mapQuery: "Old Tbilisi" },
        { id: "sleep", order: 6, time: "23:15", name: "Return & Sleep", type: "stay", lat: 41.6938, lng: 44.8015, duration: "취침", note: "다음날 Old Tbilisi full day.", mapQuery: "Freedom Square Tbilisi" }
      ],
      food: [
        { id: "tb-shemomechama", name: "Shemomechama Old Tbilisi", kind: "food", status: "planned", area: "Old Tbilisi", hours: "운영시간 당일 확인", price: "중간", note: "도착 첫날 숙소가 Old Town이라면 동선 좋은 조지아식 후보.", mapQuery: "Shemomechama Old Tbilisi Samgebro 9", sourceNote: "2026-08 business listing 확인" },
        { id: "tb-maemani", name: "Maemani", kind: "food", status: "planned", area: "Old Tbilisi", hours: "14:00–02:30 확인", price: "중간", note: "늦은 도착에도 이용하기 쉬운 후보. 첫날 식당 결정은 실제 숙소 위치 기준으로 최종 선택.", mapQuery: "Maemani Bambis Rigi 12 Tbilisi", sourceNote: "2026-08 business listing 확인" },
        { id: "tb-khinkali", name: "Khinkali Collection", kind: "food", status: "planned", area: "Freedom Square", hours: "13:00–23:30 확인", price: "중간", note: "Freedom Square 쪽 숙소라면 편리. 여러 종류의 힌칼리 후보.", mapQuery: "Khinkali Collection Pushkin 19 Tbilisi", sourceNote: "2026-08 business listing 확인" }
      ]
    },
    {
      id: "2026-09-03",
      dateLabel: "SEP 03 · THU",
      city: "Tbilisi",
      country: "Georgia",
      title: "Old Tbilisi Full Day",
      subtitle: "Freedom Square → Bridge of Peace → Rike → Narikala → Mother of Georgia → Abanotubani",
      alert: {
        title: "동선 원칙",
        text: "Rike Park에서 케이블카로 먼저 올라간 뒤 산 위에서 Abanotubani 방향으로 내려오면 오르막을 줄일 수 있음."
      },
      quick: [
        { label: "PUBLIC TRANSPORT", value: "1 GEL / 90 min", sub: "Metro · bus · 일부 municipal transport" },
        { label: "RIKE–NARIKALA", value: "2.5 GEL one-way", sub: "MetroMoney card 2 GEL · 2026-08 확인" },
        { label: "NARIKALA", value: "무료", sub: "복원 공사로 일부 접근 제한 가능" },
        { label: "PACE", value: "오전 Old Town + 오후 휴식", sub: "온천은 컨디션 보고" }
      ],
      route: [
        { id: "freedom", order: 1, time: "09:30", name: "Freedom Square", type: "sight", lat: 41.6938, lng: 44.8015, duration: "약 30분", note: "첫 Full Day 시작점. Kote Abkhazi 방향으로 구시가지 진입.", transportToNext: "도보", travelTimeToNext: "약 12–15분", costToNext: "0 GEL", mapQuery: "Freedom Square Tbilisi" },
        { id: "peace", order: 2, time: "10:30", name: "Bridge of Peace", type: "sight", lat: 41.6930, lng: 44.8088, duration: "20분", note: "강과 Old Tbilisi를 보는 연결 지점.", transportToNext: "도보", travelTimeToNext: "약 3분", costToNext: "0 GEL", mapQuery: "Bridge of Peace Tbilisi" },
        { id: "rike", order: 3, time: "11:00", name: "Rike Park", type: "sight", lat: 41.6934, lng: 44.8103, duration: "20분", note: "케이블카 하부역. 공원 입장 무료.", transportToNext: "Rike–Narikala Cable Car", travelTimeToNext: "탑승 2–3분 + 대기", costToNext: "2.5 GEL one-way", mapQuery: "Rike Park Tbilisi" },
        { id: "narikala", order: 4, time: "11:20", name: "Narikala Hill", type: "sight", lat: 41.6880, lng: 44.8089, duration: "약 50분", note: "요새 자체보다 전망이 핵심. 복원 상황에 따라 내부 접근 제한 가능. 야외 전망 포인트는 무료.", transportToNext: "도보", travelTimeToNext: "약 10분", costToNext: "0 GEL", mapQuery: "Narikala Fortress Tbilisi" },
        { id: "mother", order: 5, time: "12:10", name: "Mother of Georgia · Kartlis Deda", type: "sight", lat: 41.6880, lng: 44.8048, duration: "30분", note: "시내 파노라마. 이후 Abanotubani 쪽으로 걸어서 하산.", transportToNext: "도보 하산", travelTimeToNext: "약 25–35분", costToNext: "0 GEL", mapQuery: "Mother of Georgia Tbilisi" },
        { id: "abanotubani", order: 6, time: "13:10", name: "Abanotubani Sulfur Bath District", type: "sight", lat: 41.6878, lng: 44.8112, duration: "30분", note: "돔 형태 목욕탕 지구와 골목 산책. 실제 온천은 오후에 별도 예약 여부 결정.", transportToNext: "도보", travelTimeToNext: "약 5분", costToNext: "0 GEL", mapQuery: "Abanotubani Tbilisi" },
        { id: "waterfall", order: 7, time: "13:40", name: "Leghvtakhevi Waterfall", type: "sight", lat: 41.6866, lng: 44.8099, duration: "30분", note: "도심 안 협곡 끝의 짧은 산책 포인트.", transportToNext: "도보", travelTimeToNext: "점심 식당에 따라 5–20분", costToNext: "0 GEL", mapQuery: "Leghvtakhevi Waterfall Tbilisi" },
        { id: "lunch", order: 8, time: "14:15", name: "Late Georgian Lunch", type: "food", lat: 41.6925, lng: 44.8035, duration: "약 75분", note: "아래 맛집 후보 중 실제 동선과 대기시간 보고 선택.", transportToNext: "도보/앱 차량", travelTimeToNext: "숙소 기준", costToNext: "식비 현장", mapQuery: "Old Tbilisi restaurants" },
        { id: "bath-or-cafe", order: 9, time: "16:30", name: "Sulfur Bath or Cafe · Wine", type: "experience", lat: 41.6878, lng: 44.8112, duration: "1–2시간", note: "컨디션에 따라 유황온천 또는 쉬는 시간. 첫날부터 과하게 채우지 않기.", mapQuery: "Abanotubani sulfur bath Tbilisi" }
      ],
      food: [
        { id: "tb-salobie", name: "Salobie Bia", kind: "food", status: "planned", area: "Rustaveli", hours: "12:00–23:00 확인", price: "중간", note: "현대적으로 정리된 조지아 로컬 요리 후보. 첫날 점심/저녁 모두 고려 가능.", mapQuery: "Salobie Bia 17 Shota Rustaveli Tbilisi", sourceNote: "2026-08 business listing 확인" },
        { id: "tb-mapshalia", name: "Mapshalia", kind: "food", status: "planned", area: "Aghmashenebeli", hours: "09:00–22:00 확인", price: "저렴", note: "저렴한 로컬 조지아·Mingrelian 계열 음식 후보. Old Town 중심에서는 이동이 필요.", mapQuery: "Mapshalia 137 Davit Aghmashenebeli Tbilisi", sourceNote: "2026-08 business listing 확인" },
        { id: "tb-shavilomi", name: "Shavi Lomi", kind: "food", status: "planned", area: "Kvlividze", hours: "12:00 이후 · 요일별 종료시간 상이", price: "중간", note: "조지아 요리를 조금 더 분위기 있게 먹을 후보. 일정과 맞으면 저녁용.", mapQuery: "Shavi Lomi 30 Kvlividze Tbilisi", sourceNote: "2026-08 business listing 확인" }
      ]
    },
    {
      id: "2026-09-04",
      dateLabel: "SEP 04 · FRI",
      city: "Kakheti",
      country: "Georgia",
      title: "Kakheti Winery Day",
      subtitle: "Tbilisi → Tsinandali → Sighnaghi 와이너리 → Tbilisi 복귀",
      alert: {
        title: "당일 투어 구간",
        text: "Tbilisi 왕복 당일 투어라 이동시간이 김. 차량/투어와 시음 예약을 출발 전 확정하고, 시음이 있으니 운전은 투어·기사에게 맡기는 편이 안전."
      },
      quick: [
        { label: "BASE", value: "Tbilisi 숙소 유지", sub: "짐은 트빌리시에 두고 당일 왕복" },
        { label: "TOUR", value: "당일 투어 / 전세 차량", sub: "요금·픽업시간 예약 시 확인" },
        { label: "TASTING", value: "와이너리 시음", sub: "시음 비용 현장 결제" },
        { label: "RETURN", value: "저녁 Tbilisi 복귀", sub: "다음날 Kazbegi 이동 대비 일찍" }
      ],
      route: [
        { id: "kk-depart", order: 1, time: "09:00", name: "Tbilisi 출발", type: "stay", lat: 41.6938, lng: 44.8015, duration: "-", note: "Freedom Square 임시 기준점(숙소 확정 시 교체). Kakheti 방향으로 출발.", transportToNext: "투어/전세 차량", travelTimeToNext: "약 1시간 40분", costToNext: "투어 요금 확인", mapQuery: "Freedom Square Tbilisi" },
        { id: "kk-tsinandali", order: 2, time: "10:50", name: "Tsinandali Estate", type: "sight", lat: 41.8964, lng: 45.5697, duration: "약 90분", note: "정원·저택과 와이너리. 첫 시음 포인트.", transportToNext: "차량", travelTimeToNext: "약 1시간", costToNext: "-", mapQuery: "Tsinandali Estate Kakheti" },
        { id: "kk-sighnaghi", order: 3, time: "13:00", name: "Sighnaghi", type: "sight", lat: 41.6175, lng: 45.9210, duration: "약 3시간", note: "성벽 마을과 전망. 점심·와인과 함께 천천히.", transportToNext: "차량", travelTimeToNext: "약 2시간", costToNext: "-", mapQuery: "Sighnaghi Kakheti Georgia" },
        { id: "kk-return", order: 4, time: "18:30", name: "Tbilisi 복귀", type: "stay", lat: 41.6938, lng: 44.8015, duration: "취침", note: "다음날 Kazbegi 마슈룻카 대비 짐 정리·이른 취침.", mapQuery: "Freedom Square Tbilisi" }
      ],
      food: [
        { id: "kk-pheasants", name: "Pheasant's Tears", kind: "food", status: "planned", area: "Sighnaghi", hours: "현지 확인", price: "중간", note: "내추럴 와인으로 유명한 Sighnaghi 와이너리 레스토랑. 예약 권장. 실제 운영은 방문일 재확인.", mapQuery: "Pheasant's Tears Sighnaghi", sourceNote: "일반 참고 · 방문일 재확인" }
      ]
    },
    {
      id: "2026-09-05",
      dateLabel: "SEP 05 · SAT",
      city: "Stepantsminda (Kazbegi)",
      country: "Georgia",
      title: "Georgian Military Road → Kazbegi",
      subtitle: "Didube 마슈룻카 → Ananuri → Gudauri 전망 → Stepantsminda",
      alert: {
        title: "이동 중심의 날",
        text: "Didube에서 Kazbegi행 마슈룻카는 좌석이 먼저 차면 출발. 출발시간이 유동적이니 오전 일찍 station 도착. 산악도로 약 3–4시간."
      },
      quick: [
        { label: "TRANSPORT", value: "마슈룻카 (Didube 출발)", sub: "요금 ≈ 현장 확인 · 좌석 선착" },
        { label: "TIME", value: "약 3–4시간", sub: "포토스톱 포함 시 더 걸림" },
        { label: "STAY", value: "Stepantsminda 숙박", sub: "Gergeti 전망 방향 우선" },
        { label: "ALTITUDE", value: "고도 ~1,740m", sub: "첫날 무리한 고산활동 자제" }
      ],
      route: [
        { id: "kz-didube", order: 1, time: "08:30", name: "Didube Marshrutka Station", type: "transport", lat: 41.7306, lng: 44.7726, duration: "탑승·출발 대기", note: "Kazbegi/Stepantsminda 방면 마슈룻카 승차. 출발 전 좌석·요금 확인.", transportToNext: "마슈룻카", travelTimeToNext: "약 1시간 30분", costToNext: "현장", mapQuery: "Didube Bus Station Tbilisi" },
        { id: "kz-ananuri", order: 2, time: "10:00", name: "Ananuri Fortress", type: "sight", lat: 42.1631, lng: 44.7030, duration: "약 20분", note: "Zhinvali 저수지 옆 성채. 기사가 서면 짧게 포토스톱.", transportToNext: "마슈룻카", travelTimeToNext: "약 1시간", costToNext: "-", mapQuery: "Ananuri Fortress Georgia" },
        { id: "kz-gudauri", order: 3, time: "11:20", name: "Gudauri Viewpoint", type: "sight", lat: 42.4780, lng: 44.4810, duration: "약 15분", note: "러시아–조지아 우호 파노라마 전망대 부근. 고개 넘어가는 하이라이트.", transportToNext: "마슈룻카", travelTimeToNext: "약 1시간", costToNext: "-", mapQuery: "Russia Georgia Friendship Monument Gudauri" },
        { id: "kz-town", order: 4, time: "12:40", name: "Stepantsminda 도착", type: "stay", lat: 42.6572, lng: 44.6415, duration: "체크인·휴식", note: "짐 풀고 마을·전망 산책. Gergeti Trinity는 컨디션 보고 오후 또는 9/07 오전으로 조정.", mapQuery: "Stepantsminda Georgia" }
      ],
      food: [
        { id: "kz-rooms", name: "Rooms Hotel Kazbegi Restaurant", kind: "food", status: "planned", area: "Stepantsminda", hours: "현지 확인", price: "중상", note: "Kazbegi 전망으로 유명한 호텔 레스토랑. 전망 좋은 한 끼 후보. 방문일 운영 재확인.", mapQuery: "Rooms Hotel Kazbegi", sourceNote: "일반 참고 · 방문일 재확인" }
      ]
    },
    {
      id: "2026-09-06",
      dateLabel: "SEP 06 · SUN",
      city: "Juta / Chaukhi",
      country: "Georgia",
      title: "Juta–Chaukhi Day Trek",
      subtitle: "Kazbegi → Juta 셔틀 → Chaukhi 초원 트레킹 → Kazbegi 복귀",
      alert: {
        title: "고산 트레킹",
        text: "Juta까지 왕복 교통(4x4/택시)을 현지에서 섭외. 날씨 변화가 크니 방수·방한과 여유 시간 확보. 무리하면 Chaukhi 초원까지만."
      },
      quick: [
        { label: "TRANSFER", value: "Kazbegi ↔ Juta 4x4/택시", sub: "왕복 요금 현지 흥정·확인" },
        { label: "TREK", value: "Juta → Chaukhi 초원", sub: "왕복 난이도 중 · 체력 배분" },
        { label: "GEAR", value: "방수·방한·물·간식", sub: "산악 날씨 급변 대비" },
        { label: "BASE", value: "Kazbegi 숙박 유지", sub: "저녁 마을 복귀" }
      ],
      route: [
        { id: "ju-transfer", order: 1, time: "09:00", name: "Kazbegi → Juta 이동", type: "transport", lat: 42.6572, lng: 44.6415, duration: "약 40–60분", note: "비포장 구간이라 4x4 권장. 픽업·복귀 시간 기사와 약속.", transportToNext: "4x4/택시", travelTimeToNext: "약 40–60분", costToNext: "왕복 현지 확인", mapQuery: "Stepantsminda Georgia" },
        { id: "ju-village", order: 2, time: "10:00", name: "Juta Village 트레일헤드", type: "sight", lat: 42.6070, lng: 44.7150, duration: "출발 준비", note: "Juta 마을(대략 좌표)에서 Chaukhi 방향 트레킹 시작.", transportToNext: "도보", travelTimeToNext: "약 2–3시간(편도)", costToNext: "0 GEL", mapQuery: "Juta village Kazbegi Georgia" },
        { id: "ju-chaukhi", order: 3, time: "12:30", name: "Chaukhi 초원·전망", type: "sight", lat: 42.6180, lng: 44.7450, duration: "휴식·전망", note: "Chaukhi 암봉을 마주하는 초원(대략 좌표). 여기까지를 반환점으로.", transportToNext: "도보 하산", travelTimeToNext: "약 2시간", costToNext: "0 GEL", mapQuery: "Chaukhi massif Juta Georgia" },
        { id: "ju-back", order: 4, time: "17:30", name: "Kazbegi 복귀", type: "stay", lat: 42.6572, lng: 44.6415, duration: "취침", note: "약속한 차량으로 복귀. 다음날 Tbilisi 이동.", mapQuery: "Stepantsminda Georgia" }
      ],
      food: []
    },
    {
      id: "2026-09-07",
      dateLabel: "SEP 07 · MON",
      city: "Kazbegi → Tbilisi",
      country: "Georgia",
      title: "Gergeti Morning + Return",
      subtitle: "Gergeti Trinity 오전 → 마슈룻카로 Tbilisi 복귀",
      alert: {
        title: "오전 활동 후 이동",
        text: "Gergeti Trinity는 도보 왕복 시 시간이 걸리니 여유가 없으면 4x4 이용. 오후 마슈룻카는 좌석·출발시간을 미리 확인하고 그 전에 하산 완료."
      },
      quick: [
        { label: "MORNING", value: "Gergeti Trinity", sub: "도보 왕복 또는 4x4" },
        { label: "TRANSPORT", value: "마슈룻카 → Tbilisi", sub: "Kazbegi 정류장 · 요금 현장" },
        { label: "TIME", value: "약 3–4시간", sub: "복귀 이동" },
        { label: "STAY", value: "Tbilisi 숙박", sub: "다음날 Mestia 장거리 대비" }
      ],
      route: [
        { id: "gg-trinity", order: 1, time: "08:30", name: "Gergeti Trinity Church", type: "sight", lat: 42.6625, lng: 44.6203, duration: "약 2–3시간(왕복)", note: "Kazbegi의 상징. 도보 등반은 시간·체력 소요, 4x4 옵션도 있음.", transportToNext: "도보/4x4로 마을", travelTimeToNext: "약 40–90분", costToNext: "4x4 시 현지", mapQuery: "Gergeti Trinity Church" },
        { id: "gg-station", order: 2, time: "12:00", name: "Stepantsminda 마슈룻카", type: "transport", lat: 42.6572, lng: 44.6415, duration: "탑승 대기", note: "Tbilisi(Didube)행 마슈룻카. 좌석·출발시간 확인.", transportToNext: "마슈룻카", travelTimeToNext: "약 3–3.5시간", costToNext: "현장", mapQuery: "Stepantsminda Georgia" },
        { id: "gg-tbilisi", order: 3, time: "15:30", name: "Tbilisi 복귀", type: "stay", lat: 41.6938, lng: 44.8015, duration: "휴식", note: "Freedom Square 임시 기준점. 짐 재정비·세탁 등 다음 Svaneti 구간 준비.", mapQuery: "Freedom Square Tbilisi" }
      ],
      food: []
    },
    {
      id: "2026-09-08",
      dateLabel: "SEP 08 · TUE",
      city: "Tbilisi → Mestia",
      country: "Georgia",
      title: "Long Transfer to Svaneti",
      subtitle: "직행 마슈룻카로 Mestia (train 연계는 backup)",
      alert: {
        title: "장거리 이동일",
        text: "Tbilisi → Mestia 직행 마슈룻카는 약 8–9시간. 이른 아침 출발·좌석 예약 권장. Zugdidi 경유 대안(야간열차+마슈룻카)은 backup."
      },
      quick: [
        { label: "TRANSPORT", value: "직행 마슈룻카", sub: "≈ 8–9시간 · 좌석 예약 권장" },
        { label: "BACKUP", value: "Zugdidi 경유", sub: "야간열차 + Zugdidi–Mestia 마슈룻카" },
        { label: "DEPART", value: "이른 아침 출발", sub: "당일 도착 위해" },
        { label: "STAY", value: "Mestia 숙박", sub: "트레킹 준비·짐 정리" }
      ],
      route: [
        { id: "me-depart", order: 1, time: "07:00", name: "Tbilisi 출발", type: "transport", lat: 41.7306, lng: 44.7726, duration: "탑승·출발", note: "Mestia 직행 마슈룻카 승차(예약 좌석 확인). 장거리라 화장실·식사 타이밍 계획.", transportToNext: "마슈룻카", travelTimeToNext: "약 8–9시간", costToNext: "예약 요금 확인", mapQuery: "Didube Bus Station Tbilisi" },
        { id: "me-zugdidi", order: 2, time: "13:30", name: "Zugdidi 부근 경유", type: "transport", lat: 42.5088, lng: 41.8709, duration: "휴게", note: "서부 저지대에서 산악도로로 전환하는 지점(대략). 직행은 정차만.", transportToNext: "마슈룻카", travelTimeToNext: "약 2.5–3시간", costToNext: "-", mapQuery: "Zugdidi Georgia" },
        { id: "me-arrive", order: 3, time: "16:00", name: "Mestia 도착", type: "stay", lat: 43.0451, lng: 42.7289, duration: "체크인·휴식", note: "Svaneti 중심지. 트레킹 짐·날씨·마을 안내소 확인.", mapQuery: "Mestia Svaneti Georgia" }
      ],
      food: [
        { id: "me-laila", name: "Cafe Laila", kind: "food", status: "planned", area: "Mestia 중앙광장", hours: "현지 확인", price: "중간", note: "Mestia 중앙광장의 대표 카페·레스토랑. 트레킹 전후 한 끼 후보. 방문일 운영 재확인.", mapQuery: "Cafe Laila Mestia", sourceNote: "일반 참고 · 방문일 재확인" }
      ]
    },
    {
      id: "2026-09-09",
      dateLabel: "SEP 09 · WED",
      city: "Mestia → Zhabeshi → Adishi",
      country: "Georgia",
      title: "Svaneti Trek Day 1",
      subtitle: "Zhabeshi 이동 → Zhabeshi–Adishi 도보 트레킹",
      alert: {
        title: "Mestia–Ushguli 트레킹 시작",
        text: "Zhabeshi까지 로컬 이동 후 Adishi로 트레킹. 마을 게스트하우스는 사전 예약이 안전. 짐은 최소화하고 필요시 짐 운반(말/차량) 옵션 확인."
      },
      quick: [
        { label: "TRANSFER", value: "Mestia → Zhabeshi", sub: "로컬 차량 · 요금 현지" },
        { label: "TREK", value: "Zhabeshi → Adishi", sub: "숲·능선 구간 · 반나절+" },
        { label: "STAY", value: "Adishi 게스트하우스", sub: "예약 권장 · 현금 준비" },
        { label: "CASH", value: "현금 필수", sub: "산간 마을 카드 어려움" }
      ],
      route: [
        { id: "sv1-mestia", order: 1, time: "08:30", name: "Mestia 출발", type: "stay", lat: 43.0451, lng: 42.7289, duration: "-", note: "Zhabeshi까지 로컬 차량 이동으로 트레킹 시작점 단축.", transportToNext: "로컬 차량", travelTimeToNext: "약 40–60분", costToNext: "현지 확인", mapQuery: "Mestia Svaneti Georgia" },
        { id: "sv1-zhabeshi", order: 2, time: "09:30", name: "Zhabeshi", type: "sight", lat: 43.0230, lng: 42.9010, duration: "출발 준비", note: "트레킹 시작 마을(대략 좌표). Adishi 방향으로 도보.", transportToNext: "도보", travelTimeToNext: "약 5–7시간", costToNext: "0 GEL", mapQuery: "Zhabeshi Svaneti Georgia" },
        { id: "sv1-adishi", order: 3, time: "16:00", name: "Adishi 도착", type: "stay", lat: 42.9520, lng: 43.0470, duration: "숙박", note: "중세 탑이 남은 산간 마을(대략 좌표). 게스트하우스 저녁·휴식.", mapQuery: "Adishi Svaneti Georgia" }
      ],
      food: []
    },
    {
      id: "2026-09-10",
      dateLabel: "SEP 10 · THU",
      city: "Adishi → Iprali",
      country: "Georgia",
      title: "Svaneti Trek Day 2",
      subtitle: "Adishi 강 도하 → Chkhunderi Pass → Iprali",
      alert: {
        title: "강 도하 구간",
        text: "Adishi 빙하천 도하가 하이라이트이자 난관. 아침 일찍 수량 적을 때 건너는 편이 안전하고, 말 도하 서비스(유료)를 이용하기도 함. Chkhunderi Pass 이후 하산."
      },
      quick: [
        { label: "TREK", value: "Adishi → Iprali", sub: "패스 넘는 종일 구간" },
        { label: "RIVER", value: "빙하천 도하", sub: "이른 시간 · 말 도하 옵션" },
        { label: "PASS", value: "Chkhunderi Pass", sub: "최고 고도 구간" },
        { label: "STAY", value: "Iprali 게스트하우스", sub: "예약 권장" }
      ],
      route: [
        { id: "sv2-adishi", order: 1, time: "08:00", name: "Adishi 출발", type: "stay", lat: 42.9520, lng: 43.0470, duration: "-", note: "이른 출발로 빙하천 도하 시간 확보.", transportToNext: "도보", travelTimeToNext: "약 1–1.5시간", costToNext: "0 GEL", mapQuery: "Adishi Svaneti Georgia" },
        { id: "sv2-river", order: 2, time: "09:30", name: "Adishi 강 도하 지점", type: "transport", lat: 42.9450, lng: 43.0900, duration: "도하", note: "수심·유속 확인 후 도보 또는 말 도하(대략 좌표).", transportToNext: "도보", travelTimeToNext: "약 3–4시간", costToNext: "말 도하 시 현지", mapQuery: "Adishi river crossing Svaneti" },
        { id: "sv2-iprali", order: 3, time: "16:00", name: "Iprali 도착", type: "stay", lat: 42.9300, lng: 43.1600, duration: "숙박", note: "Chkhunderi Pass 이후 하산해 도착(대략 좌표). 다음날 Ushguli.", mapQuery: "Iprali Svaneti Georgia" }
      ],
      food: []
    },
    {
      id: "2026-09-11",
      dateLabel: "SEP 11 · FRI",
      city: "Iprali → Ushguli → Mestia",
      country: "Georgia",
      title: "Svaneti Trek Day 3 → Ushguli",
      subtitle: "Iprali → Ushguli 트레킹 → 4WD로 Mestia 복귀",
      alert: {
        title: "트레킹 마무리 + 이동",
        text: "Ushguli는 유럽 최고지대 상주 마을 중 하나로 Shkhara 전망이 핵심. 도착 후 Mestia까지는 4WD로 복귀(길이 험해 시간 여유). 4WD는 미리 섭외."
      },
      quick: [
        { label: "TREK", value: "Iprali → Ushguli", sub: "비교적 완만 · 반나절" },
        { label: "VIEW", value: "Ushguli · Shkhara", sub: "탑 마을 + 빙하 전망" },
        { label: "RETURN", value: "Ushguli → Mestia 4WD", sub: "약 2–3시간 · 요금 현지" },
        { label: "STAY", value: "Mestia 숙박", sub: "트레킹 종료 후 휴식" }
      ],
      route: [
        { id: "sv3-iprali", order: 1, time: "08:30", name: "Iprali 출발", type: "stay", lat: 42.9300, lng: 43.1600, duration: "-", note: "Ushguli 방향으로 마지막 트레킹.", transportToNext: "도보", travelTimeToNext: "약 3–4시간", costToNext: "0 GEL", mapQuery: "Iprali Svaneti Georgia" },
        { id: "sv3-ushguli", order: 2, time: "12:30", name: "Ushguli", type: "sight", lat: 42.9175, lng: 43.0247, duration: "약 2시간", note: "UNESCO 탑 마을. 점심·전망 후 Mestia행 4WD 탑승.", transportToNext: "4WD", travelTimeToNext: "약 2–3시간", costToNext: "현지 섭외", mapQuery: "Ushguli Svaneti Georgia" },
        { id: "sv3-mestia", order: 3, time: "16:30", name: "Mestia 복귀", type: "stay", lat: 43.0451, lng: 42.7289, duration: "숙박", note: "트레킹 종료. 다음날 날씨 버퍼/휴식.", mapQuery: "Mestia Svaneti Georgia" }
      ],
      food: []
    },
    {
      id: "2026-09-12",
      dateLabel: "SEP 12 · SAT",
      city: "Mestia",
      country: "Georgia",
      title: "Weather Buffer + Rest",
      subtitle: "예비일 · 컨디션 보고 Chalaadi Glacier 또는 휴식",
      alert: {
        title: "유연하게 쓰는 예비일",
        text: "앞선 트레킹/이동 지연을 흡수하는 버퍼. 컨디션이 좋으면 Chalaadi Glacier·Koruldi Lakes 등 가벼운 옵션, 아니면 마을에서 휴식·정비."
      },
      quick: [
        { label: "MODE", value: "버퍼 / 휴식", sub: "무리한 일정 금지" },
        { label: "OPTION A", value: "Chalaadi Glacier", sub: "완만한 반나절 하이킹" },
        { label: "OPTION B", value: "마을·박물관", sub: "Svaneti 역사 박물관 등" },
        { label: "NEXT", value: "다음날 Kutaisi", sub: "이동 대비 짐 정리" }
      ],
      route: [
        { id: "bf-town", order: 1, time: "10:00", name: "Mestia 마을", type: "stay", lat: 43.0451, lng: 42.7289, duration: "자유", note: "휴식 또는 아래 옵션 중 선택. 세탁·보급·짐 재정비.", transportToNext: "도보/차량", travelTimeToNext: "옵션에 따라", costToNext: "-", mapQuery: "Mestia Svaneti Georgia" },
        { id: "bf-chalaadi", order: 2, time: "11:00", name: "Chalaadi Glacier (옵션)", type: "sight", lat: 43.1030, lng: 42.7570, duration: "약 3–4시간(왕복)", note: "컨디션 좋을 때만. 완만하지만 왕복 시간 필요(대략 좌표).", mapQuery: "Chalaadi Glacier Mestia" }
      ],
      food: []
    },
    {
      id: "2026-09-13",
      dateLabel: "SEP 13 · SUN",
      city: "Mestia → Kutaisi",
      country: "Georgia",
      title: "Down to Kutaisi",
      subtitle: "마슈룻카로 Kutaisi 이동",
      alert: {
        title: "이동일",
        text: "Mestia → Kutaisi 마슈룻카 약 4–5시간. 좌석·출발시간 확인. 도착 후 여유가 있으면 Bagrati 성당·시내 산책."
      },
      quick: [
        { label: "TRANSPORT", value: "마슈룻카 → Kutaisi", sub: "약 4–5시간 · 요금 현장" },
        { label: "STAY", value: "Kutaisi 숙박", sub: "서부 교통 허브" },
        { label: "OPTION", value: "Bagrati / 시내", sub: "도착 후 여유 시" },
        { label: "NEXT", value: "다음날 Batumi", sub: "해안 이동" }
      ],
      route: [
        { id: "ku-mestia", order: 1, time: "09:00", name: "Mestia 출발", type: "transport", lat: 43.0451, lng: 42.7289, duration: "탑승", note: "Kutaisi행 마슈룻카. 좌석·출발 확인.", transportToNext: "마슈룻카", travelTimeToNext: "약 4–5시간", costToNext: "현장", mapQuery: "Mestia Svaneti Georgia" },
        { id: "ku-arrive", order: 2, time: "14:00", name: "Kutaisi 도착", type: "stay", lat: 42.2662, lng: 42.7180, duration: "체크인", note: "짐 풀고 시내·성당. 다음날 Batumi 대비 휴식.", transportToNext: "도보/시내", travelTimeToNext: "-", costToNext: "-", mapQuery: "Kutaisi Georgia" },
        { id: "ku-bagrati", order: 3, time: "16:30", name: "Bagrati Cathedral (옵션)", type: "sight", lat: 42.2780, lng: 42.7060, duration: "약 40분", note: "언덕 위 성당·시내 전망. 여유 있을 때.", mapQuery: "Bagrati Cathedral Kutaisi" }
      ],
      food: [
        { id: "ku-palaty", name: "Palaty", kind: "food", status: "planned", area: "Kutaisi 시내", hours: "현지 확인", price: "중간", note: "Kutaisi 시내의 분위기 있는 레스토랑·카페 후보. 방문일 운영 재확인.", mapQuery: "Palaty Kutaisi", sourceNote: "일반 참고 · 방문일 재확인" }
      ]
    },
    {
      id: "2026-09-14",
      dateLabel: "SEP 14 · MON",
      city: "Batumi",
      country: "Georgia",
      title: "Black Sea · Batumi",
      subtitle: "Kutaisi → Batumi 이동 → 해안·구시가",
      alert: {
        title: "해안 도시의 여유",
        text: "Kutaisi → Batumi 마슈룻카 약 2–3시간. 오후엔 Boulevard·Piazza·구시가 산책. 다음날 국경 통과가 있으니 여권·현금·짐 미리 점검."
      },
      quick: [
        { label: "TRANSPORT", value: "마슈룻카 → Batumi", sub: "약 2–3시간 · 요금 현장" },
        { label: "STAY", value: "Batumi 숙박", sub: "구시가/해안 접근성" },
        { label: "SEE", value: "Boulevard · Piazza", sub: "해안 산책·야경" },
        { label: "PREP", value: "국경 통과 준비", sub: "여권·현금·짐 점검" }
      ],
      route: [
        { id: "ba-kutaisi", order: 1, time: "09:30", name: "Kutaisi 출발", type: "transport", lat: 42.2662, lng: 42.7180, duration: "탑승", note: "Batumi행 마슈룻카.", transportToNext: "마슈룻카", travelTimeToNext: "약 2–3시간", costToNext: "현장", mapQuery: "Kutaisi Georgia" },
        { id: "ba-arrive", order: 2, time: "12:30", name: "Batumi 도착", type: "stay", lat: 41.6461, lng: 41.6367, duration: "체크인", note: "짐 풀고 해안 방향으로 이동.", transportToNext: "도보", travelTimeToNext: "-", costToNext: "-", mapQuery: "Batumi Georgia" },
        { id: "ba-boulevard", order: 3, time: "16:00", name: "Batumi Boulevard", type: "sight", lat: 41.6519, lng: 41.6336, duration: "저녁 포함", note: "해변 산책로·분수·조형물. 저녁 식사와 야경.", mapQuery: "Batumi Boulevard" }
      ],
      food: []
    },
    {
      id: "2026-09-15",
      dateLabel: "SEP 15 · TUE",
      city: "Batumi → Trabzon",
      country: "Georgia / Türkiye",
      title: "Border Crossing to Türkiye",
      subtitle: "Sarpi 국경 도보 통과 → Hopa → Trabzon",
      alert: {
        title: "국경·시차 주의",
        text: "Sarpi에서 도보로 국경 통과(여권·출입국 확인). 터키는 조지아보다 1시간 느림(-1h). 국경 이후 Hopa 환승, Trabzon까지 로컬버스/돌무쉬 요금·시간 현장 확인."
      },
      quick: [
        { label: "BORDER", value: "Sarpi 도보 통과", sub: "여권 · 출입국 심사" },
        { label: "TIME ZONE", value: "터키 -1시간", sub: "시계 조정 잊지 않기" },
        { label: "TRANSPORT", value: "Hopa 환승 → Trabzon", sub: "로컬버스/돌무쉬 · 요금 현장" },
        { label: "STAY", value: "Trabzon 숙박", sub: "흑해 연안 도시" }
      ],
      route: [
        { id: "tr-batumi", order: 1, time: "08:30", name: "Batumi 출발", type: "transport", lat: 41.6461, lng: 41.6367, duration: "-", note: "Sarpi 국경까지 로컬버스/마슈룻카.", transportToNext: "로컬버스/마슈룻카", travelTimeToNext: "약 30–40분", costToNext: "현장", mapQuery: "Batumi Georgia" },
        { id: "tr-sarpi", order: 2, time: "09:30", name: "Sarpi Border", type: "transport", lat: 41.5205, lng: 41.5490, duration: "통과 30–60분", note: "도보로 조지아 출국·터키 입국. 대기시간 변동 큼. 여기서 시계 -1h.", transportToNext: "돌무쉬/버스", travelTimeToNext: "약 20–30분", costToNext: "현장", mapQuery: "Sarpi border Georgia Turkey" },
        { id: "tr-hopa", order: 3, time: "10:30", name: "Hopa 환승", type: "transport", lat: 41.3855, lng: 41.4260, duration: "환승", note: "Trabzon행 로컬버스/돌무쉬로 환승(현지 시각 기준).", transportToNext: "로컬버스", travelTimeToNext: "약 3–3.5시간", costToNext: "현장", mapQuery: "Hopa Turkey" },
        { id: "tr-trabzon", order: 4, time: "13:30", name: "Trabzon 도착", type: "stay", lat: 41.0027, lng: 39.7168, duration: "체크인·시내", note: "현지 시각 기준 도착. 하기아 소피아·광장 등 시내 산책.", mapQuery: "Trabzon Turkey" }
      ],
      food: []
    },
    {
      id: "2026-09-16",
      dateLabel: "SEP 16 · WED",
      city: "Trabzon → Ordu → 야간버스",
      country: "Türkiye",
      title: "Coast Day + Night Bus",
      subtitle: "Trabzon → Ordu 관광·이동 → 밤 야간버스로 Istanbul",
      alert: {
        title: "예외적 야간버스 구간",
        text: "9/17 17:00 Istanbul 공항 약속을 맞추기 위한 예외 이동. 원래 야간버스는 비선호지만 이 구간은 야간버스로 확정. 좌석은 미리 예약하고, 익일 아침 Istanbul 도착 후 공항 이동시간까지 계산."
      },
      quick: [
        { label: "DAY", value: "Trabzon → Ordu 방면", sub: "흑해 연안 관광·이동" },
        { label: "NIGHT BUS", value: "Ordu/연안 → Istanbul", sub: "예약 필수 · 밤 출발" },
        { label: "ARRIVE", value: "익일 오전 Istanbul", sub: "9/17 공항 약속 대비" },
        { label: "NOTE", value: "짐·귀중품 관리", sub: "야간 이동 주의" }
      ],
      route: [
        { id: "nb-trabzon", order: 1, time: "10:00", name: "Trabzon (Boztepe 등)", type: "sight", lat: 41.0027, lng: 39.7168, duration: "오전", note: "Boztepe 전망 등 오전 관광 후 서쪽으로 이동.", transportToNext: "로컬버스", travelTimeToNext: "약 2–2.5시간", costToNext: "현장", mapQuery: "Boztepe Trabzon" },
        { id: "nb-ordu", order: 2, time: "13:00", name: "Ordu", type: "sight", lat: 40.9839, lng: 37.8764, duration: "오후", note: "Boztepe 케이블카(터키 Ordu) 등 연안 도시 관광. 야간버스 출발 전까지.", transportToNext: "야간버스", travelTimeToNext: "약 10–12시간(야간)", costToNext: "예약 요금 확인", mapQuery: "Ordu Turkey" },
        { id: "nb-bus", order: 3, time: "21:00", name: "야간버스 탑승", type: "transport", lat: 40.9839, lng: 37.8764, duration: "야간 이동", note: "Istanbul행 야간버스. 익일 오전 도착 예정. 좌석 예약 확인.", transportToNext: "야간버스", travelTimeToNext: "익일 오전", costToNext: "-", mapQuery: "Ordu bus terminal" }
      ],
      food: []
    },
    {
      id: "2026-09-17",
      dateLabel: "SEP 17 · THU",
      city: "Istanbul",
      country: "Türkiye",
      title: "Arrive Istanbul · Rental Pickup",
      subtitle: "야간버스 도착 → 17:00 어머니 합류 → 18:00 IST 렌터카 픽업 → 터키 로드트립 시작",
      alert: {
        title: "터키 로드트립 시작점 (세부 루트 미확정)",
        text: "9/17~27 렌터카 기간은 확정, 10일간 도시별 day-by-day 루트는 아직 미확정이라 placeholder. MJ가 터키 루트를 확정하면 그때 상세 일정을 추가. 9/27 18:00 렌터카 반납."
      },
      quick: [
        { label: "MEET", value: "17:00 어머니 합류", sub: "Istanbul Airport" },
        { label: "RENTAL", value: "18:00 픽업 (확정)", sub: "Automatic Renault Clio or equiv." },
        { label: "TERMS", value: "무제한 주행거리", sub: "예약 총액 ≈ ₩561,389" },
        { label: "RETURN", value: "09-27 18:00 반납", sub: "IST Airport" }
      ],
      route: [
        { id: "ist-arrive", order: 1, time: "08:00", name: "Istanbul 도착 (야간버스)", type: "transport", lat: 41.0082, lng: 28.9784, duration: "오전 여유", note: "야간버스 도착. 공항 이동 전까지 휴식·정비. (도착 터미널 확정 시 좌표 업데이트)", transportToNext: "공항 이동", travelTimeToNext: "터미널·교통 따라", costToNext: "현장", mapQuery: "Istanbul" },
        { id: "ist-meet", order: 2, time: "17:00", name: "IST Airport · 어머니 합류", type: "airport", lat: 41.2753, lng: 28.7519, duration: "합류", note: "Istanbul Airport에서 어머니와 만남.", transportToNext: "도보(공항 내)", travelTimeToNext: "-", costToNext: "-", mapQuery: "Istanbul Airport" },
        { id: "ist-rental", order: 3, time: "18:00", name: "렌터카 픽업", type: "experience", lat: 41.2753, lng: 28.7519, duration: "수령·출발", note: "예약 확정. 차량 상태·연료·보험 확인 후 터키 로드트립 시작(세부 루트 추후).", mapQuery: "Istanbul Airport car rental" }
      ],
      food: []
    }
  ],
  sources: [
    { label: "Shanghai Metro · Maglev + Metro Pass", url: "https://english.shanghai.gov.cn/en-Individuals-Transportation-Metro/20260813/f257d5c373db4da3a8bde717b9f46b27.html" },
    { label: "Shanghai Ferry · routes, hours, fare", url: "https://english.shanghai.gov.cn/en-Individuals-Transportation-Ferry/20260813/474fc35ff5a54d51aeeb68b2cb981088.html" },
    { label: "Tbilisi Airport · Bus 337", url: "https://tbilisiairport.com/en-EN/passenger-guide/to-from-the-airport/page/bus" },
    { label: "Tbilisi Transport Company · fares", url: "https://ttc.com.ge/index.php/en/tariff/10" }
  ]
};
