import React from "react";
import Home from "../Component/Home/Home";
import TheRange from "../Component/TheRange/TheRange";
import Products from "../Component/Products/Products";
import NextSlider from "../Component/NextSlider/NextSlider";
import FurnitureGallery from "../Component/FurnitureGallery/FurnitureGallery";

function Hero() {
  return (
    <div>
      <Home />
      <TheRange />
      <Products />
      <NextSlider />
      <FurnitureGallery />
    </div>
  );
}

export default Hero;
