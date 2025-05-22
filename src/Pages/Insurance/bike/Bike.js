import React, { useState } from 'react';

import BikePlans from './BikePlans';
import './Bike.css';


const loadRazorpayScript = () =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const brandModels = {
  AUDI: ['A3', 'A4', 'A5', 'A6', 'Q3', 'Q5'],
  MARUTI: ['Alto', 'Baleno', 'Swift', 'Brezza','Ciaz'],
  Honda: ['City', 'Amaze', 'Jazz','BR-V','Civic'],
  TATA: ['Nexon', 'Harrier', 'Tiago','Nano','Zest'],
  TOYOTA: ['Fortuner', 'Innova', 'Glanza','Etios','Yaris'],
  RENAULT: ['Kwid', 'Triber', 'Duster','Scala','Pulse'],
  FORD: ['EcoSport', 'Figo', 'Endeavour','Figo','Fusion'],
  KIA: ['Seltos', 'Sonet', 'Carens','Seltos','Cranival'],
  BMW: ['X1', 'X3', 'X5',],
  MG: ['Hector', 'Astor', 'Gloster','Astor','Hector Plus'],
  SKODA: ['Rapid', 'Octavia', 'Superb','Fabia','Laura'],
  NISSAN: ['Magnite', 'Kicks', 'Sunny','X-Trail','Sunny'],
  HYUNDAI: ['i10', 'i20', 'Creta', 'Verna','Xcent'],
  MAHINDRA: ['XUV300', 'XUV700', 'Scorpio','Xylo','Mara200'],
};

const BikeInsurance = () => {
  
  const [carNumber, setCarNumber] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [model, setModel] = useState('');
  const [fuel, setFuel] = useState('');
  const [city, setCity] = useState('');
  const [year, setYear] = useState('');
  const [policies, setPolicies] = useState([]);

  const fetchPolicies = async () => {
  try {
    const res = await fetch(
      `http://localhost:4000/api/car-insurance/getall`
    );
    const data = await res.json();
    setPolicies(data);
  } catch (err) {
    console.error('Error fetching filtered policies:', err);
  }
};


  const handleCalculatePrice = async () => {
    const carNumberRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;

    if (!carNumberRegex.test(carNumber)) {
      alert('Please enter a valid car number (e.g., DL01AB1234)');
      return;
    }

    if (!carBrand || !model || !fuel || !city || !year) {
      alert('Please fill all fields');
      return;
    }

    fetchPolicies();
  };

  const handleBuyNow = async (policy) => {
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert('Failed to load Razorpay SDK');
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: policy.premium * 100 }),
      });

      const order = await res.json();

      const options = {
        key: 'rzp_test_8OxcE1UBYZJ2Nl', 
        amount: order.amount,
        currency: order.currency,
        name: 'Car Insurance',
        description: policy.policyName,
        order_id: order.id,
        handler: function (response) {
          alert(`Payment successful for ${policy.policyName}`);
          console.log('Car Details:', { carNumber, carBrand, model, fuel, city, year });
          console.log('Razorpay Response:', response);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: { color: '#f63b77' },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error('Payment error:', err);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <>
     <h2>Calculate Your Car Insurance Price Online</h2>
    <div className="main-card">
     

      <div className="form-grid">
        <div>
          <label>Car Number</label>
          <input
            type="text"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value.toUpperCase())}
            placeholder="e.g. DL01AB1234"
            maxLength={10}
          />
        </div>

        <div>
          <label>Car Brand</label>
          <select
            value={carBrand}
            onChange={(e) => {
              setCarBrand(e.target.value);
              setModel(''); 
            }}
          >
            <option value="">Select Brand</option>
            {Object.keys(brandModels).map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Model</label>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="">Select Model</option>
            {brandModels[carBrand]?.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Fuel</label>
          <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
            <option value="">Select Fuel</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>

        <div>
          <label>City</label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <div>
          <label>Year</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            {Array.from({ length: 10 }, (_, i) => {
              const y = new Date().getFullYear() - i;
              return (
                <option key={y} value={y}>
                  {y}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <button className="calculate-btn" onClick={handleCalculatePrice}>
        Calculate Price
      </button>
<p>Disclaimer: Actual Premium might vary basis your location, age and number of members</p>
      <hr />

      {policies.length > 0 && (
        <div className="policy-list">
          <h3>Available Plans:</h3>
          {policies.map((p, i) => (
            <div key={i} className="policy-item">
              <p><strong>Car Number:</strong> {p.carNumber}</p>
              <p><strong>City:</strong> {p.city}</p>
              <p><strong>Model:</strong> ₹{p.model}</p>
              <p><strong>Fuel:</strong> ₹{p.fuel}</p>
              <p><strong>Plan:</strong> {p.policyName}</p>
              <p><strong>Insurer:</strong> {p.insurer}</p>
              <p><strong>Brand:</strong> ₹{p.brand}</p>
              <p><strong>Amount:</strong> ₹{p.Amount}</p>
              <button onClick={() => handleBuyNow(p)}>Buy Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  <p className="info-paragraph">
    <h3 style={{textAlign:"center"}}> What is Car Insurance?</h3>
    <p>
Once you’ve secured the car of your dreams, the next step is to get car insurance from a reliable provider. Think of it as a safety net for your beloved ride and the loved ones who will use it. Car insurance, also called four wheeler insurance, is a contract between an insurer and you, the policyholder to protect you from unpredictable circumstances like accidents, theft or natural calamities. In India, car owners have the choice between three types of four-wheeler insurance, namely Standalone own-damage insurance, Third-party insurance, and Comprehensive coverage.
</p>
<p>
According to the Motor Vehicles Act of 1988, every car owner must have at least a third-party insurance policy. This provides coverage in case you are ever involved in an accident causing physical or property damage. You could also choose to level up and opt for comprehensive insurance plans which will provide coverage in case of theft, damage via natural causes, or mechanical issues.
</p>
<p>
Today, getting car insurance or renewing an existing 4-wheeler policy has never been easier. One can find multiple policy options online for a variety of price ranges, but at InsuranaceDekho, we believe in helping you stay protected without breaking the bank. Choose from the policy options below, or talk to us to find the four-wheeler policy that best fits your needs.
    </p>
    </p>
 
<BikePlans/>
<p    className="info-paragraph">
    <h3 style={{textAlign:"center"}}> Key Features of a Car Insurance Policy</h3>
  
<p style={{textAlign:"center"}}>Here are some of the key benefits of having a car insurance policy:</p>

<p style={{fontSize:"12px"}}>Financial Protection Against Damages: Covers repair and replacement costs when your car is damaged due to accidents, theft, fire, vandalism, or natural calamities, reducing your out-of-pocket expenses.</p>
<p style={{fontSize:"12px"}}>Third-Party Liability Coverage: Legally required to drive in India, it protects you from financial and legal obligations if your car injures someone, damages their vehicle or their property.</p>
<p style={{fontSize:"12px"}}>Personal Accident Cover: Provides financial support if the owner-driver faces injury, disability, or death due to an accident, helping cover medical bills and loss of income.</p>
<p style={{fontSize:"12px"}}>No Claim Bonus (NCB): Helps reduce your cost of renewal for having no claims made during the policy term, helping you save money over time.</p>
<p style={{fontSize:"12px"}}>Cashless Repairs at Partner Garages: Allows you to get your car repaired at network garages without paying upfront, with the insurer settling costs directly with the repair centre.</p>
</p>
  </>
);
};

export default BikeInsurance;
