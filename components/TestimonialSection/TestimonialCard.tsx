import React from 'react';
import styles from './TestimonialSection.module.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type TestimonialCardProps = {
  avatar: string;
  quote: string;
  name: string;
  role: string;
  goPrev: () => void;
  goNext: () => void;
};
const TestimonialCard = ({
  avatar,
  quote,
  name,
  role,
  goPrev,
  goNext,
}: TestimonialCardProps) => {
  return (
    <div className={`${styles['testimonial-card']}`}>
      <span className={`${styles['testimonial-card-avatar']}`}>
        <img alt={name} src={avatar} />
      </span>
      <div className={`${styles['testimonial-card-content']}`}>
        <p>{quote}</p>
        <span>{name}</span>
        <p>{role}</p>
        <div className={styles['testimonial-pagination-arrow-btn']}>
          <span onClick={() => goPrev()}>
            <ArrowLeft
              size={20}
              className={styles['testimonial-pagination-arrow']}
            />
          </span>
          <span onClick={() => goNext()}>
            <ArrowRight
              size={20}
              className={styles['testimonial-pagination-arrow']}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
