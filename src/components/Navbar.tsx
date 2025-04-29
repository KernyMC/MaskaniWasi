
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import DonateButton from "./DonateButton";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md py-2 border-b border-white/20"
          : "bg-black/10 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/placeholder.svg" 
              alt="Maskani Wasi Logo"
              className="h-10 w-10"
            />
            <span className={`ml-2 text-lg font-semibold hidden md:inline-block ${isScrolled ? 'text-maskani-dark-green' : 'text-white font-bold drop-shadow-md'}`}>
              MASKANI WASI
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <div className="nav-link">
            <span className={`font-medium ${isScrolled ? 'text-maskani-dark-green' : 'text-white font-bold drop-shadow-md'}`}>QUIÉNES SOMOS</span>
            <div className="nav-dropdown">
              <Link to="/historia" className="dropdown-item">Historia</Link>
              <Link to="/donde-estamos" className="dropdown-item">Dónde estamos</Link>
            </div>
          </div>
          
          <div className="nav-link">
            <span className={`font-medium ${isScrolled ? 'text-maskani-dark-green' : 'text-white font-bold drop-shadow-md'}`}>NUESTRO TRABAJO</span>
            <div className="nav-dropdown">
              <Link to="/vision" className="dropdown-item">Visión</Link>
              <Link to="/mision" className="dropdown-item">Misión</Link>
              <div className="px-4 py-2 text-xs text-gray-600 border-t border-gray-100 mt-1">
                <p className="mb-1 font-semibold">Nuestras iniciativas:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Custodia familiar</li>
                  <li>Corredor ecológico</li>
                  <li>Iniciativas socioculturales</li>
                  <li>El Pequeño Explorador</li>
                  <li>Estrategias de conservación</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="nav-link">
            <span className={`font-medium ${isScrolled ? 'text-maskani-dark-green' : 'text-white font-bold drop-shadow-md'}`}>MASKANI WASI LODGE</span>
            <div className="nav-dropdown">
              <Link to="/lodge" className="dropdown-item">Alojamiento y Camping</Link>
              <Link to="/lodge/rooms" className="dropdown-item">Habitaciones</Link>
              <Link to="/lodge/pricing" className="dropdown-item">Precios</Link>
              <Link to="/lodge/amenities" className="dropdown-item">Comodidades</Link>
              <a 
                href="https://www.booking.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="dropdown-item font-medium text-maskani-dark-green"
              >
                Reservar en Booking.com
              </a>
            </div>
          </div>
          
          <div className="nav-link">
            <span className={`font-medium ${isScrolled ? 'text-maskani-dark-green' : 'text-white font-bold drop-shadow-md'}`}>ECOTURISMO</span>
            <div className="nav-dropdown">
              <Link to="/excursiones" className="dropdown-item">Excursiones</Link>
              <Link to="/expediciones" className="dropdown-item">Expediciones</Link>
              <Link to="/experiencias" className="dropdown-item">Experiencias Maskani Wasi</Link>
              <Link to="/turismo-comunitario" className="dropdown-item">Viajes Organizados – Turismo Comunitario</Link>
            </div>
          </div>
          
          <div className="nav-link">
            <span className={`font-medium ${isScrolled ? 'text-maskani-dark-green' : 'text-white font-bold drop-shadow-md'}`}>MEDICINA ANCESTRAL</span>
            <div className="nav-dropdown">
              <Link to="/ayahuasca" className="dropdown-item">Toma de Ayahuasca</Link>
              <Link to="/hongos" className="dropdown-item">Toma de Hongos</Link>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <DonateButton />
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-maskani-dark-green' : 'text-white'} focus:outline-none`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white/95 backdrop-blur-lg shadow-lg absolute w-full left-0 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
          <MobileAccordion 
            title="QUIÉNES SOMOS"
            items={[
              { label: "Historia", href: "/historia" },
              { label: "Dónde estamos", href: "/donde-estamos" }
            ]}
          />
          
          <MobileAccordion 
            title="NUESTRO TRABAJO"
            items={[
              { label: "Visión", href: "/vision" },
              { label: "Misión", href: "/mision" }
            ]}
            description={
              <div className="px-4 py-2 text-xs text-gray-600 border-t border-gray-100 mt-1">
                <p className="mb-1 font-semibold">Nuestras iniciativas:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Custodia familiar</li>
                  <li>Corredor ecológico</li>
                  <li>Iniciativas socioculturales</li>
                  <li>El Pequeño Explorador</li>
                  <li>Estrategias de conservación</li>
                </ul>
              </div>
            }
          />
          
          <MobileAccordion 
            title="MASKANI WASI LODGE"
            items={[
              { label: "Alojamiento y Camping", href: "/lodge" },
              { label: "Habitaciones", href: "/lodge/rooms" },
              { label: "Precios", href: "/lodge/pricing" },
              { label: "Comodidades", href: "/lodge/amenities" },
              { label: "Reservar en Booking.com", href: "https://www.booking.com", external: true }
            ]}
          />
          
          <MobileAccordion 
            title="ECOTURISMO"
            items={[
              { label: "Excursiones", href: "/excursiones" },
              { label: "Expediciones", href: "/expediciones" },
              { label: "Experiencias Maskani Wasi", href: "/experiencias" },
              { label: "Viajes Organizados – Turismo Comunitario", href: "/turismo-comunitario" }
            ]}
          />
          
          <MobileAccordion 
            title="MEDICINA ANCESTRAL"
            items={[
              { label: "Toma de Ayahuasca", href: "/ayahuasca" },
              { label: "Toma de Hongos", href: "/hongos" }
            ]}
          />
          
          <div className="pt-3 pb-2">
            <DonateButton fullWidth />
          </div>
        </div>
      </div>
    </header>
  );
};

interface MobileAccordionProps {
  title: string;
  items: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
  description?: React.ReactNode;
}

const MobileAccordion: React.FC<MobileAccordionProps> = ({ title, items, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        className="w-full flex justify-between items-center p-3 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-gray-50 py-1">
          {items.map((item, index) => (
            item.external ? (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={index}
                to={item.href}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item.label}
              </Link>
            )
          ))}
          {description}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
