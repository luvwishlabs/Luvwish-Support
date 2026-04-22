import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 pb-8">

        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-white/20 pb-10 mb-10">

          {/* Brand block */}
          <div>
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">Help Customers</p>
            <Image src="/luv6.png" alt="Luvwish" width={160} height={52} className="h-14 w-auto rounded-xl object-contain mb-5" />
            <div className="space-y-1.5 text-sm text-white/80 mb-5">
              <a href="tel:+919061064554" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +91 90610 64554
              </a>
              <a href="mailto:luvwisho@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> luvwisho@gmail.com
              </a>
            </div>
            <a
              href="https://instagram.com/luvwish.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/40 hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-4">Help Center</h4>
              <ul className="space-y-2.5 text-white/75">
                <li><Link href="/support" className="hover:text-white transition-colors">Help Center Home</Link></li>
                <li><Link href="/support/article/how-to-track-my-order" className="hover:text-white transition-colors">Track Order</Link></li>
                <li><Link href="/contact-support" className="hover:text-white transition-colors">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Categories</h4>
              <ul className="space-y-2.5 text-white/75">
                <li><Link href="/support/orders" className="hover:text-white transition-colors">Orders</Link></li>
                <li><Link href="/support/shipping-delivery" className="hover:text-white transition-colors">Shipping</Link></li>
                <li><Link href="/support/returns-refunds" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link href="/support/payments" className="hover:text-white transition-colors">Payments</Link></li>
                <li><Link href="/support/product-queries" className="hover:text-white transition-colors">Product Queries</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Policies</h4>
              <ul className="space-y-2.5 text-white/75">
                <li><a href="https://luvwish.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Visit Store</a></li>
                <li><a href="https://www.luvwish.in/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="https://www.luvwish.in/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 gap-2">
          <p>© 2025 Luvwish. All rights reserved.</p>
          <p>Made with 💗 for every woman&apos;s comfort.</p>
        </div>
      </div>
    </footer>
  )
}
