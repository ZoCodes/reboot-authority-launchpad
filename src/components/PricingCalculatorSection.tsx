
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

        {/* What to Expect from a Zero Intervention Campaign */}
        <div className="bg-light-grey rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-reboot-navy mb-6 text-center">What to Expect from a Zero Intervention Campaign</h3>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto">
            These campaigns are designed to deliver impact without draining your time. You leave it to us as the experts and we get to work.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">High-Authority, Global Coverage</h4>
                  <p className="text-gray-600">Our outreach isn't limited by region, sector, or contact lists. We use the full force of our journalist network to secure results.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">Creative Freedom = Better Coverage</h4>
                  <p className="text-gray-600">We'll aim to keep campaigns relevant to your niche, but we retain full flexibility to broaden the topic if that's what it takes to earn top-tier press.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">Set It and Forget It</h4>
                  <p className="text-gray-600">Once your target landing page is locked in, we get cracking. Changing domains mid-way would disrupt delivery, so we keep focus consistent.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-reboot-navy mb-2">Minimal Calls, Maximum Output</h4>
                  <p className="text-gray-600">You'll have an onboarding call to kick things off, and a wrap-up call at the end. The rest? We handle it all.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <PricingCalculator onResultsChange={setCalculatorResults} />

        {/* Enhanced Qualification Messaging */}
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
