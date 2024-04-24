// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Straniza from './Straniza';
import OtherPage from './OtherPage';
import RealEstateCatalog from './RealEstateCatalog';
import HomePage from './HomePage';
import MortgageDescription from './MortgageDescription';
import Menu from './Menu'; // Импортируем компонент Menu
import ConstructionDetails from './ConstructionDetails';
import propertiesData from './propertiesData';
import HologramBackground from './HologramBackground';

const App = () => {
  return (
    <Router>
      <HologramBackground />
      <Menu /> {/* Добавляем компонент Menu здесь */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Straniza />} />
          <Route path="/mortgage" element={<OtherPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/real-estate-catalog" element={<RealEstateCatalog />} />
          <Route path="/homepage-catalog" element={<Homepagecatalog />} />
          <Route path="/mortgage-program" element={<MortgageDescription />} />
          <Route path="/construction-details" element={<ConstructionDetails propertiesData={propertiesData} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
