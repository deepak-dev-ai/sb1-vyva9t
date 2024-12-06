import React from 'react';
import { Heart, PawPrint, Menu } from 'lucide-react';
import { Link } from './Link';
import { RegistrationModal } from '../auth/RegistrationModal';
import { useModal } from '../../hooks/useModal';

interface HeaderProps {
  onServicesClick: () => void;
}

export function Header({ onServicesClick }: HeaderProps) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <PawPrint className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Pet Pulse</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => window.location.reload()} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Home
              </button>
              <Link href="/adopt">Adopt</Link>
              <button onClick={onServicesClick} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Services
              </button>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={open}
                className="hidden md:flex items-center px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                <Heart className="h-4 w-4 mr-2" />
                Adopt Now
              </button>
              <button className="md:hidden">
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <RegistrationModal isOpen={isOpen} onClose={close} />
    </>
  );
}