import React from 'react';
import styles from './SetupSection.module.scss';
import MountOnView from '../MountOnView';
import Image from 'next/image';

const SetupSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <MountOnView minHeight={100} rootMargin="-100px 0px">
          <h2
            className={`${styles.fadeInUp} ${styles.animated} ${styles.title}`}
          >
            5-minutes setup
          </h2>
        </MountOnView>

        <div className={styles.content}>
          <MountOnView minHeight={100} rootMargin="-200px 0px">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-2">
                <div
                  className={`${styles.fadeInRight} ${styles.animated} ${styles.item}`}
                >
                  <span>1</span>
                  <p>Install and signup to start</p>
                </div>
              </div>
              <div className={`col-lg-2 ${styles.line}`}></div>
              <div className="col-lg-2">
                <div
                  className={`${styles.fadeInRight} ${styles.animated} ${styles.item}`}
                >
                  <span>2</span>
                  <p>Give required Informations</p>
                </div>
              </div>
              <div className={`col-lg-2 ${styles.line}`}></div>
              <div className="col-lg-2">
                <div
                  className={`${styles.fadeInRight} ${styles.animated} ${styles.item}`}
                >
                  <span>3</span>
                  <p>Enjoy Our Software</p>
                </div>
              </div>
            </div>
          </MountOnView>
        </div>

        <MountOnView minHeight={100} rootMargin="-200px 0px">
          <div
            className={`${styles.fadeInUp} ${styles.animated} ${styles.download}`}
          >
            <p>Download this Software from</p>
            <div className={`${styles['download-btn-wrapper']}`}>
              <Image
                className={`${styles['download-btn']}`}
                alt=""
                width={218}
                height={72}
                src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/app-btn1.png"
              />
              <Image
                className={`${styles['download-btn']}`}
                alt=""
                width={218}
                height={72}
                src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/app-btn2.png"
              />
            </div>
          </div>
        </MountOnView>
      </div>
    </div>
  );
};

export default SetupSection;
