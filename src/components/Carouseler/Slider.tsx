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
      className="App"
      style={{
        justifyContent: "center",
        marginTop: "20px",
        backgroundImage: "/Main.png",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
