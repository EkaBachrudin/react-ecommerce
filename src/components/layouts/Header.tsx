import React, { useState } from 'react';

import logo from '../../logo.svg'; 
import hamburger from '../../assets/icons/hamburger-dark.svg'
import './Header.scss';
import SlideMenu from './SideMenu/SlideMenu';

const Header: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
   <>
    <header className="header-container">
     <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={toggleMenu}>
        <img src={hamburger} className="hamburger" alt="hamd" />
      </button>
     </div>
    </header>
    
    <SlideMenu isOpen={isMenuOpen} onClose={closeMenu}/>
   </>
  );
};

export default Header;
