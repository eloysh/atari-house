<<<<<<< HEAD
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
=======
import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем createRoot из react-dom/client
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage';
import SearchResultPage from './SearchResultsPage';
import PropertyDetailPage from './PropertyDetailsPage';
import AuthPage from './AuthPage';
import UserProfilePage from './UserProfilePage';
import MortgageCalculator from './MortgageCalculator';
import RealEstateCatalog from './RealEstateCatalog';
import Menu from './Menu';

ReactDOM.createRoot(document.getElementById('root')).render(
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
  <Router>
    <div>
      <Menu />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/mortgage" element={<MortgageCalculator />} />
        <Route path="/homepage-catalog" element={<Homepagecatalog />} />
        <Route path="/real-estate-catalog" element={<RealEstateCatalog />} />
        <Route path="/mortgage-program" element={<MortgageDescription />} />
        <Route path="/construction-details" element={<ConstructionDetails propertiesData={propertiesData} />} />
      </Routes>
    </div>
  </Router>,
  document.getElementById('root')
=======
        <Route exact path="/search" element={<SearchResultPage />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/mortgage" element={<MortgageCalculator />} />
        <Route path="/real-estate-catalog" element={<RealEstateCatalog />} />
      </Routes>
    </div>
  </Router>
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
);
