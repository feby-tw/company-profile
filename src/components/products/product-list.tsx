import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '@/components/products/product-card';
import { products } from '@/components/products/product-details';

const ProductList = () => {
  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid key={index} item xs={12} sm={6} lg={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
