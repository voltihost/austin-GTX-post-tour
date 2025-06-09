
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
    <div className="fixed bottom-4 right-4 z-50">
      {/* Speech bubble that appears after clicking */}
      {clickCount > 0 && (
        <div className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border-2 border-sunshine mb-2 max-w-xs animate-fade-in">
          <p className="text-forest text-sm font-medium">{getRandomMessage()}</p>
          <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/95 transform translate-y-full"></div>
        </div>
      )}
      
      {/* Interactive Paddles */}
      <div 
        onClick={handlePaddlesClick}
        className={`cursor-pointer transition-all duration-300 hover:scale-110 ${
          isJumping ? 'animate-bounce' : ''
        }`}
        title="Click me! 🦆"
      >
        <img 
          src="/lovable-uploads/9a7d8e4b-3c62-48dc-9efa-25619671bd88.png"
          alt="Paddles the Duck - Click for environmental tips!"
          className="w-16 h-16 drop-shadow-lg"
        />
      </div>
      
      {/* Environmental tip counter */}
      {clickCount >= 3 && (
        <div className="absolute -top-2 -left-2 bg-coral text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
          {clickCount}
        </div>
      )}
    </div>
  );
};

export default InteractivePaddles;
