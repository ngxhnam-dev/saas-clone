import React from 'react';
import styles from './ContactSection.module.scss';
import MountOnView from '../MountOnView';
const ContactSection = () => {
  return (
    <div className={`${styles['contact-section']} container`}>
      <div className={`${styles['contact-help']}`}>
        <MountOnView minHeight={100} rootMargin="-200px 0px">
          <div className={`${styles['contact-help-item']}`}>
            <span>
              <img
                src={'/assets/images/ic5.webp'}
                alt=""
                width={47}
                height={51}
              />
            </span>
            <div>
              <h1>Help Center</h1>
              <p>
                Our clients gain between +200 and +1000 Instagram followers per
                month thanks to our service. Want to learn more about the
                process?
              </p>
              <a href="#">
                Our Easy Step{' '}
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </MountOnView>
        <MountOnView minHeight={100} rootMargin="-200px 0px">
          <div className={`${styles['contact-help-item']}`}>
            <span>
              <img
                src={'/assets/images/ic6.webp'}
                alt=""
                width={47}
                height={51}
              />
            </span>
            <div>
              <h1>How does it work?</h1>
              <p>
                Our clients gain between +200 and +1000 Instagram followers per
                month thanks to our service. Want to learn more about the
                process?
              </p>
              <a href="#">
                Send Us Mail{' '}
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </MountOnView>
      </div>
      <div className={`${styles['contact-content']}`}>
        <h2>Start growing your Instagram today</h2>
        <form className={`${styles['contact-form']}`}>
          <input type="email" required placeholder="Enter Email Address" />
          <button type="submit">
            <span>
              Subcribe <i className="fa fa-angle-right"></i>
            </span>
          </button>
        </form>
        <div className={`${styles['contact-sub-content']}`}>
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>7-day free trial
          </span>
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>No credit card
            required
          </span>
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>Cancel any time
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
