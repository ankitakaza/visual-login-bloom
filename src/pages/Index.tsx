
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
          <div className="container mx-auto px-4 py-16 flex justify-center items-center">
            <LoginForm />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
