
const GetStartedSection = () => {
  const steps = [
    {
      title: "Book your free Visibility Audit",
      description: "We'll benchmark your backlink profile, domain authority, and growth opportunities."
    },
    {
      title: "Pick the right package",
      description: "Based on your goals, our Growth team will recommend the delivery window and link targets that fit your business."
    },
    {
      title: "Watch your visibility grow",
      description: "We deliver guaranteed backlinks within your chosen timeframe with transparent reporting and expert support throughout."
    },
    {
      title: "Keep momentum going",
      description: "After delivery, switch to a simple rolling plan, pick your next package or go bespoke to build further visibility."
    }
  ];

  return (
    <section id="get-started" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-reboot-pink rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
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
