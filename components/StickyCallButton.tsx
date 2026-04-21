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
        href={`tel:+${stickyCallContent.phone}`}
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
