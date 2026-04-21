// components/Reviews.tsx
import { siteContent } from '@/lib/content';
import ReviewCard from './ReviewCard';

const reviewsContent = siteContent.reviews;

export default function Reviews() {
  return (
    <section id="reviews" className="py-[72px] px-4">
      <div className="max-w-[1120px] mx-auto">
        <span className="section-label">{reviewsContent.sectionLabel}</span>
        <h2 className="section-title">{reviewsContent.title}</h2>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
            marginTop: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              fontSize: '52px',
              fontWeight: '800',
              color: 'var(--charcoal)',
              lineHeight: 1,
            }}
          >
            {reviewsContent.ratingOverview.score}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div
              style={{
                color: '#f5a623',
                fontSize: '22px',
                letterSpacing: '2px',
              }}
            >
              {reviewsContent.ratingOverview.stars}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: 'var(--mid)',
              }}
            >
              {reviewsContent.ratingOverview.source}
            </div>
          </div>
        </div>

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          }}
        >
          {reviewsContent.items.map((review) => (
            <ReviewCard
              key={review.name}
              name={review.name}
              date={review.date}
              rating={review.rating}
              stars={review.stars}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
