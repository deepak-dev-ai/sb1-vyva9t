import React from 'react';

const pets = [
  {
    name: 'Luna',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '2 years',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Oliver',
    type: 'Cat',
    breed: 'Persian',
    age: '1 year',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80'
  },
  {
    name: 'Max',
    type: 'Dog',
    breed: 'Husky',
    age: '3 years',
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&q=80'
  }
];

export function PetShowcase() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Pets</h2>
          <p className="mt-4 text-xl text-gray-600">
            These lovely animals are waiting for their forever homes
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <div key={pet.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={pet.image}
                alt={pet.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{pet.name}</h3>
                <div className="mt-2 flex items-center text-gray-600">
                  <span>{pet.type}</span>
                  <span className="mx-2">•</span>
                  <span>{pet.breed}</span>
                  <span className="mx-2">•</span>
                  <span>{pet.age}</span>
                </div>
                <button className="mt-4 w-full px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}