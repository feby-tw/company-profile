import React from 'react';
import Image from 'next/image';
import Value1 from '@/assets/images/value1.png';
import Value2 from '@/assets/images/value2.png';
import Value3 from '@/assets/images/value3.png';
import Value4 from '@/assets/images/value4.png';
import Value5 from '@/assets/images/value5.png';

const CompanyValues = () => {
  return (
    <><div className='bg-black h-20'></div><div className='bg-black p-20 justify-start items-center text-center'>
          <h5 className='mb-4'>
              OUR VALUES
          </h5>
          <h1 className='text-7xl mb-20 tracking-widest'>
              SHARE
          </h1>
          <div className='grid grid-cols-5 gap-y-4'>
              <div className='flex flex-col place-items-center justify-start text-center text-white'>
                  <Image src={Value1} alt='Servanthood Symbol' className='mb-4 p-6' />
                  <figcaption className='mb-4 font-bold text-2xl'>Servanthood</figcaption>
                  <p className='pl-3 pr-3'>Serving others wholeheartedly</p>
              </div>
              <div className='flex flex-col place-items-center justify-start text-center text-white'>
                  <Image src={Value2} alt='Harmony Symbol' className='mb-4 p-6' />
                  <figcaption className='mb-4 font-bold text-2xl'>Harmony</figcaption>
                  <p className='pl-3 pr-3'>Creating and maintaining harmony to achieve common goals</p>
              </div>
              <div className='flex flex-col place-items-center justify-start text-center text-white'>
                  <Image src={Value3} alt='Agile Symbol' className='mb-4 p-6' />
                  <figcaption className='mb-4 font-bold text-2xl'>Agile</figcaption>
                  <p className='pl-3 pr-3'>Smart, adaptive, and solution-oriented in various situations and conditions</p>
              </div>
              <div className='flex flex-col place-items-center justify-start text-center text-white'>
                  <Image src={Value4} alt='Respect Symbol' className='mb-4 p-6' />
                  <figcaption className='mb-4 font-bold text-2xl'>Respect</figcaption>
                  <p className='pl-3 pr-3'>Respecting and valuing others and the environment</p>
              </div>
              <div className='flex flex-col place-items-center justify-start text-center text-white'>
                  <Image src={Value5} alt='Empowerment Symbol' className='mb-4 p-6' />
                  <figcaption className='mb-4 font-bold text-2xl'>Empowerment</figcaption>
                  <p className='pl-3 pr-3'>Empowering individuals to create leaders</p>
              </div>
          </div>
      </div><div className='bg-black h-20'></div></>
  )
};

export default CompanyValues;
