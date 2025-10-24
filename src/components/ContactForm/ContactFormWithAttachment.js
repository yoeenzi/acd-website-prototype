import React, { useState } from 'react';
import styles from './ContactForm.module.css';
// Import team background image
import teamBg from '../../assets/team-bg.png';

const ContactFormWithAttachment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    inquiry: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
    
    // Here you would typically send the data to your backend
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   alert('Thank you for your inquiry! We will get back to you soon.');
    //   // Reset form
    //   setFormData({ name: '', email: '', mobile: '', inquiry: '' });
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   alert('There was an error submitting your form. Please try again.');
    // });
    
    alert('Thank you for your inquiry! We will get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', mobile: '', inquiry: '' });
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

export default ContactFormWithAttachment;