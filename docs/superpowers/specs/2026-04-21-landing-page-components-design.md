# Landing Page Components Design
**Date:** 2026-04-21
**Project:** Annika Trading (Construction Supply E-Commerce)
**Status:** Design Approved

---

## Overview

Port the Annika Trading landing page from static HTML (`pharma/index.html`) into a production React/Next.js application using a section-based component architecture with a hybrid CSS approach (custom properties + Tailwind utilities).

---

## Goals

1. ✅ Maintain exact visual fidelity from HTML reference
2. ✅ Componentize the 9-section layout for maintainability
3. ✅ Separate content from presentation (hardcoded in `lib/content.ts`)
4. ✅ Use hybrid styling: CSS custom properties for design tokens, Tailwind for layout
5. ✅ Keep interactions minimal (CSS-based, no React state for UI effects)
6. ✅ Build a foundation for future CMS integration or dynamic content

---

## Architecture

### File Structure

```
app/
├── page.tsx                          # Home page (orchestrator)
├── layout.tsx                        # Root layout (update metadata)
└── globals.css                       # Tailwind import + design system

components/
├── Nav.tsx                           # Sticky navigation bar
├── Hero.tsx                          # Hero section + stats
├── StoreInfo.tsx                     # Store info grid + Google Maps
├── Products.tsx                      # Products grid container
├── ProductCard.tsx                   # Reusable product card
├── DeliveryStrip.tsx                 # Delivery info section
├── Reviews.tsx                       # Reviews grid container
├── ReviewCard.tsx                    # Individual review card
├── CtaBanner.tsx                     # Call-to-action section
├── Footer.tsx                        # Footer with links
└── StickyCallButton.tsx              # Mobile-only sticky call button

lib/
└── content.ts                        # Hardcoded content (products, reviews, contact info)

styles/
└── tokens.css                        # CSS custom property definitions
```

### Design System (Hybrid Approach)

#### CSS Custom Properties
**Colors (oklch color space):**
- `--orange` (primary): oklch(0.64 0.19 52)
- `--orange-dark`: oklch(0.54 0.20 52)
- `--orange-light`: oklch(0.94 0.06 52)
- `--charcoal` (text/bg): oklch(0.18 0.01 250)
- `--mid` (secondary text): oklch(0.45 0.01 250)
- `--subtle` (tertiary text): oklch(0.75 0.01 250)
- `--rule` (borders): oklch(0.91 0.005 250)
- `--bg` (page background): oklch(0.99 0.004 70)
- `--card` (card background): #ffffff

**Typography:**
- `--font`: 'DM Sans', sans-serif
- Font weights: 400, 500, 600, 700, 800 (loaded via Google Fonts in layout.tsx)

**Layout:**
- `--max`: 1120px (container max-width)
- `--r`: 10px (border radius base)

**Additional Design Tokens:**
- Shadows: `--shadow-nav: 0 2px 12px rgba(0,0,0,0.18)`
- Spacing scale: 4px, 8px, 12px, 16px, 20px, 28px, 32px, 36px, 40px, 48px, 52px, 60px, 72px, 100px

#### Tailwind Integration
**Purpose:** Layout, responsive utilities, spacing utilities
**Usage:** `flex`, `grid`, `gap-*`, `items-center`, `justify-between`, `mb-*`, `py-*`, `@media` breakpoints

**Key breakpoints (from HTML):**
- Mobile: < 480px
- Tablet: < 680px
- Tablet (wider): < 720px
- Desktop: ≥ 720px+

#### Component Styling Pattern

```tsx
// Example: Hero.tsx
<section
  style={{
    background: 'var(--charcoal)',
    color: 'var(--white)'
  }}
  className="py-16 px-4 md:py-20 relative overflow-hidden"
>
  <div className="max-w-[1120px] mx-auto">
    <h1 style={{
      fontSize: 'clamp(34px, 6vw, 64px)',
      color: 'var(--orange)'
    }} className="font-bold leading-tight">
      {/* content */}
    </h1>
  </div>
</section>
```

**Rules:**
- Design tokens (colors, typography sizes, shadows) → `style={{ ... }}` with CSS custom properties
- Layout (flex, grid, gaps, responsive) → `className` with Tailwind
- No `classNames` utility needed initially; upgrade if component complexity grows

