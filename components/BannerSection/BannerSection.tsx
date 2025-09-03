import { ArrowRight, Check } from 'lucide-react';
import styles from './BannerSection.module.scss';
import MountOnView from '../MountOnView';

const BannerSection = () => {
  return (
    <>
      <div className={styles.homenestBanner}>
        <span className={`${styles.shape1} `}>
          <img src="/assets/images/sh1.webp" />
        </span>
        <span className={`${styles.shape2}`}>
          <img src="assets/images/sh2.webp" />
        </span>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>
              Grow your Business Real, Organic & Automatic
            </h1>
            <p className={styles.desc}>
              Attract real and relevant followers to grow your Instagram
              audience. Get more Instagram followers, likes, comments, traffic &
              leads.
            </p>
            <a href="#" className={styles.btn}>
              <span>
                Try it for free
                <ArrowRight className={styles.arrow} size={16} />
              </span>
            </a>
            <div className={styles.list}>
              <p>
                <Check size={16} />
                7-day free trial
              </p>
              <p>
                <Check size={16} />
                No credit card required
              </p>
              <p>
                <Check size={16} />
                Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      <MountOnView
        minHeight={0}
        rootMargin="100px 0px"
        requireScrollOnSmall={false}
        smallMaxWidth={1024}
      >
        <div className={`${styles.imgWrap}`}>
          <div className={`${styles.img1} ${styles.zoomIn}`}>
            <img src="/assets/images/banner-v1.webp" alt="" />
          </div>
          <div className={`${styles.img2} ${styles.fadeInUp}`}>
            <img src="/assets/images/banner-v2.webp" alt="" />
          </div>
          <div className={`${styles.img3} ${styles.fadeInUp}`}>
            <img src="/assets/images/banner-v3.webp" alt="" />
          </div>
        </div>
      </MountOnView>
    </>
  );
};

export default BannerSection;
