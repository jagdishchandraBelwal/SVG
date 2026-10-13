const points = [
  {
    title: 'Deep Rural Capability',
    desc: 'Operational familiarity with rural routes, mandi-linked regions and Tier-2/3 markets where many networks struggle.',
  },
  {
    title: 'In-house ERP Visibility',
    desc: 'Proprietary systems for live inventory, geospatial tracking, POD confirmation and automated exception alerts.',
  },
  {
    title: 'Dedicated Regional Hubs',
    desc: '10 regional hubs and 400+ active routes ensuring consistent coverage and faster turnaround.',
  },
  {
    title: 'Enterprise & Government Ready',
    desc: 'Proven experience with telecom, pharma, FMCG, banking and large e-governance projects.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Why SVG Express</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              The operational network that keeps your SCM under control
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              For over 25 years we have built a logistics backbone that combines last-mile reach,
              technology visibility and disciplined execution across North India.
            </p>

            <div className="mt-8 space-y-5">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{point.title}</h3>
                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 lg:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Visibility that keeps operations under control</h3>
              <div className="space-y-5">
                {[
                  { title: 'Live Inventory Visibility', desc: 'Real-time movement tracking with geospatial data' },
                  { title: 'POD & Delivery Confirmation', desc: 'Streamlined proof-of-delivery and verification' },
                  { title: 'Exception & Escalation Control', desc: 'Proactive alerts and automated escalation protocols' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-brand-50/70">
                    <div className="w-10 h-10 rounded-lg bg-brand-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
