import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <section className="relative w-full mb-10 ">
      <div className=" ">
        <Image src={assets.home} alt="Room Decor" className="  " />
      </div>

      <div className="  absolute right-4 lg:right-9 top-[55%] lg:top-[57%]  transform lg:-translate-y-1/2 bg-[#FFF3E3] p-6 lg:p-8 rounded-lg w-11/12  md:w-2/3 lg:w-2/5 h-auto shadow-lg">
        <h3 className="text-[#333333] text-sm md:text-md font-semibold mb-2">
          New Arrival
        </h3>
        <div className="w-full">
          <h1 className="text-[#B88E2F] max-w-full text-lg md:text-3xl lg:text-4xl font-bold mb-4">
            Discover Our New Collection
          </h1>
        </div>
        <p className="text-[#333333] mb-4 text-sm font-medium md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
       <Link href="/">
       <button className="bg-[#B88E2F] text-white px-6 lg:px-10 py-3 font-semibold rounded">
          BUY NOW
        </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
