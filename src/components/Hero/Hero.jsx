import React from 'react';

import { motion } from 'framer-motion';
import video from '../../videos/hero_video_compressed.mp4';
import styles from './Hero.module.css';

const Hero = ({ scrollToAnimation }) => {
  return (
    <>
      <div className={styles.videoOverlay}></div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={styles.videoContainer}
      >
        <video autoPlay={true} muted={true} loop={true} id={styles.video}>
          <source src={video} type='video/mp4' />
        </video>
      </motion.div>
      <section id={styles.hero} class='container'>
        <div className={styles.content}>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: 'tween', duration: 1.5 }}
            className={styles.heading}
          >
            OPEN THE DOOR TO THE MAGIC WORLD OF VFX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: 'tween', duration: 1.5, delay: 0.2 }}
            className={`lead ${styles.subText}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illum
            recusandae voluptatibus mollitia itaque architecto sint quia quidem
            quaerat esse!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, background: 'transparent' }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            }}
            whileHover={{
              rotateX: 20,
              background: 'rgba(255, 255, 255, 0.2)',
              transition: { delay: 0 },
            }}
            whileTap={{ scale: 0.9, transition: { delay: 0 } }}
            onClick={scrollToAnimation}
            href='#animation-section'
            className={styles.btn}
          >
            Explore
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Hero;
