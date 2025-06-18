import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.heading}>Hi, I'm Emad Younan</h1>
          <p className={styles.subheading}>
            Web Developer specialized in TypeScript, React, and Node.js. I craft clean, performant, and user-friendly interfaces.
          </p>
          <a href="#contact" className={styles.cta}>Let’s Work Together</a>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/img/hero-illustration.svg"
            alt="Developer Illustration"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
