import arrowRight from '../../../assets/icons/arrow-slick-right.svg';

import styles from './customArrow.module.scss'

interface ArrowProps {
  onClick: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={arrowRight} className={styles['arrw-left']} alt="hamd" />
    </button>
  );
};

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={arrowRight} className={styles['arrw-right']} alt="hamd" />
    </button>
  );
};
