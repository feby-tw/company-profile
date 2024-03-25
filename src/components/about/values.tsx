import React from 'react';
import Image from 'next/image';
import value1 from 'assets/images/value1.png'
import value2 from 'assets/images/value2.png'
import value3 from 'assets/images/value3.png'
import value4 from 'assets/images/value4.png'
import value5 from 'assets/images/value5.png'

const CompanyValues = () => {
    return (
        <div className='bg-black pt-40 pb-40 pl-20 pr-20 justify-start items-center text-center'>
            <div>
                <h5 className='mb-4'>
                    OUR VALUES
                </h5>
                <h1 className='text-7xl mb-20 tracking-widest'>
                    SHARE
                </h1>
            </div>
            <div className='grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-4'>
                <div className='flex flex-col place-items-center justify-start text-center text-white'>
                    <Image src={value1} alt='Servanthood Symbol' className='mb-4 p-6' />
                    <figcaption className='mb-4 font-bold text-2xl'>Servanthood</figcaption>
                    <p className='pl-3 pr-3'>Serving others wholeheartedly</p>
                </div>
                <div className='flex flex-col place-items-center justify-start text-center text-white'>
                    <Image src={value2} alt='Harmony Symbol' className='mb-4 p-6' />
                    <figcaption className='mb-4 font-bold text-2xl'>Harmony</figcaption>
                    <p className='pl-3 pr-3'>Creating and maintaining harmony to achieve common goals</p>
                </div>
                <div className='flex flex-col place-items-center justify-start text-center text-white'>
                    <Image src={value3} alt='Agile Symbol' className='mb-4 p-6' />
                    <figcaption className='mb-4 font-bold text-2xl'>Agile</figcaption>
                    <p className='pl-3 pr-3'>Smart, adaptive, and solution-oriented in various situations and conditions</p>
                </div>
                <div className='flex flex-col place-items-center justify-start text-center text-white'>
                    <Image src={value4} alt='Respect Symbol' className='mb-4 p-6' />
                    <figcaption className='mb-4 font-bold text-2xl'>Respect</figcaption>
                    <p className='pl-3 pr-3'>Respecting and valuing others and the environment</p>
                </div>
                <div className='flex flex-col place-items-center justify-start text-center text-white'>
                    <Image src={value5} alt='Empowerment Symbol' className='mb-4 p-6' />
                    <figcaption className='mb-4 font-bold text-2xl'>Empowerment</figcaption>
                    <p className='pl-3 pr-3'>Empowering individuals to create leaders</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyValues;