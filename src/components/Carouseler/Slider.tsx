import React, { forwardRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import "./Slider.css";

// Function to limit the length of the product description
const limitDescriptionLength = (
  description: string,
  maxLength: number
) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength) + "...";
};

const limitTitleLength = (name, maxLength) => {
  if (name.length <= maxLength) {
    return name;
  }
  return name.substring(0, maxLength) + "...";
};

const Slider = forwardRef((props, ref) => {
  const product = productData.map((item, index) => (
    <div key={index} className="Product">
      <Product
        name={limitTitleLength(item.name, 20)} // Limit title length to 20 characters
        url={item.imageurl}
        price={item.price}
        description={limitDescriptionLength(item.description, 100)} // Limit description length to 100 characters
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
      }}>
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
        }}>
        Mini Project Catalogue
      </h1>
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
});

export default Slider;
