
const PackagesSection = () => {
  const packages = [
    {
      name: "Visibility Launch",
      price: "£22,000",
      period: "4-month delivery window",
      links: "30 guaranteed backlinks",
      description: "Perfect for startups and small businesses laying the foundation for search visibility.",
      features: [
        "Tailored PR strategy based on your audit",
        "Monthly reporting & live dashboard access", 
        "Dedicated UK-based account manager",
        "Targeted, relevant campaigns focused on your niche"
      ]
    },
    {
      name: "Visibility Core",
      price: "£45,000",
      period: "6-month delivery window", 
      links: "55 guaranteed backlinks",
      description: "Ideal for growing brands accelerating their market presence.",
      features: [
        "All Launch features plus:",
        "Weekly progress updates",
        "Competitor benchmarking & market insights",
        "Data-led optimisation by PhD analysts"
      ]
    },
    {
      name: "Visibility Scale",
      price: "£75,000",
      period: "9-month delivery window",
      links: "90 guaranteed backlinks", 
      description: "For established brands aiming for market dominance and long-term visibility growth.",
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
    <section id="packages" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Packages</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl flex flex-col h-full">
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <p className="text-3xl font-bold text-reboot-pink mb-2">{pkg.price}</p>
                <p className="text-sm text-gray-600 mb-6">{pkg.period}</p>
                <div className="mb-6">
                  <p className="font-medium flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {pkg.links}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">from domains with DR30+ and steady, growing traffic</p>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-reboot-navy mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {!feature.startsWith("All") ? (
                          <svg className="w-5 h-5 mr-2 text-reboot-pink mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"></div>
                        )}
                        <span className={feature.startsWith("All") ? "font-medium" : ""}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-8 pb-8 mt-auto">
                <button 
                  onClick={() => window.openContactModal(pkg.name.toLowerCase().replace(' ', '-'))}
                  className="w-full py-4 bg-reboot-pink text-white rounded-md font-medium transition-all hover:bg-opacity-90"
                >
                  Enquire About This Package
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Flexible Payment Options</h3>
          <p className="text-center text-lg mb-6">Choose what works for you:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Pay in full upfront</h4>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">50/50 split</h4>
              <p className="text-sm text-gray-600">Half upfront, half on delivery completion</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Monthly payments</h4>
              <p className="text-sm text-gray-600">Spread evenly over your delivery window</p>
            </div>
          </div>
          <p className="text-center mt-6 font-medium">There are no hidden fees or long contracts.</p>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
