import React, { ReactNode } from 'react';
import Head from 'next/head'
import './globals.css';
import Header from 'components/header';
import Footer from 'components/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Eigre Company Profile</title>
      </Head>
      <body className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;