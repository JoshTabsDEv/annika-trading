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
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-10 mb-9"
        >
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

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '20px',
          }}
        />

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
