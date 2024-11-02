import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { HeroBannerModel } from 'domain/models/heroBanner';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './HeroBanner.module.scss';
import bgHeroBanner from '../../../../assets/images/bg-hero-banner.svg';
import { NextArrow, PrevArrow } from '../customArrow';
import CustomDot from '../CustomDot/CustomDot';

interface HeroBannerProps {
    bannerDataProps: HeroBannerModel | undefined;
  }

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return isMobile;
};

const HeroBanner: React.FC<HeroBannerProps > = ({bannerDataProps}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const isMobile = useIsMobile();

    const settings = {
        dots: isMobile ? false : true,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
        arrows: isMobile ? false : true,
        centerPadding: '400px',
        nextArrow: <NextArrow onClick={function (): void { }} />,
        prevArrow: <PrevArrow onClick={function (): void { }} />,
        beforeChange: (current: number, next: number) => setActiveSlide(next),
        customPaging: (i: number) => (
            <CustomDot
              isActive={i === activeSlide}
              onClick={() => setActiveSlide(i)} 
            />
          ),
        appendDots: (dots: string[]) => (
            <div style={{ display: 'flex', justifyContent: 'left' }}>
                {dots}
            </div>
        ),
    };
    

    return (
        <>
         <div className={styles['hero-baner-container']} style={{backgroundImage: `url(${bgHeroBanner})`}}>
            <div className={styles['main-title']}>{bannerDataProps?.title}</div>
            <div className={styles['main-desc']}>{bannerDataProps?.desc}</div>
            <div className={styles['slider']}>
                <Slider {...settings}>
                    { bannerDataProps?.items.map((item) => (
                        <div key={item.title}>
                            <div className={styles['banner-items']} style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: "cover" }}>
                                <div className={styles['banner-items-inner']}>
                                    <div className={styles['item-content']}>
                                        <div className={styles['banner-title']}> {item.title}</div>
                                        <div className={styles['banner-desc']}> {item.desc}</div>
                                        <Link to={item.pageUrl} className={styles['banner-button']}>
                                            Cek Paket
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </>
    )
}

export default HeroBanner;