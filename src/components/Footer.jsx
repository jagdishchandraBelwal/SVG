export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
                SVG
              </div>
              <span className="font-bold text-white text-lg">SVG Express</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Delivering Happiness Across All Locations. Logistics, warehousing and specialised services across North India since 2002.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Partner with Us</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">B2B Logistics</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Warehousing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">KYC / CPV</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">e-Governance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Plot no 62, Lane No-2, Gopalbari, Jaipur – 302001
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 0141-6610500
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hr@svgjpr.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SVG Express Services Pvt. Ltd. All rights reserved.</p>
          <p>Sample Landing Page – Designed for interview presentation</p>
        </div>
      </div>
    </footer>
  )
}
