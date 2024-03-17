import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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

interface ListNode {
  slide: SlideProps;
  next: ListNode | null;
}

const createLinkedList = (slides: SlideProps[]): ListNode | null => {
  if (slides.length === 0) return null;
  let head: ListNode = { slide: slides[0], next: null };
  let current: ListNode = head;
  for (let i = 1; i < slides.length; i++) {
    current.next = { slide: slides[i], next: null };
    current = current.next;
  }
  current.next = head;
  return head;
};

const Testimonials: React.FC = () => {
  const slides: SlideProps[] = [
    {
      content: '"Selama bekerja di EIGER saya tidak hanya merasakan keseimbangan antara pekerjaan dan kehidupan pribadi, tetapi juga mendapatkan kesempatan untuk tumbuh dan berkembang secara profesional."',
      imageSrc: Testi1,
      altText: 'Gambar Team Member Mulyadi Chandra',
      name: 'Mulyadi Chandra',
      position: 'International Brand Advisor',
    },
    {
      content: '"Saya selalu merasa didukung dan dihargai dalam setiap langkah perjalanan saya di perusahaan ini. Komunikasi yang terbuka dan kolaborasi yang erat antar bagian membuat kami dapat mencapai hasil yang luar biasa. Tidak ada rasa takut untuk berbagi ide dan pendapat, sehingga suasana kerja selalu penuh dengan semangat dan kreativitas."',
      imageSrc: Testi2,
      altText: 'Gambar Team Member Alex G.H. Sackti',
      name: 'Alex G.H. Sackti',
      position: 'Reseller Senior Officer',
    },
    {
      content: '"Saya sangat bersyukur dapat bekerja di Eiger. Ini bukan hanya pekerjaan biasa, tetapi sebuah perjalanan yang menantang dan penuh makna. Eiger adalah tempat di mana saya merasa dihargai, didorong untuk terus bertumbuh, dan memiliki dampak nyata. Saya dengan bangga dapat mengatakan bahwa Eiger adalah Great Place to Work."',
      imageSrc: Testi3,
      altText: 'Gambar Team Member Aprilia Santoso',
      name: 'Aprilia Santoso',
      position: 'Tax Staff',
    },
    {
      content: '"Saya merasakan kehangatan dan kekompakan yang luar biasa selama bekerja di EIGER. Ikatan kami tidak terbatas pada rekan kerja, tetapi sudah seperti sahabat dan keluarga. Setiap kali ada tantangan atau proyek besar, kami saling mendukung dan bekerja sama dengan penuh semangat. Budaya Harmoni membuat atmosfer kerja menjadi hangat dan ramah di mana kami saling menginspirasi dan membantu satu sama lain. Kekompakan ini membuat suasana kerja menjadi sangat menyenangkan."',
      imageSrc: Testi4,
      altText: 'Gambar Team Member Theresia Hadiani',
      name: 'Theresia Hadiani',
      position: 'Business Process & Procedure Officer',
    },
    {
      content: '"Saya merasa bangga dapat bekerja di EIGER. Kami adalah tim yang tidak hanya bekerja keras, tetapi juga memiliki kebersamaan yang luar biasa. Saling menghargai, saling mendukung, dan saling menginspirasi adalah hal-hal yang ada di sini. Saya merasa senang dan bersemangat untuk datang setiap hari, karena tahu bahwa apa yang saya lakukan benar-benar berarti dan bermakna. EIGER memberi kami ruang untuk berkembang, bertumbuh dan meraih kesuksesan bersama, dan hal ini membuat Eiger menjadi Great Place to Work."',
      imageSrc: Testi5,
      altText: 'Gambar Team Member Taryono Wibowo',
      name: 'Taryono Wibowo',
      position: 'Senior Development Engineer',
    },
  ];

  const linkedList = createLinkedList(slides);
  const [currentSlide, setCurrentSlide] = React.useState<ListNode | null>(linkedList);

  const nextSlide = () => {
    if (currentSlide) setCurrentSlide(currentSlide.next);
  };

  const prevSlide = () => {
    if (currentSlide) {
      let prev = currentSlide;
      while (prev.next !== currentSlide) {
        prev = prev.next!;
      }
      setCurrentSlide(prev);
    }
  };

  return (
    <section className='testimonials'>
      <h5>TESTIMONIAL</h5>
      <h2>FUELING OUR COMPANY&apos;S SUCCESS: HEAR OUR EMPLOYEES STORIES!</h2>
      <div className='carousel'>
        <button className='prev-button' onClick={prevSlide}>Previous</button>
        {currentSlide && (
          <div className='slide'>
            <p>{currentSlide.slide.content}</p>
            <Image src={currentSlide.slide.imageSrc} alt={currentSlide.slide.altText} width={300} height={200} />
            <figcaption>
              {currentSlide.slide.name} <br />
              <hr />
              {currentSlide.slide.position}
            </figcaption>
          </div>
        )}
        <button className='next-button' onClick={nextSlide}>Next</button>
      </div>
    </section>
  );
};

const TestimonialsDynamic = dynamic(() => Promise.resolve(Testimonials), {
  ssr: false,
});

export default TestimonialsDynamic;
