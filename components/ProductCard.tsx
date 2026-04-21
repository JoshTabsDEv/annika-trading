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
        border: '1px solid var(--white-01)',
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
          background: 'var(--white-indicator)',
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
            color: 'var(--white)',
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--white-5)',
            marginTop: '5px',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
