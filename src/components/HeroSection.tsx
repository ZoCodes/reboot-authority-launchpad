
const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
      <div className="container-custom">
        <div className="flex justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-reboot-navy">
              Digital PR Pricing Calculator
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-reboot-navy">
              Digital PR, <span className="text-reboot-pink">calculated for</span> your business goals
            </h2>
            <p className="text-xl mb-10 text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Backlinks that boost rankings, without demanding your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="btn-primary"
                onClick={() => window.openContactModal("bespoke")}
              >
                Book your free Authority Audit
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
