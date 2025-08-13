
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
          <h2 className="font-bold mb-6 text-reboot-navy">Calculate your investment</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            This calculator is an indicator only. Rates shown reflect our most efficient, fully managed delivery model, where we handle everything and require minimal input from you.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Use the calculator below to select your target URL, market, and budget. We'll recommend the ideal delivery window and link targets for your investment level.
          </p>
        </div>

        {/* End-to-end digital PR with minimal hassle */}
        <div className="bg-light-grey rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-reboot-navy mb-6 text-center">End-to-end digital PR with minimal hassle</h3>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto">
            Designed for brands that want results without heavy admin. We manage every step, so you can focus on running your business.
          </p>
          <h4 className="text-xl font-semibold text-reboot-navy mb-6 text-center">Key Benefits:</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">Scalable, targeted link-building.</h4>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">Outreach via our full global media network.</h4>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">Creative campaign ideas that attract coverage.</h4>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">Minimal meetings: onboarding + wrap-up only.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <PricingCalculator onResultsChange={setCalculatorResults} />

        {/* Enhanced Qualification Messaging */}
        <div className="bg-reboot-pink/5 rounded-2xl p-6 mb-12 text-center border border-reboot-pink/20">
          <p className="text-gray-700 mb-4">
            <strong>Perfect for businesses that want to leave strategy and delivery to the digital PR experts.</strong>
          </p>
          <p className="text-sm text-gray-600">
            <button 
              onClick={() => window.openContactModal("bespoke")}
              className="text-reboot-pink hover:underline font-medium"
            >
              Work in a highly regulated space? Speak to our team about bespoke packages
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
