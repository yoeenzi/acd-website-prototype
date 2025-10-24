import React, { useState } from 'react';
import EquipmentModal from '../EquipmentModal/EquipmentModal';
import EquipmentContactModal from '../EquipmentContactModal/EquipmentContactModal';
import styles from './TonlyEquipmentList.module.css';
// Import same equipment images as Hyundai equipment list
import loaderImg from '../../assets/loader.png';
import excavatorImg from '../../assets/excavator.png';
import dumpTruckImg from '../../assets/dump-truck.png';

// Tonly-specific equipment data with specifications and features
const tonlyEquipmentData = [
  {
    id: 1,
    category: 'Dump Trucks',
    model: 'TL3000',
    type: 'Heavy Duty Dump Truck',
    description: 'Powerful and reliable dump truck designed for heavy-duty construction and mining operations with superior load capacity.',
    image: dumpTruckImg,
    specifications: [
      { label: 'Payload Capacity', value: '30 tons' },
      { label: 'Engine Power', value: '336 HP (250 kW)' },
      { label: 'Dump Body Volume', value: '18 m³' },
      { label: 'Max Speed', value: '85 km/h' },
      { label: 'Fuel Tank Capacity', value: '350 L' }
    ],
    features: [
      'Heavy-duty chassis for extreme conditions',
      'High payload capacity for maximum efficiency',
      'Advanced braking system for safety',
      'Comfortable cabin with A/C',
      'Easy maintenance design'
    ]
  },
  {
    id: 2,
    category: 'Mixer Trucks',
    model: 'TL-MX400',
    type: 'Concrete Mixer Truck',
    description: 'High-performance concrete mixer truck with advanced mixing technology for consistent concrete quality.',
    image: loaderImg,
    specifications: [
      { label: 'Drum Capacity', value: '8 m³' },
      { label: 'Engine Power', value: '290 HP (216 kW)' },
      { label: 'Mixing Speed', value: '0-14 rpm' },
      { label: 'Water Tank', value: '500 L' },
      { label: 'Discharge Height', value: '3,800 mm' }
    ],
    features: [
      'Efficient mixing drum design',
      'Hydraulic pump system',
      'Easy to operate controls',
      'Reliable performance',
      'Low maintenance costs'
    ]
  },
  {
    id: 3,
    category: 'Cargo Trucks',
    model: 'TL-C500',
    type: 'Heavy Cargo Truck',
    description: 'Versatile cargo truck built for long-distance transportation with excellent fuel efficiency and durability.',
    image: excavatorImg,
    specifications: [
      { label: 'Payload Capacity', value: '15 tons' },
      { label: 'Engine Power', value: '280 HP (209 kW)' },
      { label: 'Cargo Box Volume', value: '40 m³' },
      { label: 'Max Speed', value: '90 km/h' },
      { label: 'Wheelbase', value: '5,600 mm' }
    ],
    features: [
      'Spacious cargo area',
      'Fuel-efficient engine',
      'Comfortable long-distance cabin',
      'Durable construction',
      'Advanced safety features'
    ]
  },
  {
    id: 4,
    category: 'Dump Trucks',
    model: 'TL4000',
    type: 'Mining Dump Truck',
    description: 'Extra heavy-duty dump truck specifically designed for mining operations with reinforced body structure.',
    image: dumpTruckImg,
    specifications: [
      { label: 'Payload Capacity', value: '40 tons' },
      { label: 'Engine Power', value: '380 HP (283 kW)' },
      { label: 'Dump Body Volume', value: '22 m³' },
      { label: 'Max Speed', value: '80 km/h' },
      { label: 'Ground Clearance', value: '320 mm' }
    ],
    features: [
      'Reinforced chassis for mining',
      'Powerful engine for heavy loads',
      'Extra-large dump body',
      'All-terrain capability',
      'Enhanced suspension system'
    ]
  },
  {
    id: 5,
    category: 'Tractor Trucks',
    model: 'TL-T600',
    type: 'Semi Tractor Truck',
    description: 'Powerful tractor truck for heavy hauling with advanced safety features and comfortable cabin design.',
    image: loaderImg,
    specifications: [
      { label: 'Engine Power', value: '420 HP (313 kW)' },
      { label: 'Max Towing Capacity', value: '60 tons' },
      { label: 'Fuel Tank Capacity', value: '600 L' },
      { label: 'Max Speed', value: '95 km/h' },
      { label: 'Fifth Wheel Height', value: '1,250 mm' }
    ],
    features: [
      'High-power engine for heavy loads',
      'Air suspension for smooth ride',
      'Sleeper cabin option available',
      'Advanced braking system',
      'Fuel-efficient operation'
    ]
  },
  {
    id: 6,
    category: 'Special Trucks',
    model: 'TL-S700',
    type: 'Special Purpose Truck',
    description: 'Customizable special purpose truck platform for various industrial and construction applications.',
    image: excavatorImg,
    specifications: [
      { label: 'Engine Power', value: '260 HP (194 kW)' },
      { label: 'Chassis Length', value: '8,500 mm' },
      { label: 'Max GVW', value: '18 tons' },
      { label: 'Wheelbase', value: '4,700 mm' },
      { label: 'Frame Width', value: '850 mm' }
    ],
    features: [
      'Flexible platform design',
      'Can be customized for various uses',
      'Strong chassis construction',
      'Multiple body configurations',
      'Reliable performance'
    ]
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
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const filteredEquipment = selectedCategory === 'ALL TRUCKS' 
    ? tonlyEquipmentData 
    : tonlyEquipmentData.filter(item => item.category === selectedCategory);

  const handleCheckProduct = (equipment) => {
    setSelectedEquipment(equipment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEquipment(null), 300);
  };

  // Handler for Contact Us button
  const handleContactUs = (equipment) => {
    setSelectedEquipment(equipment);
    setIsContactModalOpen(true);
  };

  // Handler for closing contact modal
  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setTimeout(() => setSelectedEquipment(null), 300);
  };

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
                      <button 
                        className={styles.contactBtn}
                        onClick={() => handleContactUs(equipment)}
                      >
                        Contact Us
                      </button>
                      <button 
                        className={styles.checkBtn}
                        onClick={() => handleCheckProduct(equipment)}
                      >
                        Check Product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Modal */}
      <EquipmentModal 
        equipment={selectedEquipment}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isTonly={true}
      />

      {/* Equipment Contact Modal */}
      <EquipmentContactModal
        equipment={selectedEquipment}
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        isTonly={true}
      />
    </section>
  );
};

export default TonlyEquipmentList;