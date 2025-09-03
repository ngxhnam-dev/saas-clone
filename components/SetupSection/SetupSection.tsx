import React from 'react';
import styles from './SetupSection.module.scss';
import MountOnView from '../MountOnView';

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
              <img
                className={`${styles['download-btn']}`}
                alt=""
                width={218}
                height={72}
                src="/assets/images/app-btn1.webp"
              />
              <img
                className={`${styles['download-btn']}`}
                alt=""
                width={218}
                height={72}
                src="/assets/images/app-btn2.webp"
              />
            </div>
          </div>
        </MountOnView>
      </div>
    </div>
  );
};

export default SetupSection;
