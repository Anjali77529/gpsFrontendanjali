import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <>
        <HomePage companyName="Gravity Drive" imageUrl="images/logo.png" />
      </>
    </Router>
  );
}

export default App;
