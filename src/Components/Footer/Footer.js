import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
  FaSmile,
  FaGoogle,
} from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + Contact */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg" alt="InsuranceDekho" />
          </div>
          <div className="footer-icons">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTimes />
          </div>
          <p>Email : support@insurancedekho.com</p>
          <p>Call : 755 1196 989</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Products</h4>
            <ul>
              <li>Car Insurance</li>
              <li>Bike Insurance</li>
              <li>Health Insurance</li>
              <li>Life Insurance</li>
              <li>Term Insurance</li>
              <li>Investment</li>
              <li>Business</li>
              <li>Travel Insurance</li>
              <li>Tax Saving Schemes</li>
            </ul>
          </div>
          <div>
            <h4>Policy</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Grievance Redressal</li>
              <li>Fraud Detection</li>
              <li>Shipping Policy</li>
              <li>Terms of Use</li>
              <li>Cancellation & Refund</li>
              <li>E-Insurance Account</li>
            </ul>
          </div>
          <div>
            <h4>General</h4>
            <ul>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Fraud Identification</li>
              <li>Disclaimer</li>
              <li>Annual Reports/Annual Returns</li>
              <li>Solicitation Process</li>
              <li>ID Alumni Page</li>
              <li>Corporate Social Responsibility</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="footer-right">
          <div className="footer-stat">
            <FaSmile className="stat-icon" />
            <div>
              <strong>11 Mn+</strong>
              <div>Happy Smiles</div>
            </div>
          </div>
          <div className="footer-stat">
            <FaGoogle className="stat-icon" />
            <div>
              <strong>4.8</strong>
              <div>Rated on Google</div>
            </div>
          </div>
          <div className="footer-stat">
            <MdAssignmentTurnedIn className="stat-icon" />
            <div>
              <strong>95k+</strong>
              <div>Claims Served</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
