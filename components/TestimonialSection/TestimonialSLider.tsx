'use client';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './TestimonialSection.module.scss';
import TestimonialCard from './TestimonialCard';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const userData = [
  {
    avatar: '/assets/images/tf1.webp',
    quote:
      '" Digital marketing can be very complex, but our team is here to help you through this process and get tangible results. We work with exceptional companies and make it our mission to help them succeed. We are equipped with all the skillsets."',
    name: 'Tony Stark',
    role: 'Iron Man',
  },
  {
    avatar: '/assets/images/tf3.webp',
    quote:
      '" Digital marketing can be very complex, but our team is here to help you through this process and get tangible results. We work with exceptional companies and make it our mission to help them succeed. We are equipped with all the skillsets."',
    name: 'Peter Parker',
    role: 'Iron Man',
  },
  {
    avatar: '/assets/images/tf2.webp',
    quote:
      '" Digital marketing can be very complex, but our team is here to help you through this process and get tangible results. We work with exceptional companies and make it our mission to help them succeed. We are equipped with all the skillsets."',
    name: 'Steve Roger',
    role: 'Captain America',
  },
  {
    avatar: '/assets/images/tf4.webp',
    quote:
      '" Digital marketing can be very complex, but our team is here to help you through this process and get tangible results. We work with exceptional companies and make it our mission to help them succeed. We are equipped with all the skillsets."',
    name: 'Wanda Maximoff',
    role: 'Scarlet Witch',
  },
  {
    avatar: '/assets/images/tf5.webp',
    quote:
      '" Digital marketing can be very complex, but our team is here to help you through this process and get tangible results. We work with exceptional companies and make it our mission to help them succeed. We are equipped with all the skillsets."',
    name: 'Steven Strange',
    role: 'Doctor Strange',
  },
  {
    avatar: '/assets/images/tf6.webp',
    quote:
      '" Digital marketing can be very complex, but our team is here to help you through this process and get tangible results. We work with exceptional companies and make it our mission to help them succeed. We are equipped with all the skillsets."',
    name: 'Bruce Banner',
    role: 'Green Hulk',
  },
];

const TestimonialSlider = () => {
  const swiperRef = useRef<any>(null);

  const goPrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
    swiperRef.current.autoplay?.start(); // giữ autoplay tiếp tục
  };

  const goNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
    swiperRef.current.autoplay?.start();
  };

  return (
    <div className={styles['testimonial-slide']}>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ maxWidth: '620px' }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {userData.map((user) => (
          <SwiperSlide key={user.name} style={{ maxWidth: '620px' }}>
            <TestimonialCard {...user} goPrev={goPrev} goNext={goNext} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination custom bằng avatar */}
      <div className={styles['testimonial-pagination']}>
        {userData.map((data, index) => (
          <button
            key={data.name}
            type="button"
            onClick={() => swiperRef.current?.slideToLoop(index)}
            // slideToLoop đảm bảo đi đúng slide kể cả khi loop = true
          >
            <img src={data.avatar} alt={data.name} className="rounded-full" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
