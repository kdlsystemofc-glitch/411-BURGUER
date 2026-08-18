# 08 — MOTION & INTERACTION FIDELITY IMPLEMENTATION
**Document Status:** Complete (Phase 06)  
**Reference Target:** `https://www.brars.com/`  
**Client Project:** 411 BURGUER  
**Implementation Files:** `style.css`, `app.js`, `index.html`

---

## 1. Motion Philosophy & Architecture

The motion system for **411 BURGUER** reproduces the exact **Motion Grammar** of the approved reference (`brars.com`). Rather than applying generic fade-ups or distracting decorative animations, every micro-interaction and transition is purposeful, physical, and tied to culinary appetite appeal, structural hierarchy, and tactile responsiveness.

### Core Easing Curves & Tokens
- **Fluid Exponential Easing:** `var(--ease-smooth) = cubic-bezier(0.2, 1, 0.2, 1)` — used for natural deceleration on cards, drawer openings, tab expansions, and scroll reveals.
- **Snappy Tactile Easing:** `var(--ease-snappy) = cubic-bezier(0.33, 0, 0, 1)` — used for button arrows, hover elevations, and filter chip selections.
- **Continuous Marquee Physics:** Pure GPU-accelerated horizontal `@keyframes marqueeScroll` running at `26s` and `30s` with smooth pause on hover.

---

## 2. Interaction-by-Interaction Technical Matrix

### Interaction 1: Floating Header Pill Morphing & Pinning
- **Trigger:** Window scroll event (`scrollY > 35px`).
- **Target:** `.header-pill`.
- **Property:** `background-color`, `backdrop-filter`, `border-color`, `box-shadow`.
- **Duration:** `350ms`.
- **Easing:** `cubic-bezier(0.2, 1, 0.2, 1)`.
- **Scroll Relationship:** Sticky pinned at top center. Transitions from solid dark carbon to an ultra-slick frosted glass capsule (`backdrop-filter: blur(16px); background: rgba(26, 22, 23, 0.88)`).
- **Responsive Behavior:** Compact 48px height on mobile with preserved icon CTAs and slide-out full-screen drawer navigation.

---

### Interaction 2: Hero 3D Centerpiece Entrance & Ambient Idle Physics
- **Trigger:** Page load / DOM ready + user idle state.
- **Target:** `.hero-petal-backdrop`, `.hero-3d-img`, `.floating-sticker-badge`, `.sparkle-diamond`.
- **Property:**
  - *Petal Mandala:* Continuous slow rotation `transform: translate(-50%, -50%) rotate(360deg)` over `120s linear infinite`.
  - *Burger 3D Cutout:* Ambient vertical levitation `translateY(0)` to `translateY(-10px)` over `3.6s ease-in-out infinite alternate`.
  - *Sticker Badge:* Organic rotation wobble `-14deg` to `-10deg` with spring overshoot.
  - *Sparkle Diamonds:* Staggered pulsing opacity (`0.6` to `1.0`) and scale (`0.9` to `1.15`).
- **Duration:** Continuous loops (3.5s to 120s).
- **Easing:** `ease-in-out` / `linear`.
- **Scroll Relationship:** Contained in the hero viewport; unaffected by document stretch.
- **Responsive Behavior:** Proportional scale down on mobile with sparkles preserved on main axes.

---

### Interaction 3: Hero Mouse Parallax Physics (Desktop Only)
- **Trigger:** Pointer movement over `.hero-section`.
- **Target:** `.hero-centerpiece-wrapper`, `.floating-sticker-badge`.
- **Property:** `transform: translate3d(x, y, 0)`.
- **Duration:** Continuous requestAnimationFrame with lerp damping (`factor: 0.08`).
- **Easing:** Linear interpolation.
- **Scroll Relationship:** Viewport-relative mouse coordinates.
- **Responsive Behavior:** Automatically disabled on touch screens and viewports `< 1024px` to eliminate listener overhead.

---

### Interaction 4: Continuous Kinetic Marquees (Marquee 1 & Marquee 2)
- **Trigger:** Continuous infinite loop + pointer hover.
- **Target:** `.marquee-track`.
- **Property:** `transform: translateX(0)` to `translateX(-50%)`.
- **Duration:** `26s` (Marquee 1 - Lavender), `30s` (Marquee 2 - Tags).
- **Easing:** `linear`.
- **Scroll Relationship:** Autonomous continuous motion across full viewport width.
- **Responsive Behavior:** Hardware-accelerated continuous scroll on all screen sizes; pause on hover.

---

### Interaction 5: Product Spectrum Carousel & Filter Transitions (Scene 2)
- **Trigger:** Category chip click (`.filter-chip`) & Arrow navigation (`#slider-prev`, `#slider-next`).
- **Target:** `.filter-chip`, `.brars-product-item`, `#spectrum-track`.
- **Property:** Active indicator state, `opacity`, `transform: translateY() scale()`, `scrollLeft`.
- **Duration:** `250ms–350ms`.
- **Easing:** `cubic-bezier(0.2, 1, 0.2, 1)`.
- **Scroll Relationship:** Smooth horizontal carousel scroll with centered active card scale (`1.08`).
- **Responsive Behavior:** Native swipe gestures on touch devices + smooth button steps.

---

