import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";
import Services from "./components/pages/Services";
import Blog from "./components/pages/Blog";
import BlogSection from "./components/pages/BlogSection";

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
