
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

  const handlePaddlesClick = () => {
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
      "Quack! Let's keep our waterways clean! 🌊",
      "Paddle on! Every adventure helps protect nature! 🦆",
      "Thanks for caring about our environment! 💚",
      "Conservation is cool! Keep Austin waters beautiful! ✨",
      "Quack quack! You're helping protect our habitat! 🌿"
    ];
    return messages[clickCount % messages.length];
  };

  return (
    <div className="fixed bottom-0 right-4 z-50 pointer-events-none h-screen w-16">
      {/* Motion streaks when jumping */}
      {showStreaks && (
        <div 
          className="absolute right-2 pointer-events-none"
          style={{ bottom: `${position + 5}%` }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 bg-sunshine opacity-60 animate-fade-out"
              style={{
                height: '12px',
                right: `${8 + i * 4}px`,
                top: `${i * 3}px`,
                animationDelay: `${i * 50}ms`,
                animationDuration: '300ms'
              }}
            />
          ))}
        </div>
      )}

      {/* Speech bubble that appears after clicking */}
      {clickCount > 0 && (
        <div 
          className="absolute right-0 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border-2 border-sunshine mb-2 max-w-[160px] animate-fade-in"
          style={{ bottom: `${position + 12}%` }}
        >
          <p className="text-forest text-xs font-medium">{getRandomMessage()}</p>
          <div className="absolute bottom-0 right-4 w-0 h-0 border-l-3 border-r-3 border-t-3 border-l-transparent border-r-transparent border-t-white/95 transform translate-y-full"></div>
        </div>
      )}
      
      {/* Interactive Paddles with straight movement */}
      <div 
        onClick={handlePaddlesClick}
        className={`absolute right-0 cursor-pointer transition-all duration-200 hover:scale-110 pointer-events-auto ${
          isJumping ? 'animate-pulse' : ''
        }`}
        style={{ bottom: `${position}%` }}
        title="Click me to fly! 🦆"
      >
        <img 
          src="/lovable-uploads/570f20a8-66f4-4062-bdd0-e6d298e7333c.png"
          alt="Paddles the Duck - Click to fly!"
          className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }}
        />
      </div>
      
      {/* Environmental tip counter */}
      {clickCount >= 3 && (
        <div 
          className="absolute right-0 bg-coral text-white rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs font-bold animate-pulse pointer-events-none"
          style={{ bottom: `${position + 8}%`, transform: 'translateX(6px)' }}
        >
          {clickCount}
        </div>
      )}
    </div>
  );
};

export default InteractivePaddles;
