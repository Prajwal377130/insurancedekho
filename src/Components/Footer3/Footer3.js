import React from "react";
import "./Footer3.css";

const Footer3 = () => {
  return (
    <div className="footer-legal-wrapper">
      <div className="footer-legal-container">
        {/* Disclaimer / Terms Section */}
        <div className="footer-legal-left">
          <p>
            *Standard T&C Apply. All savings/offers are offered by insurance companies as approved by the IRDAI 
            for the product under applicable file & use guidelines. Savings in motor insurance are as quoted in 
            Indian Motor Tariff. For more details on risk factors, terms and conditions, please read the sales 
            brochure of respective insurers carefully before concluding a sale. Tax benefits are subject to changes 
            in applicable tax laws. Girnar Insurance Brokers Private Limited (CIN: U66010RJ2016PTC054841), Regd/Off: 
            Girnar 21, Govind Marg, Moti Doongari Road, Dharam Singh Circle, Jaipur, Rajasthan - 302004, Corp. Off: 
            Flat no 301, Phase-2 Udyog Vihar, Gurugram-122022, Haryana, India. IRDAI License no 588. Composite Broker 
            valid till 19th March 2026. Email - support@insurancedekho.com, Helpline number: 7551196989. 
            You authorise Girnar Insurance Brokers Pvt. Ltd. (Insurancedekho) to contact you through call, SMS, email, 
            WhatsApp or any other mode in the future. You hereby override your NDNC registration.
          </p>
        </div>

        {/* IRDAI & CIN Info */}
        <div className="footer-legal-right">
          <p><strong>Girnar Insurance Brokers Private Limited</strong></p>
          <p>IRDAI License Number : 588</p>
          <p>CIN: U66010RJ2016PTC054841 | Composite Broker</p>
          <p>Valid Till: 19/03/2026 | Principal Officer: Mr. Ankit Kumar Agarwal</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-legal-bottom">
        <p>© Girnar Insurance Brokers Pvt. Ltd. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer3;
