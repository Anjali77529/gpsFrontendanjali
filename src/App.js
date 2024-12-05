import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenu from "./components/common/TopMenu"; // Add this import
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";
import Services from "./components/pages/Services";
import Blog from "./components/pages/Blog";
import BlogSection from "./components/pages/BlogSection";
import FaqAccordion from "./components/pages/Faq";
import TruckRegistrationForm from "./components/pages/TruckDetails";

function App() {
  return (
    <Router>
      <TopMenu />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage companyName="Gravity Drive" imageUrl="images/logo.png" />
          }
        />
        <Route
          path="/about"
          element={
            <AboutUs companyName="Gravity Drive" imageUrl="images/logo.png" />
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogSection />} />
        <Route path="/faq" element={<FaqAccordion />} />
        <Route path="/" element={<TruckRegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
