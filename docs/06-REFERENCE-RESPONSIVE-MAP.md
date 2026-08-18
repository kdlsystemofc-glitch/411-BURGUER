# 06 — REFERENCE RESPONSIVE MAP: RESPONSIVE REASONING & BREAKPOINT ADAPTATION
**Document Status:** Complete (Phase 02)  
**Reference Target:** `https://www.brars.com/`  
**Client Implementation:** 411 BURGUER

---

## 1. Responsive Philosophy

In accordance with **Law 14 of the KDL Manifesto**:
> *"Mobile is not: desktop columns → flex-direction: column."*

The reference website adapts its **spatial density, typographic scale, and interaction models** to mobile devices while strictly preserving:
- **Narrative order** and visual weight.
- **Monumental typographic dominance** relative to viewport width.
- **Immediate product appetite appeal**.
- **Tactile touch interaction** (swiping, tap-to-expand) without horizontal clipping bugs.

---

## 2. Breakpoint Architecture & Typographic Scaling

| Breakpoint Tier | Viewport Width Range | Heading XXL (Hero) | Heading L (Story) | Body / Labels | Container Padding |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Desktop Wide (1440+)** | $\ge 1440\text{px}$ | `8.75rem (140px)` | `6.25rem (100px)` | `1.25rem–1.5rem` | `max-w: 1228px / 1728px` |
| **Desktop Standard** | $1025\text{px} - 1439\text{px}$ | `7.5rem (120px)` | `5.25rem (84px)` | `1.125rem–1.25rem` | `padding: 0 40px` |
| **Tablet / Small Laptop** | $769\text{px} - 1024\text{px}$ | `6.0rem (96px)` | `4.25rem (68px)` | `1rem–1.125rem` | `padding: 0 24px` |
| **Mobile Standard (390–768)** | $391\text{px} - 768\text{px}$ | `4.5rem (72px)` | `3.5rem (56px)` | `1rem (16px)` | `padding: 0 16px` |
| **Mobile Compact (360–390)** | $\le 390\text{px}$ | `3.75rem (60px)` | `2.75rem (44px)` | `0.875rem (14px)` | `padding: 0 12px` |

---

## 3. Scene-by-Scene Responsive Transformations

### 3.1 Floating Header Pill Navigation
- **Desktop ($\ge 1025\text{px}$):** Expanded floating pill with navigation links on left, center logo emblem, and dual CTA buttons on right (`max-w: 1228px`).
- **Mobile ($\le 768\text{px}$):** Compact floating pill pinned at top (`width: calc(100% - 24px)`), displaying the centered 411 Burguer logo mark, a direct WhatsApp quick-order icon button, and a sliding drawer toggle for full menu navigation.

### 3.2 Hero Showcase (Scene 1)
- **Desktop:** Massive horizontal headline with centered 3D burger cutout overlapping both text and background watermark.
- **Mobile:** Headline scales to `3.75rem–4.5rem` with tight negative letter-spacing (`-2px`); the burger subject occupies the central visual focal point (~`260px–300px` height) with stacked pill CTAs below (`width: 100%`).

### 3.3 Product Spectrum Carousel (Scene 2)
- **Desktop:** Multi-item carousel track with centered enlargement and category pill bar.
- **Mobile:** Category chips form a horizontal scrollable row with hidden scrollbars; product cards become a native touch-swipeable track with adjacent card peek (showing 1.15 cards to signal scrollability).

### 3.4 Kinetic Stacked Typography List (Scene 3)
- **Desktop:** Large centered stacked text (`6.25rem`) with hover state triggering lateral floating sticker badges.
- **Mobile:** Stacked text scales to `2.25rem–2.75rem`; active state is triggered by tap/scroll viewport intersection; floating badges appear inline or subtly above each active phrase.

### 3.5 Layered Brand Story (Scene 4)
- **Desktop:** Asymmetric 12-column grid with split headline (`DA BOTUCATU 411,` top-left, `PARA TODA A VILA MARIANA` bottom-right) overlapping a central wide photo.
- **Mobile:** Top headline (`DA BOTUCATU 411,`) sits prominently above the photo; photo occupies full container width with rounded corners; bottom headline (`PARA TODA A VILA MARIANA`) overlaps the base of the image into the narrative section.

### 3.6 Specialty Culinary Carousel (Scene 5)
- **Desktop:** 4-card horizontal track with prep time badges and dark pill navigation controller.
- **Mobile:** Smooth horizontal swipe track with card width set to `85vw` (`max-w: 320px`), allowing immediate visual exploration with touch momentum.

### 3.7 Interactive Folder Accordion (Scene 6)
- **Desktop:** Horizontal flex-row expanding horizontally on click/hover with rotated vertical tab text.
- **Mobile:** Transforms into a vertical stacking accordion with expandable height (`grid-template-rows: 0fr -> 1fr`), where clicking a header smoothly expands the card downward without breaking viewport bounds.

### 3.8 Social Community Hub (Scene 7)
- **Desktop:** Full-bleed orange field with massive headline and 5-card horizontal photo tile track.
- **Mobile:** Headline scales to `3.25rem`; social photo tiles form a 2-column masonry grid or a smooth horizontal swipe gallery with visible `@411burguer` tags.

### 3.9 Floating Overlap Newsletter Card (Scene 8)
- **Desktop:** Horizontal form row (Name, Email, Submit button in one line) inside a floating rounded card.
- **Mobile:** Form inputs and submit button stack vertically (`flex-direction: column; gap: 12px; width: 100%`), maintaining generous tap target sizes ($\ge 48\text{px}$).

### 3.10 Monumental Brand Footer (Scene 9)
- **Desktop:** 4-column structured grid beneath the monumental gold brand motto.
- **Mobile:** Monumental hashtag (`#BURGUERDEVERDADE`) scales to `2.5rem–3rem`; 4 columns collapse into clean 2-column sections or collapsible accordion rows with tap-to-call and tap-for-directions actions directly hooked to Google Maps and WhatsApp.
