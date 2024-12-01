import React from 'react'
import MainMenu from '../header/MainMenu'
import { Link } from 'react-router-dom';

const Blog = () => {


    const HeaderBanner = () => {
        return(
            <>
                <section class="breadcrumbs-area parallex">
                    <div class="container">
                        <div class="row">
                            <div class="page-title">
                                <div class="col-sm-12 col-md-6 page-heading text-left">
                                    <h3>Our feeds </h3>
                                    <h2>Latest News</h2>
                                </div>
                                <div class="col-sm-12 col-md-6 text-right">
                                    <ul class="breadcrumbs">
                                        <li><a href="#">home</a></li>
                                        <li><a href="#">pages</a></li>
                                        <li><a href="#">blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    const BlogContent = () => {
        return(
            <>
                <section id="blog" class="custom-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-xs-12 col-md-12">
                                <div class="col-md-4 col-sm-12 col-xs-12">
                                    <div class="news-box">
                                        <div class="news-thumb">
                                            <Link to="/blogdetails"><img alt="" class="img-responsive" src="images/blog/1.jpg" /></Link>
                                            <div class="date"> <strong>21</strong>
                                            <span>Jun</span> </div>
                                        </div>
                                        <div class="news-detail">
                                            <h2><a title="" href="blog-detail.html">top benefits of hiring our logistics service</a></h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo enean dolor sit amet, consectetuer.</p>
                                            <div class="entry-footer">
                                                <div class="post-meta">
                                                    <div class="post-admin"> <i class="icon-profile-male"></i>Posted by<a href="#">Admin</a> </div>
                                                    <div class="post-comment"> <i class="icon-chat"></i> <a href="#">217</a> </div>
                                                    <div class="post-like"> <i class="icon-heart"></i> <a href="#">130</a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12 col-xs-12">
                                    <div class="news-box">
                                        <div class="news-thumb">
                                            <a href="blog-detail.html"><img alt="" class="img-responsive" src="images/blog/2.jpg" /></a>
                                            <div class="date"> <strong>21</strong>
                                    <span>Jun</span> </div>
                                        </div>
                                        <div class="news-detail">
                                            <h2><a title="" href="blog-detail.html">top benefits of hiring our logistics service</a></h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo enean dolor sit amet, consectetuer.</p>
                                            <div class="entry-footer">
                                                <div class="post-meta">
                                                    <div class="post-admin"> <i class="icon-profile-male"></i>Posted by<a href="#">Admin</a> </div>
                                                    <div class="post-comment"> <i class="icon-chat"></i> <a href="#">217</a> </div>
                                                    <div class="post-like"> <i class="icon-heart"></i> <a href="#">130</a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-4 col-sm-12 col-xs-12">
                                    <div class="news-box">
                                        <div class="news-thumb">
                                            <a href="blog-detail.html"><img class="img-responsive" alt="" src="images/blog/3.jpg" /></a>
                                            <div class="date"> <strong>21</strong>
                                            <span>Jun</span> </div>
                                        </div>
                                        <div class="news-detail">
                                            <h2><a title="" href="blog-detail.html">top benefits of hiring our logistics service</a></h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo enean dolor sit amet, consectetuer.</p>
                                            <div class="entry-footer">
                                                <div class="post-meta">
                                                    <div class="post-admin"> <i class="icon-profile-male"></i>Posted by<a href="#">Admin</a> </div>
                                                    <div class="post-comment"> <i class="icon-chat"></i> <a href="#">217</a> </div>
                                                    <div class="post-like"> <i class="icon-heart"></i> <a href="#">130</a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="text-center clearfix">
                                    <ul class="pagination ">
                                        <li>
                                            <a aria-label="Previous" href="#">
                                                <span aria-hidden="true">&lt;</span>
                                            </a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        <li class="active"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li>
                                            <a aria-label="Next" href="#">
                                                <span aria-hidden="true">&gt;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
  return (
    <>
        <MainMenu page="blog" />
        <HeaderBanner />
        <BlogContent />
    </>
  )
}

export default Blog
