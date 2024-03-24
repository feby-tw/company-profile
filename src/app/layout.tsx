import React, { ReactNode } from 'react';
import Header from '../components/header';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>{children}</main>
    </div>
  );
};

export default Layout;