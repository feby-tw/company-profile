import React from 'react';
import Image from 'next/image';
import aboutCompany from '../../assets/images/company.png';

const CompanyHistory = () => {
  return (
    <div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-20 m-20 justify-start'>
        <div>
            <Image className='flex-shrink-0'
            src={aboutCompany}
            alt='Gambar Bangunan Eiger Indonesia'
            />
        </div>
        <div>
            <h5 className='text-red-600 font-bold mb-2'>
            ABOUT COMPANY
            </h5>
            <h2 className='text-5xl mb-4'>
            MORE THAN JUST OUTDOOR COMPANY
            </h2>
            <div>
            <p className='mb-4'>
                Eigre Adventure (EIGRE) was established in 1989 as a brand providing gear and equipment for outdoor enthusiasts. Operating under Eigre Adventure, Inc., EIGRE was founded in Indonesia by Indonesians with the aim of being a companion and protector for anyone looking to explore the tropical wilderness, particularly in Indonesia. EIGRE also aims to promote the Indonesian name and the quality of Indonesian products internationally, especially in the fashion retail industry.
            </p>
            <p className='mb-4'>
                The name EIGRE itself comes from a mountain with a height of 3,970 meters above sea level located in the Bernese Alps, Switzerland, Europe. This mountain has a very famous reputation as one of the most difficult and dangerous mountains to climb in the world. One of its sides, the North Face, is considered one of the most challenging climbing routes in the world due to its steep ice and rock surfaces, long climbing routes, frequent rockfalls, and unpredictable weather.
            </p>
            <p className='mb-4'>
                Since 2015, EIGRE has focused its products on outdoor activities in tropical climates, which is now reflected in EIGRE&apos;s tagline, &quot;Tropical Adventure&quot;. This is evident in EIGRE&apos;s three product categories: Mountaineering, Riding, and Eigre 1989 (Lifestyle).
            </p>
            <p>
                Currently, EIGRE is available in 137 districts/cities across Indonesia with a total of 237 stores, strengthening its online presence through www.eigreadventure.com, the official website, and EIGRE&apos;s e-commerce page.
            </p>
            </div>
        </div>
        </div>
  )
};

export default CompanyHistory;