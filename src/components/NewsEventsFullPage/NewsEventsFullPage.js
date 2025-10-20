import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import NewsEventsFullList from '../NewsEventsFullList/NewsEventsFullList';
import styles from './NewsEventsFullPage.module.css';

const NewsEventsFullPage = ({ onNavigateHome }) => {
  return (
    <div className={styles.newsEventsPage}>
      <Header onNavigateHome={onNavigateHome} />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>STAY INFORMED</span>
              <h1 className={styles.heroTitle}>
                News and <span className={styles.textRed}>Events</span>
              </h1>
              <p className={styles.heroDescription}>
                Stay updated with the latest developments, partnerships, and events<br />
                from ACD Corporation as we continue to power progress nationwide.
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