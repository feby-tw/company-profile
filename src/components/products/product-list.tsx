import React from 'react';
import ProductCard from './product-card';
import { products } from './product-details';

const ProductList = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product, index) => (
          <div key={index} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;