import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testi1 from '../assets/testiCarousel1.png';
import Testi2 from '../assets/testiCarousel2.png';
import Testi3 from '../assets/testiCarousel3.png';
import Testi4 from '../assets/testiCarousel4.png';
import Testi5 from '../assets/testiCarousel5.png';

interface SlideProps {
  content: string;
  imageSrc: any;
  altText: string;
  name: string;
  position: string;
}

const slides: SlideProps[] = [
  {
    content: 'Selama bekerja di EIGER saya tidak hanya merasakan keseimbangan antara pekerjaan dan kehidupan pribadi, tetapi juga mendapatkan kesempatan untuk tumbuh dan berkembang secara profesional.',
    imageSrc: Testi1,
    altText: 'Gambar Team Member Mulyadi Chandra',
    name: 'Mulyadi Chandra',
    position: 'International Brand Advisor',
  },
  {
    content: 'Saya selalu merasa didukung dan dihargai dalam setiap langkah perjalanan saya di perusahaan ini. Komunikasi yang terbuka dan kolaborasi yang erat antar bagian membuat kami dapat mencapai hasil yang luar biasa. Tidak ada rasa takut untuk berbagi ide dan pendapat, sehingga suasana kerja selalu penuh dengan semangat dan kreativitas.',
    imageSrc: Testi2,
    altText: 'Gambar Team Member Alex G.H. Sackti',
    name: 'Alex G.H. Sackti',
    position: 'Reseller Senior Officer',
  },
  {
    content: 'Saya sangat bersyukur dapat bekerja di Eiger. Ini bukan hanya pekerjaan biasa, tetapi sebuah perjalanan yang menantang dan penuh makna. Eiger adalah tempat di mana saya merasa dihargai, didorong untuk terus bertumbuh, dan memiliki dampak nyata. Saya dengan bangga dapat mengatakan bahwa Eiger adalah Great Place to Work.',
    imageSrc: Testi3,
    altText: 'Gambar Team Member Aprilia Santoso',
    name: 'Aprilia Santoso',
    position: 'Tax Staff',
  },
  {
    content: 'Saya merasakan kehangatan dan kekompakan yang luar biasa selama bekerja di EIGER. Ikatan kami tidak terbatas pada rekan kerja, tetapi sudah seperti sahabat dan keluarga. Setiap kali ada tantangan atau proyek besar, kami saling mendukung dan bekerja sama dengan penuh semangat. Budaya Harmoni membuat atmosfer kerja menjadi hangat dan ramah di mana kami saling menginspirasi dan membantu satu sama lain. Kekompakan ini membuat suasana kerja menjadi sangat menyenangkan.',
    imageSrc: Testi4,
    altText: 'Gambar Team Member Theresia Hadiani',
    name: 'Theresia Hadiani',
    position: 'Business Process & Procedure Officer',
  },
  {
    content: 'Saya merasa bangga dapat bekerja di EIGER. Kami adalah tim yang tidak hanya bekerja keras, tetapi juga memiliki kebersamaan yang luar biasa. Saling menghargai, saling mendukung, dan saling menginspirasi adalah hal-hal yang ada di sini. Saya merasa senang dan bersemangat untuk datang setiap hari, karena tahu bahwa apa yang saya lakukan benar-benar berarti dan bermakna. EIGER memberi kami ruang untuk berkembang, bertumbuh dan meraih kesuksesan bersama, dan hal ini membuat Eiger menjadi Great Place to Work.',
    imageSrc: Testi5,
    altText: 'Gambar Team Member Taryono Wibowo',
    name: 'Taryono Wibowo',
    position: 'Senior Development Engineer',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className='testimonials'>
      <h5>TESTIMONIAL</h5>
      <h2>FUELING OUR COMPANY&apos;S SUCCESS: HEAR OUR EMPLOYEES STORIES!</h2>
      <Carousel />
    </section>
  );
};

const Slide: React.FC<SlideProps> = ({ content, imageSrc, altText, name, position }) => {
  console.log("Slide Props:", content, imageSrc, altText, name, position);
  return (
    <div>
      <p>{content}</p>
      <Image src={imageSrc} alt={altText} />
      <figcaption>
        {name} <br />
        <hr />
        {position}
      </figcaption>
    </div>
  );
};

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Slide key={`slide${index}`} {...slide} />
      ))}
    </Slider>
  );
};

export default Testimonials;

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Testi1 from '../assets/testiCarousel1.png';
// import Testi2 from '../assets/testiCarousel2.png';
// import Testi3 from '../assets/testiCarousel3.png';
// import Testi4 from '../assets/testiCarousel4.png';
// import Testi5 from '../assets/testiCarousel5.png';

