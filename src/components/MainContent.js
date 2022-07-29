import React from "react";
import Brain from "../images/Brain.png";
import Robot from "../images/ROBOT.png";

const MainContent = () => {
  return (
    // App Body Added
    <main className="main">
      <div className="main-header">
        <div className="square">
          <h1 className="ai">AI</h1>
        </div>
        <h1 className="header-text">INTELLIGENCE.IO</h1>
      </div>
      <p className="offer-p">
        Artificial Intelligence Is Already Among Us, Do You Want To{" "}
        <span className="blue-text">Try It By Yourself?</span>
      </p>
      <p className="about-p-offer">
        This Project Was Created In Order To Show the basics of the neural
        networks and machine learning, through the chatting way. To put it more
        simply, you can create your own aI and train it just with chatting{" "}
      </p>
      <figure className="separator"></figure>
      <div className="buttons">
        <button className="start-btn">START</button>
        <button className="demo">DEMO</button>
      </div>
      <img className="robot-picture" src={Robot}></img>
      {/* Offer And Quote Start */}
      {/* Buttons */}
      <img className="brain-picture" src={Brain}></img>
    </main>
  );
};

export default MainContent;
