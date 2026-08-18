# 07 — CLIENT DESIGN SYSTEM: 411 BURGUER
**Document Status:** Approved & Locked (Phase 04)  
**Architectural Framework:** KDL V2 (Reference DNA Architecture + Client DNA Identity)  
**Reference Target:** `brars.com` (Structural Authority)  
**Client:** 411 BURGUER — Hamburgueria Artesanal & Restaurante (Rua Botucatu, 411, SP)

---

## 1. Design System Philosophy: The Dual DNA Principle

1. **REFERENCE DNA (Architecture & Mechanics):**
   - Monumental condensed display typography scale ($85\%$ viewport width, $0.82$ line-height).
   - Floating pill navigation bar with dual CTAs and circular chevron arrows.
   - 3D isolated product centerpieces with physical overlap over background text.
   - Adjacent product and typography peeks bleeding into viewport edges.
   - Floating tilted circular sticker badges and 3D sparkle diamonds ($✦$).
   - Continuous kinetic marquee ribbons and warm cream surface containers with $40\text{px}$ top radii.

2. **CLIENT DNA (Identity & Truth):**
   - Official brandmark Didone serif typography for the numeral `411`.
   - Palette derived from physical evidence: Cast Iron Charcoal, Deep Burgundy, Toasted Flame Orange, Antique Olive, and Herb Mayo Lime.
   - Real artisan burger recipes: 140g grilled beef patty, brioche bun, cheddar melt, crispy bacon, and green house mayonnaise.
   - Verified neighborhood facts: Rua Botucatu 411, Vila Mariana, Google Rating 4.8★ (89 reviews), WhatsApp `(11) 98866-9949`.

---

## 2. Comprehensive Color Token System

| Token | HEX / Value | Source Evidence | Architectural Role | Semiotic Rationale |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-hero` | `#781838` | Reference bordeaux warmth + grilled beef richness | Background Primary | Creates deep, appetite-stimulating luxury atmosphere |
| `--bg-petal` | `#500E23` | Darker bordeaux backdrop silhouette | Backdrop Silhouette | Provides solid tonal anchor for 3D product cutout |
| `--color-headline-orange` | `#FF4E00` | Melting cheddar, open flame & sliced tomatoes (`imgi_15`, `imgi_49`) | Text Monumental / Primary Headline | Maximum graphic punch, warmth and appetite stimulation |
| `--color-headline-white` | `#FFFFFF` | Bread flour, parchment wrapping & high contrast | Text Secondary / Adjacent Headline | Clean editorial contrast on left edge bleed |
| `--color-sticker-lime` | `#BCE74C` | Homemade green herb mayonnaise (`imgi_41`, `imgi_71`) | Brand Accent / Sticker / Active | Fresh culinary contrast that immediately draws the eye |
| `--color-sticker-dark` | `#14360B` | Fresh parsley, herbs & dark chalkboard slates | Sticker Text / Contrast | High legibility inside the lime sticker seal |
| `--bg-nav-dark` | `#1E1E1E` | Logo center band (`imgi_2`) & evening cast iron | Floating Navbar Surface | Grounded, premium floating navbar container |
| `--bg-marquee-lavender` | `#9C8DB9` | Reference transition harmony (`brars.com`) | Kinetic Ribbon Background | Soft, stylish visual bridge between hero and cream content |
| `--color-marquee-dark` | `#1A1423` | Deep plum / charcoal | Kinetic Ribbon Typography | Crisp 100% legible text on lavender ribbon |
| `--bg-cream-room` | `#F6F3EC` | Custom parchment paper (`imgi_41`) & daylight deck | Surface Secondary (Content) | Warm, organic, daylight-friendly background for menus |
| `--bg-cream-chip` | `#EBE6DC` | Natural kraft paper cups & wooden trays | Chip / Filter Surface | Tactile pill chips for interactive category filtering |
| `--color-text-white` | `#FFFFFF` | Universal light text token | Text Primary (Dark fields) | Maximum legibility on dark burgundy and black surfaces |
| `--color-text-dark` | `#1A1A1A` | Universal dark text token | Text Primary (Light fields) | High legibility on warm cream surfaces |
| `--color-whatsapp` | `#25D366` | Official WhatsApp brand color | Direct Conversion Trigger | Direct visual affordance for instant ordering |

---

## 3. Typography System

