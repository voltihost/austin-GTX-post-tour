
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
        <div className="absolute bottom-28 md:bottom-24 right-0 bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg border-2 border-sunshine mb-2 max-w-[200px] md:max-w-xs animate-fade-in">
          <p className="text-forest text-xs md:text-sm font-medium">{getRandomMessage()}</p>
          <div className="absolute bottom-0 right-4 md:right-6 w-0 h-0 border-l-4 md:border-l-8 border-r-4 md:border-r-8 border-t-4 md:border-t-8 border-l-transparent border-r-transparent border-t-white/95 transform translate-y-full"></div>
        </div>
      )}
      
      {/* Interactive Paddles with new image and better visibility */}
      <div 
        onClick={handlePaddlesClick}
        className={`cursor-pointer transition-all duration-300 hover:scale-110 pointer-events-auto ${
          isJumping ? 'animate-bounce' : ''
        }`}
        title="Click me! 🦆"
      >
        <img 
          src="/lovable-uploads/570f20a8-66f4-4062-bdd0-e6d298e7333c.png"
          alt="Paddles the Duck - Click for environmental tips!"
          className="w-20 h-20 md:w-28 md:h-28 drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
          }}
        />
      </div>
      
      {/* Environmental tip counter */}
      {clickCount >= 3 && (
        <div className="absolute -top-2 -left-2 bg-coral text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs font-bold animate-pulse pointer-events-none">
          {clickCount}
        </div>
      )}
    </div>
  );
};

export default InteractivePaddles;
