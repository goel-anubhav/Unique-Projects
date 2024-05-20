import React, { useRef } from "react";
import Navbar from "./Navbar";
import SliderShow from "./SliderShow";
import Slider from "./Carouseler/Slider";
import MajorSlider from "./Major_Carouseler/MajorSlider";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <SliderShow />
      <section>
        <Slider />
      </section>
      <section id="major-projects">
        <MajorSlider />
      </section>
      <Footer />
    </>
  );
}

export default Homepage;
