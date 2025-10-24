import React, { useState, useEffect } from 'react';
import { X, Paperclip } from 'lucide-react';
import styles from './EquipmentContactModal.module.css';

const EquipmentContactModal = ({ isOpen, onClose, equipment, isTonly = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    message: ''
  });
  
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        mobile: '',
        company: '',
        message: ''
      });
      setAttachedFiles([]);
      setFileError('');
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle file attachment
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFileError('');
    
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/jpg'
    ];
    
    const validFiles = [];
    
    for (let file of files) {
      if (file.size > maxSize) {
        setFileError(`${file.name} is too large. Maximum size is 10MB.`);
        continue;
      }
      
      if (!allowedTypes.includes(file.type)) {
        setFileError(`${file.name} is not a supported file type.`);
        continue;
      }
      
      validFiles.push(file);
    }
    
    setAttachedFiles(prev => [...prev, ...validFiles]);
    e.target.value = '';
  };

  const handleRemoveFile = (index) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
    setFileError('');
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create FormData object
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('mobile', formData.mobile);
    submitData.append('company', formData.company);
    submitData.append('message', formData.message);
    submitData.append('equipmentModel', equipment?.model || '');
    submitData.append('equipmentType', equipment?.type || '');
    submitData.append('equipmentCategory', equipment?.category || '');
    
    attachedFiles.forEach((file, index) => {
      submitData.append(`attachment_${index}`, file);
    });
    
    console.log('Equipment inquiry submitted:', {
      formData,
      equipment: {
        model: equipment?.model,
        type: equipment?.type,
        category: equipment?.category
      },
      files: attachedFiles
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Thank you for your interest in the ${equipment?.model}! We will contact you shortly with a detailed quotation.`);
      onClose();
    }, 1000);
    
    // In production, replace with actual API call:
    // try {
    //   const response = await fetch('/api/equipment-inquiry', {
    //     method: 'POST',
    //     body: submitData
    //   });
    //   const data = await response.json();
    //   if (data.success) {
    //     alert(`Thank you for your interest in the ${equipment?.model}!`);
    //     onClose();
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('There was an error submitting your inquiry. Please try again.');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !equipment) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} disabled={isSubmitting}>
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={`${styles.equipmentBadge} ${isTonly ? styles.tonlyBadge : ''}`}>
            {equipment.category}
          </div>
          <h2 className={styles.modalTitle}>Request a Quote</h2>
          <p className={styles.equipmentInfo}>
            <strong>{equipment.model}</strong> - {equipment.type}
          </p>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          <p className={styles.introText}>
            Fill out the form below and our sales team will contact you with detailed information and pricing for this equipment.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobile" className={styles.label}>
                  Mobile Number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Additional Information / Requirements
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={4}
                placeholder="Tell us about your project, timeline, quantity needed, or any specific requirements..."
                disabled={isSubmitting}
              />
            </div>

            {/* File Attachment Section */}
            <div className={styles.attachmentSection}>
              <label htmlFor="file-upload" className={styles.attachmentLabel}>
                <Paperclip size={18} />
                <span>Attach Documents (Project Details, Specifications, etc.)</span>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className={styles.fileInput}
                  disabled={isSubmitting}
                />
              </label>
              <p className={styles.attachmentHint}>
                PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
              </p>
            </div>

            {/* File Error Message */}
            {fileError && (
              <div className={styles.fileError}>
                {fileError}
              </div>
            )}

            {/* Attached Files List */}
            {attachedFiles.length > 0 && (
              <div className={styles.attachedFilesList}>
                <p className={styles.attachedFilesTitle}>Attached Files:</p>
                {attachedFiles.map((file, index) => (
                  <div key={index} className={styles.attachedFile}>
                    <div className={styles.fileInfo}>
                      <Paperclip size={16} />
                      <span className={styles.fileName}>{file.name}</span>
                      <span className={styles.fileSize}>({formatFileSize(file.size)})</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className={styles.removeFileBtn}
                      aria-label="Remove file"
                      disabled={isSubmitting}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={`${styles.submitBtn} ${isTonly ? styles.tonlySubmitBtn : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EquipmentContactModal;