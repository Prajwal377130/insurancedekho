import React, { useState } from 'react';
import './InsurancePartner.css';

const partnerData = {
  General: [
    {
      name: 'Bajaj Allianz Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/bajaj.png',
    },
    {
      name: 'HDFC ERGO Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/hdfc.png',
    },
    {
      name: 'Royal Sundaram Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/royal-s.png',
    },
    {
      name: 'Cholamandalam Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/chola.png',
    },
    {
      name: 'Zuno Insurance',
      logo: 'https://staticimg.insurancedekho.com/assets/zuno_health_insurance.png',
    },
      {
      name: 'Magma Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/magma.png',
    },
    {
      name: 'Raheja Qbe Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/raheja.png',
    },
    {
      name: 'National Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/national.png',
    },
  ],
  Car: [
    {
      name: 'HDFC ERGO Car Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/hdfc.png',
    },
    {
      name: 'Magma Car Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/magma.png',
    },
     {
      name: 'Royal Sundaram Car Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/royal-s.png',
    },
    {
      name: 'Bajaj Allianz Car Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/bajaj.png',
    },
    
   
    {
      name: 'Cholamandalam Car Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/chola.png',
    },
    {
      name: 'Zuno Car Insurance',
      logo: 'https://staticimg.insurancedekho.com/assets/zuno_health_insurance.png',
    },
      
    {
      name: 'Raheja Qbe Car Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/raheja.png',
    },
    {
      name: 'National Car Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/national.png',
    },
  ],
  Bike:[
   
    {
      name: 'Reliance Bike Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/relaiance.png',
    },
     {
      name: 'Kotak Bike Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/kotak.png',
    },
     {
      name: 'HDFC ERGO Bike Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/hdfc.png',
    },
    {
      name: 'Bajaj Allianz Bike Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/bajaj.png',
    },
    
   
    {
      name: 'Liberty Bike Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/liberty.png',
    },
    {
      name: 'Zuno Bike Insurance',
      logo: 'https://staticimg.insurancedekho.com/assets/zuno_health_insurance.png',
    },
      
    {
      name: 'Raheja Qbe Car Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/raheja.png',
    },
    {
      name: 'Digit Bike Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/digit.png',
    },
  ],

   Health:[
   
    {
      name: 'Care Health Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20230626150438.png',
    },
     {
      name: 'Kotak Health Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/kotak.png',
    },
     {
      name: 'Orient Health Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20190903134321.jpg',
    },
    {
      name: 'Bajaj Allianz Bike Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/bajaj.png',
    },
    
   
    {
      name: 'Liberty Health Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/liberty.png',
    },
    {
      name: 'Zuno Health Insurance',
      logo: 'https://staticimg.insurancedekho.com/assets/zuno_health_insurance.png',
    },
      
    {
      name: 'SBI Health Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20190903134405.jpg',
    },
    {
      name: 'Digit Health Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/digit.png',
    },
  ],

     Term:[
   
    {
      name: 'ICICI Term Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20210609170906.jpg',
    },
     {
      name: 'Axis Max Life Term Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20241218135300.png',
    },
     {
      name: 'HDFC Life Term Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20210609170631.jpg',
    },
    {
      name: 'Bandan Life Term Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20240419120731.jpg',
    },
    
   
    {
      name: 'Liberty Term Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/liberty.png',
    },
    {
      name: 'Zuno Term Insurance',
      logo: 'https://staticimg.insurancedekho.com/assets/zuno_health_insurance.png',
    },
      
    {
      name: 'Kotak Life Term Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20210609170837.jpg',
    },
    {
      name: 'LIC Term Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20210623203719.jpg',
    },
  ],
 
  
     Investment:[
   
    {
      name: 'SBI Life Investment Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20230703171045.png',
    },
     {
      name: 'Axis Max Life Investment Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20241218135300.png',
    },
     {
      name: 'HDFC Life Investment Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20210609170631.jpg',
    },
    {
      name: 'TATA AIA Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20230615122720.png',
    },
    
   
    {
      name: 'Liberty Investment Insurance',
      logo: 'https://staticimg.insurancedekho.com/seo/insurer/liberty.png',
    },
    {
      name: 'HDFC Life Investment Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20230324150512.png',
    },
      
    {
      name: 'Kotak Life Investment Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20210609170837.jpg',
    },
    {
      name: 'LIC Investment Insurance',
      logo: 'https://healthstatic.insurancedekho.com/prod/oem/20210623203719.jpg',
    },
  ],
};

const tabs = Object.keys(partnerData);

const InsurancePartner = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = partnerData[activeTab];
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(partners.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const visiblePartners = partners.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className="partners-wrapper">
      <h2 className="partners-title">Our Insurance Partners</h2>
      <p className="partners-subtitle">
        We're associated with India's popular insurance companies.
      </p>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'tab active' : 'tab'}
            onClick={() => {
              setActiveTab(tab);
              setCurrentSlide(0); // Reset slide when tab changes
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="carousel">
        <button className="nav-button" onClick={handlePrev}>
          ‹
        </button>
        <div className="partners-grid">
          {visiblePartners.map((partner, idx) => (
            <div className="partner-card" key={idx}>
              <img src={partner.logo} alt={partner.name} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default InsurancePartner;
