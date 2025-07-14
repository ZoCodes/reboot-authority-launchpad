
const GetStartedSection = () => {
  const steps = [
    {
      number: "01",
      title: "Book your free Authority Audit",
      description: "We assess your current domain authority, backlink profile, and competitor landscape."
    },
    {
      number: "02", 
      title: "Use the Calculator",
      description: "Stress-test your budget and goals. We'll suggest the right package size and timeline."
    },
    {
      number: "03",
      title: "Strategy call",
      description: "We discuss your authority audit findings and develop a tailored strategy to maximise your link building ROI and ranking potential."
    },
    {
      number: "04",
      title: "Grow your backlink profile", 
      description: "We run the campaigns and deliver guaranteed links within your set window."
    },
    {
      number: "05",
      title: "Results & Wrap-Up", 
      description: "You get detailed reporting, analysis, and options to scale further."
    }
  ];

  return (
    <section id="get-started" className="section-padding bg-light-grey">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-bold mb-6 text-reboot-navy">How it works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first contact to final backlink report - here's the journey:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
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
