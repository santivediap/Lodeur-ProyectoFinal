import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import NotFound from "./NotFound";
import ProductDetails from './ProductDetails'

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:title" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>;
};

export default Main;
