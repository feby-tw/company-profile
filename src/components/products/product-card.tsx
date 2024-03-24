'use client'

import React from 'react';
import { Product } from '@/utils/data-models/product';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export type ProductCardProps = {
  product: Product;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className='grid grid-rows-3 h-full'>
        <CardMedia
          className='h-auto row-span-2'
          component='img'
          height='140'
          image={product.images ? 
            (typeof product.images[0]?.image === 'string' ? product.images[0]?.image : product.images[0]?.image.src) 
            : ''}
          alt={product.title}
        />
        <CardContent className='h-auto pl-8 pr-8'>
          <Typography className='text-xl mb-4 flex justify-between'>
            <span className='text-2xl font-bold tracking-widest'>{product.title}</span><span className='text-sm text-gray-300'>{product.category}</span>
          </Typography>
          <Typography className='text-xl mb-2'>
            {product.price}
          </Typography>
          <hr />
          <Typography className='text-xs mt-2 mb-2 text-justify'>
            {product.description}
          </Typography>
          <Typography>
            {product.reviews}
          </Typography>
        </CardContent>
        <CardActions className='h-auto pl-8 pr-8 pb-8 justify-end'>
          <Button size='small' className='bg-red-600 text-white hover:bg-red-400 pl-4 pr-4'> Add to cart </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default ProductCard;