import React from 'react';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import styles from './AboutUs.module.css';

// Placeholder imports for images - replace with actual images later
import placeholderHero from '../../assets/aboutus-hero.png';
import placeholderStory from '../../assets/excavator-working.png';

const AboutUs = ({ 
  onNavigateHome,
  onNavigateToServices,
  onNavigateToAbout,
  onNavigateToHyundai
}) => {
  return (
    <div className={styles.aboutPage}>
      {/* About Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.heroOverlay}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>ESTABLISHED LEADER SINCE INCEPTION</span>
              <h1 className={styles.heroTitle}>
                Building Tomorrow with<br />
                <span className={styles.textRed}>Excellence</span> Today
              </h1>
              <p className={styles.heroDescription}>
                ACD Corporation stands as a testament to decades of business excellence, forging the future<br />
                of heavy equipment distribution in the Philippines through innovation, integrity, and<br />
                unwavering commitment to customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.ourStory}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2 className={styles.storyTitle}>OUR STORY</h2>
              <p className={styles.companyName}>
                <span className={styles.textRed}>Advancement of Commerce for Development Corporation (ACD Corporation)</span> is a product of decades of business experiences among its directors and officers. The accumulated experience in business with several corporations established by the founders developed business acumen and the need to establish a business that will complete the value chain in the conglomerate of businesses run and managed by the family.
              </p>
              <p className={styles.storyText}>
                Among the existing businesses in the conglomerate, the biggest chunk of expenditures is for the equipment and maintenance. The challenge to quality equipment and management in all business ventures led to the decision to establish a corporation with separate and distinct business operations aimed to complete the logistics and supply chain of the existing business enterprises.
              </p>
              <p className={styles.storyText}>
                Today, as the authorized country dealer for <span className={styles.textRed}>Hyundai Construction Equipment</span> and <span className={styles.textRed}>Tonly Trucks</span>, we provide a wide variety of equipment suitable for construction, mining, and quarry industries. We also carry other leading global brands of Heavy Construction Equipment, Commercial Vehicles, and Special Purpose Vehicles.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img src={placeholderStory} alt="Construction Equipment" />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose and Direction Section */}
      <section className={styles.purposeSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            OUR <span className={styles.textRed}>PURPOSE</span> AND <span className={styles.textRed}>DIRECTION</span>
          </h2>
          <div className={styles.purposeGrid}>
            {/* Mission */}
            <div className={styles.purposeCard}>
              <div className={styles.iconCircle} style={{backgroundColor: '#FF0000'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              </div>
              <h3 className={styles.purposeTitle}>Mission</h3>
              <p className={styles.purposeText}>
                A Topnotch Corporation Taking The Lead In The Global Heavy Equipment And Construction Machinery Value And Supply Chain Links
              </p>
            </div>

            {/* Vision */}
            <div className={styles.purposeCard}>
              <div className={styles.iconCircle} style={{backgroundColor: '#FBBF24'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="white"/>
                </svg>
              </div>
              <h3 className={styles.purposeTitle}>Vision</h3>
              <p className={styles.purposeText}>
                Forge Synergy With Technology And Humanity In Responding To The Logistics And Supply Chain Requirements Of The Industry Players To Advance Commerce And Development Where It Is Needed Most.
              </p>
            </div>

            {/* Goal */}
            <div className={styles.purposeCard}>
              <div className={styles.iconCircle} style={{backgroundColor: '#FF0000'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/>
                </svg>
              </div>
              <h3 className={styles.purposeTitle}>Goal</h3>
              <p className={styles.purposeText}>
                Creating Values Among Industry Players To Deliver Services Essential For Optimum Industrialization And Achieving Sustainable Development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={styles.coreValuesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            ACD LIVES ITS <span className={styles.textRed}>CORE VALUES</span> – EVERY{' '}
            <span className={styles.textRed}>MACHINE</span>,
            <br />
            EVERY <span className={styles.textRed}>MOVE</span>.
          </h2>
          
          <div className={styles.coreValuesGrid}>
            {[
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
            ].map((value, index) => (
              <div key={index} className={styles.coreValueCard}>
                <div className={styles.iconCircle} style={{backgroundColor: '#FBBF24'}}>
                  <span className={styles.coreValueLetter}>{value.letter}</span>
                </div>
                <h3 className={styles.coreValueTitle}>{value.title}</h3>
                <p className={styles.coreValueText}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with Excellence Section */}
      <section className={styles.partnerSection}>
        <div className="container">
          <div className={styles.partnerContent}>
            <h2 className={styles.partnerTitle}>PARTNER WITH EXCELLENCE</h2>
            <p className={styles.partnerText}>
              Join the growing family of satisfied clients who trust<br />
              ACD Corporation for their heavy equipment needs.
            </p>
            <button className={styles.downloadBtn}>Download Company Profile</button>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Reusing existing component */}
      <ContactForm />

      {/* Footer - Reusing existing component with navigation props */}
      <Footer 
        onNavigateHome={onNavigateHome}
        onNavigateToServices={onNavigateToServices}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToHyundai={onNavigateToHyundai}
      />
    </div>
  );
};

export default AboutUs;