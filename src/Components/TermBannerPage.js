import React from 'react';
import { Link } from 'react-router-dom';
import './TermBannerPage.css';


const TermInsurance = () => {
  return (<>
         <h2>Get <span className="highlight" style={{fontSize:"30px"}}>₹1 crore</span> Life Insurance plan
starting from <span className="highlight" style={{fontSize:"30px"}}>₹16/day*</span></h2>
    <div className="term-container">
      {/* Left: Main Offer */}
 
      <div className="left-section">
        

        <div className="insurers-grid">
          {[
            'Axis Max Life', 'HDFC Life', 'LIC', 'Bajaj Allianz', 'ICICI Pru Life',
            'TATA AIA Life', 'Bandhan Life', 'Canara HSBC', 'PNB MetLife', 'Digit'
          ].map((insurer, index) => (
            <div key={index} className="insurer-item">{insurer}</div>
          ))}
        </div>
      </div>

      {/* Right: User Card */}
      <div className="right-section">
        <div className="card">
          <p className="discount">💸 Get Online Discount upto 15% off*</p>
          <h4>Welcome Back, Prajwal!</h4>
          <p>
            Choose the Best Term Life Insurance Plans from top Insurers starting at <b>₹468/month**</b>
          </p>
          <div className="user-details">
            <p>🧑‍💼 Male, 23 Yrs, Non-Smoker</p>
            <p>Annual income: 5 Lac to 9 Lac</p>
          </div>
          <button className="view-btn">View Plans</button>
          <Link className="new-search" to="#">Start a new search &gt;</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default TermInsurance;
