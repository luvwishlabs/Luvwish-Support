import { notFound } from 'next/navigation'
import { categories } from '@/data/categories'
import { articles } from '@/data/articles'
import { BreadcrumbNav } from '@/components/support/BreadcrumbNav'
import Link from 'next/link'
import { ArrowRight, FileQuestion, MessageCircle } from 'lucide-react'

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params
  const categorySlug = resolvedParams.category

  const category = categories.find(c => c.slug === categorySlug)
  if (!category) notFound()

  const categoryArticles = articles.filter(a => a.categorySlug === categorySlug)
  const otherCategories = categories.filter(c => c.slug !== categorySlug).slice(0, 3)
  const Icon = category.icon

  return (
    <div className="bg-neutral-50 min-h-screen">

      {/* ── HERO ── */}
      <section className={`${category.bgColor} px-4 sm:px-6 pt-8 pb-12`}>
        <div className="max-w-5xl mx-auto">
          <BreadcrumbNav
            crumbs={[
              { label: 'Help Center', href: '/support' },
              { label: category.title }
            ]}
          />

          <div className="mt-8 flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex gap-2 mb-5">
                <span className="bg-white/80 backdrop-blur-sm text-[11px] font-semibold px-3 py-1 rounded-full text-neutral-600 shadow-sm">
                  {categoryArticles.length} articles
                </span>
                <span className="bg-white/80 backdrop-blur-sm text-[11px] font-semibold px-3 py-1 rounded-full text-neutral-600 shadow-sm">
                  Support
                </span>
              </div>
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-3">
                {category.title}
              </h1>
              <p className="text-neutral-600 text-base max-w-lg leading-relaxed">
                {category.description}
              </p>
            </div>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${category.circleColor} shadow-lg`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES + SIDEBAR ── */}
      <section className="px-4 sm:px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 items-start">

          {/* Articles */}
          <div>
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">
              {categoryArticles.length} articles in this category
            </p>

            {categoryArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categoryArticles.map((article, i) => (
                  <Link
                    key={article.slug}
                    href={`/support/article/${article.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-neutral-100 p-5 hover:shadow-lg hover:-translate-y-0.5 hover:border-neutral-200 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${category.tagColor}`}>
                        #{i + 1}
                      </span>
                      <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 text-sm leading-snug mb-2 group-hover:text-brand-primary transition-colors flex-1">
                      {article.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-6 bg-white rounded-2xl border border-neutral-100">
                <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileQuestion className="w-7 h-7 text-neutral-400" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-1">No articles yet</h3>
                <p className="text-sm text-neutral-400">We&apos;re still writing helpful content for this category.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Need help card */}
            <div className="bg-brand-primary rounded-2xl p-5 text-white">
              <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-4.5 h-4.5 text-white" />
              </div>
              <h3 className="font-bold text-base mb-1.5">Still need help?</h3>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                Can&apos;t find your answer? Our care team responds within a few hours.
              </p>
              <Link
                href="/contact-support"
                className="inline-block w-full text-center bg-white text-brand-primary text-xs font-bold rounded-full px-4 py-2.5 hover:bg-brand-light transition-colors"
              >
                Contact Support →
              </Link>
            </div>

            {/* Other categories */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-5">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Other topics</p>
              <div className="flex flex-col gap-1">
                {otherCategories.map(cat => {
                  const CatIcon = cat.icon
                  return (
                    <Link
                      key={cat.slug}
                      href={`/support/${cat.slug}`}
                      className="group flex items-center gap-3 py-2.5 px-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors"
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${cat.circleColor}`}>
                        <CatIcon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700 group-hover:text-brand-primary transition-colors">
                        {cat.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-300 ml-auto group-hover:text-brand-primary transition-colors" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
