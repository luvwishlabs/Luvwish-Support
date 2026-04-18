import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Category } from '@/data/categories'

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon

  return (
    <Link
      href={`/support/${category.slug}`}
      className="group flex items-center gap-5 bg-white border border-neutral-200 rounded-2xl px-6 py-5 hover:border-brand-primary/30 hover:bg-brand-light/40 hover:shadow-md transition-all duration-200"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
        <Icon className="w-5 h-5" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-neutral-900 group-hover:text-brand-primary transition-colors mb-0.5">
          {category.title}
        </h3>
        <p className="text-sm text-neutral-400 truncate">{category.description}</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 shrink-0">
        <span className="hidden sm:block text-xs text-neutral-400 font-medium">{category.articleCount} articles</span>
        <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all duration-200" />
      </div>
    </Link>
  )
}
