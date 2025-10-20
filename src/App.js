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
    setCurrentPage('home');
    setScrollToHyundai(false);
  };

  // Handle navigation to Hyundai Equipment
  const handleNavigateToHyundai = () => {
    setCurrentPage('all-equipment');
    setScrollToHyundai(true);
  };

  // Handle navigation to Tonly Trucks
  const handleNavigateToTonly = () => {
    setCurrentPage('tonly-equipment');
    setScrollToHyundai(false);
  };

  // Handle navigation to Services
  const handleNavigateToServices = () => {
    setCurrentPage('services');
    setScrollToHyundai(false);
  };

  // Handle navigation to About Us
  const handleNavigateToAbout = () => {
    setCurrentPage('about-us');
    setScrollToHyundai(false);
  };

  // Handle navigation to Careers
  const handleNavigateToCareers = () => {
    setCurrentPage('careers');
    setScrollToHyundai(false);
  };

  // Handle navigation to News & Events
  const handleNavigateToNewsEvents = () => {
    setCurrentPage('news-events');
    setScrollToHyundai(false);
  };

  // Scroll to equipment section after page loads
  useEffect(() => {
    if (scrollToHyundai && currentPage === 'all-equipment') {
      setTimeout(() => {
        const equipmentSection = document.getElementById('equipment-section');
        if (equipmentSection) {
          equipmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setScrollToHyundai(false);
      }, 100);
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

  // Show News & Events Full Page
  if (currentPage === 'news-events') {
    return (
      <div className="App">
        <NewsEventsFullPage onNavigateHome={handleNavigateHome} />
      </div>
    );
  }

  // Show Careers page
  if (currentPage === 'careers') {
    return (
      <div className="App">
        <Header {...headerProps} />
        <Careers onNavigateHome={handleNavigateHome} />
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
      </div>
    );
  }

  // Show Home page
  return (
    <div className="App">
      <Header {...headerProps} />
      <Hero />
      <EquipmentShowcase onViewAll={() => setCurrentPage('all-equipment')} />
      <AboutSection />
      <CoreValues />
      <NewsEvents onViewAll={handleNavigateToNewsEvents} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;