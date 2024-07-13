import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ProductContext } from './ProductContext';


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const topRatedProducts = products.filter(product => product.rating >= 4.5);

  return (
    <ProductContext.Provider value={{ products, topRatedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
