import React from 'react';
import styles from './AllEquipmentHero.module.css';
// Use the same background image or a different one if provided
import heroBackground from '../../assets/hero-truck.png';

const AllEquipmentHero = ({ onNavigateToTonly }) => {
  const handleTonlyClick = () => {
    // Navigate to Tonly equipment page
    if (onNavigateToTonly) {
      onNavigateToTonly();
    }
  };

  const handleHyundaiClick = () => {
    // Smooth scroll to equipment section
    const equipmentSection = document.getElementById('equipment-section');
    if (equipmentSection) {
      equipmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            <p className={styles.badge}>YOUR TRUSTED COMPANION FOR</p>
            <h1 className={styles.heroTitle}>
              DELIVERING EXCELLENCE IN CONSTRUCTION
              <br />
              EQUIPMENT ACROSS THE PHILIPPINES
            </h1>
            <div className={styles.heroButtons}>
              <button className={styles.hyundaiBtn} onClick={handleHyundaiClick}>Hyundai Equipments</button>
              <button className={styles.tonlyBtn} onClick={handleTonlyClick}>Tonly Trucks</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllEquipmentHero;