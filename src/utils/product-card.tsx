import React from 'react';
import { Product } from './data-models/product';
import Image from 'next/image';

export type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className='product-card'>
            <div className='grid grid-rows-3 h-full border border-gray-300'>
                <div>
                    <Image
                        className='h-auto row-span-2'
                        src={product.images ? 
                            (typeof product.images[0]?.image === 'string' ? product.images[0]?.image : product.images[0]?.image.src) 
                            : ''}
                        alt={product.title}
                        width={600} height={400}
                    />
                </div>
                <div className='card-content h-auto p-4'>
                    <div className='title-wrapper flex justify-between'>
                        <span className='title text-2xl font-bold mt-2 mb-2'>{product.title}</span>
                        <span className='category text-sm text-gray-300 mt-2 mb-2'>{product.category}</span>
                    </div>
                    <div>
                        <p className='price text-2xl mt-2 mb-2 text-red-700 font-bold tracking-wide'>{product.price}</p>
                        <hr />
                        <p className='description text-xs mt-2 mb-2 text-justify'>{product.description}</p>
                        <p className='reviews'>{product.reviews}</p>
                    </div>
                    <div className='card-actions h-auto mr-8 flex justify-end'>
                        <button className='add-to-cart-button text-white bg-red-600 rounded-3xl pt-2 pb-2 pl-12 pr-12 hover:bg-red-400 hover:font-bold'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;