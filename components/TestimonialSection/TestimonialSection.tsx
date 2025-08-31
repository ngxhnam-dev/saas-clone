import React from 'react';
import styles from './TestimonialSection.module.scss';
import TestimonialDot from './TestimonialDot';
import TestimonialSLider from './TestimonialSLider';
import Image from 'next/image';
const TestimonialSection = () => {
  return (
    <div className={`${styles['testimonial-section']}`}>
      <Image
        className={`${styles['testimonial-shape1']}`}
        src={
          'https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/tst-shape1.png'
        }
        alt=""
        width={573}
        height={821}
      />
      <Image
        className={`${styles['testimonial-shape2']}`}
        alt=""
        width={573}
        height={821}
        src={
          'https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/tst-shape2.png'
        }
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