### Interaction 6: Kinetic Stacked Typography (Scene 3)
- **Trigger:** Scroll entrance (IntersectionObserver) + Pointer hover.
- **Target:** `.stacked-word`, `.attr-floating-badge`, `.sunburst-sticker`.
- **Property:** `transform: scale()`, `color`, `letter-spacing`.
- **Duration:** `200ms` on hover; `600ms` staggered on scroll.
- **Easing:** `cubic-bezier(0.2, 1, 0.2, 1)`.
- **Scroll Relationship:** Staggered upward entrance on scroll into view.
- **Hover Effect:** Word scales up `scale(1.03)` with tracking expansion and color flip to fiery orange (`#FF4E00`).

---

### Interaction 7: Layered Brand Story Parallax & Seal Dynamics (Scene 4)
- **Trigger:** Scroll entrance + idle state.
- **Target:** `.story-media-box`, `.story-seal-top-right`, `.story-seal-bottom-left`.
- **Property:** `opacity`, `transform: translateY()`, idle seal counter-wobble `@keyframes sealWobble`.
- **Duration:** `700ms` reveal; `3.6s–4.0s` idle loops.
- **Easing:** `cubic-bezier(0.2, 1, 0.2, 1)`.
- **Scroll Relationship:** High-contrast narrative reveal framing the central kitchen photo.

---

### Interaction 8: Saturated Recipe / Culinary Cards (Scene 5)
- **Trigger:** Scroll entrance + Pointer hover.
- **Target:** `.culinary-card-brars`, `.c-card-img`, `.btn-pill-card-white`.
- **Property:** `transform: translateY(-8px)`, `box-shadow`, image scale `scale(1.06)`, button background invert.
- **Duration:** `300ms`.
- **Easing:** `cubic-bezier(0.2, 1, 0.2, 1)`.
- **Scroll Relationship:** 4-card stagger on scroll.
- **Responsive Behavior:** 4-column desktop -> 2-column tablet -> 1-column mobile.

---

### Interaction 9: Horizontal Folder Accordion (Scene 6)
- **Trigger:** Tab selection / Click on `.brars-accordion-panel`.
- **Target:** Active & Inactive panels.
- **Property:** `flex` interpolation (`flex: 1` to `flex: 5.5`), `opacity` and `transform` of expanded content.
- **Duration:** `500ms`.
- **Easing:** `cubic-bezier(0.2, 1, 0.2, 1)`.
- **Scroll Relationship:** In-place horizontal folder expansion.
- **Responsive Behavior:** On mobile (`< 1100px`), transforms into a vertical accordion with clean accordion headers and auto-collapsing inactive tabs.

---

### Interaction 10: Radiant Social Hub (Scene 7)
- **Trigger:** Pointer hover & Horizontal carousel scroll.
- **Target:** `.social-tile`, `.btn-pill-social`.
- **Property:** Card lift `translateY(-6px) scale(1.03)`, shadow bloom.
- **Duration:** `300ms`.
- **Easing:** `cubic-bezier(0.2, 1, 0.2, 1)`.
- **Responsive Behavior:** Horizontal swipeable photo track with native momentum on touch screens.

---

### Interaction 11: Floating Overlap Newsletter Card & Orbiting Seals (Scene 8)
- **Trigger:** Scroll entrance, Form submission, Idle state.
- **Target:** `.newsletter-card`, `.orbit-seal`, `.btn-pill-news-submit`.
- **Property:** Card elevation, seal wobble loops, button state feedback (`✔ Cadastrado com Sucesso!`).
- **Duration:** `700ms` reveal; `3.5s–4.2s` seal wobbles.
- **Easing:** `cubic-bezier(0.2, 1, 0.2, 1)`.

---

### Interaction 12: Tactile Button Arrow Slide & Magnetic Hover
- **Trigger:** Hover over any `.btn-pill`.
- **Target:** `.btn-arrow-circle`, `.btn-arrow-circle svg`.
- **Property:** `transform: translateX(3px)`, `transform: translateY(-2px)`, shadow expansion.
- **Duration:** `250ms`.
- **Easing:** `var(--ease-snappy)`.

---

## 3. Performance & Accessibility Compliance

1. **Zero Scroll Jank:** All animations are powered strictly by GPU-accelerated CSS properties (`transform`, `opacity`, `filter`) and utilize `will-change` hints.
2. **Throttled Scroll Listeners:** Window scroll events utilize `window.requestAnimationFrame` to avoid layout thrashing and maintain constant 60fps+.
3. **Accessibility (`prefers-reduced-motion`):**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
     .marquee-track { animation: none !important; }
     .hero-petal-backdrop, .hero-3d-img, .orbit-seal { animation: none !important; }
   }
   ```
4. **Automated & Headless Fallback:** Smart detection ensures elements render with full opacity in headless environments, search engine crawlers, and automated preview engines.

---

## 4. Verification Checklist

- [x] Header morphs into frosted glass capsule on scroll.
- [x] Hero 3D burger cutout levitates naturally with subtle cursor parallax.
- [x] Marquees loop smoothly at 26s/30s and pause on pointer hover.
- [x] Product spectrum slider filters categories smoothly and scrolls cleanly.
- [x] Stacked typography attributes scale and glow orange on hover.
- [x] Brand story layout features orbiting seals and clean reading rhythm.
- [x] Recipe cards lift and zoom images seamlessly on hover.
- [x] Horizontal folder accordion transitions with snappy cubic-bezier tab flexing.
- [x] Social hub photo tiles lift and glow on hover.
- [x] Floating newsletter card straddles section seam with orbiting seals and submit feedback.
- [x] Full mobile drawer navigation and touch responsiveness verified.
- [x] `prefers-reduced-motion` tested and compliant.
