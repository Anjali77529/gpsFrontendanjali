import TopMenu from "../header/TopMenu";
import MainMenu from "../header/MainMenu";
import Footer from "../footer/Footer";

function Breadcrumbs() {
  return (
    <section className="breadcrumbs-area parallex">
      <div className="container">
        <div className="row">
          <div className="page-title">
            <div className="col-sm-12 col-md-6 page-heading text-left">
              <h3>Our feeds </h3>
              <h2>Latest News</h2>
            </div>
            {/* <div className="col-sm-12 col-md-6 text-right">
              <ul className="breadcrumbs">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">pages</a>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

// BlogPost Component
function BlogPost({ title, imgSrc, date, description, comments, likes }) {
  return (
    <div className="col-md-6 col-sm-12 col-xs-12">
      <div className="news-box">
        <div className="news-thumb">
          <a href="blog-detail.html">
            <img className="img-responsive" alt="" src={imgSrc} />
          </a>
          <div className="date">
            <strong>{date.day}</strong>
            <span>{date.month}</span>
          </div>
        </div>
        <div className="news-detail">
          <h2>
            <a title={title} href="blog-detail.html">
              {title}
            </a>
          </h2>
          <p>{description}</p>
          <div className="entry-footer">
            <div className="post-meta">
              <div className="post-admin">
                <i className="icon-profile-male"></i>Posted by
                <a href="#">Admin</a>
              </div>
              <div className="post-comment">
                <i className="icon-chat"></i> <a href="#">{comments}</a>
              </div>
              <div className="post-like">
                <i className="icon-heart"></i> <a href="#">{likes}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sidebar Component
function Sidebar() {
  return (
    <div className="col-sm-12 col-xs-12 col-md-4">
      <div className="side-bar">
        {/* Search Widget */}
        <div className="search">
          <div className="widget">
            <form>
              <input type="text" placeholder="SEARCH BLOG" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Latest News Widget */}
        <div className="widget">
          <div className="latest-news">
            <h2>Latest News</h2>
            {[1, 2, 3, 4].map((_, idx) => (
              <div className="post" key={idx}>
                <figure className="post-thumb">
                  <img alt="" src={`images/blog/small-${idx + 1}.png`} />
                </figure>
                <h4>
                  <a href="#">
                    Differentiate Yourself And Attract More Attention
                  </a>
                </h4>
                <div className="post-info">1 hour ago</div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="widget">
          <div className="category">
            <h2>Category</h2>
            <ul>
              {[
                "Web Design",
                "Graphic Design",
                "App Development",
                "3D Design",
                "Plugin Development",
                "Expert Review",
              ].map((category, idx) => (
                <li key={idx}>
                  <a href="#">{category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="widget">
          <div className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-image">
              {[5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 11, 12].map((imgNum, idx) => (
                <a href="#" key={idx}>
                  <img alt="" src={`images/blog/small-${imgNum}.png`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Archives */}
        <div className="widget">
          <div className="archive">
            <h2>Archives</h2>
            <ul>
              {[
                "August 2016",
                "July 2016",
                "June 2016",
                "May 2016",
                "April 2014",
              ].map((month, idx) => (
                <li key={idx}>
                  <a href="#">{month}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tags Cloud */}
        <div className="widget">
          <div className="widget_tag_cloud">
            <h2>Tags cloud</h2>
            <div className="tag_cloud">
              {[
                "Hair",
                "Waxing",
                "Body",
                "Oil",
                "Facials",
                "Cutting",
                "Blowouts",
                "Curling",
                "Makeup",
              ].map((tag, idx) => (
                <a href="#." key={idx}>
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pagination Component
function Pagination() {
  return (
    <div className="text-center clearfix">
      <ul className="pagination">
        <li>
          <a aria-label="Previous" href="#">
            <span aria-hidden="true">&lt;</span>
          </a>
        </li>
        {[1, 2, 3].map((page, idx) => (
          <li key={idx} className={page === 2 ? "active" : ""}>
            <a href="#">{page}</a>
          </li>
        ))}
        <li>
          <a aria-label="Next" href="#">
            <span aria-hidden="true">&gt;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

// Main App Component
function Blog({ companyName, imageUrl }) {
  const blogPosts = [
    {
      title: "Top benefits of hiring our logistics service",
      imgSrc: "images/blog/4.jpg",
      date: { day: "21", month: "Jun" },
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo enean dolor sit amet, consectetuer.",
      comments: 217,
      likes: 130,
    },

    {
      title: "How to improve supply chain efficiency",
      imgSrc: "images/blog/5.jpg",
      date: { day: "22", month: "Jun" },
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      comments: 150,
      likes: 200,
    },
    {
      title: "Innovative trends in logistics industry",
      imgSrc: "images/blog/6.jpg",
      date: { day: "23", month: "Jun" },
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      comments: 180,
      likes: 250,
    },
    // Add other posts here
  ];

  return (
    <>
      <TopMenu />
      <MainMenu companyName={companyName} imageUrl={imageUrl} page="about" />
      <Breadcrumbs />
      <section id="blog" className="custom-padding">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, idx) => (
              <div className="col-md-4 col-sm-4 col-xs-12" key={idx}>
                <BlogPost {...post} />
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
