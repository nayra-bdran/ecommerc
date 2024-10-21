"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navebar({className=""}) {
  const pathname = usePathname();
  return (
    <div>
      <div className={` gap-9 text-l font-medium ${className}`}>
        <Link href="/" className={pathname === "/" ? "text-[#B88E2F]" : ""}>
          Home
        </Link>
        <Link
          href="/shop"
          className={pathname === "/shop" ? "text-[#B88E2F]" : ""}
        >
          Shop
        </Link>
        <Link
          href="/Blog"
          className={pathname === "/Blog" ? "text-[#B88E2F]" : ""}
        >
          Blog
        </Link>
        <Link
          href="/Contact"
          className={pathname === "/Contact" ? "text-[#B88E2F]" : ""}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navebar;
