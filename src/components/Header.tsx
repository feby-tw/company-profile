import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo2.png';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='fixed w-full'>
      <div className='border-t-4 border-red-600'></div>
      <nav className='text-white bg-black bg-opacity-25 flex justify-between items-center z-50 p-3 rounded-xl'
           style={{marginTop: '0.3%', marginLeft: '2.5%', marginRight: '-2.5%', width: '95%'}}>
        <Image src={logo} alt='Logo'/>
        <ul className='flex space-x-4'>
          <li>
            <Link className=' p-5' href="/">HOME</Link>
          </li>
          <li>
            <Link className=' p-5' href="/about">ABOUT US</Link>
          </li>
          <li>
            <Link className=' p-5' href="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link className=' p-5' href="/teams">TEAMS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
