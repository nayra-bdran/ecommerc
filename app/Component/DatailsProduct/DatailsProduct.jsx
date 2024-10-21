export default function ProductDetails() {
    return (
      <div className="container mx-auto p-6">
        {/* Product Detail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-4">General</h3>
            <ul>
              <li className="text-gray-700 mb-2">Item Number: 123456</li>
              <li className="text-gray-700 mb-2">Manufacturer: Manufacturer Name</li>
              <li className="text-gray-700 mb-2">Material: Wood & Fabric</li>
              <li className="text-gray-700 mb-2">Color: Beige & Blue</li>
            </ul>
  
            <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-4">Product</h3>
            <ul>
              <li className="text-gray-700 mb-2">Cushion Included: Yes</li>
              <li className="text-gray-700 mb-2">Material: Polyester</li>
              <li className="text-gray-700 mb-2">Origin: Imported</li>
            </ul>
  
            <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-4">Dimensions</h3>
            <ul>
              <li className="text-gray-700 mb-2">Width: 60 inches</li>
              <li className="text-gray-700 mb-2">Height: 40 inches</li>
              <li className="text-gray-700 mb-2">Depth: 45 inches</li>
            </ul>
          </div>
  
          {/* Second Column */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-4">Specifications</h3>
            <ul>
              <li className="text-gray-700 mb-2">Weight Capacity: 250lbs</li>
              <li className="text-gray-700 mb-2">Assembly Required: Yes</li>
              <li className="text-gray-700 mb-2">Weight: 80lbs</li>
            </ul>
  
            <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-4">Warranty</h3>
            <ul>
              <li className="text-gray-700 mb-2">Warranty Summary: 1 year manufacturer warranty</li>
              <li className="text-gray-700 mb-2">Warranty Type: Domestic Warranty</li>
            </ul>
          </div>
  
          {/* Third Column */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-4">Care Instructions</h3>
            <ul>
              <li className="text-gray-700 mb-2">Clean with a dry cloth</li>
              <li className="text-gray-700 mb-2">Avoid using harsh chemicals</li>
            </ul>
  
            {/* Buttons */}
            <div className="mt-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full mb-4">
                Add to Cart
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  