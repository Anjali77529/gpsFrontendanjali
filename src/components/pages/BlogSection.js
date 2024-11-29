import React from "react";
import TopMenu from "../header/TopMenu";
import MainMenu from "../header/MainMenu";
import Footer from "../footer/Footer";

const BlogSection = ({ companyName, imageUrl }) => {
  return (
    <>
      {" "}
      <TopMenu />
      <MainMenu companyName={companyName} imageUrl={imageUrl} page="about" />
      <section id="blog" className="custom-padding">
        <div className="container">
          {/* Row */}
          <div className="row">
            {/* Left Content Area */}
            <div className="col-sm-12 col-xs-12 col-md-12">
              <div className="news-box">
                <div className="news-thumb">
                  <a className="tt-lightbox" href="images/blog/detail-2.jpg">
                    <img
                      className="img-responsive"
                      alt=""
                      src="images/blog/detail-2.jpg"
                    />
                  </a>
                  <div className="date">
                    <strong>21</strong>
                    <span>Jun</span>
                  </div>
                </div>

                <div className="news-detail single">
                  <h2>
                    <a title="" href="blog-detail.html">
                      Top benefits of hiring our logistics service
                    </a>
                  </h2>
                  <p>
                    Phasellus nec mattis purus, vel varius lorem. Mauris enim
                    nisl, malesuada non tincidunt efficitur, malesuada in
                    tellus.
                  </p>

                  <blockquote>
                    1984 saw a severe downturn in the fish industry, which led
                    the company to diversify again into the oil industry.
                  </blockquote>

                  <p>
                    Sed nec leo quam. Proin convallis diam ac eros gravida
                    tincidunt. Quisque sollicitudin, nunc in luctus pharetra.
                  </p>

                  <ul>
                    <li>
                      Proin quis lacinia leo, vel suscipit metus. Vivamus
                      dapibus porttitor risus.
                    </li>
                    <li>
                      Quisque sit amet egestas ipsum. Aliquam eleifend volutpat
                      felis vel euismod.
                      <ol>
                        <li>
                          Nulla facilisi. Pellentesque malesuada fringilla elit.
                        </li>
                        <li>
                          Praesent rhoncus efficitur nibh, commodo interdum ex.
                        </li>
                      </ol>
                    </li>
                    <li>Sed nec leo quam. Proin convallis diam ac eros.</li>
                  </ul>

                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <a className="tt-lightbox" href="images/blog/5.jpg">
                        <img
                          alt="foto"
                          src="images/blog/5.jpg"
                          className="post-img img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <a className="tt-lightbox" href="images/blog/6.jpg">
                        <img
                          alt="foto"
                          src="images/blog/6.jpg"
                          className="post-img img-responsive"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <CommentsSection />

              {/* Post Comment Form */}
              <CommentForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const CommentsSection = () => (
  <div className="blog-section">
    <div className="custom-heading">
      <h2>Comments (20)</h2>
    </div>
    <ol className="comment-list">
      <li className="comment">
        <div className="comment-info">
          <img
            alt="author"
            src="images/blog/comment.png"
            className="pull-left"
          />
          <div className="author-desc">
            <div className="author-title">
              <strong>Arslan Tariq</strong>
              <ul className="list-inline pull-right">
                <li>
                  <a href="#">22 Feb 2016</a>
                </li>
              </ul>
            </div>
            <p>
              You wanna be where everybody knows Your name. And we know Flipper
              lives in a world full of wonder.
            </p>
          </div>
        </div>
      </li>
    </ol>
  </div>
);

const CommentForm = () => (
  <>
    {" "}
    <div className="blog-section">
      <div className="custom-heading">
        <h2>Post Your Comments</h2>
      </div>
      <form action="#" method="post" id="commentform">
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="author">
                Name<span className="required">*</span>
              </label>
              <input type="text" className="form-control" id="author" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="email">
                Email<span className="required">*</span>
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="comment">
                Comment<span className="required">*</span>
              </label>
              <textarea
                className="form-control"
                id="comment"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="col-sm-6">
            <button type="submit" className="btn btn-primary">
              Post your comment
            </button>
          </div>
        </div>
      </form>
    </div>
  </>
);

export default BlogSection;
