'use client';
import React from 'react';
import styles from './SponsorSection.module.scss';

const SponsorSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.item}>
        <img
          src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sp1.png"
          alt="Sponsor 1"
        />
      </div>
      <div className={styles.item}>
        <img
          src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sp2.png"
          alt="Sponsor 2"
        />
      </div>
      <div className={styles.item}>
        <img
          src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sp3.png"
          alt="Sponsor 3"
        />
      </div>
      <div className={styles.item}>
        <img
          src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sp4.png"
          alt="Sponsor 4"
        />
      </div>
      <div className={styles.item}>
        <img
          src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sp5.png"
          alt="Sponsor 5"
        />
      </div>
    </div>
  );
};

export default SponsorSection;
