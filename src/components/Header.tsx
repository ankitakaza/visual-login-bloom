
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-university-blue transition-colors">
            Home
          </a>
          <a href="/clubs" className="text-gray-700 hover:text-university-blue transition-colors">
            Clubs
          </a>
          <a href="/events" className="text-gray-700 hover:text-university-blue transition-colors">
            Events
          </a>
          <a href="/resources" className="text-gray-700 hover:text-university-blue transition-colors">
            Resources
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <div className="flex items-center space-x-2">
            <a href="/signup" className="text-university-purple hover:text-university-blue transition-colors">
              Signup
            </a>
            <span className="text-gray-300">|</span>
            <a href="/login" className="text-university-purple hover:text-university-blue transition-colors font-medium">
              Login
            </a>
          </div>
          
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
