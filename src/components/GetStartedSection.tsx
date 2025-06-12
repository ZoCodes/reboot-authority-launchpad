
const GetStartedSection = () => {
  const steps = [
    {
      number: "01",
      title: "Book your free Authority Audit",
      description: "We'll benchmark your backlink profile, domain authority, and growth opportunities."
    },
    {
      number: "02", 
      title: "Use our calculator to stress test your budget",
      description: "Based on your goals, our Growth team will recommend the delivery window and link targets that fit your business."
    },
    {
      number: "03",
      title: "Watch your backlink profile grow", 
      description: "We deliver guaranteed backlinks within your chosen timeframe with transparent reporting and expert support throughout."
    },
    {
      number: "04",
      title: "Onboarding session",
      description: "We discuss your authority audit findings and develop a tailored strategy to maximize your link building ROI and ranking potential."
    }
  ];

  return (
    <section id="get-started" className="section-padding bg-light-grey">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-bold mb-6 text-reboot-navy">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent, and results-driven
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                <div className="w-16 h-16 bg-reboot-pink rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-reboot-navy">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
