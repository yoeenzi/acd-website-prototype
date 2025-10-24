import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EquipmentShowcase from './components/EquipmentShowcase/EquipmentShowcase';
import AboutSection from './components/AboutSection/AboutSection';
import CoreValues from './components/CoreValues/CoreValues';
import NewsEvents from './components/NewsEvents/NewsEvents';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import AllEquipment from './components/AllEquipment/AllEquipment';
import TonlyEquipment from './components/TonlyEquipment/TonlyEquipment';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Careers from './components/Careers/Careers';
import NewsEventsFullPage from './components/NewsEventsFullPage/NewsEventsFullPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollToHyundai, setScrollToHyundai] = useState(false);

  // Handle navigation to home
  const handleNavigateHome = () => {
    setScrollToHyundai(false);
    // Scroll to top instantly first
    window.scrollTo({ top: 0 });
    // Then change page after a brief moment
    setTimeout(() => {
      setCurrentPage('home');
    }, 50);
  };

  // Handle navigation to Hyundai Equipment
  const handleNavigateToHyundai = () => {
    // Check if already on all-equipment page
    if (currentPage === 'all-equipment') {
      // Just scroll to section, don't change page
      setTimeout(() => {
        const equipmentSection = document.getElementById('equipment-section');
        if (equipmentSection) {
          equipmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top instantly first
      window.scrollTo({ top: 0 });
      setScrollToHyundai(true);
      // Then navigate to page
      setTimeout(() => {
        setCurrentPage('all-equipment');
      }, 50);
    }
  };

  // Handle navigation to Tonly Trucks
  const handleNavigateToTonly = () => {
    setScrollToHyundai(false);
    // Scroll to top instantly first
    window.scrollTo({ top: 0 });
    // Then change page after a brief moment
    setTimeout(() => {
      setCurrentPage('tonly-equipment');
    }, 50);
  };

  // Handle navigation to Services
  const handleNavigateToServices = () => {
    setScrollToHyundai(false);
    // Scroll to top instantly first
    window.scrollTo({ top: 0 });
    // Then change page after a brief moment
    setTimeout(() => {
      setCurrentPage('services');
    }, 50);
  };

  // Handle navigation to About Us
  const handleNavigateToAbout = () => {
    setScrollToHyundai(false);
    // Scroll to top instantly first
    window.scrollTo({ top: 0 });
    // Then change page after a brief moment
    setTimeout(() => {
      setCurrentPage('about-us');
    }, 50);
  };

  // Handle navigation to Careers
  const handleNavigateToCareers = () => {
    setScrollToHyundai(false);
    // Scroll to top instantly first
    window.scrollTo({ top: 0 });
    // Then change page after a brief moment
    setTimeout(() => {
      setCurrentPage('careers');
    }, 50);
  };

  // Handle navigation to News & Events - UPDATED
  const handleNavigateToNewsEvents = () => {
    setScrollToHyundai(false);
    // Scroll to top instantly first
    window.scrollTo({ top: 0 });
    // Then change page after a brief moment
    setTimeout(() => {
      setCurrentPage('news-events');
    }, 50);
  };

  // Handle "View All" from Equipment Showcase
  const handleViewAllEquipment = () => {
    setScrollToHyundai(false); // Don't auto-scroll to equipment section
    // Scroll to top instantly first
    window.scrollTo({ top: 0 });
    // Then change page after a brief moment
    setTimeout(() => {
      setCurrentPage('all-equipment');
    }, 50);
  };

  // Scroll to equipment section after page loads - ONLY for all-equipment page
  useEffect(() => {
    if (scrollToHyundai && currentPage === 'all-equipment') {
      // First scroll to top instantly
      window.scrollTo({ top: 0 });
      // Then scroll to equipment section smoothly after a delay
      setTimeout(() => {
        const equipmentSection = document.getElementById('equipment-section');
        if (equipmentSection) {
          equipmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setScrollToHyundai(false);
      }, 300);
    } else if (currentPage !== 'all-equipment') {
      // Reset scroll flag when leaving all-equipment page
      setScrollToHyundai(false);
    }
  }, [currentPage, scrollToHyundai]);

  // Common header props for all pages
  const headerProps = {
    onNavigateHome: handleNavigateHome,
    onNavigateToServices: handleNavigateToServices,
    onNavigateToAbout: handleNavigateToAbout,
    onNavigateToCareers: handleNavigateToCareers,
    onNavigateToHyundai: handleNavigateToHyundai,
    onNavigateToTonly: handleNavigateToTonly
  };

  // Common footer props for all pages
  const footerProps = {
    onNavigateHome: handleNavigateHome,
    onNavigateToServices: handleNavigateToServices,
    onNavigateToAbout: handleNavigateToAbout,
    onNavigateToHyundai: handleNavigateToHyundai
  };

  // Show News & Events Full Page
  if (currentPage === 'news-events') {
    return (
      <div className="App">
        <NewsEventsFullPage 
          onNavigateHome={handleNavigateHome}
          onNavigateToServices={handleNavigateToServices}
          onNavigateToAbout={handleNavigateToAbout}
          onNavigateToCareers={handleNavigateToCareers}
          onNavigateToHyundai={handleNavigateToHyundai}
          onNavigateToTonly={handleNavigateToTonly}
        />
      </div>
    );
  }

  // Show Careers page
  if (currentPage === 'careers') {
    return (
      <div className="App">
        <Header {...headerProps} />
        <Careers onNavigateHome={handleNavigateHome} />
        <Footer {...footerProps} />
      </div>
    );
  }

  // Show About Us page
  if (currentPage === 'about-us') {
    return (
      <div className="App">
        <Header {...headerProps} />
        <AboutUs onNavigateHome={handleNavigateHome} />
      </div>
    );
  }

  // Show Services page
  if (currentPage === 'services') {
    return (
      <div className="App">
        <Header {...headerProps} />
        <Services />
        <Footer {...footerProps} />
      </div>
    );
  }

  // Show Tonly Equipment page
  if (currentPage === 'tonly-equipment') {
    return (
      <div className="App">
        <Header {...headerProps} />
        <TonlyEquipment 
          onBackToAll={() => setCurrentPage('all-equipment')} 
        />
        <Footer {...footerProps} />
      </div>
    );
  }

  // Show All Equipment page (Hyundai)
  if (currentPage === 'all-equipment') {
    return (
      <div className="App">
        <Header {...headerProps} />
        <AllEquipment 
          onNavigateToTonly={handleNavigateToTonly} 
        />
        <Footer {...footerProps} />
      </div>
    );
  }

  // Show Home page
  return (
    <div className="App">
      <Header {...headerProps} />
      <Hero onNavigateToHyundai={handleNavigateToHyundai} />
      <EquipmentShowcase onViewAll={() => {
        setScrollToHyundai(false); // Don't auto-scroll to equipment section
        // Scroll to top instantly first
        window.scrollTo({ top: 0 });
        // Then change page after a brief moment
        setTimeout(() => {
          setCurrentPage('all-equipment');
        }, 50);
      }} />
      <AboutSection />
      <CoreValues />
      <NewsEvents onViewAll={handleNavigateToNewsEvents} />
      <ContactForm />
      <Footer {...footerProps} />
    </div>
  );
}

export default App;