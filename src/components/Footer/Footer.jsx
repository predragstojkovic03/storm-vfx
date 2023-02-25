import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <h1 className={styles.logo}>
          <a href='/#/'>Storm</a>
        </h1>
        <hr className={styles.gap} />
        <div className='address-and-phone'>
          <p className={styles.info}>Ustanička 102</p>
          <p className={styles.info}>+381 123456</p>
        </div>
        <hr className={styles.gap} />
        <div className={styles.socialMedia}>
          <a href='https://www.facebook.com' className={styles.socialMediaIcon}>
            <FaFacebookF />
          </a>
          <a href='https://www.linkedin.com' className={styles.socialMediaIcon}>
            <FaLinkedinIn />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy;
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
