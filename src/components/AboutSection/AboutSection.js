import React from 'react';
import styles from './AboutSection.module.css';
// Import working excavator image
import excavatorWorkingImg from '../../assets/acd2.png';
// Add imports
import hyundaiLogo from '../../assets/hyundai-logo.png';
import buildingLogo from '../../assets/building-tomorrow-logo.png';

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <p className={styles.badge}>A Nationwide Achievement</p>
            <h2 className={styles.aboutTitle}>
              A LEGACY OF <span className="text-red">EXCELLENCE</span> IN HEAVY
              <br />
              EQUIPMENT DISTRIBUTION AND
              <br />
              <span className="text-red">SERVICE.</span>
            </h2>
            <p className={styles.aboutText}>
              Advancement of Commerce for Development Corporation. Expanding 
              branches and growing from a regional dealer in Mindanao and Visayas 
              to a nationwide distributor — now an authorized dealer of Tonly and 
              Puzzolana equipment.
            </p>
            <div className={styles.partners}>
              <div className={styles.partnerLogo}>
                <img src={hyundaiLogo} alt="Hyundai" className={`${styles.partnerImg} ${styles.hyundaiImg}`} />
              </div>
              <div className={styles.partnerLogo}>
                <img src={buildingLogo} alt="Building Tomorrow" className={styles.partnerImg} />
              </div>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <img src={excavatorWorkingImg} alt="Excavator Working" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;