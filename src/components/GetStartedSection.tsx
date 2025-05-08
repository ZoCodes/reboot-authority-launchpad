
const GetStartedSection = () => {
  const steps = [
    {
      title: "Book your free Authority Audit.",
      description: "We'll benchmark your current domain authority, backlink profile, and growth opportunities."
    },
    {
      title: "Choose your Programme.",
      description: "We'll recommend the best fit based on your goals and ambition."
    },
    {
      title: "Start growing.",
      description: "Structured delivery, measurable outcomes, and the full Reboot quality you expect."
    },
    {
      title: "Move onto a simple monthly rolling plan.",
      description: "Or choose a new Programme to keep building momentum."
    }
  ];

  return (
    <section id="get-started" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Get Started</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-reboot-pink/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-reboot-pink">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%_-_16px)] w-[calc(100%_-_32px)] h-0.5 bg-gray-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
