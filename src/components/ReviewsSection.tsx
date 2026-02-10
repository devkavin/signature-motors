import { reviews } from '@/data/inventory';

export function ReviewsSection() {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  const avg = total / reviews.length;

  return (
    <section id="reviews" className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">Customer Reviews</h2>
      <p className="text-sm text-slate-600">Average {avg.toFixed(1)} / 5 from {reviews.length} verified buyers.</p>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900">{review.name}</h3>
            <p className="text-xs text-slate-500">{new Date(review.date).toLocaleDateString()}</p>
            <p className="text-amber-500" aria-label={`${review.rating} star rating`}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            <p className="mt-2 text-sm text-slate-700">{review.feedback}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
