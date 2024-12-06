import React, { useState } from 'react';
import { X } from 'lucide-react';
import { RegistrationForm } from './RegistrationForm';
import { RegistrationSuccess } from './RegistrationSuccess';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  const handleClose = () => {
    onClose();
    // Reset success state after modal is closed
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-6">
          {isSuccess ? (
            <RegistrationSuccess onClose={handleClose} />
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Register to Adopt</h2>
              <RegistrationForm onSuccess={handleSuccess} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}