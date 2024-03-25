import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const RunningText = () => {
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    return (
        <div className='running-text-container w-auto'>
            <div className='running-text tracking-widest'>
                <FontAwesomeIcon icon={faExclamationCircle} className='w-4 mr-2'/>
                DISCLAIMER : This website is created for learning purposes only, although the elements in it refer to the original website, <Link href='https://www.eigeradventure.com/' target='_blank' className='pl-2'> <u>www.eigeradventure.com</u></Link>.
                <FontAwesomeIcon icon={faFire} className='w-4 ml-16 mr-2'/>
                Flash Sale {formattedDate} | <Link href='/products' className='pl-2'> <u>BUY NOW</u></Link>
            </div>
        </div>

    );
};

export default RunningText;
