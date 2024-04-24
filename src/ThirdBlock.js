import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import handIcon from './hand-icon.svg'; // Import the hand icon
import './ThirdBlock.css'

const ThirdBlock = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['House-20.png', 'House-23.png', 'House-15.png']; // Path to images
=======

const ThirdBlock = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['1.jpg', '2.jpg', '3.jpg']; // Путь к изображениям
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
<<<<<<< HEAD
  }, [images.length]); // Add images.length to useEffect dependencies

  return (
    <div className="third-block">
      {/* Wrap the image and text in a Link component */}
      <Link to="/real-estate-catalog" className="link-wrapper">
        {/* Display the image and content */}
        <div className="background-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
          {/* Display the hand icon */}
          <img src={handIcon} alt="Hand Icon" className="hand-icon" />
          {/* Display the heading */}
          <h2>ИНДИВИДУАЛЬНОЕ ЖИЛИЩНОЕ СТРОИТЕЛЬСТВО</h2>
        </div>
        {/* Add a button below the images */}
        <button className="navigate-button">Перейти</button>
      </Link>
=======
  }, [images.length]); // Добавляем images.length в зависимости useEffect

  return (
    <div className="third-block">
      <h2>ИНДИВИДУАЛЬНОЕ ЖИЛИЩНОЕ СТРОИТЕЛЬСТВО</h2>
      {/* Выводим текущее изображение с помощью индекса */}
      <div className="background-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}></div>
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
    </div>
  );
};

export default ThirdBlock;
<<<<<<< HEAD


=======
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
