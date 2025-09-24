import React from 'react';
import Header from '../Header/Header';
import TonlyEquipmentHero from '../TonlyEquipmentHero/TonlyEquipmentHero';
import TonlyEquipmentList from '../TonlyEquipmentList/TonlyEquipmentList';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

const TonlyEquipment = ({ onBackToAll }) => {
  return (
    <div className="tonly-equipment-page">
      <Header />
      <TonlyEquipmentHero onBackToAll={onBackToAll} />
      <TonlyEquipmentList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default TonlyEquipment;