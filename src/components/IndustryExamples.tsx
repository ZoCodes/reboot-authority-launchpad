
const IndustryExamples = () => {
  const industries = [
    {
      name: "iGaming & Sport",
      budget: "£90,000",
      description: "High-competition verticals requiring premium placements",
      popular: true
    },
    {
      name: "Travel",
      budget: "£30,000", 
      description: "Seasonal campaigns with targeted geographic focus"
    },
    {
      name: "Apparel",
      budget: "£60,000",
      description: "Fashion and lifestyle brands building authority"
    },
    {
      name: "Finance",
      budget: "£120,000",
      description: "Regulated sectors requiring high-authority domains"
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-center text-reboot-navy mb-12">
        Popular in Your Niche
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {industries.map((industry, index) => (
          <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${industry.popular ? 'border-reboot-pink shadow-reboot-pink/10' : 'border-gray-200'}`}>
            {industry.popular && (
              <div className="bg-reboot-pink text-white text-center py-2 px-4 rounded-lg text-sm font-semibold mb-4">
                Most Popular
              </div>
            )}
            <h4 className="text-lg font-bold text-reboot-navy mb-2">{industry.name}</h4>
            <div className="text-2xl font-bold text-reboot-pink mb-3">{industry.budget}</div>
            <p className="text-gray-600 text-sm">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryExamples;
