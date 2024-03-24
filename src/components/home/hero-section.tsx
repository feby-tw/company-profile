import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import visionMission from '../../assets/images/visionMission.png';

const HeroSection: React.FC = () => {
  return (
    <section className='hero-section'>
      <hr />
      <div className='grid grid-cols-2 gap-20 ml-40 mr-40 mt-20 mb-20 justify-start'>
        <div className='flex-col'>
          <h5 className='mb-4'>
            ABOUT US
          </h5>
          <h2 className='text-4xl'>
            UNVEILING OUR OUTDOOR PASSION
          </h2>
        </div>
        <div className='flex-col'>
          <p className='mb-8'>
            We are a retail company based in Indonesia that is a home for EIGRE Adventure, an outdoor fashion and gears brand. We are widely available in Indonesia through our online platforms and our over 237 stores.
          </p>
          <Link href='/about' className='relative w-60 flex justify-center rounded-full bg-black text-white p-4 tracking-widest hover:font-bold'>
            ABOUT COMPANY <ArrowRightIcon className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </div>

      <hr />
      <div className='grid md:grid-cols-1 gap-20 bg-gray-100 place-items-center text-center pt-20 pl-60 pr-60 pb-40'>
        <div>
          <h6 className='mb-4 tracking-widest'>
            OUR VISION
          </h6>
          <h2 className='text-4xl'>
            TO BE A BLESSING COMPANY<br />IN LIFESTYLE BUSINESS
          </h2>
        </div>
        <div>
          <Image
            src={visionMission}
            alt='Gambar Team Eiger Indonesia di Gunung'
            className='border-b-8 border-red-600 flex justify-center items-center'
          />
        </div>
        <div>
          <h6 className='mb-4 tracking-widest'>
            OUR MISSION
          </h6>
          <h2 className='text-4xl'>
            WITH THE SPIRIT OF SUSTAINABILITY WE PROVIDE<br />EXPERIENTIAL CUSTOMER SATISFACTION<br />IN LIFESTYLE BUSINESSES
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;