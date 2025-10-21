import React, { useState } from 'react';
import EquipmentCard from './EquipmentCard';
import EquipmentModal from '../EquipmentModal/EquipmentModal';
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
    image: loaderImg,
    specifications: [
      { label: 'Engine Power', value: '74 HP (55 kW)' },
      { label: 'Operating Weight', value: '8,500 kg' },
      { label: 'Bucket Capacity', value: '1.0 m³' },
      { label: 'Digging Depth', value: '4,570 mm' },
      { label: 'Max Reach', value: '5,800 mm' }
    ],
    features: [
      'Powerful and fuel-efficient engine for maximum productivity',
      'Ergonomic cabin design with excellent visibility',
      'Advanced hydraulic system for smooth operation',
      'Easy maintenance with accessible service points',
      'Versatile attachments for various applications'
    ]
  },
  {
    id: 2,
    category: 'Excavators',
    model: 'R140LC-9S',
    type: 'Crawler Excavator',
    description: 'Power to power, precision, and performance with exceptional control and impressive fuel efficiency.',
    image: excavatorImg,
    specifications: [
      { label: 'Engine Power', value: '105 HP (78 kW)' },
      { label: 'Operating Weight', value: '14,200 kg' },
      { label: 'Bucket Capacity', value: '0.6 m³' },
      { label: 'Digging Depth', value: '6,180 mm' },
      { label: 'Max Reach', value: '9,420 mm' }
    ],
    features: [
      'Superior fuel efficiency with advanced engine technology',
      'Enhanced operator comfort with spacious cabin',
      'Precision control for delicate operations',
      'Durable undercarriage for extended service life',
      'Low noise and vibration levels'
    ]
  },
  {
    id: 3,
    category: 'Dump Truck',
    model: 'TL21/25',
    type: 'Rigid Dump Truck',
    description: 'A motor grader delivers precise, consistent results with minimal maintenance.',
    image: dumpTruckImg,
    specifications: [
      { label: 'Payload Capacity', value: '21-25 tons' },
      { label: 'Engine Power', value: '280 HP (209 kW)' },
      { label: 'Dump Body Volume', value: '15 m³' },
      { label: 'Max Speed', value: '90 km/h' },
      { label: 'Fuel Tank Capacity', value: '300 L' }
    ],
    features: [
      'Heavy-duty construction for demanding operations',
      'High payload capacity for maximum productivity',
      'Reliable performance in harsh conditions',
      'Efficient hydraulic dumping system',
      'Comfortable cabin with modern amenities'
    ]
  }
];

const EquipmentShowcase = ({ onViewAll }) => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckProduct = (equipment) => {
    setSelectedEquipment(equipment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEquipment(null), 300);
  };

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
            <EquipmentCard 
              key={equipment.id} 
              equipment={equipment}
              onCheckProduct={handleCheckProduct}
            />
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

      {/* Equipment Modal */}
      <EquipmentModal 
        equipment={selectedEquipment}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default EquipmentShowcase;