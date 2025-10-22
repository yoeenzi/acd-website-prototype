import React from 'react';
import styles from './Hero.module.css';
// Import and use the background image
import heroBackground from '../../assets/construction-bg.png';

const Hero = ({ onNavigateToHyundai }) => {
  const handleGetQuote = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreEquipment = () => {
    if (onNavigateToHyundai) {
      onNavigateToHyundai();
    }
  };

  return (
    <section 
      className={styles.hero} 
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={styles.heroOverlay}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine}>
                Beyond <span className={styles.redText}>Machines</span>
              </span>
              <span className={styles.titleLine}>
                We Deliver <span className={styles.redText}>Support</span>
              </span>
              <span className={styles.titleLine}>
                That Moves You <span className={styles.redText}>Forward</span>
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              Heavy Equipment Solutions for Construction, Mining, and More.
            </p>
            <div className={styles.heroButtons}>
              <button className="btn-primary" onClick={handleExploreEquipment}>Explore Equipment</button>
              <button className="btn-outline" onClick={handleGetQuote}>Get Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;