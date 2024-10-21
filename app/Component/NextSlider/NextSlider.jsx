import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import ItemSlider from "./ItemSlider";
import Link from "next/link";

function NextSlider() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FCF8F3] w-full p-10 mt-14">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[#616161] mb-6">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white px-6 py-3 rounded-md font-semibold w-48">
          Explore More
        </button>
      </div>

      <div className="relative w-full h-[500px]">
        <Image
          src={assets.Rectangle1}
          alt="Room 1"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg "
        />
        <div className="absolute bottom-4 left-0 bg-white bg-opacity-80 opacity-85 p-6 w-48 ml-8 text-center">
          <p className="text-sm font-semibold text-[#616161]">01 — Bed Room</p>
          <h2 className="text-2xl font-bold text-[#3A3A3A] ">Inner Peace</h2>
        
        </div>
       <Link href="">
       <div className="absolute bottom-4 left-56 p-2 bg-[#B88E2F] w-10 h-10">
            <Image className="w-full h-full"  src={assets.Right } alt={assets.Right }/>
          </div>
       </Link>
      </div>
 <ItemSlider/>
    </div>
  );
}

export default NextSlider;
