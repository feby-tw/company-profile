import React from 'react';
import Layout from './layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import BannerSlider from '../components/home/banner';
import ProductOverview from '../components/home/product-overview';
import HeroSection from '../components/home/hero-section';
import CompanyTagline from '../components/home/company-tagline';
import CompanyOverview from '../components/home/company-overview';

const HomePage: React.FC = () => {
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  
  return (
    <Layout showFooter={false}>
      <div>
        <main>
          <div>
            <div className='bg-black flex justify-center items-center h-24'></div>
            <div className='running-text-container w-auto'>
              <div className='running-text tracking-widest'>
                < FontAwesomeIcon icon={faExclamationCircle} className='w-4 mr-2'/>
                DISCLAIMER : This website is created for learning purposes only, although the elements in it refer to the original website, <Link href='https://www.eigeradventure.com/' target='_blank' className='pl-2'> <u>www.eigeradventure.com</u></Link>.
                <FontAwesomeIcon icon={faFire} className='w-4 ml-16 mr-2'/>
                Flash Sale {formattedDate} | <Link href='/products' className='pl-2'> <u>BUY NOW</u></Link>
              </div>
            </div>
            <div>
              <BannerSlider />
            </div>
          </div>
          <ProductOverview />
          <HeroSection />
          <CompanyTagline />
          <CompanyOverview />
        </main>
      </div>
    </Layout>
  );
};

export default HomePage;