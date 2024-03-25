import React from 'react';
import Image from 'next/image';
import Overview from '../../assets/images/overview.png';
import Logo from '../../assets/images/logos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

const CompanyOverview: React.FC = () => {
  return (
    <div className='company-overview relative'>
      <div className='absolute pl-40 pr-40 top-60'>
        <Image src={Overview} alt='Company Overview Image' />
      </div>
      <hr />
      <div className='bg-gray-100 pt-20 pb-28 pl-20 pr-20'>
        <div>
          <p className='text-xl font-bold mb-2'>
            Eigre completes your adventure activities
          </p>
        </div>
        <div className='grid grid-cols-2 gap-10 text-xs text-justify'>
          <p>
            EIGRE Adventure is a brand that provides outdoor activity equipment from Indonesia that meets various needs for equipment and equipment for the lifestyle of outdoor enthusiasts in tropical climates. Founded in 1989, EIGRE offers 3 main activity categories covering a wide range of outdoor activities, namely EIGRE Mountaineering which is oriented towards mountaineering activities, EIGRE Riding which focuses on exploring motorbikes, and EIGRE 1989 which is inspired by the classic style of nature adventure lovers. open that is manifested in a casual and stylish design.
          </p>
          <p>
            Embark on an outdoor adventure with EIGRE. Complete with various collections of favorite and original EIGRE products. With various payment methods ranging from paylater, bank transfer, to COD. Also get the best prices and attractive promos for a variety of selected items. The process is safe, comfortable, definitely fast response only at eigeradventure.com. EIGRE not only contributes to outdoor activities, but also pays great attention to environmental sustainability. Various EIGRE products ranging from apparel to various gear to support your outdoor activities here!
          </p>
        </div>
      </div>
      <hr />
      <div className='grid grid-cols-3 bg-gray-800 justify-between items-center p-40'>
        <div className='pr-20'>
          <Image src={Logo} alt='Logo Eigre' />
        </div>
        <div className='pl-20 text-white'>
          <div className='flex justify-between pr-20 mb-4'>
            <FontAwesomeIcon icon={faInstagram} className='w-5' />
            <FontAwesomeIcon icon={faTiktok} className='w-5' />
            <FontAwesomeIcon icon={faFacebook} className='w-5' />
            <FontAwesomeIcon icon={faTwitter} className='w-5' />
          </div>
          <div>
            <p className='mb-2'>
              Get the latest promotions and other information by registering your email!
            </p>
          </div>
          <div>
            <form className='max-w-xs mx-auto pr-8 text-sm'>
              <input
                type='email'
                placeholder='please enter your email address'
                className='border-none rounded-lg px-4 py-2 w-full mb-4 focus:bg-white focus:text-black'
              />
              <button type='submit' className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-400">
                register
              </button>
            </form>
          </div>
        </div>
        <div className='pl-20 text-white'>
          <FontAwesomeIcon icon={faHeadset} className='w-10 ml-8 mb-8' />
          <p className='font-bold text-lg mb-2'>
            24 Hours Customer Service
          </p>
          <p>
            cs@eigreadventure.com<br />
            +6289876543210 (Whatsapp only)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;