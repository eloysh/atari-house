
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage';
import Menu from './Menu';
import MortgageCalculator from './MortgageCalculator';
import RealEstateCatalog from './RealEstateCatalog';
import MortgageDescription from './MortgageDescription';
import Homepagecatalog from './homepagecatalog';
import ConstructionDetails from './ConstructionDetails'; // Импортируем ConstructionDetails
import propertiesData from './propertiesData'; // Импортируем propertiesData

ReactDOM.render(

  <Router>
    <div>
      <Menu />
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/mortgage" element={<MortgageCalculator />} />
        <Route path="/homepage-catalog" element={<Homepagecatalog />} />
        <Route path="/real-estate-catalog" element={<RealEstateCatalog />} />
        <Route path="/mortgage-program" element={<MortgageDescription />} />
        <Route path="/construction-details" element={<ConstructionDetails propertiesData={propertiesData} />} />
      </Routes>
    </div>
  </Router>,
  document.getElementById('root')

);
