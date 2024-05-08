import React, { useState, useEffect } from 'react';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Путь к изображениям

const HalfPageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Функция для автоматической смены изображений с интервалом
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // Интервал смены изображений в миллисекундах (здесь каждые 2 секунды)

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []); // Удалите зависимость, чтобы интервал был установлен только один раз при монтировании

  return (
    <div style={{ height: '80vh', overflow: 'hidden' }}> {/* Добавьте overflow: 'hidden' для обрезания изображений, выходящих за пределы */}
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default HalfPageGallery;
