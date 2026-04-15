import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      category: 'AI/ML',
      skills: ['Groq API', 'OpenAI', 'Chatbots', 'NLP', 'LLMs']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2>💡 Skills & Technologies</h2>
      <div className={styles.grid}>
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3>{cat.category}</h3>
            <ul>
              {cat.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}