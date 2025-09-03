'use client';
import { cn } from '@/lib/utils';
import { ArrowRight, Dot } from 'lucide-react';
import React, { useRef, useState } from 'react';
import styles from './ServiceSection.module.scss';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const arr = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Suppur Fast Clock',
    desc: 'Keep important info handy your notes sync automatically to all your devices.',
  },
  {
    icon: 'fas fa-user-shield',
    title: 'Secure Protection',
    desc: 'Protect your data with top-level security measures.',
  },
  {
    icon: 'fas fa-laptop-house',
    title: 'Work Anywhere',
    desc: 'Access your workflow from any device seamlessly.',
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud Sync',
    desc: 'Your work is saved and available everywhere.',
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Suppur Fast Clock',
    desc: 'Keep important info handy your notes sync automatically to all your devices.',
  },
  {
    icon: 'fas fa-user-shield',
    title: 'Secure Protection',
    desc: 'Protect your data with top-level security measures.',
  },
  {
    icon: 'fas fa-laptop-house',
    title: 'Work Anywhere',
    desc: 'Access your workflow from any device seamlessly.',
  },
];

const ServiceSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const goToItem = (idx: number) => {
    setSelectedIdx(idx);
    swiperRef.current?.slideTo(idx, 300);
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
        <h2>Find Your Productivity Happy Place</h2>
        <p>
          Set up and customize a perfect process for your team no matter the use
          case or how you work.
        </p>
      </div>

      {/* Slider */}
      <div className={styles['homenest-service-slide-wrapper']}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          roundLengths
          className={styles['homenest-service-viewport']}
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
                setSelectedIdx(0);
              });
            } else {
              setSelectedIdx(idx);
            }
          }}
        >
          {arr.map((s, idx) => {
            const active = idx === selectedIdx;
            return (
              <SwiperSlide
                key={idx}
                className={styles['homenest-service-slide']}
              >
                <div
                  className={cn(
                    styles['homenest-service-card'],
                    active ? styles['is-active'] : styles['is-hover']
                  )}
                  onClick={() => goToItem(idx)}
                >
                  <i
                    className={`mb-3 ${s.icon}`}
                    style={{ fontSize: 40, color: '#0090f9' }}
                    aria-hidden="true"
                  ></i>
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
      </div>

      {/* Bottom content + Dots */}
      <div className={styles['homenest-service-bottom-content']}>
        <div className={styles['homenest-service-dots']}>
          <ul className={styles['homenest-service-dots-list']}>
            {Array.from({ length: 4 }).map((_, idx) => (
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
              <img
                src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ts3.jpg"
                alt=""
                width={55}
                height={55}
              />
            </div>
            <div className={styles['homenest-service-img-item']}>
              <img
                src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ts2.jpg"
                alt=""
                width={55}
                height={55}
              />
            </div>
            <div className={styles['homenest-service-img-item']}>
              <img
                src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ts1.jpg"
                alt=""
                width={55}
                height={55}
              />
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
