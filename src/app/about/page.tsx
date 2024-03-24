import React from 'react';
import Layout from '../layout';
import CompanyHistory from '../../components/about/history';
import CompanyMilestones from '../../components/about/milestones';
import TeamExperienceSlider from '../../components/about/team-experiences';
import CompanyValues from '../../components/about/values';

const AboutUsPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <main>
          <h1 className='bg-black text-white text-5xl flex justify-center place-items-center h-56 tracking-widest'>
            ABOUT US
          </h1>
          <CompanyHistory />
          <hr />
          <CompanyMilestones />
          <hr />
          <div className='bg-gray-100 h-20'></div>
          <div className='bg-gray-100'>
            <h5 className='mb-2 text-center'>
                OUR TEAM&apos;S EXPERIENCES
            </h5>
            <h2 className='text-5xl mb-4 text-center'>
              FUELING OUR COMPANY&apos;S SUCCESS:<br />HEAR  OUR EMPLOYEES STORIES!
            </h2>
            <TeamExperienceSlider />
          </div>
          <div className='bg-gray-100 h-20'></div>
          <hr />
          <CompanyValues />
        </main>
      </div>
    </Layout>
  );
};

export default AboutUsPage;