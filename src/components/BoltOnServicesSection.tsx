
const BoltOnServicesSection = () => {
  const handleContactClick = () => {
    if (window.openContactModal) {
      window.openContactModal('bespoke');
    }
  };

  return (
    <section id="bolt-on-services" className="section-padding bg-light-grey">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-bold mb-6 text-reboot-navy">
            Bolt-On Services to Maximise ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Boost your link-building ROI and supercharge your authority with powerful add-ons. 
            One-off payments start from <span className="text-reboot-pink font-semibold">£5,000</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card-style">
            <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-reboot-pink rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-reboot-navy">Technical SEO Audit</h3>
            <p className="text-gray-600 leading-relaxed">
              Identify hidden issues holding your site back to ensure your new backlinks drive maximum impact.
            </p>
          </div>
          
          <div className="card-style">
            <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-reboot-pink rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-reboot-navy">CRO Audit</h3>
            <p className="text-gray-600 leading-relaxed">
              Spot where visitors drop off and unlock opportunities to improve conversions post-link building
            </p>
          </div>
          
          <div className="card-style">
            <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-reboot-pink rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-reboot-navy">GEO Audit</h3>
            <p className="text-gray-600 leading-relaxed">
              Understand where you are showing up on AI-driven search and get clear guidance to boost your presence.
            </p>
          </div>
          
          <div className="card-style">
            <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-reboot-pink rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-reboot-navy">Statistics Asset</h3>
            <p className="text-gray-600 leading-relaxed">
              Rank organically for high-value keywords and earn hyper-relevant backlinks passively with compelling data assets.
            </p>
          </div>
          
          <div className="card-style">
            <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-reboot-pink rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-reboot-navy">AiPR Package</h3>
            <p className="text-gray-600 leading-relaxed">
              Tap into AI-powered media lists and campaigns designed specifically to boost authority in AI-led search and LLMs
            </p>
          </div>
          
          <div className="card-style">
            <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-reboot-pink rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-reboot-navy">Local SEO Onsite Package</h3>
            <p className="text-gray-600 leading-relaxed">
              5x content pieces made for local businesses ready to out-rank competitors with targeted, geo-specific content.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button onClick={handleContactClick} className="btn-primary">
            Speak to our Growth team about how these add-ons can work for you
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoltOnServicesSection;
