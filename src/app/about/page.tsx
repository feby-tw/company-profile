import React from 'react';
import HeadlineAbout from 'components/about/headline';
import CompanyHistory from 'components/about/history';
import CompanyMilestones from 'components/about/milestones';
import TeamExperiences from 'components/about/team-experiences';
import CompanyValues from 'components/about/values';

const AboutPage: React.FC = () => {
  return (
    <div>
      <HeadlineAbout />
      <hr />
      <CompanyHistory />
      <hr />
      <CompanyMilestones />
      <hr />
      <TeamExperiences />
      <hr />
      <CompanyValues />
    </div>
  );
};

export default AboutPage;