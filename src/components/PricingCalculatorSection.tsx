
import { useState } from "react";
import PricingCalculator from "./PricingCalculator";
import IndustryExamples from "./IndustryExamples";
import PaymentOptions from "./PaymentOptions";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const PricingCalculatorSection = () => {
  const [calculatorResults, setCalculatorResults] = useState(null);

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Badge className="bg-reboot-pink text-white px-6 py-2 text-lg font-bold">
              ZERO INTERVENTION PRICING
            </Badge>
          </div>
          <h2 className="font-bold mb-6 text-reboot-navy">Calculate your investment</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Use the calculator below to select your target URL, market, and budget. We'll recommend the ideal delivery window and link targets.
          </p>
        </div>

        {/* What to Expect from a Zero Intervention Campaign */}
        <div className="bg-light-grey rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-reboot-navy mb-6 text-center">What to Expect from a Zero Intervention Campaign</h3>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto">
            Designed for brands who want impact without micromanaging. We handle everything.
          </p>
          <h4 className="text-xl font-semibold text-reboot-navy mb-6 text-center">Key Benefits:</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">🎯 Focused, scalable link-building</h4>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">📰 Outreach to our full global media network</h4>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">🎨 Creative freedom to increase coverage opportunities</h4>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">☎️ Minimal meetings: onboarding + wrap-up only</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <PricingCalculator onResultsChange={setCalculatorResults} />

        {/* Enhanced Qualification Messaging */}
        <div className="bg-reboot-pink/5 rounded-2xl p-6 mb-12 text-center border border-reboot-pink/20">
          <p className="text-gray-700 mb-4">
            <strong>Perfect for businesses wanting to leave digital PR strategy & delivery to the experts.</strong>
          </p>
          <p className="text-sm text-gray-600">
            Need hands-on strategy input or collaborative campaign development? 
            <button 
              onClick={() => window.openContactModal("bespoke")}
              className="text-reboot-pink hover:underline font-medium ml-1"
            >
              Our bespoke team handles fully collaborative campaigns.
            </button>
          </p>
        </div>

        <IndustryExamples />
        <PaymentOptions />
      </div>
    </section>
  );
};

export default PricingCalculatorSection;
