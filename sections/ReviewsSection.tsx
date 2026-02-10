import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  const avg = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="section-title">Customer reviews</h2>
        <p className="section-subtitle">Rated {avg}/5 from {reviews.length} verified buyer testimonials.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={`${review.name}-${review.date}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{review.name}</h3>
                <span className="text-sm text-slate-500">{new Date(review.date).toLocaleDateString("en-GB")}</span>
              </div>
              <p className="mt-2 text-amber-500" aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
              <p className="mt-2 text-sm text-slate-700">{review.comment}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
