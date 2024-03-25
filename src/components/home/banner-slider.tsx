import React from 'react';
import Image from 'next/image';
import Banner1 from '../../assets/images/banner1.png';
import Banner2 from '../../assets/images/banner2.png';
import Banner3 from '../../assets/images/banner3.png';

const BannerSlider: React.FC = () => {
  return (
    <div className='banners'>
        <div className='banner-slider'>
            <div className='banner-slides'>
              <input type='radio' name='radio-btn' id='banner1' />
              <input type='radio' name='radio-btn' id='banner2' />
              <input type='radio' name='radio-btn' id='banner3' />

              <div className='banner first-b'>
                <Image src={Banner1} alt='Ramadan Fest' />
              </div>
              <div className='banner second-b'>
                <Image src={Banner2} alt='New Arrival' />
              </div>
              <div className='banner third-b'>
                <Image src={Banner3} alt='Top Spender Voucher' />
              </div>

              <div className='navigation-auto'>
                <div className='auto-btn1'></div>
                <div className='auto-btn2'></div>
                <div className='auto-btn3'></div>
              </div>
            </div>

            <div className='banner-nav-manual'>
              <label htmlFor='banner1' className='banner-manual-btn'></label>
              <label htmlFor='banner2' className='banner-manual-btn'></label>
              <label htmlFor='banner3' className='banner-manual-btn'></label>
            </div>
        </div>
    </div>
  );
};

export default BannerSlider;