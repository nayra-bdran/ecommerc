import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoMdShare } from "react-icons/io";

const products = [
  {
    id: "1",
    name: "Syltherine",
    description: "Stylish cafe chair",
    newPrice: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "30%",
    image: assets.image,
  },
  {
    id: "2",
    name: "Leviosa",
    description: "Stylish cafe chair",
    newPrice: "Rp 2.500.000",
    oldPrice: null,
    discount: null,
    image: assets.imagess,
  },
  {
    id: "3",
    name: "Lolito",
    description: "Luxury big sofa",
    newPrice: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    image: assets.image1,
  },
  {
    id: "4",
    name: "Respira",
    description: "Outdoor bar table and stool",
    newPrice: "Rp 500.000",
    oldPrice: null,
    discount: null,
    image: assets.images,
    isNew: true,
  },
  {
    id: "5",
    name: "Grifo",
    description: "Night lamp",
    newPrice: "Rp 1.500.000",
    oldPrice: null,
    discount: null,
    image: assets.image3,
  },
  {
    id: "6",
    name: "Muggo",
    description: "Small mug",
    newPrice: "Rp 150.000",
    oldPrice: null,
    discount: null,
    image: assets.image6,
    isNew: true,
  },
  {
    id: "7",
    name: "Pingky",
    description: "Cute bed set",
    newPrice: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    image: assets.image7,
  },
  {
    id: "8",
    name: "Potty",
    description: "Minimalist flower pot",
    newPrice: "Rp 500.000",
    oldPrice: null,
    discount: null,
    image: assets.image2,
    isNew: true,
  },
];

function Products() {
  return (
  <div>
      <div className="mt-8 px-12 max-w-full" >
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {products.map((product, id) => (
                 <Link key={id} href={`/shop/${id}`}

            className="relative rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-[#F4F5F7]"
          >
            <div className="relative w-full  h-60">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="bg-contain "
              />

              {product.discount && (
                <span className="absolute top-3 right-4 w-10 h-10 bg-[#E97171] flex justify-center items-center text-white text-xs px-2 py-1 rounded-full">
                  -{product.discount}
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-3 right-4 w-10 h-10 flex justify-center items-center bg-[#2EC1AC] text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
              )}
            </div>

            <div className="p-4 ">
              <h2 className="font-bold text-lg text-[#3A3A3A]">
                {product.name}
              </h2>
              <p className="text-gray-500">{product.description}</p>

              <p className="text-lg font-semibold text-black ">
                {product.newPrice}
              </p>

              {product.oldPrice && (
                <p className="text-sm line-through text-gray-400">
                  {product.oldPrice}
                </p>
              )}
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 rounded-lg flex flex-col justify-center items-center text-white transition-opacity duration-300">
              <button className="bg-[#ffffff] text-[#B88E2F] px-6 py-2 rounded-md mb-2">
                Add to cart
              </button>
              <div className="flex space-x-4 mt-4">
                <div className="icon">
                  <span>Share</span>
                  <IoMdShare />
                </div>
                <div className="icon">
                  <span>Compare</span>
                  <MdOutlineCompareArrows />
                </div>

                <div className="icon">
                  <span>Like</span>
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
     
    </div>
     <div className="flex justify-center mt-6">
     <Link href="/">
       <div className="text-center font-semibold border border-[#B88E2F] text-[#B88E2F] p-3 w-[220px]">
         Show More
       </div>
     </Link>
   </div>
  </div>
  );
}

export default Products;
