import React, { useEffect, useState } from 'react';
import './Investment.css';

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const InvestmentInsurance = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    if (step === 4) {
      (async () => {
        try {
          const res = await fetch('http://localhost:4000/api/investment-insurance/getall');
          const data = await res.json();
          setPolicies(data);
        } catch (err) {
          console.error('Error fetching investment policies:', err);
        }
      })();
    }
  }, [step]);

  const handleBuyNow = async (policy) => {
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert('Failed to load Razorpay SDK');
      return;
    }

    try {
      const orderRes = await fetch('http://localhost:4000/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: policy.investmentAmount * 100 }),
      });

      const order = await orderRes.json();

      const options = {
        key: 'rzp_test_8OxcE1UBYZJ2Nl',
        amount: order.amount,
        currency: order.currency,
        name: 'Investment Insurance',
        description: policy.policyName,
        order_id: order.id,
        handler: function (response) {
          alert(`Payment successful for ${policy.policyName}`);
          console.log('User Info:', { name, age, occupation });
          console.log('Razorpay Response:', response);
        },
        prefill: {
          name,
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: { color: '#3399cc' },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error('Payment error:', err);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="main-card">
      <h2>Investment Insurance</h2>

      {step === 1 && (
        <div className="step">
          <label>Enter Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button disabled={!name} onClick={() => setStep(2)}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="step">
          <label>Enter Your Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={() => setStep(1)}>Back</button>
          <button disabled={!age} onClick={() => setStep(3)}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="step">
          <label>Enter Your Occupation:</label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
          <button onClick={() => setStep(2)}>Back</button>
          <button disabled={!occupation} onClick={() => setStep(4)}>View Plans</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>Your Details:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Occupation:</strong> {occupation}</p>

          <h3>Available Investment Plans</h3>
          {policies.length === 0 ? (
            <p>Loading plans…</p>
          ) : (
            <div className="policy-list">
              {policies.map((p, i) => (
                <div key={i} className="policy-item">
                  <p><strong>Plan:</strong> {p.policyName}</p>
                  <p><strong>Insurer:</strong> {p.insurer}</p>
                  <p><strong>Investment Amount:</strong> ₹{p.investmentAmount}</p>
                  <p><strong>Expected Returns:</strong> ₹{p.expectedReturns}</p>
                  <button onClick={() => handleBuyNow(p)}>Buy Now</button>
                </div>
              ))}
            </div>
          )}
          <button onClick={() => setStep(3)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default InvestmentInsurance;
