import React from 'react';
import './TermPlan.css';

const TermPlan = () => {
  

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
        // You can store payment info in DB here
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
      <p style={{ textAlign: "center", fontSize: "25px" }}>Best Term Insurance Plans In India</p>

   
      <div className="plan-card">
        <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="https://staticimg.insurancedekho.com/seo/insurer/hdfc-ergo.jpg"
            alt="HDFC Ergo"
            className="insurer-logo"
            style={{ width: "50px", marginBottom: "10px" }}
          />
          <h6 style={{ margin: 0 }}>HDFC C2Ps Life</h6>
        </div>
        <div className="plan-details">
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginBottom: "15px", fontSize: "12px" }}>
            <div style={{ textAlign: "center" }}>
              <p>Life Cover</p>
              <p><strong>1 CR</strong></p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>CLAIMS SETTLED</p> 

              <p><strong>99.4%</strong></p>
            </div>
          </div>
          <div className="features">
            <p style={{ color: "green" }}>Key Features:</p>
            <span>✓ Terminal illness</span>
            <span>✓ Renewability Option</span>
          </div>
        </div>
        <div className="price-section">
      <p>Starting From <strong>₹ 771/Month</strong></p>
          <button
            className="check-btn"
            onClick={() => goToPayment("Hdfc Ergo Ter, Insurance", "₹771/month")}
          >
            Check Prices
          </button>
        </div>
        </div>
      

      {/* Repeat for other cards with different details */}


      <div className="plan-card">
        <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="https://staticimg.insurancedekho.com/seo/insurer/hdfc-ergo.jpg"
            alt="HDFC Ergo"
            className="insurer-logo"
            style={{ width: "50px", marginBottom: "10px" }}
          />
          <h6 style={{ margin: 0 }}>HDFC C2Ps Life</h6>
        </div>
        <div className="plan-details">
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginBottom: "15px", fontSize: "12px" }}>
            <div style={{ textAlign: "center" }}>
              <p>Life Cover</p>
              <p><strong>1 CR</strong></p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>CLAIMS SETTLED</p> 

              <p><strong>99.4%</strong></p>
            </div>
          </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
        <span>✓ Terminal illness</span>
        <span>✓Accidental Death</span>
      </div>
    </div>
    <div className="price-section">
      <p>Starting From <strong>₹ 1398/Month</strong></p>

          <button
            className="check-btn"
            onClick={() => goToPayment("Hdfc Ergo Term Insurance", "₹1398/month")}
          >
            Check Prices
          </button>
        </div>
        </div>

  


      
      
    </div>
  );
};

export default TermPlan;
