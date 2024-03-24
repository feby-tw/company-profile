import React from 'react';
import Image from 'next/image';
import logo from '../assets/images/logo.png';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='fixed w-svw z-50'>
      <div className='border-t-4 border-red-600'></div>
      <nav className='navbar relative'>
        <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md'></div>
        <div className='relative z-10 flex justify-between items-center py-4 px-4 ml-12 mr-12 text-white tracking-widest'>
          <Image src={logo} alt='Logo' className='h-12 w-auto'/>
          <ul className='flex space-x-4'>
            <li>
              <Link className='p-5 hover:font-bold' href='/'>HOME</Link>
            </li>
            <li>
              <Link className='p-5 hover:font-bold' href='/about'>ABOUT US</Link>
            </li>
            <li>
              <Link className='p-5 hover:font-bold' href='/products'>PRODUCTS</Link>
            </li>
            <li>
              <Link className='p-5 hover:font-bold' href='/teams'>TEAMS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;