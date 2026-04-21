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

      <p
        style={{
          fontSize: '14px',
          color: 'var(--mid)',
          lineHeight: 1.65,
        }}
      >
        {text}
      </p>

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
