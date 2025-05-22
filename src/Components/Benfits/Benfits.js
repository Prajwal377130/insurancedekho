import React from 'react';
import './Benfits.css';

const Benfits = () => {
  return (
    <div className="benefits-wrapper">
      
      <div className="benefits-stats">
        <div className="stat">
          <span role="img" aria-label="happy">😍</span>
          <p>11 Mn+<br /><small>Happy Smiles</small></p>
        </div>
        <div className="stat">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" width="40" />
          <p>4.8<br /><small>Rated on Google</small></p>
        </div>
        <div className="stat">
          <span role="img" aria-label="claims">📄</span>
          <p>95k+<br /><small>Claims Served</small></p>
        </div>
      </div>

      {/* Heading */}
      <h2 className="benefits-title">Benefits of InsuranceDekho</h2>
      <p className="benefits-subtitle">
        Understand your insurance policy options. Identify the best value. Enjoy peace of mind.
      </p>

      {/* Benefits Cards */}
      <div className="benefits-cards">
        <div className="benefit-card">
          <img src="https://static.insurancedekho.com/pwa/img/benifitimg1.svg" alt="Policy" width="100" height="100" />
          <h5>5 Minutes Policy Issuance*</h5>
          <p>Say no to spending hours and days in queues doing the paperwork for your insurance policy. Get your insurance issued instantly with InsuranceDekho. The entire process from selecting the best
             insurance policy to getting it issued takes just 5 minutes on InsuranceDekho..</p>
        </div>

        <div className="benefit-card">
          <img src="https://static.insurancedekho.com/pwa/img/benifitimg2.svg" alt="Happy" width="100" height="100" />
          <h5>Over 11 Mn Happy Customers</h5>
          <p>InsuranceDekho is becoming a household name in India. Till now we have been successful in providing a delightful experience to more than 11 Mn customers with the help of our transparent and quick process, a dedicated support team 
            along with the availability of numerous insurers..</p>
        </div>

        <div className="benefit-card">
          <img src="https://static.insurancedekho.com/pwa/img/benifitimg3.svg" alt="Support" width="100" height="100" />
          <h5>Dedicated Support Team</h5>
          <p>Our dedicated support team is available for your assistance all the 7 days. Feel free to reach out to us in case of any confusion - be it related to the purchase of an insurance policy or assistance during the settlement of a claim,
             our team of experts is at your service all days..</p>
        </div>
      </div>
    </div>
  );
};

export default Benfits;
