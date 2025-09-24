import React from 'react';
import { MapPin, Mail, Facebook } from 'lucide-react';
import styles from './Footer.module.css';
// Fix the import path - should be ../../assets not ./assets
import acdLogoWhite from '../../assets/acd-white-logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            {/* Logo with white version */}
            <div className={styles.logo}>
              <a href="/">
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
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><a href="#company">Company</a></li>
              <li><a href="#contact">Contact Us</a></li>
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