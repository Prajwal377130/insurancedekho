import React from 'react';
import './InvestmentPlan.css';

const InvestmentPlan = () => {
  const goToPayment = async (insurerName, price) => {
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);

  try {
    const response = await fetch('http://localhost:4000/api/payment/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: numericPrice }),
    });

    const order = await response.json();

    const options = {
      key: 'rzp_test_8OxcE1UBYZJ2Nl', 
      amount: order.amount,
      currency: order.currency,
      name: 'Term Insurance',
      description: insurerName,
      order_id: order.id,
      handler: function (response) {
        alert(`Payment Successful!
Payment ID: ${response.razorpay_payment_id}`);
        
      },
      prefill: {
        name: 'Pimmud',
        email: 'Pimmud@example.com',
        contact: '9999999999',
      },
      notes: {
        insurer: insurerName,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error('Error initiating payment', error);
  }
};

  return (
    <div className="tabs-section">
      <p style={{ textAlign: "center", fontSize: "25px" }}>Best Investment Plans in India With High Returns </p>

      {/* Example card updated */}
      <div className="plan-card">
        <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="https://healthstatic.insurancedekho.com/prod/imagegallery/20220616131915.jpg"
            alt="HDFC Ergo"
            className="insurer-logo"
            style={{ width: "50px", marginBottom: "10px" }}
          />
          <h6 style={{ margin: 0 }}>iSelect Guarateed</h6>
        </div>
        <div className="plan-details">
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginBottom: "15px", fontSize: "14px" }}>
            <div style={{ textAlign: "center" }}>
              <p>You Invest</p>
              <p><strong>₹1 Lakh p.a.</strong></p>
              <p>10 years</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>You GET Tax Free</p>
              <p><strong>₹29.1 Lakh</strong></p>                   
            <p>20 years</p>


            </div>
          </div>

        </div>
        <div className="price-section">
          <button
            className="check-btn"
            onClick={() => goToPayment("iSelect Guarateed","100000/p.a")}
          >
            Check Prices
          </button>
        </div>
      </div>



  <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://healthstatic.insurancedekho.com/prod/oem/20230324151002.png"
      alt="United India"
      className="insurer-logo"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>Smart Wealth Plan</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"14px"}}>
      <div style={{ textAlign: "center" }}>
              <p>You Invest</p>
              <p><strong>₹1 Lakh p.a.</strong></p>
              <p>10 years</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>You GET Tax Free</p>
              <p><strong>₹27.3 Lakh</strong></p>                   
            <p>20 years</p>


            </div>
          </div>

    </div>
    <div className="price-section">
      <button
            className="check-btn"
            onClick={() => goToPayment("Smart Wealth Plan")}
          >
            Check Prices
          </button>
    </div>
  </div>

   <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://healthstatic.insurancedekho.com/prod/oem/20230620110338.png"
      alt="United India"
      className="insurer-logo"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>POS Goyal Suraksha</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"14px"}}>
      <div style={{ textAlign: "center" }}>
              <p>You Invest</p>
              <p><strong>₹1 Lakh p.a.</strong></p>
              <p>10 years</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>You GET Tax Free</p>
              <p><strong>₹27.1 Lakh</strong></p>                   
            <p>20 years</p>


            </div>
          </div>

    </div>
    <div className="price-section">
        <button
            className="check-btn"
            onClick={() => goToPayment("POS Goyal Suraksha" ,"100000/p.a")}
          >
            Check Prices
          </button>
    </div>
  </div>

  <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://staticimg.insurancedekho.com/strapi/20240419120731_94b2d14609.webp"
      alt="United India"
      className="insurer-logo"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>iGuarantee Max Saving</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"14px"}}>
            <div style={{ textAlign: "center" }}>
              <p>You Invest</p>
              <p><strong>₹1 Lakh p.a.</strong></p>
              <p>10 years</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>You GET Tax Free</p>
              <p><strong>₹26.5 Lakh</strong></p>                   
            <p>20 years</p>


            </div>
          </div>
    </div>
    <div className="price-section">
      
     <button
            className="check-btn"
            onClick={() => goToPayment("iGuarantee Max Savig" ,"100000/p.a")}
          >
            Check Prices
          </button>
    </div>
  </div>

  <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://healthstatic.insurancedekho.com/prod/oem/20230324150512.png"
      alt="United India"
      className="insurer-logo"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>Sanchy Plus</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"14px"}}>
       <div style={{ textAlign: "center" }}>
              <p>You Invest</p>
              <p><strong>₹1 Lakh p.a.</strong></p>
              <p>10 years</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>You GET Tax Free</p>
              <p><strong>₹24.6 Lakh</strong></p>                   
            <p>20 years</p>


            </div>
          </div>
    </div>
    <div className="price-section">
     <button
            className="check-btn"
            onClick={() => goToPayment("Sachy Plus" ,"100000/p.a")}
          >
            Check Prices
          </button>
    </div>
  </div>

      
      
    </div>
  );
};

export default InvestmentPlan;
