// CustomArrow.js
// import React from 'react';
import arrowRight from '../../../assets/icons/arrow-slick-right.svg';

import styles from './customArrow.module.scss'

export const PrevArrow = () => {
  return (
    <img src={arrowRight} className={styles['arrw-left']} alt="hamd" />
  );
};

export const NextArrow = () => {
  return (
    <img src={arrowRight} className={styles['arrw-right']} alt="hamd" />
  );
};
