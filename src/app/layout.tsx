import React, { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '@/app/global.css';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      {showHeader && <Header />}
      <main className='flex-grow'>{children}</main>
      {showFooter && <Footer />} {}
    </div>
  );
};

export default Layout;
