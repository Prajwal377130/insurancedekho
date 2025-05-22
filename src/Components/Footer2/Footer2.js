import React from "react";
import "./Footer2.css";

const Footer2 = () => {
  const data = {
    "Car Insurance": [
      "Car Insurance Renewal",
      "Car Insurance Calculator",
      "Zero Depreciation Car Insurance",
      "IDV Calculator",
      "Own Damage Car Insurance",
      "Car Insurance Claim Settlement",
      "Best Car Insurance Companies",
    ],
    "Health Insurance": [
      "Health Insurance Plans",
      "Best Health Insurance Companies",
      "Mediclaim Policy",
      "Health Insurance Claim Settlement Ratio",
      "Critical Health Insurance",
      "Health Insurance Premium Calculator",
      "Family Health Insurance",
      "Senior Citizens Health Insurance",
    ],
    "Life Insurance": [
      "Postal Life Insurance Scheme",
      "Life Insurance Types",
      "Life Insurance Claim Settlement Ratio",
      "Term Insurance Vs Life Insurance",
      "Best Life Insurance Companies",
      "Life Insurance Plans",
      "Life Insurance Tax Benefits",
      "Life Insurance Premium Calculator",
    ],
    "Investment Plans": [
      "Investment Plans",
      "Fixed Deposit Calculator",
      "Tax-Saving Fixed Deposit",
      "Child Investment Plans",
      "Best Investment Plans",
      "Annuity Plans",
      "Section 10(10D)",
      "Investment Plans for NRI",
    ],
  };

  return (
    <div className="quick-links-wrapper">
      <h3 className="quick-links-heading">Quick Links</h3>
      <div className="quick-links-container">
        {Object.entries(data).map(([title, items]) => (
          <div key={title} className="quick-links-card">
            <h4 className="quick-links-title">{title}</h4>
            <ul className="quick-links-list">
              {items.map((item, i) => (
                <li key={i} className="quick-links-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer2;
