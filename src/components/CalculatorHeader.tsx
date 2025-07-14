
import { DomainAnalysis } from "@/utils/domainUtils";

interface CalculatorHeaderProps {
  budget: number;
  domainAnalysis: DomainAnalysis | null;
}

const CalculatorHeader = ({ budget, domainAnalysis }: CalculatorHeaderProps) => {
  return (
    <div className="bg-gray-900 rounded-t-2xl p-4 border-b-2 border-gray-700">
      <div className="bg-gray-800 rounded-lg p-4 font-mono">
        <div className="text-green-400 text-sm mb-2">REBOOT DIGITAL PR CALCULATOR</div>
        <div className="text-green-300 text-lg">
          {budget >= 5000 ? `£${budget.toLocaleString()} BUDGET ENTERED` : 'ENTER YOUR REQUIREMENTS...'}
        </div>
        {domainAnalysis?.domain && (
          <div className="text-yellow-300 text-sm mt-1">
            TARGET: {domainAnalysis.domain.toUpperCase()}
            {domainAnalysis.hasTriggeredContent && (
              <span className="text-orange-300 ml-2">
                [{domainAnalysis.contentCategory?.toUpperCase()}]
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorHeader;
