import React from 'react';
import { Product } from '../../utils/data-models/product';
import Image from 'next/image';

export type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='product-card'>
      <div className='grid grid-rows-3 h-full border border-gray-300'>
        <Image
          className='h-auto row-span-2'
          src={product.images ? 
            (typeof product.images[0]?.image === 'string' ? product.images[0]?.image : product.images[0]?.image.src) 
            : ''}
          alt={product.title}
          width={600} height={400}
        />
        <div className='card-content h-auto pl-8 pr-8'>
          <div className='title-wrapper flex justify-between'>
            <span className='title text-3xl font-bold mt-2 mb-2'>{product.title}</span>
            <span className='category text-sm text-gray-300 mt-2 mb-2'>{product.category}</span>
          </div>
          <p className='price text-2xl mt-2 mb-2 text-red-700 font-bold tracking-wide'>{product.price}</p>
          <hr />
          <p className='description text-xs mt-2 mb-2 text-justify'>{product.description}</p>
          <div>
            <p className='reviews'>{product.reviews}</p>
          </div>
        </div>
        <div className='card-actions h-auto ml-8 mr-8 mb-8 flex justify-end'>
          <button className='add-to-cart-button text-white bg-red-600 rounded-3xl pt-2 pb-2 pl-4 pr-4 hover:bg-red-400 hover:font-bold'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;