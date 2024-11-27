import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <Router>
      <>
        {/* <HomePage companyName="Gravity Drive" imageUrl="images/logo.png" /> */}
        <AboutUs companyName="Gravity Drive" imageUrl="images/logo.png" />
      </>
    </Router>
  );
}

export default App;
