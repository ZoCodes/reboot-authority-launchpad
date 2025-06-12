
import { useState, useEffect } from "react";

interface CalculatorResults {
  market: string;
  budget: number;
  linksCount: number;
  deliveryWindow: string;
  costPerLink: number;
}

interface PricingCalculatorProps {
  onResultsChange: (results: CalculatorResults | null) => void;
}

const PricingCalculator = ({ onResultsChange }: PricingCalculatorProps) => {
  const [market, setMarket] = useState("english");
  const [budget, setBudget] = useState("");
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const marketRates = {
    english: 650,
    american: 750,
    canadian: 950,
    australian: 950,
    german: 1000,
    french: 1000,
    italian: 850,
    spanish: 850
  };

  const getDeliveryWindow = (budgetAmount: number) => {
    if (budgetAmount >= 250000) return "Contact for Bespoke Solution";
    if (budgetAmount >= 200000) return "24 months";
    if (budgetAmount >= 150000) return "12 months";
    if (budgetAmount >= 100000) return "10 months";
    if (budgetAmount >= 50000) return "6 months";
    return "4 months";
  };

  useEffect(() => {
    const budgetNum = parseFloat(budget);
    if (budgetNum >= 5000) {
      const costPerLink = marketRates[market as keyof typeof marketRates];
      const linksCount = Math.floor(budgetNum / costPerLink);
      const deliveryWindow = getDeliveryWindow(budgetNum);
      
      const newResults = {
        market,
        budget: budgetNum,
        linksCount,
        deliveryWindow,
        costPerLink
      };
      
      setResults(newResults);
      onResultsChange(newResults);
    } else {
      setResults(null);
      onResultsChange(null);
    }
  }, [market, budget, onResultsChange]);

  const handleCalculate = () => {
    if (results && results.budget >= 250000) {
      window.openContactModal("bespoke");
    } else if (results) {
      window.openContactModal("calculator");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-light-grey rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label htmlFor="market" className="block text-sm font-semibold text-reboot-navy mb-3">
              Target Market
            </label>
            <select
              id="market"
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent bg-white"
            >
              <option value="english">English</option>
              <option value="american">American</option>
              <option value="canadian">Canadian</option>
              <option value="australian">Australian</option>
              <option value="german">German</option>
              <option value="french">French</option>
              <option value="italian">Italian</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-reboot-navy mb-3">
              Budget (minimum £5,000)
            </label>
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Enter your budget"
              min="5000"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent"
            />
          </div>
        </div>

        {results && (
          <div className="bg-white rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-reboot-navy mb-4">Your Package</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-reboot-pink mb-2">{results.linksCount}</div>
                <div className="text-sm text-gray-600">Guaranteed Links</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-reboot-pink mb-2">£{results.budget.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-reboot-pink mb-2">{results.deliveryWindow}</div>
                <div className="text-sm text-gray-600">Delivery Window</div>
              </div>
            </div>
          </div>
        )}

        {parseFloat(budget) > 0 && parseFloat(budget) < 5000 && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-600 text-center">Minimum budget is £5,000</p>
          </div>
        )}

        {results && (
          <div className="text-center">
            <button
              onClick={handleCalculate}
              className="btn-primary"
            >
              {results.budget >= 250000 ? "Contact Sales Team" : "Get Started"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCalculator;
