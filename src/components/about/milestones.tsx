import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import certifiedCompany from '../../assets/images/certification.png';

const CompanyMilestones = () => {
  return (
    <div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-20 mb-20 justify-start items-center'>
        <div className='pl-36 pr-12'>
            <h5 className='mb-2'>
            CERTIFIED COMPANY
            </h5>
            <h2 className='text-5xl mb-4'>
            WE ARE A GREAT PLACE TO WORK CERTIFIED
            </h2>
            <p className='mb-8'>
            Eigre Adventure, Inc. has officially received the Great Place to Work (GPTW) certification from March 2023 to March 2024. This certification was obtained from the official institution, the Great Place to Work Institute, an organization based in the United States established in 1992, which has conducted surveys of over 100 million employees in 49 countries worldwide.
            </p>
            <Link href='https://greatplacetowork.co.id/certified-company-list/#certified-companies-list/view-company-details/6440b23e56a8470028eb3d87/'
                target='_blank'
                className='relative w-60 flex justify-center rounded-full bg-black text-white p-4 tracking-widest hover:font-bold'>
            Learn More <ArrowRightIcon className="h-5 w-5 ml-1" />
            </Link>
        </div>
        <div>
            <Image className='flex-col flex-shrink-0'
            src={certifiedCompany}
            alt='Eiger Great Place To Work Certified'
            />
        </div>
    </div>
  )
};

export default CompanyMilestones;