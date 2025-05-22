import React from 'react'
import './BikePlans.css'


const BikePlans = () => {
  return (
    <div>
      <div className="tabs-section">
  <h3>Top Car Insurance Plans</h3>
  <div className="tabs">
    <button className="tab active">Comprehensive</button>
    <button className="tab active">Third Party</button>
    <button className="tab active">Own Damage</button>
  </div>

  <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://staticimg.insurancedekho.com/seo/insurer/hdfc-ergo.jpg"
      alt="United India"
      className="insurer-logo"
      style={{ width: "50px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>Hdfc Ergo Car Insurance</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"12px"}}>
      <div style={{textAlign:"center", fontSize:"12px"}}>
      <p>CASHLESS GARAGES: </p>
      <p><strong>8000+</strong></p>
      </div>
      <div style={{textAlign:"center"}}>
      <p>CLAIM SETTLED: </p>
      <p><strong>100%</strong></p></div>
      <div style={{textAlign:"centre"}}>
      <p>ZERO DEP. CLAIMS:</p>
      <p><strong> UNLIMITED</strong> </p>
      </div>
      </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
        <span>✓ Maximum Cashless Garages</span>
        <span>✓ Over Night Vehicle Repairs</span>
        <span>✓ 24x7 Roadside Assistance</span>
        <span>✓ Quick Claim Settlement</span>
      </div>
    </div>
    <div className="price-section">
      <p>Starting From <strong>₹2881</strong></p>
      <button className="check-btn">Check Prices</button>
    </div>
  </div>

  <div className="plan-card">
     <div className="image-with-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="https://staticimg.insurancedekho.com/seo/insurer/united-india.png"
      alt="United India"
      className="insurer-logo"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <h6 style={{ margin: 0 }}>United India Car Insurance</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"12px"}}>
      <div style={{textAlign:"center", fontSize:"12px"}}>
      <p>CASHLESS GARAGES: </p>
      <p><strong>3100</strong></p>
      </div>
      <div style={{textAlign:"center"}}>
      <p>CLAIM SETTLED: </p>
      <p><strong>95%</strong></p></div>
      <div style={{textAlign:"centre"}}>
      <p>Compherensive CLAIMS:</p>
      <p><strong> UNLIMITED</strong> </p>
      </div>
      </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
        <span>✓ Towing Assistance(For Accidents)</span>
        <span>✓ Coverage Outside India</span>
        <span>✓ PSU Provider</span>
        <span>✓ Quick Claim Settlement</span>
      </div>
    </div>
    <div className="price-section">
      <p>Starting From <strong>₹2396</strong></p>
      <button className="check-btn">Check Prices</button>
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
    <h6 style={{ margin: 0 }}>Icici Lombard Car Insurance</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"12px"}}>
      <div style={{textAlign:"center", fontSize:"12px"}}>
      <p>CASHLESS GARAGES </p>
      <p><strong>6100+</strong></p>
      </div>
      <div style={{textAlign:"center"}}>
      <p>CLAIMS SETTLED </p>
      <p><strong>96.75%</strong></p></div>
      <div style={{textAlign:"centre"}}>
      <p>COMPHERENSIVE CLAIMS</p>
      <p><strong> UNLIMITED</strong> </p>
      </div>
      </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
        <span>✓ Towing Assistance(Till 50 kms)</span>
        <span>✓ 6-Months Repair Warranty</span>
        <span>✓ Free Pick-up and Drop</span>
        <span>✓ Quick Claim Settlement</span>
      </div>
    </div>
    <div className="price-section">
      <p>Starting From <strong>₹1000</strong></p>
      <button className="check-btn">Check Prices</button>
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
    <h6 style={{ margin: 0 }}>New India Car Insurance</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"12px"}}>
      <div style={{textAlign:"center", fontSize:"12px"}}>
      <p>CASHLESS GARAGES </p>
      <p><strong>3000</strong></p>
      </div>
      <div style={{textAlign:"center"}}>
      <p>CLAIM SETTLED</p>
      <p><strong>92%</strong></p></div>
      <div style={{textAlign:"centre"}}>
      <p>COMPHRENSIVE CLAIMS:</p>
      <p><strong> UNLIMITED</strong> </p>
      </div>
      </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
        <span>✓ Towing Assistance till Rs.1500</span>
        <span>✓ Coverage Outside India</span>
        <span>✓ PSU Provider</span>
        <span>✓ Quick Claim Settlement</span>
      </div>
    </div>
    <div className="price-section">
      <p>Starting From <strong>₹2494</strong></p>
      <button className="check-btn">Check Prices</button>
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
    <h6 style={{ margin: 0 }}>Royal Sundaram Car Insurance</h6>
  </div>
    <div className="plan-details">
      <div style={{display:"flex" , gap:"30px", flexWrap:"wrap", marginBottom:"15px",fontSize:"12px"}}>
      <div style={{textAlign:"center", fontSize:"12px"}}>
      <p>CASHLESS GARAGES </p>
      <p><strong>7600+</strong></p>
      </div>
      <div style={{textAlign:"center"}}>
      <p>CLAIM SETTLED </p>
      <p><strong>99%</strong></p></div>
      <div style={{textAlign:"centre"}}>
      <p>ZERO DEP. CLAIM</p>
      <p><strong> UNLIMITED</strong> </p>
      </div>
      </div>
      <div className="features">
        
        <p style={{color:"green"}}>Key Features:</p>
        <span>✓ Zero Dpreciation till 7 Years</span>
        <span>✓ 6-Month  Repair Warranty</span>
        <span>✓ Free Pick-Up and Drop</span>
        <span>✓ Quick Claim Settlement</span>
      </div>
    </div>
    <div className="price-section">
      <p>Starting From <strong>₹3151</strong></p>
      <button className="check-btn">Check Prices</button>
    </div>
  </div>

 </div>
    </div>
  )
}

export default BikePlans
