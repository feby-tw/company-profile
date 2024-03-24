import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';

interface ReviewsProps {
  rating: number;
}

const Reviews = ({ rating }: ReviewsProps) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon key={i} sx={{ color: yellow[700] }} />);
  }
  return <div>{stars}</div>;
};

export default Reviews;
