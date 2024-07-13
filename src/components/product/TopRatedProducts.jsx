import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from './ProductCard';

const TopRatedProducts = () => {
  const { topRatedProducts } = useContext(ProductContext);

  return (
    <div className="top-rated-products">
      {topRatedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default TopRatedProducts;
