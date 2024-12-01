import React from "react";
import { Link } from "react-router-dom";

const CurrentCp = ({ companyName, imageUrl, page }) => {
  return (
    <>
      <header className="header-area">
        <div className="logo-bar">
          <div className="container clearfix">
            <div className="logo">
              <Link to="/">
                <img
                  alt={companyName}
                  src={imageUrl}
                  className="img-responsive"
                />
              </Link>
            </div>

            <div className="information-content">
              <div className="info-box  hidden-sm">
                <div className="icon">
                  <span className="icon-envelope"></span>
                </div>
                <div className="text">EMAIL</div>
                <Link to="mailt:contact@scriptsbundle.com">
                  contact@scriptsbundle.com
                </Link>{" "}
              </div>

              <div className="info-box">
                <div className="icon">
                  <span className="icon-phone"></span>
                </div>
                <div className="text">Call Now</div>
                <Link className="location" to="#">
                  (92) 123-456-78
                </Link>
              </div>
              <div className="info-box">
                <div className="icon">
                  <span className="icon-map-pin"></span>
                </div>
                <div className="text">Find Us</div>
                <Link className="location" to="#">
                  Model Town, Pakistan{" "}
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="navigation-2">
          <nav className="navbar navbar-default ">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#main-navigation"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="nav navbar-nav">
                  <li
                    className={`hidden-sm ${page === "home" ? "active" : ""}`}
                  >
                    <Link to="/">Home</Link>
                  </li>

                  <li className={`dropdown  hidden-sm ${page === "about" ? "active" : ""}`}>
                    <Link
                      className="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp">
                        About US <span className="fa fa-angle-down"></span>
                        
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/about">About US</Link>{" "}
                      </li>
                      {/* <li>
                        <Link to="/">Branches</Link>{" "}
                      </li> */}
                    </ul>
                  </li>
                  
                  <li className={`dropdown  hidden-sm ${page === "services" ? "active" : ""}`}>
                    <Link
                      to="/services"
                      className="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp">
                        Services <span className="fa fa-angle-down"></span>
                        
                    </Link>
                    <ul className="dropdown-menu">
                      {/* <li>
                        <Link to="/about">AS</Link>{" "}
                      </li>
                      <li>
                        <Link to="/">Branches</Link>{" "}
                      </li> */}
                    </ul>
                  </li>
                  
                  <li className={`hidden-sm ${page === "faq" ? "active" : ""}`}>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  
                  <li className={`hidden-sm ${page === "blog" ? "active" : ""}`}>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
                <Link
                  to="online-booking.html"
                  className="btn btn-primary pull-right"
                >
                  Pricing
                </Link>{" "}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

const MainMenu = ({ companyName, imageUrl, page }) => {
  return (
    <>
      <CurrentCp companyName={companyName} imageUrl={imageUrl} page={page} />
    </>
  );
};

export default MainMenu;
