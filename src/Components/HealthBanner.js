import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HealthBanner.css'; 

function HealthBanner() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book-home-visit');
  };

  return (
    <div className="health-banner">
      <div className="health-banner-left">
        <img src="https://static.insurancedekho.com/pwa/img/info-home-slider.webp" alt="Health" />
        <div>
          <h2>
            Get <span className="highlight">Free Health Insurance Consultation</span> at Home
          </h2>
          <p>✅ ID Certified Experts &nbsp; ✅ Life Time Claim Support</p>
        </div>
      </div>
      <button className="book-btn" onClick={handleBookClick}>
        Book Home Visit
      </button>
    </div>
  );
}

export default HealthBanner;
