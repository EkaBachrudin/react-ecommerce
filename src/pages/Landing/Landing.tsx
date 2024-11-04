import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import styles from './Landing.module.scss';
import { digitalHubRepository } from 'data/repositories/DigitalHubRepository';
import type { HeroBannerModel } from 'domain/models/heroBanner';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Category from './components/Category/Category';
import type { CategoryModel } from 'domain/models/category';
import type { ManageServiceModel } from 'domain/models/Manageservice';
import Manageservice from './components/Manageservice/Manageservice';
import type { ProductListModel } from 'domain/models/productList';
import ProductList from './components/ProductList/ProductList';

const Landing: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [bannerData, setBannerData] = useState<HeroBannerModel>();
    const [categoryData, setCategoryData] = useState<CategoryModel[]>([]);
    const [manageService, setManageService] = useState<ManageServiceModel>();
    const [productList, setProductList] = useState<ProductListModel>();

    const fetchMenuItems = async () => {
        try {
          const items = await digitalHubRepository.getHeroBanner();
          setBannerData(items);
          fetchCategory();
          fetchManageService();
          fetchProductList();
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

    const fetchManageService = async () => {
      try {
        const items = await digitalHubRepository.getManageService();
        setManageService(items);
      } catch {
        setError("Failed to hero banner data");
      }
    };

    const fetchProductList = async () => {
      try {
        const items = await digitalHubRepository.getProductList();
        setProductList(items);
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
      <div className='mb-40'>
        <HeroBanner bannerDataProps={bannerData} />
        <Category categoryData={categoryData} />
        <Manageservice manageServiceData={manageService} />
        <ProductList productListData={productList} />
      </div>
    </>
  );
};

export default Landing;