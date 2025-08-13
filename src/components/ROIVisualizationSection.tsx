
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Star } from 'lucide-react';

const ROIVisualizationSection = () => {
  const roiData = [
    { month: 'Month 1', iGaming: 50, Travel: 45, Apparel: 48, Finance: 52 },
    { month: 'Month 3', iGaming: 35, Travel: 30, Apparel: 32, Finance: 40 },
    { month: 'Month 6', iGaming: 15, Travel: 12, Apparel: 18, Finance: 25 },
    { month: 'Month 9', iGaming: 8, Travel: 5, Apparel: 10, Finance: 15 },
    { month: 'Month 12', iGaming: 3, Travel: 2, Apparel: 5, Finance: 8 }
  ];

  const niches = [
    { 
      name: 'Travel - UK Market', 
      emoji: '💡',
      color: '#132E5B', 
      investment: '£60,000',
      targetPosition: 'Position 1–3',
      keyword: 'book holiday uk',
      description: 'High-value travel term targeting UK audience with seasonal and evergreen campaign assets.',
      isSpecialized: false
    },
    { 
      name: 'iGaming & Sport', 
      emoji: '⭐',
      color: '#F2196C', 
      investment: '£75,000',
      targetPosition: 'Position 1–3',
      keyword: 'sports betting uk',
      description: 'High-competition, regulated iGaming term requiring premium placements and compliance-aware outreach.',
      isSpecialized: true
    },
    { 
      name: 'Apparel – Niche Footwear', 
      emoji: '💡',
      color: '#8B5CF6', 
      investment: '£18,000–£23,000', 
      targetPosition: 'Position 1–3',
      keyword: 'womens fashion hiking boots',
      description: 'Niche fashion/footwear keyword with high purchase intent. Lower competition allows for reduced link volume while still achieving strong SERP movement.',
      isSpecialized: false
    },
    { 
      name: 'Finance – Forex', 
      emoji: '⚠',
      color: '#10B981', 
      investment: '£85,000',
      targetPosition: 'Position 1–3',
      keyword: 'forex trading platform',
      description: 'Ultra-competitive finance keyword with global coverage requirements and high DR link acquisition to drive SERP dominance.',
      isSpecialized: true
    }
  ];

  return (
    <section className="section-padding bg-light-grey">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6 text-reboot-navy">Results you can see</h2>
          <h3 className="text-xl font-semibold mb-4 text-reboot-navy">Example SERP Movement Over Time</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've moved clients in iGaming, Travel, Fashion and Forex from page 5 to top 5 in under 4 months.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12">
          <p className="text-center text-gray-600 mb-6 italic">
            See how different investment levels drive SERP ranking position improvements over time.
          </p>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis 
                  label={{ value: 'Average SERP Position', angle: -90, position: 'insideLeft' }}
                  domain={[1, 50]}
                  reversed={true}
                />
                <Tooltip 
                  formatter={(value, name) => [`Position ${value}`, name]}
                  labelFormatter={(label) => `Timeline: ${label}`}
                />
                <Line type="monotone" dataKey="iGaming" stroke="#F2196C" strokeWidth={3} name="iGaming & Sport" />
                <Line type="monotone" dataKey="Travel" stroke="#132E5B" strokeWidth={3} name="Travel" />
                <Line type="monotone" dataKey="Apparel" stroke="#8B5CF6" strokeWidth={3} name="Apparel" />
                <Line type="monotone" dataKey="Finance" stroke="#10B981" strokeWidth={3} name="Finance" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {niches.map((niche, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 shadow-sm border ${
                niche.isSpecialized ? 'border-orange-200 bg-gradient-to-br from-white to-orange-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center mb-4">
                <span className="text-lg mr-3">{niche.emoji}</span>
                <h4 className="font-bold text-reboot-navy flex items-center gap-2">
                  {niche.name}
                  {niche.isSpecialized && (
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                  )}
                </h4>
              </div>
              
              {niche.isSpecialized && (
                <div className="mb-3 p-2 bg-orange-100 rounded-lg">
                  <span className="text-xs text-orange-700 font-medium">
                    ⚠ Specialised Sector
                  </span>
                </div>
              )}
              
              {!niche.isSpecialized && (
                <div className="mb-3 p-2 bg-blue-100 rounded-lg">
                  <span className="text-xs text-blue-700 font-medium">
                    💡 General Sector
                  </span>
                </div>
              )}
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Investment:</span>
                  <span className="font-semibold text-reboot-navy">{niche.investment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Target:</span>
                  <span className="font-semibold text-reboot-pink">{niche.targetPosition}</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <span className="text-xs text-gray-500">Example keyword:</span>
                <div className="font-medium text-reboot-navy text-sm">"{niche.keyword}"</div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{niche.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROIVisualizationSection;
