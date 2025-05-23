import React, { useState } from 'react';
import CustomerSpeak from '../../../Components/CusotmerSpeak.js/CustomerSpeak';
import Footer from '../../../Components/Footer/Footer.js'
import Footer2 from '../../../Components/Footer2/Footer2.js'
import Footer3 from '../../../Components/Footer3/Footer3.js'
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
  Honda: ["Activa", "Shine","Activa5G"],
  Hero: ["Splendor Plus","Glamour","HF Deluxe","Splendor Pro"],
  TVS: ["NTORQ125","Sport","Xl 100","Victor"],
  Bajaj: ["Pulsar150","Platina","CT100"],
  Yamaha: ["Royal Z","R15s","Alpha","FZ2s"],
  Suzuki: ["Zeus","Hayate","Intruder","Access125"],

};

const BikeInsurance = () => {
  
  const [bikeNumber, setBikeNumber] = useState('');
  const [bikeBrand, setBikeBrand] = useState('');
  const [model, setModel] = useState('');
  const [fuel, setFuel] = useState('');
  const [city, setCity] = useState('');
  const [year, setYear] = useState('');
  const [policies, setPolicies] = useState([]);

  const fetchPolicies = async () => {
  try {
    const res = await fetch(
      `http://localhost:4000/api/bike-insurance/getall`
    );
    const data = await res.json();
    setPolicies(data);
  } catch (err) {
    console.error('Error fetching filtered policies:', err);
  }
};


  const handleCalculatePrice = async () => {
    const bikeNumberRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;

    if (!bikeNumberRegex.test(bikeNumber)) {
      alert('Please enter a valid car number (e.g., DL01AB1234)');
      return;
    }

    if (!bikeBrand || !model || !fuel || !city || !year) {
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
        body: JSON.stringify({ amount: policy.Amount * 1 }),
      });

      const order = await res.json();

      const options = {
        key: 'rzp_test_8OxcE1UBYZJ2Nl', 
        amount: order.amount,
        currency: order.currency,
        name: 'Bike Insurance',
        description: policy.policyName,
        order_id: order.id,
        handler: function (response) {
          alert(`Payment successful for ${policy.policyName}`);
          console.log('Bike Details:', { bikeNumber, bikeBrand, model, fuel, city, year });
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
     <h2>Calculate Your Bike Insurance Price Online</h2>
    <div className="main-card">
     

      <div className="form-grid">
        <div>
          <label>Bike Number</label>
          <input
            type="text"
            value={bikeNumber}
            onChange={(e) => setBikeNumber(e.target.value.toUpperCase())}
            placeholder="e.g. DL01AB1234"
            maxLength={10}
          />
        </div>

        <div>
          <label>Bike Brand</label>
          <select
            value={bikeBrand}
            onChange={(e) => {
              setBikeBrand(e.target.value);
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
            {brandModels[bikeBrand]?.map((m) => (
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
            <option value="Electric">Electric</option>
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
              <p><strong>Plan:</strong> {p.policyName}</p>
              <p><strong>Insurer:</strong> {p.insurer}</p>
              <p><strong>Amount:</strong> ₹{p.Amount}</p>
              <button onClick={() => handleBuyNow(p)}>Buy Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  <p className="info-paragraph">
    <h3 style={{textAlign:"center"}}> What Is Bike Insurance?</h3>
If you own a bike, you know its value: the thrill of adventure, fun rides with the family, and the convenience of travelling in the local area. Indian households very quickly become attached to their bikes, and to ensure these sentiments are protected, getting bike insurance is very important. Bike Insurance protects your vehicle from the potential risk of damage and ensures that your bike continues to provide memories even after a setback.
    </p>
 
<BikePlans/>
<p    className="info-paragraph">
    <h3 style={{textAlign:"center"}}> Why Do You Need Bike Insurance?</h3>
  
<p style={{textAlign:"center"}}>Here are some of the key benefits of having a car insurance policy:</p>

<p style={{fontSize:"12px"}}>Legal Requirement - In India, having at least a third-party liability cover is mandatory to legally ride on the roads. Failure to comply can lead to fines or even license suspension.</p>
<p style={{fontSize:"12px"}}>Financial Security - Bike insurance protects you from the financial burden of repairing damages to your vehicle or another party’s, especially in accidents..</p>
<p style={{fontSize:"12px"}}>Protection Against Theft - If your bike is stolen, comprehensive coverage can compensate you for the loss, mitigating out-of-pocket expenses.</p>
<p style={{fontSize:"12px"}}>Personal Accident Cover - Most bike insurance policies include personal accident coverage, providing financial support for medical treatment in case of injuries sustained due to an accident.
</p>
<p style={{fontSize:"12px"}}>Third-Party Liability - If your bike is involved in an accident causing damage or injury to someone else, third-party liability coverage pays for their expenses or legal claims, reducing your financial risk.</p>
</p>
<CustomerSpeak/>
<Footer/>
<Footer2/>
<Footer3/>
  </>
);
};

export default BikeInsurance;
