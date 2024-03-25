import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ReviewsProps {
    rating: number;
    totalStars: number;
    gridWidth?: string;
}

const Reviews = ({ rating, gridWidth = '30%' }: ReviewsProps) => {
    const stars = [];
    const totalStars = 5
    const starSize = `${(rating / totalStars) * 30}%`;;

    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FFD700', fontSize: starSize }} />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: '#808080', fontSize: starSize }} />);
        }
    }
    return (
        <div style={{width: gridWidth, display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
            {stars}
        </div>
    );
};

export default Reviews;