import React from 'react';
import Image from 'next/image';
import team from 'assets/teams/team.jpg';

const HeadlineTeams = () => {
  return (
    <div>
        <div>
            <h1 className='bg-black text-white text-5xl flex justify-center place-items-center h-56 pt-8 tracking-widest'>
                OUR TEAM
            </h1>
        </div>
        <div className='grid grid-cols-2 items-center'>
            <h5 className='text-center text-5xl'>
                Meet Our<br />Team Members!
            </h5>
            <Image
            src={team}
            alt='Eigre Team Image'
            className='w-full h-auto'
            />
        </div>
    </div>
  );
};

export default HeadlineTeams;
