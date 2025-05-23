import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Investment.css';
  import Footer from '../../../Components/Footer/Footer.js';
  import Footer2 from '../../../Components/Footer2/Footer2.js';
  import Footer3 from '../../../Components/Footer3/Footer3.js';
  import TermPlan from './InvestmentPlan';

const insurers = [
  { name: 'Axis Max Life', rate: '15.18%', logo: '🅰️' },
  { name: 'HDFC Life', rate: '14.44%', logo: '🏦' },
  { name: 'Bajaj Allianz', rate: '14.18%', logo: '🛡️' },
  { name: 'ICICI Pru Life', rate: '12.02%', logo: '📊' },
  { name: 'TATA AIA Life', rate: '17.86%', logo: '🏢' },
  { name: 'Bandhan Life', rate: '-', logo: '🌐' },
  { name: 'PNB MetLife', rate: '-', logo: '💼' },
];

const InvestmentInsurance = () => {
 
     const [name, setName] = useState('');
      const [mobile, setMobile] = useState('');
      const [showPlans, setShowPlans] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowPlans(true);
      }

 
  return (
    <div>
        <h2>Get ₹1 Crore return by Investing<br /><span>₹10,000/month</span> onwards</h2>

    <div className="investment-container">
      
      <div className="left-section">
        <div className="circle-bg">
          
          <div className="insurer-orbit">
            
  {insurers.map((ins, idx) => {
    const angle = (360 / insurers.length) * idx;
    const radius = 170; // adjust to control orbit size
    const x = 200 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 200 + radius * Math.sin((angle * Math.PI) / 180);
    return (
      <div
        key={idx}
        className="insurer-box"
        style={{ left: `${x}px`, top: `${y}px` }}
      >
        <div className="logo">{ins.logo}</div>
        <div className="info">
          <div>{ins.name}</div>
          <div className="rate">{ins.rate}</div>
        </div>
      </div>
    );
  })}
</div>

          <div className="insurer-grid">
            {insurers.map((ins, idx) => (
              <div key={idx} className="insurer-box">
                <div className="logo">{ins.logo}</div>
                <div className="info">
                  <div>{ins.name}</div>
                  <div className="rate">{ins.rate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-4 p-4 shadow-sm border rounded">
                {!showPlans ? (
                  <form onSubmit={handleSubmit} className="form-box">
                    <div className="tax-text mb-2">
                      Get <strong>Tax Benefits</strong> u/s 80C & 10(10D)
                    </div>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Enter your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="tel"
                      className="form-control mb-2"
                      placeholder="Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-danger w-100">View Plans</button>
                    <div className="terms mt-2 text-muted" style={{ fontSize: '13px' }}>
                      By clicking, I agree to <Link to="#">Terms & conditions</Link> and <Link to="#">privacy policy</Link>.
                    </div>
                  </form>
                ) : (
                  <div>
                    <p className="text-success fw-bold">✅ Get Online Discount upto 25% off</p>
                    <h5>
                      Buy Health Plans from <span className="text-danger">₹10/day*</span>
                    </h5>
                    <p className="mt-3 mb-1">Welcome Back, {name}!</p>
                    <p className="text-muted">Continue buying Your Health Insurance Policy.</p>
      
      
                    <button className="btn btn-outline-secondary w-100 mt-3">View Other Plans</button>
                    <p className="mt-3 text-primary">Start a new search {'>'}</p>
                    <p className="text-muted" style={{ fontSize: '13px' }}>
                      Already bought a policy? <Link to="#">Login here</Link>
                    </p>
                  </div>
                )}
              </div>
            </div>
      {showPlans && <TermPlan />}
      
            <Footer />
            <Footer2 />
            <Footer3 />
    </div>
  );
};

export default InvestmentInsurance;
