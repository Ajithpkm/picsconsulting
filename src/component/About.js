import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WOW from 'wowjs';
import { Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import sunil from '../images/sunil.jpg';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import about_bg from '../images/about-bg.jpg';
import andre from '../images/andre.jpg';
import unversity_bg from '../images/university-bg.jpg';
import optimization from '../images/optimization.svg';
import outsourcing from '../images/outsourcing.svg';
import outline from '../images/outline.svg';
import university_list from '../images/university-list.jpg';
import whatsappwhite from '../images/whatsapp-w.png';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SimpleBar from 'react-custom-scrollbars';
import './style.css';
import '../css/verticals.min.css';
import { Height } from '@material-ui/icons';
import { gethomedata, getheaderandfooterdata, getaboutusdata, getcountrydata, getuniversitydata } from '../Actions/Pics';
import { useDispatch, useSelector } from "react-redux";
import CookieConsent, { Cookies } from "react-cookie-consent";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Dashboard = () => {
    const [showFullDescription, setFullDescription] = React.useState(false);
    const [showFullDescription2, setFullDescription2] = React.useState(false);
    const [showFullDescription3, setFullDescription3] = React.useState(false);
    const [vertriPapaReadMore, setvertriPapaReadMore] = React.useState(false);
    const [andreReadMore, setandreReadMore] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [contactopen, setContactOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenContact = () => setContactOpen(true);
    const handleCloseContact = () => setContactOpen(false);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = React.useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const dispatch = useDispatch();
    const aboutusdata = useSelector((state) => state?.Pics?.aboutusdata?.data);
    const headandfooterdata = useSelector((state) => state?.Pics?.headandfooterdata?.data);

    useEffect(() => {
        dispatch(getaboutusdata());
        dispatch(getheaderandfooterdata());

        setTimeout(() => {
            setLoading(true);
        }, 800);

        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    new WOW.WOW({
        live: false
    }).init();

    const showFullDescriptionHandler = () => {
        setFullDescription(!showFullDescription);
    };

    const showFullDescriptionHandler2 = () => {
        setFullDescription2(!showFullDescription2);
    };

    const showFullDescriptionHandler3 = () => {
        setFullDescription3(!showFullDescription3);
    };

    const description = showFullDescription
        ? aboutusdata?.section2?.description1
        : aboutusdata?.section2?.description1?.slice(0, 598);
    const description2 = showFullDescription2
        ? aboutusdata?.section2?.description2
        : aboutusdata?.section2?.description2?.slice(0, 500);
    const description3 = showFullDescription3
        ? aboutusdata?.section2?.description3
        : aboutusdata?.section2?.description3?.slice(0, 500);

    return (
        <>
            <div>
                {aboutusdata && <CookieConsent
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
                                        background: `url(${!aboutusdata?.section1?.image ? about_bg : aboutusdata?.section1?.image})`,
                                    }}>
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <h1 className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                {aboutusdata?.section1?.title}
                                                            </h1>
                                                            <h2 className="hs-line-2 text-center">
                                                                <span dangerouslySetInnerHTML={{ __html: aboutusdata?.section1?.description }}></span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <section className='small-section pb-40'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-12'>
                                                <h3 className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                    {aboutusdata?.section2?.title}
                                                </h3>
                                                <div className='section-text'>
                                                    <span dangerouslySetInnerHTML={{ __html: aboutusdata?.section2?.description }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pt-0'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='image-rounded'><img src={aboutusdata?.section2?.image1} alt="" className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='inner-container'>
                                                    <div className='hs-line-7'> {aboutusdata?.section2?.title1}</div>
                                                    <h4 className="hs-line-8 color font-alt mb-20 mb-xs-10">
                                                        {aboutusdata?.section2?.subtitle1}
                                                    </h4>
                                                    <div className='section-text'>
                                                        <div dangerouslySetInnerHTML={{ __html: description }}></div>
                                                        <button className='readmore' onClick={showFullDescriptionHandler}>
                                                            Read {showFullDescription ? "Less" : "More"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pt-0'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>

                                            <div className='col-md-8 xs-order-2'>
                                                <div className='inner-container-right'>
                                                    <div className='hs-line-7'>{aboutusdata?.section2?.title3}</div>
                                                    <h5 className="hs-line-8 color font-alt mb-20 mb-xs-10">
                                                        {aboutusdata?.section2?.subtitle3}
                                                    </h5>
                                                    <div className='section-text'>
                                                        <div dangerouslySetInnerHTML={{ __html: description3 }}></div>
                                                        <button className='readmore' onClick={showFullDescriptionHandler3}>
                                                            Read {showFullDescription3 ? "Less" : "More"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 xs-order-1 mb-xs-20'>
                                                <div className='image-rounded'><img src={aboutusdata?.section2?.image3} alt="" className='img-fluid' /></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pt-0'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='image-rounded'><img src={aboutusdata?.section2?.image2} alt="" className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='inner-container'>
                                                    <div className='hs-line-7'>{aboutusdata?.section2?.title2}</div>
                                                    <div className="hs-line-8 color font-alt mb-20 mb-xs-10">
                                                        {aboutusdata?.section2?.subtitle2}
                                                    </div>
                                                    <div className='section-text'>
                                                        <div dangerouslySetInnerHTML={{ __html: description2 }}></div>
                                                        <button className='readmore' onClick={showFullDescriptionHandler2}>
                                                            Read {showFullDescription2 ? "Less" : "More"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-center' style={{
                                    background: `url(${university_list})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h6 className="hs-line-3 color-2 text-center font-alt mb-20 mb-xs-10">
                                                    {aboutusdata?.section3?.title}
                                                </h6>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Box className="mt-10">
                                                    <Grid sx={{ mb: 2 }} className="comp-bx" container spacing={2}>
                                                        <Grid item xs={12} sm={4}>
                                                            <div className="pics-values">
                                                                <div className='icon'><img src={aboutusdata?.section3?.box1_image} /></div>
                                                                <h4>{aboutusdata?.section3?.box1_title}</h4>
                                                                <p dangerouslySetInnerHTML={{ __html: aboutusdata?.section3?.box1_desc }}></p>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <div className="pics-values">
                                                                <div className='icon'><img src={aboutusdata?.section3?.box2_image} /></div>
                                                                <h4>{aboutusdata?.section3?.box2_title}</h4>
                                                                <p dangerouslySetInnerHTML={{ __html: aboutusdata?.section3?.box2_desc }}></p>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <div className="pics-values">
                                                                <div className='icon'><img src={aboutusdata?.section3?.box3_image} /></div>
                                                                <h4>{aboutusdata?.section3?.box3_title}</h4>
                                                                <p dangerouslySetInnerHTML={{ __html: aboutusdata?.section3?.box3_desc }}></p>
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <div className='mt-30 mb-20 text-center'>
                                                    <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                                </div>
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

export default Dashboard;