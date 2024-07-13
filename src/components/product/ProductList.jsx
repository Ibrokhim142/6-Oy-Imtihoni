import React, { useContext } from 'react';
import { ProductContext } from './context/ProductContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
