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
