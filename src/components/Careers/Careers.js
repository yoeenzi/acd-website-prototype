import React, { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import styles from './Careers.module.css';
// Import hero background - will use construction-bg.png as default
import heroBackground from '../../assets/careers.png';

const Careers = ({ onNavigateHome }) => {
  const [activeTab, setActiveTab] = useState('all');
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
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const jobPositions = [
    {
      id: 1,
      title: 'Heavy Equipment Mechanic',
      location: 'Davao City Branch',
      type: 'Full-Time',
      category: 'technical',
      description: 'Join our technical team to maintain and repair Hyundai construction equipment. Work with state-of-the-art machinery and tools.',
      requirements: [
        'Technical/Vocational graduate in Automotive or related field',
        '2+ years experience in heavy equipment maintenance',
        'Knowledge of hydraulic and diesel systems',
        'Willing to be assigned in any branch'
      ]
    },
    {
      id: 2,
      title: 'Heavy Equipment Mechanic',
      location: 'Multiple Locations',
      type: 'Full-Time',
      category: 'technical',
      description: 'Join our technical team to maintain and repair Hyundai construction equipment. Work with state-of-the-art machinery and tools.',
      requirements: [
        'Technical/Vocational graduate in Automotive or related field',
        '2+ years experience in heavy equipment maintenance',
        'Knowledge of hydraulic and diesel systems',
        'Willing to be assigned in any branch'
      ]
    },
    {
      id: 3,
      title: 'Heavy Equipment Mechanic',
      location: 'Davao City Branch',
      type: 'Full-Time',
      category: 'operations',
      description: 'Join our technical team to maintain and repair Hyundai construction equipment. Work with state-of-the-art machinery and tools.',
      requirements: [
        'Technical/Vocational graduate in Automotive or related field',
        '2+ years experience in heavy equipment maintenance',
        'Knowledge of hydraulic and diesel systems',
        'Willing to be assigned in any branch'
      ]
    },
    {
      id: 4,
      title: 'Heavy Equipment Mechanic',
      location: 'Davao City Branch',
      type: 'Full-Time',
      category: 'sales',
      description: 'Join our technical team to maintain and repair Hyundai construction equipment. Work with state-of-the-art machinery and tools.',
      requirements: [
        'Technical/Vocational graduate in Automotive or related field',
        '2+ years experience in heavy equipment maintenance',
        'Knowledge of hydraulic and diesel systems',
        'Willing to be assigned in any branch'
      ]
    }
  ];

  const filteredPositions = activeTab === 'all' 
    ? jobPositions 
    : jobPositions.filter(job => job.category === activeTab);

  const testimonials = [
    {
      name: 'Juan de la Cruz',
      position: 'Service Manager, 3 years',
      initials: 'JD',
      quote: 'Working at ACD Corporation has been an incredible journey. The company truly invests in its people, providing training opportunities and career advancement that helped me grow from a mechanic to a service manager.'
    },
    {
      name: 'Maria Santos',
      position: 'Sales Executive, 5 years',
      initials: 'MS',
      quote: "The TATA values aren't just words here - they're lived every day. The teamwork and support from colleagues make ACD a great place to build a career in the heavy equipment industry."
    },
    {
      name: 'Roberto Garcia',
      position: 'Senior Technician, 8 years',
      initials: 'RG',
      quote: "ACD Corporation provided me with Hyundai certification training that elevated my technical skills. The company's commitment to employee development is unmatched in this industry."
    }
  ];

  // Custom Core Values for Careers page with updated tagline
  const CoreValuesCareer = () => {
    const values = [
      {
        letter: 'T',
        title: 'Towards Sustainable Development',
        description: 'Ensuring all endeavors contribute to global sustainable development goals'
      },
      {
        letter: 'A',
        title: 'Alliance and Network Building',
        description: 'Establishing strong linkages and partnerships in all levels'
      },
      {
        letter: 'T',
        title: 'Teamwork and Human Resource',
        description: 'Investing in technical and operational skills among our staff'
      },
      {
        letter: 'A',
        title: 'Adaptation and Resilience',
        description: 'Venturing innovative mechanisms that merge technology'
      }
    ];

    return (
      <section className={styles.coreValues}>
        <div className="container">
          <h2 className={styles.coreValuesTitle}>
            EXPERIENCE A <span className={styles.textRed}>WORKPLACE CULTURE BUILT</span> ON
            <br />
            OUR <span className={styles.textRed}>CORE VALUES</span>
          </h2>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueCircle}>
                  <span className={styles.valueLetter}>{value.letter}</span>
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="careers-page">
      
      {/* Hero Section */}
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
              <span className={styles.badge}>JOIN OUR TEAM!</span>
              <h1 className={styles.heroTitle}>
                Build Your <span className={styles.yellowText}>Future</span> with <span className={styles.yellowText}>ACD Corporation</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Be part of a dynamic team that's driving the heavy equipment industry forward. At ACD Corporation, we invest in our people, nurture talent, and create opportunities for growth and excellence.
              </p>
              <div className={styles.heroButtons}>
                <button 
                  className={styles.btnPrimary}
                  onClick={() => {
                    const openPositionsSection = document.getElementById('open-positions-section');
                    if (openPositionsSection) {
                      openPositionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ACD Section */}
      <section className={styles.whyChoose}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            WHY CHOOSE <span className={styles.textRed}>ACD CORPORATION</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Join a company that values your growth and success as much as its own
          </p>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM4 9H20V14H15V11H9V14H4V9ZM13 15H11V13H13V15ZM19 19H5V16H9V17H15V16H19V19Z" fill="#FF0000"/>
                </svg>
              </div>
              <h3>Career Growth</h3>
              <p>Clear career paths and promotion opportunities across our franchise nationwide</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z" fill="#FF0000"/>
                </svg>
              </div>
              <h3>Training & Development</h3>
              <p>Continuous learning with Hyundai certification programs and skills enhancement</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#FF0000"/>
                </svg>
              </div>
              <h3>Comprehensive Benefits</h3>
              <p>Health insurance, life insurance, and retirement benefits for you and your family</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#FF0000"/>
                </svg>
              </div>
              <h3>Work-Life Balance</h3>
              <p>Flexible schedules and leave benefits to maintain a healthy work-life balance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions-section" className={styles.openPositions}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Explore opportunities to grow your career with us
          </h2>
          
          <div className={styles.tabContainer}>
            <button 
              className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Positions
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'technical' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('technical')}
            >
              Technical
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'sales' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('sales')}
            >
              Sales
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'operations' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('operations')}
            >
              Operations
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'administrative' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('administrative')}
            >
              Administrative
            </button>
          </div>

          <div className={styles.jobsGrid}>
            {filteredPositions.map((job) => (
              <div key={job.id} className={styles.jobCard}>
                <span className={styles.jobType}>{job.type}</span>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobLocation}>{job.location}</p>
                <p className={styles.jobDescription}>{job.description}</p>
                <ul className={styles.requirements}>
                  {job.requirements.map((req, index) => (
                    <li key={index}>✓ {req}</li>
                  ))}
                </ul>
                <button className={styles.applyBtn}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section with updated tagline */}
      <CoreValuesCareer />

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>WHAT OUR PEOPLE SAY</h2>
          <p className={styles.sectionSubtitle}>
            HEAR FROM TEAM MEMBERS WHO'VE BUILT THEIR CAREERS WITH US
          </p>
          
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quote}>"</div>
                <p className={styles.testimonialText}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorInitials}>{testimonial.initials}</div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className={styles.readyToStart}>
        <div className="container">
          <h2 className={styles.ctaTitle}>READY TO START YOUR JOURNEY?</h2>
          <p className={styles.ctaSubtitle}>
            Take the first step towards a rewarding career with ACD Corporation. Join us in building the future of the Philippines.
          </p>
          <div className={styles.ctaButtons}>
            <button 
              className={styles.btnLight}
              onClick={() => {
                const contactFormSection = document.getElementById('contact-form-section');
                if (contactFormSection) {
                  contactFormSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Send Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact-form-section">
        <ContactForm />
      </div>
      
      {/* Footer is now rendered in App.js, not here */}
    </div>
  );
};

export default Careers;