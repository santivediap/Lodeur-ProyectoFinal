import React, { useState, useEffect, useContext } from "react";
import Product from "./Product";
import axios from "axios";
import LoadingContext from '../../../context/loadingContext'

const ProductsList = ({ productsList, page, setPage, setProducts }) => {

  const [followingProducts, setFollowingProducts] = useState([])
  const [newProducts, setNewProducts] = useState([])

  const { loading, setLoading } = useContext(LoadingContext)

  const searchFollowingProducts = async () => {
    const nextPageUrl = page[1].replace(`page=${page[0]}`, `page=${page[0]+1}`)
    const products = await axios.get(nextPageUrl)
    setFollowingProducts(products.data)
    setLoading(false)
  }

  useEffect(() => {
    if(page[1].length) {
      searchFollowingProducts()
    }
  }, [])

  useEffect(() => {
    setProducts(newProducts)
    searchFollowingProducts()
  }, [newProducts])

  const changeToNextPage = async () => {
    const nextPageUrl = page[1].replace(`page=${page[0]}`, `page=${page[0]+1}`)
    setPage([page[0] + 1, nextPageUrl])
    
    setLoading(true)
    const newProductsList = await axios.get(nextPageUrl)
    setNewProducts(newProductsList.data)
  }

  const changeToPreviousPage = async () => {
    const previousPageUrl = page[1].replace(`page=${page[0]}`, `page=${page[0]-1}`)
    setPage([page[0] - 1, previousPageUrl])
    
    setLoading(true)
    const newProductsList = await axios.get(previousPageUrl)
    setNewProducts(newProductsList.data)
  }

  return <>
  {loading ? <></> : productsList.error ? <section className="error-container">
    <h2>¡No se encontraron productos!</h2>
    <p>Prueba a buscar otra cosa</p>
    <img src="assets/error-face.png" alt="error-img" />
  </section> : <></>}
  
  {loading ? <></> : productsList.length ? <>
    <section className="page-container">
      <p>Resultados de la página {page[0]}</p>
    </section>
    <section className="products-list-container">
      {productsList.map((product, i) => <Product key={i} title={product.title} image={product.image} price={product.price} relevance={product.relevance} />)}
    </section>
    <section className="pagination">
      {page[0] - 1 > 0 ? <button className="pagination-button" onClick={changeToPreviousPage} >Anterior</button> : <></>}
      {followingProducts.length ? <button className="pagination-button" onClick={changeToNextPage}>Siguiente</button> : <></>}
    </section>
  </> : <></>}
  </>
};

export default ProductsList;
