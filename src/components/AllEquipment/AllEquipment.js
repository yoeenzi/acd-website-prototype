import React from 'react';
import AllEquipmentHero from '../AllEquipmentHero/AllEquipmentHero';
import AllEquipmentList from '../AllEquipmentList/AllEquipmentList';
import ContactForm from '../ContactForm/ContactForm';

const AllEquipment = ({ onNavigateToTonly }) => {
  return (
    <div className="all-equipment-page">
      <AllEquipmentHero onNavigateToTonly={onNavigateToTonly} />
      <AllEquipmentList />
      <ContactForm />
    </div>
  );
};

export default AllEquipment;