// interface SlideProps {
//   content: string;
//   imageSrc: any;
//   altText: string;
//   name: string;
//   position: string;
// }

// const slides: SlideProps[] = [
//   {
//     content: '"Selama bekerja di EIGER saya tidak hanya merasakan keseimbangan antara pekerjaan dan kehidupan pribadi, tetapi juga mendapatkan kesempatan untuk tumbuh dan berkembang secara profesional."',
//     imageSrc: Testi1,
//     altText: 'Gambar Team Member Mulyadi Chandra',
//     name: 'Mulyadi Chandra',
//     position: 'International Brand Advisor',
//   },
//   {
//     content: '"Saya selalu merasa didukung dan dihargai dalam setiap langkah perjalanan saya di perusahaan ini. Komunikasi yang terbuka dan kolaborasi yang erat antar bagian membuat kami dapat mencapai hasil yang luar biasa. Tidak ada rasa takut untuk berbagi ide dan pendapat, sehingga suasana kerja selalu penuh dengan semangat dan kreativitas."',
//     imageSrc: Testi2,
//     altText: 'Gambar Team Member Alex G.H. Sackti',
//     name: 'Alex G.H. Sackti',
//     position: 'Reseller Senior Officer',
//   },
//   {
//     content: '"Saya sangat bersyukur dapat bekerja di Eiger. Ini bukan hanya pekerjaan biasa, tetapi sebuah perjalanan yang menantang dan penuh makna. Eiger adalah tempat di mana saya merasa dihargai, didorong untuk terus bertumbuh, dan memiliki dampak nyata. Saya dengan bangga dapat mengatakan bahwa Eiger adalah Great Place to Work."',
//     imageSrc: Testi3,
//     altText: 'Gambar Team Member Aprilia Santoso',
//     name: 'Aprilia Santoso',
//     position: 'Tax Staff',
//   },
//   {
//     content: '"Saya merasakan kehangatan dan kekompakan yang luar biasa selama bekerja di EIGER. Ikatan kami tidak terbatas pada rekan kerja, tetapi sudah seperti sahabat dan keluarga. Setiap kali ada tantangan atau proyek besar, kami saling mendukung dan bekerja sama dengan penuh semangat. Budaya Harmoni membuat atmosfer kerja menjadi hangat dan ramah di mana kami saling menginspirasi dan membantu satu sama lain. Kekompakan ini membuat suasana kerja menjadi sangat menyenangkan."',
//     imageSrc: Testi4,
//     altText: 'Gambar Team Member Theresia Hadiani',
//     name: 'Theresia Hadiani',
//     position: 'Business Process & Procedure Officer',
//   },
//   {
//     content: '"Saya merasa bangga dapat bekerja di EIGER. Kami adalah tim yang tidak hanya bekerja keras, tetapi juga memiliki kebersamaan yang luar biasa. Saling menghargai, saling mendukung, dan saling menginspirasi adalah hal-hal yang ada di sini. Saya merasa senang dan bersemangat untuk datang setiap hari, karena tahu bahwa apa yang saya lakukan benar-benar berarti dan bermakna. EIGER memberi kami ruang untuk berkembang, bertumbuh dan meraih kesuksesan bersama, dan hal ini membuat Eiger menjadi Great Place to Work."',
//     imageSrc: Testi5,
//     altText: 'Gambar Team Member Taryono Wibowo',
//     name: 'Taryono Wibowo',
//     position: 'Senior Development Engineer',
//   },
// ];

// const Testimonial: React.FC<{ slides: SlideProps[] }> = ({ slides }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//   };

//   return (
//     <section className='testimonials'>
//       <h5>TESTIMONIAL</h5>
//       <h2>FUELING OUR COMPANY&apos;S SUCCESS: HEAR OUR EMPLOYEES STORIES!</h2>
//       <div className='carousel'>
//         <button className='prev-button' onClick={prevSlide}>Previous</button>
//         <div className='slide'>
//           <p>{slides[activeIndex].content}</p>
//           <Image src={slides[activeIndex].imageSrc} alt={slides[activeIndex].altText} width={300} height={200} />
//           <figcaption>
//             {slides[activeIndex].name} <br />
//             <hr />
//             {slides[activeIndex].position}
//           </figcaption>
//         </div>
//         <button className='next-button' onClick={nextSlide}>Next</button>
//       </div>
//     </section>
//   );
// };

// const Testimonials: React.FC = () => {
//   return <Testimonial slides={slides} />;
// };

// export default Testimonials;

