import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useRef } from 'react';

import menuIcon from '../../svg/bars-solid.svg';
import closeIcon from '../../svg/close.svg';
import styles from './Navbar.module.css';

const Navbar = ({ menuOpen, setMenuOpen }) => {
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
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 }}
        transition={{
          duration: 1,
        }}
      >
        <button
          alt='Menu icon'
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.menuToggle}
        >
          <img src={menuOpen ? closeIcon : menuIcon} alt='Evo ti' />
        </button>
      </motion.div>
    </header>
  );
};

export default Navbar;
