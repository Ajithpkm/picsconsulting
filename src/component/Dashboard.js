import React from 'react';
import Logo from '../images/logo.png';
import university_01 from '../images/university-01.png';
import university_02 from '../images/university-02.png';
import university_03 from '../images/university-03.png';
import university_04 from '../images/university-04.png';
import pics_consultants from '../images/pics_consultants.jpg';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import slider_01 from '../images/home-bg.jpg';
import './style.css';
import '../css/verticals.min.css';
const Dashboard = () => {

    return (
        <div>
            <div>
                <title>PICS Consultants</title>
                <a href="#main" className="btn skip-to-content">Skip to Content</a>
                <div className="page" id="top">
                    <nav className="main-nav stick-fixed">
                        <div className="full-wrapper relative clearfix">
                            <div className="nav-logo-wrap local-scroll">
                                <a href="index" className="logo">
                                    <img src={Logo} alt="PICS Consultants" />
                                </a>
                            </div>
                            <div className="mobile-nav" role="button" tabIndex={0}>
                                <i className="fa fa-bars" />
                                <span className="sr-only">Menu</span>
                            </div>
                            <div className="inner-nav desktop-nav">
                                <ul className="clearlist">
                                    <li className="active"><a href="index">study international</a></li>
                                    <li><a href="about">About</a></li>
                                    <li><a href="careers">FAQ</a></li>
                                    <li><a href="#"><span className="btn btn-mod btn-red btn-circle btn-medium">Get in Touch</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <main id="main">
                        <div className="home-section fullwidth-slider" id="home">
                            <section className="home-section bg-scroll fixed-height-medium" style={{
                                  background: `url(${slider_01})`,
                                }}>
                                <div className="js-height-parent container-1400">
                                    <div className="home-content">
                                        <div className="home-text">
                                            <div className="row d-flex align-items-center justify-content-center">
                                                <div className="col-md-8">
                                                    <div className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10 pt-40">
                                                        PICS<br />Your pathway to STUDY in UK, USA,<br />Canada & Australia 
                                                    </div>
                                                    <div className="hs-line-2 text-center">
                                                        Includes admissions to top institutions like Oxford, Cambridg <br />and 225+ Universities across the globeasd
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <section className="small-section bg-white pt-30 pb-30">
                            <div className="container relative">
                                <div className="row d-flex justify-content-between">
                                    <div className='col-md-5'>
                                        <h2 className="banner-title mb-0 mb-xs-0">
                                            Degree Programs include
                                        </h2>
                                        <div className="banner-desc">
                                            UG, PG, Phd & Foundation,  Engineering, Management, Medicine, Law, Research & English Program
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='universities'>
                                            <ul>
                                                <li><img src={university_01} alt="" /></li>
                                                <li><img src={university_02} alt="" /></li>
                                                <li><img src={university_03} alt="" /></li>
                                                <li><img src={university_04} alt="" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='small-section'>
                            <div className='container relative'>
                                <div className='row d-flex justify-content-between'>
                                    <div className='col-md-7'>
                                        <div className='image-rounded'><img src={pics_consultants} alt="" className='img-fluid' /></div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='inner-container'>
                                            <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                PICS Consultants
                                            </div>
                                            <div className='section-text'>
                                                PICS Consultants takes a <b>Student- Centred Approach (P-I-C-S approach)</b> and our mission is to provide right guidance by having a transparent discussion with the student. We discuss with you to understand your requirement, Use our knowledge and provide you a list of university that’s well-matched and we help you to make the right decision that meet your requirement. Here is our exclusive PICS approach, 
                                            </div>

                                            <div className='pics-abbr mt-30'>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='capital font-alt'>P</div>
                                                    <div className='desc'>
                                                        <div className='desc-btn'>Prepare for the meeting</div>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='capital font-alt'>I</div>
                                                    <div className='desc'>
                                                        <div className='desc-btn'>Identify your Requirement</div>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='capital font-alt'>C</div>
                                                    <div className='desc'>
                                                        <div className='desc-btn'>Choose the University</div>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='capital font-alt'>S</div>
                                                    <div className='desc'>
                                                        <div className='desc-btn'>Submit the application</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mt-40'>
                                                <a href='javascript:;' className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <footer className="small-section bg-gray-lighter footer pb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 text-center">
                                    <a href="#top"><img src={footer_logo} alt="PICS Consultants" /></a>
                                </div>
                                <div className="col-md-9">
                                    <div className="footer-menu">
                                        <ul className="clearlist">
                                            <li><a href="#">Study International</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Terms & conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Cookie Policy</a></li>
                                        </ul>
                                    </div>

                                    <div className='row pt-40 pb-40'>
                                        <div className='col-md-4'>
                                            <div className='footer-widget'>
                                                <div className='title'>PICS - Headquarters</div>
                                                Head Quarters : 27, Duke Street, Chelmsford, England, CM1 1HT, UK
                                                <button className='map-link' onClick=''>Get Directions</button>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='footer-widget'>
                                                <div className='title'>india</div>
                                                Head Quarters : 27, Duke Street, Chelmsford, England, CM1 1HT, UK
                                                <button className='map-link' onClick=''>Get Directions</button>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='footer-widget'>
                                                <div className="social-icons mb-10">
                                                    <ul>
                                                        <li><a href="#"><img src={facebook} /></a></li>
                                                        <li><a href="#"><img src={instagram} /></a></li>
                                                        <li><a href="#"><img src={whatsapp} /></a></li>
                                                    </ul>
                                                </div>
                                                @PICSConsultants
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>contact@pics.global</button>

                                    <div className="footer-copy pt-20 pb-0">
                                        Copyright@2024 Pappa International LTD t/a PICS | REG NO: 13199591
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;