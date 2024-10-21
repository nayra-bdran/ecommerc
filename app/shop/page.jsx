import React from "react";
import ShopPage from "../Component/ShopPage/ShopPage";
import Products from "../Component/Products/Products";
import FeaturesSection from "../Component/FeaturesSection/FeaturesSection";
function page() {
  return (
    <div>
      <ShopPage />
      <Products />
      <FeaturesSection />
    </div>
  );
}

export default page;
