import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ProductsContext from './context/productsContext';
import PageContext from './context/pageContext';
import LoadingContext from './context/loadingContext';

function App() {

  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState([1, ""]);

  const loadingData = {
    loading,
    setLoading
  }

  const pageData = {
    page,
    setPage
  }

  const productsData = {
    productsList,
    setProductsList
  }

  return (
    <>
    <Header />
    <LoadingContext.Provider value={loadingData}>
      <PageContext.Provider value={pageData}>
        <ProductsContext.Provider value={productsData}>
          <Main />
        </ProductsContext.Provider>
      </PageContext.Provider>
    </LoadingContext.Provider>
    <Footer />
    </>
  );
}

export default App;
