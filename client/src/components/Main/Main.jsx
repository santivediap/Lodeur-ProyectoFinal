import React, { useContext } from "react";
import Search from './Search';
import ProductsList from "./ProductsList/ProductsList";
import ProductsContext from '../../context/productsContext'
import PageContext from '../../context/pageContext'

const Main = () => {

  const { productsList, setProductsList } = useContext(ProductsContext)
  const { page, setPage } = useContext(PageContext)

  return <main>
    <Search setPage={setPage} setProducts={setProductsList} />
    <ProductsList page={page} setPage={setPage} setProducts={setProductsList} productsList={productsList} />
  </main>;
};

export default Main;
