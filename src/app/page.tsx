import React from 'react';
import HeroSection from '../components/HeroSection';
import CompanyOverview from '../components/CompanyOverview';
import Products from '../components/Products';
import TestimonialsDynamic from '../components/Testimonials';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <Layout showFooter={false}>
      <div>
        <main>
          <HeroSection />
          <CompanyOverview />
          <Products />
          <TestimonialsDynamic />
        </main>
      </div>
    </Layout>
  );
}

export default Home;