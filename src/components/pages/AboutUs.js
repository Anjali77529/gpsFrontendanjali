import React, { useState } from "react";
import TopMenu from "../header/TopMenu";
import MainMenu from "../header/MainMenu";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const AboutUs = ({ companyName, imageUrl }) => {
  const HeaderBanner = () => {
    return (
      <>
        <section className="breadcrumbs-area parallex">
          <div className="container">
            <div className="row">
              <div className="page-title">
                <div className="col-sm-12 col-md-6 page-heading text-left">
                  <h3>Who we are</h3>
                  <h2>About Our Company</h2>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <ul className="breadcrumbs">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <Link to="/pages">pages</Link>
                    </li>
                    <li>
                      <Link to="/about-projects">about our projects</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  const AboutBody = () => {
    return (
      <>
        <section className="padding-top-70" id="about">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-6 col-sm-12 col-xs-12 ">
                <div className="about-title">
                  <h2>Services All Over The World</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent congue justo scelerisque mattis iaculis. Maecenas
                    vestibulum faucibus enim scelerisque egestas. Praesent
                    facilisis, tortor vel vehicula imperdiet, felis massa
                    ultrices metus, sed consectetur massa ex vitae sem. Integer
                    eu sodales augue leo.
                  </p>

                  <p>
                    Pellentesque pharetra orci quam, vel scelerisque massa
                    semper et. Fusce vel tortor eu metus rhoncus blandit a vel
                    turpis. Suspendisse sed facilisis lacus. Integer mattis
                    interdum neque, non molestie risus facilisis et. Donec
                    gravida luctus laoreet. Curabitur quis iaculis velit.{" "}
                  </p>

                  <div className="more-about margin-top-30">
                    <Link to="/contact" className="btn btn-primary btn-lg">
                      Contact Us <i className="fa fa-chevron-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 our-gallery col-xs-12">
                <Link className="tt-lightbox" to="/images/crew.png">
                  <img
                    className="img-responsive"
                    alt="Crew working together"
                    src="images/crew.png"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  const MissionVission = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <>
        <section className="section-padding-70 gray" id="why-choose">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-7 col-sm-12 col-xs-12 ">
                <div className="about-title">
                  <h3>More about us</h3>
                  <h2>Why People Choose Us</h2>
                  <p>
                    Ut consequat velit a metus accumsan, vel tempor nulla
                    blandit. Integer euismod magna vel mi congue suscipit.
                    Praesent quis facilisis neque. Donec scelerisque nibh vitae
                    sapien ornare efficitur.
                  </p>
                </div>
                <div className="choose-services">
                  <ul className="choose-list">
                    <li>
                      <div className="choose-box">
                        {" "}
                        <span className="iconbox">
                          <i className="flaticon-logistics-delivery-truck-and-clock"></i>
                        </span>
                        <div className="choose-box-content">
                          <h4>Fast Worldwide delivery</h4>
                          <p>
                            Donec dignissim enim id urna fermentum, non
                            hendrerit sem volutpat ellentesque pretium sapien
                            nec metus.non hendrerit sem volutpat ellentesque
                            pretium sapien nec metus
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="choose-box">
                        {" "}
                        <span className="iconbox">
                          <i className="flaticon-woman-with-headset"></i>
                        </span>
                        <div className="choose-box-content">
                          <h4>Safety & Compliance</h4>
                          <p>
                            Donec dignissim enim id urna fermentum, non
                            hendrerit sem volutpat ellentesque pretium sapien
                            nec metus.non hendrerit sem volutpat ellentesque
                            pretium sapien nec metus
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="choose-box">
                        {" "}
                        <span className="iconbox">
                          <i className="flaticon-24-hours-symbol"></i>
                        </span>
                        <div className="choose-box-content">
                          <h4>24/7 Support </h4>
                          <p>
                            Donec dignissim enim id urna fermentum, non
                            hendrerit sem volutpat ellentesque pretium sapien
                            nec metus.non hendrerit sem volutpat ellentesque
                            pretium sapien nec metus
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="accordion-box style-one">
                <div className="faqs-title">
                  <h3>Need help</h3>
                  <h2>Frequently Asked Questions</h2>
                  <p>
                    Ut consequat velit a metus accumsan, vel tempor nulla
                    blandit. Integer euismod magna vel mi congue suscipit.
                  </p>
                </div>

                <div className="accordion">
                  {[
                    {
                      question: "What is a freight forwarder?",
                      answer:
                        "A freight forwarder organizes shipments for individuals or corporations to get goods from the manufacturer or producer to a market, customer, or final point of distribution.",
                    },
                    {
                      question: "Why are the shipping rates so volatile?",
                      answer:
                        "Shipping rates fluctuate due to factors such as fuel prices, demand and supply, seasonal trends, and geopolitical conditions.",
                    },
                    {
                      question: "What are the methods of payment?",
                      answer:
                        "Common payment methods include bank transfers, credit card payments, and sometimes cash on delivery depending on the service.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`accordion-block ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <div
                        className="accord-btn"
                        onClick={() => toggleAccordion(index)}
                      >
                        <h4>{item.question}</h4>
                      </div>
                      <div
                        className={`accord-content ${
                          activeIndex === index ? "expanded" : "collapsed"
                        }`}
                        style={{
                          display: activeIndex === index ? "block" : "none",
                        }}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            </div>
          </div>
        </section>
      </>
    );
  };
  
  const FounderWords = () => {
    return (
      <>
        <section className="padding-top-70" id="about">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-7 col-sm-12 col-xs-12 ">
                <div className="about-title">
                  <h2>We Provide Services All Over The World</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent congue justo scelerisque mattis iaculis. Maecenas
                    vestibulum faucibus enim scelerisque egestas. Praesent
                    facilisis, tortor vel vehicula imperdiet, felis massa
                    ultrices metus, sed consectetur massa ex vitae sem. Integer
                    eu sodales augue. Suspendisse eget placerat lorem. Phasellus
                    ac hendrerit leo. Morbi quis iaculis eros. Sed tincidunt
                    augue ante, sit amet vehicula odio aliquam quis. Donec at
                    malesuada nisl. Pellentesque eros lorem, aliquet id
                    hendrerit id, hendrerit ac odio. In dui mauris, auctor vel
                    vestibulum vitae, tincidunt id mi.{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-5 col-sm-12 col-xs-12 our-gallery">
                <Link className="tt-lightbox" to="/images/about-company-1.png">
                  <img
                    className="img-responsive margin-bottom-30"
                    alt="About the company"
                    src="images/about-company-1.png"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  const Facts = () => {
    return (
      <>
        <div className="parallex section-padding-70 fun-facts-bg text-center">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="statistic-percent" data-perc="356">
                  <div className="facts-icons">
                    {" "}
                    <span className="flaticon-woman-with-headset"></span>{" "}
                  </div>
                  <div className="fact">
                    {" "}
                    <span className="percentfactor">356</span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="statistic-percent" data-perc="126">
                  <div className="facts-icons">
                    {" "}
                    <span className="flaticon-commercial-delivery-symbol-of-a-list-on-clipboard-on-a-box-package"></span>{" "}
                  </div>
                  <div className="fact">
                    {" "}
                    <span className="percentfactor">126</span>
                    <p>Order Received</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="statistic-percent" data-perc="274">
                  <div className="facts-icons">
                    {" "}
                    <span className="flaticon-free-delivery-truck"></span>{" "}
                  </div>
                  <div className="fact">
                    {" "}
                    <span className="percentfactor">274</span>
                    <p>Free Delivery</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="statistic-percent" data-perc="434">
                  <div className="facts-icons">
                    {" "}
                    <span className="flaticon-ocean-transportation"></span>{" "}
                  </div>
                  <div className="fact">
                    {" "}
                    <span className="percentfactor">434</span>
                    <p>Completed Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <TopMenu />
      <MainMenu companyName={companyName} imageUrl={imageUrl} page="about" />
      <HeaderBanner />
      <AboutBody />
      <MissionVission />
      <FounderWords />
      <Facts />

      <Footer />
    </>
  );
};

export default AboutUs;
