import React from 'react';
import styles from './CoreValues.module.css';

const values = [
  {
    letter: 'T',
    title: 'Towards Sustainable Development',
    description: 'Ensuring all endeavors contribute to global sustainable development goals'
  },
  {
    letter: 'A',
    title: 'Alliance and Network Building',
    description: 'Establishing strong linkages and partnerships in all levels'
  },
  {
    letter: 'T',
    title: 'Teamwork and Human Resource',
    description: 'Investing in technical and operational skills among our staff'
  },
  {
    letter: 'A',
    title: 'Adaptation and Resilience',
    description: 'Venturing innovative mechanisms that merge technology'
  }
];

const CoreValues = () => {
  return (
    <section className={styles.coreValues}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          ACD LIVES ITS <span className={styles.textRed}>CORE VALUES</span> – EVERY{' '}
          <span className={styles.textRed}>MACHINE</span>,
          <br />
          EVERY <span className={styles.textRed}>MOVE</span>.
        </h2>
        
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueCircle}>
                <span className={styles.valueLetter}>{value.letter}</span>
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;