
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
    <div className="min-h-screen bg-gradient-to-br from-water-primary via-water-light to-water-primary">
      {/* Header with Logo */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <img 
              src="/lovable-uploads/a0651e9b-f61e-4f77-969e-98303a85cf70.png" 
              alt="Get Up And Go Kayaking Logo" 
              className="h-40 md:h-56 w-auto drop-shadow-xl cursor-pointer hover:scale-105 transition-transform"
              onClick={handleLogoClick}
            />
          </div>
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Thank you for choosing Austin's premier water adventure experience! 🌊
            </h1>
          </div>
        </div>
      </div>

      {/* Interactive Paddles Mascot */}
      <InteractivePaddles />

      {/* Main Tipping Section - Enhanced Call-to-Action */}
      <div className="bg-gradient-to-r from-slate-800/95 to-slate-700/95 py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Heart className="text-sunshine w-8 h-8 md:w-10 md:h-10 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Show Your Appreciation</h2>
              <Heart className="text-sunshine w-8 h-8 md:w-10 md:h-10 animate-pulse" />
            </div>
            <p className="text-lg md:text-xl text-water-light max-w-3xl mx-auto leading-relaxed px-4">
              Had an incredible experience? Your tips help our guides continue providing world-class adventures 
              while supporting environmental conservation in beautiful Austin.
            </p>
          </div>

          {/* Enhanced Call-to-Action Box */}
          <div className="bg-gradient-to-r from-water-primary to-water-deep p-6 md:p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto mb-8 md:mb-12 border-2 border-sunshine/30">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                🎯 Start Tipping Your Guide Below
              </h3>
              <p className="text-water-light text-lg md:text-xl mb-4 md:mb-6 leading-relaxed">
                Select your amazing guide and choose your preferred payment method
              </p>
              <div className="bg-sunshine/20 p-4 md:p-6 rounded-xl">
                <p className="text-white font-semibold text-lg md:text-xl">
                  👇 Choose Your Guide to Get Started 👇
                </p>
              </div>
            </div>
          </div>

          {/* Tipping Carousel - The main focus */}
          <TippingCarousel />

          {/* Simple Thank You Message */}
          <div className="text-center mt-12 md:mt-16 p-6 md:p-8 bg-white/95 rounded-2xl border-0 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-forest mb-3 md:mb-4">
              💙 Supporting Sustainable Adventures
            </h3>
            <p className="text-forest/80 text-base md:text-lg leading-relaxed">
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
