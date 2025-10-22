import React from 'react';
import { MapPin, Mail, Facebook } from 'lucide-react';
import styles from './Footer.module.css';
// Fix the import path - should be ../../assets not ./assets
import acdLogoWhite from '../../assets/acd-white-logo.png';

const Footer = ({ 
  onNavigateHome,
  onNavigateToServices,
  onNavigateToAbout,
  onNavigateToHyundai
}) => {
  // Handle navigation to home
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    }
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigation to products (Hyundai Equipment)
  const handleProductsClick = (e) => {
    e.preventDefault();
    if (onNavigateToHyundai) {
      onNavigateToHyundai();
    }
  };

  // Handle navigation to services
  const handleServicesClick = (e) => {
    e.preventDefault();
    if (onNavigateToServices) {
      onNavigateToServices();
    }
  };

  // Handle navigation to about (company)
  const handleCompanyClick = (e) => {
    e.preventDefault();
    if (onNavigateToAbout) {
      onNavigateToAbout();
    }
  };

  // Handle contact us - scroll to contact form
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('.' + styles.contactSection) || 
                          document.querySelector('[class*="ContactForm"]') ||
                          document.querySelector('section[class*="contact"]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            {/* Logo with white version */}
            <div className={styles.logo}>
              <a href="/" onClick={handleHomeClick}>
                <img 
                  src={acdLogoWhite} 
                  alt="ACD Corporation" 
                  className={styles.logoImage}
                />
              </a>
            </div>
            <div className={styles.address}>
              <MapPin size={18} className={styles.icon} />
              <p>
                Old National Highway, Poblacion,<br />
                Mantikao Misamis Oriental 9024<br />
                Philippines
              </p>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><a href="#home" onClick={handleHomeClick}>Home</a></li>
              <li><a href="#products" onClick={handleProductsClick}>Products</a></li>
              <li><a href="#services" onClick={handleServicesClick}>Services</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><a href="#company" onClick={handleCompanyClick}>Company</a></li>
              <li><a href="#contact" onClick={handleContactClick}>Contact Us</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactLabel}>Email Addresses:</p>
              <p className={styles.contactValue}>acdcorpph@gmail.com</p>
              
              <p className={styles.contactLabel}>Contact Number:</p>
              <p className={styles.contactValue}>+63 (088) 880-4200</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            COPYRIGHT 2025 ADVANCEMENT OF COMMERCE FOR DEVELOPMENT CORPORATION. ALL RIGHTS RESERVED.
          </p>
          <div className={styles.socials}>
            <span className={styles.socialsLabel}>Socials:</span>
            <a href="https://facebook.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="mailto:acdcorpph@gmail.com" className={styles.socialLink}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;