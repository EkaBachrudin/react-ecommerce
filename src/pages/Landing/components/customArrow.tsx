import arrowRight from '../../../assets/icons/arrow-slick-right.svg';
import arrowLeft from '../../../assets/icons/arrow-slick-left.svg';

import styles from './customArrow.module.scss'

interface ArrowProps {
  onClick: () => void,
  extraStyle: React.CSSProperties,
  isVisible?: boolean
}


export const PrevArrow: React.FC<ArrowProps> = ({ onClick, extraStyle, isVisible }) => {
  return (
    isVisible ? <button onClick={onClick}>
      <img src={arrowLeft} className={styles['arrw-left']} alt="re" style={extraStyle} />
    </button> : null
  );
};

export const NextArrow: React.FC<ArrowProps> = ({ onClick, extraStyle, isVisible }) => {
  return (
    isVisible ? <button onClick={onClick}>
      <img src={arrowRight} className={styles['arrw-right']} alt="as" style={extraStyle} />
    </button> : null
  );
};
