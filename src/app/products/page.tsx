'use client'

import React from 'react';
import Layout from '../layout';
import { makeStyles } from '@mui/styles';
import ProductList from '../../components/products/product-list';

const useStyles = makeStyles({
  wrapper: {
    paddingTop: 16,
  },
});

const ProductsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout showFooter={false}>
      <div>
        <main>
          <h1 className='bg-black text-white text-5xl flex justify-center place-items-center h-56 tracking-widest'>
            OUR PRODUCTS
          </h1>
          <hr />

          <div className='m-10'>
            <div className={classes.wrapper}>
              <ProductList />
            </div>
          </div>

          <hr />
          <div className='bg-gray-100 pt-10 pb-10 pl-20 pr-20 text-xs text-justify'>
            <p>
              Discover the latest EIGRE products in the Mountaineering, Riding, and Authentic 1989 categories in the EIGRE New Arrival catalog. The newest, original, and high-quality EIGRE products come in a variety of models, sizes, patterns, and colors, available for men, women, and children. The latest fashion items include clothing, hats, bags, sandals, shoes, watches, belts, and various other accessories to complement your style. Also available are a range of new equipment and gear to support the outdoor lifestyle enthusiasts in tropical climates. Bookmark the EIGRE New Arrival catalog page to stay updated on the latest EIGRE products added regularly. Enjoy the convenience of online shopping on the official EIGRE website and start your outdoor adventure with the latest EIGRE Adventure products!
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default ProductsPage;