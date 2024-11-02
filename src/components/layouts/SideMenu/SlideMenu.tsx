import React from 'react';
import styles from './SlideMenu.module.scss';

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SlideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles['sidemenu-mobile-container']}`}>
     <div className={`${styles['side-menu']} ${isOpen ? styles.open : ''}`}>
        <button
          onClick={onClose}
          className=""
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Menu Content */}
        <nav className={`${styles['navigation']}`}>
          <a href="#home" className={`${styles['item']}`}>
            Home
          </a>
          <a href="#about" className={`${styles['item']}`}>
            About
          </a>
          <a href="#services" className={`${styles['item']}`}>
            Services
          </a>
          <a href="#contact" className={`${styles['item']}`}>
            Contact
          </a>
        </nav>
    </div>

      {/* Overlay (to close the menu when clicking outside) */}
      {isOpen && (
        <button
          onClick={onClose}
          className={`${styles['overlay']}`}
        ></button>
      )}
    </div>
  );
};

export default SlideMenu;
