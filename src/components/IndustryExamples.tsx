
import { Star } from 'lucide-react';

const IndustryExamples = () => {
  const industries = [
    {
      name: "iGaming & Sport",
      budget: "£90,000",
      links: "110 links",
      delivery: "10 months",
      description: "High-competition verticals requiring premium placements",
      isSpecialized: true
    },
    {
      name: "Travel",
      budget: "£30,000",
      links: "46 links", 
      delivery: "4 months",
      description: "Seasonal campaigns with targeted geographic focus",
      isSpecialized: false
    },
    {
      name: "Apparel",
      budget: "£60,000",
      links: "92 links",
      delivery: "6 months",
      description: "Fashion and lifestyle brands building authority",
      isSpecialized: false
    },
    {
      name: "Finance",
      budget: "£120,000",
      links: "147 links",
      delivery: "10 months",
      description: "Regulated sectors requiring high-authority domains",
      isSpecialized: true
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-center text-reboot-navy mb-6">
        Suggestions by sector
      </h3>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We use 10+ years of data to suggest realistic KPIs and timeframes for your niche. Whether you're in finance, health, SaaS, or homeware – we've tested and delivered.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {industries.map((industry, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${
              industry.isSpecialized ? 'border-orange-200 bg-gradient-to-br from-white to-orange-50' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center mb-3">
              <h4 className="text-lg font-bold text-reboot-navy flex items-center gap-2">
                {industry.name}
                {industry.isSpecialized && (
                  <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                )}
              </h4>
            </div>
            
            {industry.isSpecialized && (
              <div className="mb-4 p-2 bg-orange-100 rounded-lg">
                <span className="text-xs text-orange-700 font-medium">
                  ⚠️ Specialized Sector
                </span>
              </div>
            )}
            
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
