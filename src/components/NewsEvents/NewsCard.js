import React from 'react';
import styles from './NewsEvents.module.css';

const NewsCard = ({ news }) => {
  return (
    <div className={styles.newsCard}>
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
  );
};

export default NewsCard;