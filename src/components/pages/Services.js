import React from "react";
import TopMenu from "../header/TopMenu";
import MainMenu from "../header/MainMenu";
import Footer from "../footer/Footer";

const Breadcrumbs = () => (
  <section className="breadcrumbs-area parallex">
    <div className="container">
      <div className="row">
        <div className="page-title">
          <div className="col-sm-12 col-md-6 page-heading text-left">
            <h3>Our Expertise</h3>
            <h2>Services Detail</h2>
          </div>
          <div className="col-sm-12 col-md-6 text-right">
            <ul className="breadcrumbs">
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/">pages</a>
              </li>
              <li>
                <a href="/services">services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PostSlider = () => (
  <div id="post-slider" className="owl-carousel owl-theme margin-bottom-30">
    {[
      "service-detail-2.jpg",
      "service-detail-1.jpg",
      "service-detail-3.jpg",
      "service-detail-4.jpg",
    ].map((image, index) => (
      <div className="item" key={index}>
        <a className="tt-lightbox" href={`images/services/${image}`}>
          <img
            className="img-responsive"
            src={`images/services/${image}`}
            alt=""
          />
        </a>
      </div>
    ))}
  </div>
);

const ServiceImages = () => (
  <ul className="margin-top-30 margin-bottom-30 clearfix">
    {["about-company-1.png", "about-company-2.png"].map((image, index) => (
      <li className="col-sm-6" key={index}>
        <a className="tt-lightbox" href={`images/${image}`}>
          <img alt="" src={`images/${image}`} className="img-responsive" />
        </a>
      </li>
    ))}
  </ul>
);

const ContentArea = () => (
  <div className="col-md-9 col-sm-12 col-md-push-3 col-xs-12">
    <PostSlider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue
      justo scelerisque mattis iaculis...
    </p>
    <ServiceImages />
    <p>
      Curabitur dictum, sapien eu mattis pretium, ligula lorem sollicitudin mi,
      in gravida augue magna eu metus...
    </p>
  </div>
);

const Sidebar = () => (
  <div className="col-md-3 col-md-pull-9 col-sm-12 col-xs-12" id="side-bar">
    <div className="theiaStickySidebar">
      <div className="side-bar-services">
        <ul className="side-bar-list">
          {[
            "All Services",
            "transportation",
            "Logistic",
            "Delivery",
            "Packing",
            "Suppliers",
            "Clasification",
          ].map((service, index) => (
            <li key={index}>
              <a
                href="services-details.html"
                className={service === "Logistic" ? "active" : ""}
              >
                {service}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ServicesDetail = () => (
  <section className="section-padding-70 services-2">
    <div className="container">
      <div className="row">
        <ContentArea />
        <Sidebar />
      </div>
    </div>
  </section>
);

const Services = ({ companyName, imageUrl }) => (
  <>
    <TopMenu />
    <MainMenu companyName={companyName} imageUrl={imageUrl} page="about" />
    <Breadcrumbs />
    <ServicesDetail />
    <Footer />
  </>
);

export default Services;
