import React from 'react';

import styles from './Menu.module.css';

const Menu = ({ menuOpen, scrollToAnimation, scrollToEnvironment }) => {
  return (
    <div className={`${styles.menu} ${menuOpen ? '' : 'display-none'}`}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <button onClick={scrollToAnimation} className={styles.linkItem}>
            Character animaton
          </button>
        </li>
        <li className={styles.item}>
          <button onClick={scrollToEnvironment} className={styles.linkItem}>
            Enviornment modeling
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
