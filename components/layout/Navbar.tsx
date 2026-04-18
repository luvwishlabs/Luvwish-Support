import Link from 'next/link'
import { HeadphonesIcon } from 'lucide-react'

export function Navbar() {
  return (
    <>
      {/* Announcement bar — matches luvwish.in top strip */}
      <div className="bg-brand-primary text-white text-center text-xs sm:text-sm font-medium py-2.5 px-4">
        🛵 Need help with your order? We&apos;re here for you - reach out anytime!
      </div>

      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Left: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            <Link href="/support" className="text-sm font-medium text-neutral-700 hover:text-brand-primary transition-colors">
              Help Center
            </Link>
            <Link href="/support/orders" className="text-sm font-medium text-neutral-700 hover:text-brand-primary transition-colors">
              Orders
            </Link>
            <Link href="/support/returns-refunds" className="text-sm font-medium text-neutral-700 hover:text-brand-primary transition-colors">
              Returns
            </Link>
          </div>

          {/* Center: Logo */}
          <div className="shrink-0 mx-auto md:mx-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            <Link href="/support" className="font-playfair font-bold text-2xl text-brand-primary tracking-tight">
              Luvwish
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <Link
              href="/contact-support"
              className="inline-flex items-center gap-2 bg-brand-primary text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-brand-dark transition-colors duration-200 shadow-sm"
            >
              <HeadphonesIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Contact Support</span>
              <span className="sm:hidden">Help</span>
            </Link>
          </div>

        </div>
      </nav>
    </>
  )
}
