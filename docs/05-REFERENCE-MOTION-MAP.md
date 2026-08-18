# 05 — REFERENCE MOTION MAP: BRAR'S MOTION GRAMMAR
**Document Status:** Complete (Phase 02)  
**Reference Target:** `https://www.brars.com/`  
**Client Implementation:** 411 BURGUER

---

## 1. Motion Philosophy & Easing Grammar

The reference experience uses **deliberate, high-impact physical choreography** rather than ubiquitous, cheap fade-up animations. Motion is used structurally to reinforce physical weight, culinary indulgence, and interactive responsiveness.

### Core Easing Curves & Timings
- **Primary Fluid Easing:** `cubic-bezier(0.2, 1, 0.2, 1)` (snappy entrance with graceful deceleration).
- **Secondary Snappy Easing:** `cubic-bezier(0.33, 0, 0, 1)` (used for interactive rollover borders and chip tabs).
- **Standard Transition Duration:** `400ms` for micro-interactions; `700ms–1000ms` for major scene reveals.
- **Continuous Marquee Speed:** `25s–35s` linear infinite loop.

---

## 2. Scene-by-Scene Motion Choreography

### 2.1 Fixed Header Pill Behavior
- **Entrance:** Slides down gently from `translateY(-100%)` to `translateY(0)` with a subtle fade over `600ms`.
- **Scroll Response:** Stays pinned at top center (`position: fixed; top: 16px; z-index: 100`).
- **Glassmorphism Backdrop:** `backdrop-filter: blur(12px)` activated on scroll over dynamic background colors.

### 2.2 Hero Scene Choreography
- **Background Aura:** Subtle slow pulsation / watermark rotation (`@keyframes slow-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }` at `60s linear infinite`).
- **Monumental Headline Reveal:** Masked clip-path or upward transform from `translateY(40px)` with high-contrast character tracking.
- **Product Foreground Cutout:** Enters with a gentle floating spring animation (`translateY(20px) scale(0.95)` to `translateY(0) scale(1)`), followed by an ambient idle levitation (`translateY(0)` to `translateY(-8px)` over `4s ease-in-out infinite alternate`).

### 2.3 Continuous Marquee Dividers
- **Loop Logic:** CSS-only `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`.
- **Interaction:** Smooth slow-down (`animation-play-state: paused` or halved speed) on user pointer hover.

### 2.4 Product Carousel & Category Filter Transitions
- **Category Chip Click:** Instant active indicator switch with smooth slide and cross-fade of carousel items (`opacity: 0; transform: scale(0.96)` to `opacity: 1; transform: scale(1)` over `400ms`).
- **Carousel Sliding:** Smooth horizontal translation with centered active card scaled up (`transform: scale(1.08)` and elevated z-index).

### 2.5 Kinetic Typography Attribute List
- **Hover State:** When hovering any term (e.g., `BLEND 140G ARTESANAL`), the text transitions smoothly from dark carbon (`#0E0E0E`) to golden brioche amber (`#DDA15E`) over `250ms`.
- **Floating Badge Reveal:** The corresponding decorative sticker badge on the left or right margin scales from `scale(0.8) opacity(0)` to `scale(1) opacity(1)` with a playful rotation (`rotate(-6deg)` to `rotate(4deg)`).

### 2.6 Layered Brand Story Parallax
- **Scroll Interaction:** As the user scrolls past the brand story, the central photo container and the overlapping text lines move at subtle differential speeds (slight vertical parallax of `10-15px`), heightening the sense of three-dimensional depth.

### 2.7 Horizontal Expandable Folder / Accordion
- **Interaction Logic:** Clicking or hovering an accordion panel triggers a smooth `flex-grow` or `width` interpolation (`flex: 1` to `flex: 4` or `120px` to `800px`) using `cubic-bezier(0.2, 1, 0.2, 1)` over `600ms`.
- **Content Reveal:** Content within the active panel fades in with a `150ms` stagger after expansion begins.

### 2.8 Interactive Pill Buttons & Links
- **Hover Effect:** Pill buttons subtly scale (`transform: scale(1.04)`), background shifts tone, and the trailing arrow icon `>` translates right by `4px` (`transform: translateX(4px)`).
- **Link Rollover:** Expanding bottom line animation using `::after` pseudo-element with `transform-origin: left` expanding from `scaleX(0)` to `scaleX(1)`.
