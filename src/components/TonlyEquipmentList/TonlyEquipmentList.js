import React, { useState } from 'react';
import styles from './TonlyEquipmentList.module.css';
// Import same equipment images as Hyundai equipment list
import loaderImg from '../../assets/loader.png';
import excavatorImg from '../../assets/excavator.png';
import dumpTruckImg from '../../assets/dump-truck.png';

// Tonly-specific equipment data (using same images temporarily)
const tonlyEquipmentData = [
  {
    id: 1,
    category: 'Dump Trucks',
    model: 'TL3000',
    type: 'Heavy Duty Dump Truck',
    description: 'Powerful and reliable dump truck designed for heavy-duty construction and mining operations with superior load capacity.',
    image: dumpTruckImg
  },
  {
    id: 2,
    category: 'Mixer Trucks',
    model: 'TL-MX400',
    type: 'Concrete Mixer Truck',
    description: 'High-performance concrete mixer truck with advanced mixing technology for consistent concrete quality.',
    image: loaderImg
  },
  {
    id: 3,
    category: 'Cargo Trucks',
    model: 'TL-C500',
    type: 'Heavy Cargo Truck',
    description: 'Versatile cargo truck built for long-distance transportation with excellent fuel efficiency and durability.',
    image: excavatorImg
  },
  {
    id: 4,
    category: 'Dump Trucks',
    model: 'TL4000',
    type: 'Mining Dump Truck',
    description: 'Extra heavy-duty dump truck specifically designed for mining operations with reinforced body structure.',
    image: dumpTruckImg
  },
  {
    id: 5,
    category: 'Tractor Trucks',
    model: 'TL-T600',
    type: 'Semi Tractor Truck',
    description: 'Powerful tractor truck for heavy hauling with advanced safety features and comfortable cabin design.',
    image: loaderImg
  },
  {
    id: 6,
    category: 'Special Trucks',
    model: 'TL-S700',
    type: 'Special Purpose Truck',
    description: 'Customizable special purpose truck platform for various industrial and construction applications.',
    image: excavatorImg
  }
];

const tonlyCategories = [
  'ALL TRUCKS',
  'Dump Trucks',
  'Mixer Trucks',
  'Cargo Trucks',
  'Tractor Trucks',
  'Special Trucks'
];

const TonlyEquipmentList = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL TRUCKS');

  const filteredEquipment = selectedCategory === 'ALL TRUCKS' 
    ? tonlyEquipmentData 
    : tonlyEquipmentData.filter(item => item.category === selectedCategory);

  return (
    <section className={styles.equipmentSection} id="tonly-equipment-section">
      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Vertical Sidebar Navigation */}
          <aside className={styles.sidebar}>
            <nav className={styles.categoryNav}>
              {tonlyCategories.map((category) => (
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

export default TonlyEquipmentList;