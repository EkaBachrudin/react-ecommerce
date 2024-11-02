import React, { useState } from 'react';
import styles from './SlideMenu.module.scss';

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SlideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className="sidemenu-mobile-container">
     <div className={`${styles['side-menu']} ${isOpen ? styles.open : ''}`}>
        <button
          onClick={onClose}
          className=""
        >
          <svg
            className="w-6 h-6"
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
        <nav className="mt-16 space-y-4 text-gray-800 p-4">
          <a href="#home" className="block text-lg font-semibold hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="block text-lg font-semibold hover:text-blue-500">
            About
          </a>
          <a href="#services" className="block text-lg font-semibold hover:text-blue-500">
            Services
          </a>
          <a href="#contact" className="block text-lg font-semibold hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>

      {/* Overlay (to close the menu when clicking outside) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default SlideMenu;
