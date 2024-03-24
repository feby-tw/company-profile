import React, { ReactNode } from 'react';
import Header from '../components/header';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showHeader = true }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      {showHeader && <Header />} {}
      <main className='flex-grow'>{children}</main>
    </div>
  );
};

export default Layout;