
const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h1 className="font-bold mb-8 leading-tight text-reboot-navy">
              Digital PR,<br /> 
              <span className="text-reboot-pink">Calculated For</span> Your Business Goals
            </h1>
            <p className="text-xl mb-10 text-gray-600 font-medium max-w-xl leading-relaxed">
              The right amount of link earning to gain authority in your field - with delivery windows, set KPIs and SEO expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
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
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative max-w-lg w-full">
              <div className="absolute inset-0 bg-reboot-pink/10 rounded-3xl transform rotate-2"></div>
              <div className="absolute inset-0 bg-reboot-navy/5 rounded-3xl transform -rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Link Building Analytics Dashboard showing thousands of earned backlinks and authority growth metrics"
                className="rounded-3xl shadow-xl relative z-10 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
