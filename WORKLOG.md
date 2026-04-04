# BLU'IN 작업 로그

형식: `날짜 | 수정 파일 | 변경 요약`

---

## 2026-03-15

| 날짜 | 수정 파일 | 변경 요약 |
|------|-----------|-----------|
| 2026-03-15 | index.html | 전면 SaaS 스타일 개편 — 섹션 순서 재구성 (Hero → App Preview → Value Strip → Core Features → How It Works → Global Partners → Dive Destinations → Download App → Footer) |
| 2026-03-15 | index.html | 히어로 섹션: 2컬럼 레이아웃으로 변경, 우측 iPhone mockup CSS placeholder 추가 |
| 2026-03-15 | index.html | 히어로 제목 "Uniting the Waves of Diving"으로 변경, 설명 문구 교체 |
| 2026-03-15 | index.html | App Preview 섹션 신규 추가 — 딥 네이비 배경, CSS 폰 3개 (Home / Community / Booking) |
| 2026-03-15 | index.html | Value Strip 신규 추가 — 4개 카드 (Global Expansion Ready / 5 Core Experiences / One Platform / 2026 Launch), 기존 Stats 섹션 대체 |
| 2026-03-15 | index.html | Features 7개로 확장 — Community 신규 추가, 영문 기능명 적용 |
| 2026-03-15 | index.html | About 섹션 제거 (App Preview로 대체) |
| 2026-03-15 | index.html | 파트너 섹션 문구 교체 — 제목 "내 다이빙 비즈니스를 글로벌로 키우세요" |
| 2026-03-15 | index.html | 푸터 사업자 정보 추가 — 상호명/대표자/사업자등록번호/주소 |
| 2026-03-15 | index.html | 보홀 카드 이미지 교체 (photo-1578384910278-10a8bff71580, 200 검증 완료) |
| 2026-03-15 | index.html | 세부/발리/제주도 카드 이미지 교체 (각 URL 200 검증 완료) |
| 2026-03-15 | index.html | About 액센트 이미지: 로컬 파일 ./freediving.jpg.jpg 적용 |
| 2026-03-15 | index.html | 다합 블루홀 카드 이미지: 로컬 파일 ./bluehole.jpg.png 적용 |
| 2026-03-15 | index.html | 파트너 섹션 이미지 교체 (photo-1583212292454-1fe6229603b7, 200 검증 완료) |
| 2026-03-15 | index.html | 초기 구조 생성 — 단일 HTML 파일, 컬러 시스템, 폰트, 애니메이션, 반응형 |
| 2026-03-15 | CLAUDE.md | 프로젝트 규칙 작성 (이미지 규칙, 코딩 규칙, 토큰 절약 규칙) |
| 2026-03-15 | TODO.md | 작업 목록 파일 최초 생성 |
| 2026-03-15 | WORKLOG.md | 작업 로그 파일 최초 생성 |
| 2026-03-15 | NEXT_PROMPT.md | 다음 세션 프롬프트 파일 최초 생성 |
| 2026-03-15 | DECISIONS.md | 의사결정 기록 파일 최초 생성 |

## 2026-03-15 (세션 2)

| 날짜 | 수정 파일 | 변경 요약 |
|------|-----------|-----------|
| 2026-03-15 | index.html | 모바일 햄버거 메뉴 구현 — 768px 이하 `.hamburger` 버튼 + `.nav-drawer` 드로어 (CSS + HTML + JS) |
| 2026-03-15 | index.html | App Preview 섹션 2컬럼 레이아웃 변경 — 좌: 텍스트+feature list, 우: 폰 3개 |
| 2026-03-15 | index.html | Community feature 카드 내용 강화 — "Diving Community"로 명칭 변경, 설명 구체화 |
| 2026-03-15 | index.html | Partner 타입 카드 영문명 변경 — Dive Shops / Dive Resorts / Instructors & Schools / Tour Operators |
| 2026-03-15 | index.html | Destinations Coming Soon 카드 3개 추가 — 몰디브 / 팔라우 / 오키나와 (CSS placeholder) |
| 2026-03-15 | TODO.md | 완료 작업 상태 업데이트 |
| 2026-03-15 | WORKLOG.md | 세션 2 작업 기록 |
| 2026-03-15 | NEXT_PROMPT.md | 다음 세션 프롬프트 업데이트 |

---

## 작업 이력 메모

### 이미지 교체 워크플로 (확립)
1. curl로 URL HTTP 200 확인 후 적용
2. 로컬 파일은 ls로 실제 파일명 확인 후 src 경로 맞춤
3. 이미지 변경 시 반드시 URL 목록을 먼저 사용자에게 보여주고 승인 후 적용

### 주의사항
- 로컬 이미지 파일명에 확장자 중복 있음: `bluehole.jpg.png`, `freediving.jpg.jpg`
  → index.html에 실제 파일명 그대로 사용 중 (변경 금지)
