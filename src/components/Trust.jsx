export default function Trust() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Trusted Across Industries</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Delivering supply chain stability for over 25 years
          </h2>
        </div>

        {/* Industry tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Telecom', 'Pharmaceuticals', 'FMCG', 'E-Commerce', 'Banking', 'Government', 'DTH'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-brand-50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-extrabold text-brand-700">3000+</p>
            <p className="text-sm text-gray-600 mt-1">Employees & Associates</p>
          </div>
          <div className="bg-brand-50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-extrabold text-brand-700">400+</p>
            <p className="text-sm text-gray-600 mt-1">Active Regional Routes</p>
          </div>
          <div className="bg-brand-50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-extrabold text-brand-700">Rajasthan’s</p>
            <p className="text-sm text-gray-600 mt-1">Leading Logistics Network</p>
          </div>
        </div>
      </div>
    </section>
  )
}
