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
                  {/* Home Page Route */}
                  {page === "home" ? (
                    <li className="hidden-sm active">
                      <Link to="/">Home</Link>
                    </li>
                  ) : (
                    <li className="hidden-sm">
                      <Link to="/">Home</Link>
                    </li>
                  )}

                  {/* About Page Route */}
                  {page === "about" ? (
                    <li className="hidden-sm active">
                      <Link to="/">About</Link>
                    </li>
                  ) : (
                    <li className="hidden-sm">
                      <Link to="/">About</Link>
                    </li>
                  )}

                  {page === "home" ? (
                    <li className="hidden-sm active">
                      <Link to="/">Our vehicles</Link>
                    </li>
                  ) : (
                    <li className="hidden-sm">
                      <Link to="/">Our vehicles</Link>
                    </li>
                  )}
                  {page === "home" ? (
                    <li className="hidden-sm active">
                      <Link to="/">Pricing</Link>
                    </li>
                  ) : (
                    <li className="hidden-sm">
                      <Link to="/">Pricing</Link>
                    </li>
                  )}

                  {page === "home" ? (
                    <li className="hidden-sm active">
                      <Link to="/">Pricing</Link>
                    </li>
                  ) : (
                    <li className="dropdown  hidden-sm">
                      <a
                        className="dropdown-toggle"
                        data-hover="dropdown"
                        data-toggle="dropdown"
                        data-animations="fadeInUp"
                      >
                        Blog <span className="fa fa-angle-down"></span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="blog-3.html">Masonry Grid</Link>{" "}
                        </li>
                      </ul>
                    </li>
                  )}
                  {/* <li className="dropdown "> <a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">Our Service <span className="fa fa-angle-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="services.html">Services</a> </li>
                                        <li><a href="services-2.html">Services 2</a> </li>
                                        <li><a href="services-3.html">Services 3</a> </li>
                                        <li><a href="services-4.html">Services 4 (Sticky Bar)</a> </li>
                                        <li><a href="services-details.html">Services Detail</a> </li>
                                    </ul>
                                </li> */}

                  {/* <li className="hidden-sm"><a href="gallery.html">Gallery</a></li> */}

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
                              <li className="dropdown"> <a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">Cargo Tracking <span className="fa fa-angle-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="index-5.html">Tracking Landing Page</a> </li>
                                        <li><a href="index-6.html">Tracking Classic Page </a> </li>
                                        <li><a href="history.html">Tracking Order History</a> </li>
                                        <li><a href="online-booking.html">Cargo Booking</a> </li>
                                    </ul>
                                </li> */}
                </ul>
                <Link
                  to="online-booking.html"
                  className="btn btn-primary pull-right"
                >
                  Book Now
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
