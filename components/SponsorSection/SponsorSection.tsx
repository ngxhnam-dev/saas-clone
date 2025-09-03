'use client';
import React from 'react';
import styles from './SponsorSection.module.scss';

const SponsorSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.item}>
        <img src="assets/images/sp1.webp" alt="Sponsor 1" />
      </div>
      <div className={styles.item}>
        <img src="assets/images/sp2.webp" alt="Sponsor 2" />
      </div>
      <div className={styles.item}>
        <img src="assets/images/sp3.webp" alt="Sponsor 3" />
      </div>
      <div className={styles.item}>
        <img src="assets/images/sp4.webp" alt="Sponsor 4" />
      </div>
      <div className={styles.item}>
        <img src="assets/images/sp5.webp" alt="Sponsor 5" />
      </div>
    </div>
  );
};

export default SponsorSection;
