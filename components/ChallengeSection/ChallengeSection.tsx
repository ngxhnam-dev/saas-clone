'use client';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';
import styles from './ChallengeSection.module.scss';

/* Swiper */
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const arr = [
  'Powerful Termand Lineesy Tools For Modern Web',
  'Meet Touch Design Mobile Interfaces New Smas',
  'Powerful Termand Lineesy Tools For Modern Web',
  'Meet Touch Design Mobile Interfaces New Smas',
  'Powerful Termand Lineesy Tools For Modern Web',
  'Meet Touch Design Mobile Interfaces New Smas',
];

export default function ChallengeSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [current, setCurrent] = useState(0);

  const progress = (current / (arr.length - 1 - 2)) * 100;

  const goTo = (idx: number) => {
    setCurrent(idx);
    swiperRef.current?.slideToLoop(idx);
  };
  const prev = () => swiperRef.current?.slidePrev();
  const next = () => {
    const sw = swiperRef.current;
    if (!sw) return;
    if (sw.isEnd) {
      sw.slideTo(0);
      setCurrent(0);
    } else {
      sw.slideNext();
    }
  };

  return (
    <div className={styles['homenest-challenge-section']}>
      <div className="container">
        <div className={styles['homenest-challenge-title']}>
          <h2>Tackling big customer lifecycle challenges</h2>
          <p>
            Set up and customize a perfect process for your team no matter the
            use case or how you work. Our guarantee means we’re confident you’ll
            see value from the start.
          </p>
        </div>

        {/* Swiper viewport */}
        <div className={styles['homenest-challenge-viewport']}>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={16}
            roundLengths
            className={styles['homenest-challenge-swiper']}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: true, // mobile: full + center
              },
              663: {
                slidesPerView: 'auto',
                centeredSlides: false, // desktop: auto
              },
            }}
            onSwiper={(sw) => {
              swiperRef.current = sw;
            }}
            onSlideChange={(sw) => {
              const idx = sw.realIndex;
              // console.log(idx);
              if (idx >= 4 || sw.isEnd) {
                // Khi đến slide 5 thì quay về slide 1
                requestAnimationFrame(() => {
                  sw.slideTo(0, 300);
                  setCurrent(0);
                });
              } else {
                setCurrent(idx);
              }
            }}
          >
            {arr.map((item, i) => (
              <SwiperSlide
                key={i}
                className={styles['homenest-challenge-slide']}
              >
                <div
                  className={cn(
                    styles['homenest-challenge-item'],
                    current === i && styles['add-bg']
                  )}
                >
                  <p>Latest News</p>
                  <h3>
                    <a href="#">{item}</a>
                  </h3>
                  <span>by ximsa-wp / April 9, 2022</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Progress */}
        <div className={styles['homenest-challenge-progress']}>
          <div className={styles['homenest-challenge-progress-track']}>
            <div
              className={styles['homenest-challenge-progress-value']}
              style={{ width: `${progress}%` }}
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={1}
              role="progressbar"
            />
          </div>
        </div>

        <nav className={styles['homenest-challenge-nav']}>
          <nav className={styles['homenest-challenge-nav-number']}>
            {Array.from({ length: 4 }).map((_, idx) => (
              <span
                key={idx}
                onClick={() => goTo(idx)}
                className={cn(
                  'cursor-pointer',
                  idx === current && styles['toBig']
                )}
              >
                {idx + 1} {idx !== current && ' /'}
              </span>
            ))}
          </nav>
          <nav className={styles['homenest-challenge-nav-toggle']}>
            <div
              onClick={prev}
              className={styles['homenest-challenge-nav-toogle-button']}
            >
              <ArrowLeft
                size={20}
                className={styles['homenest-challenge-nav-toogle-button-arrow']}
              />
            </div>
            <div
              onClick={next}
              className={styles['homenest-challenge-nav-toogle-button']}
            >
              <ArrowRight
                size={20}
                className={styles['homenest-challenge-nav-toogle-button-arrow']}
              />
            </div>
          </nav>
        </nav>
      </div>
    </div>
  );
}
