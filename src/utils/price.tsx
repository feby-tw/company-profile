interface PriceProps {
    price: number;
}

const IDR = ({ price }: PriceProps) => {
    const formatIDR = (price: number): string => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    };

    return (
        <span>{formatIDR(price)}</span>
    );
};
  
export default IDR;