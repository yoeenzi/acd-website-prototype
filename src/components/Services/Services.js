import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import { Wrench, CheckCircle, Users } from 'lucide-react';
import styles from './Services.module.css';
import heroBackground from '../../assets/truck-hero2.png';

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      <Header />
      
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
              <p className={styles.badge}>EXCELLENCE IN SERVICE</p>
              <h1 className={styles.heroTitle}>
                Comprehensive Heavy<br />
                Equipment Services
              </h1>
              <p className={styles.heroSubtitle}>
                From sales to maintenance, training to consultation, ACD<br />
                Corporation provides end-to-end solutions for all your heavy<br />
                equipment needs. With decades of experience and a commitment<br />
                to excellence, we're your trusted partner in construction success.
              </p>
              
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>6</div>
                  <div className={styles.statLabel}>
                    Branches<br />
                    Nationwide
                  </div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>
                    Emergency<br />
                    Support
                  </div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>
                    Certified<br />
                    Technicians
                  </div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>1000+</div>
                  <div className={styles.statLabel}>
                    Satisfied<br />
                    Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className={styles.coreServices}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              OUR <span className={styles.redText}>CORE</span> SERVICES
            </h2>
            <p className={styles.sectionSubtitle}>
              Delivering value through comprehensive solutions tailored to your project requirements
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Equipment Sales */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" fill="#FF0000"/>
                  <path d="M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2M3 9h18" stroke="#FF0000" strokeWidth="2"/>
                  <path d="M8 5V3M16 5V3" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Equipment Sales</h3>
              <p className={styles.serviceDescription}>
                As the authorized dealer for Hyundai Construction Equipment and Tonly Trucks, we offer a comprehensive range of heavy machinery for construction, mining, and quarrying applications.
              </p>
              <ul className={styles.serviceList}>
                <li>Wide range of excavators, loaders, and trucks</li>
                <li>Competitive pricing and flexible payment terms</li>
                <li>Trade-in options available</li>
                <li>Customization for specific requirements</li>
              </ul>
            </div>

            {/* After-Sales Service */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7v7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#FF0000"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>After-Sales Service</h3>
              <p className={styles.serviceDescription}>
                Our comprehensive maintenance and repair services ensure your equipment operates at peak performance, minimizing downtime and maximizing productivity.
              </p>
              <ul className={styles.serviceList}>
                <li>Preventive maintenance programs</li>
                <li>24/7 emergency repair services</li>
                <li>Genuine Hyundai parts and lubricants</li>
                <li>Mobile service units for on-site support</li>
              </ul>
            </div>

            {/* Operator Training */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#FF0000"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Operator Training</h3>
              <p className={styles.serviceDescription}>
                Professional training programs designed to maximize operator safety and equipment productivity. Certified instructors provide hands-on training.
              </p>
              <ul className={styles.serviceList}>
                <li>Basic and advanced operator courses</li>
                <li>Safety certification programs</li>
                <li>On-site training available</li>
                <li>Customized training modules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className={styles.serviceProcess}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              OUR <span className={styles.redText}>SERVICE</span> PROCESS
            </h2>
            <p className={styles.sectionSubtitle}>
              A streamlined approach to deliver exceptional service every time
            </p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Consultation</h3>
                <p className={styles.stepDescription}>
                  Understanding your specific needs and project requirements
                </p>
              </div>
            </div>

            <div className={styles.processConnector}></div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Assessment</h3>
                <p className={styles.stepDescription}>
                  Evaluating equipment condition and service requirements
                </p>
              </div>
            </div>

            <div className={styles.processConnector}></div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Solution</h3>
                <p className={styles.stepDescription}>
                  Providing tailored solutions and transparent pricing
                </p>
              </div>
            </div>

            <div className={styles.processConnector}></div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Support</h3>
                <p className={styles.stepDescription}>
                  Ongoing support and maintenance to ensure satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default Services;