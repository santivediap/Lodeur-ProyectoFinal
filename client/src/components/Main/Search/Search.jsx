import React, { useState, useContext, useEffect } from "react";
import axios from 'axios'
import { ThreeDots } from  'react-loader-spinner'
import LoadingContext from "../../../context/loadingContext";

const Search = ({ setProducts, setPage }) => {

  const [productInput, setProductInput] = useState("")
  const [providerInput, setProviderInput] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const { loading, setLoading } = useContext(LoadingContext)

  useEffect(() => {
    searchProducts({page: 1})
  }, [])

  const changeProductInput = (e) => {
    setProductInput(e.target.value)
  }

  const changeProviderInput = (e) => {
    setProviderInput(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault()

    if(/[a-zA-Z0-9\s]+/gm.test(productInput) || /[a-zA-Z0-9\s]+/gm.test(providerInput)) {
      if(productInput.length && providerInput.length) {
        searchProducts({
          product: productInput,
          provider: providerInput,
          sortType: e.target.sorttype.value,
          sort: e.target.sort.value,
          page: 1
        })
      } else {
        if(productInput.length) {
          searchProducts({
            product: productInput,
            sortType: e.target.sorttype.value,
            sort: e.target.sort.value,
            page: 1
          })
        }

        if(providerInput.length) {
          searchProducts({
            provider: providerInput,
            sortType: e.target.sorttype.value,
            sort: e.target.sort.value,
            page: 1
          })
        }
      }
    } else {
      newError("¡Debes introducir algo!")
    }
  }

  // Generates custom error message below search input
  const newError = (errMessage) => {
    setErrorMessage(errMessage)

    setTimeout(() => {
      setErrorMessage("")
    }, 3000);
  }

  const searchProducts = async (searchParams) => {
    const { product, provider, sortType, sort, page } = searchParams

    if(provider && product) {
      setLoading(true)
      const products = await axios.get(`/api/products?page=1&title=${product}&provider=${provider}&sorttype=${sortType}&sort=${sort}`)
      setPage([page, `/api/products?page=1&title=${product}&provider=${provider}&sorttype=${sortType}&sort=${sort}`])
      setLoading(false)
      setProducts(products.data)
    } else {
      if(provider) {
        setLoading(true)
        const products = await axios.get(`/api/products?page=1&provider=${provider}&sorttype=${sortType}&sort=${sort}`)
        setPage([page, `/api/products?page=1&provider=${provider}&sorttype=${sortType}&sort=${sort}`])
        setLoading(false)
        setProducts(products.data)
      } else if(product) {
        setLoading(true)
        const products = await axios.get(`/api/products?page=1&title=${product}&sorttype=${sortType}&sort=${sort}`)
        setPage([page, `/api/products?page=1&title=${product}&sorttype=${sortType}&sort=${sort}`])
        setLoading(false)
        setProducts(products.data)
      } else {
        setLoading(true)
        const products = await axios.get(`/api/products?page=1`)
        setPage([page, `/api/products?page=1`])
        setLoading(false)
        setProducts(products.data)
      }
    }
  }

  return <>
    <section className="search-container">
      <h2>¡BUSCA TU PRODUCTO YA!</h2>

      <form onSubmit={submitSearch} className="search-form" action="#">

        <label>
          <span>Producto</span>
          <input onChange={changeProductInput} type="text" name="product" id="product" />
        </label>

        <label>
          <span>Fabricante</span>
          <input onChange={changeProviderInput} type="text" name="provider" id="provider" />
        </label>

        <label>
          <span>Filtrar por</span>
          <select name="sorttype" id="sorttype">
            <option value="title">Titulo</option>
            <option value="price">Precio</option>
            <option value="relevance">Relevancia</option>
          </select>
        </label>

        <label>
          <span>Ordenar de</span>
          <select name="sort" id="sort">
            <option value="desc">Mayor a menor</option>
            <option value="asc">Menor a mayor</option>
          </select>
        </label>

        <button type="submit">BUSCAR</button>

        {errorMessage.length ? <p className="error-message">{errorMessage}</p> : <p className="hide"></p>}

      </form>
    </section>

    {loading ? <article className="loader">
    <ThreeDots height="80" width="100%" radius="9" color="#3B3B3B" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
    </article> : <></>}
  </>
};

export default Search;
