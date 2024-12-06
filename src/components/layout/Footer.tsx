import React from 'react';
import { PawPrint, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <PawPrint className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">Pet Pulse</span>
            </div>
            <p className="mt-4 text-gray-400">
              Making pet adoption simple, safe, and joyful.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/adopt" className="text-gray-400 hover:text-white">Adopt a Pet</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Our Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">info@petpulse.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">123 Pet Street, City</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new pets and adoption events.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg w-full text-gray-900"
              />
              <button className="px-4 py-2 bg-purple-600 rounded-r-lg hover:bg-purple-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pet Pulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}