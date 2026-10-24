import { ArrowRight } from 'lucide-react';
import { MESSENGER_URL } from '../utils/messenger';

const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-white/20 backdrop-blur-sm scroll-mt-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center glass-panel rounded-3xl p-8 md:p-12">
          <div className="mb-12">
            <div className="animate-float relative mb-8">
              <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-50"></div>
              <div className="relative z-0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-6">
                  Ready to <span className="bg-gradient-to-r from-[#c9a227] via-[#f0d78c] to-[#d4af37] bg-clip-text text-transparent">Scale Your Luxury Renovation Business</span>?
                </h2>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-8 mb-12">
              <div className="relative">
                <span className="absolute inset-0 blur-sm bg-gradient-to-r from-[#d4af37] via-[#f0d78c] to-[#d4af37] opacity-20 animate-pulse"></span>
                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#1e4d8c] via-[#d4af37] to-[#c9a227] text-transparent bg-clip-text animate-float relative text-glow">
                  We guarantee results—or we work for FREE until we deliver.
                </p>
              </div>
            </div>
          </div>

          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#f0d78c] to-[#c9a227] hover:brightness-105 text-[#16325c] px-8 py-4 text-lg rounded-lg font-semibold transition-all transform hover:scale-105 shadow-[0_8px_24px_rgba(212,175,55,0.35)]"
          >
            Message me for an Appointment
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
