import React from 'react';
import styles from './TestimonialSection.module.scss';
import Image from 'next/image';

type TestimonialCardProps = {
  avatar: string;
  quote: string;
  name: string;
  role: string;
};
const TestimonialCard = ({
  avatar,
  quote,
  name,
  role,
}: TestimonialCardProps) => {
  return (
    <div className={`${styles['testimonial-card']}`}>
      <span className={`${styles['testimonial-card-avatar']}`}>
        <Image alt={name} src={avatar} width={160} height={160} quality={100} />
      </span>
      <div className={`${styles['testimonial-card-content']}`}>
        <p>{quote}</p>
        <span>{name}</span>
        <p>{role}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
