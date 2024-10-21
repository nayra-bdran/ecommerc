"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import CartModal from "./CartModal";
import Navebar from "./Navebar";

function Header() {
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row sm:justify-around justify-between items-center p-6">
      <div className="flex items-center ">
        <Image src={assets.logo} alt="Logo" />
        <h1 className="text-3xl font-bold">Furniro</h1>
      </div>

      <Navebar className="hidden md:flex" />

      <div className="flex gap-4 sm:gap-7">
        <Image className="hidden md:flex" src={assets.icon} alt="Icon" />
        <FiSearch size={24} />
        <FaRegHeart size={24} />
        <button onClick={() => setIsCartOpen(true)}>
          <AiOutlineShoppingCart size={24} />
        </button>
        {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
        {/* {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />} */}
      </div>

      <div className="flex md:hidden">
        {isOpen ? (
          <FiX
            size={30}
            onClick={toggleIcon}
            className="transition-transform duration-500 ease-in-out transform rotate-180"
          />
        ) : (
          <FiMenu
            size={30}
            onClick={toggleIcon}
            className="transition-transform duration-500 ease-in-out"
          />
        )}
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white p-5 shadow-lg flex flex-col items-center gap-5 divide-y divide-[#e5e7eb] transform transition-transform duration-300 space-y-4 z-50 md:hidden">
          <div className="flex flex-col gap-9 text-l font-medium">
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
              Blog{" "}
            </Link>
            <Link
              href="/Contact"
              className={pathname === "/Contact" ? "text-[#B88E2F]" : ""}
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-7 py-4">
            <Image src={assets.icon} alt="Icon" />
            <FiSearch size={24} />
            <FaRegHeart size={24} />
            <button onClick={() => setIsCartOpen(true)} className="relative">
              <AiOutlineShoppingCart size={24} />
            </button>
            {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
