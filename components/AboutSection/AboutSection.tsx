import React from 'react';
import styles from './AboutSection.module.scss';
import MountOnView from '../MountOnView';
import Counter from './Counter';

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
              <img
                alt=""
                src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ab-bg1.png"
              />
            </span>
            <div className={styles.imgWrap}>
              <div
                className={`${styles.fadeInRight} ${styles.animated} ${styles.img1}`}
              >
                <img
                  src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ab1.png"
                  alt=""
                />
              </div>
              <div
                className={`${styles.fadeInLeft} ${styles.animated} ${styles.img2}`}
              >
                <img
                  src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ab2.png"
                  alt=""
                  width={355}
                  height={182}
                />
              </div>
              <div
                className={`${styles.fadeInLeft} ${styles.animated} ${styles.img3}`}
              >
                <img
                  alt=""
                  width={439}
                  height={326}
                  src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ab3.png"
                />
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
                    <img
                      alt=""
                      width={18}
                      height={18}
                      src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ic1.png"
                    />
                  </div>
                  <div className={styles.text}>
                    <h3>Hashtag targeting</h3>
                    <p>Attract relevant users using specific hashtags.</p>
                  </div>
                </div>

                <div
                  className={`${styles.fadeInLeft} ${styles.animated} ${styles.featureItem}`}
                >
                  <div className={`${styles.icon}`}>
                    <img
                      alt=""
                      width={18}
                      height={10}
                      src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ic2.png"
                    />
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
                    <img
                      alt=""
                      width={20}
                      height={16}
                      src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ic3.png"
                    />
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
                    <img
                      alt=""
                      width={25}
                      height={17}
                      src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/ic4.png"
                    />
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
                  <Counter
                    end={100000}
                    duration={2000}
                    suffix="+"
                    format="compact"
                  />
                </div>

                <p>Active Users</p>
              </div>
              <div className={` ${styles.funItem}`}>
                <div className={styles.counter}>
                  <Counter
                    end={20000}
                    duration={2000}
                    suffix="+"
                    format="compact"
                  />
                </div>

                <p>UI Blocks Elements</p>
              </div>
              <div className={` ${styles.funItem}`}>
                <div className={styles.counter}>
                  <Counter
                    end={45000}
                    duration={2000}
                    suffix="+"
                    format="compact"
                  />
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
