import { motion } from 'motion/react';
import styles from '../styles/CustomerTestimonials.module.css';
import { testimonialsData } from '../data.js';

export default function CustomerTestimonials() {
  const testimonial = testimonialsData[0];

  if (!testimonial) return null;

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.sectionTitle}>
            Customer Testimonial
          </h3>
          <p className={styles.sectionSubtitle}>
            Real experiences. Real results.
          </p>
        </motion.div>

        <motion.div
          className={styles.featuredTestimonial}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href={testimonial.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoLink}
            aria-label={`Watch ${testimonial.name}'s testimonial`}
          >
            <div className={styles.videoThumbnail}>
              <img
                src={testimonial.thumbnail}
                alt={`${testimonial.name} testimonial`}
                loading="lazy"
              />

              <div className={styles.videoOverlay}>
                <div className={styles.playButton}>
                  <span>▶</span>
                </div>
                <span className={styles.watchText}>
                  Watch Testimonial
                </span>
              </div>
            </div>
          </a>

          <div className={styles.testimonialInfo}>
            <div>
              <span className={styles.testimonialLabel}>
                CLIENT FEEDBACK
              </span>

              <h4 className={styles.customerName}>
                {testimonial.name}
              </h4>

              <p className={styles.testimonialTitle}>
                {testimonial.title}
              </p>
            </div>

            <div className={styles.videoIcon}>
              <span>VIDEO</span>
              <span className={styles.videoArrow}>↗</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}