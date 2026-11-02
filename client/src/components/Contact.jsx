import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from '../styles/Contact.module.css';
import { contactData } from '../data.js';

const sectionVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 0.8, bounce: 0.4, staggerChildren: 0.15 }
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 0.8, bounce: 0.4 }
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', duration: 0.6, bounce: 0.4 }
  },
};

export default function Contact() {
  const [formDataState, setFormDataState] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Replace with your exact Telegram username (without the @ symbol)
  const TELEGRAM_USERNAME = "Abdi_Asfaw";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formDataState;

    // Construct the full formatted message string
    const formattedText = `Hello! You have a new contact form message:\n\n` +
                          `👤 Name: ${name}\n` +
                          `📧 Email: ${email}\n\n` +
                          `💬 Message:\n${message}`;

    // Safely encode special characters for the URL parameters
    const encodedMessage = encodeURIComponent(formattedText);

    // Open Telegram web/app with the pre-filled text parameter
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div 
        className={`container ${styles.contactContainer}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.header} variants={childVariants}>
          <h2 className="sectionTitle">Get In Touch</h2>
          <div className="sectionDivider"></div>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div className={styles.contactInfo} variants={childVariants}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoDesc}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className={styles.infoList}>
              <motion.div className={styles.infoItem} variants={iconVariants}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <span>{contactData.email}</span>
              </motion.div>
              
              <motion.div className={styles.infoItem} variants={iconVariants}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <span>{contactData.phone}</span>
              </motion.div>
              
              <motion.div className={styles.infoItem} variants={iconVariants}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <span>{contactData.location}</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.form 
            className={styles.contactForm}
            variants={childVariants}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={styles.input} 
                placeholder="John Doe" 
                value={formDataState.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className={styles.input} 
                placeholder="john@example.com" 
                value={formDataState.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                className={styles.input} 
                placeholder="Hello, I'd like to talk about..." 
                value={formDataState.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              Send via Telegram
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}