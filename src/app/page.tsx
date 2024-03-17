import React from 'react';
import HeroSection from '../components/HeroSection';
import CompanyOverview from '../components/CompanyOverview';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <Layout showFooter={false}>
      <div>
        <main>
          <HeroSection />
          <CompanyOverview />
          <Products />
          <Testimonials />
        </main>
      </div>
    </Layout>
  );
}

export default Home;