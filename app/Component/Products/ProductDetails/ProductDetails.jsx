"use client"
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="container mx-auto py-8">
      {/* Tabs for navigation */}
      <div className="flex justify-start border-b mb-4">
        <button
          className={`px-4 py-2 text-lg ${
            activeTab === "description"
              ? "border-b-2 border-black font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 text-lg ${
            activeTab === "additional"
              ? "border-b-2 border-black font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("additional")}
        >
          Additional Information
        </button>
        <button
          className={`px-4 py-2 text-lg ${
            activeTab === "reviews"
              ? "border-b-2 border-black font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews [5]
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "description" && (
        <div className="text-gray-700 mb-8">
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="mt-4">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
          </p>
        </div>
      )}

      {activeTab === "additional" && (
        <div className="text-gray-700 mb-8">
          <p>
            This product is made of high-quality materials and comes with a 2-year warranty. It's suitable for both indoor and outdoor use.
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="text-gray-700 mb-8">
          <p>Customer reviews will be displayed here. Currently, 5 reviews are available.</p>
        </div>
      )}

      {/* Product images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#F9F1E7] p-4 rounded-lg">
          <Image src={assets.Cloudsofa1} alt="Sofa 1" className="rounded-lg" />
        </div>
        <div className="bg-[#F9F1E7] p-4 rounded-lg">
          <Image src={assets.Cloudsofa2} alt="Sofa 2" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
