"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function ItemProduct() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Sidebar with thumbnails */}
        <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 mb-4 lg:mb-0">
          <Image src={assets.group1} width={100} height={100} className="bg-cover bg-[#F9F1E7] rounded-lg" alt="sofa" />
          <Image src={assets.group2} width={100} height={100} className="bg-cover" alt="sofa" />
          <Image src={assets.group3} width={100} height={100} className="bg-cover" alt="sofa" />
          <Image src={assets.group4} width={100} height={100} className="bg-cover" alt="sofa" />
        </div>

        {/* Main product image */}
        <div className="flex-1 flex justify-center bg-[#F9F1E7] rounded-lg mb-4 lg:mb-0">
          <Image src={assets.Asgaard} width={500} height={400} alt="sofa" className="object-contain" />
        </div>

        {/* Product details */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Asgaard sofa</h1>
          <p className="text-gray-700 text-lg md:text-xl mb-2">Rs. 250,000.00</p>

          {/* Rating and reviews */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center">
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-sm text-gray-600">5 Customer Review</p>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with
            a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size selection */}
          <div className="mb-4">
            <p className="text-gray-800 font-semibold mb-2">Size</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded">L</button>
              <button className="px-4 py-2 border rounded">XL</button>
              <button className="px-4 py-2 border rounded">XS</button>
            </div>
          </div>

          {/* Color selection */}
          <div className="mb-4">
            <p className="text-gray-800 font-semibold mb-2">Color</p>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-yellow-700 rounded-full"></div>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-gray-800 font-semibold mb-2">Quantity</p>
            <div className="flex items-center space-x-2">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="px-4 py-2 border rounded"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="px-6 py-3 bg-black text-white rounded-lg w-full sm:w-auto">Add To Cart</button>
            <button className="px-6 py-3 border rounded-lg w-full sm:w-auto">+ Compare</button>
          </div>

          {/* Additional Info */}
        </div>
      </div>

      {/* Additional Info Below on Smaller Screens */}
      <div className="flex justify-center mt-8">
        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>SKU:</strong> SS001</p>
          <p><strong>Category:</strong> Sofas</p>
          <p><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>

          {/* Share Options */}
          <div className="mt-4">
            <p className="font-semibold">Share</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-black"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-black"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-black"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-black"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
