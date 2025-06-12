
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ROIVisualizationSection = () => {
  const roiData = [
    { month: 'Month 1', iGaming: 0, Travel: 0, Apparel: 0, Finance: 0 },
    { month: 'Month 3', iGaming: 15, Travel: 25, Apparel: 20, Finance: 10 },
    { month: 'Month 6', iGaming: 45, Travel: 60, Apparel: 50, Finance: 35 },
    { month: 'Month 9', iGaming: 75, Travel: 85, Apparel: 80, Finance: 65 },
    { month: 'Month 12', iGaming: 95, Travel: 100, Apparel: 95, Finance: 90 }
  ];

  const niches = [
    { 
      name: 'iGaming & Sport', 
      color: '#F2196C', 
      investment: '£90,000', 
      targetPosition: 'Position 1-3',
      keyword: 'football betting'
    },
    { 
      name: 'Travel', 
      color: '#132E5B', 
      investment: '£30,000', 
      targetPosition: 'Position 1-5',
      keyword: 'best holiday packages UK'
    },
    { 
      name: 'Apparel', 
      color: '#8B5CF6', 
      investment: '£60,000', 
      targetPosition: 'Position 1-3',
      keyword: 'top golf shoes USA'
    },
    { 
      name: 'Finance', 
      color: '#10B981', 
      investment: '£120,000', 
      targetPosition: 'Position 1-2',
      keyword: 'forex broker comparison'
    }
  ];

  return (
    <section className="section-padding bg-light-grey">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6 text-reboot-navy">ROI Timeline by Niche</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how different investment levels drive ranking improvements over time
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold text-reboot-navy mb-6 text-center">Ranking Progress Timeline</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis label={{ value: 'Ranking Improvement %', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name]}
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
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: niche.color }}
                ></div>
                <h4 className="font-bold text-reboot-navy">{niche.name}</h4>
              </div>
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
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="text-xs text-gray-500">Example keyword:</span>
                <div className="font-medium text-reboot-navy text-sm">"{niche.keyword}"</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROIVisualizationSection;
