import React from 'react';
import HeadlineProduct from 'components/products/headline';
import ProductDisplay from 'components/products/product-display';
import ProductOverview from 'components/products/product-overview';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <HeadlineProduct />
      <hr />
      <div className='m-10'>
        <ProductDisplay />
      </div>
      <hr />
      <ProductOverview />
    </div>
  );
};

export default ProductsPage;