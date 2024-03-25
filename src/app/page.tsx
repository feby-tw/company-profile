import React from 'react';
import Layout from './layout';
import Banner from 'components/home/banner';
import ProductCategories from 'components/home/product-categories';
import HeroSection from 'components/home/hero-section';
import CompanyTagline from 'components/home/company-tagline';
import CompanyOverview from 'components/home/company-overview';

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <hr />
      <ProductCategories />
      <hr />
      <HeroSection />
      <hr />
      <CompanyTagline />
      <hr />
      <CompanyOverview />
    </div>
  );
};

export default HomePage;