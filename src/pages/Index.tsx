
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Footer from '@/components/Footer';
import InteractivePaddles from '@/components/InteractivePaddles';
import TippingCarousel from '@/components/TippingCarousel';

const Index = () => {
  const handleLogoClick = () => {
    window.open('https://getupandgokayaking.com/locations/texas/austin/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-water-deep via-water-primary to-water-light">
      {/* Header with Logo */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/a0651e9b-f61e-4f77-969e-98303a85cf70.png" 
              alt="Get Up And Go Kayaking Logo" 
              className="h-56 w-auto drop-shadow-xl cursor-pointer hover:scale-105 transition-transform"
              onClick={handleLogoClick}
            />
          </div>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Thank You for an Amazing Adventure! 🌊
            </h1>
            <p className="text-xl text-sunshine mb-8 leading-relaxed">
              Your experience with Austin's premier water adventure team was just the beginning. 
              Show your appreciation and help us continue creating unforgettable moments!
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Paddles Mascot */}
      <InteractivePaddles />

      {/* Main Tipping Section - Clean and Focused */}
      <div className="bg-gradient-to-r from-forest/90 to-water-deep/90 py-16">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="text-sunshine w-10 h-10 animate-pulse" />
              <h2 className="text-4xl font-bold text-white">Show Your Appreciation</h2>
              <Heart className="text-sunshine w-10 h-10 animate-pulse" />
            </div>
            <p className="text-xl text-water-light max-w-3xl mx-auto leading-relaxed">
              Had an incredible experience? Your tips help our guides continue providing world-class adventures 
              while supporting environmental conservation in beautiful Austin.
            </p>
          </div>

          {/* Tipping Carousel - The main focus */}
          <TippingCarousel />

          {/* Simple Thank You Message */}
          <div className="text-center mt-16 p-8 bg-white/95 rounded-2xl border-0 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-forest mb-4">
              💙 Supporting Sustainable Adventures
            </h3>
            <p className="text-forest/80 text-lg leading-relaxed">
              Every tip and review helps us maintain Austin's waterways, educate visitors about conservation, 
              and provide unforgettable experiences that connect people with nature.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
