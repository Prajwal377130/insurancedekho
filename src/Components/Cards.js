import React from 'react';
import { Link } from 'react-router-dom';

const insuranceOptions = [
  {
    label: "Car",
    icon: (
      <img
        src="https://static.insurancedekho.com/pwa/img/v2_icon_car.svg"
        alt="Car Icon"
        style={{ width: "40px", height: "40px" }}
      />
    ),
    subtitle: "Insurance",
    path: "/car"
  },
  {
    label: "Bike",
    icon: (
      <img
        src="https://www.insurancedekho.com/pwa/img/v2_icon_bike.svg"
        alt="Bike Icon"
        style={{ width: "40px", height: "40px" }}
      />
    ),
    subtitle: "Insurance",
    path: "/bike"
  },
  {
    
    label: "Health",
    
    icon: (
      <img
        src="https://www.insurancedekho.com/pwa/img/v2_icon_health.svg"
        alt="Health Icon"
        style={{ width: "40px", height: "40px" }}
      />
    ),
   
    subtitle: "Insurance",
    path: "/health"
    
  },
  {
    label: "Term",
    icon: (
      <img
        src="https://www.insurancedekho.com/pwa/img/v2_icon_life.svg"
        alt="Term Icon"
        style={{ width: "40px", height: "40px" }}
      />
    ),
    subtitle: "Insurance",
    path: "/term"
  },
  {
    label: "Investment",
    icon: (
      <img
        src="https://www.insurancedekho.com/pwa/img/v2_icon_investment.svg"
        alt="Investment Icon"
        style={{ width: "40px", height: "40px" }}
      />
    ),
    subtitle: "Plans",
    path: "/investment"
  },
  {
    label: "Business",
    icon: (
      <img
        src="https://www.insurancedekho.com/pwa/img/business_insurance.svg"
        alt="Business Icon"
        style={{ width: "40px", height: "40px" }}
      />
    ),
    subtitle: "Plans",
    path: "/business"
  },
  {
    label: "Family Health",
    icon: (
      <img
        src="https://www.insurancedekho.com/pwa/img/v2_icon_family.svg"
        alt="Family Health Icon"
        style={{ width: "40px", height: "40px" }}
      />
    ),
    subtitle: "Plans",
    path: "/familyHealth"
  },
  {
    label: "Guaranteed",
    icon: (
      <img
        src="https://www.insurancedekho.com/pwa/img/v2_icon_guaranteeReturn.svg"
        alt="Guaranteed Icon"
        style={{ width: "40px", height: "40px" }}
      />
    ),
    subtitle: "Plans",
    path: "/guaranteed"
  },
  {
    label: "View More",
    icon: (
      <img
        src="https://static.insurancedekho.com/pwa/img/v2_icon_viewmore.svg"
        alt="View More Icon"
        style={{ width: "40px", height: "40px" }}
      />
    ),
    subtitle: "Options",
    path: "/viewMore"
  }
];

function Cards() {
  return (
    <div className="container my-2 mt-n3 "  style={{ position: 'relative', top: '-100px' }}>
      <div className="card shadow-sm p-4">
        <div className="row row-cols-3 row-cols-sm-4 row-cols-md-5 g-3 text-center">
          {insuranceOptions.map((option, index) => (
            <div className="col" key={index}>
              <Link to={option.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                  <div style={{ height: '40px' }}>{option.icon}</div>
                  <h6 className="mt-2 mb-1">{option.label}</h6>
                  <small className="text-muted">{option.subtitle}</small>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
