import React, { useState } from 'react';
import './BookHomeVisit.css';

const BookHomeVisit = () => {
  const [gender, setGender] = useState('Male');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted for ${name}`);
  };

  return (
    <div className="book-visit-container">
      {/* Left Section */}
      <div className="book-left">
        <h1>
          Get <span className="highlight" style={{fontSize:"30px"}}>Free Expert Assistance</span> at Home for your <br />
          <span className="bold">Health Insurance Plan</span>
        </h1>
        <p>Secure Your Family’s Health & Wealth - Compare Top Plans, Get Customized Quotes</p>
        <ul className="features">
          
        </ul>
        
      </div>
<div>
        <img src="https://static.insurancedekho.com/pwa/img/v3_farhan-left-thumb.webp" alt="Expert" className="expert-image" />
        <li>🧑‍⚕️ <strong>Expert Advice</strong> - IRDAI Certified Professionals</li>
          <li>⏱️ <strong>60 Minutes</strong> - Personalized Advice</li>
          <li>💬 <strong>24 x 7</strong> - Claims Support</li>
      </div>
      {/* Right Form Section */}
      <div className="book-right">
        <form className="book-form" onSubmit={handleSubmit}>
          <h2>Fill Your Details To Book Now</h2>
          <div className="tags">
            <span className="green-tag">✅ 20000+ Home Visits</span>
            <span className="star-tag">⭐ 2000+ Experts</span>
          </div>

          <div className="gender-buttons">
            <button
              type="button"
              className={gender === 'Male' ? 'active' : ''}
              onClick={() => setGender('Male')}
            >
              Male
            </button>
            <button
              type="button"
              className={gender === 'Female' ? 'active' : ''}
              onClick={() => setGender('Female')}
            >
              Female
            </button>
          </div>

          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <label className="checkbox">
            <input type="checkbox" checked={whatsapp} onChange={() => setWhatsapp(!whatsapp)} />
            Get Details on <b>WhatsApp</b>
          </label>

          <button className="submit-button" type="submit">Book Free Home Visit</button>
        </form>
      </div>
    </div>
  );
};

export default BookHomeVisit;
