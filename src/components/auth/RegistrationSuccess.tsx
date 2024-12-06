import React from 'react';
import { Check, Calendar, FileText } from 'lucide-react';

interface RegistrationSuccessProps {
  onClose: () => void;
}

export function RegistrationSuccess({ onClose }: RegistrationSuccessProps) {
  return (
    <div className="text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <Check className="h-6 w-6 text-green-600" />
      </div>
      
      <h2 className="mt-4 text-2xl font-bold text-gray-900">Registration Successful!</h2>
      <p className="mt-2 text-gray-600">
        Thank you for taking the first step towards adoption.
      </p>

      <div className="mt-6 space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-purple-600 mr-3" />
            <div className="text-left">
              <h3 className="font-medium text-purple-900">Next Steps</h3>
              <p className="text-sm text-purple-700">
                We'll contact you within 24 hours to schedule a meet and greet.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-purple-600 mr-3" />
            <div className="text-left">
              <h3 className="font-medium text-purple-900">Documentation</h3>
              <p className="text-sm text-purple-700">
                Please prepare identification and proof of residence for your visit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={onClose}
          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Continue Browsing
        </button>
      </div>
    </div>
  );
}