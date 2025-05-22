import React from 'react';
import './InsuranceWorks.css';

const InsuranceWorks = () => {
  return (
    <div className="how-it-works-wrapper">
      <h2 className="how-title">How InsuranceDekho Works?</h2>

      <div className="how-steps">
        <div className="how-step">
          <img
            src="https://static.insurancedekho.com/pwa/img/HowIDwork_img1.svg"
            alt="Fill Details"
            width="100"
          />
          <h3>Fill in Your Details</h3>
          <p>
            Fill in your details and get insurance policy premium quotes from top-rated insurers instantly.
          </p>
        </div>

        <div className="how-step">
          <img
            src="https://static.insurancedekho.com/pwa/img/HowIDwork_img2.svg"
            alt="Select Plan"
            width="100"
          />
          <h3>Select a Plan</h3>
          <p>
            From numerous available quotes, choose the one that best suits your requirements and budget.
          </p>
        </div>

        <div className="how-step">
          <img
            src="https://static.insurancedekho.com/pwa/img/HowIDwork_img3.svg"
            alt="Make Payment"
            width="100"
          />
          <h3>Make Payment and Sit Back</h3>
          <p>
            Pay online and get your policy right away in your inbox.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceWorks;
