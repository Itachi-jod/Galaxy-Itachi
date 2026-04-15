import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>\n      <div className={styles.container}>\n        <div className={styles.logo}>\n          <h1>✨ Itachi</h1>\n        </div>\n        <nav className={styles.nav}>\n          <Link href="#home">Home</Link>\n          <Link href="#skills">Skills</Link>\n          <Link href="#projects">Projects</Link>\n          <Link href="#contact">Contact</Link>\n        </nav>\n        <button \n          className={styles.themeToggle}\n          onClick={() => setDarkMode(!darkMode)}\n        >\n          {darkMode ? '☀️' : '🌙'}\n        </button>\n      </div>\n    </header>;\n  );\n}