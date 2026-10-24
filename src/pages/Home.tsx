import { useRef } from 'react';
import { Users2, Settings, Rocket } from 'lucide-react';
import Navbar from "../components/Navbar";
import TabsSection from "../components/TabsSection";
import BookingSection from "../components/BookingSection";
import { useScrollReveal } from '../hooks/useScrollReveal';
import FAQSection from '../components/FAQSection';
import founderPhoto from '../assets/founder-v2.png';

const Home = () => {
  const heroRef = useScrollReveal();
  const faqRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = () => {
    tabsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-[#16325c] overflow-x-hidden">
      <Navbar 
        scrollToVideo={scrollToVideo} 
        scrollToFAQ={scrollToFAQ}
      />
      
      {/* Hero Section */}
      <header ref={heroRef} className="reveal-element relative bg-transparent z-0 pt-4 md:pt-0 pb-8 md:pb-12">
        <div className="container mx-auto px-2 sm:px-4 relative z-10 mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative flex justify-center md:justify-start max-w-full">
              <div
                className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-80"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(240,215,140,0.7) 45%, rgba(212,175,55,0.35) 100%)'
                }}
              />
              <img
                src={founderPhoto}
                alt="Nate, Founder of ConstructClients"
                className="relative z-10 w-auto max-w-full max-h-[70vh] h-auto object-contain rounded-3xl border-[3px] border-[#f8e7b0]"
                style={{
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.9), 0 0 28px rgba(255,255,255,0.85), 0 0 48px rgba(212,175,55,0.55)'
                }}
              />
            </div>

            <div className="text-center md:text-left px-4 md:px-0">
              <p className="text-sm tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
                Founder
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#16325c] leading-tight mb-4">
                Hi, I’m Nate
              </h1>
              <p className="text-xl md:text-2xl text-[#1e4d8c] font-medium mb-5">
                Founder of ConstructClients
              </p>
              <p className="text-[#3d5a80] text-base md:text-lg leading-relaxed">
                I help luxury renovation businesses fill their calendars with high-value clients — so they can have more freedom, more joy, and more high-value projects.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Section */}
      <section ref={tabsRef}>
        <TabsSection />
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/25 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 animate-float relative">
            <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-50"></div>
            <div className="relative z-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-4">
                Our Process: <span className="bg-gradient-to-r from-[#c9a227] via-[#f0d78c] to-[#d4af37] bg-clip-text text-transparent">Getting Started is Simple</span>
          </h2>
            </div>
          </div>
          <p className="text-center text-[#3d5a80] mb-16 max-w-2xl mx-auto">
            We handle everything for you—from strategy to scaling—so you can focus on running your business.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: Users2, 
                title: 'Book/Schedule', 
                desc: 'We dive deep into your challenges, assess your current marketing efforts, and qualify if you\'re the right fit. If so, we show you exactly how we\'ll scale your business with our proven system.' 
              },
              { 
                icon: Settings, 
                title: 'We\'ll Get to Work', 
                desc: 'You fill out a form, and we handle the rest—tracking, automation, and high-converting ads. Once everything is set, we launch and start bringing in leads.' 
              },
              { 
                icon: Rocket, 
                title: 'Happily Ever After!', 
                desc: 'Your calendar fills with eager, qualified clients on autopilot—saving you time, reducing stress, and letting you focus on what truly matters.' 
              }
            ].map((step, index) => (
              <div key={index} className="process-step text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/50 rounded-full flex items-center justify-center relative glow-step border border-[#d4af37]/30">
                  <step.icon className="w-10 h-10 text-[#d4af37]" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-medium text-[#d4af37] glowing-text">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#16325c]">{step.title}</h3>
                <p className="text-[#3d5a80]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef}>
        <FAQSection />
      </section>

      {/* Booking Section */}
      <BookingSection />
    </div>
  );
};

export default Home; 