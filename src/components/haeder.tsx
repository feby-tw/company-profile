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


// import React from 'react'
// import Image from 'next/image'
// import Logo from '../assets/logo.png'
// import Link from 'next/link'
// // import Navbar from './Navbar'

// const Header: React.FC = () => {
//   return (
//     <header className='fixed w-full z-50'>
//       <div className='border-t-4 border-red-600'></div>
//       <nav>
//         <ul className='navbar'>
//           <li className='logo'><a href='#'><Image src={Logo} alt='Logo Eigre' className='h-14 p-2 w-auto ml-4'/></a></li>
//           <input type='checkbox' id='check'></input>
//           <span className='menu'>
//             <li><a href='/'>HOME</a></li>
//             <li><a href='/about'>ABOUT US</a></li>
//             <li><a href='/products'>PRODUCTS</a></li>
//             <li><a href='/teams'>TEAMS</a></li>
//           </span>
//           <label htmlFor='check' className='open-menu'><i className='fas fa-bars'></i></label>
          
//         </ul>

//         {/* <ul className='flex space-x-4'>
//           <li>
//             <Link className='menus p-5' href='/'>HOME</Link>
//           </li>
//           <li>
//             <Link className='menus p-5' href='/about'>ABOUT US</Link>
//           </li>
//           <li>
//             <Link className='menus p-5' href='/products'>PRODUCTS</Link>
//           </li>
//           <li>
//             <Link className='menus p-5' href='/teams'>TEAMS</Link>
//           </li>
//         </ul> */}
//       </nav>
//       <div className='behind-navbar'></div>
//       {/* <Navbar /> */}
//     </header>
//   );
// };

// export default Header;