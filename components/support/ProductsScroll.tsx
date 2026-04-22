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
          if (i < full) return <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          if (i === full && partial >= 0.5) return (
            <span key={i} className="relative w-3 h-3">
              <Star className="absolute inset-0 w-3 h-3 text-amber-400" />
              <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </span>
            </span>
          )
          return <Star key={i} className="w-3 h-3 text-neutral-200 fill-neutral-200" />
        })}
      </div>
      <span className="text-xs text-neutral-500">{rating}</span>
    </div>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <a
      href={product.shopifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex flex-col bg-white rounded-2xl overflow-hidden w-52 shrink-0 mx-2.5 border border-neutral-100 hover:border-brand-soft hover:shadow-md transition-all duration-200"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-neutral-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="208px"
        />
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 bg-brand-primary text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-3.5 gap-1.5">
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-brand-primary text-sm">{product.price}</span>
          <span className="text-neutral-300 text-xs line-through">{product.originalPrice}</span>
        </div>
        <p className="text-neutral-800 text-xs leading-snug line-clamp-2 flex-1 capitalize">
          {product.name}
        </p>
        <StarRating rating={product.rating} />
        <span className="mt-1.5 w-full bg-brand-primary group-hover:bg-brand-dark text-white text-xs font-semibold text-center rounded-full py-2 transition-colors duration-200 block">
          Shop Now
        </span>
      </div>
    </a>
  )
}

export function ProductsScroll() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8 flex items-end justify-between">
        <h2 className="font-poppins text-3xl font-bold text-neutral-900">
          Our essentials
        </h2>
        <a
          href="https://luvwish.in/collections/all"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-brand-primary hover:text-brand-dark transition-colors"
        >
          View all →
        </a>
      </div>

      <div className="animate-marquee">
        {[...products, ...products].map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </section>
  )
}
