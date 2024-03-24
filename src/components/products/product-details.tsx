import IDR from '../../utils/price';
import Reviews from '../../utils/review';
import Sianok from '../../assets/products/01.jpg';
import MugBrown from '../../assets/products/02.jpg';
import Azimuth from '../../assets/products/03.jpg';
import Chair from '../../assets/products/04.jpg';
import Table from '../../assets/products/05.jpg';
import MealPackage from '../../assets/products/06.jpg';
import Torch from '../../assets/products/07.jpg';
import Rope from '../../assets/products/08.jpg';
import Trowel from '../../assets/products/09.jpg';
import Pole from '../../assets/products/10.jpg';
import Waist from '../../assets/products/11.jpg';
import Sling from '../../assets/products/12.jpg';
import Duffel from '../../assets/products/13.jpg';
import Luggage from '../../assets/products/14.jpg';
import Backpack from '../../assets/products/15.jpg';
import MambaLow from '../../assets/products/16.jpg';
import MambaMid from '../../assets/products/17.jpg';
import Biskra from '../../assets/products/18.jpg';
import RasDashen from '../../assets/products/19.jpg';
import Adder from '../../assets/products/20.jpg';
import Parka from '../../assets/products/21.jpg';
import Coach from '../../assets/products/22.jpg';
import Bomber from '../../assets/products/23.jpg';
import Windproof from '../../assets/products/24.jpg';
import Padded from '../../assets/products/25.jpg';
import Wallet from '../../assets/products/26.jpg';
import Bracelet from '../../assets/products/27.jpg';
import Belt from '../../assets/products/28.jpg';
import Watch from '../../assets/products/29.jpg';
import Aviator from '../../assets/products/30.jpg';

