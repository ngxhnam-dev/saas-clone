'use client';
import { cn } from '@/lib/utils';
import { ArrowRight, Dot, House, Laptop, ShieldUser } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ServiceSection.module.scss';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const arr = [
  {
    icon: Laptop,
    title: 'Suppur Fast Clock',
    desc: 'Keep important info handy your notes sync automatic cally to all your devices.',
  },
  {
    icon: ShieldUser,
    title: 'Suppur Fast Clock',
    desc: 'Keep important info handy your notes sync automatic cally to all your devices.',
  },
  {
    icon: House,
    title: 'Suppur Fast Clock',
    desc: 'Keep important info handy your notes sync automatic cally to all your devices.',
  },
  {
    icon: House,
    title: 'Suppur Fast Clock',
    desc: 'Keep important info handy your notes sync automatic cally to all your devices.',
  },
];

const CONTINUE_MIN = 5;

const ServiceSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);

  // ✅ Cách 2: render sau khi mount + đo offset và truyền qua prop
  const [mounted, setMounted] = useState(false);
  const [offsetAfter, setOffsetAfter] = useState(0);

  useEffect(() => setMounted(true), []);

  // đo offset dựa trên slide CUỐI để luôn “đủ đà” trượt tới cuối
  const measureOffset = () => {
    const s = swiperRef.current;
    if (!s || (s as any)?.destroyed) return;
    const slides = s.slides as unknown as HTMLElement[];
    const last = slides?.[slides.length - 1];
    const lastW = last ? last.getBoundingClientRect().width : 0;
    const gap = s.width - lastW;
    setOffsetAfter(Math.max(0, gap));
  };

  // đo lại khi resize
  useEffect(() => {
    if (!mounted) return;
    const onWinResize = () => requestAnimationFrame(measureOffset);
    window.addEventListener('resize', onWinResize);
    return () => window.removeEventListener('resize', onWinResize);
  }, [mounted]);

  const goToItem = (idx: number) => {
    setSelectedIdx(idx);
    swiperRef.current?.slideTo(idx);
  };

  return (
    <div
      className={cn(
        'container section-service',
        styles['homenest-service-section']
      )}
    >
      {/* Top content */}
      <div className={styles['homenest-service-top-content']}>
        <h2>Find Your productivity happy place</h2>
        <p>
          Set up and customize a perfect process for your team no matter the use
          case or how you work
        </p>
      </div>

      {/* Slider (Swiper) */}
      <div className={styles['homenest-service-slide-wrapper']}>
        {mounted && (
          <Swiper
            key={`svc-${offsetAfter}`} // ⚡ re-init khi offset thay đổi
            slidesPerView="auto"
            spaceBetween={30}
            roundLengths={true}
            slidesOffsetAfter={offsetAfter} // ✅ truyền qua prop, KHÔNG mutate params
            className={styles['homenest-service-viewport']}
            onSwiper={(sw) => {
              swiperRef.current = sw;
              requestAnimationFrame(measureOffset); // đo lần đầu
            }}
            onSlideChange={(sw) => setSelectedIdx(sw.activeIndex)}
            onTouchEnd={(sw) => {
              const atEnd = sw.isEnd || sw.progress >= 1;
              const diff = sw.touches?.diff ?? 0; // diff < 0 là kéo sang trái (NEXT)
              if (atEnd && diff < -CONTINUE_MIN) {
                requestAnimationFrame(() => {
                  sw.slideTo(0);
                  setSelectedIdx(0);
                });
              }
            }}
          >
            {arr.map((s, idx) => {
              const active = idx === selectedIdx;
              const Icon = s.icon;
              return (
                <SwiperSlide
                  key={idx}
                  className={styles['homenest-service-slide']}
                  // ⚠️ đặt width cụ thể để phép đo offset chính xác & ổn định
                  style={{ width: 262 }}
                >
                  <div
                    className={cn(
                      styles['homenest-service-card'],
                      active ? styles['is-active'] : styles['is-hover']
                    )}
                    onClick={() => goToItem(idx)}
                  >
                    <Icon size={60} className="mb-3" color={'#0090f9'} />
                    <div>
                      <h5 className={cn(active && styles['active-title'])}>
                        {s.title}
                      </h5>
                      <p className={styles['svc-desc']}>{s.desc}</p>
                      <div className={styles['homenest-service-card-btn']}>
                        <div>
                          <ArrowRight
                            size={16}
                            color="#fff"
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      {/* Bottom content + Dots */}
      <div className={styles['homenest-service-bottom-content']}>
        <div className={styles['homenest-service-dots']}>
          <ul className={styles['homenest-service-dots-list']}>
            {arr.map((_, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => goToItem(idx)}
                  className={cn(
                    styles['homenest-service-dot-btn'],
                    selectedIdx === idx && styles['is-active']
                  )}
                  aria-label={`Go to item ${idx + 1}`}
                  aria-current={selectedIdx === idx ? 'true' : 'false'}
                >
                  <Dot size={60} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Avatars + Text */}
        <div className={styles['homenest-service-img-wrapper']}>
          <div className={cn(styles['homenest-service-img'], 'mb-3')}>
            <div className={styles['homenest-service-img-item']}>
              <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ts3.jpg" />
            </div>
            <div className={styles['homenest-service-img-item']}>
              <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ts2.jpg" />
            </div>
            <div className={styles['homenest-service-img-item']}>
              <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ts1.jpg" />
            </div>
          </div>
          <span className={cn(styles['homenest-service-connect-text'], 'mb-2')}>
            Connected over 1M+
          </span>
        </div>

        {/* CTA */}
        <button className={styles['homenest-service-btn']}>
          <a href="#">
            More Service{' '}
            <ArrowRight
              size={16}
              className={styles['homenest-service-btn-arrow']}
            />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;
