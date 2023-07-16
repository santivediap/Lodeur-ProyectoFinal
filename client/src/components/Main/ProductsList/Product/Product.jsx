import React from "react";
import { Link } from "react-router-dom";

const Product = ({ title, image, price, relevance }) => {
  return <article className="product-container">
    <img className="product-img" src={image} alt={`${title}-img`} />
    <div className="product-info">
      <Link to={`/${title}?image=${image}&price=${price}&relevance=${relevance}`}>{title}</Link>
      <p>{price.toFixed(2)}€</p>
      <img className="relevance" src={`assets/relevance-${relevance}.png`} alt="relevance-img" />
    </div>
  </article>;
};

export default Product;
