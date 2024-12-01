import React from 'react'
import MainMenu from '../header/MainMenu'

const Services = () => {
    const HeaderBanner = () => {
        return(
            <>
                <section class="breadcrumbs-area parallex">
                    <div class="container">
                        <div class="row">
                            <div class="page-title">
                                <div class="col-sm-12 col-md-6 page-heading text-left">
                                    <h3>Our expertise </h3>
                                    <h2>Services Detail</h2>
                                </div>
                                <div class="col-sm-12 col-md-6 text-right">
                                    <ul class="breadcrumbs">
                                        <li><a href="#">home</a></li>
                                        <li><a href="#">pages</a></li>
                                        <li><a href="#">services</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };
    
    const ServiceDetails = () => {
        const ServiceSideMenu = () => {
            return(
                <>
                    <div class="col-md-3 col-md-pull-9 col-sm-12 col-xs-12" id="side-bar">
                        <div class="theiaStickySidebar">
                            <div class="side-bar-services">
                                <ul class="side-bar-list">
                                    <li><a href="/">Truck Services</a></li>
                                    <li><a href="/">Tracking</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            );
        };
        return(
            <>
                <section class="section-padding-70 services-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-sm-12 col-md-push-3 col-xs-12">
                                <div id="post-slider" class="owl-carousel owl-theme margin-bottom-30">
                                    <div class="item">
                                        <a class="tt-lightbox" href="images/services/service-detail-2.jpg"><img class="img-responsive" src="images/services/service-detail-2.jpg" alt="" /></a>
                                    </div>
                                    <div class="item">
                                        <a class="tt-lightbox" href="images/services/service-detail-1.jpg"><img class="img-responsive" src="images/services/service-detail-1.jpg" alt="" /></a>
                                    </div>
                                    <div class="item">
                                        <a class="tt-lightbox" href="images/services/service-detail-3.jpg"><img class="img-responsive" src="images/services/service-detail-3.jpg" alt="" /></a>
                                    </div>
                                    <div class="item">
                                        <a class="tt-lightbox" href="images/services/service-detail-4.jpg"><img class="img-responsive" src="images/services/service-detail-4.jpg" alt="" /></a>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo scelerisque mattis iaculis. Maecenas vestibulum faucibus enim scelerisque egestas. Praesent facilisis, tortor vel vehicula imperdiet, felis massa ultrices metus, sed consectetur massa ex vitae sem. Integer eu sodales augue. Suspendisse eget placerat lorem. Phasellus ac hendrerit leo. Morbi quis iaculis eros. Sed tincidunt augue ante, sit amet vehicula odio aliquam quis. Donec at malesuada nisl. Pellentesque eros lorem, aliquet id hendrerit id, hendrerit ac odio. In dui mauris, auctor vel vestibulum vitae, tincidunt id mi. </p>
                                <ul class="margin-top-30 margin-bottom-30 clearfix">
                                    <li class="col-sm-6">
                                        <a class="tt-lightbox" href="images/about-company-1.png"><img alt="" src="images/about-company-1.png" class="img-responsive" /> </a>
                                    </li>
                                    <li class="col-sm-6">
                                        <a class="tt-lightbox" href="images/about-company-2.png"><img alt="" src="images/about-company-2.png" class="img-responsive" /> </a>
                                    </li>
                                </ul>
                                <p>Curabitur dictum, sapien eu mattis pretium, ligula lorem sollicitudin mi, in gravida augue magna eu metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis a ultrices tortor. Sed rutrum arcu mi, nec aliquet magna venenatis non. Nullam lectus neque, semper nec accumsan quis, ullamcorper eget risus. Nullam tristique mi nec dui bibendum egestas. Integer libero diam, dictum id faucibus id, lacinia eget lorem. Ut condimentum, lorem at eleifend pharetra, urna turpis ultrices nunc, sit amet suscipit nisl metus sit amet elit. Nam tristique mollis molestie. Maecenas bibendum rhoncus nisi, sit amet blandit tortor placerat nec. Sed nec aliquam tortor, ut vehicula eros. Vestibulum id ligula vel nunc mattis pharetra in non lectus. Etiam quis blandit ante. Donec non hendrerit justo, rhoncus iaculis sem. In varius finibus eros quis dictum tortor eu metus.</p>
                            </div>
                            <ServiceSideMenu />
                        </div>
                    </div>
                </section>
            </>
        );
    };


    
    return (
        <>
            <MainMenu page="services"/>
            <HeaderBanner />
            <ServiceDetails />

        
        </>
  )
}

export default Services
