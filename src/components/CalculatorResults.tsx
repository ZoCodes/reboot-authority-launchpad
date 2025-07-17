
import { Badge } from "@/components/ui/badge";
import { DomainAnalysis } from "@/utils/domainUtils";

interface CalculatorResults {
  market: string;
  budget: number;
  targetDomain?: string;
  domainAnalysis?: DomainAnalysis;
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
  hasDomainSurcharge?: boolean;
  domainSurchargeAmount?: number;
}

interface CalculatorResultsProps {
  results: CalculatorResults | null;
  domainAnalysis: DomainAnalysis | null;
  onCalculate: () => void;
  BESPOKE_THRESHOLD: number;
}

const CalculatorResultsComponent = ({ results, domainAnalysis, onCalculate, BESPOKE_THRESHOLD }: CalculatorResultsProps) => {
  if (!results) return null;

  if (results.showContactSales) {
    return (
      <>
        <div className="bg-white rounded-xl p-6 mb-6 border-2 border-gray-300">
          <div className="text-center">
            <h3 className="text-xl font-bold text-reboot-navy mb-4">Bespoke Solution Required</h3>
            <p className="text-gray-600 mb-4">
              For multiple markets or custom requirements, our sales team will create a tailored solution for your needs.
            </p>
            <div className="text-3xl font-bold text-reboot-pink mb-2 font-mono">£{results.budget.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Budget Available</div>
            {results.targetDomain && (
              <div className="text-sm text-gray-500 mt-2">Target: {results.targetDomain}</div>
            )}
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={onCalculate}
            className="btn-primary bg-gradient-to-r from-reboot-pink to-purple-600 hover:from-purple-600 hover:to-reboot-pink text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Sales Team
          </button>
        </div>
      </>
    );
  }

  if (domainAnalysis?.isBlocked) return null;

  return (
    <>
      <div className="bg-white rounded-xl p-6 mb-6 border-2 border-gray-300">
        {results.hasVolumeDiscount && (
          <div className="flex justify-center mb-4">
            <Badge className={`${results.discountPercentage === 15 ? 'bg-purple-500' : 'bg-green-500'} text-white px-4 py-2 text-sm font-semibold`}>
              🎉 {results.discountPercentage}% Volume Discount Applied
            </Badge>
          </div>
        )}
        
        {results.hasDomainSurcharge && (
          <div className="flex justify-center mb-4">
            <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-semibold">
              📈 +{results.domainSurchargeAmount}% {domainAnalysis?.contentCategory} Premium
            </Badge>
          </div>
        )}
        
        <h3 className="text-xl font-bold text-reboot-navy mb-4">Your Package</h3>
        <div className={`grid ${results.hideLinksCount ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
          {!results.hideLinksCount && (
            <div className="text-center">
              <div className="text-3xl font-bold text-reboot-pink mb-2 font-mono">{results.linksCount}</div>
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
            <div className="text-3xl font-bold text-reboot-pink mb-2 font-mono">£{results.budget.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Investment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-reboot-pink mb-2">{results.deliveryWindow}</div>
            <div className="text-sm text-gray-600">
              {results.hideLinksCount ? "Contact Required" : "Delivery Window"}
            </div>
          </div>
        </div>

        {results.hasDomainSurcharge && !results.hideLinksCount && (
          <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="text-center">
              <h4 className="font-semibold text-orange-800 mb-2">{domainAnalysis?.contentCategory} Premium Applied</h4>
              <p className="text-sm text-orange-700">
                This content category requires specialized outreach strategies and journalist relationships, 
                resulting in a {results.domainSurchargeAmount}% premium on standard rates.
              </p>
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

      <div className="text-center">
        <button
          onClick={onCalculate}
          className="btn-primary bg-gradient-to-r from-reboot-pink to-purple-600 hover:from-purple-600 hover:to-reboot-pink text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {results.showContactSales || results.budget >= BESPOKE_THRESHOLD ? "Contact Sales Team" : "Launch Zero Intervention Package"}
        </button>
      </div>
    </>
  );
};

export default CalculatorResultsComponent;