| Level | Family | Weights | Scale & Geometry | Role & Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **DISPLAY (Monumental)** | `'Oswald', 'Anton', sans-serif` | `900` (Black) | `clamp(3.25rem, 6.8vw, 7.5rem)`, line-height `0.82`, tracking `-0.035em`, uppercase | Preserves the monumental scale and tight line spacing of the reference while projecting bold burger authority. |
| **BRAND NUMERAL ("411")** | `'Bodoni Moda', 'Playfair Display', serif` | `900` (Heavy) | `1.5rem / 24px`, tracking `2px` | Replicates the Didone serif numeral from the official 411 brand emblem with high-end distinction. |
| **HEADING (H2 / H3)** | `'Oswald', sans-serif` | `900` (Black) | `clamp(1.875rem, 3.5vw, 3rem)`, line-height `0.9`, tracking `-0.03em`, uppercase | Punchy, editorial section titles in cream surfaces. |
| **BODY COPY** | `'Plus Jakarta Sans', sans-serif` | `500, 600, 700` | `0.9375rem – 1rem`, line-height `1.5` | Clean modern geometric sans with exceptional legibility for menu descriptions and hours. |
| **META & BADGES** | `'Plus Jakarta Sans', sans-serif` | `800` (Bold) | `0.75rem – 0.8125rem`, tracking `0.05em`, uppercase | Precise informational tags (140g, 4.8★, Vila Mariana). |
| **CTA BUTTONS** | `'Plus Jakarta Sans', sans-serif` | `800` (Extra Bold) | `0.875rem – 0.9375rem`, tracking `-0.01em` | Pill buttons paired with circular chevron arrow badges. |

---

## 4. Image Language & Asset Rules

1. **3D Cutout Isolation:**
   - All showcase heroes must be 100% transparent PNGs with clean antialiased edges.
   - Never use standard rectangular photo cards in the hero scene.
2. **Lighting & Materiality:**
   - Commercial studio lighting highlighting glossy brioche glazes, glistening melted cheddar, and crispy bacon textures.
3. **Drop Shadows & Occlusion:**
   - Multi-layered drop shadows (`drop-shadow(0 35px 50px rgba(0,0,0,0.75)) drop-shadow(0 12px 20px rgba(35,5,15,0.85))`) to ground the 3D asset in physical space.
4. **Physical Overlap:**
   - Centerpiece burger overlaps the monumental text by $35\text{px}–45\text{px}$ vertically.
5. **Adjacent Carousel Bleeds:**
   - Side assets bleed partially into the viewport edges at $50\%$ vertical alignment.

---

## 5. Graphic Language & Decorative Motifs

1. **8-Lobed Solid Petal Silhouette:** Saturated dark bordeaux mandala backdrop providing a physical silhouette behind the product.
2. **Tilted Circular Seal Badge:** Tilted at $-14^\circ$, in lime green (`#BCE74C`) with curved circular arc typography and centered weight stamp (`140G`).
3. **3D Sparkle Diamonds ($✦$):** Pure white 4-pointed diamonds with soft glow floating in 3D depth.
4. **Circular Arrow Buttons:** Circular badges containing chevron arrows inside pill action buttons.
5. **Lavender Kinetic Ticker:** Continuous hardware-accelerated ticker tape with circular separator bullets ($●$).

---

## 6. Motion Personality & Interaction

| Interaction | Duration | Easing | Feedback & Behavior |
| :--- | :--- | :--- | :--- |
| **Pill Nav Hover** | `0.25s` | `cubic-bezier(0.2, 1, 0.2, 1)` | Color transitions to lime green (`#BCE74C`), subtle 2px lift. |
| **Hero 3D Product Float** | `0.4s` | `cubic-bezier(0.2, 1, 0.2, 1)` | Hover triggers $-6\text{px}$ lift and $1.02$ scale. |
| **Sticker Badge Idle** | `4s` | `ease-in-out` | Gentle floating levitation alternating $-14^\circ$ to $-10^\circ$. |
| **Sparkle Diamond Pulse** | `3s–4s` | `ease-in-out` | Subtle opacity and scale pulsation ($0.6 \to 1.15$). |
| **Slide Transition** | `180ms` | `cubic-bezier(0.33, 0, 0, 1)` | Text slides down $12\text{px}$, fades, updates, and snaps into place. |
| **Kinetic Ribbon Loop** | `26s` | `linear` | Continuous horizontal translation; pauses on hover. |

---

## 7. Implementation Validation

The design system has been fully implemented into:
- [`index.html`](file:///c:/cli/411%20BURGUER/index.html)
- [`style.css`](file:///c:/cli/411%20BURGUER/style.css)
- [`app.js`](file:///c:/cli/411%20BURGUER/app.js)

All color tokens, typography scales, graphic motifs, and 3D assets are active and verified.
