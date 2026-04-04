# BLU'IN 프로젝트 확정 의사결정

> 이 파일에는 변경 불가 또는 확정된 규칙만 기록합니다.
> 논의 중인 사항은 기록하지 않습니다.

---

## 🎨 디자인

| 항목 | 확정값 | 비고 |
|------|--------|------|
| 주색 | `#0a1628` (딥 네이비) | 배경, 다크 섹션 |
| 강조색 1 | `#0bc4c4` (청록, Teal) | CTA 버튼, 아이콘 강조 |
| 강조색 2 | `#c8a96e` (골드) | 프리미엄 CTA, 포인트 |
| 보조 블루 | `#1e90c8` | 링크, 강조 텍스트 |
| 글로우 | `#7dd3f8` | 헤더 강조, 다크 배경 텍스트 |
| 폰트 | Noto Sans KR (Google Fonts) | 전체 한/영 통일 |
| h1~h4 굵기 | font-weight: 700 | |
| 본문 굵기 | font-weight: 400 | |
| 전체 톤 | 프리미엄 / 글로벌 / 다이빙 플랫폼 | 감성형 아님, SaaS 스타일 |
| 카드 radius | 24px (일반), 40px (비주얼) | |
| 전환 easing | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | |

---

## 🛠 기술 스택

| 항목 | 확정값 | 비고 |
|------|--------|------|
| 파일 구조 | 단일 index.html | HTML + CSS + JS 통합 |
| 프레임워크 | 없음 (Vanilla) | React/Vue 사용 안 함 |
| 외부 의존성 | Google Fonts CDN만 허용 | JS 라이브러리 추가 금지 |
| 애니메이션 | IntersectionObserver + CSS transition | JS 라이브러리 없이 |
| 반응형 | 모바일 우선 필수 | 768px / 1024px 브레이크포인트 |
| 이미지 포맷 | Unsplash CDN URL 또는 로컬 파일 | WebP 선호 |

---

## 📐 섹션 구조 (확정 순서)

```
1. Navbar (fixed)
2. Hero
3. App Preview
4. Value Strip
5. Core Features
6. How It Works
7. Global Partners
8. Dive Destinations
9. Download App
10. Footer
```

---

## 🖼 이미지 규칙

| 항목 | 규칙 |
|------|------|
| 허용 소스 | Unsplash, Pexels, Pixabay, CC0 라이선스 |
| 금지 소스 | 유료 이미지, 출처 불명 이미지 |
| 적용 프로세스 | URL 목록 → 사용자 육안 확인 → 승인 후 적용 |
| 승인 전 반영 | 절대 금지 |
| URL 검증 | curl로 HTTP 200 확인 후 적용 |
| 로컬 파일 확인 | ls로 실제 파일명 확인 후 src 경로 설정 |

---

## 📝 콘텐츠 규칙

| 항목 | 확정값 |
|------|--------|
| 서비스명 | BLU'IN (블루인) |
| 슬로건 | Uniting the Waves of Diving |
| 앱 설명 | 스쿠버다이빙·프리다이빙 통합 플랫폼 |
| 정식 런칭 | 2026년 |
| Google Play | https://play.google.com/store/apps/details?id=com.app.bluin |
| App Store | 출시 예정 (비활성화 처리 유지) |
| 로고 경로 | `BLU'IN_Logo/PNG/PNG1.png` (로고), `BLU'IN_Logo/PNG/PNG2.png` (심볼) |

---

## 🏢 사업자 정보 (확정)

| 항목 | 값 |
|------|----|
| 상호명 | BLU'IN |
| 대표자 | 전재민, 이도현 |
| 사업자등록번호 | 486-47-01095 |
| 사업자 등록일 | 2025년 3월 31일 |
| 주소 | 서울특별시 강남구 강남대로112길 47, 2층 J350호 |

---

## 🌍 다이빙 지역 (현재 확정)

| 지역명 | 국가 | 제공 서비스 |
|--------|------|-------------|
| 보홀 | Philippines | 투어·리조트 예약 |
| 세부 | Philippines | 클래스·투어 |
| 발리 | Indonesia | 투어·리조트 |
| 제주도 | Korea | 버디·클래스·투어 |
| 다합 블루홀 | Egypt | 클래스·투어 |

---

## 🤝 파트너 유형 (확정)

- 강사 / 교육기관 (PADI·SSI·NAUI·AIDA)
- 다이빙 샵
- 투어 운영자
- 리조트
