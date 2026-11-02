
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import styles from "../styles/Projects.module.css";
import { FaTiktok } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
        delay: index * 0.1,
      }}
    >
      {/* Project Image */}
      <div className={styles.imageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />

        <div className={styles.imageOverlay}></div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveBadge}
            aria-label="Live project"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Project Information */}
      <div className={styles.projectContent}>
        {project.category && (
          <span className={styles.projectCategory}>
            {project.category}
          </span>
        )}

        <h3 className={styles.projectTitle}>
          {project.title}
        </h3>

        <p className={styles.projectDescription}>
          {project.description}
        </p>

        <div className={styles.projectFooter}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              View Project
              <ExternalLink size={14} />
            </a>
          )}

          {project.TgUrl && (
            <a
              href={project.TgUrl}
              target="_self"
              rel="noopener noreferrer"
              className={styles.TgIcon}
              aria-label="View Telegram"
            >
              <FaTiktok size={20} />
              <p>See Account</p>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
