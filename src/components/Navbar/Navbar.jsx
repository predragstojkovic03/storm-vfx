import React, { useRef } from 'react';

import styles from './Navbar.module.css';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import menuIcon from '../../svg/bars-solid.svg';

const Navbar = () => {
  const { scrollY } = useScroll();
  const navbarRef = useRef();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) navbarRef.current.classList.add(styles.scrolled);
    else navbarRef.current.classList.remove(styles.scrolled);
  });

  return (
    <header ref={navbarRef} className={`container ${styles.navbar}`}>
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        transition={{
          duration: 1,
        }}
        className={styles.logo}
      >
        Storm
      </motion.h2>
      <motion.img
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 }}
        transition={{
          duration: 1,
        }}
        src={menuIcon}
        alt='Menu icon'
        className={styles.menuToggle}
      />
    </header>
  );
};

export default Navbar;
