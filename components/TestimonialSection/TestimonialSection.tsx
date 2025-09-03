import React from 'react';
import styles from './TestimonialSection.module.scss';
import TestimonialDot from './TestimonialDot';
import TestimonialSLider from './TestimonialSLider';
const TestimonialSection = () => {
  return (
    <div className={`${styles['testimonial-section']}`}>
      <img
        className={`${styles['testimonial-shape1']}`}
        src={'/assets/images/tst-shape1.webp'}
        alt=""
        width={573}
        height={821}
      />
      <img
        className={`${styles['testimonial-shape2']}`}
        alt=""
        width={573}
        height={821}
        src={'/assets/images/tst-shape2.webp'}
      />

      <div className={`${styles['testimonial']} container`}>
        <h1>750K+ HAPPY USERS</h1>
        <div className={styles.rating}>
          <i className="fas fa-solid fa-star"></i>
          <i className="fas fa-solid fa-star"></i>
          <i className="fas fa-solid fa-star"></i>
          <i className="fas fa-solid fa-star"></i>
          <i className="fas fa-solid fa-star"></i>
        </div>

        <div className={`${styles['testimonial-content']}`}>
          <TestimonialDot />
          <TestimonialSLider />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
