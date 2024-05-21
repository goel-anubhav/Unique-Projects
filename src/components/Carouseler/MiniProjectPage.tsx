import React, { useEffect } from "react";
import Product from "./Product";
import { productData } from "./data";
import styled from "styled-components";
import NavBar from "../Navbar";
import Footer from "../Footer";

const ProductPageContainer = styled.div`
  padding-top: 10px; /* Adjust top padding to create space below navbar */
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
`;

const ProductGridItem = styled.div`
  flex: 0 0 calc(300px - 20px); /* Adjust width of each card */
`;

const ProductCard = styled.div`
  max-width: 100%;
  max-height: 100%;
  min-width: 300px; /* Ensure minimum width for each card */
  min-height: 400px; /* Ensure minimum height for each card */
`;

const ProductPage = () => {
  // Function to limit the length of the product description
  const limitDescriptionLength = (description, maxLength) => {
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

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          }}>
          Mini Project Catalogue
        </h1>
        <ProductGrid>
          {productData.map((product) => (
            <ProductGridItem key={product.id}>
              <ProductCard>
                <Product
                  name={limitTitleLength(product.name, 20)}
                  url={product.imageurl}
                  price={product.price}
                  description={limitDescriptionLength(
                    product.description,
                    100
                  )} // Limit description length to 100 characters
                />
              </ProductCard>
            </ProductGridItem>
          ))}
        </ProductGrid>
      </ProductPageContainer>
      <Footer />
    </>
  );
};

export default ProductPage;
