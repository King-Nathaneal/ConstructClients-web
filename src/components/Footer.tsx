import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/constructclients-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/40 text-[#16325c] py-8 relative z-10 backdrop-blur-xl border-t border-[#d4af37]/25">
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(214,234,248,0.45))'
        }}
      />
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col space-y-6">
          {/* Top section with logo and links */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="ConstructClients Logo" 
                className="h-16 w-16 object-contain"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.4))'
                }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {/* Socials Section */}
              <div className="flex items-center gap-2">
                <span className="text-[#16325c]">Check out our socials:</span>
                <a 
                  href="https://www.linkedin.com/in/constructclients/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077b5] text-white p-2 rounded hover:bg-[#005885] transition-all flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="white"
                    className="w-5 h-5"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex space-x-4">
                <Link 
                  to="/terms" 
                  className="bg-gradient-to-r from-[#d4af37] via-[#f0d78c] to-[#c9a227] text-[#16325c] px-4 py-2 rounded hover:brightness-105 transition font-semibold"
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/privacy-policy"
                  className="bg-gradient-to-r from-[#d4af37] via-[#f0d78c] to-[#c9a227] text-[#16325c] px-4 py-2 rounded hover:brightness-105 transition font-semibold"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section with copyright */}
          <div className="border-t border-[#1e4d8c]/15 pt-6">
            <p className="text-center text-[#3d5a80]">
              Copyright © 2025 ConstructClients. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
