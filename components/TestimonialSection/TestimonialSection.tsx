import React from 'react';
import styles from './TestimonialSection.module.scss';
import TestimonialDot from './TestimonialDot';
import TestimonialSLider from './TestimonialSLider';
const TestimonialSection = () => {
  return (
    <div className={`${styles['testimonial-section']}`}>
      <span className={`${styles['testimonial-shape1']}`}>
        <img
          src={
            'https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/tst-shape1.png'
          }
        />
      </span>
      <span className={`${styles['testimonial-shape2']}`}>
        <img
          src={
            'https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/tst-shape2.png'
          }
        />
      </span>

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
