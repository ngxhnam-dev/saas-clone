import { ArrowRight, Check } from 'lucide-react';
import React from 'react';
import styles from './FeatureSection.module.scss';
import MountOnView from '../MountOnView';

const FeatureSection = () => {
  return (
    <div className={styles.section}>
      <span className={`${styles.shape1} position-absolute`}>
        <img
          style={{ width: '60%' }}
          src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sh3.png"
        />
      </span>

      <MountOnView minHeight={300} rootMargin="-300px 0px">
        <div className="container">
          <div className="row">
            {/* Left image */}
            <div className="col-lg-6">
              <div className={`${styles.imgWrap} position-relative`}>
                <span
                  className={`${styles.img1} zoomIn animated position-absolute`}
                >
                  <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft2.png" />
                </span>
                <span
                  className={`${styles.img2} fadeInLeft animated position-absolute`}
                >
                  <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft1.png" />
                </span>
                <span
                  className={`${styles.img3} fadeInDown animated position-absolute`}
                >
                  <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft3.png" />
                </span>
                <span className={`${styles.img4} position-absolute`}>
                  <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft4.png" />
                </span>
                <span className={`${styles.img5} position-absolute`}>
                  <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft5.png" />
                </span>
                <span className={`${styles.img6} position-absolute`}>
                  <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft6.png" />
                </span>
                <span className={`${styles.img7} position-absolute`}>
                  <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft9.png" />
                </span>
              </div>
            </div>

            {/* Right text */}
            <div className={`col-lg-6`}>
              <div className={`${styles.textWrap}`}>
                <h2>Get real Instagram followers faster</h2>
                <p>
                  Our Instagram growth service helps you attract new followers
                  who are interested in your content. Grow your audience, expand
                  your reach, and raise more your awareness.
                </p>
                <div>
                  <Check size={16} color="#397fe0" />{' '}
                  <span>Only real & targeted new followers</span>
                </div>
                <div className={styles.btnRow}>
                  <a href="#">
                    Start Now
                    <ArrowRight size={14} className={styles.btnArrow} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MountOnView>

      <div className={styles.spacing}></div>

      <div className="container position-relative">
        <span className={`${styles.shape2} position-absolute`}>
          <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sh4.png" />
        </span>
        <span className={`${styles.shape3} position-absolute`}>
          <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sh6.png" />
        </span>
      </div>
      <MountOnView minHeight={300} rootMargin="-300px 0px">
        <div className={`row ${styles.reverse}`}>
          {/* Left text */}
          <div className="col-lg-6">
            <div className={styles.textWrap}>
              <h2>Get real YouTube Subscriber faster</h2>
              <p>
                Our Instagram growth service helps you attract new followers who
                are interested in your content. Grow your audience, expand your
                reach, raise more your awareness.
              </p>
              <div>
                <Check size={16} color="#397fe0" />{' '}
                <span>Only real & targeted new followers</span>
              </div>
              <div className={styles.btnRow}>
                <a href="#">
                  Start Now
                  <ArrowRight size={14} className={styles.btnArrow} />
                </a>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="col-lg-6">
            <div className={`${styles.imgWrap} position-relative`}>
              <span
                className={`${styles.img1} zoomIn animated position-absolute`}
              >
                <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft8.png" />
              </span>
              <span
                className={`${styles.img2} fadeInLeft animated position-absolute`}
              >
                <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft7.png" />
              </span>
              <span
                className={`${styles.img3} fadeInDown animated position-absolute`}
              >
                <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft11.png" />
              </span>
              <span className={`${styles.img4} position-absolute`}>
                <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft10.png" />
              </span>
              <span className={`${styles.img7} position-absolute`}>
                <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ft9.png" />
              </span>
            </div>
          </div>
        </div>
      </MountOnView>
    </div>
  );
};

export default FeatureSection;
