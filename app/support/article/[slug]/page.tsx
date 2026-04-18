import { notFound } from 'next/navigation'
import { articles, ArticleSection } from '@/data/articles'
import { categories } from '@/data/categories'
import { BreadcrumbNav } from '@/components/support/BreadcrumbNav'
import { FeedbackWidget } from '@/components/support/FeedbackWidget'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const article = articles.find(a => a.slug === resolvedParams.slug)
  
  if (!article) {
    notFound()
  }

  const category = categories.find(c => c.slug === article.categorySlug)
  if (!category) return null

  const relatedArticles = articles.filter(a => article.relatedSlugs.includes(a.slug))

  const renderSection = (section: ArticleSection, index: number) => {
    switch (section.type) {
      case 'paragraph':
        return <p key={index}>{section.content}</p>
      case 'heading':
        return <h2 key={index}>{section.content}</h2>
      case 'bullets':
        return (
          <ul key={index}>
            {(section.content as string[]).map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )
      case 'note':
        return (
          <div key={index} className="note-box">
            <strong>Note: </strong> {section.content}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-neutral-50 px-4 sm:px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <BreadcrumbNav
          crumbs={[
            { label: 'Help Center', href: '/support' },
            { label: category.title, href: `/support/${category.slug}` },
            { label: article.title.length > 30 ? article.title.substring(0, 30) + '...' : article.title }
          ]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14">
          {/* LEFT COLUMN - Article Content */}
          <article className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8">
            <div className="mb-8">
              <span className="inline-flex items-center bg-brand-light text-brand-primary rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                {category.title}
              </span>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-3">
                {article.title}
              </h1>
              <p className="text-sm text-neutral-400">Updated {article.updatedAt}</p>
            </div>

            <div className="article-prose">
              {article.content.map((section, index) => renderSection(section, index))}
            </div>

            <FeedbackWidget />
          </article>

          {/* RIGHT COLUMN - Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit flex flex-col gap-5">

            {/* Related Articles Box */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                <h3 className="font-semibold text-neutral-900 mb-4 text-sm uppercase tracking-wide">Related Articles</h3>
                <ul className="space-y-3">
                  {relatedArticles.map(rel => (
                    <li key={rel.slug}>
                      <Link
                        href={`/support/article/${rel.slug}`}
                        className="group flex items-center justify-between gap-2"
                      >
                        <span className="text-sm text-neutral-700 group-hover:text-brand-primary transition-colors font-medium leading-snug">
                          {rel.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-brand-primary shrink-0 transition-all group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Still Need Help Box */}
            <div className="bg-brand-primary rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Still need help?</h3>
              <p className="text-sm text-white/80 mb-5">
                Our team is ready to answer any questions you might have.
              </p>
              <Link
                href="/contact-support"
                className="flex items-center justify-center gap-2 w-full bg-white text-brand-primary rounded-full px-4 py-2.5 text-sm font-bold hover:bg-brand-light transition-colors shadow-sm"
              >
                Contact Support <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  )
}
