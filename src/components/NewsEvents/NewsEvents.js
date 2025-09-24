import React from 'react';
import NewsCard from './NewsCard';
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
    date: 'November 12, 2024',
    title: 'Strategic Partnership With Major Construction Firms',
    description: 'ACD Corporation announces its market position through strategic partnerships with leading construction companies nationwide.',
    image: newsImg3
  }
];

const NewsEvents = () => {
  return (
    <section className={styles.newsEvents}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>NEWS AND EVENTS</h2>
          <button className={styles.viewAllBtn}>View All</button>
        </div>
        
        <p className={styles.sectionSubtitle}>
          STAY UPDATED WITH THE LATEST FROM ACD CORPORATION
        </p>
        <p className={styles.sectionDescription}>
          Read More About ACD Here
        </p>
        
        <div className={styles.newsGrid}>
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;