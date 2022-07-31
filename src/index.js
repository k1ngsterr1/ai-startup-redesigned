import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";
import SecondApp from "./apps/SecondApp";
import ThirdApp from "./apps/ThirdApp";
import FourthApp from "./apps/FourthApp";

// Styles
import "./styles/main_styles/main-styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SecondApp />
    <ThirdApp />
    <FourthApp />
  </React.StrictMode>
);
