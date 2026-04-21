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
