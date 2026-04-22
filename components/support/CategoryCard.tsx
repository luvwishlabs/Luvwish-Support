import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Category } from '@/data/categories'

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon

  return (
    <Link
      href={`/support/${category.slug}`}
      className={`group relative flex flex-col justify-between ${category.bgColor} rounded-3xl p-5 min-h-[260px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
    >
      {/* Top row: badge pills + circle indicator */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex gap-1.5 flex-wrap">
          <span className="text-[11px] font-medium bg-white px-3 py-1 rounded-full text-neutral-600 shadow-sm">
            {category.articleCount} articles
          </span>
          <span className="text-[11px] font-medium bg-white px-3 py-1 rounded-full text-neutral-600 shadow-sm">
            Support
          </span>
        </div>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${category.circleColor}`}>
          <Icon className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* Title + description */}
      <div className="mt-6 flex-1">
        <h3 className="font-poppins font-black text-[22px] text-neutral-900 leading-tight tracking-tight mb-2.5">
          {category.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 bg-neutral-900 group-hover:bg-neutral-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200">
          Read More
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
