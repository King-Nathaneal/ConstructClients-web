import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MESSENGER_URL } from '../utils/messenger';

type NavbarProps = {
  scrollToVideo: () => void;
  scrollToFAQ: () => void;
};

const Navbar = ({ scrollToVideo, scrollToFAQ }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-[200] bg-white/45 backdrop-blur-xl border-b border-[#d4af37]/25 shadow-[0_8px_30px_rgba(30,77,140,0.08)]">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo Container */}
          <div className="flex md:items-center md:gap-12 w-full md:w-auto justify-center md:justify-start">
            {/* Main Logo */}
            <div className="h-[50px] flex items-center">
              <img 
                src="/Untitled design (5).svg" 
                alt="ConstructClients.ai Logo" 
                className="h-full w-auto object-contain scale-[1.5]"
              />
            </div>
            {/* Second Logo */}
            <div className="h-[140px] hidden md:flex items-center -my-8">
              <img 
                src="/2-LOGO.png" 
                alt="ConstructClients wordmark" 
                className="h-full w-auto object-contain scale-[3.2] drop-shadow-[0_4px_12px_rgba(212,175,55,0.35)]"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={scrollToVideo}
              className="text-[#16325c] hover:text-[#d4af37] transition-colors font-medium"
            >
              Our Solution
            </button>
            <button 
              onClick={scrollToFAQ}
              className="text-[#16325c] hover:text-[#d4af37] transition-colors font-medium"
            >
              FAQ
            </button>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#d4af37] via-[#f0d78c] to-[#c9a227] hover:brightness-105 text-[#16325c] px-4 py-2 rounded-lg transition-all transform hover:scale-105 font-semibold shadow-[0_6px_18px_rgba(212,175,55,0.35)]"
            >
              Message me for an Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#16325c] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-xl
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div className="flex flex-col space-y-4 p-4 border-t border-[#d4af37]/20">
            <button 
              onClick={() => {
                scrollToVideo();
                setIsMenuOpen(false);
              }}
              className="text-[#16325c] hover:text-[#d4af37] transition-colors py-2 text-left font-medium"
            >
              Our Solution
            </button>
            <button 
              onClick={() => {
                scrollToFAQ();
                setIsMenuOpen(false);
              }}
              className="text-[#16325c] hover:text-[#d4af37] transition-colors py-2 text-left font-medium"
            >
              FAQ
            </button>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-[#d4af37] via-[#f0d78c] to-[#c9a227] hover:brightness-105 text-[#16325c] px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-center font-semibold"
            >
              Message me for an Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
