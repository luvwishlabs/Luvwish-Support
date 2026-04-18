import Link from 'next/link'
import { ArrowLeft, Clock, Heart, Lock, Mail, Phone } from 'lucide-react'

export const metadata = {
  title: 'Contact Support | Luvwish Help Center',
  description: 'Reach out to the Luvwish care team for any support questions or requests.',
}

export default function ContactSupportPage() {
  return (
    <div className="bg-neutral-50 pb-16">
      {/* HERO SECTION */}
      <section className="pt-8 pb-20 bg-brand-primary px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-left mb-8">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Help Center
            </Link>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Support
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
            Submit your request and our care team will get back to you within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-2 text-white/90 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4 fill-white" /> Empathetic support
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" /> 24hr response time
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Lock className="w-4 h-4" /> Your info is safe
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="px-4 sm:px-6 -mt-10">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-neutral-200 shadow-lg p-4 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-2xl font-bold text-neutral-900 mb-2">Submit a Request</h2>
            <p className="text-neutral-500">Fill in the details below and we&apos;ll be in touch soon.</p>
          </div>

          {/* TALLY EMBED */}
          <div className="w-full bg-neutral-50 rounded-2xl overflow-hidden min-h-150 relative border border-neutral-100">
            <iframe
              src="https://tally.so/r/kdRR71?transparentBackground=1"
              width="100%"
              height="700"
              title="Luvwish Support Request"
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>

          <p className="text-xs text-neutral-400 text-center mt-6 flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3" />
            Your information is private and will only be used to resolve your request.
          </p>
        </div>
      </section>

      {/* OTHER CONTACT METHODS */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl font-bold text-neutral-900 mb-8 text-center">
            Other Ways to Reach Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a href="mailto:luvwisho@gmail.com" className="group bg-white border border-neutral-200 hover:border-brand-soft rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-1">Email</h3>
              <p className="text-brand-primary text-sm">luvwisho@gmail.com</p>
            </a>

            <a href="tel:+919061064554" className="group bg-white border border-neutral-200 hover:border-brand-soft rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-1">Phone</h3>
              <p className="text-brand-primary text-sm">+91 90610 64554</p>
            </a>

            <a href="https://instagram.com/luvwish.in" target="_blank" rel="noopener noreferrer" className="group bg-white border border-neutral-200 hover:border-brand-soft rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-brand-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-1">Instagram</h3>
              <p className="text-brand-primary text-sm">@luvwish.in</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
