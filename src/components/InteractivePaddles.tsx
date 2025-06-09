
import React, { useState } from 'react';

const InteractivePaddles = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handlePaddlesClick = () => {
    if (isJumping) return;
    
    setIsJumping(true);
    setClickCount(prev => prev + 1);
    
    // Reset animation after it completes
    setTimeout(() => {
      setIsJumping(false);
    }, 600);
  };

  const getRandomMessage = () => {
    const messages = [
      "Quack! Let's keep our waterways clean! 🌊",
      "Paddle on! Every adventure helps protect nature! 🦆",
      "Thanks for caring about our environment! 💚",
      "Conservation is cool! Keep Austin waters beautiful! ✨",
      "Quack quack! You're helping protect our habitat! 🌿"
    ];
    return messages[clickCount % messages.length];
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      {/* Speech bubble that appears after clicking */}
      {clickCount > 0 && (
        <div className="absolute bottom-20 md:bottom-16 right-0 bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg border-2 border-sunshine mb-2 max-w-[200px] md:max-w-xs animate-fade-in">
          <p className="text-forest text-xs md:text-sm font-medium">{getRandomMessage()}</p>
          <div className="absolute bottom-0 right-4 md:right-6 w-0 h-0 border-l-4 md:border-l-8 border-r-4 md:border-r-8 border-t-4 md:border-t-8 border-l-transparent border-r-transparent border-t-white/95 transform translate-y-full"></div>
        </div>
      )}
      
      {/* Interactive Paddles with better visibility */}
      <div 
        onClick={handlePaddlesClick}
        className={`cursor-pointer transition-all duration-300 hover:scale-110 pointer-events-auto ${
          isJumping ? 'animate-bounce' : ''
        }`}
        title="Click me! 🦆"
      >
        <img 
          src="/lovable-uploads/6c1ac31c-5589-4f43-892c-3983a368f7f0.png"
          alt="Paddles the Duck - Click for environmental tips!"
          className="w-14 h-14 md:w-20 md:h-20 drop-shadow-2xl filter brightness-110 contrast-110"
          style={{
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)'
          }}
        />
      </div>
      
      {/* Environmental tip counter */}
      {clickCount >= 3 && (
        <div className="absolute -top-2 -left-2 bg-coral text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-bold animate-pulse pointer-events-none">
          {clickCount}
        </div>
      )}
    </div>
  );
};

export default InteractivePaddles;
