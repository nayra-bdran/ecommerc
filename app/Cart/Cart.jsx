"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useState } from 'react';

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 250000;
  const subtotal = quantity * price;

  // Set locale explicitly to Arabic (ar-EG) or any desired locale to ensure consistency
  const formattedPrice = price.toLocaleString('ar-EG');
  const formattedSubtotal = subtotal.toLocaleString('ar-EG');

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="col-span-1 md:col-span-2">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-xs md:text-sm leading-normal">
                <th className="py-2 md:py-3 px-2 md:px-6 text-left">Product</th>
                <th className="py-2 md:py-3 px-2 md:px-6 text-left">Price</th>
                <th className="py-2 md:py-3 px-2 md:px-6 text-center">Quantity</th>
                <th className="py-2 md:py-3 px-2 md:px-6 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-xs md:text-sm">
              <tr className="border-b">
                <td className="py-2 md:py-3 px-2 md:px-6 text-left flex items-center">
                  <Image
                    src={assets.Rectangle10}
                    alt="Asgaard sofa"
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <span className="ml-2 md:ml-4">Asgaard sofa</span>
                </td>
                <td className="py-2 md:py-3 px-2 md:px-6 text-left">
                  Rs. {formattedPrice}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-6 text-center">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-8 md:w-12 text-center border rounded-md"
                    min="1"
                  />
                </td>
                <td className="py-2 md:py-3 px-2 md:px-6 text-right">
                  Rs. {formattedSubtotal}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-6 text-right">
                  <button className="text-red-500 hover:text-red-600">
                    🗑️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2 md:mb-4">
            <span className="text-gray-600 text-sm md:text-base">Subtotal</span>
            <span className="text-gray-800 text-sm md:text-base">Rs. {formattedSubtotal}</span>
          </div>
          <div className="flex justify-between mb-2 md:mb-4">
            <span className="text-gray-600 text-sm md:text-base">Total</span>
            <span className="text-yellow-500 font-bold text-base md:text-lg">
              Rs. {formattedSubtotal}
            </span>
          </div>
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-2 md:mt-4">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
