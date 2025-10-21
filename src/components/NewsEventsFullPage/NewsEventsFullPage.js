import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import NewsEventsFullList from '../NewsEventsFullList/NewsEventsFullList';
import styles from './NewsEventsFullPage.module.css';
// Import hero background - same as Hero.js
import heroBackground from '../../assets/construction-bg.png';

const NewsEventsFullPage = ({ onNavigateHome }) => {
  return (
    <div className={styles.newsEventsPage}>
      <Header onNavigateHome={onNavigateHome} />
      
      {/* Hero Section - EXACT COPY from Hero.js */}
      <section 
        className={styles.hero} 
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className={styles.heroOverlay}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleLine}>
                  Stay Updated With <span className={styles.redText}>ACD</span>
                </span>
                <span className={styles.titleLine}>
                  <span className={styles.redText}>News</span> And <span className={styles.redText}>Events</span>
                </span>
                <span className={styles.titleLine}>
                  That Keep You <span className={styles.redText}>Informed</span>
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                Latest Updates, Partnerships, and Milestones from ACD Corporation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Events List Section */}
      <NewsEventsFullList />

      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewsEventsFullPage;