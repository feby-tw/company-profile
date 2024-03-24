import React from 'react';
import Image from 'next/image';
import EigerGreen from '@/assets/images/green.png';
import TropicalAdventure from '@/assets/images/tagline.png';

const CompanyTagline: React.FC = () => {
  return (
    <section className='company-tagline'>
      <hr />
      <div className='flex justify-between'>
        <div className='w-2/3 m-20'>
          <Image className='w-full h-auto'
            src={EigerGreen}
            alt='Background Eiger Green'
          />
          <div className='text-center w-auto h-auto pt-16'>
            <p className='mb-4 text-4xl text-green-800 font-bold tracking-widest'>
              Our Commitment
            </p>
            <p>
              Being a friend and protector to those who want to enjoy nature is our duty.<br />However, safeguarding and preserving the Earth is our collective responsibility for the sake of future generations.
            </p>
          </div>
        </div>
        <div className='w-1/3'>
          <Image className='flex-col'
            src={TropicalAdventure}
            alt='Tagline Eiger Tropical Adventure'
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyTagline;
