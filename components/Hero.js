import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className={styles.hero}>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className={styles.title}>
          Welcome to My Portfolio 🚀
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Full-stack Developer | AI Enthusiast | Creative Builder
        </motion.p>
        <motion.div variants={itemVariants} className={styles.cta}>
          <button className={styles.primaryBtn}>Explore My Work</button>
          <button className={styles.secondaryBtn}>Get In Touch</button>
        </motion.div>
      </motion.div>
      <div className={styles.background}></div>
    </section>
  );
}