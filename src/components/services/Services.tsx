import React from 'react';
import { 
  Scissors, 
  Bath, 
  Stethoscope, 
  Hotel, 
  Car, 
  GraduationCap,
  Clock,
  Heart
} from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Grooming',
    description: 'Professional grooming services including bathing, trimming, and styling for all breeds.',
    price: 'From $40'
  },
  {
    icon: Bath,
    title: 'Spa & Treatment',
    description: 'Luxury spa treatments, massage, and aromatherapy for pampered pets.',
    price: 'From $35'
  },
  {
    icon: Stethoscope,
    title: 'Veterinary Care',
    description: '24/7 veterinary services with experienced professionals.',
    price: 'Consultation $50'
  },
  {
    icon: Hotel,
    title: 'Boarding',
    description: 'Comfortable and safe boarding facilities for when you are away.',
    price: 'From $30/night'
  },
  {
    icon: Car,
    title: 'Pet Transport',
    description: 'Safe and comfortable transportation services for your pets.',
    price: 'From $25'
  },
  {
    icon: GraduationCap,
    title: 'Training Classes',
    description: 'Professional training sessions for better pet behavior.',
    price: 'From $45/session'
  },
  {
    icon: Clock,
    title: 'Day Care',
    description: 'Supervised day care services with plenty of activities.',
    price: 'From $25/day'
  },
  {
    icon: Heart,
    title: 'Special Care',
    description: 'Specialized care for elderly or special needs pets.',
    price: 'Custom pricing'
  }
];

export function Services() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive care services for your beloved pets
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  <service.icon className="h-6 w-6 text-purple-600" />
                </div>
              </div>

              <div className="pt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <p className="mt-4 text-lg font-medium text-purple-600">{service.price}</p>
                <button className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            All our services are provided by certified professionals with years of experience.
            Contact us for custom packages and special requirements.
          </p>
          <button className="mt-8 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            Contact for Custom Services
          </button>
        </div>
      </div>
    </div>
  );
}