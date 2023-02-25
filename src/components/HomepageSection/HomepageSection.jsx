import React from 'react';

import styles from './HomepageSection.module.css';

const HomepageSection = ({
  theme = 'light',
  flexDirection = 'row',
  children,
}) => {
  const getTheme = () => (theme === 'light' ? styles.light : styles.dark);

  const getFlexDirection = () =>
    flexDirection === 'row' ? 'row' : 'row-reverse';

  return (
    <section
      className={`flex container space-between align-items-center h-100vh ${getTheme()} ${getFlexDirection()}`}
    >
      {React.cloneElement(children, { styles: styles })}
    </section>
  );
};

export default HomepageSection;
