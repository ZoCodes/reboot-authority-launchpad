
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PackagesSection from "@/components/PackagesSection";
import FeaturesSection from "@/components/FeaturesSection";
import BespokeSection from "@/components/BespokeSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

declare global {
  interface Window {
    openContactModal: (packageName: string) => void;
  }
}

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("bespoke");

  useEffect(() => {
    // Add global function to open modal from any component
    window.openContactModal = (packageName: string) => {
      setSelectedPackage(packageName);
      setIsContactModalOpen(true);
    };

    return () => {
      // Clean up
      delete window.openContactModal;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <PackagesSection />
      <FeaturesSection />
      <BespokeSection />
      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        selectedPackage={selectedPackage}
      />
    </div>
  );
};

export default Index;
