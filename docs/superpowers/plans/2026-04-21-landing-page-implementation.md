# Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port the Annika Trading landing page from static HTML to a production React/Next.js application with 11 reusable components, a hybrid CSS design system, and hardcoded content in `lib/content.ts`.

**Architecture:** Section-based component architecture (9 landing page sections + 2 reusable subcomponents). Styling uses CSS custom properties for design tokens (colors, typography, shadows) and Tailwind utilities for layout/responsiveness. All content is centralized in `lib/content.ts` for easy updates and future CMS integration.

**Tech Stack:** Next.js 16.2.4, React 19.2.4, Tailwind CSS 4, TypeScript, CSS custom properties (oklch color space)

---

## Phase 1: Foundation & Design System

### Task 1: Create Design System (CSS Custom Properties)

**Files:**
- Create: `styles/tokens.css`

- [ ] **Step 1: Create the styles directory**

```bash
mkdir -p C:\Users\New\Desktop\annika-trading\styles
```

- [ ] **Step 2: Write tokens.css with all design system variables**

```css
/* styles/tokens.css */
/* ─── Color Tokens ─── */
:root {
  --orange: oklch(0.64 0.19 52);
  --orange-dark: oklch(0.54 0.20 52);
  --orange-light: oklch(0.94 0.06 52);
  --charcoal: oklch(0.18 0.01 250);
  --mid: oklch(0.45 0.01 250);
  --subtle: oklch(0.75 0.01 250);
  --rule: oklch(0.91 0.005 250);
  --bg: oklch(0.99 0.004 70);
  --card: #ffffff;

  /* ─── Typography ─── */
  --font: "DM Sans", sans-serif;

  /* ─── Layout ─── */
  --max: 1120px;
  --r: 10px;

  /* ─── Shadows ─── */
  --shadow-nav: 0 2px 12px rgba(0, 0, 0, 0.18);
  --shadow-sticky: 0 4px 20px rgba(0, 0, 0, 0.3);

  /* ─── Spacing Scale (base: 4px) ─── */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-base: 12px;
  --space-md: 16px;
  --space-lg: 20px;
  --space-xl: 28px;
  --space-2xl: 32px;
  --space-3xl: 36px;
  --space-4xl: 40px;
  --space-5xl: 48px;
  --space-6xl: 52px;
  --space-7xl: 60px;
  --space-8xl: 72px;
  --space-hero: 100px;
}

/* ─── Base Resets ─── */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--charcoal);
  line-height: 1.6;
  font-size: 16px;
}

/* ─── Utility Classes ─── */
.container {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 20px;
}

/* Button Base Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: var(--r);
  font-family: var(--font);
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: background 0.15s, transform 0.1s;
  white-space: nowrap;
  min-height: 52px;
}

.btn:active {
  transform: scale(0.97);
}

.btn-primary {
  background: var(--orange);
  color: #fff;
}

.btn-primary:hover {
  background: var(--orange-dark);
}

.btn-outline {
  background: transparent;
  color: var(--orange);
  border: 2px solid var(--orange);
}

.btn-outline:hover {
  background: var(--orange-light);
}

.btn-white {
  background: #fff;
  color: var(--orange);
}

.btn-white:hover {
  background: #f5f5f5;
}

.btn-ghost-white {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.7);
}

.btn-ghost-white:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Section Labels and Titles */
.section-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 10px;
}

.section-title {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 800;
  line-height: 1.2;
}

.section-sub {
  color: var(--mid);
  font-size: 16px;
  margin-top: 8px;
}

@media (max-width: 680px) {
  .btn {
    padding: 14px 22px;
    font-size: 15px;
  }
}
```

- [ ] **Step 3: Verify the file was created**

```bash
cat C:\Users\New\Desktop\annika-trading\styles\tokens.css
```

Expected: File contains all CSS custom properties and utility classes.

