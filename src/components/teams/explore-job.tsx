import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const ExploreJob = () => {
  return (
    <div className='bg-red-600 ml-40 mr-40 pt-20 pb-20 text-center tracking-widest rounded-3xl'>
      <p className='text-gray-300 text-lg'>APPLY FOR JOBS NOW</p>
      <h1 className='text-4xl mb-8'>SHARE YOUR PASSION<br />WITH US</h1>
      <Link href='https://career.eigeradventure.com/jobs' className='inline-flex justify-center items-center rounded-full bg-black text-white p-4 pl-12 pr-12 tracking-widest hover:font-bold'>
        <span className='text-center'>EXPLORE JOBS </span><ArrowRightIcon className='h-5 ml-2' />
      </Link>
    </div>
  );
};

export default ExploreJob;
