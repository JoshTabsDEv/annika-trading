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
