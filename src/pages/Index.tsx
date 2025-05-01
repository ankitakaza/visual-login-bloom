
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginBackground from '@/components/LoginBackground';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <LoginBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-16 flex flex-col justify-center items-center min-h-[80vh]">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-university-purple fade-in-element">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-university-purple to-university-blue">
                University Buzz
              </span>
            </h1>
            <p className="text-xl text-center text-gray-700 mb-8 max-w-md fade-in-delay-1">
              Connect with your campus community and access all your university resources in one place
            </p>
            <LoginForm />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
