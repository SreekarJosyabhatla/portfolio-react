import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">sreekarsarma2003@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span className="contact-text">+91 9959310576</span>
        </div>
      </div>
      <p className="footer-note">© 2024 Sreekar Sarma Josyabhatla</p>
    </footer>
  );
};

export default Contact;
