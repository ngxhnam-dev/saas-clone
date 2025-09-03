import { ArrowRight, Check } from 'lucide-react';
import styles from './BannerSection.module.scss';
import MountOnView from '../MountOnView';

const BannerSection = () => {
  return (
    <>
      <div className={styles.homenestBanner}>
        <span className={`${styles.shape1} `}>
          <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sh1.png" />
        </span>
        <span className={`${styles.shape2}`}>
          <img src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/sh2.png" />
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
            <img
              src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/banner-v1.png"
              alt=""
            />
          </div>
          <div className={`${styles.img2} ${styles.fadeInUp}`}>
            <img
              src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/banner-v2.png"
              alt=""
            />
          </div>
          <div className={`${styles.img3} ${styles.fadeInUp}`}>
            <img
              src="https://themexriver.com/wp/ximsa/saas/wp-content/uploads/sites/10/2022/04/banner-v3.png"
              alt=""
            />
          </div>
        </div>
      </MountOnView>
    </>
  );
};

export default BannerSection;
