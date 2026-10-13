const stats = [
  { value: '500,000+', label: 'Vehicle Turnarounds Managed' },
  { value: '99.8%', label: 'SLA Adherence' },
  { value: '2,000+', label: 'Pin Codes Reached' },
  { value: '10', label: 'Regional Network Hubs' },
  { value: '250+', label: 'Branches Across North India' },
  { value: '25+', label: 'Years of Experience' },
]

export default function Stats() {
  return (
    <section className="py-12 lg:py-16 bg-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-brand-100 font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
