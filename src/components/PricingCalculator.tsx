import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface CalculatorResults {
  market: string;
  budget: number;
  linksCount?: number;
  deliveryWindow: string;
  costPerLink?: number;
  showContactSales?: boolean;
  hideLinksCount?: boolean;
  hasVolumeDiscount?: boolean;
  standardLinksCount?: number;
  bonusLinks?: number;
  standardCostPerLink?: number;
  discountedCostPerLink?: number;
  discountPercentage?: number;
}

interface PricingCalculatorProps {
  onResultsChange: (results: CalculatorResults | null) => void;
}

const PricingCalculator = ({ onResultsChange }: PricingCalculatorProps) => {
  const [market, setMarket] = useState("global");
  const [budget, setBudget] = useState("");
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const marketRates = {
    global: 650,
    english: 650,
    american: 750,
    canadian: 950,
    australian: 950,
    german: 1000,
    french: 1000,
    italian: 850,
    spanish: 850
  };

  const TIER_1_THRESHOLD = 90000;  // 10% discount
  const TIER_2_THRESHOLD = 151000; // 15% discount
  const BESPOKE_THRESHOLD = 250000;

  const getVolumeDiscount = (budgetAmount: number) => {
    if (budgetAmount >= TIER_2_THRESHOLD && budgetAmount < BESPOKE_THRESHOLD) {
      return { rate: 0.15, percentage: 15 };
    } else if (budgetAmount >= TIER_1_THRESHOLD && budgetAmount < TIER_2_THRESHOLD) {
      return { rate: 0.10, percentage: 10 };
    }
    return { rate: 0, percentage: 0 };
  };

  const getHintMessage = (budgetAmount: number) => {
    // Tier 1 approach hints (£85k - £89,999)
    if (budgetAmount >= 85000 && budgetAmount < TIER_1_THRESHOLD) {
      const amountNeeded = TIER_1_THRESHOLD - budgetAmount;
      return `💡 Just £${amountNeeded.toLocaleString()} more to unlock 10% volume discount and get bonus links!`;
    }
    
    // Tier 2 approach hints (£140k - £150k)
    if (budgetAmount >= 140000 && budgetAmount < TIER_2_THRESHOLD) {
      const amountNeeded = TIER_2_THRESHOLD - budgetAmount;
      return `🚀 Add £${amountNeeded.toLocaleString()} more to your budget to unlock 15% volume discount (currently enjoying 10%)`;
    }
    
    // Near Tier 2 hints (£148k - £150k) - more urgent messaging
    if (budgetAmount >= 148000 && budgetAmount < TIER_2_THRESHOLD) {
      const amountNeeded = TIER_2_THRESHOLD - budgetAmount;
      return `⭐ Only £${amountNeeded.toLocaleString()} away from maximum 15% volume discount!`;
    }

    return null;
  };

  const getDeliveryWindow = (budgetAmount: number) => {
    if (budgetAmount >= BESPOKE_THRESHOLD) return "Contact for Bespoke Solution";
    if (budgetAmount >= 200000) return "24 months";
    if (budgetAmount >= 150000) return "12 months";
    if (budgetAmount >= 100000) return "10 months";
    if (budgetAmount >= 50000) return "6 months";
    return "4 months";
  };

  useEffect(() => {
    const budgetNum = parseFloat(budget);
    
    if (market === "other") {
      // For "Other/Multiple" market, always show contact sales message
      if (budgetNum >= 5000) {
        const newResults = {
          market,
          budget: budgetNum,
          deliveryWindow: "Contact for Bespoke Solution",
          showContactSales: true
        };
        setResults(newResults);
        onResultsChange(newResults);
      } else {
        setResults(null);
        onResultsChange(null);
      }
    } else if (budgetNum >= 5000) {
      const standardCostPerLink = marketRates[market as keyof typeof marketRates];
      const volumeDiscount = getVolumeDiscount(budgetNum);
      const hasVolumeDiscount = volumeDiscount.rate > 0 && budgetNum < BESPOKE_THRESHOLD;
      const discountedCostPerLink = hasVolumeDiscount 
        ? standardCostPerLink * (1 - volumeDiscount.rate)
        : standardCostPerLink;
      
      const linksCount = Math.floor(budgetNum / discountedCostPerLink);
      const standardLinksCount = hasVolumeDiscount ? Math.floor(budgetNum / standardCostPerLink) : undefined;
      const bonusLinks = hasVolumeDiscount ? linksCount - standardLinksCount! : undefined;
      
      const deliveryWindow = getDeliveryWindow(budgetNum);
      const hideLinksCount = budgetNum >= BESPOKE_THRESHOLD;
      
      const newResults = {
        market,
        budget: budgetNum,
        linksCount: hideLinksCount ? undefined : linksCount,
        deliveryWindow,
        costPerLink: hideLinksCount ? undefined : discountedCostPerLink,
        hideLinksCount,
        hasVolumeDiscount,
        standardLinksCount,
        bonusLinks,
        standardCostPerLink: hasVolumeDiscount ? standardCostPerLink : undefined,
        discountedCostPerLink: hasVolumeDiscount ? discountedCostPerLink : undefined,
        discountPercentage: hasVolumeDiscount ? volumeDiscount.percentage : undefined
      };
      
      setResults(newResults);
      onResultsChange(newResults);
    } else {
      setResults(null);
      onResultsChange(null);
    }
  }, [market, budget, onResultsChange]);

  const handleCalculate = () => {
    if (results?.showContactSales || (results && results.budget >= BESPOKE_THRESHOLD)) {
      window.openContactModal("bespoke");
    } else if (results) {
      window.openContactModal("calculator");
    }
  };

  const getMarketDisplayName = (value: string) => {
    switch (value) {
      case "global": return "Global - No market preference";
      case "english": return "English";
      case "american": return "American";
      case "canadian": return "Canadian";
      case "australian": return "Australian";
      case "german": return "German";
      case "french": return "French";
      case "italian": return "Italian";
      case "spanish": return "Spanish";
      case "other": return "Other/Multiple";
      default: return value;
    }
  };

  const budgetNum = parseFloat(budget);
  const hintMessage = getHintMessage(budgetNum);

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
              <option value="global">Global - No market preference ⭐ Recommended</option>
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

        {/* Enhanced tiered hint messaging */}
        {hintMessage && market !== "other" && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
            <p className="text-yellow-800 text-center font-medium">
              {hintMessage}
            </p>
          </div>
        )}

        {/* Sweet spot messaging for those already in Tier 1 */}
        {budgetNum >= TIER_1_THRESHOLD && budgetNum < 140000 && market !== "other" && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <p className="text-green-800 text-center font-medium">
              ✅ You're enjoying 10% volume pricing! <span className="text-sm text-green-600">Tip: 15% discount unlocks at £{TIER_2_THRESHOLD.toLocaleString()}</span>
            </p>
          </div>
        )}

        {results?.showContactSales && (
          <div className="bg-white rounded-xl p-6 mb-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-reboot-navy mb-4">Bespoke Solution Required</h3>
              <p className="text-gray-600 mb-4">
                For multiple markets or custom requirements, our sales team will create a tailored solution for your needs.
              </p>
              <div className="text-3xl font-bold text-reboot-pink mb-2">£{results.budget.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Budget Available</div>
            </div>
          </div>
        )}

        {results && !results.showContactSales && (
          <div className="bg-white rounded-xl p-6 mb-6">
            {results.hasVolumeDiscount && (
              <div className="flex justify-center mb-4">
                <Badge className={`${results.discountPercentage === 15 ? 'bg-purple-500' : 'bg-green-500'} text-white px-4 py-2 text-sm font-semibold`}>
                  🎉 {results.discountPercentage}% Volume Discount Applied
                </Badge>
              </div>
            )}
            
            <h3 className="text-xl font-bold text-reboot-navy mb-4">Your Package</h3>
            <div className={`grid ${results.hideLinksCount ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
              {!results.hideLinksCount && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-reboot-pink mb-2">{results.linksCount}</div>
                  <div className="text-sm text-gray-600">
                    {results.hasVolumeDiscount ? "Total Links (with bonus)" : "Guaranteed Links"}
                  </div>
                  {results.hasVolumeDiscount && results.bonusLinks && (
                    <div className="text-xs text-green-600 font-medium mt-1">
                      +{results.bonusLinks} bonus links from {results.discountPercentage}% discount
                    </div>
                  )}
                </div>
              )}
              <div className="text-center">
                <div className="text-3xl font-bold text-reboot-pink mb-2">£{results.budget.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-reboot-pink mb-2">{results.deliveryWindow}</div>
                <div className="text-sm text-gray-600">
                  {results.hideLinksCount ? "Contact Required" : "Delivery Window"}
                </div>
              </div>
            </div>
            
            {results.hasVolumeDiscount && !results.hideLinksCount && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-center">
                  <h4 className="font-semibold text-green-800 mb-2">{results.discountPercentage}% Volume Discount Breakdown</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Standard rate:</div>
                      <div className="font-medium">£{results.standardCostPerLink} per link</div>
                      <div className="text-gray-500">({results.standardLinksCount} links)</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Volume rate ({results.discountPercentage}% off):</div>
                      <div className="font-medium text-green-600">£{Math.round(results.discountedCostPerLink!)} per link</div>
                      <div className="text-green-600">({results.linksCount} links total)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {results.hideLinksCount && (
              <div className="text-center mt-4 p-4 bg-reboot-pink/10 rounded-lg">
                <p className="text-reboot-navy font-medium">
                  For investments over £250,000, we'll design a bespoke solution with our sales team.
                </p>
              </div>
            )}
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
              {results.showContactSales || results.budget >= BESPOKE_THRESHOLD ? "Contact Sales Team" : "Launch Zero Intervention Package"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCalculator;
