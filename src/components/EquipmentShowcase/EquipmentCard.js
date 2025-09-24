import React from 'react';
import styles from './EquipmentShowcase.module.css';

const EquipmentCard = ({ equipment }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <div className={styles.categoryBadge}>{equipment.category}</div>
        <div className={styles.cardImage}>
          {equipment.image ? (
            <img src={equipment.image} alt={equipment.model} />
          ) : (
            <div className={styles.imagePlaceholder}>{equipment.category} Image</div>
          )}
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{equipment.model}</h3>
        <p className={styles.cardType}>{equipment.type}</p>
        <p className={styles.cardDescription}>{equipment.description}</p>
        <div className={styles.cardButtons}>
          <button className={styles.contactBtn}>Contact Us</button>
          <button className={styles.checkBtn}>Check Product</button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;