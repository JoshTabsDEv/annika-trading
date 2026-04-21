// components/StoreInfo.tsx
import { siteContent } from '@/lib/content';

const storeInfoContent = siteContent.storeInfo;

export default function StoreInfo() {
  return (
    <section id="info" className="py-[72px] px-4">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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
