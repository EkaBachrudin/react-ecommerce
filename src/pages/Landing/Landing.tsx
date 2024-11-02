import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Landing.module.scss';
import { digitalHubRepository } from 'data/repositories/DigitalHubRepository';
import type { HeroBannerModel } from 'domain/models/heroBanner';
import bgHeroBanner from '../../assets/images/bg-hero-banner.svg';

import { Link } from 'react-router-dom';
import { NextArrow, PrevArrow } from './components/customArrow';

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

const Landing: React.FC = () => {
    const isMobile = useIsMobile();
    const [error, setError] = useState<string | null>(null);
    const [bannerData, setBannerData] = useState<HeroBannerModel>();

    const fetchMenuItems = async () => {
        try {
          const items = await digitalHubRepository.getHeroBanner();
          setBannerData(items);
        } catch {
          setError("Failed to hero banner data");
        }
      };


    useEffect(() => {
        fetchMenuItems();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
        arrows: isMobile ? false : true,
        centerPadding: '400px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

  return (
    <>
       <div className={styles['hero-baner-container']} style={{backgroundImage: `url(${bgHeroBanner})`}}>
        <div className={styles['main-title']}>{bannerData?.title}</div>
        <div className={styles['main-desc']}>{bannerData?.desc}</div>
        <div className={styles['slider']}>
            <Slider {...settings}>
                { bannerData?.items.map((item) => (
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
  );
};

export default Landing;