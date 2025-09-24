import React from 'react';
import Header from '../Header/Header';
import AllEquipmentHero from '../AllEquipmentHero/AllEquipmentHero';
import AllEquipmentList from '../AllEquipmentList/AllEquipmentList';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

const AllEquipment = ({ onNavigateToTonly }) => {
  return (
    <div className="all-equipment-page">
      <Header />
      <AllEquipmentHero onNavigateToTonly={onNavigateToTonly} />
      <AllEquipmentList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AllEquipment;