import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='text-center text-sm text-gray-600 py-4' style={{fontSize: '0.8rem'}}>
      <p>Copyright &copy; {new Date().getFullYear()} Eiger Adventure, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
