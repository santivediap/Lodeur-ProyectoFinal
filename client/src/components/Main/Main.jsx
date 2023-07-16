import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import ProductDetails from './ProductDetails'

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:title" element={<ProductDetails />} />
    </Routes>
  </main>;
};

export default Main;
