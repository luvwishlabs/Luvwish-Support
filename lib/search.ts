import { Article } from '@/data/articles'

export function searchArticles(query: string, articles: Article[]): Article[] {
  if (!query || query.trim().length < 2) return []
  
  const q = query.toLowerCase().trim()
  
  return articles
    .filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.categorySlug.toLowerCase().includes(q)
    )
    .slice(0, 5) // Return max 5 results
}
