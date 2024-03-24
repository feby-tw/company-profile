import React from 'react';
import { products } from '../../components/products/product-details';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const ProductOverview = () => {
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  const filteredProducts = uniqueCategories.map(category => {
    return products.find(product => product.category === category);
  }).filter(Boolean);

  const fiveProducts = filteredProducts.slice(0, 5);

  return (
    <div>
      <hr />
      <h5 className='m-12 text-2xl font-bold text-center'>
        <u>Product Categories</u>
      </h5>
      <div className='grid grid-cols-5 gap-2 m-8'>
        {fiveProducts.map((product) => (
          <div key={product?.id}>
            <Image className='p-2 border border-gray-200 hover:bold' src={product?.images?.[0]?.image ?? "/default-image.jpg"} alt={product?.title ?? "Product Image"} />
            <figcaption className='text-center font-bold tracking-widest p-2'><u>{product?.category}</u></figcaption>
          </div>
        ))}
      </div>
      <div className='flex justify-end m-12'>
        <Link href='/products' className='relative w-60 flex justify-center rounded-full bg-red-600 text-white p-4 tracking-widest hover:font-bold'>
          View Details <ArrowRightIcon className="h-5 w-5 ml-1" />
        </Link>
      </div>
    </div>
  )
};

export default ProductOverview;