- [ ] **Step 4: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add styles/tokens.css && git commit -m "feat: add design system with CSS custom properties"
```

---

### Task 2: Create Content Data File

**Files:**
- Create: `lib/content.ts`

- [ ] **Step 1: Create lib directory**

```bash
mkdir -p C:\Users\New\Desktop\annika-trading\lib
```

- [ ] **Step 2: Write comprehensive content.ts with all hardcoded site content**

```typescript
// lib/content.ts
export const siteContent = {
  nav: {
    brand: 'Annika',
    brandHighlight: 'Trading',
    phone: '0909 993 1787',
    callNowLabel: 'Call Now',
  },

  hero: {
    badge: {
      icon: '📍',
      text: 'Valenzuela, Philippines',
    },
    headline: 'Annika Trading Construction Supply Store',
    description:
      'Your trusted partner for quality building materials, cement, steel, pipes, and hardware supplies — right in the heart of Valenzuela.',
    buttons: [
      {
        label: 'Call Now',
        href: 'tel:+639099931787',
        icon: '☎️',
        variant: 'primary',
      },
      {
        label: 'Get Directions',
        href: 'https://maps.google.com/?q=Annika+Trading+MH+Del+Pilar+Poblacion+Valenzuela',
        icon: '📍',
        variant: 'ghost-white',
      },
    ],
    stats: [
      { value: '5.0 ★', label: 'Google Rating' },
      { value: 'Open', label: 'Until 4:30 PM daily' },
      { value: 'Local', label: 'Valenzuela-based' },
    ],
  },

  storeInfo: {
    sectionLabel: 'Find Us',
    title: 'Visit Our Store',
    subtitle: "We're easy to find — right in front of Ever in Valenzuela.",
    cards: [
      {
        icon: '📍',
        title: 'Address',
        content:
          'In front of Ever, MH Del Pilar, Poblacion Road, Valenzuela',
      },
      {
        icon: '☎️',
        title: 'Phone',
        content: '0909 993 1787',
        isLink: true,
        href: 'tel:+639099931787',
      },
      {
        icon: '🕐',
        title: 'Business Hours',
        content: 'Open daily · Closes at 4:30 PM',
      },
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=MH+Del+Pilar+Poblacion+Valenzuela+City&output=embed&z=16',
    mapButtonText: 'Open in Google Maps',
    mapButtonHref:
      'https://maps.google.com/?q=Annika+Trading+MH+Del+Pilar+Poblacion+Valenzuela',
  },

  products: {
    sectionLabel: 'What We Carry',
    title: 'Our Product Categories',
    subtitle:
      'Everything you need for your construction project, in one place.',
    items: [
      {
        title: 'Cement & Aggregates',
        description: 'Portland cement, sand, gravel, hollow blocks',
        emoji: '🏗️',
      },
      {
        title: 'Steel & Rebars',
        description: 'Deformed bars, gi wire, angle bars, c-purlins',
        emoji: '⚙️',
      },
      {
        title: 'Pipes & Plumbing',
        description: 'PVC pipes, fittings, G.I. pipes, valves',
        emoji: '🔧',
      },
      {
        title: 'Paints & Hardware',
        description: 'Boysen, Davies, primers, sealants, fasteners',
        emoji: '🎨',
      },
      {
        title: 'Construction Tools',
        description: 'Hand tools, power tools, safety equipment',
        emoji: '🛠️',
      },
    ],
  },

  deliveryStrip: {
    headline: 'We Deliver to Your Jobsite',
    description:
      'Our own fleet of trucks delivers materials straight to your construction site anywhere in Valenzuela and nearby areas.',
    badges: [
      { value: '2+', label: 'Delivery Trucks' },
      { value: 'Fast', label: 'Local Delivery' },
    ],
  },

  reviews: {
    sectionLabel: 'Customer Reviews',
    title: 'What Our Customers Say',
    ratingOverview: {
      score: 5.0,
      stars: '★★★★★',
      source: 'Based on Google Reviews · Valenzuela',
    },
    items: [
      {
        name: 'Jun Rey S.',
        date: 'March 2025',
        rating: 5,
        stars: '★★★★★',
        text: '"Maganda ang serbisyo nila. Mabilis at magalang ang mga staff. Yung mga materials ay complete at may stock lagi. Dito na talaga ako palagi mag-order ng supplies para sa aming proyekto."',
      },
      {
        name: 'Maria A.',
        date: 'January 2025',
        rating: 5,
        stars: '★★★★★',
        text: '"Very reliable supplier! Competitive prices and the owners are very accommodating. We\'ve been getting our construction materials here for years. Highly recommend to anyone building in Valenzuela."',
      },
      {
        name: 'Ramon L.',
        date: 'December 2024',
        rating: 5,
        stars: '★★★★★',
        text: '"Laging may stocks at mababang presyo kumpara sa iba. Madaling hanapin — nasa harap ng Ever. Maganda rin yung serbisyo, hindi kayo pababayaan. Limang bituin talaga!"',
      },
    ],
  },

  cta: {
    headline: 'Ready to Order? Call Us Now',
    subtitle: 'Reach us for orders, inquiries, and bulk pricing',
    buttons: [
      {
        label: 'Call: 0909 993 1787',
        href: 'tel:+639099931787',
        icon: '☎️',
        variant: 'white',
      },
      {
        label: 'Send a Text',
        href: 'sms:+639099931787',
        icon: '💬',
        variant: 'ghost-white',
      },
    ],
  },

  footer: {
    brand: 'Annika',
    brandHighlight: 'Trading',
    tagline:
      'Your trusted construction supply store in Valenzuela. Quality materials, reliable service.',
    navLinks: [
      { label: 'Home', href: '#home' },
      { label: 'Store Info', href: '#info' },
      { label: 'Products', href: '#products' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' },
    ],
    contactInfo: {
      address:
        'In front of Ever, MH Del Pilar, Poblacion Road, Valenzuela, Metro Manila',
      phone: '0909 993 1787',
      hours: 'Open until 4:30 PM',
    },
    copyright: '© 2025 Annika Trading. All rights reserved. · Valenzuela, Philippines',
  },

  stickyCall: {
    phone: '0909 993 1787',
    ariaLabel: 'Call Annika Trading',
  },
};
```

- [ ] **Step 3: Verify content.ts was created**

```bash
cat C:\Users\New\Desktop\annika-trading\lib\content.ts | head -50
```

Expected: File contains structured content object with all site data.

- [ ] **Step 4: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add lib/content.ts && git commit -m "feat: add hardcoded site content"
```

---

### Task 3: Update Layout with Metadata and DM Sans Font

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx with updated version**

```typescript
// app/layout.tsx
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Annika Trading – Construction Supply in Valenzuela',
  description:
    'Annika Trading is your trusted construction supply store in Valenzuela, Philippines. Cement, steel, pipes, hardware and more. Call 0909 993 1787.',
  keywords:
    'construction supply Valenzuela, building materials Philippines, cement steel pipes hardware',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-charcoal">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify layout.tsx was updated**

```bash
cat C:\Users\New\Desktop\annika-trading\app\layout.tsx
```

Expected: File imports DM Sans, sets metadata, includes preconnect links.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add app/layout.tsx && git commit -m "feat: update layout with metadata and DM Sans font"
```

---

### Task 4: Update globals.css to Import Design System

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace globals.css with design system import and Tailwind config**

```css
/* app/globals.css */
@import '../styles/tokens.css';
@import 'tailwindcss';

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font);
}
```

- [ ] **Step 2: Verify globals.css was updated**

```bash
cat C:\Users\New\Desktop\annika-trading\app\globals.css
```

Expected: File imports tokens.css at the top and maintains Tailwind config.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add app/globals.css && git commit -m "feat: import design tokens in global styles"
```

---

## Phase 2: Component Implementation (11 Components)

### Task 5: Create Nav Component

**Files:**
- Create: `components/Nav.tsx`

- [ ] **Step 1: Write Nav.tsx**

```typescript
// components/Nav.tsx
import { siteContent } from '@/lib/content';

const navContent = siteContent.nav;

export default function Nav() {
  return (
    <nav
      style={{
        background: 'var(--charcoal)',
        color: '#fff',
        boxShadow: 'var(--shadow-nav)',
      }}
      className="sticky top-0 z-100 py-3 px-4"
    >
      <div className="max-w-[1120px] mx-auto flex items-center justify-between">
        <a href="#" className="text-lg font-bold">
          <span style={{ color: 'var(--orange)' }}>{navContent.brand}</span>{' '}
          {navContent.brandHighlight}
        </a>
        <div className="flex gap-2 items-center">
          <a
            href={`tel:+639099931787`}
            style={{ color: 'var(--orange)' }}
            className="hidden md:flex items-center gap-1 text-sm font-semibold hover:text-white transition-colors"
          >
            <span>☎️</span>
            <span className="label">{navContent.phone}</span>
          </a>
          <a
            href={`tel:+639099931787`}
            className="btn btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '14px',
              minHeight: '40px',
            }}
          >
            {navContent.callNowLabel}
          </a>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Verify Nav.tsx was created**

```bash
cat C:\Users\New\Desktop\annika-trading\components\Nav.tsx
```

Expected: File imports content and renders navigation with brand and phone.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add components/Nav.tsx && git commit -m "feat: add Nav component"
```

---

### Task 6: Create Hero Component

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Write Hero.tsx**

```typescript
// components/Hero.tsx
import { siteContent } from '@/lib/content';

const heroContent = siteContent.hero;

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: 'var(--charcoal)',
        color: '#fff',
        padding: 'clamp(60px, 10vw, 100px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--charcoal)',
          filter: 'brightness(0.22) saturate(0.5)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div className="max-w-[1120px] mx-auto px-4 relative z-10">
        <div style={{ maxWidth: '640px', paddingTop: 'clamp(8px, 2vw, 16px)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '20px',
              padding: '6px 14px',
              fontSize: '13px',
              fontWeight: '600',
              color: 'var(--orange)',
              marginBottom: '22px',
            }}
          >
            {heroContent.badge.icon}
            {heroContent.badge.text}
          </div>

          <h1
            style={{
              fontSize: 'clamp(34px, 6vw, 64px)',
              fontWeight: '800',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            <span style={{ color: 'var(--orange)' }}>
              {heroContent.headline.split(' ')[0]} {heroContent.headline.split(' ')[1]}
            </span>
            <br />
            {heroContent.headline.substring(heroContent.headline.indexOf(' ', 20) + 1)}
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '560px',
              marginBottom: '36px',
            }}
          >
            {heroContent.description}
          </p>

          <div className="flex gap-3 flex-wrap mb-9">
            {heroContent.buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`btn btn-${btn.variant}`}
              >
                {btn.icon}
                {btn.label}
              </a>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '52px',
              paddingTop: '36px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              flexWrap: 'wrap',
            }}
          >
            {heroContent.stats.map((stat) => (
              <div key={stat.value}>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '28px',
                    fontWeight: '800',
                    color: 'var(--orange)',
                  }}
                >
                  {stat.value}
                </strong>
                <span
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify Hero.tsx was created**

```bash
cat C:\Users\New\Desktop\annika-trading\components\Hero.tsx | head -30
```

Expected: File imports content and renders hero section with badge, headline, buttons, stats.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add components/Hero.tsx && git commit -m "feat: add Hero component"
```

---

### Task 7: Create StoreInfo Component

**Files:**
- Create: `components/StoreInfo.tsx`

- [ ] **Step 1: Write StoreInfo.tsx**

```typescript
// components/StoreInfo.tsx
import { siteContent } from '@/lib/content';

const storeInfoContent = siteContent.storeInfo;

export default function StoreInfo() {
  return (
    <section id="info" className="py-[72px] px-4">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Info Cards */}
          <div>
            <span className="section-label">{storeInfoContent.sectionLabel}</span>
            <h2 className="section-title">{storeInfoContent.title}</h2>
            <p className="section-sub mt-2">{storeInfoContent.subtitle}</p>

            <div className="flex flex-col gap-4 mt-7">
              {storeInfoContent.cards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--rule)',
                    borderRadius: 'var(--r)',
                    padding: '22px 24px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      background: 'var(--orange-light)',
                      color: 'var(--orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '20px',
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '13px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--mid)',
                        marginBottom: '4px',
                      }}
                    >
                      {card.title}
                    </h3>
                    {card.isLink ? (
                      <a
                        href={card.href}
                        style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          color: 'var(--charcoal)',
                          textDecoration: 'none',
                          lineHeight: 1.4,
                        }}
                        className="hover:text-orange"
                      >
                        {card.content}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          color: 'var(--charcoal)',
                          lineHeight: 1.4,
                        }}
                      >
                        {card.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Map */}
          <div>
            <div
              style={{
                borderRadius: 'var(--r)',
                overflow: 'hidden',
                border: '1px solid var(--rule)',
                background: '#e8e8e8',
                height: '320px',
              }}
            >
              <iframe
                src={storeInfoContent.mapEmbedUrl}
                title="Annika Trading location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }}
              />
            </div>
            <a
              href={storeInfoContent.mapButtonHref}
              target="_blank"
              rel="noopener"
              className="btn btn-outline w-full justify-center mt-3"
            >
              📍 {storeInfoContent.mapButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify StoreInfo.tsx was created**

```bash
cat C:\Users\New\Desktop\annika-trading\components\StoreInfo.tsx | head -40
```

Expected: File imports content and renders store info cards with map embed.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add components/StoreInfo.tsx && git commit -m "feat: add StoreInfo component"
```

---

### Task 8: Create ProductCard Subcomponent & Products Component

**Files:**
- Create: `components/ProductCard.tsx`
- Create: `components/Products.tsx`

- [ ] **Step 1: Write ProductCard.tsx (reusable subcomponent)**

```typescript
// components/ProductCard.tsx
type ProductCardProps = {
  title: string;
  description: string;
  emoji: string;
};

export default function ProductCard({
  title,
  description,
  emoji,
}: ProductCardProps) {
  return (
    <div
      style={{
        borderRadius: 'var(--r)',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        transition: 'border-color 0.15s, transform 0.15s',
        cursor: 'default',
        position: 'relative',
      }}
      className="hover:border-orange hover:translate-y-[-3px]"
    >
      <div
        style={{
          width: '100%',
          height: '180px',
          background: 'rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px',
        }}
      >
        {emoji}
      </div>
      <div style={{ padding: '16px 18px 18px' }}>
        <h3
          style={{
            fontSize: '15px',
            fontWeight: '700',
            color: '#fff',
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '5px',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write Products.tsx**

```typescript
// components/Products.tsx
import { siteContent } from '@/lib/content';
import ProductCard from './ProductCard';

const productsContent = siteContent.products;

export default function Products() {
  return (
    <section
      id="products"
      style={{
        background: 'var(--charcoal)',
        padding: '72px 0',
      }}
      className="px-4"
    >
      <div className="max-w-[1120px] mx-auto">
        <span
          className="section-label"
          style={{ color: 'var(--orange)' }}
        >
          {productsContent.sectionLabel}
        </span>
        <h2
          className="section-title"
          style={{ color: '#fff' }}
        >
          {productsContent.title}
        </h2>
        <p
          className="section-sub"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          {productsContent.subtitle}
        </p>

        <div
          className="grid gap-4 mt-10"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          }}
        >
          {productsContent.items.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              emoji={product.emoji}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify both files were created**

```bash
cat C:\Users\New\Desktop\annika-trading\components\ProductCard.tsx
cat C:\Users\New\Desktop\annika-trading\components\Products.tsx
```

Expected: ProductCard is a reusable component, Products renders grid of ProductCards.

- [ ] **Step 4: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add components/ProductCard.tsx components/Products.tsx && git commit -m "feat: add Products and ProductCard components"
```

---

### Task 9: Create DeliveryStrip Component

**Files:**
- Create: `components/DeliveryStrip.tsx`

- [ ] **Step 1: Write DeliveryStrip.tsx**

```typescript
// components/DeliveryStrip.tsx
import { siteContent } from '@/lib/content';

const deliveryContent = siteContent.deliveryStrip;

export default function DeliveryStrip() {
  return (
    <section
      style={{
        background: 'var(--charcoal)',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, rgba(255,165,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(0.35) saturate(0.7)',
        }}
      />
      <div className="max-w-[1120px] mx-auto px-4 relative z-10 w-full py-14">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, minWidth: '240px' }}>
            <h2
              style={{
                fontSize: 'clamp(22px,4vw,36px)',
                fontWeight: '800',
                color: '#fff',
                lineHeight: 1.2,
              }}
            >
              {deliveryContent.headline}
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                marginTop: '8px',
                fontSize: '16px',
              }}
            >
              {deliveryContent.description}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {deliveryContent.badges.map((badge) => (
              <div
                key={badge.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  padding: '14px 20px',
                  flexShrink: 0,
                }}
              >
                <div>
                  <strong
                    style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: 'var(--orange)',
                      display: 'block',
                      lineHeight: 1,
                    }}
                  >
                    {badge.value}
                  </strong>
                  <span
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {badge.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify DeliveryStrip.tsx was created**

```bash
cat C:\Users\New\Desktop\annika-trading\components\DeliveryStrip.tsx | head -40
```

Expected: File imports content and renders delivery section with badges.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add components/DeliveryStrip.tsx && git commit -m "feat: add DeliveryStrip component"
```

---

### Task 10: Create ReviewCard Subcomponent & Reviews Component

**Files:**
- Create: `components/ReviewCard.tsx`
- Create: `components/Reviews.tsx`

- [ ] **Step 1: Write ReviewCard.tsx (reusable subcomponent)**

```typescript
// components/ReviewCard.tsx
type ReviewCardProps = {
  name: string;
  date: string;
  rating: number;
  stars: string;
  text: string;
};

export default function ReviewCard({
  name,
  date,
  rating,
  stars,
  text,
}: ReviewCardProps) {
  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--r)',
        padding: '24px',
      }}
    >
      {/* Reviewer Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--orange-light)',
            color: 'var(--orange)',
            fontSize: '16px',
            fontWeight: '800',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <div
            style={{
              fontWeight: '700',
              fontSize: '15px',
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: '13px',
              color: 'var(--subtle)',
            }}
          >
            {date}
          </div>
        </div>
      </div>

      {/* Stars */}
      <div
        style={{
          color: '#f5a623',
          fontSize: '15px',
          letterSpacing: '1px',
          marginBottom: '10px',
        }}
      >
        {stars}
      </div>

      {/* Review Text */}
      <p
        style={{
          fontSize: '14px',
          color: 'var(--mid)',
          lineHeight: 1.65,
        }}
      >
        {text}
      </p>

      {/* Google Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--subtle)',
          marginTop: '14px',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: '#4285F4',
            color: '#fff',
            fontSize: '11px',
            fontWeight: '800',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          G
        </div>
        Google Review
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write Reviews.tsx**

```typescript
// components/Reviews.tsx
import { siteContent } from '@/lib/content';
import ReviewCard from './ReviewCard';

const reviewsContent = siteContent.reviews;

export default function Reviews() {
  return (
    <section id="reviews" className="py-[72px] px-4">
      <div className="max-w-[1120px] mx-auto">
        <span className="section-label">{reviewsContent.sectionLabel}</span>
        <h2 className="section-title">{reviewsContent.title}</h2>

        {/* Rating Summary */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
            marginTop: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              fontSize: '52px',
              fontWeight: '800',
              color: 'var(--charcoal)',
              lineHeight: 1,
            }}
          >
            {reviewsContent.ratingOverview.score}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div
              style={{
                color: '#f5a623',
                fontSize: '22px',
                letterSpacing: '2px',
              }}
            >
              {reviewsContent.ratingOverview.stars}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: 'var(--mid)',
              }}
            >
              {reviewsContent.ratingOverview.source}
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          }}
        >
          {reviewsContent.items.map((review) => (
            <ReviewCard
              key={review.name}
              name={review.name}
              date={review.date}
              rating={review.rating}
              stars={review.stars}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify both files were created**

```bash
cat C:\Users\New\Desktop\annika-trading\components\ReviewCard.tsx | head -20
cat C:\Users\New\Desktop\annika-trading\components\Reviews.tsx | head -20
```

Expected: ReviewCard renders individual review, Reviews renders grid with rating summary.

- [ ] **Step 4: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add components/ReviewCard.tsx components/Reviews.tsx && git commit -m "feat: add Reviews and ReviewCard components"
```

---

### Task 11: Create CtaBanner Component

**Files:**
- Create: `components/CtaBanner.tsx`

- [ ] **Step 1: Write CtaBanner.tsx**

```typescript
// components/CtaBanner.tsx
import { siteContent } from '@/lib/content';

const ctaContent = siteContent.cta;

export default function CtaBanner() {
  return (
    <section
      id="contact"
      style={{
        background: 'var(--orange)',
        padding: '72px 0',
        textAlign: 'center',
      }}
      className="px-4"
    >
      <div className="max-w-[1120px] mx-auto">
        <h2
          style={{
            fontSize: 'clamp(26px, 4.5vw, 42px)',
            fontWeight: '800',
            color: '#fff',
            marginBottom: '10px',
          }}
        >
          {ctaContent.headline}
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '18px',
            marginBottom: '36px',
          }}
        >
          {ctaContent.subtitle}
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {ctaContent.buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className={`btn btn-${btn.variant}`}
            >
              {btn.icon}
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify CtaBanner.tsx was created**

```bash
cat C:\Users\New\Desktop\annika-trading\components\CtaBanner.tsx
```

Expected: File imports content and renders CTA section with orange background and buttons.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add components/CtaBanner.tsx && git commit -m "feat: add CtaBanner component"
```

---

### Task 12: Create Footer Component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Write Footer.tsx**

```typescript
// components/Footer.tsx
import { siteContent } from '@/lib/content';

const footerContent = siteContent.footer;

export default function Footer() {
  return (
    <footer
      style={{
        background: 'oklch(0.12 0.01 250)',
        color: 'rgba(255,255,255,0.7)',
        padding: '48px 0 28px',
      }}
      className="px-4"
    >
      <div className="max-w-[1120px] mx-auto">
        {/* Footer Grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-10 mb-9"
          style={{}}
        >
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div
              style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#fff',
                marginBottom: '10px',
              }}
            >
              <span style={{ color: 'var(--orange)' }}>{footerContent.brand}</span>{' '}
              {footerContent.brandHighlight}
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.6,
                maxWidth: '280px',
              }}
            >
              {footerContent.tagline}
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '14px',
              }}
            >
              Navigate
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {footerContent.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.15s',
                    }}
                    className="hover:text-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '14px',
              }}
            >
              Contact
            </h4>
            <address
              style={{
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              {footerContent.contactInfo.address}
              <br />
              <br />
              <a
                href={`tel:+639099931787`}
                style={{
                  color: 'var(--orange)',
                  textDecoration: 'none',
                  fontWeight: '700',
                }}
              >
                {footerContent.contactInfo.phone}
              </a>
              <br />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                {footerContent.contactInfo.hours}
              </span>
            </address>
          </div>
        </div>

        {/* Divider */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '20px',
          }}
        />

        {/* Copyright */}
        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.35)',
            textAlign: 'center',
          }}
        >
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify Footer.tsx was created**

```bash
cat C:\Users\New\Desktop\annika-trading\components\Footer.tsx | head -40
```

Expected: File imports content and renders footer with brand, navigation, contact info.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add components/Footer.tsx && git commit -m "feat: add Footer component"
```

---

### Task 13: Create StickyCallButton Component

**Files:**
- Create: `components/StickyCallButton.tsx`

- [ ] **Step 1: Write StickyCallButton.tsx**

```typescript
// components/StickyCallButton.tsx
'use client';

import { siteContent } from '@/lib/content';
import { useState } from 'react';

const stickyCallContent = siteContent.stickyCall;

export default function StickyCallButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 200,
      }}
      className="md:hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={`tel:${stickyCallContent.phone}`}
        aria-label={stickyCallContent.ariaLabel}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: isHovered ? 'var(--orange-dark)' : 'var(--orange)',
          color: '#fff',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sticky)',
          textDecoration: 'none',
          transition: 'background 0.15s, transform 0.1s',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        ☎️
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Verify StickyCallButton.tsx was created**

```bash
cat C:\Users\New\Desktop\annika-trading\components\StickyCallButton.tsx
```

Expected: File is marked as client component with 'use client', renders mobile-only sticky button.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add components/StickyCallButton.tsx && git commit -m "feat: add StickyCallButton component"
```

---

### Task 14: Update page.tsx to Orchestrate All Components

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace page.tsx with component orchestrator**

```typescript
// app/page.tsx
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StoreInfo from '@/components/StoreInfo';
import Products from '@/components/Products';
import DeliveryStrip from '@/components/DeliveryStrip';
import Reviews from '@/components/Reviews';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StoreInfo />
      <Products />
      <DeliveryStrip />
      <Reviews />
      <CtaBanner />
      <Footer />
      <StickyCallButton />
    </>
  );
}
```

- [ ] **Step 2: Verify page.tsx was updated**

```bash
cat C:\Users\New\Desktop\annika-trading\app\page.tsx
```

Expected: File imports all 9 components and renders them in order.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add app/page.tsx && git commit -m "feat: update page.tsx to orchestrate all components"
```

