import React from 'react';
import Logo_dtskill from '../images/logo-dtskill.png';
import Logo from '../images/logo.svg';
import Increased_profitability from '../images/increased-profitability.svg';
import Higher_accuracy from '../images/higher-accuracy.svg';
import blog_01 from '../images/blog_01.jpg';
import blog_02 from '../images/blog_02.jpg';
import blog_03 from '../images/blog_03.jpg';
import testimonial_one from '../images/testimonial-one.png';
import testimonial_two from '../images/testimonial-two.png';
import testimonial_three from '../images/testimonial-three.png';
import logo_white from '../images/logo-white.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import snapchat from '../images/snapchat.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import slider_01 from '../images/slider-01.jpg';
import newsletter_bg from '../images/newsletter-bg.jpg';
import section_bg from '../images/section-bg-03.jpg';
import './style.css';
 
const Dashboard = () => {

    return (
        <div>
            <div>
                <title>DT SKill</title>
                {/* <div className="page-loader">
                    <div className="loader"><img src={Logo_dtskill} /></div>
                </div> */}
                <a href="#main" className="btn skip-to-content">Skip to Content</a>
                <div className="page" id="top">
                    {/* Navigation panel */}
                    <nav className="main-nav stick-fixed">
                        <div className="full-wrapper relative clearfix">
                            {/* Logo ( * your text or image into link tag *) */}
                            <div className="nav-logo-wrap local-scroll">
                                <a href="index" className="logo">
                                    <img src={Logo} alt="DT SKill" />
                                </a>
                            </div>
                            <div className="mobile-nav" role="button" tabIndex={0}>
                                <i className="fa fa-bars" />
                                <span className="sr-only">Menu</span>
                            </div>
                            {/* Main Menu */}
                            <div className="inner-nav desktop-nav">
                                <ul className="clearlist">
                                    <li className="active"><a href="index">Home</a></li>
                                    <li>
                                        <a href="#" className="mn-has-sub">Services <i className="las la-angle-down" /></a>
                                        <ul className="mn-sub to-right">
                                            <li><a href="robotic-process-automation">Robotic Process Automation (RPA)</a></li>
                                            <li><a href="work-flow-automation">Work Flow Automation (WFA)</a></li>
                                            <li><a href="orchestration">Orchestration</a></li>
                                            <li><a href="digital-twins">Digital Twins</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about">About</a></li>
                                    <li><a href="careers">Careers</a></li>
                                    <li><a href="contact">Contact</a></li>
                                    <li><a href="#"><span className="btn btn-mod btn-red btn-circle btn-medium">Request Consultation</span></a></li>
                                </ul>
                            </div>
                            {/* End Main Menu */}
                        </div>
                    </nav>
                    {/* End Navigation panel */}
                    <main id="main">
                        {/* Fullwidth Slider */}
                        <div className="home-section fullwidth-slider mt-60" id="home">
                            {/* Slide Item */}
                            <section className="home-section bg-scroll fixed-height-small" data-background={slider_01}>
                                <div className="js-height-parent container-1400">
                                    {/* Hero Content */}
                                    <div className="home-content">
                                        <div className="home-text">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-md-6">
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10 pt-120">
                                                        Driving Digital Transformations<br />
                                                        <span>Automation, Digital Twins &amp; Orchestration</span><br />
                                                        for Streamlined Operations<br />
                                                    </div>
                                                    <div className="local-scroll text-center">
                                                        <a href="javascript:;" className="btn btn-mod btn-red btn-round btn-medium shadow">Request consultation</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Hero Content */}
                                </div>
                            </section>
                            {/* End Slide Item */}
                        </div>
                        {/* End Fullwidth Slider */}
                        {/* Why DTskill Digital Transformations Skill Team Section */}
                        <section className="small-section bg-scroll bg-pos-top-right" data-background={section_bg}>
                            <div className="container-1400 relative">
                                <div className="row d-flex justify-content-center text-center">
                                    <div className="col-md-9">
                                        <h2 className="section-title font-alt align-center mb-30 mb-sm-40 wow fadeInDown" data-wow-delay="0.1s">
                                            Why DTskill Team
                                        </h2>
                                        <div className="section-text">
                                            <p>Our Digital Transformation services and solutions would be the stepping stone to the continual transformation with no changes in the existing systems, tools, process &amp; environment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6">
                                        <div className="digitalFuture">
                                            <div className="digitalFuture-icon">
                                                <div className="box"><img src={Increased_profitability} /></div>
                                            </div>
                                            <div className="digitalFuture-content">
                                                <div className="title font-alt">Increased profitability</div>
                                                <div className="desc">Achieve more efficiency with fewer resources. Our orchestrated automation services will help you streamline your business processes by focusing on automating predominant tasks to reduce operational expenses.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="digitalFuture">
                                            <div className="digitalFuture-icon">
                                                <div className="box dark"><img src={Higher_accuracy} /></div>
                                            </div>
                                            <div className="digitalFuture-content">
                                                <div className="title font-alt">Higher accuracy and quality</div>
                                                <div className="desc">Automated systems eliminate the error of mundane and monotonous human tasks resulting in higher accuracy and improved customer satisfaction.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End Why DTskill Digital Transformations Skill Team Section */}
                        {/*News & Blog Section*/}
                        <section className="small-section bg-gray-lighter pt-40 pb-40">
                            <div className="container-1400 relative">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6">
                                        <h2 className="section-title font-alt align-center mb-40 mb-sm-40 wow fadeInDown" data-wow-delay="0.1s">
                                            News &amp; Updates
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    {/*Repeat Post*/}
                                    <div className="col-md-3">
                                        <div className="blogPost">
                                            <a href="javascript:;">
                                                <div className="post-prev-img">
                                                    <img src={blog_01} alt="" />
                                                </div>
                                                <div className="post-category">
                                                    Technology
                                                </div>
                                                <div className="post-prev-title mb-20 font-alt">
                                                    Is Machine Learning Right Going On Good Way
                                                </div>
                                                <div className="alt-service-item">
                                                    <div className="alt-service-icon">
                                                        <img src={testimonial_one} />
                                                    </div>
                                                    <h3 className="alt-services-title font-alt">By: David Joe</h3>
                                                    3 January 2023
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/*End Repeat Post*/}
                                    {/*Repeat Post*/}
                                    <div className="col-md-3">
                                        <div className="blogPost">
                                            <a href="javascript:;">
                                                <div className="post-prev-img">
                                                    <img src={blog_02} alt="" />
                                                </div>
                                                <div className="post-category">
                                                    Robot
                                                </div>
                                                <div className="post-prev-title mb-20 font-alt">
                                                    The Current State Of Artificial Intelligence Infographic
                                                </div>
                                                <div className="alt-service-item">
                                                    <div className="alt-service-icon">
                                                        <img src={testimonial_two} />
                                                    </div>
                                                    <h3 className="alt-services-title font-alt">By: David Joe</h3>
                                                    3 January 2023
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/*End Repeat Post*/}
                                    {/*Repeat Post*/}
                                    <div className="col-md-3">
                                        <div className="blogPost">
                                            <a href="javascript:;">
                                                <div className="post-prev-img">
                                                    <img src={blog_03} alt="" />
                                                </div>
                                                <div className="post-category">
                                                    Machine
                                                </div>
                                                <div className="post-prev-title mb-20 font-alt">
                                                    Our Company As A Global Leader In Big Data
                                                </div>
                                                <div className="alt-service-item">
                                                    <div className="alt-service-icon">
                                                        <img src={testimonial_three} />
                                                    </div>
                                                    <h3 className="alt-services-title font-alt">By: David Joe</h3>
                                                    3 January 2023
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/*End Repeat Post*/}
                                    {/*Repeat Post*/}
                                    <div className="col-md-3">
                                        <div className="blogPost">
                                            <a href="javascript:;">
                                                <div className="post-prev-img">
                                                    <img src={blog_01} alt="" />
                                                </div>
                                                <div className="post-category">
                                                    Technology
                                                </div>
                                                <div className="post-prev-title mb-20 font-alt">
                                                    Is Machine Learning Right Going On Good Way
                                                </div>
                                                <div className="alt-service-item">
                                                    <div className="alt-service-icon">
                                                        <img src={testimonial_one} />
                                                    </div>
                                                    <h3 className="alt-services-title font-alt">By: David Joe</h3>
                                                    3 January 2023
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/*End Repeat Post*/}
                                </div>
                            </div>
                        </section>
                        {/*End News & Blog Section*/}
                        {/*Subscribe For Newsletter*/}
                        <section className="small-section bg-scroll bg-pos-top" data-background={newsletter_bg}>
                            <div className="container-1400 relative">
                                <form className="form align-center">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-6">
                                            <h3 className="hs-line-2 font-alt mb-10">Subscribe For Newsletter</h3>
                                            <h3 className="hs-line-3 font-alt mb-40">Subscribe To Our Newsletter &amp; Stay Updated</h3>
                                            <div className="inputContainer">
                                                <input placeholder="Enter Your Email" className="newsletter-field form-control input-md round mb-xs-10" type="email" pattern=".{5,100}" required aria-required="true" id="newsletter_field" name="EMAIL" />
                                                <button type="submit" aria-controls="subscribe-result" className="btn btn-mod btn-red btn-circle btn-medium mb-xs-10">
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                        {/*End Subscribe For Newsletter*/}
                    </main>
                    {/* Footer */}
                    <footer className="small-section bg-gray footer pb-60">
                        <div className="container-1400">
                            <div className="row d-flex align-items-center pb-40">
                                <div className="col-md-4">
                                    <a href="#top"><img src={logo_white} width={180} alt="DT SKill" /></a>
                                </div>
                                <div className="col-md-8">
                                    <div className="footer-menu d-flex justify-content-end">
                                        <ul className="clearlist">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Resources</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Footer Text */}
                            <div className="footer-text pt-40">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="footer-copy">
                                        © 2023 DT Skill. All Rights Reserved.
                                    </div>
                                    {/* Social Links */}
                                    <div className="social-icons">
                                        <ul>
                                            <li><a href="javascript:;"><img src={facebook} /></a></li>
                                            <li><a href="javascript:;"><img src={twitter} /></a></li>
                                            <li><a href="javascript:;"><img src={snapchat} /></a></li>
                                            <li><a href="javascript:;"><img src={instagram} /></a></li>
                                            <li><a href="javascript:;"><img src={linkedin} /></a></li>
                                        </ul>
                                    </div>
                                    {/* End Social Links */}
                                </div>
                            </div>
                            {/* End Footer Text */}
                        </div>
                        {/* Top Link */}
                        <div className="local-scroll">
                            <a href="#top" className="link-to-top"><i className="fa fa-caret-up" /></a>
                        </div>
                        {/* End Top Link */}
                    </footer>
                    {/* End Footer */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;