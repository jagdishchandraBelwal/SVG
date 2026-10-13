export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              25+ Years of Logistics Excellence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 leading-tight tracking-tight">
              Reliable Logistics
              <span className="block text-brand-600">Across Every Mile</span>
            </h1>

            <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From metro hubs to deep-rural last-mile — we deliver where others won’t.
              Enterprise B2B, warehousing, government services & specialised distribution
              backed by in-house ERP visibility.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-base"
              >
                Get Instant Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-700 font-semibold px-7 py-3.5 rounded-xl border-2 border-brand-200 hover:border-brand-300 transition-all text-base"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                99.8% SLA Adherence
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                2,000+ Pin Codes
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                250+ Branches
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card bg-white border border-gray-100">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 via-white to-brand-50 flex items-center justify-center relative">
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <p className="text-brand-700 font-bold text-xl">Enterprise B2B Logistics</p>
                  <p className="text-gray-500 text-sm mt-1">High-velocity freight with live ERP visibility</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card px-4 py-3 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Live Tracking</p>
                    <p className="text-sm font-semibold text-gray-800">Real-time POD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
