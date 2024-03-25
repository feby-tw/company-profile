import React from 'react';
import Image from 'next/image';
import founder from 'assets/teams/founder.jpg'

const Founder = () => {
  return (
    <div className='flex justify-between'>
      <div>
          <Image src={founder} alt='Ronny Lukito' />
      </div>
      <div className='bg-gray-800 items-center p-24'>
          <h1 className='text-5xl mb-8 text-center'>&quot;EVERYONE HAS GOD&apos;S PURPOSE IN LIFE. WHOEVER YOU WANT TO BE, DO YOUR BEST AND BE HELPFUL FOR YOUR SURROUNDING.&quot;</h1>
          <p className='text-white text-lg text-center tracking-widest'>- Ronny Lukito, founder of Eigre Adventure</p>
      </div>
    </div>
  );
};

export default Founder;
