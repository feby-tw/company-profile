import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo2.png';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='fixed w-full z-50'>
      <div className='border-t-4 border-red-600'></div>
      <nav className='navbar'>
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
      <div className='behind-navbar'></div>
    </header>
  );
};

export default Header;
