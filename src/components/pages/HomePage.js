import React, { useState } from "react";

import HomePageSlider from "../slider/HomePageSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../footer/Footer.js";
import { Link } from "react-router-dom";
import MainMenu from "../header/MainMenu.js";

const HomePage = () => {
  const OurProcess = () => {
    return (
      <>
        <section id="process" className="section-padding-80">
          <div className="container">
            <div className="main-heading text-center">
              <h2>OUR Process</h2>
              <p>
                Cras varius purus in tempus porttitor ut dapibus efficitur
                sagittis cras vitae lacus metus nunc vulputate facilisis nisi{" "}
                <br /> eu lobortis erat consequat ut. Aliquam et justo ante. Nam
                a cursus velit
              </p>
            </div>

            <div className="row">
              <div className="col-md-12 col-xs-12 com-sm-12 our-process process-steps text-left">
                <ul>
                  <li>
                    <span className="process-icon">
                      <i className="flaticon-man-standing-with-delivery-box"></i>
                    </span>
                    <div className="process-detail">
                      <h3>Step: 1</h3>
                      <h2>Create Your Account</h2>
                      <div className="clearboth"></div>
                    </div>
                  </li>
                  <li>
                    <span className="process-icon">
                      <i className="flaticon-commercial-delivery-symbol-of-a-list-on-clipboard-on-a-box-package"></i>
                    </span>
                    <div className="process-detail">
                      <h3>Step: 2</h3>
                      <h2>Place Your Order</h2>
                      <div className="clearboth"></div>
                    </div>
                  </li>
                  <li>
                    <span className="process-icon">
                      <i className="flaticon-delivery-worker-giving-a-box-to-a-receiver"></i>
                    </span>
                    <div className="process-detail">
                      <h3>Step: 3</h3>
                      <h2>We Collect It</h2>
                      <div className="clearboth"></div>
                    </div>
                  </li>
                  <li>
                    <span className="process-icon">
                      <i className="flaticon-logistics-delivery-truck-in-movement"></i>
                    </span>
                    <div className="process-detail">
                      <h3>Step: 4</h3>
                      <h2>Delivered</h2>
                      <div className="clearboth"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  const AppStore = () => {
    return (
      <>
        <section className="parallex our-app section-padding-100">
          <div className="container">
            <div className="row">
              <div className="section-content">
                <div className="col-md-5 col-sm-4">
                  <img
                    alt="Phone displaying app screen"
                    className="img-absolute"
                    src="images/phone.png"
                  />
                </div>
                <div className="col-md-7 col-sm-8 text-left">
                  <h3>Download Our Tracking App</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore aliqua.
                    Lorem ipsum dolor sit amet, eiusmod tempor dolore aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>

                  <ul className="list-inline">
                    <li>
                      <Link
                        to="/download/iphone"
                        className="btn btn-bordered"
                        aria-label="Download for iPhone"
                      >
                        <i className="fa fa-apple"></i> iPhone
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/download/android"
                        className="btn btn-bordered"
                        aria-label="Download for Android"
                      >
                        <i className="fa fa-android"></i> Android
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/download/windows"
                        className="btn btn-bordered"
                        aria-label="Download for Windows"
                      >
                        <i className="fa fa-windows"></i> Windows
                      </Link>
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
  const RequestForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      subject: "",
      email: "",
      location: "",
      message: "",
    });

    const countries = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "India",
      "United States",
    ]; // Add more as needed

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted: ", formData);
      // You can add an API call here to send the form data
    };

    return (
      <>
        <section className="quote" id="quote">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="choose-title">
                  <h3>More about us</h3>
                  <h2>Why People Choose Us</h2>
                  <p>
                    Ut consequat velit a metus accumsan, vel tempor nulla
                    blandit.
                  </p>
                </div>
                <div className="choose-services">
                  <ul className="choose-list">
                    <li>
                      <div className="choose-box">
                        <span className="iconbox">
                          <i className="flaticon-logistics-delivery-truck-and-clock"></i>
                        </span>
                        <div className="choose-box-content">
                          <h4>Fast Worldwide Delivery</h4>
                          <p>
                            Donec dignissim enim id urna fermentum, non
                            hendrerit sem volutpat.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="choose-box">
                        <span className="iconbox">
                          <i className="flaticon-woman-with-headset"></i>
                        </span>
                        <div className="choose-box-content">
                          <h4>Safety & Compliance</h4>
                          <p>
                            Donec dignissim enim id urna fermentum, non
                            hendrerit sem volutpat.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="quotation-box">
                  <h2>REQUEST A QUOTE</h2>
                  <div className="desc-text">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row clearfix">
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <select
                          className="form-control"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Location</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <textarea
                          className="form-control"
                          rows="7"
                          cols="20"
                          placeholder="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12 text-right">
                        <button className="custom-button light" type="submit">
                          Submit Request
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  const Testimonial = () => {
    // Slick carousel settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <section className="testimonial-bg-2 parallex section-padding text-center">
        <div className="container">
          <Slider {...settings}>
            <div className="item">
              <div className="col-sm-12 col-md-12 col-xs-12 testimonial-grid text-center">
                <img
                  src="images/admin-1.jpg"
                  className="img-responsive"
                  alt="Testimonials"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacus lectus a quam eget, fringilla suscipit sapien.
                </p>
                <div className="name">John Doe</div>
                <div className="profession">Founder, Oxford</div>
              </div>
            </div>
            <div className="item">
              <div className="col-sm-12 col-md-12 col-xs-12 testimonial-grid text-center">
                <img
                  src="images/admin-1.jpg"
                  className="img-responsive"
                  alt="Testimonials"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacus lectus a quam eget, fringilla suscipit sapien.
                </p>
                <div className="name">Jane Doe</div>
                <div className="profession">CEO, Harvard</div>
              </div>
            </div>
            <div className="item">
              <div className="col-sm-12 col-md-12 col-xs-12 testimonial-grid text-center">
                <img
                  src="images/admin-1.jpg"
                  className="img-responsive"
                  alt="Testimonials"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacus lectus a quam eget, fringilla suscipit sapien.
                </p>
                <div className="name">Sam Smith</div>
                <div className="profession">Manager, Google</div>
              </div>
            </div>
            <div className="item">
              <div className="col-sm-12 col-md-12 col-xs-12 testimonial-grid text-center">
                <img
                  src="images/admin-1.jpg"
                  className="img-responsive"
                  alt="Testimonials"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacus lectus a quam eget, fringilla suscipit sapien.
                </p>
                <div className="name">Emily Davis</div>
                <div className="profession">Director, Microsoft</div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  };
  const Clients = () => {
    return (
      <section className="section-padding-70 clients white">
        <div className="container">
          <div className="main-heading text-center">
            <h2>Our Partners</h2>
            <p>
              Cras varius purus in tempus porttitor ut dapibus efficitur
              sagittis cras vitae lacus metus nunc vulputate facilisis nisi{" "}
              <br /> eu lobortis erat consequat ut. Aliquam et justo ante. Nam a
              cursus velit.
            </p>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="clients-grid">
                <img
                  src="images/clients/client_5.png"
                  alt="Client 1"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="clients-grid">
                <img
                  src="images/clients/client_5.png"
                  alt="Client 2"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="clients-grid">
                <img
                  src="images/clients/client_5.png"
                  alt="Client 3"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="clients-grid">
                <img
                  src="images/clients/client_5.png"
                  alt="Client 4"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const TrackYourShipment = () => {
    return (
      <>
        <section id="order-tracking" className="section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-12">
                <div className="tracking-search">
                  <div className="input-group" id="adv-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Track Your Shipment"
                    />
                    <div className="input-group-btn">
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary">
                          <span
                            className="glyphicon glyphicon-search"
                            aria-hidden="true"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <MainMenu page="home" />
      <HomePageSlider />
      <TrackYourShipment />
      <OurProcess />
      <AppStore />
      <RequestForm />
      <Testimonial />
      <Clients />
      <Footer />
    </>
  );
};

export default HomePage;
