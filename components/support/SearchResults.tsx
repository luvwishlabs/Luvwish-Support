import { Article } from '@/data/articles'
import Link from 'next/link'
import { SearchX } from 'lucide-react'

interface SearchResultsProps {
  query: string
  results: Article[]
  onClose: () => void
}

export function SearchResults({ query, results, onClose }: SearchResultsProps) {
  if (query.length < 2) return null

  return (
    <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-xl shadow-lg border border-neutral-200 py-2 max-h-96 overflow-y-auto">
      {results.length > 0 ? (
        results.map(article => (
          <Link
            key={article.slug}
            href={`/support/article/${article.slug}`}
            onClick={() => {
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur()
              }
              onClose()
            }}
            className="block px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100 last:border-0 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-neutral-900">{article.title}</h4>
                  <span className="inline-flex items-center bg-brand-light text-brand-primary rounded-full px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider">
                    {article.categorySlug.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 truncate" title={article.excerpt}>
                  {article.excerpt.length > 60 ? article.excerpt.substring(0, 60) + '...' : article.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="px-6 py-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-3">
            <SearchX className="w-6 h-6 text-neutral-400" />
          </div>
          <p className="text-neutral-700 font-medium mb-1">No results for &quot;{query}&quot;</p>
          <p className="text-sm text-neutral-500">
            Try searching for orders, shipping, or refunds instead.
          </p>
        </div>
      )}
    </div>
  )
}
