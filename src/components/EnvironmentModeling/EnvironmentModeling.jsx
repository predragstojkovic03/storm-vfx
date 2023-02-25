import React from 'react';

import image from '../../images/2.jpg';

import { motion } from 'framer-motion';

const EnvironmentModeling = ({ styles }) => {
  return (
    <>
      <motion.img
        src={image}
        alt='Image...'
        class={styles.image}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 }}
        transition={{
          duration: 1,
        }}
      />
      <div class={styles.text}>
        <h2 class={styles.heading}>Enviorment modeling</h2>
        <h2 class={styles.subHeading}>presentation</h2>
        <p class='lead'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
          numquam amet aspernatur earum consequatur iste quaerat quae laborum
          totam repellendus modi sunt distinctio voluptatum aliquam error
          quibusdam est vel nobis!
        </p>
      </div>
    </>
  );
};

export default EnvironmentModeling;
