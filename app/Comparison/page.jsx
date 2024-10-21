// pages/CartPage.jsx
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import ProductComparison from "../Component/ProductComparison/ProductComparison";
import DatailsProduct from "../Component/DatailsProduct/DatailsProduct";
import FeaturesSection from "../Component/FeaturesSection/FeaturesSection";
import PageBanner from "../Component/PageBanner/PageBanner";

export default function page() {
  return (
    <div className="relative">
  <PageBanner/>
      <ProductComparison/>
      <DatailsProduct/>
      <FeaturesSection />

    </div>
  
  );
}
