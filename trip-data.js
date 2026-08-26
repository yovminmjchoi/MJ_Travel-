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
    }
  ],
  sources: [
    { label: "Shanghai Metro · Maglev + Metro Pass", url: "https://english.shanghai.gov.cn/en-Individuals-Transportation-Metro/20260813/f257d5c373db4da3a8bde717b9f46b27.html" },
    { label: "Shanghai Ferry · routes, hours, fare", url: "https://english.shanghai.gov.cn/en-Individuals-Transportation-Ferry/20260813/474fc35ff5a54d51aeeb68b2cb981088.html" },
    { label: "Tbilisi Airport · Bus 337", url: "https://tbilisiairport.com/en-EN/passenger-guide/to-from-the-airport/page/bus" },
    { label: "Tbilisi Transport Company · fares", url: "https://ttc.com.ge/index.php/en/tariff/10" }
  ]
};
