import React, { useState } from 'react';
import './Health.css';

const Health = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Health Insurance');

  const menuData = {
    'Health Insurance': {
      subLinks: [
        'Health Insurance Companies',
        'Mediclaim Policy',
        'Best Health Insurance Plans',
        'Health Insurance for Family',
        'Health Insurance for Senior Citizens',
        'Health Insurance for Parents',
        'Women Health Insurance',
        'Health Insurance for Children',
      ],
      companies: [
        'HDFC ERGO Health Insurance',
        'Niva Bupa Health Insurance',
        'Care Health Insurance',
        'Aditya Birla Health Insurance',
        'Star Health Insurance',
        'ICICI Lombard Health Insurance',
        'Reliance Health Insurance',
        'ManipalCigna Health Insurance',
      ],
    },
    'Car Insurance': { subLinks: [], companies: [] },
    'Bike Insurance': { subLinks: [], companies: [] },
    'Life Insurance': { subLinks: [], companies: [] },
    'Term Insurance': { subLinks: [], companies: [] },
    'Investment': { subLinks: [], companies: [] },
    'Business Insurance': { subLinks: [], companies: [] },
    'Travel Insurance': { subLinks: [], companies: [] },
  };

  return (
    <div className="navbar">
      <div
        className="nav-item"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        Insurance
        {showMenu && (
          <div className="mega-menu">
            <div className="column category-list">
              {Object.keys(menuData).map((category) => (
                <div
                  key={category}
                  className={`category-item ${activeCategory === category ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCategory(category)}
                >
                  {category}
                </div>
              ))}
            </div>
            <div className="column sub-links">
              {menuData[activeCategory].subLinks.map((link, idx) => (
                <div key={idx} className="sub-link">{link}</div>
              ))}
            </div>
            <div className="column company-list">
              {menuData[activeCategory].companies.map((company, idx) => (
                <div key={idx} className="company-item">{company}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Health;
