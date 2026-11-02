import { motion } from 'framer-motion';
import { expectedResults, whyChooseMe } from '../data.js';
import styles from '../styles/OutcomesAndWhyMe.module.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function OutcomesAndWhyMe() {
  return (
    <section className={styles.section} id="results-and-value">
      <motion.div
        className={styles.container}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Expected Results & Why Work With Me</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {/* Column 1: Expected Results */}
          <motion.div className={styles.columnCard} variants={itemVariants}>
            <div className={styles.columnHeader}>
              <span className={styles.badge}>Outcomes</span>
              <h3 className={styles.columnTitle}>What You Can Expect</h3>
            </div>
            
            <div className={styles.list}>
              {expectedResults.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className={styles.item}>
                    <div className={styles.iconBox}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className={styles.itemTitle}>{item.title}</h4>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Why Choose Me */}
          <motion.div className={styles.columnCard} variants={itemVariants}>
            <div className={styles.columnHeader}>
              <span className={styles.badgeHighlight}>Value</span>
              <h3 className={styles.columnTitle}>Why Choose Me</h3>
            </div>

            <div className={styles.list}>
              {whyChooseMe.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className={styles.item}>
                    <div className={`${styles.iconBox} ${styles.iconBoxHighlight}`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className={styles.itemTitle}>{item.title}</h4>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}