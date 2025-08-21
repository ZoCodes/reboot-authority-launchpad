
import { DomainAnalysis } from "@/utils/domainUtils";

interface CalculatorMessagesProps {
  domainAnalysis: DomainAnalysis | null;
  budgetNum: number;
  market: string;
  hintMessage: string | null;
  TIER_1_THRESHOLD: number;
  TIER_2_THRESHOLD: number;
  isRegulatedSector: boolean;
}

const CalculatorMessages = ({ 
  domainAnalysis, 
  budgetNum, 
  market, 
  hintMessage,
  TIER_1_THRESHOLD,
  TIER_2_THRESHOLD,
  isRegulatedSector
}: CalculatorMessagesProps) => {
  return (
    <>
      {/* Domain Analysis Messages */}
      {domainAnalysis?.isBlocked && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <p className="text-red-800 text-center font-medium">
            ❌ This domain contains blocked content and cannot be processed. Please contact our team for alternative solutions.
          </p>
        </div>
      )}

      {isRegulatedSector && !domainAnalysis?.isBlocked && (
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <p className="text-orange-800 text-center font-medium">
            ⚠️ Regulated sectors require specialized outreach (+20% premium pricing)
          </p>
        </div>
      )}

      {/* Enhanced tiered hint messaging */}
      {hintMessage && market !== "other" && !domainAnalysis?.isBlocked && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <p className="text-yellow-800 text-center font-medium">
            {hintMessage}
          </p>
        </div>
      )}

      {/* Sweet spot messaging for those already in Tier 1 */}
      {budgetNum >= TIER_1_THRESHOLD && budgetNum < 140000 && market !== "other" && !domainAnalysis?.isBlocked && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <p className="text-green-800 text-center font-medium">
            ✅ You're enjoying 10% volume pricing! <span className="text-sm text-green-600">Tip: 15% discount unlocks at £{TIER_2_THRESHOLD.toLocaleString()}</span>
          </p>
        </div>
      )}

      {parseFloat(budgetNum.toString()) > 0 && parseFloat(budgetNum.toString()) < 5000 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <p className="text-red-600 text-center">Minimum budget is £5,000</p>
        </div>
      )}
    </>
  );
};

export default CalculatorMessages;
