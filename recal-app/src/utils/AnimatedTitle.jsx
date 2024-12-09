import React from 'react';

const AnimatedTitle = ({ 
  text = "Welcome", 
  delay = 0.1,
  colorDuration = 8, // Duration in seconds for full color cycle
}) => {
  return (
    <div className="overflow-hidden py-8">
      <h1 className="text-4xl font-bold">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block animate-[slideIn_0.5s_ease-out_forwards] opacity-0"
            style={{
              animationDelay: `${index * delay}s`,
              animation: `
                slide-in 0.5s ease-out forwards,
                color-cycle ${colorDuration}s linear infinite
              `,
              animationFillMode: 'forwards, none',
            }}
          >
            {char}
          </span>
        ))}
      </h1>
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes color-cycle {
          0%, 100% {
            color: #3b82f6; /* blue-500 */
          }
          25% {
            color: #10b981; /* emerald-500 */
          }
          50% {
            color: #8b5cf6; /* violet-500 */
          }
          75% {
            color: #ef4444; /* red-500 */
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedTitle;