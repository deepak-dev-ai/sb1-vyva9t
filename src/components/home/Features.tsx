import React from 'react';
import { Heart, PawPrint, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Loving Care',
    description: 'Our pets receive the best care and attention while waiting for their forever homes.'
  },
  {
    icon: PawPrint,
    title: 'Perfect Match',
    description: 'We help you find the perfect pet that matches your lifestyle and preferences.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock veterinary care and support for all our adopted pets.'
  },
  {
    icon: Shield,
    title: 'Safe Process',
    description: 'Thorough screening process to ensure safe and responsible adoptions.'
  }
];

export function Features() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Pet Pulse?</h2>
          <p className="mt-4 text-xl text-gray-600">
            We're committed to making pet adoption a wonderful experience
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <feature.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}