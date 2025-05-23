import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer.js';
import Footer2 from '../../../Components/Footer2/Footer2.js';
import Footer3 from '../../../Components/Footer3/Footer3.js';
import HealthPlan from './HealthPlan';

const Health = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [showPlans, setShowPlans] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPlans(true);
  };

  return (
    <div>
      <div className="container my-5 d-flex flex-column flex-md-row gap-4">
        {/* Left Content */}
        <div className="col-md-8">
          <h2 style={{ textAlign: 'justify' }}>Buy Health Insurance Plans and Policies Online</h2>
          <p style={{ textAlign: 'justify' }}>
            A health or medical insurance policy covers your medical expenses for illnesses and injuries
            including hospitalisation, daycare procedures, ambulance charges, medical care at home,
            medicine costs, and more. It protects the individuals and families from financial burden
            arising from unexpected medical expenses. Additionally, it helps you save taxes under
            section 80D of the Income Tax Act, 1961.
          </p>

          <h5 className="mt-4">Key Highlights</h5>
          <div className="row row-cols-1 row-cols-md-2 mt-3">
            <div className="mb-3">
              <strong style={{ fontSize: '14px' }}>🏥 Wide range of Plans & Companies</strong>
              <p className="text-muted">(134 Plans and 22 Companies)</p>
            </div>
            <div className="mb-3">
              <strong style={{ fontSize: '14px' }}>💬 Free advice to help choose best plan</strong>
              <p className="text-muted">(Guaranteed assistance with guidance)</p>
            </div>
            <div className="mb-3">
              <strong style={{ fontSize: '14px' }}>⏰ 24 x 7 Claim Support</strong>
              <p className="text-muted">(Support in claim processing)</p>
            </div>
            <div className="mb-3">
              <strong style={{ fontSize: '14px' }}>💳 Flexible payment options</strong>
              <p className="text-muted">(Buy 3-year plan or pay monthly)</p>
            </div>
            <div className="mb-3">
              <strong style={{ fontSize: '14px' }}>👨‍👩‍👧‍👦 1 lakh+ Families insured</strong>
              <p className="text-muted">(Happy customers and real reviews)</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
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
{showPlans && <HealthPlan />}

      <Footer />
      <Footer2 />
      <Footer3 />
    </div>
  );
};

export default Health;
