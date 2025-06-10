
const BespokeSection = () => {
  return (
    <section id="bespoke" className="section-padding bg-white">
      <div className="container-custom">
        <div className="callout-style max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reboot-navy">
            Looking for Something <span className="text-reboot-pink">Bespoke?</span>
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Not every business fits standard packages. We create fully custom retainers tailored 
            to your unique goals and challenges.
          </p>
          <button 
            onClick={() => window.openContactModal("bespoke")}
            className="btn-primary"
          >
            Speak to a Growth Director
          </button>
        </div>
      </div>
    </section>
  );
};

export default BespokeSection;