---

## Phase 3: Build & Verification

### Task 15: Build and Test the Application

**Files:**
- No files modified; verification only

- [ ] **Step 1: Install dependencies (if needed)**

```bash
cd C:\Users\New\Desktop\annika-trading && npm install
```

Expected: All dependencies installed successfully.

- [ ] **Step 2: Run the build**

```bash
cd C:\Users\New\Desktop\annika-trading && npm run build
```

Expected: Build completes with no errors. Output shows all pages compiled.

- [ ] **Step 3: Start the dev server**

```bash
cd C:\Users\New\Desktop\annika-trading && npm run dev
```

Expected: Dev server starts at `http://localhost:3000`

- [ ] **Step 4: Verify landing page renders correctly**

Open browser to `http://localhost:3000` and verify:
- ✅ Nav sticky header with brand and "Call Now" button
- ✅ Hero section with orange accent, location badge, headline, two CTA buttons, stats
- ✅ Store info with address, phone, hours cards and Google Maps embed
- ✅ Products section with 5 category cards in responsive grid
- ✅ Delivery strip with badges
- ✅ Reviews section with 5.0 rating summary and 3 review cards
- ✅ CTA banner with orange background
- ✅ Footer with brand, navigation links, contact info, copyright
- ✅ Sticky call button visible on mobile (<680px)

