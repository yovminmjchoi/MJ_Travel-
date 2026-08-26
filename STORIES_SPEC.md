# MJ Travel · STORIES / CONTEXT layer draft

## Product idea

STORIES는 링크 보관함이 아니라 **현재 일정에 자동으로 붙는 문화·역사 context layer**다.

목표:
- 여행 전: 장소를 이해하기 위한 짧은 맥락
- 이동 중: 이동시간에 맞는 영상/팟캐스트/읽을거리
- 현장: 1~3분짜리 `LOOK FOR THIS` / `WHY THIS MATTERS`
- 방문 후: journal reflection prompt

전체 라이브러리는 `MORE → STORIES`에서 보되, 실제 사용은 `TODAY`, attraction detail, route day에 자동 노출한다.

## UX hierarchy

### TODAY
`UNDERSTAND TODAY`
- QUICK · 3–5 MIN
- BEST · 10–25 MIN
- DEEP DIVE · 30 MIN+

### Timing tags
- `BEFORE_VISIT`
- `ON_THE_ROAD`
- `AT_THE_PLACE`
- `AFTER_VISIT`
- `DEEP_DIVE`

### Format tags
- `WATCH`
- `READ`
- `LISTEN`
- `EXPLORE`

### On-site micro context

`LOOK FOR THIS`
- 현장에서 실제로 찾아볼 요소 1~3개

`WHY THIS MATTERS`
- 위키식 설명 대신 1~3문장 핵심 맥락

`MEET THE PEOPLE`
- 해당 장소와 연결된 인물

## Data architecture

일정 데이터와 분리:
- `trip-data.js` = itinerary / transport / stays / booking states
- `stories-data.js` = cultural/history/media content

날짜가 아니라 `placeIds`, `themeIds`, `countryIds`로 연결해서 일정 변경 시 콘텐츠가 자동으로 따라가게 한다.

Suggested object:

```js
{
  id: 'svaneti-towers-intro',
  title: 'Why Svaneti has its towers',
  contentType: 'VIDEO',
  stage: 'BEFORE_VISIT',
  durationMin: 14,
  placeIds: ['mestia', 'ushguli'],
  themeIds: ['mountains-isolation', 'medieval-georgia'],
  country: 'Georgia',
  language: 'EN',
  subtitles: true,
  url: '',
  sourceName: '',
  sourceType: 'PUBLIC_BROADCASTER',
  whyRecommended: '',
  contextSummary: '',
  lookForThis: [],
  checkedAt: '',
  verification: 'SOURCE_VERIFIED',
  priority: 'BEST'
}
```

## Source / verification rules

Primary rule: **재미 + 일정 직접 연결 + 신뢰성 + 실제 접근 가능성**.

우선 소스:
1. official museum / heritage / UNESCO / archaeological institute
2. public broadcaster / reputable documentary outlet
3. university / specialist educator / established history podcast
4. strong long-form journalism / respected travel-history writing
5. recent high-quality creator content when factual quality is acceptable

모든 외부 콘텐츠는 최소:
- `sourceName`
- `url`
- `checkedAt`
- `verification`
- `whyRecommended`

를 갖는다.

AI 기억만으로 링크/제목을 확정하지 않는다. 실제 URL과 현재 접근 가능성을 확인한 뒤 `SOURCE_VERIFIED`로 올린다.

## Curation rule

한 장소에 콘텐츠를 많이 쌓지 않는다.

기본 3-tier:
- `QUICK`: GPT가 신뢰 가능한 출처를 바탕으로 만든 3~5분 context
- `BEST`: 하나만 보면 되는 10~25분 콘텐츠
- `DEEP_DIVE`: 긴 다큐/팟캐스트/책/장문

추가 콘텐츠는 `Show more` 아래로 숨긴다.

## Cross-trip themes

국가별 분류 외에 여행 전체를 관통하는 theme을 만든다.

초기 후보:
- `EMPIRES_AND_BORDERS` — Roman / Byzantine / Ottoman / Persian influence
- `TRADE_ROUTES` — Caucasus / Anatolia / Mediterranean / North Africa
- `WINE_FOOD_RITUAL` — Qvevri / Anatolian food / Maghreb / Nile cultures
- `CITIES_ON_CITIES` — Istanbul / Ephesus / Carthage / Luxor 등 겹쳐진 도시
- `MOUNTAINS_AND_ISOLATION` — Svaneti / Caucasus
- `PEOPLE_WHO_CHANGED_A_PLACE` — Hannibal / Constantine / Hatshepsut / Ramesses II 등

## Pilot scope

처음부터 전 여행지를 채우지 않는다.

### Phase 1 · Georgia pilot (~15 items total)
- Tbilisi
- Kakheti / qvevri wine
- Kazbegi / Georgian Military Highway
- Juta / Chaukhi
- Svaneti / towers
- Adishi / mountain isolation
- Ushguli

### Phase 2 · Turkey
- Istanbul / Constantinople / Ottoman layers
- Cappadocia / Byzantine cave culture
- Ephesus / Roman Asia Minor
- Hierapolis / Pamukkale

### Phase 3 · Tunisia
- Carthage / Punic Wars
- Roman Africa / El Jem
- Kairouan / Ifriqiya
- southern oasis / Berber context

### Phase 4 · Egypt
- Giza / Old Kingdom
- Aswan / Nubia
- Luxor / New Kingdom
- people-centered cards: Hatshepsut, Akhenaten, Tutankhamun, Ramesses II

## AI integration later

When AI editor/backend exists, user queries can use itinerary + stories DB:

- “내일 Carthage 가는데 자기 전에 20분 볼 것 골라줘”
- “버스 1시간 타는데 이집트 이야기 들을 거 줘”
- “오늘 Ushguli에서 뭘 알고 보면 좋아?”

Recommendation should use:
- next place/day
- available travel time
- format preference
- content duration
- already consumed items

AI should recommend from verified STORIES data before open-ended generation.

## Journal connection

After visit, optionally show one short reflection prompt tied to consumed context.

Example:
`AFTER VISIT · Carthage`
“실제로 보고 나니 사전에 상상한 Carthage와 달랐던 점은?”

Response is stored in Journal, not in baseline stories data.

## Implementation note

This layer should not block the current Travel OS schema migration. It can be built independently as `stories-data.js` and later connected by IDs once place/entity IDs stabilize.
