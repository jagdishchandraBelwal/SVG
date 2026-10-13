const services = [
  {
    title: 'Enterprise B2B Distribution',
    desc: 'Optimised part-truck and full-truck services for efficient regional freight movement with live visibility.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Express D2C Distribution',
    desc: 'Fast parcel movement with route-level coordination for shipments across city clusters and last-mile.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Warehousing & 3PL',
    desc: 'Scalable on-demand warehouse space (WaaS) and integrated fulfilment without fixed-asset overhead.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Specialised Project Delivery',
    desc: 'Scalable delivery solutions for high-volume commodities across urban and rural markets.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'KYC & Address Verification',
    desc: 'Contact Point Verification, merchant due diligence and on-ground document fulfilment at scale.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Government & e-Governance',
    desc: 'eMitra, AEPS and large-scale government project delivery with proven track record in Rajasthan.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Our Service Hub</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Comprehensive logistics solutions for enterprise growth
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Tailored operational solutions designed for regional reach, reliability and real-time control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 lg:p-7 hover:border-brand-200 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
              <a
                href="#cta"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 group-hover:gap-2.5 transition-all"
              >
                Explore more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
