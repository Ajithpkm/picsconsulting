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
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SimpleBar from 'react-custom-scrollbars';
import './style.css';
import '../css/verticals.min.css';
import { Height } from '@material-ui/icons';
import { gethomedata, getheaderandfooterdata, getaboutusdata, getcountrydata, getuniversitydata } from '../Actions/Pics';
import { useDispatch, useSelector } from "react-redux";

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

const PrivacyPolicy = () => {
    const [showFullDescription, setFullDescription] = React.useState(false);
    const [showFullDescription2, setFullDescription2] = React.useState(false);
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

    const description = showFullDescription
        ? aboutusdata?.section1?.description1
        : aboutusdata?.section1?.description1?.slice(0, 598);
        const description2 = showFullDescription2
        ? aboutusdata?.section2?.description2
        : aboutusdata?.section2?.description2?.slice(0, 500);

    return (
        <>
            <div>
                {loading === false ?
                    <div className='page-loader'>
                        <span className="loader"></span>
                    </div> :
                    <div>
                        <title>Privacy Policy PICS Consultants</title>
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
                                            <li className="active xs-hide"><a href="/">study international</a></li>
                                            <li><a href="about">About</a></li>
                                            <li><a href="faq">FAQ</a></li>
                                            <li><a href="contact" className='btn btn-mod btn-w btn-circle btn-medium'>Get in Touch</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <main id="main">
                                <div className="home-section fullwidth-slider" id="home">
                                    <section className="home-section bg-scroll fixed-height-small" style={{
                                        background: `url(${about_bg})`,
                                    }}>
                                        <div className="js-height-parent-text container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <div className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                Privacy Policy
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>


                                <section className='small-section'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-11'>
                                                <div className='terms-text'>
                                                    <p>At PICS Consultants, accessible from https://www.pics.global/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PICS Consultants and how we use it.</p>
                                                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. Our Privacy Policy was generated with the help of GDPR Privacy Policy Generator</p>

                                                    <h4>General Data Protection Regulation (GDPR)</h4>

                                                    <p><span>We are a Data Controller of your information.</span></p>

                                                    <p><span>PAPPA INTERNATIONAL LTD legal basis for collecting and using the personal information
                                                    described in this Privacy Policy depends on the Personal Information we collect
                                                    and the specific context in which we collect the information:</span></p>

                                                    <ul>
                                                    <li><span>PAPPA INTERNATIONAL LTD needs to perform a contract with you</span></li>
                                                    <li><span>You have given PAPPA INTERNATIONAL LTD permission to do so</span></li>
                                                    <li><span>Processing your personal information is in PAPPA INTERNATIONAL LTD legitimate interests</span></li>
                                                    <li><span>PAPPA INTERNATIONAL LTD needs to comply with the law</span></li>
                                                    </ul>

                                                    <p><span>PAPPA INTERNATIONAL LTD will retain your personal information only for as long as is
                                                    necessary for the purposes set out in this Privacy Policy. We will retain and
                                                    use your information to the extent necessary to comply with our legal
                                                    obligations, resolve disputes, and enforce our policies.</span></p>

                                                    <p><span>If you are a resident of the European Economic Area (EEA), you have certain data
                                                    protection rights. If you wish to be informed what Personal Information we hold
                                                    about you and if you want it to be removed from our systems, please contact us.</span></p>

                                                    <p><span>In certain circumstances, you have the following data protection rights:</span></p>

                                                    <ul >
                                                    <li><span>The right to access, update or to delete the information we have on you.</span></li>
                                                    <li><span>The right of rectification.</span></li>
                                                    <li><span>The right to object.</span></li>
                                                    <li><span>The right of restriction.</span></li>
                                                    <li><span>The right to data portability</span></li>
                                                    <li><span>The right to withdraw consent</span></li>
                                                    </ul>

                                                    <p><b>Log Files</b></p>

                                                    <p><span>PICS Consultants follows a standard procedure of using log files. These files log
                                                    visitors when they visit websites. All hosting companies do this and a part of
                                                    hosting services' analytics. The information collected by log files include
                                                    internet protocol (IP) addresses, browser type, Internet Service Provider
                                                    (ISP), date and time stamp, referring/exit pages, and possibly the number of
                                                    clicks. These are not linked to any information that is personally
                                                    identifiable. The purpose of the information is for analyzing trends,
                                                    administering the site, tracking users' movement on the website, and gathering
                                                    demographic information.</span></p>

                                                    <p><b>Cookies and Web Beacons</b></p>

                                                    <p><span>Like any other website, PICS Consultants uses &quot;cookies&quot;. These cookies are
                                                    used to store information including visitors' preferences, and the pages on the
                                                    website that the visitor accessed or visited. The information is used to
                                                    optimize the users' experience by customizing our web page content based on
                                                    visitors' browser type and/or other information.</span></p>

                                                    <p><b>Privacy Policies</b></p>

                                                    <p><span>You may consult this list to find the Privacy Policy for each of the advertising
                                                    partners of PICS Consultants.</span></p>

                                                    <p><span>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web
                                                    Beacons that are used in their respective advertisements and links that appear
                                                    on PICS Consultants, which are sent directly to users' browser. They
                                                    automatically receive your IP address when this occurs. These technologies are
                                                    used to measure the effectiveness of their advertising campaigns and/or to
                                                    personalize the advertising content that you see on websites that you visit.</span></p>

                                                    <p><span>Note that PICS Consultants has no access to or control over these cookies that are
                                                    used by third-party advertisers.</span></p>

                                                    <p><b>Third Party Privacy Policies</b></p>

                                                    <p><span>PICS Consultants's Privacy Policy does not apply to other advertisers or websites.
                                                    Thus, we are advising you to consult the respective Privacy Policies of these
                                                    third-party ad servers for more detailed information. It may include their
                                                    practices and instructions about how to opt-out of certain options.</span></p>

                                                    <p><span>You can choose to disable cookies through your individual browser options. To know
                                                    more detailed information about cookie management with specific web browsers,
                                                    it can be found at the browsers' respective websites.</span></p>

                                                    <p><b>Children's Information</b></p>

                                                    <p><span>Another part of our priority is adding protection for children while using the
                                                    internet. We encourage parents and guardians to observe, participate in, and/or
                                                    monitor and guide their online activity.</span></p>

                                                    <p><span>PICS Consultants does not knowingly collect any Personal Identifiable Information
                                                    from children under the age of 13. If you think that your child provided this
                                                    kind of information on our website, we strongly encourage you to contact us
                                                    immediately and we will do our best efforts to promptly remove such information
                                                    from our records.</span></p>

                                                    <p><b>Online Privacy Policy Only</b></p>

                                                    <p><span>Our Privacy Policy applies only to our online activities and is valid for visitors
                                                    to our website with regards to the information that they shared and/or collect
                                                    in PICS Consultants. This policy is not applicable to any information collected
                                                    offline or via channels other than this website.</span></p>

                                                    <p><b>Consent</b></p>

                                                    <p><span>By using our website, you hereby consent to our Privacy Policy and agree to its
                                                    terms.</span></p>
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
                                            <div className="footer-menu m-center mt-xs-20 mb-40 mb-xs-20">
                                                <ul className="clearlist">
                                                    <li><a href="/">Study International</a></li>
                                                    <li><a href="/about">About</a></li>
                                                    <li><a href="/faq">FAQ</a></li>
                                                    <li><a href="/contact">Contact</a></li>
                                                    <li><a href="/term-condition">Terms & conditions</a></li>
                                                    <li><a href="/policy">Privacy Policy</a></li>
                                                    <li><a href="#">Cookie Policy</a></li>
                                                </ul>
                                            </div>
                                            <div className='footer-widget'>
                                                <div className='title m-center'>{headandfooterdata?.address_title}</div>
                                            </div>
                                            <div className='row pt-0 pb-10 pt-xs-20 pb-xs-10'>
                                                <div className='col-md-4 m-center mb-xs-20'>
                                                    <div className='footer-widget '>
                                                        {headandfooterdata?.address}
                                                        {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-4 m-center mb-xs-20'>
                                                    <div className='footer-widget'>
                                                        {headandfooterdata?.country}

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

                                            <div className='m-center'>
                                                <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>{headandfooterdata?.email}</button>
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

export default PrivacyPolicy;