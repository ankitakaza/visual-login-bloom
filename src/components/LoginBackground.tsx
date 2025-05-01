
import React from 'react';

const LoginBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden animated-background">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-400 opacity-10 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-indigo-400 opacity-5 blur-2xl" />
      <div className="absolute top-2/3 left-1/4 w-64 h-64 rounded-full bg-pink-400 opacity-10 blur-3xl" />
      
      {/* Wave patterns */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-20">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#8B5CF6" 
            fillOpacity="0.5"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-48 opacity-30">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#4F46E5" 
            fillOpacity="0.3"
            d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,165.3C672,149,768,107,864,90.7C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(#3333 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
    </div>
  );
};

export default LoginBackground;
