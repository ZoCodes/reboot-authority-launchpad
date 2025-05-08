
const PackagesSection = () => {
  const packages = [
    {
      name: "Launch",
      price: "£2,000/mo",
      links: "7 Links Guaranteed",
      delivery: "60-Day Delivery Window",
      description: "Perfect for small businesses looking to establish their online presence and start building authority.",
      features: ["Authority Audit", "Digital PR Strategy", "High-authority, earned backlinks", "Monthly Reporting"]
    },
    {
      name: "Growth",
      price: "£4,500/mo",
      links: "22 Links Guaranteed",
      delivery: "90-Day Delivery Window",
      description: "Ideal for growing businesses ready to accelerate their digital presence and increase their market share.",
      features: ["Authority Audit", "Digital PR Strategy", "High-authority, earned backlinks", "Monthly Reporting", "Weekly WIPs", "Competitor Analysis"]
    },
    {
      name: "Scale",
      price: "£7,000/mo",
      links: "48 Links Guaranteed",
      delivery: "120-Day Delivery Window",
      description: "For established businesses looking to dominate their market and achieve maximum online visibility.",
      features: ["Authority Audit", "Digital PR Strategy", "High-authority, earned backlinks", "Monthly Reporting", "Weekly WIPs", "Competitor Analysis", "Dedicated Account Manager", "Priority Delivery"]
    }
  ];

  return (
    <section id="packages" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Authority Growth Package</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Select the package that best fits your business goals and budget.
            <br />
            All packages include our core Authority Growth features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl flex flex-col h-full">
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <p className="text-3xl font-bold text-reboot-pink mb-6">{pkg.price}</p>
                <div className="mb-6 space-y-2">
                  <p className="font-medium flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {pkg.links}
                  </p>
                  <p className="font-medium flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {pkg.delivery}
                  </p>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-reboot-navy mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-reboot-pink mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-8 pb-8 mt-auto">
                <button 
                  onClick={() => window.openContactModal(pkg.name.toLowerCase())}
                  className="w-full py-4 bg-reboot-pink text-white rounded-md font-medium transition-all hover:bg-opacity-90"
                >
                  Enquire About This Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
