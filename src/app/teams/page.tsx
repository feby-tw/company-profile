import React from 'react';
import HeadlineTeams from 'components/teams/headline';
import TeamMember from 'components/teams/team-member';
import Founder from 'components/teams/founder';
import ExploreJob from 'components/teams/explore-job';

const TeamsPage: React.FC = () => {
  return (
    <div>
      <HeadlineTeams />
      <hr />
      <TeamMember />
      <hr />
      <Founder />
      <hr />
      <div className='m-10'>
        <ExploreJob />
      </div>
    </div>
  );
};

export default TeamsPage;