import React, { useState } from 'react';
import NewsCard from './NewsCard';
import NewsModal from '../NewsModal/NewsModal';
import styles from './NewsEvents.module.css';
// Fix the file extensions - you have .png, .jpg, and .avif files
import newsImg1 from '../../assets/news-1.png';
import newsImg2 from '../../assets/news-2.jpg';
import newsImg3 from '../../assets/news-3.avif';

const newsData = [
  {
    id: 1,
    category: 'News',
    date: 'January 15, 2025',
    title: 'Introducing The New Hyundai HX Series Excavators',
    description: 'ACD Corporation proudly announces the arrival of Hyundai\'s latest HX Series excavators, featuring advanced technology and improved fuel efficiency.',
    image: newsImg1,
    fullContent: [
      {
        heading: 'Revolutionary Technology Arrives in the Philippines',
        paragraphs: [
          'ACD Corporation is thrilled to announce the arrival of Hyundai\'s newest generation of excavators - the HX Series. This groundbreaking lineup represents the culmination of years of research and development, bringing cutting-edge technology and unmatched performance to the Philippine construction industry.',
          'The HX Series excavators feature Hyundai\'s latest engine technology, delivering superior power while achieving remarkable fuel efficiency improvements of up to 15% compared to previous models. This advancement not only reduces operational costs but also supports environmental sustainability initiatives across the construction sector.'
        ]
      },
      {
        heading: 'Advanced Features for Maximum Productivity',
        paragraphs: [
          'Each excavator in the HX Series comes equipped with an intelligent control system that optimizes performance based on working conditions. The enhanced hydraulic system provides faster cycle times and more precise control, allowing operators to complete tasks more efficiently than ever before.',
          'The spacious, ergonomically designed cabin features a premium air suspension seat, climate control, and an intuitive touchscreen display. These comfort features reduce operator fatigue during long work hours, leading to increased productivity and safety on job sites.'
        ]
      },
      {
        heading: 'Comprehensive Support and Service',
        paragraphs: [
          'As the authorized dealer for Hyundai Construction Equipment, ACD Corporation provides complete after-sales support for all HX Series excavators. Our nationwide network of service centers and certified technicians ensures that your equipment receives prompt maintenance and repairs whenever needed.',
          'We also offer comprehensive training programs for operators and maintenance personnel, ensuring that your team can maximize the benefits of these advanced machines. Contact us today to schedule a demonstration and experience the power of the HX Series firsthand.'
        ]
      }
    ]
  },
  {
    id: 2,
    category: 'Events',
    date: 'December 20, 2024',
    title: 'Grand Opening Of Our New Davao Branch',
    description: 'We\'re excited to announce the opening of our new branch in Davao City, expanding our presence to better serve customers in Mindanao.',
    image: newsImg2,
    fullContent: [
      {
        heading: 'Expanding Our Reach in Mindanao',
        paragraphs: [
          'ACD Corporation marked a significant milestone with the grand opening of our state-of-the-art facility in Davao City. This expansion represents our commitment to providing world-class service and support to our valued customers throughout Mindanao.',
          'The new branch features a comprehensive showroom displaying our full range of Hyundai and Tonly equipment, along with a modern service center equipped with the latest diagnostic tools and genuine parts inventory. This facility enables us to provide faster response times and more efficient service to the growing Mindanao market.'
        ]
      },
      {
        heading: 'A Day of Celebration',
        paragraphs: [
          'The grand opening ceremony was attended by over 300 guests, including government officials, industry leaders, and loyal customers. The event featured live equipment demonstrations, technical presentations, and exclusive promotional offers for attendees.',
          'Mayor Sebastian Duterte delivered opening remarks, praising ACD Corporation\'s investment in Davao and the jobs it will create for the local community. Our CEO expressed gratitude for the warm welcome and reaffirmed our dedication to supporting the region\'s infrastructure development.'
        ]
      },
      {
        heading: 'Serving the Community',
        paragraphs: [
          'The Davao branch is strategically located along the national highway, providing easy access for customers from across the region. Our facility operates six days a week and offers 24/7 emergency service support to ensure minimal downtime for your equipment.',
          'We invite all construction and mining companies in Mindanao to visit our new facility and discover how ACD Corporation can support your project needs with quality equipment and exceptional service.'
        ]
      }
    ]
  },
  {
    id: 3,
    category: 'Partnership',
    date: 'November 12, 2024',
    title: 'Strategic Partnership With Major Construction Firms',
    description: 'ACD Corporation announces its market position through strategic partnerships with leading construction companies nationwide.',
    image: newsImg3,
    fullContent: [
      {
        heading: 'Building Stronger Industry Relationships',
        paragraphs: [
          'ACD Corporation has formalized strategic partnerships with several of the Philippines\' largest construction firms, marking a new era of collaboration in the heavy equipment sector. These partnerships will facilitate equipment sharing, maintenance coordination, and technical knowledge exchange across the industry.',
          'The agreements include preferred pricing structures, priority service access, and customized training programs tailored to each partner\'s specific operational needs. These arrangements demonstrate our commitment to supporting the growth and success of major infrastructure projects nationwide.'
        ]
      },
      {
        heading: 'Mutual Benefits and Innovation',
        paragraphs: [
          'Through these partnerships, our construction firm partners gain access to the latest Hyundai and Tonly equipment with flexible financing options and guaranteed uptime through our comprehensive maintenance programs. In return, ACD Corporation receives valuable feedback that helps us continuously improve our service offerings.',
          'The collaborative nature of these partnerships has already led to several innovations in equipment deployment and maintenance scheduling. By working closely with major construction firms, we\'re able to anticipate industry needs and provide solutions before challenges arise.'
        ]
      },
      {
        heading: 'Looking to the Future',
        paragraphs: [
          'These strategic partnerships position ACD Corporation as more than just an equipment supplier - we\'re becoming integrated partners in our customers\' success. As the Philippines continues its ambitious infrastructure development programs, we\'re ready to support these initiatives with reliable equipment and unmatched service.',
          'We continue to seek partnerships with companies that share our values of excellence, integrity, and customer satisfaction. If your organization is interested in exploring a strategic partnership with ACD Corporation, we encourage you to contact our business development team to discuss how we can work together.'
        ]
      }
    ]
  }
];

const NewsEvents = ({ onViewAll }) => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler for Read More button
  const handleReadMore = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  // Handler for closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedNews(null), 300);
  };

  // Handler for View All button
  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    }
  };

  return (
    <section className={styles.newsEvents}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>NEWS AND EVENTS</h2>
          <button className={styles.viewAllBtn} onClick={handleViewAll}>
            View All
          </button>
        </div>
        
        <p className={styles.sectionSubtitle}>
          STAY UPDATED WITH THE LATEST FROM ACD CORPORATION
        </p>
        <p className={styles.sectionDescription}>
          Read More About ACD Here
        </p>
        
        <div className={styles.newsGrid}>
          {newsData.map((news) => (
            <NewsCard 
              key={news.id} 
              news={news}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>

      {/* News Modal */}
      <NewsModal 
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default NewsEvents;