---

## Components (9 Total)

### 1. Nav
**Purpose:** Sticky navigation header
**Content from:** `content.ts` (phone number, brand name)
**Key Features:**
- Sticky positioning (`sticky top-0 z-100`)
- Brand name with orange highlight
- Phone icon + number + "Call Now" button (hidden on mobile)
- Shadow effect

**Props:** None
**Dependencies:** content.ts

---

### 2. Hero
**Purpose:** Hero section with headline, CTA buttons, and stats
**Content from:** `content.ts` (headline, description, location badge, buttons, stats)
**Key Features:**
- Dark background with overlay gradient
- Location badge with pin icon
- Responsive headline (clamp font size)
- Two CTA buttons: "Call Now" + "Get Directions"
- Stats row: rating, hours, local

**Props:** None
**Dependencies:** content.ts

---

### 3. StoreInfo
**Purpose:** Store information with map
**Content from:** `content.ts` (address, phone, hours, map URL)
**Key Features:**
- Two-column grid (1 col on mobile)
- Info cards with icons (address, phone, hours)
- Google Maps embed iframe
- "Open in Maps" button

**Props:** None
**Dependencies:** content.ts, ReviewCard subcomponent

---

### 4. Products
**Purpose:** Container for product category cards
**Content from:** `content.ts` (product list with emoji icons)
**Key Features:**
- Auto-fill grid layout (minmax 200px)
- Section label + title + description
- Uses ProductCard subcomponent

**Props:** None
**Dependencies:** content.ts, ProductCard component

---

### 5. ProductCard
**Purpose:** Reusable product category card
**Content from:** Passed from Products component
**Key Features:**
- Emoji fallback icon (no image)
- Hover effect: border color change, Y-axis translate
- Title + description text

**Props:** `{ title: string; description: string; emoji: string }`

---

### 6. DeliveryStrip
**Purpose:** Delivery information section
**Content from:** `content.ts` (delivery info, truck count)
**Key Features:**
- Dark background with image overlay (brightness reduced)
- Two-column layout (wrap on mobile)
- Badges showing truck count + delivery speed

**Props:** None
**Dependencies:** content.ts

---

### 7. Reviews
**Purpose:** Container for review cards
**Content from:** `content.ts` (review list with ratings)
**Key Features:**
- Rating summary: 5.0 stars, review count
- Auto-fill grid layout (minmax 280px)
- Uses ReviewCard subcomponent

**Props:** None
**Dependencies:** content.ts, ReviewCard component

---

### 8. ReviewCard
**Purpose:** Individual review card
**Content from:** Passed from Reviews component
**Key Features:**
- Reviewer avatar + name + date
- Star rating display
- Review text
- Google badge

**Props:** `{ name: string; date: string; rating: number; text: string }`

---

### 9. CtaBanner
**Purpose:** Final call-to-action section
**Content from:** `content.ts` (CTA headline, buttons)
**Key Features:**
- Orange background
- Two buttons: "Call" + "Send Text"
- Responsive heading (clamp)

**Props:** None
**Dependencies:** content.ts

---

### 10. Footer
**Purpose:** Footer with brand, navigation, contact
**Content from:** `content.ts` (brand, nav links, contact info)
**Key Features:**
- Three-column grid (1 col on mobile)
- Brand + tagline
- Navigation links
- Contact address + phone
- Divider + copyright

**Props:** None
**Dependencies:** content.ts

---

### 11. StickyCallButton
**Purpose:** Mobile-only floating call button
**Content from:** `content.ts` (phone number)
**Key Features:**
- Fixed position, bottom-right
- Circular button with phone icon
- Hidden on desktop, visible on mobile (< 680px)
- Box shadow

**Props:** None
**Dependencies:** content.ts

---

## Content Management

### `lib/content.ts` Structure

