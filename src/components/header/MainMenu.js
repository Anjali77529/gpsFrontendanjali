import React from "react";
import { Link } from "react-router-dom";

const MainMenu = ({ companyName, imageUrl }) => {
  return (
    <>
      <header className="header-area">
        <div className="navigation">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button
                  aria-expanded="false"
                  data-target="#main-navigation"
                  data-toggle="collapse"
                  className="navbar-toggle collapsed pages-btn"
                  type="button"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">
                  <img
                    alt={companyName}
                    src={imageUrl}
                    className="img-responsive"
                  />
                </Link>
              </div>

              <div id="main-navigation" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right custom-nav">
                  <li className="hidden-sm">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="dropdown">
                    <button
                      className="dropdown-toggle btn btn-bordered pages-btn"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                      style={{ backgroundColor: "white" }}
                    >
                      About Company <span className="fa fa-angle-down"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/about-1">About 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <button
                      className="dropdown-toggle btn btn-bordered pages-btn"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                      style={{ backgroundColor: "white" }}
                    >
                      Our Service <span className="fa fa-angle-down"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/services-2">Services 2</Link>
                      </li>
                      <li>
                        <Link to="/services-3">Services 3</Link>
                      </li>
                      <li>
                        <Link to="/services-4">Services 4 (Sticky Bar)</Link>
                      </li>
                      <li>
                        <Link to="/services-details">Services Detail</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="hidden-sm">
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li className="dropdown">
                    <button
                      className="dropdown-toggle btn btn-bordered pages-btn"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                      style={{ backgroundColor: "white" }}
                    >
                      Blog <span className="fa fa-angle-down"></span>
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/blog">Grid View</Link>
                      </li>
                      <li>
                        <Link to="/blog-1">Right Sidebar With 2 Column</Link>
                      </li>
                      <li>
                        <Link to="/blog-2">Left Sidebar With 2 Column</Link>
                      </li>
                      <li>
                        <Link to="/blog-3">Masonry Grid</Link>
                      </li>
                      <li>
                        <Link to="/blog-detail">Post With Slider</Link>
                      </li>
                      <li>
                        <Link to="/blog-detail-2">Post With Static Bg</Link>
                      </li>
                      <li>
                        <Link to="/blog-detail-3">Post Full Width</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <button
                      className="dropdown-toggle btn btn-bordered pages-btn"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                      style={{ backgroundColor: "white" }}
                    >
                      Pages <span className="fa fa-angle-down"></span>
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/404">Error Page</Link>
                      </li>
                      <li>
                        <Link to="/team">Our Team</Link>
                      </li>
                      <li>
                        <Link to="/icons">Icons</Link>
                      </li>
                      <li>
                        <Link to="/flat-icons">Flat Icons</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/login">Sign In</Link>
                      </li>
                      <li>
                        <Link to="/sign-up">Sign Up</Link>
                      </li>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <button
                      className="dropdown-toggle btn btn-bordered pages-btn"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                      style={{ backgroundColor: "white" }}
                    >
                      Cargo Tracking <span className="fa fa-angle-down"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/tracking-landing">
                          Tracking Landing Page
                        </Link>
                      </li>
                      <li>
                        <Link to="/tracking-classic">
                          Tracking Classic Page
                        </Link>
                      </li>
                      <li>
                        <Link to="/history">Tracking Order History</Link>
                      </li>
                      <li>
                        <Link to="/online-booking">Cargo Booking</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainMenu;
