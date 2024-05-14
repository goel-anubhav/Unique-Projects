import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Carouseler/Slider";
import MajorSlider from "./Major_Carouseler/MajorSlider";
import SliderShow from "./SliderShow";

function Homepage() {
  return (
    <>
      <Navbar />
      <SliderShow />
      <Slider />
      <MajorSlider />
      <Footer />
    </>
  );
}

export default Homepage;
