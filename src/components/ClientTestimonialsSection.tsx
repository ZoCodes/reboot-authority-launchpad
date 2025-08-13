const ClientTestimonialsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6 text-reboot-navy">Client Case Studies & Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-light-grey rounded-2xl p-8">
            <h3 className="text-xl font-bold text-reboot-navy mb-4">
              DRIVING GROWTH IN THE VENTURE CAPITAL SPACE
            </h3>
            <p className="text-gray-600">
              Coming soon - detailed case study on how we helped a leading VC firm build authority and attract high-quality investment opportunities through strategic digital PR.
            </p>
          </div>

          <div className="bg-light-grey rounded-2xl p-8">
            <h3 className="text-xl font-bold text-reboot-navy mb-4">
              BUILDING LINKS AT SCALE IN THE TRAVEL INDUSTRY
            </h3>
            <p className="text-gray-600">
              Coming soon - comprehensive case study showcasing our multi-market approach to travel industry link building across Europe and North America.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-gray-600">I</span>
            </div>
            <div>
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "Reboot has been a breath of fresh air as far as link building is concerned. Their digital PR is world class and just in 3 months of engagement we got 50+ backlinks, that includes mentions in 70+ DA sites."
              </blockquote>
              <div className="text-sm text-gray-600">
                <strong className="text-reboot-navy">Phani Deepak Akella</strong><br />
                Head of Marketing, Indusface
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="text-reboot-pink hover:underline font-medium text-lg">
            See more client success stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;