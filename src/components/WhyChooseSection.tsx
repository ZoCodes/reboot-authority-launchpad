
import { Link, Clock, Users, Globe, BarChart3 } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why choose Reboot's fully managed digital PR</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Choose a fully managed digital PR agency package with Reboot and get guaranteed backlinks, transparent timelines, and measurable results - all delivered by the UK's largest dedicated digital PR team.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're often asked about the difference between hiring an agency and building in-house capability. If you're weighing up your options, see our full breakdown here: <a href="#" className="text-pink-500 hover:underline">In-House vs Agency</a>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Link className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">🔗 Guaranteed Backlinks</h3>
            <p className="text-gray-600">DR30+ links from high-authority domains in your target markets.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">⏳ Fixed Delivery Windows</h3>
            <p className="text-gray-600">Transparent timelines tailored to your goals</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">🇬🇧 UK-Based Team</h3>
            <p className="text-gray-600">The largest in-house digital PR team in the UK, built for scalability.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">🌍 Global Reach</h3>
            <p className="text-gray-600">Campaigns that deliver in the UK, US, Europe, Australia and beyond.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">📊 Data-Driven Impact:</h3>
            <p className="text-gray-600">PhD-level analysts and PR strategists who understand your market.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
