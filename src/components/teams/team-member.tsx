import TeamCard from '@/components/teams/team-card'
import { Member } from '@/utils/data-models/member';
import Hummel from '@/assets/teams/member1.jpg';
import Fox from '@/assets/teams/member2.jpg';
import Meyer from '@/assets/teams/member3.jpg';
import Raimondi from '@/assets/teams/member4.jpg';
import Gutermuth from '@/assets/teams/member5.jpg';
import Keen from '@/assets/teams/member6.jpg';

const members: Member[] = [
  {
    id: '1',
    name: 'Richard Hummel',
    position: 'Chief Executive Officer (CEO)',
    email: 'richardhummel@eigre.co.en',
    phone: '01234',
    image: Hummel,
  },
  {
    id: '2',
    name: 'Elizabeth Fox',
    position: 'Chief Operating Officer (COO)',
    email: 'elizabethfox@eigre.co.en',
    phone: '01235',
    image: Fox,
  },
  {
    id: '3',
    name: 'Dorothy Meyer',
    position: 'Chief Financial Officer (CFO)',
    email: 'dorothymeyer@eigre.co.en',
    phone: '01236',
    image: Meyer,
  },
  {
    id: '4',
    name: 'Paul Raimondi',
    position: 'Chief Marketing Officer (CMO)',
    email: 'paulraimondi@eigre.co.en',
    phone: '01237',
    image: Raimondi,
  },
  {
    id: '5',
    name: 'Ruth Gutermuth',
    position: 'Chief Technology Officer (CTO)',
    email: 'ruthgutermuth@eigre.co.en',
    phone: '01238',
    image: Gutermuth,
  },
  {
    id: '6',
    name: 'David Keen',
    position: 'Human Resources Director (HR)',
    email: 'davidkeen@eigre.co.en',
    phone: '01239',
    image: Keen,
  },
];

const TeamMember = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 mx-20 my-20'>
      {members.map((member: Member) => (
        <div key={member.id}>
          <TeamCard member={member} />
        </div>
      ))}
    </div>
  );
};

export default TeamMember;