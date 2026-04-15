import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>✨ Built with passion by Itachi</p>
        <p>&copy; {currentYear} All rights reserved.</p>
        <p>Powered by Next.js & Modern Web Technologies 🚀</p>
      </div>
    </footer>
  );
}