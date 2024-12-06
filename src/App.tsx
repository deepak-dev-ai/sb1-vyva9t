import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { PetShowcase } from './components/home/PetShowcase';
import { Services } from './components/services/Services';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'services':
        return <Services />;
      case 'home':
      default:
        return (
          <>
            <Hero onServicesClick={() => setCurrentView('services')} />
            <Features />
            <PetShowcase />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onServicesClick={() => setCurrentView('services')} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;