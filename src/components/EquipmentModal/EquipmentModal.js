import React, { useState } from 'react';
import { X } from 'lucide-react';
import EquipmentContactModal from '../EquipmentContactModal/EquipmentContactModal';
import styles from './EquipmentModal.module.css';

const EquipmentModal = ({ equipment, isOpen, onClose, isTonly = false }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !equipment) return null;

  // Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle Contact Us button click
  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  // Handle closing contact modal
  const handleContactModalClose = () => {
    setIsContactModalOpen(false);
  };

  // Handle Download Brochure button click
  const handleDownloadBrochure = () => {
    // In production, this would trigger an actual download
    alert(`Downloading brochure for ${equipment.model}...`);
    // Example: window.open(`/brochures/${equipment.model}.pdf`, '_blank');
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={handleBackdropClick}>
        <div className={styles.modalContent}>
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>

          {/* Modal Body */}
          <div className={styles.modalBody}>
            {/* Left Side - Image */}
            <div className={styles.imageSection}>
              <div className={`${styles.categoryBadge} ${isTonly ? styles.tonlyBadge : ''}`}>{equipment.category}</div>
              {equipment.image ? (
                <img src={equipment.image} alt={equipment.model} className={styles.equipmentImage} />
              ) : (
                <div className={styles.imagePlaceholder}>No Image Available</div>
              )}
            </div>

            {/* Right Side - Details */}
            <div className={styles.detailsSection}>
              <h2 className={styles.modalTitle}>{equipment.model}</h2>
              <p className={styles.equipmentType}>{equipment.type}</p>
              
              <div className={styles.divider}></div>

              <h3 className={styles.sectionHeading}>Description</h3>
              <p className={styles.description}>{equipment.description}</p>

              {/* Specifications */}
              {equipment.specifications && (
                <>
                  <h3 className={styles.sectionHeading}>Key Specifications</h3>
                  <div className={styles.specifications}>
                    {equipment.specifications.map((spec, index) => (
                      <div key={index} className={styles.specItem}>
                        <span className={styles.specLabel}>{spec.label}:</span>
                        <span className={styles.specValue}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Features */}
              {equipment.features && (
                <>
                  <h3 className={styles.sectionHeading}>Key Features</h3>
                  <ul className={styles.featuresList}>
                    {equipment.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <button 
                  className={`${styles.contactBtn} ${isTonly ? styles.tonlyContactBtn : ''}`}
                  onClick={handleContactClick}
                >
                  Contact Us for Quote
                </button>
                <button 
                  className={`${styles.brochureBtn} ${isTonly ? styles.tonlyBrochureBtn : ''}`}
                  onClick={handleDownloadBrochure}
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Contact Modal - PASS isTonly prop here */}
      <EquipmentContactModal
        isOpen={isContactModalOpen}
        onClose={handleContactModalClose}
        equipment={equipment}
        isTonly={isTonly}
      />
    </>
  );
};

export default EquipmentModal;