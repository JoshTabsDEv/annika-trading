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
