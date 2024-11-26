import { Link } from "react-router-dom";
const HomePageSlider = () => {
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
            poster="/video/1.jpg" // Make sure this is a correct path from the public folder
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
              Welcome to <span>Logistic Pro</span>
            </h1>
            <p>Don't wory , I am here , I provide Shipment</p>
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
