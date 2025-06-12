
const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
      <div className="container-custom">
        <div className="flex justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="font-bold mb-8 leading-tight text-reboot-navy">
              Digital PR,<br /> 
              <span className="text-reboot-pink">Calculated For</span> Your Business Goals
            </h1>
            <p className="text-xl mb-10 text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
              The right amount of link earning to gain authority in your field - with delivery windows, set KPIs and SEO expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="btn-primary"
                onClick={() => window.openContactModal("bespoke")}
              >
                Book Your Free Authority Audit
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
      </div>
    </section>
  );
};

export default HeroSection;
