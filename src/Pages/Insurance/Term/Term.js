import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer.js';
import Footer2 from '../../../Components/Footer2/Footer2.js';
import Footer3 from '../../../Components/Footer3/Footer3.js';
import TermPlan from './TermPlan';
import './TermInsurance.css';
import  './Health.css';

const TermInsurance = () => {
   const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [showPlans, setShowPlans] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowPlans(true);
    }
  return (<>
         <h2>Get <span className="highlight" style={{fontSize:"30px"}}>₹1 crore</span> Term Insurance plan
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
    </>
  );
}

export default TermInsurance;
