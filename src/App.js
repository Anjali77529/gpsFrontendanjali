import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    // <AboutUs companyName="Gravity Drive" imageUrl="images/logo.png" />
    <HomePage companyName="Gravity Drive" imageUrl="images/logo.png" />
  );
}

export default App;
