import React from 'react';
import TonlyEquipmentHero from '../TonlyEquipmentHero/TonlyEquipmentHero';
import TonlyEquipmentList from '../TonlyEquipmentList/TonlyEquipmentList';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

const TonlyEquipment = ({ onBackToAll }) => {
  return (
    <div className="tonly-equipment-page">
      <TonlyEquipmentHero onBackToAll={onBackToAll} />
      <TonlyEquipmentList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default TonlyEquipment;