

interface CalculatorFormProps {
  targetDomain: string;
  setTargetDomain: (value: string) => void;
  market: string;
  setMarket: (value: string) => void;
  budget: string;
  setBudget: (value: string) => void;
}

const CalculatorForm = ({ 
  targetDomain, 
  setTargetDomain, 
  market, 
  setMarket, 
  budget, 
  setBudget 
}: CalculatorFormProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div>
        <label htmlFor="targetDomain" className="block text-sm font-semibold text-reboot-navy mb-1">
          Target Domain
        </label>
        <div className="min-h-[2rem] mb-2"></div>
        <input
          type="text"
          id="targetDomain"
          value={targetDomain}
          onChange={(e) => setTargetDomain(e.target.value)}
          placeholder="e.g. yoursite.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent font-mono"
        />
      </div>

      <div>
        <label htmlFor="market" className="block text-sm font-semibold text-reboot-navy mb-1">
          Preferred Target Market
        </label>
        <p className="text-xs text-gray-600 mb-2 min-h-[2rem] flex items-center">All outreach will be global, but we'll prioritize your selected market</p>
        <select
          id="market"
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent bg-white font-mono"
        >
          <option value="english">English</option>
          <option value="american">American</option>
          <option value="canadian">Canadian</option>
          <option value="australian">Australian</option>
          <option value="german">German</option>
          <option value="french">French</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          <option value="other">Other/Multiple - Contact Sales</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="budget" className="block text-sm font-semibold text-reboot-navy mb-1">
          Budget (minimum £5,000)
        </label>
        <div className="min-h-[2rem] mb-2"></div>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter your budget"
          min="5000"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent font-mono"
        />
      </div>
    </div>
  );
};

export default CalculatorForm;

