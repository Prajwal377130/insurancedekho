import React from "react";
import { FaStar, FaCheck } from "react-icons/fa";

const InsuranceHighlights = () => (
  <div>
    <h4>HDFC ERGO Health Insurance</h4>
    <p><FaStar color="orange" /> 526 reviews</p>
    <h6>Highlights</h6>
    <div className="row">
      <div className="col-md-6">
        <p><FaCheck className="text-success" /> Cashless Approval TAT: <b>Within 37 mins</b></p>
        <p><FaCheck className="text-success" /> Network Hospitals: <b>13,000+</b></p>
        <p><FaCheck className="text-success" /> Special Benefits: <b>2X Cover from Day 1</b></p>
      </div>
      <div className="col-md-6">
        <p><FaCheck className="text-success" /> Claim Settlement Ratio: <b>99.80%</b></p>
        <p><FaCheck className="text-success" /> PED Coverage Starting: <b>5 years</b></p>
        <p><FaCheck className="text-success" /> Starting Premium: <b>₹1050/month</b></p>
      </div>
    </div>
  </div>
);

export default InsuranceHighlights;
