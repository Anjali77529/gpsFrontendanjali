import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <Router>
      <>
        <AboutUs companyName="Gravity Drive" imageUrl="images/logo.png" />
      </>
    </Router>
  );
}

export default App;
