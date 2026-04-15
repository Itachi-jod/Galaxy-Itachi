import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const AIChat = dynamic(() => import('../components/AIChat'), { ssr: false });
const VideoDownloader = dynamic(() => import('../components/VideoDownloader'), { ssr: false });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showVideoDownloader, setShowVideoDownloader] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={styles.main}>
        <Hero />
        <Skills />
        <Projects />
        {showChat && <AIChat onClose={() => setShowChat(false)} />}
        {showVideoDownloader && <VideoDownloader onClose={() => setShowVideoDownloader(false)} />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}