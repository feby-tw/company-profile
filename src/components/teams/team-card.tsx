'use client'

import React from 'react';
import { Member } from '@/utils/data-models/member';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Email, Phone } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export type TeamCardProps = {
  member: Member;
};

const TeamCard = (props: TeamCardProps) => {
  const { member } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className='grid grid-col-2 h-full mt-20 ml-20 mr-20'>
        <div>
            <CardMedia
                className='h-auto row-span-2'
                component='img'
                height='140'
                image={member.image ? 
                    (typeof member.image === 'string' ? member.image : member.image.src) 
                    : ''}
                alt={member.name}
            />
        </div>
        <div>
            <CardContent className='h-auto mb-20'>
                <Typography className='text-xl font-bold mb-4 tracking-widest'>
                    {member.name}
                </Typography>
                <Typography className='text-md mb-4'>
                    {member.position}
                </Typography>
                <hr />
                <Typography className='text-sm mt-2 mb-2'>
                    <Email fontSize='small' /> {member.email}
                </Typography>
                <Typography className='text-sm mt-2' >
                    <Phone fontSize='small' /> {member.phone}
                </Typography>
            </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;