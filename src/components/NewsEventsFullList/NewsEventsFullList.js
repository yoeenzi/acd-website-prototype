import React, { useState } from 'react';
import NewsModal from '../NewsModal/NewsModal';
import styles from './NewsEventsFullList.module.css';
// Import news images - use the same ones from NewsEvents component
import newsImg1 from '../../assets/news-1.png';
import newsImg2 from '../../assets/news-2.jpg';
import newsImg3 from '../../assets/news-3.avif';

const allNewsData = [
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
    date: 'November 10, 2024',
    title: 'Strategic Partnership With Major Construction Firms',
    description: 'ACD Corporation strengthens its market position through strategic partnerships with leading construction companies nationwide.',
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
      }
    ]
  },
  {
    id: 4,
    category: 'News',
    date: 'October 28, 2024',
    title: 'New Service Center Opens in Cebu',
    description: 'State-of-the-art service facility now operational to provide faster maintenance and repair services for Central Visayas clients.',
    image: newsImg1,
    fullContent: [
      {
        heading: 'Enhancing Service Coverage in the Visayas',
        paragraphs: [
          'ACD Corporation continues its expansion with the inauguration of a cutting-edge service center in Cebu City. This facility represents a significant investment in our after-sales support infrastructure, ensuring that customers in Central Visayas receive the prompt and professional service they deserve.',
          'The new service center spans 2,000 square meters and includes multiple service bays, a fully-stocked parts warehouse, and advanced diagnostic equipment. Our team of certified technicians can handle everything from routine maintenance to major repairs on all Hyundai and Tonly equipment models.'
        ]
      },
      {
        heading: 'Commitment to Excellence',
        paragraphs: [
          'This facility is part of our ongoing commitment to reduce equipment downtime and maximize productivity for our customers. With strategic locations across the Philippines, we ensure that professional service is always within reach, keeping your projects on schedule and your operations running smoothly.',
          'The Cebu service center operates extended hours to accommodate the demanding schedules of the construction industry, and our emergency response team is available 24/7 for critical situations.'
        ]
      }
    ]
  },
  {
    id: 5,
    category: 'Events',
    date: 'October 15, 2024',
    title: 'Annual Equipment Demo Day Success',
    description: 'Over 200 attendees experienced hands-on demonstrations of our latest Hyundai and Tonly equipment lineup.',
    image: newsImg2,
    fullContent: [
      {
        heading: 'Industry Gathering Showcases Innovation',
        paragraphs: [
          'ACD Corporation\'s Annual Equipment Demo Day attracted more than 200 construction professionals, contractors, and industry stakeholders eager to experience our latest equipment firsthand. The event provided an excellent opportunity for attendees to test drive excavators, loaders, and trucks in real working conditions.',
          'Held at our demonstration grounds in Laguna, the event featured live demonstrations of equipment capabilities, technical presentations from Hyundai and Tonly representatives, and one-on-one consultations with our sales and technical teams.'
        ]
      },
      {
        heading: 'Positive Feedback and New Orders',
        paragraphs: [
          'Attendees expressed enthusiasm about the performance and features of the equipment demonstrated, with many placing orders on-site to take advantage of exclusive event pricing. The hands-on experience allowed potential customers to fully appreciate the quality and capabilities of our equipment lineup.',
          'We thank everyone who attended and made this year\'s Demo Day our most successful yet. We look forward to hosting this event again next year and continuing to showcase the best equipment the industry has to offer.'
        ]
      }
    ]
  },
  {
    id: 6,
    category: 'Partnership',
    date: 'September 30, 2024',
    title: 'Collaboration With Mining Industry Leaders',
    description: 'ACD Corporation partners with top mining companies to provide specialized equipment solutions for the mining sector.',
    image: newsImg3,
    fullContent: [
      {
        heading: 'Supporting the Mining Industry',
        paragraphs: [
          'ACD Corporation has entered into collaborative agreements with leading mining companies to provide specialized heavy equipment tailored to the unique demands of mining operations. These partnerships leverage our expertise in equipment selection, maintenance, and operator training to optimize mining productivity.',
          'The mining sector requires equipment that can withstand harsh conditions while maintaining consistent performance. Our Hyundai excavators and Tonly trucks are proven performers in mining applications, offering the durability and power needed for demanding extraction and hauling operations.'
        ]
      },
      {
        heading: 'Comprehensive Mining Solutions',
        paragraphs: [
          'Beyond equipment supply, these partnerships include dedicated service teams stationed at mining sites, preventive maintenance programs, and rapid parts delivery to minimize downtime. We understand that in mining, every hour of equipment operation counts, and we\'re committed to maximizing your equipment availability.',
          'As the mining industry continues to grow in the Philippines, ACD Corporation stands ready to support this vital sector with the equipment, service, and expertise that mining companies need to succeed.'
        ]
      }
    ]
  }
];

const NewsEventsFullList = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredNews = activeFilter === 'All' 
    ? allNewsData 
    : allNewsData.filter(item => item.category === activeFilter);

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

  return (
    <section className={styles.newsEventsSection}>
      {/* Filter Tabs */}
      <div className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterTabs}>
            {['All', 'News', 'Events', 'Partnership'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container">
        <div className={styles.newsGrid}>
          {filteredNews.map((news) => (
            <div key={news.id} className={styles.newsCard}>
              <div className={styles.categoryBadge}>{news.category}</div>
              <div className={styles.newsImage}>
                {news.image ? (
                  <img src={news.image} alt={news.title} />
                ) : (
                  <div className={styles.imagePlaceholder}></div>
                )}
              </div>
              <div className={styles.newsContent}>
                <p className={styles.newsDate}>{news.date}</p>
                <h3 className={styles.newsTitle}>{news.title}</h3>
                <p className={styles.newsDescription}>{news.description}</p>
                <button className={styles.readMore} onClick={() => handleReadMore(news)}>
                  Read More
                </button>
              </div>
            </div>
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

export default NewsEventsFullList;