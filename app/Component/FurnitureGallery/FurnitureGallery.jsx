"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";

function FurnitureGallery() {
  return (
    <div className="mt-10 sm:p-0 p-6">
      <div className="text-center mb-8">
        <h1 className="text-lg sm:text-xl text-[#616161] font-semibold">
          Share your setup with
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#3A3A3A]">
          #FuniroFurniture
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-4 place-items-center">
        {/* Left Grid Section */}
        <div className="col-span-4 grid grid-rows-2 justify-center gap-4">
          <div className="relative w-full h-[150px] sm:h-[250px] flex flex-row gap-3">
            <Image
              src={assets.Rectangle9}
              alt="Room setup 9"
              className="rounded-sm bg-cover w-[60px] sm:w-[80px] h-[200px] sm:h-[300px] object-cover"
            />
            <Image
              src={assets.Rectangle6}
              alt="Room setup 6"
              className="relative top-8 sm:top-14 rounded-sm bg-cover w-[250px] sm:w-[400px] h-[200px] sm:h-[245px] object-cover"
            />
          </div>

          <div className="relative w-full h-[200px] sm:h-[300px] flex flex-row gap-4">
            <Image
              src={assets.Rectangle5}
              alt="Room setup 5"
              className="rounded-sm object-cover h-[200px] sm:h-[320px] mt-7 w-full sm:mt-0"
            />
            <Image
              src={assets.Rectangle7}
              alt="Room setup 7"
              className="rounded-sm object-cover w-[120px] sm:w-[240px] h-[160px] sm:h-[170px] mt-8 sm:mt-0"
            />
          </div>
        </div>

        {/* Center Image Section */}
        <div className="col-span-3 hidden xl:flex">
          <div className="relative top-1/4 sm:top-[20%] h-[250px] sm:h-[500px] flex justify-center items-center">
            <Image
              src={assets.Rectangle4}
              alt="Room setup 4"
              className="rounded-sm object-cover h-[250px] sm:h-[390px] w-full"
            />
          </div>
        </div>

        {/* Right Grid Section */}
        <div className="sm:col-span-4 col-span-1 grid grid-rows-2 gap-4 mt-0 md:mt-8">
          <div className="relative w-full h-[200px] sm:h-[250px] flex gap-4">
            <Image
              src={assets.Rectangle3}
              alt="Room setup 3"
              className="rounded-sm object-cover mt-12 h-[253px] sm:h-[350px] w-[200px] sm:w-[290px]"
            />
            <Image
              src={assets.Rectangle8}
              alt="Room setup 8"
              className="rounded-sm object-cover sm:mt-0 mt-6 mr-4 sm:mr-0 w-[150px] sm:w-[300px] h-[280px] sm:h-[400px]"
            />
          </div>

          <div className="relative top-12 w-full h-[200px] sm:h-[300px] flex gap-4 mt-[26px]">
            <Image
              src={assets.Rectangle0}
              alt="Room setup 0"
              className="rounded-sm object-cover w-[200px] h-[250px]"
            />
            <Image
              src={assets.Rectangle}
              alt="Room setup 1"
              className="relative rounded-sm object-contain w-[150px] sm:w-[250px] h-[120px] sm:h-[190px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FurnitureGallery;
