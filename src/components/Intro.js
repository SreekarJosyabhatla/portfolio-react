import React from "react";
import "./Intro.css";
import profileImage from "../assets/profile.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="intro-text">
          <h2>Hello, I'm Sreekar Sarma Josyabhatla</h2>
          <p>
            I'm a 4th year CSE-AIML student with a passion for Machine Learning
            and programming. Currently looking for internship opportunities to
            further my skills and grow my professional network.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/sreekar-sarma-josyabhatla-156002252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SreekarJosyabhatla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:sreekarsarma2003@gmail.com" className="mail-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
