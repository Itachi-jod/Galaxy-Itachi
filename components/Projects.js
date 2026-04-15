import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'AI Chat System',
      description: 'Advanced chatbot with real-time responses',
      tech: ['React', 'Groq API', 'Next.js'],
      link: '#'
    },
    {
      title: 'Video Downloader',
      description: 'Multi-platform video downloader with quality selection',
      tech: ['Node.js', 'Express', 'React'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern anime-inspired portfolio with smooth animations',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>🚀 Featured Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tech}>
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <a href={project.link} className={styles.link}>View Project →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}