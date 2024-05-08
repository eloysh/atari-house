import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OtherPage from './OtherPage';
import RealEstateCatalog from './RealEstateCatalog';
import HomePage from './HomePage';
import MortgageDescription from './MortgageDescription';
import Menu from './Menu';
import ConstructionDetails from './ConstructionDetails';
import propertiesData from './propertiesData';
import HalfPageGallery from './HalfPageGallery';


const App = () => {


  return (
    <Router>
      <Menu isAuthenticated={isAuthenticated} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HalfPageGallery />} />
          {/* Define routes */}
          <Route path="/straniza" element={<Straniza />} />
    
          {/* Private routes */}
          <PrivateRoute path="/mortgage" element={<OtherPage />} />
          <PrivateRoute path="/home" element={<HomePage />} />
          <PrivateRoute path="/real-estate-catalog" element={<RealEstateCatalog />} />
          <PrivateRoute path="/homepage-catalog" element={<Homepagecatalog />} />
          <PrivateRoute path="/mortgage-program" element={<MortgageDescription />} />
          <PrivateRoute path="/construction-details" element={<ConstructionDetails propertiesData={propertiesData} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
