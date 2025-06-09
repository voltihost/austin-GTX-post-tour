
import React, { useState, useEffect } from 'react';

const InteractivePaddles = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [position, setPosition] = useState(50); // percentage from bottom
  const [velocity, setVelocity] = useState(0);

  // Gravity and physics
  useEffect(() => {
    const gameLoop = setInterval(() => {
      setPosition(prev => {
        const newPos = Math.max(5, Math.min(95, prev + velocity));
        return newPos;
      });
      
      setVelocity(prev => prev - 0.8); // gravity pulls down
    }, 50);

    return () => clearInterval(gameLoop);
  }, [velocity]);

  const handlePaddlesClick = () => {
    setIsJumping(true);
    setClickCount(prev => prev + 1);
    setVelocity(4); // flap up with force
    
    // Reset jump animation
    setTimeout(() => {
      setIsJumping(false);
    }, 200);
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
    <div className="fixed bottom-0 right-4 z-50 pointer-events-none h-screen w-20">
      {/* Speech bubble that appears after clicking */}
      {clickCount > 0 && (
        <div 
          className="absolute right-0 bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg border-2 border-sunshine mb-2 max-w-[180px] md:max-w-xs animate-fade-in"
          style={{ bottom: `${position + 15}%` }}
        >
          <p className="text-forest text-xs md:text-sm font-medium">{getRandomMessage()}</p>
          <div className="absolute bottom-0 right-4 md:right-6 w-0 h-0 border-l-4 md:border-l-6 border-r-4 md:border-r-6 border-t-4 md:border-t-6 border-l-transparent border-r-transparent border-t-white/95 transform translate-y-full"></div>
        </div>
      )}
      
      {/* Interactive Paddles with flappy bird physics */}
      <div 
        onClick={handlePaddlesClick}
        className={`absolute right-0 cursor-pointer transition-all duration-200 hover:scale-110 pointer-events-auto ${
          isJumping ? 'animate-bounce' : ''
        }`}
        style={{ bottom: `${position}%` }}
        title="Click me to fly! 🦆"
      >
        <img 
          src="/lovable-uploads/570f20a8-66f4-4062-bdd0-e6d298e7333c.png"
          alt="Paddles the Duck - Click to fly!"
          className="w-12 h-12 md:w-16 md:h-16 drop-shadow-xl"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
            transform: velocity > 0 ? 'rotate(-10deg)' : velocity < -2 ? 'rotate(10deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-out'
          }}
        />
      </div>
      
      {/* Environmental tip counter */}
      {clickCount >= 3 && (
        <div 
          className="absolute right-0 bg-coral text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-bold animate-pulse pointer-events-none"
          style={{ bottom: `${position + 12}%`, transform: 'translateX(8px)' }}
        >
          {clickCount}
        </div>
      )}
    </div>
  );
};

export default InteractivePaddles;
