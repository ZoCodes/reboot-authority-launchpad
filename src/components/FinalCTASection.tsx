
const FinalCTASection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reboot-navy">Ready to Grow Your Visibility?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-reboot-pink text-white px-8 py-4 rounded-md font-semibold text-lg transition-all hover:bg-opacity-90"
              onClick={() => window.openContactModal("bespoke")}
            >
              Book Your Free Visibility Audit
            </button>
            <button 
              className="text-reboot-navy border-reboot-navy border-2 px-8 py-4 rounded-md font-semibold text-lg transition-all hover:bg-gray-50"
              onClick={() => window.openContactModal("bespoke")}
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
