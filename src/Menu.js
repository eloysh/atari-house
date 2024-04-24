<<<<<<< HEAD
// Menu.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logoImage from './logo.png';

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoImage from './logo.png';

// Define keyframes
const rotateLines = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  25% {
    transform: translateY(8px) rotate(45deg);
  }
  50% {
    transform: translateY(0) rotate(0);
  }
  75% {
    transform: translateY(-8px) rotate(-45deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

// Define LineWrapper component
const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

// Define styled components
const primaryColor = '#f2f2f2';
const secondaryColor = '#78e08f';
const accentColor = ' hsl(0, 0%, 0%)';

const MenuContainer = styled.div`
  height: 60px;
  background-color: ${primaryColor};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2000;

  @media screen and (max-width: 768px) {
    padding: 1px;
  }
`;

const MenuLogo = styled.img`
  width: 180px;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

const AgencyText = styled.span`
  margin-right: 10px;
  color: rgb(21 20 23);
  font-size: 19px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Line = styled.div`
  margin: 4px;
  width: 50px;
  height: 4px;
  background-color: ${accentColor};
  transition: transform 0.3s ease-in-out;
  animation: ${rotateLines} 1s ease-in-out forwards;
  opacity: ${props => (props.showMobileMenu ? '1' : '2')};

  &:nth-child(3) {
    transform: translateY(${props => (props.showMobileMenu ? '-8px' : '0')}) rotate(${props =>
  props.showMobileMenu ? '-45deg' : '0'});
  }
`;

const MenuItems = styled.nav`
  top: 0;
  left: 0;
  height: 300px;
  background-color: ${secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  margin-top: ${props => (props.showMobileMenu ? '0' : '2px')};

  ${props =>
  props.showMobileMenu &&
  `
    opacity: 1;
    pointer-events: all;
  `}
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const MenuItem = styled.li`
  margin: 20px 0;
`;

const MenuItemLink = styled(Link)`
  color: ${primaryColor};
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${accentColor};
  }
`;

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
  };

  return (
    <div>
<<<<<<< HEAD
      <Link to="/" onClick={closeMobileMenu}>
        <img src={logoImage} alt="Логотип" className="menu-logo" />
      </Link>
      {windowWidth < 768 ? (
        <div className={`hamburger-menu ${showMobileMenu ? 'active' : ''}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      ) : null}
      {windowWidth >= 768 || showMobileMenu ? (
        <nav className={`menu-container ${showMobileMenu ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/real-estate-catalog" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
                Новостройки
              </Link>
            </li>
            <li>
              <Link to="/homepage-catalog" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
                Дома от застройщиков
              </Link>
            </li>
            <li>
              <Link to="/mortgage-program" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
                Ипотека
              </Link>
            </li>
            <li>
              <Link to="/mortgage" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
                Калькулятор
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
=======
      <MenuContainer>
        <Link to="/">
          <MenuLogo src={logoImage} alt="Логотип" />
        </Link>
        <AgencyText>Агентство недвижимости</AgencyText>
        <HamburgerMenu onClick={toggleMobileMenu}>
          <LineWrapper>
            <Line showMobileMenu={showMobileMenu} />
            <Line showMobileMenu={showMobileMenu} />
            <Line showMobileMenu={showMobileMenu} />
          </LineWrapper>
        </HamburgerMenu>
      </MenuContainer>
      <MenuItems showMobileMenu={showMobileMenu}>
        <MenuList>
          <MenuItem>
            <MenuItemLink to="/" onClick={toggleMobileMenu}>
              Главная
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/search" onClick={toggleMobileMenu}>
              Поиск
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/mortgage" onClick={toggleMobileMenu}>
              Калькулятор
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/contact" onClick={toggleMobileMenu}>
              Контакты
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/auth" onClick={toggleMobileMenu}>
              Войти
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/profile" onClick={toggleMobileMenu}>
              Профиль
            </MenuItemLink>
          </MenuItem>
        </MenuList>
      </MenuItems>
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
    </div>
  );
};

export default Menu;
