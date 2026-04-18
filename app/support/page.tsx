import { SearchBar } from '@/components/support/SearchBar'
import { CategoryCard } from '@/components/support/CategoryCard'
import { ReviewsScroll } from '@/components/support/ReviewsScroll'
import { ProductsScroll } from '@/components/support/ProductsScroll'
import { categories } from '@/data/categories'
import { articles } from '@/data/articles'
import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'

export default function SupportHome() {
  const pinnedArticles = articles.filter(a => a.isPinned)

  return (
    <div className="bg-neutral-50">

      {/* ── HERO ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">

          <div className="anim-fade-up inline-flex items-center gap-2 bg-brand-light border border-brand-soft rounded-full px-4 py-1.5 text-sm font-semibold text-brand-primary mb-6">
            <Heart className="w-4 h-4 fill-brand-primary" />
            We&apos;re here for you
          </div>

          <h1 className="anim-fade-up anim-delay-1 font-playfair text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-5 leading-tight">
            How can we<br className="hidden sm:block" /> help you?
          </h1>

          <p className="anim-fade-up anim-delay-2 text-lg text-neutral-500 mb-10 max-w-lg mx-auto">
            Find answers, track orders, or reach our care team - all in one place.
          </p>

          <div className="anim-fade-up anim-delay-3">
            <SearchBar autoFocus />
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20 px-4 sm:px-6 bg-neutral-50">
        <div className="max-w-2xl mx-auto">
          <div className="anim-fade-up mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
              What do you need help with?
            </h2>
            <p className="text-neutral-500">Pick a topic and we&apos;ll guide you from there.</p>
          </div>

          <div className="flex flex-col gap-3">
            {categories.map((category, i) => (
              <div
                key={category.slug}
                className={`anim-fade-up anim-delay-${Math.min(i + 1, 7)}`}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS — left/right scroll ── */}
      <ReviewsScroll />

      {/* ── PRODUCTS SCROLL ── */}
      <ProductsScroll />

      {/* ── POPULAR ARTICLES ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="anim-fade-up font-playfair text-3xl md:text-4xl font-bold text-neutral-900 mb-10">
            Popular Articles
          </h2>

          <div className="flex flex-col divide-y divide-neutral-100">
            {pinnedArticles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/support/article/${article.slug}`}
                className={`anim-fade-up anim-delay-${Math.min(i + 1, 7)} group flex flex-col sm:flex-row sm:items-center justify-between py-5 hover:bg-brand-light/40 px-4 -mx-4 rounded-2xl transition-colors`}
              >
                <div className="mb-2 sm:mb-0 pr-4">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-brand-primary transition-colors">
                      {article.title}
                    </h3>
                    <span className="inline-flex items-center bg-brand-light text-brand-primary rounded-full px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider">
                      {article.categorySlug.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500">{article.excerpt}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-brand-primary transition-all group-hover:translate-x-1 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT BANNER ── */}
      <section className="py-16 px-4 sm:px-6 bg-neutral-50">
        <div className="max-w-3xl mx-auto bg-brand-primary rounded-3xl p-10 text-center shadow-lg">
          <h3 className="font-playfair text-3xl font-bold text-white mb-3">Still need help?</h3>
          <p className="text-white/80 mb-8 max-w-md mx-auto text-base">
            Our care team is always here for you. Don&apos;t hesitate to reach out.
          </p>
          <Link
            href="/contact-support"
            className="inline-block bg-white text-brand-primary rounded-full px-8 py-3 font-bold hover:bg-brand-light transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Contact Support &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
