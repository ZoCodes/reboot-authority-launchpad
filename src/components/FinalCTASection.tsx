
const FinalCTASection = () => {
  return (
    <section className="section-padding bg-light-grey">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-reboot-navy">
            Ready to Grow Your Visibility?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join hundreds of brands who trust us to deliver measurable link building results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              className="btn-primary"
              onClick={() => window.openContactModal("bespoke")}
            >
              Book Your Free Visibility Audit
            </button>
            <button 
              className="btn-secondary"
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
