import React, { useState } from 'react';
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
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Show Careers page
  if (currentPage === 'careers') {
    return (
      <div className="App">
        <Careers onNavigateHome={() => setCurrentPage('home')} />
      </div>
    );
  }

  // Show About Us page
  if (currentPage === 'about-us') {
    return (
      <div className="App">
        <AboutUs onNavigateHome={() => setCurrentPage('home')} />
      </div>
    );
  }

  // Show Services page
  if (currentPage === 'services') {
    return (
      <div className="App">
        <Services />
      </div>
    );
  }

  // Show Tonly Equipment page
  if (currentPage === 'tonly-equipment') {
    return (
      <div className="App">
        <TonlyEquipment 
          onBackToAll={() => setCurrentPage('all-equipment')} 
        />
      </div>
    );
  }

  // Show All Equipment page
  if (currentPage === 'all-equipment') {
    return (
      <div className="App">
        <AllEquipment 
          onNavigateToTonly={() => setCurrentPage('tonly-equipment')} 
        />
      </div>
    );
  }

  // Show Home page
  return (
    <div className="App">
      <Header 
        onNavigateToServices={() => setCurrentPage('services')}
        onNavigateToAbout={() => setCurrentPage('about-us')}
        onNavigateToCareers={() => setCurrentPage('careers')}
      />
      <Hero />
      <EquipmentShowcase onViewAll={() => setCurrentPage('all-equipment')} />
      <AboutSection />
      <CoreValues />
      <NewsEvents />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;