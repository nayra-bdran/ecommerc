import Image from "next/image";
import FeaturesSection from "../Component/FeaturesSection/FeaturesSection";
import { assets } from "@/assets/assets";
import Link from "next/link";
import PageBanner from "../Component/PageBanner/PageBanner";

export default function page() {
    return  (
       <div>
     <PageBanner/>
         <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Billing Details Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Last Name"
                  />
                </div>
              </div>
    
              <div>
                <label className="block text-gray-700 mb-2">Company Name (Optional)</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Company Name"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 mb-2">Country / Region</label>
                <select className="w-full p-3 border border-gray-300 rounded-md">
                  <option>Select a country</option>
                  <option>USA</option>
                  <option>United Kingdom</option>
                  <option>Egypt</option>
                </select>
              </div>
    
              <div>
                <label className="block text-gray-700 mb-2">Street Address</label>
                <input
                  type="text"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 mb-2">Town / City</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Town / City"
                />
              </div>
    
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">State / Province</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="State / Province"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Postal Code</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
    
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Phone Number"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Email Address"
                />
              </div>
    
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-700">Create an account?</span>
                </label>
              </div>
            </form>
          </div>
    
          {/* Order Summary Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Your Order</h2>
            <div className="border-b border-gray-300 mb-4"></div>
    
            {/* Product Details */}
            <div className="mb-4">
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-800">Asgaard Sofa</span>
                <span className="text-gray-800">Rs. 250,000.00</span>
              </div>
            </div>
    
            <div className="border-b border-gray-300 mb-4"></div>
    
            {/* Total */}
            <div className="flex justify-between font-bold text-lg">
              <span className="text-gray-800">Total</span>
              <span className="text-yellow-500">Rs. 250,000.00</span>
            </div>
    
            {/* Payment Options */}
            <div className="mt-4">
              <h3 className="font-bold text-md mb-2">Payment Method</h3>
              <label className="flex items-center mb-2">
                <input type="radio" name="payment" className="mr-2" />
                <span className="text-gray-700">Credit Card</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="payment" className="mr-2" />
                <span className="text-gray-700">Direct Bank Transfer</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                <span className="text-gray-700">Cash on Delivery</span>
              </label>
            </div>
    
            {/* Place Order Button */}
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-6">
              Place Order
            </button>
          </div>

        </div>
                  <FeaturesSection />
       </div>

    );
  }
  