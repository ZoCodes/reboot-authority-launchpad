
const BespokeSection = () => {
  const handleContactClick = () => {
    if (window.openContactModal) {
      window.openContactModal('bespoke');
    }
  };

  return (
    <section id="bespoke" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-gray-100 rounded-2xl p-12 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Prefer a <span className="text-pink-500">Custom Campaign?</span>
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our bespoke team offers fully collaborative campaigns with creative workshops and stakeholder involvement.
          </p>
          <button onClick={handleContactClick} className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Speak to our Growth Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default BespokeSection;
