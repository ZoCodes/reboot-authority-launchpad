
const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Link earning,<br /> built around your business goals
            </h1>
            <p className="text-lg md:text-xl mb-8 text-reboot-navy font-light max-w-lg">
              We build real, sustainable search visibility with high-quality backlinks that move the needle for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-reboot-pink/10 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-reboot-navy/10 rounded-lg transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600"
                alt="SEO Growth Strategy"
                className="rounded-lg shadow-xl relative z-10 object-cover w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
