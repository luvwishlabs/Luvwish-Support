import Image from 'next/image'
import { SearchBar } from '@/components/support/SearchBar'
import { CategoryCard } from '@/components/support/CategoryCard'
import { categories } from '@/data/categories'
import { articles } from '@/data/articles'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

const quickLinks = [
  { label: 'Track my order', href: '/support/orders' },
  { label: 'Return a product', href: '/support/returns-refunds' },
  { label: 'Payment failed', href: '/support/payments' },
  { label: 'Delayed delivery', href: '/support/shipping-delivery' },
  { label: 'Product questions', href: '/support/product-queries' },
]

export default function SupportHome() {
  const pinnedArticles = articles.filter(a => a.isPinned)

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-brand-primary min-h-[480px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/luvwish-hero-support/1400/600"
            alt="Luvwish support hero"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/90 to-brand-primary/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
              Luvwish · Customer Support
            </span>
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-[64px] font-bold text-white leading-tight mb-4">
              We&apos;re here<br className="hidden sm:block" /> to help you.
            </h1>
            <p className="text-white/70 text-base mb-8 max-w-md">
              Find answers, track orders, manage returns, and get in touch with our team.
            </p>

            {/* Search */}
            <div className="max-w-xl">
              <SearchBar autoFocus />
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-2 mt-5">
              {quickLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium text-white/80 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3.5 py-1.5 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPLIT INFO STRIP ── */}
      <section className="border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-neutral-900 leading-snug">
              Get the right help,<br className="hidden sm:block" /> right away.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-neutral-500 text-base leading-relaxed">
              Our support centre covers everything from order tracking to product questions. Browse by topic, search for answers, or connect directly with our team — we typically respond within a few hours.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/contact-support"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Contact support
              </Link>
              <Link
                href="/support"
                className="text-sm font-medium text-neutral-500 hover:text-brand-primary transition-colors"
              >
                Browse all articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 px-4 sm:px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2">Help topics</p>
            <h2 className="font-poppins text-3xl font-bold text-neutral-900">Browse by category</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(category => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── hidden */}
      {/* <ReviewsScroll /> */}

      {/* ── PRODUCTS ── hidden */}
      {/* <ProductsScroll /> */}

      {/* ── POPULAR ARTICLES ── */}
      <section className="py-14 px-4 sm:px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-1">Quick reads</p>
              <h2 className="font-poppins text-2xl font-bold text-neutral-900">Helpful articles</h2>
            </div>
            <Link href="/support" className="text-sm text-brand-primary hover:text-brand-dark font-medium transition-colors">
              All articles →
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-100 divide-y divide-neutral-100 overflow-hidden">
            {pinnedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/support/article/${article.slug}`}
                className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-brand-light/30 transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="font-medium text-neutral-900 text-sm group-hover:text-brand-primary transition-colors">
                      {article.title}
                    </h3>
                    <span className="text-[10px] text-brand-primary bg-brand-light rounded-full px-2 py-0.5 font-semibold uppercase tracking-wide">
                      {article.categorySlug.replace(/-/g, ' ')}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 truncate">{article.excerpt}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
