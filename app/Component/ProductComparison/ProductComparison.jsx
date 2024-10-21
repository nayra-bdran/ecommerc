"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

function ProductComparison() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <a href="#" className="text-lg font-semibold text-gray-600 hover:text-gray-800">
            Go to Product page for more Products
          </a>
          <button className="ml-2 text-blue-600 hover:underline">View More</button>
        </div>

        {/* Dropdown Button */}
        <div className="relative">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded flex items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Add A Product
            <span className="ml-2">&#9660;</span> {/* Dropdown icon */}
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              >
                Choose a Product
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First Product Card */}
        <div className="bg-white rounded-lg shadow p-4">
          <Image
            src={assets.Rectangle10}
            alt="Asgaard Sofa"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800">Asgaard Sofa</h3>
            <p className="text-lg text-gray-700">Rs. 250,000.00</p>
            <div className="flex items-center mt-2">
              <div className="flex items-center text-yellow-500">
                <span className="text-sm font-semibold">4.7</span>
                <span className="ml-1">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
              <span className="ml-2 text-gray-600 text-sm">204 Reviews</span>
            </div>
          </div>
        </div>

        {/* Second Product Card */}
        <div className="bg-white rounded-lg shadow p-4">
          <Image
            src={assets.Rectangle10}
            alt="Outdoor Sofa Set"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800">Outdoor Sofa Set</h3>
            <p className="text-lg text-gray-700">Rs. 224,000.00</p>
            <div className="flex items-center mt-2">
              <div className="flex items-center text-yellow-500">
                <span className="text-sm font-semibold">4.2</span>
                <span className="ml-1">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
              <span className="ml-2 text-gray-600 text-sm">145 Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComparison;
