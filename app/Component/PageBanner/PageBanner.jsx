"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function PageBanner({tittel}) {
  const pathname = usePathname();
  return (
    <div className="relative w-full h-96">
      <Image
        src={assets.Rectangle10}
        alt="Shop background"
        className="object-cover w-full h-full"
        layout="fill"
        priority
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          className="absolute top-28"
          src={assets.logo}
          alt={assets.logo}
        />

        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold ">{tittel}</h1>
          <nav className="mt-3 font-semibold">
            <Link
              href="/"
              className={pathname === "/Home" ? "text-[#7a2424]" : ""}
            >
              Home
            </Link>
            {" > "}
            <Link 
            href={`/${tittel}`}
              className={pathname ===`/${tittel}` ? "text-[#a03f3f]" : ""}
            >
              {tittel}
              
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
