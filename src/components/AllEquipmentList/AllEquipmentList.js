import React, { useState } from 'react';
import EquipmentModal from '../EquipmentModal/EquipmentModal';
import EquipmentContactModal from '../EquipmentContactModal/EquipmentContactModal'; // ADD THIS LINE
import styles from './AllEquipmentList.module.css';
// Import equipment images
import loaderImg from '../../assets/loader.png';
import excavatorImg from '../../assets/excavator.png';
import dumpTruckImg from '../../assets/dump-truck.png';

// Extended equipment data with specifications and features
const allEquipmentData = [
  {
    id: 1,
    category: 'Excavators',
    model: 'H940C',
    type: 'Backhoe Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: excavatorImg,
    specifications: [
      { label: 'Engine Power', value: '74 HP (55 kW)' },
      { label: 'Operating Weight', value: '8,500 kg' },
      { label: 'Bucket Capacity', value: '1.0 m³' },
      { label: 'Digging Depth', value: '4,570 mm' }
    ],
    features: [
      'Powerful and fuel-efficient engine',
      'Ergonomic cabin design',
      'Advanced hydraulic system',
      'Easy maintenance access'
    ]
  },
  {
    id: 2,
    category: 'Loaders',
    model: 'HL760-9S',
    type: 'Wheel Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: loaderImg,
    specifications: [
      { label: 'Engine Power', value: '163 HP (121 kW)' },
      { label: 'Operating Weight', value: '13,200 kg' },
      { label: 'Bucket Capacity', value: '2.3 m³' },
      { label: 'Breakout Force', value: '12,000 kgf' }
    ],
    features: [
      'High productivity with powerful engine',
      'Excellent visibility from operator cabin',
      'Durable components for long service life',
      'Comfortable operator environment'
    ]
  },
  {
    id: 3,
    category: 'Motor Graders',
    model: 'HG965',
    type: 'Motor Grader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: dumpTruckImg,
    specifications: [
      { label: 'Engine Power', value: '190 HP (142 kW)' },
      { label: 'Operating Weight', value: '15,800 kg' },
      { label: 'Blade Width', value: '3,660 mm' },
      { label: 'Max Speed', value: '42 km/h' }
    ],
    features: [
      'Precision grading capabilities',
      'Articulated frame for maneuverability',
      'Heavy-duty blade system',
      'All-wheel drive option available'
    ]
  },
  {
    id: 4,
    category: 'Excavators',
    model: 'R210LC-9',
    type: 'Crawler Excavator',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: excavatorImg,
    specifications: [
      { label: 'Engine Power', value: '156 HP (116 kW)' },
      { label: 'Operating Weight', value: '21,500 kg' },
      { label: 'Bucket Capacity', value: '0.92 m³' },
      { label: 'Digging Depth', value: '6,750 mm' }
    ],
    features: [
      'Superior fuel efficiency',
      'Enhanced operator comfort',
      'Precision control system',
      'Low noise operation'
    ]
  },
  {
    id: 5,
    category: 'Loaders',
    model: 'HL955',
    type: 'Wheel Loader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: loaderImg,
    specifications: [
      { label: 'Engine Power', value: '195 HP (145 kW)' },
      { label: 'Operating Weight', value: '17,100 kg' },
      { label: 'Bucket Capacity', value: '3.0 m³' },
      { label: 'Breakout Force', value: '15,500 kgf' }
    ],
    features: [
      'Heavy-duty construction',
      'High breakout force',
      'Efficient hydraulic system',
      'Spacious comfortable cabin'
    ]
  },
  {
    id: 6,
    category: 'Motor Graders',
    model: 'HG985',
    type: 'Motor Grader',
    description: 'Employing a loader built for performance and durability helps maximize uptime and keep your projects on track.',
    image: dumpTruckImg,
    specifications: [
      { label: 'Engine Power', value: '220 HP (164 kW)' },
      { label: 'Operating Weight', value: '17,500 kg' },
      { label: 'Blade Width', value: '4,270 mm' },
      { label: 'Max Speed', value: '45 km/h' }
    ],
    features: [
      'Advanced blade control',
      'Powerful engine performance',
      'Enhanced operator visibility',
      'Robust construction'
    ]
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
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // ADD THESE TWO LINES:
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactEquipment, setContactEquipment] = useState(null);

  const filteredEquipment = selectedCategory === 'ALL EQUIPMENT' 
    ? allEquipmentData 
    : allEquipmentData.filter(item => item.category === selectedCategory);

  const handleCheckProduct = (equipment) => {
    setSelectedEquipment(equipment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEquipment(null), 300);
  };

  // ADD THESE TWO FUNCTIONS:
  const handleContactUs = (equipment) => {
    setContactEquipment(equipment);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setTimeout(() => setContactEquipment(null), 300);
  };

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
                      {/* MODIFY THIS BUTTON - ADD onClick: */}
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
      />

      {/* ADD THIS SECTION: */}
      {/* Equipment Contact Modal */}
      <EquipmentContactModal 
        equipment={contactEquipment}
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
      />
    </section>
  );
};

export default AllEquipmentList;