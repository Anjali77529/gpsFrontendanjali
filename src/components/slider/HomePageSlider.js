import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePageSlider = () => {
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
  }, []); // Empty dependency array ensures this runs only once when the component mounts.

  return (
    <>
      <section id="home" className="html-slider">
        <div className="overlay">
          <video
            className="text-center"
            muted
            autoPlay
            loop
            playsInline
            poster="/video/1.jpg"
            onError={(e) => {
              console.error("Error loading video:", e);
            }}
          >
            <source type="video/webm" src="/video/1.webm" />
            <source type="video/mp4" src="/video/1.mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="slider-caption">
            <h1>
              Welcome to <span>{companyDetails?.name || "Loading..."}</span>
            </h1>
            <p>Don't worry, I am here, I provide Shipment</p>
            <Link className="btn" to="/learn-more">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageSlider;
