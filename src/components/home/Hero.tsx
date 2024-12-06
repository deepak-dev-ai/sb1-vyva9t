import React from 'react';
import { Heart } from 'lucide-react';
import { RegistrationModal } from '../auth/RegistrationModal';
import { useModal } from '../../hooks/useModal';

interface HeroProps {
  onServicesClick: () => void;
}

export function Hero({ onServicesClick }: HeroProps) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <div className="relative bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Find Your Perfect
                <span className="block text-purple-600">Furry Companion</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-lg">
                Give a loving home to pets in need. We connect wonderful animals with 
                caring families through our adoption services.
              </p>
              <div className="mt-8 flex space-x-4">
                <button
                  onClick={open}
                  className="flex items-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Adopt Now
                </button>
                <button 
                  onClick={onServicesClick}
                  className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80"
                alt="Happy dog with owner"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <RegistrationModal isOpen={isOpen} onClose={close} />
    </>
  );
}