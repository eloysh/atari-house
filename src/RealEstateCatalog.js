import React, { useState } from 'react';
<<<<<<< HEAD
import ConstructionCard from './ConstructionCard';
import ConstructionDetailsModal from './ConstructionDetailsModal';
import propertiesData from './propertiesData';
import './RealEstateCatalog.css';

const RealEstateCatalog = () => {
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleCardClick = (index) => {
    setSelectedPropertyIndex(index);
=======
import ConstructionCard from './ConstructionCard'; // Проверьте путь к этому компоненту
import ConstructionDetailsModal from './ConstructionDetailsModal'; // Проверьте путь к этому компоненту
import propertiesData from './propertiesData'; // Проверьте путь к файлу с данными о недвижимости

import './RealEstateCatalog.css';
const RealEstateCatalog = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleCardClick = (property) => {
    setSelectedProperty(property);
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
    setIsOpen(true);
  };

  const handleCloseModal = () => {
<<<<<<< HEAD
    setSelectedPropertyIndex(null);
=======
    setSelectedProperty(null);
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
    setIsOpen(false);
  };

  const handlePrevImage = () => {
<<<<<<< HEAD
    setImageIndex((prevIndex) => (prevIndex === 0 ? propertiesData[selectedPropertyIndex].images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % propertiesData[selectedPropertyIndex].images.length);
=======
    setImageIndex((prevIndex) => (prevIndex === 0 ? selectedProperty.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % selectedProperty.images.length);
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
  };

  return (
    <div className="real-estate-catalog">
      <h1>Каталог недвижимости</h1>
      <div className="property-list">
<<<<<<< HEAD
        {propertiesData.map((property, index) => (
          <ConstructionCard key={property.id} property={property} onClick={() => handleCardClick(index)} />
=======
        {propertiesData.map((property) => (
          <ConstructionCard key={property.id} property={property} onClick={handleCardClick} />
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
        ))}
      </div>
      {isOpen && (
        <ConstructionDetailsModal
<<<<<<< HEAD
          property={propertiesData[selectedPropertyIndex]}
=======
          property={selectedProperty}
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
          onClose={handleCloseModal}
          imageIndex={imageIndex}
          onPrevImage={handlePrevImage}
          onNextImage={handleNextImage}
        />
      )}
    </div>
  );
};

export default RealEstateCatalog;
