import React, { useEffect, useRef } from 'react';
import WOW from 'wowjs';
import { TextField, Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import faq_bg from '../images/faq-bg.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import whatsappwhite from '../images/whatsapp-w.png';
import general from '../images/general.svg';
import uk_02 from '../images/uk-02.png';
import uk_03 from '../images/uk-03.png';
import uk_04 from '../images/uk-04.png';
import uk_05 from '../images/uk-05.png';
import search_icon from '../images/search-icon.png';
import './style.css';
import '../css/verticals.min.css';
import { useDispatch, useSelector } from "react-redux";
import { getfaqdata, getfaqcategorydata, getfaqlistdata, getheaderandfooterdata } from '../Actions/Pics';
import SvgIcon from '@mui/material/SvgIcon';
import CookieConsent, { Cookies } from "react-cookie-consent";

const Faq = () => {

    const [open, setOpen] = React.useState(false);
    const [contactopen, setContactOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenContact = () => setContactOpen(true);
    const handleCloseContact = () => setContactOpen(false);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = React.useState(false);
    let [searchInput, setSearchInput] = React.useState('');
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = React.useState(true);
    const [selectedItem, setSelectedItem] = React.useState();
    const [searchButtonLoading, setSearchButtonLoading] = React.useState(false);


    const dispatch = useDispatch();
    const faqdata = useSelector((state) => state?.Pics?.faqdata?.data);
    const faqcategorydata = useSelector((state) => state?.Pics?.faqcategorydata?.data);
    const faqlistdata = useSelector((state) => state?.Pics?.faqlistdata?.data);
    const headandfooterdata = useSelector((state) => state?.Pics?.headandfooterdata?.data);
    const [selectedFAQItem, setSelectedFAQItem] = React.useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        dispatch(getheaderandfooterdata());
        dispatch(getfaqdata());
        dispatch(getfaqcategorydata());
        dispatch(getfaqlistdata(selectedFAQItem, searchInput));
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    useEffect(() => {
        setSelectedFAQItem(faqcategorydata?.[0]?.id);
    }, [faqcategorydata]);

    const accordionHandleClick = (id) => {
        setSelectedItem(id);
    }

    const clickFAQItem = (v) => {
        setSelectedFAQItem(v);
        dispatch(getfaqlistdata(v, searchInput));
    }

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    const searchClick = () => {
        if (searchInput) {
            setSearchButtonLoading(true);
            dispatch(getfaqlistdata(selectedFAQItem, searchInput));
            setTimeout(() => {
                setSearchButtonLoading(false);
            }, 2000);
        }
    }

    new WOW.WOW({
        live: false
    }).init();

    return (
        <>
            <div>
                {faqdata && <CookieConsent
                    // acceptOnScroll={true}
                    // acceptOnScrollPercentage={50}
                    // onAccept={(byScroll) => {
                    //     alert(`consent given. \n\n By scrolling? ${byScroll}`);
                    // }}
                    // flipButtons 
                    // overlay
                    buttonText="Accept All"
                    declineButtonText="Decline"
                    location="bottom"
                    cookieName="myAwesomeCookieName3"
                    enableDeclineButton
                    expires={999}
                    style={{ display: 'grid', width: '50%', left: '50%' }}
                    buttonStyle={{ float: 'right' }}
                    declineButtonStyle={{ float: 'right' }}
                >
                    <span>GENERAL USE </span>
                    <p>
                        We use cookies, tracking pixels and related technologies on our website.
                        Cookies are small data logs that are served by our platform and stored on your device.
                        Our site uses cookies for a variety of purposes including to operate and personalise the website.
                        We also use cookies to provide us with aggregate data about site traffic and site interaction.
                    </p>
                    <span>THIRD PARTY</span>
                    <p>
                        Our website employs the use of various third-party services. Through the use of our website,
                        these services may place anonymous cookies on the Visitor's browser and may send their own cookies to the Visitor's cookie file.
                        Some of these services include but are not limited to: Google Analytics, Google Ads, Hubspot, analytics companies and service providers.
                        We may contract with third parties to assist us in gathering data, however,
                        they are not permitted to use information collected except to help Path/PathUK conduct and improve its business.
                    </p>
                </CookieConsent>
                }
                {loading === false ?
                    <div className='page-loader'>
                        <span className="loader"></span>
                    </div> :
                    <div>
                        <title>PICS Consultants</title>
                        <a href="#main" className="btn skip-to-content">Skip to Content</a>
                        <div className="page" id="top">
                            <nav className={isScrollValueMoreThanHeaderHeight ? "main-nav stick-fixed sticky-header" : "main-nav stick-fixed"}>
                                <div className="container relative clearfix">
                                    <div className="nav-logo-wrap local-scroll">
                                        <a href="/" className="logo">
                                            <img src={Logo} alt="PICS Consultants" />
                                        </a>
                                    </div>
                                    <div className="mobile-nav" role="button" tabIndex={0}>
                                        <i className="fa fa-bars" />
                                        <span className="sr-only">Menu</span>
                                    </div>
                                    <div className="inner-nav desktop-nav">
                                        <ul className="clearlist">
                                            <li className="active xs-hide"><a href="/">Home</a></li>
                                            <li><a href="about">About</a></li>
                                            <li><a href="faq">FAQ</a></li>
                                            <li><a href="contact" className='btn btn-mod btn-w btn-circle btn-medium'>Get in Touch</a></li>
                                            <div class="whatsapp-icon">
                                                <a href="https://api.whatsapp.com/send?phone=919444094442" target="_blank"><img src={whatsappwhite} /></a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <main id="main">
                                <div className="home-section fullwidth-slider" id="home">
                                    <section className="home-section bg-scroll fixed-height-medium" style={{
                                        background: `url(${!faqdata?.section1?.image ? faq_bg : faqdata?.section1?.image})`,
                                    }}>
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <h1 className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                {faqdata?.section1?.title}
                                                            </h1>
                                                            <h2 className="hs-line-2 text-center">
                                                                {faqdata?.section1?.description}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <section className='small-section pb-40 pb-xs-20'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 text-center color font-alt mb-20 mb-xs-10">
                                            {faqdata?.section2?.title}
                                        </h3>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-9'>
                                                <div className='search-form'>
                                                    <div className='search-icon'>
                                                        <img src={search_icon} />
                                                    </div>
                                                    <TextField type="text"
                                                        value={searchInput}
                                                        className='form-control'
                                                        onChange={handleChange}
                                                        fullWidth
                                                        label="Ask a question..."
                                                        id="fullWidth" />
                                                    <Button className='search-btn' onClick={() => searchClick()} variant="contained">{searchButtonLoading ? 'Processing...' : 'Search'}</Button>
                                                </div>

                                                <div className='text-center mt-40'>or choose a category to quickly find the help you need</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='small-section pt-0 pb-30 pb-xs-0'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-12'>
                                                <div className='d-flex md-block faq-categories'>
                                                    <Button
                                                        onClick={() => {
                                                            handleHorizantalScroll(elementRef.current, 25, 100, -10);
                                                        }}
                                                        disabled={arrowDisable}
                                                    >
                                                        <ArrowBackIcon className='color' />
                                                    </Button>
                                                    <div className="img-container" ref={elementRef}>
                                                        <div className='d-flex md-block2'>
                                                            {
                                                                faqcategorydata?.length > 0 && faqcategorydata?.map((x, i) => (
                                                                    <div onClick={() => clickFAQItem(x?.id)} className={x?.id == selectedFAQItem ? "faq-filter active" : "faq-filter"} key={`faqcategory + ${i}`}>
                                                                        <div className='icon'>
                                                                            <span dangerouslySetInnerHTML={{ __html: x?.icon }}></span>
                                                                        </div>
                                                                        <h4>{x?.name}</h4>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                    <Button
                                                        onClick={() => {
                                                            handleHorizantalScroll(elementRef.current, 25, 100, 10);
                                                        }}
                                                    >
                                                        <ArrowForwardIcon className='color' />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='small-section pt-0 faqs'>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                {
                                                    faqlistdata?.length > 0 && faqlistdata?.map((x, i) => (
                                                        <Accordion
                                                            key={i}
                                                            id={i}
                                                            onClick={() => accordionHandleClick(i)}
                                                            expanded={selectedItem === i ? true : false}
                                                        >
                                                            <AccordionSummary
                                                                expandIcon={<ExpandCircleDownIcon />}
                                                                aria-controls="panel2-content"
                                                                id="panel2-header"
                                                            >
                                                                <Typography className='Lato faq-question'>{x?.question}</Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography className='Lato faq-answer'>
                                                                    {x?.answer}
                                                                </Typography>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </main>

                            <footer className="small-section bg-gray-lighter footer pb-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 text-center m-center mb-xs-20">
                                            <a href="#top"><img src={headandfooterdata?.logo} alt="PICS Consultants" /></a>
                                        </div>
                                        <div className="col-md-9">
                                            <div className='dblock'>
                                                <div className="footer-menu m-center mt-xs-20 mb-40 mb-xs-20">
                                                    <ul className="clearlist">
                                                        <li><a href="/">Home</a></li>
                                                        <li><a href="/about">About</a></li>
                                                        <li><a href="/faq">FAQ</a></li>
                                                        <li><a href="/contact">Contact</a></li>
                                                        <li><a href="/term-condition">Terms & conditions</a></li>
                                                        <li><a href="/policy">Privacy Policy</a></li>
                                                        <li><a href="#">Cookie Policy</a></li>
                                                    </ul>
                                                </div>

                                                <div className='footer-widget mb-3'>
                                                    <div className='title m-center'>{headandfooterdata?.address_title}</div>
                                                </div>
                                                <div className='row pt-0 pb-10 pt-xs-20 pb-xs-10'>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget '>
                                                            <h5>United Kingdom (Headquarters)</h5>
                                                            {/* {headandfooterdata?.address} */}
                                                            27 Duke St, Vision Offices,<br />Chelmsford, CM1 1HT<br /><br />
                                                            <b>Call & WhatsApp</b> +44 7510 830896
                                                            {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget'>
                                                            <h5>India</h5>
                                                            1st Floor, Elsa Plaza, No 2,<br />Rajiv Gandhi Salai, Padur, OMR<br />Chennai 603 103, India<br />
                                                            <b>Call & WhatsApp</b> +91 94440 94442
                                                            {/* {headandfooterdata?.country} */}

                                                            {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget'>
                                                            <div className="social-icons mb-10">
                                                                <ul>
                                                                    <li><a href={headandfooterdata?.facebook_link} target='_blank'><img src={facebook} /></a></li>
                                                                    <li><a href={headandfooterdata?.instagram} target='_blank'><img src={instagram} /></a></li>
                                                                    <li><a href={headandfooterdata?.whatsapp} target='_blank'><img src={whatsapp} /></a></li>
                                                                </ul>
                                                            </div>
                                                            @PICSConsultants
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='m-center mt-30'>
                                                    <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>{headandfooterdata?.email}</button>
                                                </div>
                                            </div>

                                            <div className='mblock'>
                                                <div className='footer-widget xs-order-1'>
                                                    <div className='title m-center'>{headandfooterdata?.address_title}</div>
                                                </div>

                                                <div className='row pt-0 pb-10 pt-xs-20 pb-xs-10'>
                                                    <div className='col-6 col-md-6 m-center mb-xs-20'>
                                                        <div className='footer-widget '>
                                                            <h4>UNITED KINGDOM</h4>
                                                            27 Duke St, Vision Offices,<br />Chelmsford, CM1 1HT<br /><br />
                                                            <b>Call & WhatsApp</b><br />+44 7510 830896
                                                            {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-6 m-center mb-xs-20'>
                                                        <div className='footer-widget'>
                                                            <h4>India</h4>
                                                            1st Floor, Elsa Plaza, No 2,<br />Rajiv Gandhi Salai, Padur, OMR Chennai 603 103, India<br />
                                                            <b>Call & WhatsApp</b><br />+91 94440 94442
                                                            {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row pt-0 pb-10 pt-xs-0 pb-xs-0'>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget'>
                                                            <div className="social-icons mb-10">
                                                                <ul>
                                                                    <li><a href={headandfooterdata?.facebook_link} target='_blank'><img src={facebook} /></a></li>
                                                                    <li><a href={headandfooterdata?.instagram} target='_blank'><img src={instagram} /></a></li>
                                                                    <li><a href={headandfooterdata?.whatsapp} target='_blank'><img src={whatsapp} /></a></li>
                                                                </ul>
                                                            </div>
                                                            @PICSConsultants
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='m-center'>
                                                    <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>{headandfooterdata?.email}</button>
                                                </div>

                                                <div className="footer-menu m-center mt-xs-20 mb-40 mb-xs-20 xs-order-2">
                                                    <div className='row'>
                                                        <div className='col-6 col-md-6'>
                                                            <ul className="clearlist">
                                                                <li><a href="/">Home</a></li>
                                                                <li><a href="/about">About</a></li>
                                                                <li><a href="/faq">FAQ</a></li>
                                                                <li><a href="/contact">Contact</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-6 col-md-6'>
                                                            <ul className="clearlist">
                                                                <li><a href="/term-condition">Terms & conditions</a></li>
                                                                <li><a href="/policy">Privacy Policy</a></li>
                                                                <li><a href="#">Cookie Policy</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="footer-copy pt-20 pb-0 m-center">
                                                {headandfooterdata?.copyright}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Faq;