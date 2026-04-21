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
                color: 'var(--white)',
                lineHeight: 1.2,
              }}
            >
              {deliveryContent.headline}
            </h2>
            <p
              style={{
                color: 'var(--white-65)',
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
                  background: 'var(--white-08)',
                  border: '1px solid var(--white-15)',
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
                      color: 'var(--white-6)',
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
