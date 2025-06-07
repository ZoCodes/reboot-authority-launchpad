
const BespokeSection = () => {
  return (
    <section id="bespoke" className="section-padding">
      <div className="container-custom">
        <div className="bg-reboot-navy text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-reboot-pink opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-reboot-pink opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Looking for Something Bespoke?</h2>
            <p className="text-lg mb-8">
              Not every business fits standard packages. We create fully custom retainers tailored 
              to your unique goals and challenges.
              <br /><br />
              Speak our Growth Director and let's design a plan that works for you.
            </p>
            <button 
              onClick={() => window.openContactModal("bespoke")}
              className="bg-white text-reboot-navy px-8 py-4 rounded-md font-semibold text-lg transition-all hover:bg-gray-100"
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
