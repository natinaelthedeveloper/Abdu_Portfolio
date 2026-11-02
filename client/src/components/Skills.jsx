import { motion } from 'motion/react';
import styles from '../styles/Skills.module.css';
import { skillsData } from '../data.js';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <div className={styles.skillsContent}>
      <h3 className={styles.skillsTitle}>Skills</h3>

      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.id}
            className={styles.skillItem}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -30 : 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <SkillCard
              name={skill.name}
              category={skill.category}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}