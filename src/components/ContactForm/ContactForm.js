import React, { useState } from 'react';
import { Paperclip, X } from 'lucide-react';
import styles from './ContactForm.module.css';
// Import team background image
import teamBg from '../../assets/team-bg.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    inquiry: ''
  });
  
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [fileError, setFileError] = useState('');

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
    
    // Validate files
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
      // Check file size
      if (file.size > maxSize) {
        setFileError(`${file.name} is too large. Maximum size is 10MB.`);
        continue;
      }
      
      // Check file type
      if (!allowedTypes.includes(file.type)) {
        setFileError(`${file.name} is not a supported file type. Please upload PDF, DOC, DOCX, JPG, or PNG files.`);
        continue;
      }
      
      validFiles.push(file);
    }
    
    // Add valid files to attachedFiles
    setAttachedFiles(prev => [...prev, ...validFiles]);
    
    // Reset file input
    e.target.value = '';
  };

  // Remove attached file
  const handleRemoveFile = (index) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
    setFileError('');
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData object to handle file uploads
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('mobile', formData.mobile);
    submitData.append('inquiry', formData.inquiry);
    
    // Append all attached files
    attachedFiles.forEach((file, index) => {
      submitData.append(`attachment_${index}`, file);
    });
    
    console.log('Form submitted with data:', formData);
    console.log('Attached files:', attachedFiles);
    
    // Here you would typically send the data to your backend
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   body: submitData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   alert('Thank you for your inquiry! We will get back to you soon.');
    //   // Reset form
    //   setFormData({ name: '', email: '', mobile: '', inquiry: '' });
    //   setAttachedFiles([]);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   alert('There was an error submitting your form. Please try again.');
    // });
    
    alert('Thank you for your inquiry! We will get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', mobile: '', inquiry: '' });
    setAttachedFiles([]);
    setFileError('');
  };

  return (
    <section className={styles.contactSection} id="contact-form-section">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left side - Team Image */}
          <div className={styles.imageContainer}>
            <img 
              src={teamBg} 
              alt="ACE HD Team" 
              className={styles.teamImage}
            />
          </div>
          
          {/* Right side - Contact Form */}
          <div className={styles.formContainer}>
            <p className={styles.badge}>CONTACT US!</p>
            <h3 className={styles.formTitle}>LET'S GET YOU MOVING!</h3>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              <textarea
                name="inquiry"
                placeholder="Inquiry / Message"
                rows={4}
                value={formData.inquiry}
                onChange={handleChange}
                className={styles.formTextarea}
                required
              />
              
              {/* File Attachment Section */}
              <div className={styles.attachmentSection}>
                <label htmlFor="file-upload" className={styles.attachmentLabel}>
                  <Paperclip size={18} />
                  <span>Attach Files (Resume, Documents, Images)</span>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className={styles.fileInput}
                  />
                </label>
                <p className={styles.attachmentHint}>
                  Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
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
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              <button
                type="submit"
                className={styles.submitBtn}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;