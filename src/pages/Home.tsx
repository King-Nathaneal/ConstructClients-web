import { useRef } from 'react';
import { ArrowRight, Users2, Settings, Rocket } from 'lucide-react';
import Navbar from "../components/Navbar";
import TabsSection from "../components/TabsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BookingSection from "../components/BookingSection";
import { useScrollReveal } from '../hooks/useScrollReveal';
import { openCalendlyPopup } from '../utils/calendly';
import FAQSection from '../components/FAQSection';

const Home = () => {
  const heroRef = useScrollReveal();
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = () => {
    tabsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar 
        scrollToVideo={scrollToVideo} 
        scrollToBooking={openCalendlyPopup} 
        scrollToTestimonials={scrollToTestimonials}
        scrollToFAQ={scrollToFAQ}
      />
      
      {/* Hero Section */}
      <header ref={heroRef} className="reveal-element relative min-h-[70vh] md:min-h-[75vh] flex items-start bg-[#38071e] z-0 pt-4 md:pt-0 pb-4 md:pb-8">
        {/* Content */}
        <div className="container mx-auto px-2 sm:px-4 relative z-10 mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left side - Text Content */}
            <div className="max-w-3xl text-center md:text-left relative pt-4 md:pt-8 order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] animate-fadeIn relative z-10">
                <span className="block text-white mb-3 md:mb-4">
                  Luxury Renovation Clients on{' '}
                  <span className="bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] bg-clip-text text-transparent text-glow inline-block">
                    AutoPilot
                </span>
                </span>
                <div className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-5 md:mt-6 leading-relaxed">
                  <span className="text-[#ec9611] font-semibold">More freedom</span>
                  <span className="text-white/70">, </span>
                  <span className="text-[#ec9611] font-semibold">more joy</span>
                  <span className="text-white/70">, </span>
                  <span className="text-[#FFA500] font-semibold text-glow">more high-value projects</span>
                  <span className="text-white/70">.</span>
                </div>
              </h1>
              {/* Book My Call Button */}
              <div className="flex justify-center md:justify-start gap-6 animate-fadeIn mb-4 md:mb-8 relative z-50">
                <button 
                  onClick={openCalendlyPopup}
                  className="bg-[#ec9611] hover:bg-[#d88610] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-base rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                >
                  Book My Free Call
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Right side - Hero Image */}
            <div className="relative hidden sm:flex items-center justify-center z-0 order-1 md:order-2 mt-8 md:mt-0 mx-auto">
              <img 
                src="/Untitled design.svg" 
                alt="Extension Hero" 
                className="w-full md:w-auto max-w-[90%] md:max-w-full h-auto md:h-[450px] lg:h-[500px] xl:h-[550px] object-contain animate-fadeIn mx-auto relative"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(236, 150, 17, 0.2))'
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Section */}
      <section ref={tabsRef}>
        <TabsSection />
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef}>
        <TestimonialsSection />
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#2a0517]/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 animate-float relative">
            <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-50"></div>
            <div className="relative z-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-4">
                Our Process: <span className="bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] bg-clip-text text-transparent">Getting Started is Simple</span>
          </h2>
            </div>
          </div>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
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
                <div className="w-20 h-20 mx-auto mb-6 bg-[#ec9611]/10 rounded-full flex items-center justify-center relative glow-step">
                  <step.icon className="w-10 h-10 text-[#ec9611]" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-medium text-[#ec9611] glowing-text">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
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