import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";
import TopMenu from "./components/header/TopMenu.js";
import Footer from "./components/footer/Footer.js";
import Services from "./components/pages/Services.js";
import Faq from "./components/pages/Faq.js";
import Blog from "./components/pages/Blog.js";
import BlogDetails from "./components/pages/BlogDetails.js";

function App() {
  return (
    <>
      
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

            <Route
              path="/services"
              element={
                <Services companyName="Gravity Drive" imageUrl="images/logo.png" />
              }
            />

            <Route
              path="/faq"
              element={
                <Faq companyName="Gravity Drive" imageUrl="images/logo.png" />
              }
            />

            <Route
              path="/blog"
              element={
                <Blog companyName="Gravity Drive" imageUrl="images/logo.png" />
              }
            />

            <Route
              path="/blogdetails"
              element={
                <BlogDetails companyName="Gravity Drive" imageUrl="images/logo.png" />
              }
            />

          </Routes>
        <Footer />
      </Router>
      
    </>
    
  );
}

export default App;
