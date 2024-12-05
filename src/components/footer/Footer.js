import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [companyDetails, setCompanyDetails] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/companyDetails",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setCompanyDetails(data[0]); // Assuming the API response is an array and we need the first item.
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    };

    fetchCompanyDetails();
  }, []);
  return (
    <>
      <footer className="footer-area">
        {/* Footer Upper */}
        <div className="footer-content">
          <div className="container">
            <div className="row clearfix">
              {/* Two 4th column */}
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="row clearfix">
                  <div className="col-lg-7 col-sm-6 col-xs-12 column">
                    <div className="footer-widget about-widget">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src="images/logo-1.png"
                            className="img-responsive"
                            alt=""
                          />
                        </Link>
                      </div>
                      <ul className="contact-info">
                        <li>
                          <span className="icon fa fa-map-marker"></span> 60
                          {companyDetails?.address}
                        </li>
                        <li>
                          <span className="icon fa fa-phone"></span>
                          {companyDetails?.numbers?.[1]}
                        </li>
                        <li>
                          <span className="icon fa fa-envelope-o"></span>{" "}
                          {companyDetails?.emails?.[1]}
                        </li>
                        <li>
                          <span className="icon fa fa-fax"></span>
                          {companyDetails?.numbers?.[0]}
                        </li>
                      </ul>
                      <div className="social-links-two clearfix">
                        <Link to="#" className="facebook img-circle">
                          <span className="fa fa-facebook-f"></span>
                        </Link>
                        <Link to="#" className="twitter img-circle">
                          <span className="fa fa-twitter"></span>
                        </Link>
                        <Link to="#" className="google-plus img-circle">
                          <span className="fa fa-google-plus"></span>
                        </Link>
                        <Link to="#" className="linkedin img-circle">
                          <span className="fa fa-pinterest-p"></span>
                        </Link>
                        <Link to="#" className="linkedin img-circle">
                          <span className="fa fa-linkedin"></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Footer Column */}
                  <div className="col-lg-5 col-sm-6 col-xs-12 column">
                    <h2>Our Service</h2>
                    <div className="footer-widget links-widget">
                      <ul>
                        <li>
                          <Link to="#">Packaging And Storage</Link>
                        </li>
                        <li>
                          <Link to="#">Worldwide Transport</Link>
                        </li>
                        <li>
                          <Link to="#">International Air Freight</Link>
                        </li>
                        <li>
                          <Link to="#">Ground Shipping</Link>
                        </li>
                        <li>
                          <Link to="#">24/7 Support</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two 4th column */}
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="row clearfix">
                  {/* Footer Column */}
                  <div className="col-lg-7 col-sm-6 col-xs-12 column">
                    <div className="footer-widget news-widget">
                      <h2>Latest News</h2>
                      <div className="news-post">
                        <div className="icon"></div>
                        <div className="news-content">
                          <figure className="image-thumb">
                            <img src="images/blog/popular-2.jpg" alt="" />
                          </figure>
                          <Link to="#">
                            Top Benefits of Hiring Our Professional Logistics
                            Service
                          </Link>
                        </div>
                        <div className="time">June 21, 2016</div>
                      </div>

                      <div className="news-post">
                        <div className="icon"></div>
                        <div className="news-content">
                          <figure className="image-thumb">
                            <img src="images/blog/popular-1.jpg" alt="" />
                          </figure>
                          <Link to="#">
                            Top Benefits of Hiring Our Professional Logistics
                            Service
                          </Link>
                        </div>
                        <div className="time">June 21, 2016</div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Column */}
                  <div className="col-lg-5 col-sm-6 col-xs-12 column">
                    <div className="footer-widget links-widget">
                      <h2>Site Links</h2>
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/team">Our Team</Link>
                        </li>
                        <li>
                          <Link to="/services">Our Services</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Two 4th column End */}
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-copyright">
          <div className="auto-container clearfix">
            <div className="copyright text-center">
              Copyright 2016 &copy; Theme Created By{" "}
              <Link to="#">Aman's Team</Link> All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
