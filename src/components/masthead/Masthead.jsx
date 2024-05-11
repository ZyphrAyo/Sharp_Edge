// Import necessary dependencies
import React from 'react';
import { FaDigitalTachograph } from 'react-icons/fa';
import { ImHammer2 } from 'react-icons/im';
import { GoLaw } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Masthead.css';

const Masthead = () => {
  // Array of image links
  const images = [
    'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://i.postimg.cc/bwvHpG6m/pexels-dominika-roseclay-905163.jpg',
    'https://i.postimg.cc/L8XP38rh/pexels-sora-shimazaki-5668473.jpg',
  ];

  return (
    <header className="masthead" id='home'>
      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSwiper"
        style={{ position: 'absolute', top: 0, height: '90vh', width: '100%', zIndex: 1,
        left: 0,
        backgroundSize: 'cover', }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content">
              <img src={image} alt={`Slide ${index + 1}`} className="swiper-image" />
              <div className="gradient-overlay"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="overlay-section" style={{ zIndex: 2 }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="masthead-heading text-uppercase" >Success for your<br/> Business...</div>
          <div className="butt">
            <a className="btn btn-primary btn-xl text-uppercase" href="#digitalmarketing" data-text="Digital Marketing">
              <div className='svgfa'><FaDigitalTachograph /></div>
            </a>
            <a
              className="btn btn-primary btn-xl text-uppercase always-open"
              href="#charteredaccountant"
              data-text="Chartered Accountant"
            >
              <div className='svgfa'><ImHammer2 /></div>
            </a>
            <a className="btn btn-primary btn-xl text-uppercase" href="#legalservices" data-text="Legal Services">
              <div className='svgfa'><GoLaw /></div>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Masthead;
