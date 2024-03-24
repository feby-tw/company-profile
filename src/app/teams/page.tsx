import React from 'react';
import Layout from '../layout';
import TeamMember from '@/components/teams/team-member'
import Image from 'next/image';
import Team from '@/assets/teams/team.jpg'
import Founder from '@/assets/teams/founder.jpg'
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const TeamsPage: React.FC = () => {
  return (
    <Layout showFooter={false}>
      <div>
        <h1 className='bg-black text-white text-5xl flex justify-center place-items-center h-56 tracking-widest'>
          OUR TEAM
        </h1>
        <div className='grid grid-cols-2 items-center'>
          <h5 className='text-center text-4xl'>
            Meet Our Team Members!
          </h5>
          <div>
            <Image
              src={Team}
              alt='Eigre Team Image'
              className='w-full h-auto'
            />
          </div>
        </div>
        <hr />
        <div>
            <TeamMember />
        </div>
        <hr />
        <div className='flex justify-between'>
          <Image src={Founder} alt='Ronny Lukito' />
          <div className='bg-gray-800 items-center text-center p-24'>
            <h1 className='text-5xl mb-8'>&quot;EVERYONE HAS GOD&apos;S PURPOSE IN LIFE. WHOEVER YOU WANT TO BE, DO YOUR BEST AND BE HELPFUL FOR YOUR SURROUNDING.&quot;</h1>
            <p className='text-white text-lg tracking-widest'>- Ronny Lukito, founder of Eigre Adventure</p>
          </div>
        </div>
        <hr />
        <div className='bg-gray-100 p-8'></div>
        <div className='bg-gray-100'>
          <div className='bg-red-600 ml-40 mr-40 pt-20 pb-20 text-center tracking-widest rounded-3xl'>
            <p className='text-gray-300 text-lg'>APPLY FOR JOBS NOW</p>
            <h1 className='text-4xl mb-8'>SHARE YOUR PASSION<br />WITH US</h1>
            <Link href='https://career.eigeradventure.com/jobs' className='inline-flex justify-center items-center rounded-full bg-black text-white p-4 pl-12 pr-12 tracking-widest hover:font-bold'>
              <span className='text-center'>EXPLORE JOBS </span><ArrowRightIcon className='h-5 ml-2' />
            </Link>
          </div>
        </div>
        <div className='bg-gray-100 p-8'></div>
      </div>
    </Layout>
  );
};

export default TeamsPage;
