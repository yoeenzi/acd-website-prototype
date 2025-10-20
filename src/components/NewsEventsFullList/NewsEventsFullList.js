import React, { useState } from 'react';
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
    image: newsImg1
  },
  {
    id: 2,
    category: 'Events',
    date: 'December 20, 2024',
    title: 'Grand Opening Of Our New Davao Branch',
    description: 'We\'re excited to announce the opening of our new branch in Davao City, expanding our presence to better serve customers in Mindanao.',
    image: newsImg2
  },
  {
    id: 3,
    category: 'Partnership',
    date: 'November 10, 2024',
    title: 'Strategic Partnership With Major Construction Firms',
    description: 'ACD Corporation strengthens its market position through strategic partnerships with leading construction companies nationwide.',
    image: newsImg3
  },
  {
    id: 4,
    category: 'News',
    date: 'October 28, 2024',
    title: 'New Service Center Opens in Cebu',
    description: 'State-of-the-art service facility now operational to provide faster maintenance and repair services for Central Visayas clients.',
    image: newsImg1
  },
  {
    id: 5,
    category: 'Events',
    date: 'October 15, 2024',
    title: 'Annual Equipment Demo Day Success',
    description: 'Over 200 attendees experienced hands-on demonstrations of our latest Hyundai and Tonly equipment lineup.',
    image: newsImg2
  },
  {
    id: 6,
    category: 'Partnership',
    date: 'September 30, 2024',
    title: 'Collaboration With Mining Industry Leaders',
    description: 'ACD Corporation partners with top mining companies to provide specialized equipment solutions for the mining sector.',
    image: newsImg3
  }
];

const NewsEventsFullList = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredNews = activeFilter === 'All' 
    ? allNewsData 
    : allNewsData.filter(item => item.category === activeFilter);

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
                <button className={styles.readMore} onClick={() => console.log('Read more clicked')}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsFullList;