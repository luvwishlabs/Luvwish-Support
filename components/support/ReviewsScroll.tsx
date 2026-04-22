import { Star } from 'lucide-react'

const row1 = [
  {
    name: 'Priya S.',
    location: 'Mumbai',
    text: 'The sanitary pads are so comfortable! No leakage, no rash. Finally a brand that truly cares about comfort.',
    product: 'Cotton XL Sanitary Pads',
  },
  {
    name: 'Ananya R.',
    location: 'Bengaluru',
    text: 'Ordered the cramp relief oil and it worked within 20 minutes. Absolute lifesaver during my period!',
    product: 'Cramp Relief Essential',
  },
  {
    name: 'Meera K.',
    location: 'Delhi',
    text: 'Customer support was incredible! Had a delivery issue and they resolved it within hours. Love this brand.',
    product: 'Customer Experience',
  },
  {
    name: 'Divya T.',
    location: 'Chennai',
    text: 'Switched from my old brand to Luvwish and the quality difference is unreal. So glad I found them!',
    product: 'Sanitary Pads',
  },
]

const row2 = [
  {
    name: 'Sneha M.',
    location: 'Pune',
    text: 'The dark circles serum is amazing - I can see results after just a week. Packaging is gorgeous too.',
    product: 'Dark Circles Serum',
  },
  {
    name: 'Kavya L.',
    location: 'Hyderabad',
    text: 'Fastest delivery I have ever seen! Products arrived next day, perfectly packed. Will keep ordering.',
    product: 'Order & Shipping',
  },
  {
    name: 'Riya P.',
    location: 'Jaipur',
    text: 'Love that the pads are made with organic cotton. No irritation at all. This is my forever brand now.',
    product: 'Organic Cotton Pads',
  },
  {
    name: 'Nisha A.',
    location: 'Kolkata',
    text: 'Returns process was so smooth. No questions asked, refund came within 3 days. Excellent service!',
    product: 'Returns Experience',
  },
]

function ReviewCard({ review }: { review: typeof row1[0] }) {
  return (
    <div className="inline-flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl p-5 w-68 shrink-0 mx-2.5 border border-white/20">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
        ))}
      </div>
      <p className="text-white/90 text-sm leading-relaxed mb-4 flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-semibold text-xs shrink-0">
          {review.name[0]}
        </div>
        <div>
          <p className="font-medium text-white text-xs">{review.name}</p>
          <p className="text-white/50 text-xs">{review.location}</p>
        </div>
      </div>
    </div>
  )
}

export function ReviewsScroll() {
  return (
    <section className="py-16 bg-brand-primary overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white">
          Real stories from<br className="hidden sm:block" /> real customers
        </h2>
      </div>

      <div className="animate-marquee mb-4">
        {[...row1, ...row1].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>

      <div className="animate-marquee-reverse">
        {[...row2, ...row2].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </section>
  )
}
