
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-university-purple font-bold text-2xl">University</span>
      <span className="text-university-blue font-bold text-2xl">Buzz</span>
    </div>
  );
};

export default Logo;
