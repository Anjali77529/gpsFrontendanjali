import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
      
       
        <Route
          path="/"
          element={<HomePage companyName="Gravity Drive" imageUrl="images/logo.png" />}
        />
         <Route
          path="/about"
          element={<AboutUs companyName="Gravity Drive" imageUrl="images/logo.png" />}
        />
        
        
      </Routes>
    </Router>
  );
}

export default App;
