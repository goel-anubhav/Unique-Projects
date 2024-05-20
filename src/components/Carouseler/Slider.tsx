import React, { forwardRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import "./Slider.css";

const Slider = forwardRef((props, ref) => {
  const product = productData.map((item, index) => (
    <div key={index} className="Product">
      <Product
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
    </div>
  ));

  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "60px", // Adjust to create space for the navbar
        position: "relative",
        zIndex: "0", // Set a lower z-index for the slider
      }}
      ref={ref}
    >
      <h1
        style={{
          textAlign: "center",
          background: "linear-gradient(to right, #FFAA80, #FF0080)",
          color: "white",
          paddingTop: "12px",
          paddingBottom: "15px",
          borderRadius: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px", // Add margin bottom to create space for the slider
        }}
      >
        Mini Project Catalogue
      </h1>
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
});

export default Slider;
