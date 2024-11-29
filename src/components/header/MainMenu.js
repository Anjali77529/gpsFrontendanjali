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
                  
                  <li className={`hidden-sm ${page === "home" ? "active" : ""}`}>
                    <Link to="/">Home</Link>
                  </li>


                  <li className={`dropdown  hidden-sm ${page === "about" ? "active" : ""}`}>
                    <Link className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">
                      About US <span class="fa fa-angle-down"></span>
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <Link to="/about">About US</Link>{" "}
                      </li>
                      <li>
                        <Link to="/">Branches</Link>{" "}
                      </li>
                    </ul>
                  </li>


                  <li className={`hidden-sm ${page === "service" ? "active" : ""}`}>
                    <Link to="/">Service</Link>
                  </li>

                  <li className={`hidden-sm ${page === "faq" ? "active" : ""}`}>
                    <Link to="/">FAQ</Link>
                  </li>

                  <li className={`hidden-sm ${page === "blog" ? "active" : ""}`}>
                    <Link to="/">Blog</Link>
                  </li>


                  


                  
                    

                  

                 

                  {/* 
                    <li className="dropdown"> <a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">Pages <span className="fa fa-angle-down"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="404.html">Error Page</a> </li>
                            <li><a href="team.html">Our Team </a> </li>
                            <li><a href="icons.html">Icons</a> </li>
                            <li><a href="flat-icons.html">Flat Icons</a> </li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="login.html">Sign In</a></li>
                            <li><a href="sign-up.html">Sign Up</a></li>
                            <li><a href="profile.html">Profile</a></li>
                        </ul>
                    </li>
                  */}
                </ul>
                <Link to="online-booking.html" className="btn btn-primary pull-right">Pricing</Link>{" "}
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
