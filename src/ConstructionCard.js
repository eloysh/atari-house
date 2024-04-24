import React from 'react';
import './ConstructionCard.css';
<<<<<<< HEAD

const ConstructionCard = ({ property, onClick }) => {
  return (
    <div className="construction-card" onClick={() => onClick(property)}>
      <img src={property.images[0]} alt={property.title} className="card-image" />
      <div className="card-details">
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <p>{property.price}</p>
      </div>
=======
const ConstructionCard = ({ property, onClick }) => {
  return (
    <div className="construction-card" onClick={() => onClick(property)}>
      <img src={property.images[0]} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>{property.price}</p>
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
    </div>
  );
};

export default ConstructionCard;
