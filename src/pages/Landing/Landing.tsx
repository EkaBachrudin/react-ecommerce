import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import styles from './Landing.module.scss';
import { digitalHubRepository } from 'data/repositories/DigitalHubRepository';
import type { HeroBannerModel } from 'domain/models/heroBanner';
import HeroBanner from './components/HeroBanner/HeroBanner';

const Landing: React.FC = () => {
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

  return (
    <>
      <HeroBanner bannerDataProps={bannerData} />
    </>
  );
};

export default Landing;