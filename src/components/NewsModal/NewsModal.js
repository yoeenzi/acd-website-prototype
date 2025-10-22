import React, { useEffect } from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import styles from './NewsModal.module.css';

const NewsModal = ({ news, isOpen, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !news) return null;

  // Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          {/* Hero Image Section */}
          <div className={styles.heroImageSection}>
            {news.image ? (
              <img src={news.image} alt={news.title} className={styles.heroImage} />
            ) : (
              <div className={styles.heroImagePlaceholder}>News Image</div>
            )}
            <div className={styles.categoryBadge}>{news.category}</div>
          </div>

          {/* Content Section */}
          <div className={styles.contentSection}>
            {/* Meta Information */}
            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <span>{news.date}</span>
              </div>
              <div className={styles.metaItem}>
                <Tag size={16} />
                <span>{news.category}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className={styles.newsTitle}>{news.title}</h1>

            {/* Article Content */}
            <div className={styles.articleContent}>
              {/* Introduction */}
              <p className={styles.introduction}>{news.description}</p>

              {/* Full Article Content */}
              <div className={styles.fullContent}>
                {news.fullContent ? (
                  news.fullContent.map((section, index) => (
                    <div key={index} className={styles.contentBlock}>
                      {section.heading && (
                        <h2 className={styles.contentHeading}>{section.heading}</h2>
                      )}
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className={styles.contentParagraph}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))
                ) : (
                  <>
                    {/* Default content if fullContent is not provided */}
                    <div className={styles.contentBlock}>
                      <h2 className={styles.contentHeading}>Overview</h2>
                      <p className={styles.contentParagraph}>
                        {news.description}
                      </p>
                      <p className={styles.contentParagraph}>
                        ACD Corporation continues to lead the heavy equipment industry in the Philippines, 
                        providing top-quality machinery and services to support the nation's infrastructure 
                        development. Our commitment to excellence ensures that every project we support 
                        achieves success.
                      </p>
                    </div>

                    <div className={styles.contentBlock}>
                      <h2 className={styles.contentHeading}>Key Highlights</h2>
                      <p className={styles.contentParagraph}>
                        This development marks a significant milestone in our ongoing mission to deliver 
                        exceptional value to our customers. Through strategic partnerships and continuous 
                        innovation, we remain at the forefront of the construction equipment industry.
                      </p>
                      <p className={styles.contentParagraph}>
                        Our team of experienced professionals is dedicated to providing comprehensive 
                        support, from initial consultation through installation and ongoing maintenance. 
                        With nationwide presence and 24/7 service availability, we ensure your operations 
                        run smoothly.
                      </p>
                    </div>

                    <div className={styles.contentBlock}>
                      <h2 className={styles.contentHeading}>Looking Forward</h2>
                      <p className={styles.contentParagraph}>
                        As we continue to expand our capabilities and service offerings, ACD Corporation 
                        remains committed to being your trusted partner in construction excellence. We 
                        invite you to experience the difference that quality equipment and dedicated 
                        service can make for your projects.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Call to Action Section */}
              <div className={styles.ctaSection}>
                <h3 className={styles.ctaTitle}>Interested in Learning More?</h3>
                <p className={styles.ctaText}>
                  Contact our team today to discover how ACD Corporation can support your next project.
                </p>
                <button className={styles.ctaButton}>Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;