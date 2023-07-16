import React, {useContext} from "react";
import Search from "../Search";
import ProductsList from "../ProductsList";
import PageContext from "../../../context/pageContext";
import ProductsContext from "../../../context/productsContext";

const Home = () => {

  const { productsList, setProductsList } = useContext(ProductsContext)
  const { page, setPage } = useContext(PageContext)

  return <>
    <Search setPage={setPage} setProducts={setProductsList} />
    <ProductsList page={page} setPage={setPage} setProducts={setProductsList} productsList={productsList} />
  </>
};

export default Home;
