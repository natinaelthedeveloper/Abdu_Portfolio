
import { motion } from "motion/react";
import styles from "../styles/Projects.module.css";
import { projectsData } from "../data.js";
import ProjectCard from "./ProjectCard";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div
        className={styles.projectsContainer}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className={styles.header}>
          <span className={styles.sectionLabel}>
            Our Work
          </span>

          <h2 className={styles.sectionTitle}>
            Our Recent
            <span> Projects</span>
          </h2>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
