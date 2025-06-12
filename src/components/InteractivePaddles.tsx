
import React, { useState, useEffect } from 'react';

const InteractivePaddles = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [position, setPosition] = useState(20); // percentage from bottom
  const [velocity, setVelocity] = useState(0);
  const [showStreaks, setShowStreaks] = useState(false);

  // Gravity and physics
  useEffect(() => {
    const gameLoop = setInterval(() => {
      setPosition(prev => {
        const newPos = Math.max(10, Math.min(90, prev + velocity));
        
        // Reset count when hitting the floor
        if (newPos <= 10 && prev > 10) {
          setClickCount(0);
        }
        
        return newPos;
      });
      
      setVelocity(prev => prev - 1.2); // stronger gravity for more responsive feel
    }, 50);

    return () => clearInterval(gameLoop);
  }, [velocity]);

  const handlePaddleClick = () => {
    setIsJumping(true);
    setClickCount(prev => prev + 1);
    setVelocity(6); // stronger flap for better control
    setShowStreaks(true);
    
    // Reset jump animation and streaks
    setTimeout(() => {
      setIsJumping(false);
      setShowStreaks(false);
    }, 300);
  };

  const getRandomMessage = () => {
    const messages = [
      "🚣 Let's keep our waterways clean! 🌊",
      "Paddle on! Every adventure helps protect nature! 🚣",
      "Thanks for caring about our environment! 💚",
      "Conservation is cool! Keep Austin waters beautiful! ✨",
      "Keep paddling! You're helping protect our habitat! 🌿"
    ];
    return messages[clickCount % messages.length];
  };

  return (
    <div className="fixed bottom-0 right-2 md:right-4 z-40 pointer-events-none h-screen w-20">
      {/* Motion streaks when jumping */}
      {showStreaks && (
        <div 
          className="absolute right-2 pointer-events-none"
          style={{ bottom: `${position + 10}%` }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 bg-sunshine opacity-60 animate-fade-out"
              style={{
                height: '15px',
                right: `${10 + i * 5}px`,
                top: `${i * 4}px`,
                animationDelay: `${i * 50}ms`,
                animationDuration: '300ms'
              }}
            />
          ))}
        </div>
      )}

      {/* Speech bubble that appears after clicking - stays visible permanently */}
      {clickCount > 0 && (
        <div 
          className="absolute right-0 bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg border-2 border-sunshine mb-3 max-w-[140px] md:max-w-[180px] z-50 pointer-events-none"
          style={{ bottom: `${position + 15}%` }}
        >
          <p className="text-forest text-xs md:text-sm font-medium leading-tight">{getRandomMessage()}</p>
          <div className="absolute bottom-0 right-3 md:right-4 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-white/95 transform translate-y-full"></div>
        </div>
      )}
      
      {/* Interactive Paddle Emoji - Made bigger and more responsive */}
      <div 
        onClick={handlePaddleClick}
        className={`absolute right-0 cursor-pointer transition-all duration-200 hover:scale-110 pointer-events-auto text-6xl md:text-7xl select-none ${
          isJumping ? 'animate-pulse' : ''
        }`}
        style={{ bottom: `${position}%` }}
        title="Click me to paddle! 🚣"
      >
        🚣
      </div>
      
      {/* Environmental tip counter */}
      {clickCount >= 3 && (
        <div 
          className="absolute right-0 bg-coral text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold animate-pulse pointer-events-none"
          style={{ bottom: `${position + 12}%`, transform: 'translateX(8px)' }}
        >
          {clickCount}
        </div>
      )}
    </div>
  );
};

export default InteractivePaddles;
