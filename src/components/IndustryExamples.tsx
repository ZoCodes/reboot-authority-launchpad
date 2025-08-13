
import { Star } from 'lucide-react';

const IndustryExamples = () => {
  const industries = [
    {
      name: "Automotive",
      budget: "£18,500",
      links: "28",
      delivery: "2 months",
      description: "Vehicle and automotive services sector",
      isSpecialized: false
    },
    {
      name: "Education",
      budget: "£48,300",
      links: "74", 
      delivery: "4 months",
      description: "Educational institutions and e-learning platforms",
      isSpecialized: false
    },
    {
      name: "Real Estate",
      budget: "£25,700",
      links: "39",
      delivery: "4 months",
      description: "Property and real estate services",
      isSpecialized: false
    },
    {
      name: "iGaming",
      budget: "£63,500",
      links: "81",
      delivery: "6 months",
      description: "High-competition gambling and gaming sector",
      isSpecialized: true
    },
    {
      name: "Travel - DE Market",
      budget: "£38,200",
      links: "38",
      delivery: "4 months",
      description: "German market travel and tourism campaigns",
      isSpecialized: false
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-center text-reboot-navy mb-6">
        Suggested packages by sector
      </h3>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        With over 10 years of data, we suggest realistic KPIs and timeframes for your niche. Whether you're in finance, education, travel, or home - we've tested, refined, and delivered.
      </p>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        For the most cost-effective way to earn links long-term, explore our <a href="#" className="text-pink-500 hover:underline">hyper relevancy link building projects</a>.
      </p>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
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
