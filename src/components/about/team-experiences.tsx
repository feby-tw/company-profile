import React from 'react';
import TeamExperienceSlider from './team-experiences-slider';

const TeamExperiences = () => {
    return (
        <div className='p-20'>
            <div>
                <h5 className='mb-2 text-center'>
                    OUR TEAM&apos;S EXPERIENCES
                </h5>
                <h2 className='text-5xl mb-4 text-center'>
                    FUELING OUR COMPANY&apos;S SUCCESS:<br />HEAR  OUR EMPLOYEES STORIES!
                </h2>
            </div>
            <div className='flex justify-center'>
                <TeamExperienceSlider />
            </div>
        </div>
    );
};

export default TeamExperiences;