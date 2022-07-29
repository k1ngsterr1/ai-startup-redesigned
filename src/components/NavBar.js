import React from "react";
import "../styles/main_styles/main-styles.css";

const NavBar = () => {
  return (
    <nav className="navigation">
      <div className="logo-square">AI</div>
      <div className="hamburger">
        <div className="h-line-1"></div>
        <div className="h-line-2"></div>
        <div className="h-line-3"></div>
      </div>
      <a className="home">HOME</a>
      <a className="about-project">ABOUT PROJECT</a>
      <a className="about-creator">ABOUT CREATOR</a>
      <a className="faq">FAQ</a>
      <a className="support">SUPPORT</a>
      <button className="sign-up">SIGN UP</button>
    </nav>
  );
};

export default NavBar;
