import React from 'react';
import { Member } from '@/utils/data-models/member';
import Image from 'next/image';

export type TeamCardProps = {
  member: Member;
};

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className='bg-white shadow-md rounded-md overflow-hidden'>
      <div className='grid grid-cols-2'>
        <div>
            <Image
                className="h-auto w-full object-cover"
                src={member.image ? (typeof member.image === 'string' ? member.image : member.image.src) : ''}
                alt={member.name}
                width={1200} height={600}
            />
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold mb-2">{member.name}</p>
          <p className="text-lg mt-2 mb-2">{member.position}</p>
          <hr className="my-4" />
          <p className="text-sm mt-2 mb-2"><span className="mr-2">✉️</span>{member.email}</p>
          <p className="text-sm"><span className="mr-2">📞</span>{member.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
