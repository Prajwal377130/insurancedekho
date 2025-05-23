import React from 'react';
import './HealthPlan.css';

const HealthPlan = () => {
  

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
      name: 'Health Insurance',
      description: insurerName,
      order_id: order.id,
      handler: function (response) {
        alert(`Payment Successful!
Payment ID: ${response.razorpay_payment_id}`);
        // You can store payment info in DB here
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
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
      <p style={{ textAlign: "center", fontSize: "25px" }}>Best Health Insurance Plans In India</p>

      {/* Example card updated */}
      <div className="plan-card">
        <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="https://staticimg.insurancedekho.com/seo/insurer/hdfc-ergo.jpg"
            alt="HDFC Ergo"
            className="insurer-logo"
            style={{ width: "50px", marginBottom: "10px" }}
          />
          <h6 style={{ margin: 0 }}>Hdfc Ergo Health Insurance</h6>
        </div>
        <div className="plan-details">
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginBottom: "15px", fontSize: "12px" }}>
            <div style={{ textAlign: "center" }}>
              <p>Cover Amount</p>
              <p><strong>500000+</strong></p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Starting at</p>
              <p><strong>₹615/month</strong></p>
            </div>
          </div>
          <div className="features">
            <p style={{ color: "green" }}>Key Features:</p>
            <span>✓ No room rent limit</span>
            <span>✓ Unlimited restoration benefits</span>
          </div>
        </div>
        <div className="price-section">
          <button
            className="check-btn"
            onClick={() => goToPayment("Hdfc Ergo Health Insurance", "₹615/month")}
          >
            Check Prices
          </button>
        </div>
      </div>

      {/* Repeat for other cards with different details */}


  <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://staticimg.insurancedekho.com/seo/insurer/united-india.png"
      alt="United India"
      className="insurer-logo"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>United India Health Insurance</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"12px"}}>
      <div style={{textAlign:"center", fontSize:"12px"}}>
      <p>Cover Amount</p>
      <p><strong>500000+</strong></p>
      </div>
      <div style={{textAlign:"center"}}>
      <p>Starting at</p>
      <p><strong>628/month</strong></p>
      </div>
      </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
        <span>✓ No room rent limit</span>
        <span>✓100% no claim bonus</span>
      </div>
    </div>
    <div className="price-section">
      <button
            className="check-btn"
            onClick={() => goToPayment("United India Health Insurance", "628/month")}
          >
            Check Prices
          </button>
    </div>
  </div>

   <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://staticimg.insurancedekho.com/seo/insurer/icici-lombard.jpg"
      alt="United India"
      className="insurer-logo"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>Icici Lombard Health Insurance</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"12px"}}>
      <div style={{textAlign:"center", fontSize:"12px"}}>
       <p>Cover Amount</p>
      <p><strong>500000+</strong></p>
      </div>
      <div style={{textAlign:"center"}}>
      <p>Starting at</p>
      <p><strong>708/month</strong></p>
      </div>
      </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
        <span>✓ Single Private A/C Room</span>
        <span>✓100% no claim bonus</span>
      </div>
    </div>
    <div className="price-section">
        <button
            className="check-btn"
            onClick={() => goToPayment("Icici Lombard Health Insurance", "708/month")}
          >
            Check Prices
          </button>
    </div>
  </div>

  <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://staticimg.insurancedekho.com/seo/insurer/new-india.jpg"
      alt="United India"
      className="insurer-logo"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>New India Health Insurance</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"12px"}}>
      <div style={{textAlign:"center", fontSize:"12px"}}>
      <p>Cover Amount</p>
      <p><strong>500000+</strong></p>
      </div>
      <div style={{textAlign:"center"}}>
      <p>Starting at</p>
      <p><strong>517/month</strong></p>
      </div>
      </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
             <span>✓ No room rent limit</span>
        <span>✓100% no claim bonus</span>
      </div>
    </div>
    <div className="price-section">
      
     <button
            className="check-btn"
            onClick={() => goToPayment("New India  Health Insurance", "517/month")}
          >
            Check Prices
          </button>
    </div>
  </div>

  <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://staticimg.insurancedekho.com/seo/insurer/royal-sundaram.jpg"
      alt="United India"
      className="insurer-logo"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>Royal Sundaram Health Insurance</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"12px"}}>
      <div style={{textAlign:"center", fontSize:"12px"}}>
     <p>Cover Amount</p>
      <p><strong>500000+</strong></p>
      </div>
      <div style={{textAlign:"center"}}>
      <p>Starting at</p>
      <p><strong>441/month</strong></p>
      </div>
      </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
        <span>✓ Single Private A/C Room</span>

        <span>✓20% no claim bonus</span>
      </div>
    </div>
    <div className="price-section">
     <button
            className="check-btn"
            onClick={() => goToPayment("Royal SUndaram Health Insurance", "441/month")}
          >
            Check Prices
          </button>
    </div>
  </div>

      
      
    </div>
  );
};

export default HealthPlan;
