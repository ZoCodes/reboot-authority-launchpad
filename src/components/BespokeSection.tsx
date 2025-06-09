
const BespokeSection = () => {
  return (
    <section id="bespoke" className="section-padding">
      <div className="container-custom">
        <div className="bg-white border-2 border-reboot-navy rounded-2xl p-8 md:p-12 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reboot-pink">Looking for Something Bespoke?</h2>
            <p className="text-lg mb-8">
              Not every business fits standard packages. We create fully custom retainers tailored 
              to your unique goals and challenges.
            </p>
            <button 
              onClick={() => window.openContactModal("bespoke")}
              className="bg-reboot-pink text-white px-8 py-4 rounded-md font-semibold text-lg transition-all hover:bg-opacity-90"
            >
              Speak to a Growth Director
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeSection;
