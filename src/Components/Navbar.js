import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const menuData = {
    'Health Insurance': {
      subLinks: [
        { label: 'Health Insurance Company', link: '/Health' },
        { label: 'Mediclaim Policy', link: '/Mediclaim' },
        { label: 'Best Health Insurance Plans', link: '/BestHealth' },
        { label: 'Health Insurance Plans for Family', link: '/FamilyHealth' },
         { label: 'Health Insurance for Senior Citizens', link: '/SeniorCitizenHEalth' },
        { label: 'Health Insurance for Parents', link: '/ParentsHEalth' },
        { label: 'Women Health Insurance ', link: '/WomenHealth' },
        { label: 'Health Insurance for Children', link: '/Children' },
      ],
      companies: ['HDFC ERGO Health Insurance ', 'Niva Bupa Health Insurance', 'Care Health Insurance', 
        'Aditya Birla Health Insurance', 'ICICI Lombard Health Insurance', "Star Health Insurance", "Reliace Health Insurance"],
    },
    'Car Insurance': {
      subLinks: [
        { label: 'Companies', link: '/CarCompanies' },
        { label: 'Pay As You Drive', link: '/CarPay' },
         { label: 'Cashless Garages', link: '/CashlessGarages' },
        { label: 'Standalone Ow Damage', link: '/OwnDamage' },
        { label: 'Car Insurance Quotes', link: '/CarQuotes' },
        { label: 'Car Insurance Renewal', link: '/CarRenewal' },
         { label: 'Premium Calculator', link: '/PremiumCalculator' },
        { label: 'Compherensive Car Insurance', link: '/Compherensive' },

      ],
      companies: ['ICICI Lombard Car Insurance','HDFC ERGO Car Insurance', 'Reliance Car Insurance', 'Digit Car Insurance', 'United Car Insurance',
        "New India Car Insurance", "Royal SUndaram Car Insurance","Kotak Car Insurance"
      ],
    },
    'Bike Insurance': {
      subLinks: [
        { label: 'Companies', link: '/BikeCompanies' },
        { label: 'Pay As You Drive', link: '/BikePay' },
         { label: 'Cashless Garages', link: '/CashlessGarages' },
        { label: 'Standalone Ow Damage', link: '/OwnDamage' },
        { label: 'Car Insurance Quotes', link: '/Quotes' },
        { label: 'Car Insurance Renewal', link: '/BikeRenewal' },
         { label: 'Premium Calculator', link: '/PremiumCalculator' },
        { label: 'Compherensive Bike Insurance', link: '/Compherensive' },
      ],
      companies: ['ICICI Lombard Bike Insurance','HDFC ERGO Bike Insurance', 'Reliance Bike Insurance', 'Digit Bike Insurance', 'United Bike Insurance',
        "New India Bike Insurance", "Royal SUndaram Bike Insurance","Kotak Bike Insurance"
      ],
    },
    
    'Term Insurance': {
        subLinks: [
        { label: 'Term Insurance Companies', link: '/TermInsuranceCompany' },
        { label: 'Term Insurance Plans', link: '/Term-Insurance-Plans' },
         { label: 'Term Insurance Premium Calculator', link: '/Life-Insurance-calculator' },
        { label: 'Tax Benfits Of Term Insurance', link: '/Term-Benfits' },
        { label: 'Group Term Life Insurance ', link: '/Group-Term' },
      ],
      companies: ['Axis Max Term Insurance', 'Tata AIA  Term Insuranc', 'HDFC Life  Term Insuranc', 'PNB MetLife Term Insurance',
        "ICICI Prudential Term Insurance","Kotak Life Term Insurance","Bandan Life Insurance","Bharati  AXA Life Term Insurance "
      ],
    },
    'Investment Insurance': {
        subLinks: [
        { label: ' Companies', link: '/Investment-Company' },
        { label: ' Plans', link: '/Investment-Plans' },
         { label: 'ULIP Plan', link: '/ULIP-Plan' },
        { label: 'Child Plan', link: '/Child-Plan' },
        { label: 'Money Back Policy', link: '/Money-Back-Policy' },
      ],
      companies: [ 'Tata AIA  Ivestment', "Kotak Investment","Bandan Life Insurance","Bharati  AXA Investment",'Axis Max Investment',
        'HDFC Life  Investment', 'PNB MetLife Investment',
        "ICICI Prudential Investment",
      ],
    },
    
    
  };

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container"
        onMouseLeave={() => {
          setShowMegaMenu(false);
          setActiveCategory(null);
        }}
      >
        <Link to="/" className="logo">
          <img
            src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg"
            alt="Logo"
            width="180"
            height="40"
          />
        </Link>

        <ul className="nav-links">
          <li
            className="mega-dropdown"
            onMouseEnter={() => {
              setShowMegaMenu(true);
              setActiveCategory(Object.keys(menuData)[0]);
            }}
          >
            <span className="dropdown-label">
              Insurance <span className="dropdown-arrow">▼</span>
            </span>

            {showMegaMenu && (
              <div className="mega-menu-wrapper">
               <div className="mega-card categories-card">
  {Object.keys(menuData).map((category) => (
    <div
      key={category}
      className={`category-item ${activeCategory === category ? 'active' : ''}`}
      onMouseEnter={() => handleCategoryHover(category)}
    >
      <span>{category}</span>
      <span className="arrow">{'>'}</span>
    </div>
  ))}
</div>
{activeCategory && (
                  <>
                    <div className="mega-card sublinks-card">
                      {menuData[activeCategory].subLinks.map((subLink) => (
                        <div key={subLink.label} className="sub-link-item">
                          <Link to={subLink.link}>{subLink.label}</Link>
                        </div>
                      ))}
                    </div>

                    <div className="mega-card companies-card">
                      {menuData[activeCategory].companies.map((company, idx) => (
                        <div key={idx} className="company-item">
                          {company}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </li>

          <li className="dropdown">
            <span className="dropdown-label">
              Insurance Advisors <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/AdvisorInNewDelhi">Insurance Advisor In New Delhi</Link></li>
              <li><Link to="/AdvisorInPune">Insurance Advisor In Pune</Link></li>
              <li><Link to="/AdvisorInChennai">Insurance Advisor In Chennai</Link></li>
              <li><Link to="/AdvisorInMumbai">Insurance Advisor In Mumbai</Link></li>
              <li><Link to="/AdvisorInBengalore">Insurance Advisor In Bengalore</Link></li>
              <li><Link to="/AdvisorInKolkatta">Insurance Advisor In Kolkatta</Link></li>
            </ul>
          </li>

          <li><Link to="/Renew">Renew</Link></li>

          <li className="dropdown">
            <span className="dropdown-label">
              Support <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/download">Download Policy</Link></li>
              <li><Link to="/payment-history">Payment History</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <span className="dropdown-label">
              News <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/CarNews">Car Insurance</Link></li>
              <li><Link to="/BikeNews">Bike Insurance</Link></li>
              <li><Link to="/HealthNews">Health Insurance</Link></li>
              <li><Link to="/TermNews">Term Insurance</Link></li>
              <li><Link to="/InvestmentNews">Investment Insurance</Link></li>
            </ul>
          </li>

          <li><Link to="/BecomePospAgent">Become POSP Agent</Link></li>
        </ul>

<div className="right-section">
  <span className="track-policy">Track & Policy Download</span>

  {auth.token ? (
    <div className="user-menu-container">
      <div className="login-btn">
        Hi, {auth.name} <span className="dropdown-arrow">▼</span>
        <div className="logout-dropdown">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  ) : (
    <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
  )}
</div>

      </div>
    </nav>
  );
}

export default Navbar;
