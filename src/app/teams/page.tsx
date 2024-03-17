// import React, { useState, useEffect } from 'react';
import TeamMember from '../../components/TeamMember';
import { fetchTeamMembers } from '../../utilities/fetchData';
import Layout from '../layout';

const TeamsPage: React.FC = () => {
//   const [teamMembers, setTeamMembers] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchTeamMembers();
//         setTeamMembers(data);
//       } catch (error) {
//         console.error('Error fetching team members:', error);
//       }
//     };
//     fetchData();
//   }, []);

  return (
    <Layout showFooter={false}>
      <div>
        <h1>Our Team</h1>
        <div>
            {/* {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
            ))} */}
        </div>
      </div>
    </Layout>
  );
};

export default TeamsPage;
