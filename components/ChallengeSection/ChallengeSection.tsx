'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './ChallengeSection.module.scss';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const arr = [
  'Powerful Termand Lineesy Tools For Modern Web',
  'Meet Touch Design Mobile Interfaces New Smas',
  'Powerful Termand Lineesy Tools For Modern Web',
  'Meet Touch Design Mobile Interfaces New Smas',
];

const CONTINUE_MIN = 5;

export default function ChallengeSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [current, setCurrent] = useState(0);

  const [mounted, setMounted] = useState(false);
  const [offsetAfter, setOffsetAfter] = useState(0);

  useEffect(() => setMounted(true), []);

  // đo offset dựa trên slide CUỐI để luôn “đủ đà” trượt tới cuối
  const measureOffset = () => {
    const s = swiperRef.current;
    if (!s || (s as any)?.destroyed) return;

    // lấy slide cuối (đo bằng getBoundingClientRect cho chính xác)
    const slides = s.slides as unknown as HTMLElement[];
    const last = slides?.[slides.length - 1];
    const lastW = last ? last.getBoundingClientRect().width : 0;

    const gap = s.width - lastW;
    setOffsetAfter(Math.max(0, gap));
  };

  useEffect(() => {
    if (!mounted) return;
    const onWinResize = () => requestAnimationFrame(measureOffset);
    window.addEventListener('resize', onWinResize);
    return () => window.removeEventListener('resize', onWinResize);
  }, [mounted]);

  const progress = (current / (arr.length - 1)) * 100;

  const goTo = (idx: number) => {
    setCurrent(idx);
    swiperRef.current?.slideTo(idx);
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
          {mounted && (
            <Swiper
              key={`challenge-${offsetAfter}`}
              slidesPerView="auto"
              spaceBetween={16}
              roundLengths={true}
              slidesOffsetAfter={offsetAfter}
              observeParents={true}
              className={styles['homenest-challenge-swiper']}
              breakpoints={{
                768: { slidesPerView: 'auto' },
              }}
              onSwiper={(sw) => {
                swiperRef.current = sw;
                requestAnimationFrame(measureOffset); // đo lần đầu sau khi mount
              }}
              onSlideChange={(sw) => setCurrent(sw.activeIndex)}
              onTouchEnd={(sw) => {
                const atEnd = sw.isEnd || sw.progress >= 1;
                const diff = sw.touches?.diff ?? 0;
                if (atEnd && diff < -CONTINUE_MIN) {
                  requestAnimationFrame(() => {
                    sw.slideTo(0);
                    setCurrent(0);
                  });
                }
              }}
            >
              {arr.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className={styles['homenest-challenge-slide']}
                  style={{ width: 480 }}
                >
                  <div
                    className={cn(
                      styles['homenest-challenge-item'],
                      current === i && styles['add-bg']
                    )}
                  >
                    <p>Latest News</p>
                    <h3>{item}</h3>
                    <span>by ximsa-wp / April 9, 2022</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <Progress
          value={progress}
          className={styles['homenest-challenge-progress']}
        />

        <nav className={styles['homenest-challenge-nav']}>
          <nav className={styles['homenest-challenge-nav-number']}>
            {arr.map((_, idx) => (
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
