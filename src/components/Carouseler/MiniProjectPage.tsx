import React from "react";
import Product from "./Product";
import { productData } from "./data";
import styled from "styled-components";
import NavBar from "../Navbar";
import Footer from "../Footer";

const ProductPageContainer = styled.div`
  padding-top: 10px; /* Adjust top padding to create space below navbar */
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 0 20px;
  justify-content: center;
  padding-left: 53px;
`;

const ProductGridItem = styled.div`
  width: calc(
    100% / 3 - 20px
  ); /* Calculate the width for three columns with gap */
`;

const ProductPage = () => {
  return (
    <>
      <NavBar />
      <ProductPageContainer>
        <h1
          style={{
            textAlign: "center",
            background: "linear-gradient(to right, #FFAA80, #FF0080)",
            color: "white",
            paddingTop: "12px",
            paddingBottom: "15px",
            borderRadius: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "5px", // Add margin bottom to create space for the slider
          }}
        >
          Mini Project Catalogue
        </h1>
        <ProductGrid>
          {productData.map((product) => (
            <ProductGridItem key={product.id}>
              <Product
                name={product.name}
                url={product.imageurl}
                price={product.price}
                description={product.description}
              />
            </ProductGridItem>
          ))}
        </ProductGrid>
      </ProductPageContainer>
      <Footer />
    </>
  );
};

export default ProductPage;
