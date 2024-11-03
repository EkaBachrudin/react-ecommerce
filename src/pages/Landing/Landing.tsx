import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import styles from './Landing.module.scss';
import { digitalHubRepository } from 'data/repositories/DigitalHubRepository';
import type { HeroBannerModel } from 'domain/models/heroBanner';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Category from './components/Category/Category';
import type { CategoryModel } from 'domain/models/category';

const Landing: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [bannerData, setBannerData] = useState<HeroBannerModel>();
    const [categoryData, setCategoryData] = useState<CategoryModel[]>([]);

    const fetchMenuItems = async () => {
        try {
          const items = await digitalHubRepository.getHeroBanner();
          setBannerData(items);
          fetchCategory();
        } catch {
          setError("Failed to hero banner data");
        }
    };

    const fetchCategory = async () => {
        try {
          const items = await digitalHubRepository.getCategory();
          setCategoryData(items);
        } catch {
          setError("Failed to hero banner data");
        }
    };

    useEffect(() => {
        fetchMenuItems();
    });

    if (error) {
        return <div>{error}</div>;
    }

  return (
    <>
      <HeroBanner bannerDataProps={bannerData} />
      {categoryData && categoryData.length > 0 && (
        <Category categoryData={categoryData} />
      )}
    </>
  );
};

export default Landing;