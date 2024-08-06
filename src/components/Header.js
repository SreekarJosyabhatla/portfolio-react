import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import { Fade } from "react-reveal";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Fade top>
          <h1>Sreekar Sarma Josyabhatla</h1>
        </Fade>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
