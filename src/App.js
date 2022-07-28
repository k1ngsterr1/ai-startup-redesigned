import React from "react";
import "./styles/main_styles/main-styles.css";

// components
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar></NavBar>
      <MainContent></MainContent>
    </div>
  );
};

export default App;
