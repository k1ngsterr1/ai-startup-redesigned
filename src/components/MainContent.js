import React from "react";
import Brain from "../images/Brain.png";

const MainContent = () => {
  return (
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
      <figure className="separator"></figure>
      <div className="buttons">
        <button className="start-btn">START</button>
        <button className="demo">DEMO</button>
      </div>
      {/* Offer And Quote Start */}
      {/* Buttons */}
      <img className="brain-picture" src={Brain}></img>
    </main>
  );
};

export default MainContent;
