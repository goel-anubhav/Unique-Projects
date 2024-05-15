// App.js
import "./MajorSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./MajorProduct";
import { productData, responsive } from "./Majordata";
import React from "react";

export default function App() {
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
    <div className="App" style={{ justifyContent: "center" }}>
      <h1
        style={{
          textAlign: "center",
          background: "linear-gradient(to right, #ff416c, #E97451)",
          color: "white",
          paddingTop: "5 px",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}>
        Mini Project Catalogue
      </h1>
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
