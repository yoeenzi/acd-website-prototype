import React, { useState } from 'react';
import styles from './AllEquipmentList.module.css';
// Import equipment images
import loaderImg from '../../assets/loader.png';
import excavatorImg from '../../assets/excavator.png';
import dumpTruckImg from '../../assets/dump-truck.png';

// Extended equipment data - add more items as needed
const allEquipmentData = [
  {
    id: 1,
    category: 'Excavators',
    model: 'H940C',
    type: 'Backhoe Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: excavatorImg
  },
  {
    id: 2,
    category: 'Loaders',
    model: 'H940C',
    type: 'Backhoe Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: loaderImg
  },
  {
    id: 3,
    category: 'Motor Graders',
    model: 'H940C',
    type: 'Backhoe Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: dumpTruckImg
  },
  {
    id: 4,
    category: 'Excavators',
    model: 'H940C',
    type: 'Backhoe Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: excavatorImg
  },
  {
    id: 5,
    category: 'Loaders',
    model: 'H940C',
    type: 'Backhoe Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: loaderImg
  },
  {
    id: 6,
    category: 'Motor Graders',
    model: 'H940C',
    type: 'Backhoe Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: dumpTruckImg
  }
];

const categories = [
  'ALL EQUIPMENT',
  'Excavators',
  'Loaders',
  'Motor Graders',
  'Special Equipments',
  'Attachments'
];

const AllEquipmentList = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL EQUIPMENT');

  const filteredEquipment = selectedCategory === 'ALL EQUIPMENT' 
    ? allEquipmentData 
    : allEquipmentData.filter(item => item.category === selectedCategory);

  return (
    <section className={styles.equipmentSection} id="equipment-section">
      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Vertical Sidebar Navigation */}
          <aside className={styles.sidebar}>
            <nav className={styles.categoryNav}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </nav>
          </aside>

          {/* Equipment Grid */}
          <div className={styles.equipmentContent}>
            <div className={styles.equipmentGrid}>
              {filteredEquipment.map((equipment) => (
                <div key={equipment.id} className={styles.equipmentCard}>
                  <div className={styles.categoryBadge}>{equipment.category}</div>
                  <div className={styles.cardImage}>
                    {equipment.image ? (
                      <img src={equipment.image} alt={equipment.model} />
                    ) : (
                      <div className={styles.imagePlaceholder}>{equipment.category} Image</div>
                    )}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllEquipmentList;