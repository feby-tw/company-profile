import React from 'react';
import Image from 'next/image';
import aboutCompany from '../../assets/aboutCompany.png'
import Value1 from '../../assets/value1.png'
import Value2 from '../../assets/value2.png'
import Value3 from '../../assets/value3.png'
import Value4 from '../../assets/value4.png'
import Value5 from '../../assets/value5.png'
import visionMission from '../../assets/visionMission.png'
import Layout from '../layout';

const AboutUsPage: React.FC = () => {
  return (
    <Layout showFooter={false}>
      <div>
        <main>
          <h1>
            ABOUT US
          </h1>

          <div className='flex'>
            <Image
              src={aboutCompany}
              alt='Gambar Bangunan Eiger Indonesia'
            />
            <div>
              <h5>
                ABOUT COMPANY
              </h5>
              <h2>
                MORE THAN JUST OUTDOOR COMPANY
              </h2>
                <p>
                  Eiger Adventure (EIGER) berdiri pada tahun 1989, sebagai sebuah merek penyedia perlengkapan
                  dan peralatan bagi gaya hidup para pegiat alam. Bernaung di bawah PT Eigerindo MPI, EIGER
                  terlahir di Indonesia oleh orang-orang Indonesia dengan tujuan untuk menjadi teman sekaligus
                  pelindung bagi siapapun yang ingin mengeksplorasi alam tropis, khususnya alam Indonesia.
                  EIGER juga memiliki tujuan untuk membawa nama Indonesia dan kualitas produk Indonesia ke
                  kancah internasional, khususnya di industri fashion retail.
                </p>
                <p>
                  Nama EIGER sendiri berasal dari nama sebuah gunung berketinggian 3.970 mdpl yang terletak
                  di Bernese Alps, Swiss, Eropa. Gunung ini memiliki reputasi yang sangat terkenal karena
                  merupakan salah satu gunung tersulit dan berbahaya untuk didaki di seluruh dunia. Salah
                  satu sisinya, yaitu North Face, dianggap sebagai salah satu jalur pendakian yang paling
                  menantang di dunia, karena memiliki permukaan batu es yang curam, jalur pendakian yang
                  panjang dan sering terjadi longsoran batu, serta cuaca yang tidak dapat diprediksi.
                </p>
                <p>
                Sejak tahun 2015, EIGER memfokuskan produk-produknya untuk kegiatan alam di iklim tropis
                yang kini menjadi tagline EIGER, yaitu “Tropical Adventure”. Hal tersebut tercermin di
                tiga kategori produk EIGER, yaitu Mountaineering, Riding, dan Eiger 1989 (Lifestyle).
                </p>
                <p>
                  Saat ini, EIGER sudah tersedia di 137 kabupaten/kota di seluruh Indonesia dengan total
                  237 toko dan memperkuat kehadirannya di dunia daring dengan www.eigeradventure.com atau
                  situs resmi dan halaman e-commerce EIGER.
                </p>
            </div>
          </div>

          <div>
            <h6>
              OUR VISION
            </h6>
            <h2>
              TO BE A BLESSING COMPANY IN LIFESTYLE BUSINESS
            </h2>
              <p>
                Menjadi perusahaan yang memberkati di dalam bisnis gaya hidup
              </p>
            <Image
              src={visionMission}
              alt='Gambar Team Eiger Indonesia di Gunung'
              className='border-b-8 border-red-600'
            />
            <h6>
              OUR MISSION
            </h6>
            <h2>
              WITH THE SPIRIT OF SUSTAINABILITY WE PROVIDE EXPERIENTIAL
              CUSTOMER SATISFACTION IN LIFESTYLE BUSINESSES
            </h2>
              <p>
                Dengan semangat terhadap keberlanjutan, kami menyajikan kepuasan
                yang penuh pengalaman bagi pelanggan dalam bisnis gaya hidup
              </p>
          </div>

          <div>
            <h5>
              OUR VALUES
            </h5>
            <h1>
              SHARE
            </h1>
            <div className='grid grid-cols-5 gap-y-4'>
              <div className='flex flex-col items-center justify-start text-center'>
                <Image src={Value1} alt='Servanthood Symbol' />
                <figcaption>Servanthood</figcaption>
                <p>Melayani sesama dengan sepenuh hati <br /></p>
              </div>
              <div className='flex flex-col items-center justify-start text-center'>
                <Image src={Value2} alt='Harmony Symbol' />
                <figcaption>Harmony</figcaption>
                <p>Saling menciptakan dan menjaga keselarasan untuk mencapai tujuan bersama</p>
              </div>
              <div className='flex flex-col items-center justify-start text-center'>
                <Image src={Value3} alt='Agile Symbol' />
                <figcaption>Agile</figcaption>
                <p>Cerdas, adaptif dan solutif dalam berbagai situasi dan kondisi</p>
              </div>
              <div className='flex flex-col items-center justify-start text-center'>
                <Image src={Value4} alt='Respect Symbol' />
                <figcaption>Respect</figcaption>
                <p>Menghormati dan menghargai sesama dan lingkungan</p>
              </div>
              <div className='flex flex-col items-center justify-start text-center'>
                <Image src={Value5} alt='Empowerment Symbol' />
                <figcaption>Empowerment</figcaption>
                <p>Melakukan pemberdayaan untuk menciptakan pemimpin-pemimpin</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </Layout>
  );
}

export default AboutUsPage;
