import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DescriptionParagraph from './DescriptionParagraph'
import LoadingContext from "../../../context/loadingContext";
import { ThreeDots } from "react-loader-spinner";

const ProductDetails = () => {

  const { title } = useParams()

  const [productDetails, setProductDetails] = useState({})
  const [description, setDescription] = useState([])
  const { loading, setLoading } = useContext(LoadingContext)

  useEffect(() => {
    searchProduct()
  }, [])
  
  useEffect(() => {
    if(productDetails.description) {
      const prevDescription = productDetails.description
      const newDescription = prevDescription.split("\n");
      setDescription(newDescription)
    }
    
  }, [productDetails])

  const playSound = () => {
    let beat = new Audio('/sounds/aaahhh.mp3');
    beat.volume = 0.2;
    beat.play()
  }

  const searchProduct = async () => {
    setLoading(true)
    const product = await axios.get(`/api/products?page=1&title=${title}&sorttype=title&sort=asc`)
    setProductDetails(product.data[0])
    setLoading(false)
  }


  return <section className="product-details-container">

    {loading ? <article className="loader">
    <ThreeDots height="80" width="100%" radius="9" color="#3B3B3B" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
    </article> : <></>}

    {productDetails.title ? <>

      <img src={productDetails.image} alt="product-img" />
      <article className="details-container">
          <h2>{productDetails.title}</h2>
          <p>{productDetails.price.toFixed(2)}€</p>
          <img src={`assets/relevance-${productDetails.relevance}.png`} alt="" />

        <article className="provider-container">
          <h2>Información sobre el fabricante:</h2>
          <p>Empresa: {productDetails.provider.name}</p>
          <p>CIF: {productDetails.provider.CIF}</p>
          <p>Dirección: {productDetails.provider.address}</p>
        </article>

        <article className="description-container">
          <h2>Descripción del producto:</h2>
          {description.length ? description.map((text, i) => <DescriptionParagraph key={i} paragraph={text} />) : <></>}
        </article>
      </article>

      <button onClick={playSound}>Comprar</button>

    </> : <></>}
  </section>;
};

export default ProductDetails;
