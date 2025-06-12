
import { useState } from "react";
import PricingCalculator from "./PricingCalculator";
import IndustryExamples from "./IndustryExamples";
import PaymentOptions from "./PaymentOptions";

const PricingCalculatorSection = () => {
  const [calculatorResults, setCalculatorResults] = useState(null);

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-bold mb-6 text-reboot-navy">Calculate Your Investment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant pricing based on your target market and budget
          </p>
        </div>
        
        <PricingCalculator onResultsChange={setCalculatorResults} />
        <IndustryExamples />
        <PaymentOptions />
      </div>
    </section>
  );
};

export default PricingCalculatorSection;
