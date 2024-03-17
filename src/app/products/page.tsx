import React from 'react';
import Products from '../../components/Products';
import Layout from '../layout';

const ProductsPage: React.FC = () => {
  return (
    <Layout showFooter={false}>
      <div>
        <main>
            <Products />
            {/* Add additional services page content here */}
        </main>
      </div>
    </Layout>
  );
};

export default ProductsPage;
