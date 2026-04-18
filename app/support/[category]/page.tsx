import { notFound } from 'next/navigation'
import { categories } from '@/data/categories'
import { articles } from '@/data/articles'
import { BreadcrumbNav } from '@/components/support/BreadcrumbNav'
import Link from 'next/link'
import { ArrowRight, FileQuestion } from 'lucide-react'

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params
  const categorySlug = resolvedParams.category

  const category = categories.find(c => c.slug === categorySlug)
  if (!category) notFound()

  const categoryArticles = articles.filter(a => a.categorySlug === categorySlug)
  const Icon = category.icon

  return (
    <div className="bg-neutral-50">
      {/* CATEGORY HERO */}
      <section className="py-12 bg-white border-b border-neutral-100 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <BreadcrumbNav
            crumbs={[
              { label: 'Help Center', href: '/support' },
              { label: category.title }
            ]}
          />

          <div className="mt-8 flex items-start gap-5">
            <div className="w-14 h-14 bg-brand-light text-brand-primary rounded-xl flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-neutral-900 mb-2">{category.title}</h1>
              <p className="text-neutral-500 mb-4">{category.description}</p>
              <span className="inline-flex items-center bg-brand-light text-brand-primary rounded-full px-4 py-1 text-sm font-semibold">
                {categoryArticles.length} articles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE LIST SECTION */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          {categoryArticles.length > 0 ? (
            <div className="divide-y divide-neutral-100">
              {categoryArticles.map(article => (
                <Link
                  key={article.slug}
                  href={`/support/article/${article.slug}`}
                  className="group flex items-center justify-between px-6 py-5 hover:bg-brand-light/40 transition-colors"
                >
                  <div className="pr-4">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-brand-primary transition-colors mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-500 line-clamp-1">{article.excerpt}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-brand-primary transition-all group-hover:translate-x-1 shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-6">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileQuestion className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">No articles yet</h3>
              <p className="text-neutral-500">We&apos;re still writing helpful content for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT SUPPORT BANNER */}
      <section className="py-8 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-brand-primary rounded-3xl p-10 text-center shadow-lg">
          <h3 className="font-playfair text-2xl font-bold text-white mb-3">Still need help?</h3>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Our care team is always here for you. Don&apos;t hesitate to reach out.
          </p>
          <Link
            href="/contact-support"
            className="inline-block bg-white text-brand-primary rounded-full px-8 py-3 font-bold hover:bg-brand-light transition-colors duration-200 shadow-sm"
          >
            Contact Support &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
