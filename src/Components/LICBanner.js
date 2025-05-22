import React from 'react';
import './LICBanner.css';

import { useNavigate } from 'react-router-dom';

const LICBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/term-banner');
  };

  return (
    <div className="lic-banner" onClick={handleClick}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IKFL3L3NS57Z5PZdRbUfSans2AXKcwc_bQ&s" alt="" />
      <div className="lic-banner-text">
        <h2>Buy New Jeevan Amar</h2>
        <p>Secure your Family's Future</p>
      </div>
      <button className="lic-buy-button">Buy Now</button>
    </div>
  );
};

export default LICBanner;
