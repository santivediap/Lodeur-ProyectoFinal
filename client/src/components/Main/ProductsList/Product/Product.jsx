import React from "react";

const Product = ({ title, image, price, relevance }) => {
  return <article className="product-container">
    <img className="product-img" src={image} alt={`${title}-img`} />
    <div className="product-info">
      <h2>{title}</h2>
      <p>{price.toFixed(2)}€</p>
      <img className="relevance" src={`assets/relevance-${relevance}.png`} alt="relevance-img" />
    </div>
  </article>;
};

export default Product;