```typescript
export const siteContent = {
  nav: {
    brand: 'Annika Trading',
    phone: '0909 993 1787',
  },
  hero: {
    badge: 'Valenzuela, Philippines',
    headline: 'Annika Trading Construction Supply Store',
    description: '...',
    buttons: [
      { label: 'Call Now', href: 'tel:+639099931787' },
      { label: 'Get Directions', href: 'https://maps.google.com/...' },
    ],
    stats: [
      { label: '5.0 ★', detail: 'Google Rating' },
      { label: 'Open', detail: 'Until 4:30 PM daily' },
      { label: 'Local', detail: 'Valenzuela-based' },
    ],
  },
  storeInfo: {
    // address, phone, hours, mapUrl
  },
  products: [
    { title: 'Cement & Aggregates', description: '...', emoji: '🏗️' },
    // ... 4 more
  ],
  reviews: [
    { name: 'Jun Rey S.', date: 'March 2025', rating: 5, text: '...' },
    // ... 2 more
  ],
  // ... other sections
};
```

**Why:** Separates content from presentation, easy to swap with API/CMS later, single source of truth.

---

## Styling Strategy

### CSS Custom Properties Usage
- Every color value uses `style={{ color: 'var(--orange)' }}`
- Shadows use `style={{ boxShadow: 'var(--shadow-nav)' }}`
- Font families use `style={{ fontFamily: 'var(--font)' }}`

### Tailwind Usage
- Layout: `flex`, `grid`, `gap-4`, `mb-8`
- Responsive: Tailwind breakpoints or `@media` CSS
- Spacing: `py-16`, `px-4`, `mb-8`
- Utilities: `items-center`, `justify-between`, `rounded-lg`

### Hover States
- CSS-only (no React state): `.hover:border-orange` classes or `onMouseEnter`/`onMouseLeave` with inline styles
- Product cards: border color + Y-translate on hover

---

## Data Flow

1. **content.ts** → Single source of truth for all copy, links, data
2. **Components import from content.ts** → Each component pulls what it needs
3. **No prop drilling** → Keeps component interfaces simple
4. **Future-proof** → Easy to swap content.ts with an API call (e.g., `fetch('/api/content')`)

---

## Responsive Design

**Breakpoints:**
- **Mobile:** < 480px (nav phone label hidden, sticky call button visible)
- **Tablet:** < 680px (footer 1-col, sticky call button visible)
- **Tablet+:** < 720px (storeinfo 1-col)
- **Desktop:** ≥ 720px (full multi-column layouts)

**Approach:**
- Mobile-first: Start with mobile layout, add Tailwind breakpoints for larger screens
- Clamp functions for responsive typography: `font-size: clamp(24px, 4vw, 36px)`
- Flex-wrap for flexible layouts

---

## Metadata & SEO

**layout.tsx updates:**
- `<title>`: "Annika Trading – Construction Supply in Valenzuela"
- `<meta name="description">`: Copy from HTML meta tag
- Fonts: Load DM Sans from Google Fonts (replace Geist)

---

## Testing Strategy

- **Visual regression:** Screenshot each component in isolation
- **Responsive:** Test on mobile, tablet, desktop breakpoints
- **Content:** Verify all content from `content.ts` renders correctly
- **Links:** Test all CTAs (phone, maps, text)

---

## Deliverables

✅ 11 React components (9 sections + 2 subcomponents)
✅ `lib/content.ts` with all hardcoded content
✅ `styles/tokens.css` with CSS custom properties
✅ Updated `app/layout.tsx` (metadata, fonts)
✅ Updated `app/page.tsx` (orchestrator)
✅ Updated `app/globals.css` (design system imports)

---

## Success Criteria

- ✅ Visual fidelity: Matches HTML reference 1:1
- ✅ Component architecture: 9 sections + 2 reusable subcomponents
- ✅ Styling: Hybrid approach (CSS custom properties + Tailwind)
- ✅ Maintainability: Easy to update content, modify individual sections
- ✅ Responsive: Works on mobile, tablet, desktop
- ✅ Performance: No unnecessary re-renders, semantic HTML
- ✅ Future-ready: Content structure supports CMS integration

---

## Notes

- No JavaScript interactivity beyond CSS hover states (per Option A in brainstorming)
- Google Fonts (DM Sans) loaded in layout.tsx
- Maps embed uses iframe (lazy loading)
- All phone numbers are tel: links
- All locations are Google Maps links
