import Image from 'next/image'
import { Star } from 'lucide-react'
import { products } from '@/data/products'

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const partial = rating - full

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < full) {
            return <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          }
          if (i === full && partial >= 0.5) {
            return (
              <span key={i} className="relative w-3.5 h-3.5">
                <Star className="absolute inset-0 w-3.5 h-3.5 text-amber-400" />
                <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </span>
              </span>
            )
          }
          return <Star key={i} className="w-3.5 h-3.5 text-neutral-200 fill-neutral-200" />
        })}
      </div>
      <span className="text-sm font-semibold text-neutral-700">{rating}</span>
    </div>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <a
      href={product.shopifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex flex-col bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden w-56 shrink-0 mx-2.5 hover:shadow-md hover:border-brand-soft transition-all duration-200"
    >
      {/* Product image */}
      <div className="relative w-full aspect-square overflow-hidden bg-brand-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="224px"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Price row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-brand-primary text-sm">{product.price}</span>
          <span className="text-neutral-400 text-xs line-through">{product.originalPrice}</span>
        </div>

        {/* Product name */}
        <p className="text-neutral-800 text-sm leading-snug line-clamp-3 flex-1 capitalize">
          {product.name}
        </p>

        {/* Star rating */}
        <StarRating rating={product.rating} />

        {/* Shop Now button */}
        <span className="mt-1 w-full bg-brand-primary group-hover:bg-brand-dark text-white text-sm font-bold text-center rounded-full py-2.5 transition-colors duration-200 block">
          Shop Now
        </span>
      </div>
    </a>
  )
}

export function ProductsScroll() {
  return (
    <section className="py-20 bg-neutral-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10">
        <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">
          Our Products
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-neutral-900">
          Shop our care collection
        </h2>
      </div>

      <div className="animate-marquee">
        {[...products, ...products].map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </section>
  )
}
