
const PackagesSection = () => {
  const packages = [
    {
      name: "Launch",
      price: "£20,000",
      period: "4-month delivery window",
      links: "30 guaranteed backlinks",
      description: "Best for startups/small businesses building foundational visibility.",
      features: [
        "Tailored PR strategy based on your audit",
        "Monthly reporting & live dashboard access", 
        "Dedicated UK-based account manager",
        "Targeted, relevant campaigns focused on your niche"
      ]
    },
    {
      name: "Core",
      price: "£45,000",
      period: "6-month delivery window", 
      links: "65 guaranteed backlinks",
      description: "Ideal for growing brands accelerating visibility.",
      features: [
        "All Launch features plus:",
        "Weekly progress updates",
        "Competitor benchmarking & market insights",
        "Data-led optimisation by PhD analysts"
      ],
      popular: true
    },
    {
      name: "Scale",
      price: "£90,000",
      period: "10-month delivery window",
      links: "115 guaranteed backlinks", 
      description: "For established brands aiming for dominance.",
      features: [
        "All Core features plus:",
        "Priority campaign delivery",
        "Senior strategist involvement",
        "Bespoke reporting & analytics dashboards",
        "Thought leadership and content integration"
      ]
    }
  ];

  return (
    <section id="packages" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-bold mb-6 text-reboot-navy">Our Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the package that fits your business goals and timeline
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-lg flex flex-col h-full ${pkg.popular ? 'border-reboot-pink shadow-reboot-pink/10' : 'border-gray-200'}`}>
              {pkg.popular && (
                <div className="bg-reboot-pink text-white text-center py-3 px-6 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-6 text-reboot-navy">{pkg.name}</h3>
                <div className="mb-8">
                  <p className="text-4xl font-bold text-reboot-navy mb-2">{pkg.price}</p>
                  <p className="text-gray-600 mb-4">{pkg.period}</p>
                  <div className="flex items-center text-reboot-pink font-semibold">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {pkg.links}
                  </div>
                  <p className="text-sm text-gray-500 ml-7">from DR30+ domains</p>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">{pkg.description}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-reboot-navy mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {!feature.startsWith("All") ? (
                          <svg className="w-5 h-5 mr-3 text-reboot-pink mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"></div>
                        )}
                        <span className={`text-gray-600 ${feature.startsWith("All") ? "font-medium text-reboot-navy" : ""}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-8 pb-8 mt-auto">
                <button 
                  onClick={() => window.openContactModal(pkg.name.toLowerCase())}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${pkg.popular ? 'btn-primary' : 'bg-gray-100 text-reboot-navy hover:bg-gray-200'}`}
                >
                  Get Started with {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-light-grey rounded-2xl p-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-reboot-navy">Flexible Payment Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-reboot-pink rounded"></div>
              </div>
              <h4 className="font-semibold text-reboot-navy mb-2">Pay upfront in full</h4>
              <p className="text-gray-600 text-sm">Single payment, maximum savings</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-reboot-pink rounded"></div>
              </div>
              <h4 className="font-semibold text-reboot-navy mb-2">50/50 split</h4>
              <p className="text-gray-600 text-sm">Half upfront, half on completion</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-reboot-pink rounded"></div>
              </div>
              <h4 className="font-semibold text-reboot-navy mb-2">Monthly payments</h4>
              <p className="text-gray-600 text-sm">Spread across delivery window</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
