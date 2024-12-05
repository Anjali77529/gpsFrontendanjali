import TopMenu from "../header/TopMenu";
import MainMenu from "../header/MainMenu";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

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
          <Link to="blog-detail.html">
            <img className="img-responsive" alt="" src={imgSrc} />
          </Link>
          <div className="date">
            <strong>{date.day}</strong>
            <span>{date.month}</span>
          </div>
        </div>
        <div className="news-detail">
          <h2>
            <Link title={title} to="blog-detail.html">
              {title}
            </Link>
          </h2>
          <p>{description}</p>
          <div className="entry-footer">
            <div className="post-meta">
              <div className="post-admin">
                <i className="icon-profile-male"></i>Posted by
                <Link to="#">Admin</Link>
              </div>
              <div className="post-comment">
                <i className="icon-chat"></i> <Link to="/">{comments}</Link>
              </div>
              <div className="post-like">
                <i className="icon-heart"></i> <Link to="/">{likes}</Link>
              </div>
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
          <Link aria-label="Previous" to="/">
            <span aria-hidden="true">&lt;</span>
          </Link>
        </li>
        {[1, 2, 3].map((page, idx) => (
          <li key={idx} className={page === 2 ? "active" : ""}>
            <Link to="#">{page}</Link>
          </li>
        ))}
        <li>
          <Link aria-label="Next" to="#">
            <span aria-hidden="true">&gt;</span>
          </Link>
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
