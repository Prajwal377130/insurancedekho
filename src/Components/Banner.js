// BannerSlider.js
import React, { useEffect, useState } from 'react';
import './Banner.css';
import HealthBanner from './HealthBanner';
import LICBanner from './LICBanner';

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [<HealthBanner key="health" />, <LICBanner key="lic" />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); 
    return () => clearInterval(interval);
  },);

  return (
    <div className="banner-slider-wrapper">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
        >
          {banner}
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
