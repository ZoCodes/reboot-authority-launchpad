
const IndustryExamples = () => {
  const industries = [
    {
      name: "iGaming & Sport",
      budget: "£90,000",
      links: "138 links",
      delivery: "10 months",
      description: "High-competition verticals requiring premium placements"
    },
    {
      name: "Travel",
      budget: "£30,000",
      links: "46 links", 
      delivery: "4 months",
      description: "Seasonal campaigns with targeted geographic focus"
    },
    {
      name: "Apparel",
      budget: "£60,000",
      links: "92 links",
      delivery: "6 months",
      description: "Fashion and lifestyle brands building authority"
    },
    {
      name: "Finance",
      budget: "£120,000",
      links: "184 links",
      delivery: "10 months",
      description: "Regulated sectors requiring high-authority domains"
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-center text-reboot-navy mb-6">
        Suggestions by Niche
      </h3>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Our data knows what will move the needle in your niche
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg">
            <h4 className="text-lg font-bold text-reboot-navy mb-3">{industry.name}</h4>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Investment:</span>
                <span className="font-semibold text-reboot-pink">{industry.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Links:</span>
                <span className="font-semibold text-reboot-navy">{industry.links}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Delivery:</span>
                <span className="font-semibold text-reboot-navy">{industry.delivery}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryExamples;
