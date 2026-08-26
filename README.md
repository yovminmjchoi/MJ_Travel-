# MJ Travel

MJ의 장기 여행을 위한 모바일 중심 개인 여행 대시보드 + 여행 저널.

## 핵심 목적

- 날짜별 실제 동선을 지도와 번호 핀으로 확인
- 장소별 체류시간, 다음 이동수단, 예상 이동시간, 비용 기록
- 맛집/카페/가볼 곳 후보와 실제 방문 여부 분리
- 현장에서 `방문 완료` 체크
- 날짜별 짧은 메모를 남겨 나중에 여행기로 발전
- 항공/숙소/렌터카 등 여행 운영 정보를 한 화면에서 확인

## 현재 입력된 일정

- 2026-09-01 Shanghai layover
- 2026-09-02 Shanghai → Tbilisi / Tbilisi first night
- 2026-09-03 Old Tbilisi full day

## 데이터 원칙

`trip-data.js`가 여행 데이터의 기준 파일입니다.

각 날짜에는 다음 구조를 유지합니다.

- `route`: 실제 이동 순서
- `quick`: 항공, 숙소, 교통 등 오늘 필요한 핵심 정보
- `food`: 맛집/카페 후보
- `alert`: 막차, 입장시간 등 일정 제약

가격·운영시간은 `meta.lastChecked` 날짜 기준이며 출발 직전 공식 채널로 다시 확인합니다.

## 방문 기록

현재 방문 완료 상태와 여행 메모는 브라우저 `localStorage`에 저장됩니다. 따라서 같은 휴대폰/브라우저에서는 유지되지만 다른 기기와 자동 동기화되지는 않습니다. 추후 필요하면 Supabase 등으로 로그인/동기화를 추가합니다.

## Privacy

이 저장소는 public입니다. 다음 정보는 코드에 넣지 않습니다.

- 여권번호
- 카드번호
- 전체 e-ticket/PNR
- 개인 신분증 정보
- 민감한 예약 확인 정보

공개해도 되는 항공편 번호, 호텔명, 관광 일정, 교통 정보만 저장합니다.

## Deployment

`.github/workflows/deploy.yml`이 `main` 업데이트 시 GitHub Pages에 자동 배포하도록 구성되어 있습니다.

GitHub repository → Settings → Pages → Build and deployment → Source에서 `GitHub Actions`를 한 번 선택하면 됩니다.

예상 Pages 주소:

`https://yovminmjchoi.github.io/MJ_Travel-/`

## Current public sources

- Shanghai Municipal Government / Shanghai Metro: Maglev and Metro fares
- Shanghai Municipal Government / Shanghai Ferry: Dongjin Line hours and ferry fare
- Tbilisi International Airport: Bus 337 timetable and fare
- Tbilisi Transport Company: municipal fare and Rike–Narikala cable car fare

Restaurant candidates are planning references, not endorsements. Opening hours and closures should be checked again on the day of visit.
