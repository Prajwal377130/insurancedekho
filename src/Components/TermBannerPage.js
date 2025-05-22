import React from 'react';
import './TermBannerPage.css';

const TermBannerPage = () => {
  return (
    <div className="term-banner-page">
      <h1>Get ₹1 crore Life Insurance plan starting from ₹16/day*</h1>
      <form className="term-form">
        <input type="text" placeholder="Enter your Full Name" />
        <input type="date" />
        <input type="tel" placeholder="Mobile Number" />

        <div className="radio-group">
          <label><input type="radio" name="smoker" /> Non-Smoker</label>
          <label><input type="radio" name="smoker" /> Smoker</label>
        </div>

        <select>
          <option>&lt;2 Lakhs</option>
          <option>2-3 Lakhs</option>
          <option>3-5 Lakhs</option>
          <option>5-10 Lakhs</option>
          <option>&gt;10 Lakhs</option>
        </select>

        <button type="submit">View Plans</button>
      </form>
    </div>
  );
};

export default TermBannerPage;
