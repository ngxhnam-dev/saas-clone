import React from 'react';
import styles from './AboutSection.module.scss';
import MountOnView from '../MountOnView';

const AboutSection = () => {
  return (
    <div className={`${styles.section} container`}>
      <div className={`row ${styles.content}`}>
        {/* Left images */}
        <div className="col-lg-5">
          <MountOnView
            minHeight={10}
            rootMargin="-100px 0px"
            requireScrollOnSmall={true}
            smallMaxWidth={1024}
            scrollThresholdPx={32}
          >
            <span
              className={`${styles.shape} ${styles.fadeInLeft} ${styles.animated}`}
            >
              <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ab-bg1.png" />
            </span>
            <div className={styles.imgWrap}>
              <div
                className={`${styles.fadeInRight} ${styles.animated} ${styles.img1}`}
              >
                <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ab1.png" />
              </div>
              <div
                className={`${styles.fadeInLeft} ${styles.animated} ${styles.img2}`}
              >
                <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ab2.png" />
              </div>
              <div
                className={`${styles.fadeInLeft} ${styles.animated} ${styles.img3}`}
              >
                <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ab3.png" />
              </div>
            </div>
          </MountOnView>
        </div>

        {/* Right texts */}
        <div className={`col-lg-7 ${styles.rightContent}`}>
          <MountOnView
            minHeight={10}
            rootMargin="-100px 0px"
            requireScrollOnSmall={true}
            smallMaxWidth={1024}
            scrollThresholdPx={32}
          >
            <div className={styles.textWrap}>
              <div
                className={`${styles.fadeInUp} ${styles.animated} ${styles.textTitle}`}
              >
                <h2>We believe the right form makes all the difference.</h2>
              </div>

              <div className={`container ${styles.featureWrap}`}>
                <div
                  className={`${styles.fadeInRight} ${styles.animated} ${styles.featureItem}`}
                >
                  <div className={`${styles.icon}`}>
                    <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ic1.png" />
                  </div>
                  <div className={styles.text}>
                    <h3>Hashtag targetting</h3>
                    <p>Attract relevant users using specific hashtags.</p>
                  </div>
                </div>

                <div
                  className={`${styles.fadeInLeft} ${styles.animated} ${styles.featureItem}`}
                >
                  <div className={`${styles.icon}`}>
                    <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ic2.png" />
                  </div>
                  <div className={styles.text}>
                    <h3>Track Growth</h3>
                    <p>Attract relevant users using specific hashtags.</p>
                  </div>
                </div>

                <div
                  className={`${styles.fadeInRight} ${styles.animated} ${styles.featureItem}`}
                >
                  <div className={`${styles.icon}`}>
                    <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ic3.png" />
                  </div>
                  <div className={styles.text}>
                    <h3>Track Activity</h3>
                    <p>Attract relevant users using specific hashtags.</p>
                  </div>
                </div>

                <div
                  className={`${styles.fadeInLeft} ${styles.animated} ${styles.featureItem}`}
                >
                  <div
                    className={`${styles.icon} d-flex justify-content-center align-items-center`}
                  >
                    <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ic4.png" />
                  </div>
                  <div className={styles.text}>
                    <h3>Mass Viewing</h3>
                    <p>Attract relevant users using specific hashtags.</p>
                  </div>
                </div>
              </div>
            </div>
          </MountOnView>

          {/* Fun facts */}
          <MountOnView
            minHeight={300}
            rootMargin="-100px 0px"
            requireScrollOnSmall={true}
            smallMaxWidth={1024}
            scrollThresholdPx={32}
          >
            <div
              className={`${styles.funWrap} ${styles.fadeInDown} ${styles.animated}`}
            >
              <div className={` ${styles.funItem}`}>
                <div className={styles.counter}>
                  <h2 className="counter">250K+</h2>
                </div>
                <p>Active Users</p>
              </div>
              <div className={` ${styles.funItem}`}>
                <div className={styles.counter}>
                  <h2 className="counter">20K+</h2>
                </div>
                <p>UI Blocks Elements</p>
              </div>
              <div className={` ${styles.funItem}`}>
                <div className={styles.counter}>
                  <h2 className="counter">45K+</h2>
                </div>
                <p>Active Team</p>
              </div>
            </div>
          </MountOnView>
        </div>
        {/* end col-lg-7 */}
      </div>
    </div>
  );
};

export default AboutSection;
