
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LinkAcceleratorCallout from "@/components/LinkAcceleratorCallout";
import WhyChooseSection from "@/components/WhyChooseSection";
import PackagesSection from "@/components/PackagesSection";
import GetStartedSection from "@/components/GetStartedSection";
import FeaturesSection from "@/components/FeaturesSection";
import BoltOnServicesSection from "@/components/BoltOnServicesSection";
import FlexibleGrowthSection from "@/components/FlexibleGrowthSection";
import WhyBrandsChooseSection from "@/components/WhyBrandsChooseSection";
import BespokeSection from "@/components/BespokeSection";
import FinalCTASection from "@/components/FinalCTASection";
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
      <LinkAcceleratorCallout />
      <WhyChooseSection />
      <PackagesSection />
      <GetStartedSection />
      <FeaturesSection />
      <BoltOnServicesSection />
      <FlexibleGrowthSection />
      <WhyBrandsChooseSection />
      <BespokeSection />
      <FinalCTASection />
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
