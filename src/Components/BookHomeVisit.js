import React, { useState } from 'react';
import './BookHomeVisit.css';

function BookHomeVisit() {
  const [gender, setGender] = useState('Male');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted for ${name}`);
  };

  return (
    <div className="book-container">
      <h1 className="book-title">Get Free Expert Assistance at Home</h1>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="gender-group">
          <label>
            <input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
            Male
          </label>
          <label>
            <input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
            Female
          </label>
        </div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">Book Free Home Visit</button>
      </form>
    </div>
  );
}

export default BookHomeVisit;
