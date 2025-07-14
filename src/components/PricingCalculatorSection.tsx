
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
              Zero Intervention Pricing
            </Badge>
          </div>
          <h2 className="font-bold mb-6 text-reboot-navy">Calculate Your Investment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hands-off, full-service link building with complete editorial freedom
          </p>
        </div>

        {/* Zero Intervention Features */}
        <div className="bg-light-grey rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-reboot-navy mb-6 text-center">Perfect for Hands-Off Growth</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-reboot-navy mb-2">Full Editorial Freedom</h4>
              <p className="text-sm text-gray-600">We handle strategy and media selection for maximum impact</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-reboot-navy mb-2">Global High-Authority</h4>
              <p className="text-sm text-gray-600">Target the best sites globally with no restrictions</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-reboot-navy mb-2">Streamlined Reporting</h4>
              <p className="text-sm text-gray-600">Perfect for busy teams - no micromanagement needed</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-reboot-navy mb-2">No Approval Delays</h4>
              <p className="text-sm text-gray-600">Campaign topics optimized for editorial interest</p>
            </div>
          </div>
        </div>
        
        <PricingCalculator onResultsChange={setCalculatorResults} />

        {/* Terms & Expectations */}
        <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-200">
          <h3 className="text-xl font-bold text-reboot-navy mb-4 text-center">What to Expect</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <ul className="space-y-2">
                <li>• We target the best sites globally for maximum impact</li>
                <li>• Campaign topics optimized for editorial interest and your sector</li>
                <li>• Streamlined communication - perfect for hands-off growth</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>• No domain changes during campaign period</li>
                <li>• Onboarding call and end-of-term wrap-up included</li>
                <li>• Professional results without operational involvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Qualification Messaging */}
        <div className="bg-reboot-pink/5 rounded-2xl p-6 mb-12 text-center border border-reboot-pink/20">
          <p className="text-gray-700 mb-4">
            <strong>Perfect for brands wanting professional results without operational involvement.</strong>
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
