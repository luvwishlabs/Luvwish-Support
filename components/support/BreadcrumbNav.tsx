import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Fragment } from 'react'

export interface Breadcrumb {
  label: string
  href?: string
}

interface BreadcrumbNavProps {
  crumbs: Breadcrumb[]
}

export function BreadcrumbNav({ crumbs }: BreadcrumbNavProps) {
  return (
    <nav className="flex items-center text-sm text-neutral-500 overflow-x-auto whitespace-nowrap py-4">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1
        
        return (
          <Fragment key={index}>
            {crumb.href && !isLast ? (
              <Link href={crumb.href} className="hover:text-brand-primary transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className={`truncate ${isLast ? 'text-neutral-900 font-medium' : ''}`}>
                {crumb.label}
              </span>
            )}
            
            {!isLast && (
              <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0 text-neutral-300" />
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