export const products = [
    {
        id: '01',
        title: 'Sianok Tent',
        description: 'Made from Oxford PU waterproof material with a 3000mm rating, this teepee tent can accommodate up to 3 people. It comes with a waterproof groundsheet, 10 aluminum pegs, 4 guy ropes with tensioners, interior hooks for hanging a lantern or flashlight, and a convenient carry bag for easy storage.',
        category: 'Equipment',
        price: <IDR price={2119000} />,
        images:
        [
            {
                color: 'Olive',
                colorCode: '#808000',
                image: Sianok,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '02',
        title: 'Buoyant Mug',
        description: 'It features a compact design with a 350 ml capacity and can keep beverages hot or cold for an extended period of time (Hot for 6 hours: from 100°C - 36°C and Cold for 6 hours: 0°C - 8°C',
        category: 'Equipment',
        price: <IDR price={199000} />,
        images:
        [
            {
                color: 'Brown',
                colorCode: '#A52A2A',
                image: MugBrown,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '03',
        title: 'Azimuth',
        description: 'This product is made of acrylic material and includes a map scale of 1:25.000, 1:50.000, and 1:63.360, a magnifying lens, a phosphor needle, plastic construction, and a lanyard.',
        category: 'Equipment',
        price: <IDR price={119000} />,
        images: 
        [
            {
                color: 'Orange',
                colorCode: '#FFA500',
                image: Azimuth,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '04',
        title: 'Camp Chair',
        description: 'This chair is made of polyester and alumimun alloy, making it capable of supporting a maximum weight of up to 120kg.',
        category: 'Equipment',
        price: <IDR price={609000} />,
        images:
        [
            {
                color: 'Blue',
                colorCode: '#0000FF',
                image: Chair,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '05',
        title: 'Camp Table',
        description: 'This table measures 57 x 42 x 38 cm and is made of durable aluminum and 1680D polyester, making it easy to carry around. It has a maximum weight capacity of 50 kg.',
        category: 'Equipment',
        price: <IDR price={379000} />,
        images:
        [
            {
                color: 'Orange',
                colorCode: '#FFA500',
                image: Table,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '06',
        title: 'Meal Package',
        description: '1 set consisting of 3 compact eating utensils made of stainless steel material (foldable chopsticks, fork-spoon combo, and bowl).',
        category: 'Equipment',
        price: <IDR price={199000} />,
        images:
        [
            {
                color: 'Green',
                colorCode: '#008000',
                image: MealPackage,
            },
        ],
          reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '07',
        title: 'Alpha Torch',
        description: 'Using CREE XPG High Performance LED and equipped with 2 modes: HIGH - OFF - LOW - OFF. Shock resistant up to 1 meter, dustproof, and water-resistant with an IPX4 rating.',
        category: 'Equipment',
        price: <IDR price={209000} />,
        images:
        [
            {
                color: 'Black',
                colorCode: '#000000',
                image: Torch,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '08',
        title: 'Reflective Rope',
        description: 'Easily visible in low light conditions, this rope can be used to secure a tarp or to hang some of your gear inside the tent.',
        category: 'Equipment',
        price: <IDR price={49000} />,
        images:
        [
            {
                color: 'Orange',
                colorCode: '#FFA500',
                image: Rope,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '09',
        title: 'Folding Trowel',
        description: 'Made of durable stainless steel material, this product is compact and portable, making it convenient to carry anywhere.',
        category: 'Equipment',
        price: <IDR price={109000} />,
        images:
        [
            {
                color: 'Silver',
                colorCode: '#C0C0C0',
                image: Trowel,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '10',
        title: 'Trekking Pole',
        description: 'Made from strong and durable aluminum alloy material, this product is ideal for hiking, trekking, and trail running activities. It is also equipped with a speed lock mechanism for easy adjustment.',
        category: 'Equipment',
        price: <IDR price={209000} />,
        images:
        [
            {
                color: 'No Colour',
                colorCode: '#FFFFFF',
                image: Pole,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '11',
        title: 'Nativer Waist',
        description: 'This bag is made of 600D Polyester material with a 200D Recycled Polyester lining. It has a water-repellent finish and a capacity of 4 liters.',
        category: 'Bags',
        price: <IDR price={259000} />,
        images:
        [
            {
                color: 'Brown',
                colorCode: '#A52A2A',
                image: Waist,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '12',
        title: 'Bucket Sling',
        description: 'This bag is made of 330D Taslan Nylon with a 200D Recycled Polyester lining. It has a water-repellent finish and a capacity of 3.5 liters.',
        category: 'Bags',
        price: <IDR price={249000} />,
        images:
        [
            {
                color: 'Cream',
                colorCode: '#FFFDD0',
                image: Sling,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '13',
        title: 'Safar Duffel',
        description: 'This bag is made of polyester and has a capacity of 30 liters. It features a main compartment, a special shoe compartment with ventilation holes, a front pocket, carry handles, and a shoulder strap.',
        category: 'Bags',
        price: <IDR price={549000} />,
        images:
        [
            {
                color: 'Green',
                colorCode: '#008000',
                image: Duffel,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '14',
        title: 'Cabin Luggage',
        description: 'This multifunctional bag can be used as a trolley bag and a backpack. It is made of Polyester 600D and Polyester 5 x 5 Ripstop materials, with a capacity of 36 liters.',
        category: 'Bags',
        price: <IDR price={1250000} />,
        images:
        [
            {
                color: 'Dark Blue',
                colorCode: '#00008B',
                image: Luggage,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '15',
        title: 'Travel Backpack',
        description: 'This 38-liter capacity backpack features a main storage compartment with elastic straps for clothing and internal pockets. It also includes a front pocket at the top of the bag, two front pockets, side pockets for water bottles, and a shoe compartment with ventilation holes.',
        category: 'Bags',
        price: <IDR price={899000} />,
        images:
        [
            {
                color: 'Olive',
                colorCode: '#808000',
                image: Backpack,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '16',
        title: 'Mamba Low',
        description: 'Materials: Upper: Nubuck & Cordura, Midsole: Phylon, Outsole: Rubber. Features Ortholite insole, Vibram midsole, and Vibram grip outsole for improved traction. Nubuck and Cordura materials are waterproof.',
        category: 'Shoes',
        price: <IDR price={1158050} />,
        images:
        [
            {
                color: 'Gray',
                colorCode: '#808080',
                image: MambaLow,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '17',
        title: 'Mamba Mid',
        description: 'Materials: Upper: Nubuck & Cordura, Midsole: Phylon, Outsole: Rubber. Features Ortholite insole, Vibram midsole, and Vibram grip outsole for improved traction. Nubuck and Cordura materials are waterproof.',
        category: 'Shoes',
        price: <IDR price={1262550} />,
        images:
        [
            {
                color: 'Navy',
                colorCode: '#000080',
                image: MambaMid,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '18',
        title: 'Biskra',
        description: 'Material: Upper: Canvas and Suede Leather Outsole: Rubber with Foxing Rubber Features: The upper part of the shoe is crafted from a combination of canvas and suede leather. It includes an Ortholite insole and an anti-slip toe cap for added safety. The outsole is vulcanized for superior grip and durability.',
        category: 'Shoes',
        price: <IDR price={749000} />,
        images:
        [
            {
                color: 'Terracotta',
                colorCode: '#E2725B',
                image: Biskra,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '19',
        title: 'Ras Dashen',
        description: 'Material: Nubuck Leather Upper, Ortholite Footbed, Rubber Outsole. Features: The shoe&apos;s upper is made of durable nubuck leather with a water-resistant canvas blend. The anatomically designed footbed provides comfort and support by molding to the shape of the foot. The Ortholite insole and rubber outsole with toe protection offer stability and traction on the trail.',
        category: 'Shoes',
        price: <IDR price={719000} />,
        images:
        [
            {
                color: 'Khaki',
                colorCode: '#F0E68C',
                image: RasDashen,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '20',
        title: 'Adder Kids',
        description: 'Adder Kids is a low-cut shoe designed for children for light hiking activities and everyday wear. The upper part of the shoe is made of leather and polymesh. It features an Ortholite insole for added comfort and support.',
        category: 'Shoes',
        price: <IDR price={559550} />,
        images:
        [
            {
                color: 'Olive',
                colorCode: '#808000',
                image: Adder,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '21',
        title: 'Aries Parka',
        description: 'This jacket is made from Poly Dobby Ribstop material and includes an adjustable and detachable hood, two chest pockets with flap covers, two side pockets with flap covers, elastic cuffs, an adjustable waist with adjuster, and a front zipper closure with an additional cover layer.',
        category: 'Jackets',
        price: <IDR price={540550} />,
        images:
        [
            {
                color: 'Cream',
                colorCode: '#FFFDD0',
                image: Parka,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '22',
        title: 'Hitrost Coach',
        description: 'Made from 100% cotton material, this jacket features comfortable baby canvas fabric, snap buttons, two side pockets with snap buttons, an inner pocket, elastic cuffs, adjustable drawstring at the bottom, , and a 6.5 cm diameter patch loop panel.',
        category: 'Jackets',
        price: <IDR price={550050} />,
        images:
        [
            {
                color: 'Brown',
                colorCode: '#964B00',
                image: Coach,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '23',
        title: 'Superblock Bomber',
        description: 'Made from 100% polyester material, this jacket features comfortable fabric with Tropic Windblock and Tropic Repellent technologies. It is equipped with padding, Tropic Warm technology, a full zip at the front with a flap at the bottom, two side pockets with zippers, a pocket on the sleeve, and an inner pocket with a zipper. It also includes a riding-themed patch, a ribbed collar, ribbed cuffs, and a ribbed hem.',
        category: 'Jackets',
        price: <IDR price={649000} />,
        images:
        [
            {
                color: 'Dark Green',
                colorCode: '#013220',
                image: Bomber,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '24',
        title: 'Pedauh Windproof',
        description: 'Made from 100% polyester material, this jacket features comfortable fabric with Tropic Windblock and Tropic Repellent technology. It has a full zip with a storm flap at the front, a hood with an adjuster, two side pockets with zippers, elastic cuffs, and an adjuster at the bottom hem of the jacket.',
        category: 'Jackets',
        price: <IDR price={550050} />,
        images:
        [
            {
                color: 'Light Green',
                colorCode: '#90EE90',
                image: Windproof,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '25',
        title: 'Stromble Padded',
        description: 'This jacket is made from 100% Nylon material and includes padding for added warmth. It also features Tropic Warm and Tropic Repellent technologies, a full zip front with a chin guard, elastic cuffs, an adjustable hem, two side zip pockets, an inner chest pocket, and two inner side pockets with Velcro closure.',
        category: 'Jackets',
        price: <IDR price={759000} />,
        images:
        [
            {
                color: 'Gray',
                colorCode: '#808080',
                image: Padded,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '26',
        title: 'Keychain Wallet',
        description: 'This wallet includes a main compartment with two card slots and a snap button for extra security, a zippered pocket for coins, and an O-ring for easy attachment. It is crafted from water-repellent polyester material.',
        category: 'Accessories',
        price: <IDR price={59000} />,
        images:
        [
            {
                color: 'Purple',
                colorCode: '#A020F0',
                image: Wallet,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '27',
        title: 'Ketting Bracelet',
        description: 'This paracord bracelet features the Eigre logo engraved on the aluminum component and is equipped with a convenient buckle for easy opening and closing.',
        category: 'Accessories',
        price: <IDR price={69000} />,
        images:
        [
            {
                color: 'Maroon',
                colorCode: '#800000',
                image: Bracelet,
            },
        ],
        reviews: <Reviews rating={4} totalStars={5} />,
    },
    {
        id: '28',
        title: 'Balkan Ring Belt',
        description: 'This X-Balkan belt is made of 100% polyester webbing with a PVC combination and features a metal ring buckle with a debossed EIGRE logo.',
        category: 'Accessories',
        price: <IDR price={198550} />,
        images:
        [
            {
                color: 'Olive',
                colorCode: '#808000',
                image: Belt,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '29',
        title: 'Glenwood Watch',
        description: 'This watch features a case made of IP silver-plated alloy material and a canvas strap. It has a water resistance of up to 5 ATM (50m) and includes a chronograph movement for stopwatch functionality.',
        category: 'Accessories',
        price: <IDR price={1029000} />,
        images:
        [
            {
                color: 'Silver',
                colorCode: '#C0C0C0',
                image: Watch,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
    {
        id: '30',
        title: 'Windward Aviator',
        description: 'Windward Aviator sunglasses feature TAC Lens-polarized lenses that are designed to reduce glare from reflected light. These sunglasses provide UV400 protection to shield your eyes from UVA and UVB radiation. They also come with a CX Frame case for added convenience.',
        category: 'Accessories',
        price: <IDR price={299000} />,
        images:
        [
            {
                color: 'Black',
                colorCode: '#000000',
                image: Aviator,
            },
        ],
        reviews: <Reviews rating={5} totalStars={5} />,
    },
];