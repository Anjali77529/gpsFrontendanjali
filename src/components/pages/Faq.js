import React, { useState } from "react";
<<<<<<< HEAD
import TopMenu from "../header/TopMenu";
import MainMenu from "../header/MainMenu";

const FaqAccordion = ({ companyName, imageUrl }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to open or close the accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
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
  ];

  return (
    <>
      <TopMenu />
      <MainMenu companyName={companyName} imageUrl={imageUrl} page="about" />
      <div className="col-md-5 col-sm-12 col-xs-12">
        <div className="accordion-box style-one">
          <div className="faqs-title">
            <h3>Need help</h3>
            <h2>Frequently Asked Questions</h2>
            <p>
              Ut consequat velit a metus accumsan, vel tempor nulla blandit.
              Integer euismod magna vel mi congue suscipit.
            </p>
          </div>

          <div className="accordion">
            {faqData.map((item, index) => (
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
    </>
  );
};

export default FaqAccordion;
=======
import MainMenu from '../header/MainMenu'

const Faq = () => {
    const SearchBox = () => {
        return(
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
                                placeholder="Write Your Question"
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

    const SetOfFaq = () => {
        const [activeIndex, setActiveIndex] = useState(null);
        const toggleAccordion = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
    
        return (
          <>
            <section className="section-padding-70 gray" id="why-choose">
              <div className="container">
                <div className="row clearfix">
                  
    
                <div className="col-md-12 col-sm-12 col-xs-12">
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
    return (
        <>
            <MainMenu page="faq"/>
            <SearchBox />
            <SetOfFaq />
        </>
    )
}

export default Faq
>>>>>>> 7f7be60424a5631a0a0bf4419c171b8c69231c86
