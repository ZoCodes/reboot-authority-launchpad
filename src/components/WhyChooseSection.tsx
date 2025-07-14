
import { Link, Clock, Users, Globe, BarChart3 } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Reboot's Zero Intervention Digital PR</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Choose a zero intervention digital PR package with Reboot. Get guaranteed backlinks, transparent delivery timelines, and measurable results from the UK's largest dedicated digital PR team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Link className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">🔗 Guaranteed Backlinks</h3>
            <p className="text-gray-600">DR30+ links from global high-authority domains</p>
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
            <p className="text-gray-600">Largest in-house digital PR team in the UK; benefit from our scalability</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">🌍 Global Reach</h3>
            <p className="text-gray-600">Campaigns that work across UK, US, Europe, Australia and more</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">📊 Data-Driven Impact</h3>
            <p className="text-gray-600">PhD-level analysts and PR strategists who know your market and priorities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
