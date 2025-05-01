
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-6 bg-gray-50 border-t mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo className="mb-2" />
            <p className="text-sm text-gray-600">Connecting campus communities since 2023</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Resources</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Guides</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Legal</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Cookies</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Follow Us</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Instagram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Facebook</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Contact</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Feedback</a></li>
                <li><a href="#" className="text-gray-600 hover:text-university-blue">Partners</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} University Buzz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
