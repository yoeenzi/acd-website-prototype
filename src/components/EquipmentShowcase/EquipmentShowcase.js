import React from 'react';
import EquipmentCard from './EquipmentCard';
import styles from './EquipmentShowcase.module.css';
// Import equipment images
import loaderImg from '../../assets/loader.png';
import excavatorImg from '../../assets/excavator.png';
import dumpTruckImg from '../../assets/dump-truck.png';

const equipmentData = [
  {
    id: 1,
    category: 'Loaders',
    model: 'H940C',
    type: 'Backhoe Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your loading on track.',
    image: loaderImg
  },
  {
    id: 2,
    category: 'Excavators',
    model: 'R140LC-9S',
    type: 'Crawler Excavator',
    description: 'Power to power, precision, and performance with exceptional control and impressive fuel efficiency.',
    image: excavatorImg
  },
  {
    id: 3,
    category: 'Dump Truck',
    model: 'TL21/25',
    type: 'Rigid Dump Truck',
    description: 'A motor grader delivers precise, consistent results with minimal maintenance.',
    image: dumpTruckImg
  }
];

const EquipmentShowcase = ({ onViewAll }) => {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          EXPLORE TONLY AND HYUNDAI EQUIPMENTS
        </h2>
        <p className={styles.sectionSubtitle}>
          At ACD Corporation, we power progress with machines and expertise.
        </p>
        
        <div className={styles.equipmentGrid}>
          {equipmentData.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
        
        <div className={styles.viewAllContainer}>
          <button 
            className={styles.viewAllBtn}
            onClick={onViewAll}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;