- [ ] **Step 5: Verify responsiveness**

Test at breakpoints:
- Mobile (< 480px): Phone label hidden in nav, sticky call button visible
- Tablet (< 680px): Footer 1-col layout
- Desktop (≥ 720px): Multi-column layouts

Expected: All layouts adjust correctly per design.

- [ ] **Step 6: Verify links work**

Click on all phone numbers, map buttons, and navigation links:
- ✅ Phone links trigger tel: protocol
- ✅ Map links open Google Maps
- ✅ Navigation links scroll to sections (if using smooth scroll)
- ✅ All external links (Google Maps) open in new tab

- [ ] **Step 7: Final commit**

```bash
cd C:\Users\New\Desktop\annika-trading && git add . && git commit -m "feat: complete landing page implementation and verification"
```

---

## Checklist Summary

✅ **Phase 1: Foundation**
- [ ] Design system (styles/tokens.css)
- [ ] Content data (lib/content.ts)
- [ ] Layout metadata & fonts (app/layout.tsx)
- [ ] Global styles (app/globals.css)

✅ **Phase 2: Components (11 total)**
- [ ] Nav component
- [ ] Hero component
- [ ] StoreInfo component
- [ ] ProductCard + Products components
- [ ] DeliveryStrip component
- [ ] ReviewCard + Reviews components
- [ ] CtaBanner component
- [ ] Footer component
- [ ] StickyCallButton component
- [ ] Page orchestrator (app/page.tsx)

✅ **Phase 3: Verification**
- [ ] Build succeeds
- [ ] Dev server starts
- [ ] All sections render correctly
- [ ] Responsive layouts work
- [ ] Links function
- [ ] Final commit

---

## Notes

- All components use `siteContent` from `lib/content.ts` — centralized content management
- CSS custom properties for design tokens (colors, shadows, spacing)
- Tailwind utilities for layout, responsive, spacing
- No JavaScript interactivity beyond CSS hover states and React state for button hover
- Components are self-contained and independently testable
- Structure supports future CMS integration by replacing content.ts with API calls
