import React from "react";
import "../styles/faq_styles/faq_styles.css";
import JohnTheRobot from "../images/JohnTheRobot.png";
import JohnTheRobotShadow from "../images/JohnTheRobotShadow.png";
import HoverThing from "../images/hover-thing.png";
import HoverThingLight from "../images/hover-thing-light.png";
import MessageWindow from "../images/message-window.png";

const FAQ = () => {
  return (
    <div className="fourth-screen">
      <h2 className="FAQ-header">FAQ</h2>
      <div className="faq-separator"></div>
      <div className="full-robot-container">
        <h4 className="robot-moderator">Our Moderator:</h4>
        <img className="Johnny" src={JohnTheRobot} alt="Here is Johnny"></img>
        <img
          className="JohnnyShadow"
          src={JohnTheRobotShadow}
          alt="Shadow"
        ></img>
        <img className="HoverThing" src={HoverThing} alt="hover-thing"></img>
        <img
          className="HoverThingLight"
          src={HoverThingLight}
          alt="Light"
        ></img>
        <figure className="robot-name">John The Robot</figure>
      </div>
      {/* M-window-container */}

      {/* M-window-container */}
      <div className="FAQ-table">
        <div className="for-question-1">
          <p className="question-one">1. For What This Platform is made? </p>
        </div>
        <div className="for-question-2">
          <p className="question-two">2. How Can i make my own aI?</p>
        </div>
        <div className="for-question-3">
          <p className="question-three">3. Is it absolutely free?</p>
        </div>
        <div className="for-question-4">
          <p className="question-four">4. How can I support you?</p>
        </div>
        <div className="for-question-5">
          <p className="question-five">5. What technologies were used?</p>
        </div>
        <div className="for-question-6">
          <p className="question-six">6. What does a subscription do?</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
