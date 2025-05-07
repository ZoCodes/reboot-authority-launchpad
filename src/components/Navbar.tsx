
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/4d7f7a14-ac69-481e-8e6c-b85d266d8e58.png" 
            alt="Reboot Logo" 
            className="h-10" 
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#why-choose"
            className="text-reboot-navy hover:text-reboot-pink transition-colors"
          >
            Why Us
          </a>
          <a
            href="#packages"
            className="text-reboot-navy hover:text-reboot-pink transition-colors"
          >
            Packages
          </a>
          <a
            href="#features"
            className="text-reboot-navy hover:text-reboot-pink transition-colors"
          >
            Features
          </a>
          <a
            href="#bespoke"
            className="text-reboot-navy hover:text-reboot-pink transition-colors"
          >
            Bespoke
          </a>
          <button
            className="btn-primary"
            onClick={() => window.openContactModal("bespoke")}
          >
            Book Your Free Audit
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-reboot-navy p-2"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a
              href="#why-choose"
              className="text-reboot-navy hover:text-reboot-pink transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Why Us
            </a>
            <a
              href="#packages"
              className="text-reboot-navy hover:text-reboot-pink transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Packages
            </a>
            <a
              href="#features"
              className="text-reboot-navy hover:text-reboot-pink transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Features
            </a>
            <a
              href="#bespoke"
              className="text-reboot-navy hover:text-reboot-pink transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Bespoke
            </a>
            <button
              className="btn-primary w-full text-center"
              onClick={() => {
                window.openContactModal("bespoke");
                toggleMobileMenu();
              }}
            >
              Book Your Free Audit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
