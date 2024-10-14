import React, { useEffect, useRef } from 'react';
import Tooltip from "./Tooltip";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Grid, Typography } from '@mui/material';
import { NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
import { NavDropdownMenu } from "react-bootstrap-submenu";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Logo from '../images/logo.png';
import university_01 from '../images/usa-flag.jpg';
import university_02 from '../images/uk-flag.jpg';
import university_03 from '../images/australia-flag.jpg';
import university_04 from '../images/canada-flag.jpg';
import university_05 from '../images/ireland-flag.jpg';
import university_06 from '../images/newzealand-flag.jpg';
import FooterLogo from '../images/footer-logo.png';
import mail from '../images/mail.png';
import call from '../images/call.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';
import whatsappwhite from '../images/whatsapp-w.png';
import statement from '../images/statement.png';
import letter from '../images/letter.png';
import student from '../images/student.png';
import visaguidance from '../images/visa-guidance.png';
import general from '../images/general.png';
import accomodations from '../images/accomodations.png';
import flighttickets from '../images/flight-tickets.png';
import englishtest from '../images/englishtest.png';
import educationloan from '../images/education-loan.png';
import preloader from '../images/preloader.gif';
import application_service_bg from '../images/application-service-bg.jpg';
import home_bg from '../images/home-bg.jpg';
import dedicatedconsultant from '../images/dedicated-consultant.png';
import nofee from '../images/no-fee.png';
import offer from '../images/offer.png';
import home_faq from '../images/home-faq.jpg';
import sop from '../images/sop.jpg';
import lor from '../images/lor.jpg';
import englishtest2 from '../images/english-test.jpg';
import loan from '../images/loan.jpg';
import flight from '../images/flight.jpg';
import arrow_right from '../images/arrow-right.png';
import study_abroad_usa from '../images/study-abroad-usa.jpg';
import study_abroad_uk from '../images/study-abroad-uk.jpg';
import study_abroad_australia from '../images/study-abroad-australia.jpg';
import study_abroad_canada from '../images/study-abroad-canada.jpg';
import study_abroad_ireland from '../images/study-abroad-ireland.jpg';
import study_abroad_newzealand from '../images/study-abroad-newzealand.jpg';
import university_list from '../images/university-list.jpg';
import free_consultation from '../images/free_consultation.jpg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SimpleBar from 'react-custom-scrollbars';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './style.css';
import '../css/verticals.min.css';
import '../css/style-responsive.css';
import { BorderAllRounded, Height } from '@material-ui/icons';
import { gethomedata, getheaderandfooterdata, getcountrydata, getuniversitydata } from '../Actions/Pics';
import { useDispatch, useSelector } from "react-redux";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { BorderStyleRounded } from '@mui/icons-material';

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

const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 680,
    bgcolor: 'background.paper',
    boxShadow: 12,
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const [open4, setOpen4] = React.useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);

    const [open5, setOpen5] = React.useState(false);
    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);

    const [value, setValue] = React.useState(0);
    const [ukModelopen, setukModelopen] = React.useState(false);
    const [usaModelopen, setusaModelopen] = React.useState(false);
    const [contactopen, setContactOpen] = React.useState(false);
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [selectedUniversity, setSelectedUniversity] = React.useState(false);

    const handleUkOpen = (val) => {
        setukModelopen(true);
        setSelectedUniversity(val);
        dispatch(getcountrydata(val));
    }

    const handleUkClose = () => setukModelopen(false);
    const handleUsaOpen = () => setusaModelopen(true);
    const handleUsaClose = () => setusaModelopen(false);
    const handleOpenContact = () => setContactOpen(true);
    const handleCloseContact = () => setContactOpen(false);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = React.useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const headandfooterdata = useSelector((state) => state?.Pics?.headandfooterdata?.data);
    const universitydata = useSelector((state) => state?.Pics?.universitydata?.data);
    const homedata = useSelector((state) => state?.Pics?.homedata?.data);
    const countrydata = useSelector((state) => state?.Pics?.countrydata?.data);

    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        dispatch(gethomedata());
        dispatch(getheaderandfooterdata());
        dispatch(getuniversitydata());
        dispatch(getcountrydata());
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
        setTimeout(() => {
            setusaModelopen(true);
        }, 7000);
    }, []);

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

    return (
        <>
            {homedata && <CookieConsent
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
                expires={99}
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
                </p>
            </CookieConsent>
            }
            <div>
                {loading === false ?
                    <div className='page-loader'>
                        <span className="loader">
                            <img src={preloader} alt="PICS Consultants" />
                        </span>
                    </div> :
                    <div>
                        <Modal
                            open={ukModelopen}
                            onClose={handleUkClose}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='university-list-bx'>
                                <Typography className='modal-bx-header' id="modal-modal-title" variant="h6" component="h2">
                                    <div onClick={handleUkClose} className='closemodal'><CloseIcon /></div>
                                    <div className='row d-flex align-items-center'>
                                        <div className='col-2 col-md-2'>
                                            <img src={selectedUniversity == 1 ? university_01 : selectedUniversity == 2 ? university_02 :
                                                selectedUniversity == 3 ? university_03 : university_04} alt="" />
                                        </div>
                                        <div className='col-6 col-md-6'>
                                            <div className='country-name font-alt'>
                                                {selectedUniversity == 1 ? 'UK' : selectedUniversity == 2 ? 'USA' :
                                                    selectedUniversity == 3 ? 'CANADA' : 'AUSTRALIA'}<br />University list</div>
                                        </div>
                                        <div className='col-4 col-md-4'>
                                            <div className='text-center'><a href="contact" className='btn btn-mod btn-w btn-circle btn-medium'>Enquire now</a></div>
                                        </div>
                                    </div>
                                </Typography>
                                <SimpleBar id="RSC-Example" style={{ height: 450 }}>
                                    <Typography className='modal-bx-body' id="modal-modal-description" sx={{ mt: 2 }}>
                                        {
                                            countrydata?.length > 0 && countrydata?.map((x, i) => (
                                                <>
                                                    <div className='font-alt hs-line-5'>{x?.name}</div>
                                                    <div className='row'>
                                                        <div className='col-md-8'>
                                                            <ul>
                                                                {x?.list?.length > 0 && x?.list?.map((v) => (
                                                                    <li>{v?.name}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </Typography>
                                </SimpleBar>
                            </Box>
                        </Modal>

                        {/* <Modal
                            open={usaModelopen}
                            onClose={handleUsaClose}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='university-list-bx nobg-shadow'>
                                <Typography className='modal-bx-body p-0' id="modal-modal-description" sx={{ mt: 2 }}>
                                    <div onClick={handleUsaClose} className='closemodal'><CloseIcon /></div>
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/PpmD5vUlpCQ?si=u6WHnsqUHv1lnJN_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </Typography>
                            </Box>
                        </Modal> */}

                        <Modal
                            open={contactopen}
                            onClose={handleCloseContact}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='contactmodal-bx'>
                                <Typography className='modal-bx-header' id="modal-modal-title" variant="h6" component="h2">
                                    <div className='country-name font-alt'>Get in touch</div>
                                </Typography>
                                <Typography className='modal-bx-body' id="modal-modal-description" sx={{ mt: 2 }}>
                                    <div className='content'> Send us a email to <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>contact@pics.global</button> and one of our consultants will contact you.</div>
                                </Typography>
                            </Box>
                        </Modal>
                        <title>Study Abroad Consultants | Overseas Education Consultants | PICS Consultants</title>
                        <a href="#main" className="btn skip-to-content">Skip to Content</a>
                        <div className="page" id="top">
                            <Navbar expand="lg" className="main-nav">
                                <Container>
                                    <Navbar.Brand>
                                        <a href="/" className="logo">
                                            <img src={Logo} alt="PICS Consultants" />
                                        </a>
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="menu-right">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <NavDropdownMenu
                                            title="Study Abroad"
                                            id="collasible-nav-dropdown"
                                            alignRight
                                            >
                                            <NavDropdown.Item href="study-abroad-usa">Study in USA</NavDropdown.Item>
                                            <NavDropdown.Item href="study-abroad-uk">Study in UK</NavDropdown.Item>
                                            <NavDropdown.Item href="study-abroad-aus">Study in Australia</NavDropdown.Item>
                                            <NavDropdown.Item href="study-abroad-canada">Study in Canada</NavDropdown.Item>
                                            <NavDropdown.Item href="study-abroad-ireland">Study in Ireland</NavDropdown.Item>
                                            <NavDropdown.Item href="study-abroad-new-zealand">Study in New Zealand</NavDropdown.Item>
                                        </NavDropdownMenu>
                                        
                                        <Nav.Link href="about">About</Nav.Link>
                                        <Nav.Link href="faq">FAQ</Nav.Link>
                                        <Nav.Link href="contact"><span className='btn btn-mod btn-w btn-circle btn-medium'>Enquire now</span></Nav.Link>
                                        <Nav.Link>
                                            <div class="whatsapp-icon">
                                                <a href="https://api.whatsapp.com/send?phone=919444094442" target="_blank"><img src={whatsappwhite} /></a>
                                            </div>
                                        </Nav.Link>
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <main id="main">
                                <div className="home-section fullwidth-slider" id="home">
                                    <section className="home-section bg-scroll fixed-height-medium"
                                        style={{ background: `url(${!homedata?.section1?.image ? home_bg : homedata?.section1?.image})` }}
                                    >
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-10">
                                                            <h1 className="hs-line-head text-center no-transp font-alt mb-0 mb-xs-10">
                                                                PICS
                                                            </h1>
                                                            <h1 className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                Your Study Abroad Consultant to Study in USA, UK,<br/> Australia, Canada, Ireland & New Zealand
                                                            </h1>
                                                            <div className="hs-line-2 text-center">
                                                                We'll help you find and get into the perfect program in your<br/> dream study destination.
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
                                        <div className="row d-flex align-items-center justify-content-between">
                                            <div className='col-md-5 mb-xs-20'>
                                                <h2 className="banner-title mb-0 mb-xs-0">
                                                Degree Programs include
                                                </h2>
                                                <div className="banner-desc">
                                                    Under Graduation & Post Graduation<br/>  
                                                    Engineering, Management, Medicine,<br/> 
                                                    Law, Arts & Science & English programs 
                                                </div>
                                            </div>
                                            <div className='col-md-7'>
                                                <div className='universities'>
                                                    <ul>
                                                        <li><img src={university_01} alt="" /></li>
                                                        <li><img src={university_02} alt="" /></li>
                                                        <li><img src={university_03} alt="" /></li>
                                                        <li><img src={university_04} alt="" /></li>
                                                        <li><img src={university_05} alt="" /></li>
                                                        <li><img src={university_06} alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pb-250 pt-xs-30 pb-xs-120'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-6 mb-xs-20'>
                                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/W08OwHAcJN4?si=SfM5EoRgHC39WqM1" title="Study Abroad Made Easy With PICS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='inner-container'>

                                                    <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                        Study Abroad Made<br/> Easy With PICS
                                                    </div>
                                                    <div className='section-text'>
                                                        PICS Consultants takes a <b>Student- Centred Approach (P-I-C-S approach)</b> and our mission is to provide right guidance by having a transparent discussion with the student. We discuss with you to understand your requirement, Use our knowledge and provide you a list of university that’s well-matched and we help you to make the right decision that meet your requirement. Here is our exclusive PICS approach, 
                                                    </div>
                                                    <div className='pics-abbr mt-30'>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>P</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>
                                                                    <div className='row'>
                                                                        <div className='col-md-4'>
                                                                            <span>Prepare</span>
                                                                        </div>
                                                                        <div className='col-md-8'>
                                                                            <div className='desc-info'>
                                                                                We'll help you get ready for your application. 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>I</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>
                                                                    <div className='row'>
                                                                        <div className='col-md-4'>
                                                                            <span>Identify</span>
                                                                        </div>
                                                                        <div className='col-md-8'>
                                                                            <div className='desc-info'>
                                                                                We’ll work with you to understand your needs and goals. 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>C</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>
                                                                    <div className='row'>
                                                                        <div className='col-md-4'>
                                                                            <span>Choose</span>
                                                                        </div>
                                                                        <div className='col-md-8'>
                                                                            <div className='desc-info'>
                                                                                Together, we'll find the universities that are the best fit for you.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>S</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>
                                                                    <div className='row'>
                                                                        <div className='col-md-4'>
                                                                            <span>Submit</span>
                                                                        </div>
                                                                        <div className='col-md-8'>
                                                                            <div className='desc-info'>
                                                                                We’ll assist you in submitting your application to secure your spot.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='m-center mt-40 mb-0'>
                                                        <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pt-50 bg-scroll bg-pos-bottom pb-160 overflow' style={{
                                    background: `url(${application_service_bg})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='image-rounded pull-top'>
                                                    <img src={homedata?.section3?.image} alt='' />
                                                </div>
                                                <div className='mt-30'>
                                                    <h3 className="hs-line-3 white text-center font-alt mb-30 mb-xs-10">
                                                        3 Reasons to choose PICS
                                                    </h3>

                                                    <Box className="mt-10">
                                                        <Grid sx={{ mb: 2 }} className="comp-bx" container spacing={2}>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service">
                                                                    <div className='icon'><img src={nofee} /></div>
                                                                    <h2>Zero Processing Fee</h2>
                                                                    <p>Get a free consultation for all our students! From application profiling to application service to admissions offer, we ensure top-notch service for free of charge. Quality will never be compromised.</p>
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service">
                                                                    <div className='icon'><img src={offer} /></div>
                                                                    <h2>Guaranteed Offer</h2>
                                                                    <p>PICS has partnered with over 225 global universities for admissions. We assess student requirements and secure admissions offers from eligible partners that meet their criteria.</p>
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service">
                                                                    <div className='icon'><img src={dedicatedconsultant} /></div>
                                                                    <h2>Dedicated Consultant</h2>
                                                                    <p>Our team will assist you throughout the admissions process, ensuring to meet your needs. We prioritize your comfort and make you the heart of our operation.</p>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <div className='mt-40 mb-20 text-center'>
                                                        <a href='contact' className='btn btn-mod btn-w btn-round btn-medium'>Enquire now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-center' style={{
                                    background: `url(${free_consultation})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h4 className="hs-line-3 color text-center font-alt mb-30 mb-xs-30">
                                                    Everything You Need in One Place
                                                </h4>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-10'>
                                                <div className='row d-flex justify-content-center'>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={statement} />
                                                                <p>Statement of Purpose<br/> (SOP)</p>
                                                                <Button className='buttonlink3' onClick={handleOpen}>Know More</Button>
                                                            </div>
                                                        </div>

                                                        <Modal
                                                            open={open}
                                                            onClose={handleClose}
                                                            aria-labelledby="modal-modal-title"
                                                            aria-describedby="modal-modal-description"
                                                            >
                                                            <Box className='border-radius12' sx={style2}>
                                                                <Typography className='modal-bx' id="modal-modal-description">
                                                                <div onClick={handleClose} className='closemodal'><CloseIcon /></div>
                                                                <div className='row'>
                                                                    <div className='col-md-8'>
                                                                        <div className='hs-line-2 font-alt color text-left mb-10'>
                                                                            <b>Statement of Purpose (SOP)</b>
                                                                        </div>
                                                                        <div className='section-text'>
                                                                            An SOP, or Statement of Purpose, is crucial for scholarship applications. It helps the committee understand a candidate's background, abilities, and ambitions in relation to the program's objectives. A strong SOP can make an applicant stand out by revealing their drive, dedication, and individual viewpoint. 
                                                                        </div>
                                                                        <div className='m-center mt-20 mb-0'>
                                                                            <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4 mt-xs-20'>
                                                                        <div className='image-rounded'><img src={sop} /></div>
                                                                    </div>
                                                                </div>
                                                                </Typography>
                                                            </Box>
                                                        </Modal>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={letter} />
                                                                <p>Letter of Recommendation (LOR)</p>
                                                                <Button className='buttonlink3' onClick={handleOpen2}>Know More</Button>
                                                            </div>
                                                        </div>
                                                        <Modal
                                                            open={open2}
                                                            onClose={handleClose2}
                                                            aria-labelledby="modal-modal-title"
                                                            aria-describedby="modal-modal-description"
                                                            >
                                                            <Box className='border-radius12' sx={style2}>
                                                                <Typography className='modal-bx' id="modal-modal-description">
                                                                <div onClick={handleClose2} className='closemodal'><CloseIcon /></div>
                                                                <div className='row'>
                                                                    <div className='col-md-8'>
                                                                        <div className='hs-line-2 font-alt color text-left mb-10'>
                                                                            <b>Letter of Recommendation (LOR)</b>
                                                                        </div>
                                                                        <div className='section-text'>
                                                                            The Letter of Recommendation or LOR is a document that provides the admission officers with a comprehensive insight into your suitable candidature, for admission into the concerned University. It aims to provide a favourable picture of your academic performance, strengths, experiences, achievements, contributions, and skills.
                                                                        </div>
                                                                        <div className='m-center mt-20 mb-0'>
                                                                            <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4 mt-xs-20'>
                                                                        <div className='image-rounded'><img src={lor} /></div>
                                                                    </div>
                                                                </div>
                                                                </Typography>
                                                            </Box>
                                                        </Modal>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={englishtest} />
                                                                <p>English test</p>
                                                                <Button className='buttonlink3' onClick={handleOpen3}>Know More</Button>
                                                            </div>
                                                        </div>
                                                        <Modal
                                                            open={open3}
                                                            onClose={handleClose3}
                                                            aria-labelledby="modal-modal-title"
                                                            aria-describedby="modal-modal-description"
                                                            >
                                                            <Box className='border-radius12' sx={style2}>
                                                                <Typography className='modal-bx' id="modal-modal-description">
                                                                <div onClick={handleClose3} className='closemodal'><CloseIcon /></div>
                                                                <div className='row'>
                                                                    <div className='col-md-8'>
                                                                        <div className='hs-line-2 font-alt color text-left mb-10'>
                                                                            <b>English Test</b>
                                                                        </div>
                                                                        <div className='section-text'>
                                                                            <p className='mb-10'>The world’s most accepted English-language test to prove your proficiency, the TOEFL iBT & GRE test scores are accepted by more than 13,000 universities in 160+ countries, including 100% of universities in Australia, Canada, Ireland, New Zealand, the U.K. and the United States.</p>

                                                                            <p className='mb-10'>At PICS, we wanted the best for our students and we have an exclusive offer for TOEFL & GRE Test.</p>

                                                                            <p>Use code IND4859679 for a discount of<br/>
                                                                            INR 2005</p>
                                                                        </div>
                                                                        <div className='m-center mt-20 mb-0'>
                                                                            <a href='https://www.etsindia.org/?gad_source=1&gclid=EAIaIQobChMI8-frwYTEhgMVZSKDAx1BiBeyEAAYASAAEgLKRPD_BwE' target='_blank' className='btn btn-mod btn-color btn-round btn-medium'>Get Offer</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4 mt-xs-20'>
                                                                        <div className='image-rounded'><img src={englishtest2} /></div>
                                                                    </div>
                                                                </div>
                                                                </Typography>
                                                            </Box>
                                                        </Modal>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={educationloan} />
                                                                <p>Education Loan</p>
                                                                <Button className='buttonlink3' onClick={handleOpen4}>Know More</Button>
                                                            </div>
                                                        </div>
                                                        <Modal
                                                            open={open4}
                                                            onClose={handleClose4}
                                                            aria-labelledby="modal-modal-title"
                                                            aria-describedby="modal-modal-description"
                                                            >
                                                            <Box className='border-radius12' sx={style2}>
                                                                <Typography className='modal-bx' id="modal-modal-description">
                                                                <div onClick={handleClose4} className='closemodal'><CloseIcon /></div>
                                                                <div className='row'>
                                                                    <div className='col-md-8'>
                                                                        <div className='hs-line-2 font-alt color text-left mb-10'>
                                                                            <b>Education Loan</b>
                                                                        </div>
                                                                        <div className='section-text'>
                                                                            <p className='mb-10'>Looking for an education loan to study abroad? A student loan is an investment in your future success. If you dream of studying abroad, let the experts at PICS Study Abroad support your journey.</p>

                                                                            <p className='mb-10'>No pressure, no obligation. Complete our form and we’ll reach out to discuss your options for an education loan to study abroad. We’re here to support you!</p>
                                                                        </div>
                                                                        <div className='m-center mt-20 mb-0'>
                                                                            <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4 mt-xs-20'>
                                                                        <div className='image-rounded'><img src={loan} /></div>
                                                                    </div>
                                                                </div>
                                                                </Typography>
                                                            </Box>
                                                        </Modal>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={accomodations} />
                                                                <p>Accommodation Bookings</p>
                                                                <Button className='buttonlink3'>Know More</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={flighttickets} />
                                                                <p>Flight Booking </p>
                                                                <Button className='buttonlink3' onClick={handleOpen5}>Know More</Button>
                                                            </div>
                                                        </div>
                                                        <Modal
                                                            open={open5}
                                                            onClose={handleClose5}
                                                            aria-labelledby="modal-modal-title"
                                                            aria-describedby="modal-modal-description"
                                                            >
                                                            <Box className='border-radius12' sx={style2}>
                                                                <Typography className='modal-bx' id="modal-modal-description">
                                                                <div onClick={handleClose5} className='closemodal'><CloseIcon /></div>
                                                                <div className='row'>
                                                                    <div className='col-md-8'>
                                                                        <div className='hs-line-2 font-alt color text-left mb-10'>
                                                                            <b>Flight Booking</b>
                                                                        </div>
                                                                        <div className='section-text'>
                                                                            <p className='mb-10'>MS World Travel Services is an IATA approved travel agency operating from the past 15 years at Chennai. They offer a highest standard of services to our valued customers like students, sub agents and corporate travellers by assisting them to issue the flight tickets, visas, travel insurance, tour packages, Visa stamping, Attestations and other travel products. We are also an active member of TAAI & TAFI. </p>
                                                                            
                                                                            <p><b>Name:</b> Mhd. Imthiyas<br/>
                                                                            <b>Phone:</b> 044 4232 3228 +91 98843 53228<br/>
                                                                            <b>Mail:</b> msworldtravels@gmail.com</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4'>
                                                                        <div className='image-rounded'><img src={flight} /></div>
                                                                    </div>
                                                                </div>
                                                                </Typography>
                                                            </Box>
                                                        </Modal>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={visaguidance} />
                                                                <p>Visa Guidance</p>
                                                                <Button className='buttonlink3'>Know More</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={student} />
                                                                <p>student cV</p>
                                                                <Button className='buttonlink3'>Know More</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={general} />
                                                                <p>general</p>
                                                                <Button className='buttonlink3'>Know More</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section'>
                                    <div className='container-1400 relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h4 className="hs-line-3 color text-center font-alt mb-10 mb-xs-30">
                                                    Study In Your Dream Destination
                                                </h4>

                                                <div className='d-flex md-block study-abroads-list'>
                                                    <Button
                                                        onClick={() => {
                                                            handleHorizantalScroll(elementRef.current, 25, 100, -10);
                                                        }}
                                                        disabled={arrowDisable}
                                                    >
                                                        <ArrowBackIcon className='color' />
                                                    </Button>
                                                    <div className="slider-container" ref={elementRef}>
                                                        <div className='d-flex'>
                                                            <div className="study-abroad">
                                                                <div className='image-rounded'>
                                                                    <img src={study_abroad_usa} />
                                                                </div>
                                                                <h4>Study in USA</h4>
                                                                <div className='enquire'>
                                                                    <a href="study-abroad-usa" class="btn btn-mod btn-color btn-round btn-medium">Enquire <img src={arrow_right} /></a>
                                                                </div>
                                                            </div>

                                                            <div className="study-abroad">
                                                                <div className='image-rounded'>
                                                                    <img src={study_abroad_uk} />
                                                                </div>
                                                                <h4>Study in UK</h4>
                                                                <div className='enquire'>
                                                                    <a href="study-abroad-uk" class="btn btn-mod btn-color btn-round btn-medium">Enquire <img src={arrow_right} /></a>
                                                                </div>
                                                            </div>

                                                            <div className="study-abroad">
                                                                <div className='image-rounded'>
                                                                    <img src={study_abroad_australia} />
                                                                </div>
                                                                <h4>Study in Australia</h4>
                                                                <div className='enquire'>
                                                                    <a href="study-abroad-aus" class="btn btn-mod btn-color btn-round btn-medium">Enquire <img src={arrow_right} /></a>
                                                                </div>
                                                            </div>

                                                            <div className="study-abroad">
                                                                <div className='image-rounded'>
                                                                    <img src={study_abroad_canada} />
                                                                </div>
                                                                <h4>Study in Canada</h4>
                                                                <div className='enquire'>
                                                                    <a href="study-abroad-canada" class="btn btn-mod btn-color btn-round btn-medium">Enquire <img src={arrow_right} /></a>
                                                                </div>
                                                            </div>

                                                            <div className="study-abroad">
                                                                <div className='image-rounded'>
                                                                    <img src={study_abroad_ireland} />
                                                                </div>
                                                                <h4>Study in Ireland</h4>
                                                                <div className='enquire'>
                                                                    <a href="study-abroad-ireland" class="btn btn-mod btn-color btn-round btn-medium">Enquire <img src={arrow_right} /></a>
                                                                </div>
                                                            </div>

                                                            <div className="study-abroad">
                                                                <div className='image-rounded'>
                                                                    <img src={study_abroad_newzealand} />
                                                                </div>
                                                                <h4>Study in New Zealand</h4>
                                                                <div className='enquire'>
                                                                    <a href="study-abroad-new-zealand" class="btn btn-mod btn-color btn-round btn-medium">Enquire <img src={arrow_right} /></a>
                                                                </div>
                                                            </div>
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

                                <section className='small-section bg-scroll bg-pos-center' style={{
                                    background: `url(${university_list})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h5 className="hs-line-3 color text-center font-alt mb-20 mb-xs-10">
                                                    {homedata?.section4?.title}
                                                </h5>
                                                <div className='row d-flex justify-content-center mb-0'>
                                                    <div className='col-md-8'>
                                                        <div className='section-text text-center mb-30'>
                                                            <span dangerouslySetInnerHTML={{ __html: homedata?.section4?.description }}></span>
                                                        </div>

                                                        <h6 className='hs-line-4 mb-0'>
                                                            <b>Click to view Universities by Country</b>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='container'>
                                        <Tabs
                                            orientation="horizontal"
                                            value={value}
                                            onChange={handleChange}
                                            className='pics-tabs'
                                            aria-label="horizontal tabs example"
                                        >
                                            <Tab className='tab-single usa' label="USA" {...a11yProps(0)} />
                                            <Tab className='tab-single uk' label="UK" {...a11yProps(1)} />
                                            <Tab className='tab-single australia' label="Australia" {...a11yProps(2)} />
                                            <Tab className='tab-single canada' label="Canada" {...a11yProps(3)} />
                                            <Tab className='tab-single ireland' label="Ireland" {...a11yProps(4)} />
                                            <Tab className='tab-single newzealand' label="New Zealand" {...a11yProps(5)} />
                                        </Tabs>
                                        <TabPanel value={value} index={0}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[1]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[1]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>USA data coming soon...</p>
                                                        </>
                                                    }

                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(2)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            <Box className='mt-10 xs-padding-12'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[0]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[0]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>UK data coming soon...</p>
                                                        </>
                                                    }

                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(1)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[3]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[3]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <div className='coming-soon-data'>AUSTRALIA data coming soon...</div>
                                                        </>
                                                    }
                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(4)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={3}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[2]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[2]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>CANADA data coming soon...</p>
                                                        </>
                                                    }

                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(3)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={4}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    <div className='coming-soon-data'>Ireland data coming soon...</div>
                                                </Grid>
                                            </Box>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={5}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    <div className='coming-soon-data'>New Zealand data coming soon...</div>
                                                </Grid>
                                            </Box>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                            </div>
                                        </TabPanel>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-bottom faqs' style={{
                                    background: `url(${home_faq})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h4 className="hs-line-3 color text-center font-alt mb-30 mb-xs-30">
                                                    Common Questions, Find a Solution Fast
                                                </h4>

                                                <Accordion defaultExpanded>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How can I find my dream program?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Take just 3 minutes to answer a few questions about your educational goals. What do you want to study? Where do you dream of living? We’ll suggest study programs tailored exactly to what you need.
                                                        <div className='mt-20 mb-0 mt-xs-20'>
                                                            <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                                        </div>
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How do I apply once I've found the right program?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Start your application process with PICS. Simply create a free account and begin your application online at any time. It's easy, free, and all online. If you have any questions, feel free to reach out to us.
                                                        <div className='mt-20 mb-0 mt-xs-20'>
                                                            <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                                        </div>
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel3-content"
                                                    id="panel3-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Why choose PICS?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Applying to college can be tricky. You might forget something important, and then you could get disqualified. PICS helps you through every step so you don't miss anything. We can even help you improve your chances of getting in; most of our students get accepted. 
                                                        <div className='mt-20 mb-0 mt-xs-20'>
                                                            <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                                        </div>
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel4-content"
                                                    id="panel4-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Which countries can I apply to study in?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        PICS provides access to more than 250+ universities  in five countries: the United States of America (USA), the United Kingdom (UK), Australia, Canada, Ireland, and New Zealand.
                                                        <div className='mt-20 mb-0 mt-xs-20'>
                                                            <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Enquire now</a>
                                                        </div>
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel5-content"
                                                    id="panel5-header"
                                                    >
                                                    <Typography className='Lato faq-question'>I've applied, so what's next?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato faq-answer'>
                                                            After receiving the offer, pay the tuition deposit, apply for your student visa, and start packing for your study abroad adventure.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </main>

                            <footer className="small-section bg-gray-lighter footer pb-60">
                                <div className="container-1400">
                                    <div className="row">
                                        <div className="col-md-3 text-center m-center mb-xs-20">
                                            <a href="#top"><img src={FooterLogo} alt="PICS Consultants" /></a>
                                        </div>
                                        <div className="col-md-9">
                                            <div className='dblock'>
                                                <div className="footer-menu m-center mt-xs-20 mb-40 mb-xs-20">
                                                    <ul className="clearlist">
                                                        <li><a href="/">Home</a></li>
                                                        <li><a href="/about">Study Abroad</a></li>
                                                        <li><a href="/about">About</a></li>
                                                        <li><a href="/faq">FAQ</a></li>
                                                        <li><a href="/contact">Contact</a></li>
                                                        <li><a href="/term-condition">Terms & conditions</a></li>
                                                        <li><a href="/policy">Privacy Policy</a></li>
                                                        <li><a href="#">Cookie Policy</a></li>
                                                    </ul>
                                                </div>

                                                <div className='row pt-0 pb-10 pt-xs-20 pb-xs-10'>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget '>
                                                            <h5>PICS India, Chennai</h5>
                                                            1st Floor, Elsa Plaza, No 2,<br/>
                                                            Rajiv Gandhi Salai, Padur,<br/>
                                                            OMR, Chennai-603103, India
                                                            <button className='map-link' onClick=''>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                                    <path id="Path_12433" data-name="Path 12433" d="M7.575,13.657,20.769,9.231,16.343,22.425l-2.874-5.59a.7.7,0,0,0-.3-.3ZM30,15A15,15,0,1,1,15,0,15.017,15.017,0,0,1,30,15ZM22.382,7.618a.7.7,0,0,0-.721-.169l-16.113,5.4a.7.7,0,0,0-.1,1.292l6.872,3.533,3.533,6.872a.7.7,0,0,0,.625.382l.053,0a.7.7,0,0,0,.614-.477l5.4-16.113a.7.7,0,0,0-.169-.721Z" fill="#182e46"/>
                                                                </svg>  <span>Get Directions</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget '> 
                                                            <h5>PICS UK, Chelmsford</h5>
                                                            Head Quarters : 27, Duke<br/> 
                                                            Street, Chelmsford,<br/> 
                                                            England, CM1 1HT, UK
                                                            <button className='map-link' onClick=''>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                                    <path id="Path_12433" data-name="Path 12433" d="M7.575,13.657,20.769,9.231,16.343,22.425l-2.874-5.59a.7.7,0,0,0-.3-.3ZM30,15A15,15,0,1,1,15,0,15.017,15.017,0,0,1,30,15ZM22.382,7.618a.7.7,0,0,0-.721-.169l-16.113,5.4a.7.7,0,0,0-.1,1.292l6.872,3.533,3.533,6.872a.7.7,0,0,0,.625.382l.053,0a.7.7,0,0,0,.614-.477l5.4-16.113a.7.7,0,0,0-.169-.721Z" fill="#182e46"/>
                                                                </svg>  <span>Get Directions</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget'>
                                                            <div className="social-icons mb-10">
                                                                <ul>
                                                                    <li><a href={headandfooterdata?.facebook_link} target='_blank'><img src={facebook} /></a></li>
                                                                    <li><a href={headandfooterdata?.instagram} target='_blank'><img src={instagram} /></a></li>
                                                                    <li><a href={headandfooterdata?.whatsapp} target='_blank'><img src={whatsapp} /></a></li>
                                                                    <li><a href="https://www.linkedin.com/company/picsstudyabroad/" target='_blank'><img src={linkedin} /></a></li>
                                                                    <li><a href="https://www.youtube.com/@PicsStudyAbroad" target='_blank'><img src={youtube} /></a></li>
                                                                </ul>
                                                            </div>
                                                            @picsstudyabroad
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='m-center mt-30'>
                                                    <div className='row'>
                                                        <div className='col-md-3'>
                                                            <button className='buttonlink me-5' onClick={() => window.location = 'mailto:contact@pics.global'}>
                                                                <img src={mail} className='img-fluid me-2' />
                                                                {headandfooterdata?.email}
                                                            </button>
                                                        </div>

                                                        <div className='col-md-3'>
                                                            <button className='buttonlink' onClick={() => window.location = 'tel:+919444094442'}>
                                                                <img src={call} className='img-fluid me-2' />
                                                                +91 94440 94442
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mblock'>

                                                <div className='row pt-0 pb-10 pt-xs-20 pb-xs-10'>
                                                    <div className='col-6 col-md-3 m-center mb-xs-20'>
                                                        <div className='footer-widget '>
                                                            <h5>PICS India, Chennai</h5>
                                                            1st Floor, Elsa Plaza, No 2,<br/>
                                                            Rajiv Gandhi Salai, Padur,<br/>
                                                            OMR, Chennai-603103, India
                                                            <button className='map-link' onClick=''>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                                    <path id="Path_12433" data-name="Path 12433" d="M7.575,13.657,20.769,9.231,16.343,22.425l-2.874-5.59a.7.7,0,0,0-.3-.3ZM30,15A15,15,0,1,1,15,0,15.017,15.017,0,0,1,30,15ZM22.382,7.618a.7.7,0,0,0-.721-.169l-16.113,5.4a.7.7,0,0,0-.1,1.292l6.872,3.533,3.533,6.872a.7.7,0,0,0,.625.382l.053,0a.7.7,0,0,0,.614-.477l5.4-16.113a.7.7,0,0,0-.169-.721Z" fill="#182e46"/>
                                                                </svg>  <span>Get Directions</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-3 m-center mb-xs-20'>
                                                        <div className='footer-widget '> 
                                                            <h5>PICS UK, Chelmsford</h5>
                                                            Head Quarters : 27, Duke<br/> 
                                                            Street, Chelmsford,<br/> 
                                                            England, CM1 1HT, UK
                                                            <button className='map-link' onClick=''>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                                    <path id="Path_12433" data-name="Path 12433" d="M7.575,13.657,20.769,9.231,16.343,22.425l-2.874-5.59a.7.7,0,0,0-.3-.3ZM30,15A15,15,0,1,1,15,0,15.017,15.017,0,0,1,30,15ZM22.382,7.618a.7.7,0,0,0-.721-.169l-16.113,5.4a.7.7,0,0,0-.1,1.292l6.872,3.533,3.533,6.872a.7.7,0,0,0,.625.382l.053,0a.7.7,0,0,0,.614-.477l5.4-16.113a.7.7,0,0,0-.169-.721Z" fill="#182e46"/>
                                                                </svg>  <span>Get Directions</span>
                                                            </button>
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
                                                                    <li><a href="https://www.linkedin.com/company/picsstudyabroad/" target='_blank'><img src={linkedin} /></a></li>
                                                                    <li><a href="https://www.youtube.com/@PicsStudyAbroad" target='_blank'><img src={youtube} /></a></li>
                                                                </ul>
                                                            </div>
                                                            @picsstudyabroad
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
                                                                <li><a href="/about">Study Abroad</a></li>
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
                                                COPYRIGHT@ 2024 PICS Global Consultants Ltd. Trading as PICS Global  |  REG NO: 13199591 
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