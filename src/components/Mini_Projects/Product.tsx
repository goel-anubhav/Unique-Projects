// ProductPage.js
import React from "react";

const ProductPage = ({ product }) => {
  return (
    <div>
      {/* Product image */}
      <img src={product.imageUrl} alt={product.name} />

      {/* Product name */}
      <h2>{product.name}</h2>

      {/* Product description */}
      <p>{product.description}</p>

      {/* Payment gateway link */}
      <a href={product.paymentLink}>Buy Now</a>
    </div>
  );
};

export default ProductPage;
