import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, description }) => {
  return (
    <div className="team-member">
      <h3>{name}</h3>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default TeamMember;
