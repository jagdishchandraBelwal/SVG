export default function CTA() {
  return (
    <section id="cta" className="py-16 lg:py-24 bg-brand-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let’s move your business forward, together
        </h2>
        <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
          Whether you need enterprise distribution, warehousing, last-mile reach or a reliable logistics partner —
          our team is ready to help.
        </p>

        <div className="mt-10 bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-xl mx-auto text-left">
          <h3 className="text-lg font-bold text-gray-900 mb-5">Business Enquiry</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Requirement</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm bg-white">
                <option>Select service</option>
                <option>Enterprise B2B Logistics</option>
                <option>Warehousing / 3PL</option>
                <option>Express / D2C Distribution</option>
                <option>KYC / Address Verification</option>
                <option>Partnership / Franchise</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={3}
                placeholder="Tell us briefly about your requirement..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 rounded-xl transition-colors shadow-md"
            >
              Submit Enquiry
            </button>
          </form>
        </div>

        <p className="mt-6 text-sm text-brand-200">
          Or call us directly: <span className="text-white font-medium">+91 0141-6610500</span>
        </p>
      </div>
    </section>
  )
}
