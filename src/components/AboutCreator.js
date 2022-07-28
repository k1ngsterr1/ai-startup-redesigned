import React from "react";
import "../styles/aboutC_styles/aboutC.css";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import NeuroHand3 from "../images/NEURO-HAND3.png";
import { useState } from "react";

const AboutCreator = () => {
  const [neuroHandClass, setNeuroHandClass] = useState("neuro-hand");
  let initialTxt = "CONTACT ME";
  const [text, setText] = React.useState(initialTxt);

  return (
    <div className="third-screen">
      <h2 className="about-c-header">ABOUT CREATOR</h2>
      <figure className="separator-cr"></figure>
      <p className="about-c-p">
        This project was fully created by{" "}
        <span className="ruslan">ruslan makhmatov</span> - software developer
        from kazakhstan
      </p>
      <div className="social-networks">
        <FaGithub className="icon-sn-1"></FaGithub>
        <FaDiscord className="icon-sn-2"></FaDiscord>
        <FaBehance className="icon-sn-3"></FaBehance>
      </div>
      <figure className="separator-cr-2"></figure>
      <button
        onMouseOver={() => {
          setNeuroHandClass("neuro-hand-in");
          setText("DO IT!");
        }}
        onMouseLeave={() => {
          setNeuroHandClass("neuro-hand-out");
          setText(initialTxt);
        }}
        id="contact-me-btn"
        className="contact-me-btn"
      >
        {text}
      </button>
      <img
        id="neuro-hand-pic"
        className={neuroHandClass}
        src={NeuroHand3}
      ></img>
    </div>
  );
};
export default AboutCreator;
