import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { Box, Typography } from '@mui/material';
import { NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
import { NavDropdownMenu } from "react-bootstrap-submenu";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Logo from '../images/logo.png';
import FooterLogo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';
import whatsapp from '../images/whatsapp.png';
import mail from '../images/mail.png';
import call from '../images/call.png';
import whatsappSticky from '../images/whatsapp-big.png';
import usa_bg from '../images/ireland/banner-bg.jpg';
import highlights_bg from '../images/usa-bg.png';
import whatsappwhite from '../images/whatsapp-w.png';
import washington_icon from '../images/washington.png';
import months_icon from '../images/12-months.png';
import english_icon from '../images/english.png';
import key_benefits_01 from '../images/ireland/icon-01.png';
import key_benefits_02 from '../images/ireland/icon-02.png';
import key_benefits_03 from '../images/ireland/icon-03.png';
import key_benefits_04 from '../images/ireland/icon-04.png';
import key_benefits_05 from '../images/ireland/icon-05.png';
import highlight_icon_01 from '../images/icon-01.png';
import highlight_icon_02 from '../images/ireland/icon-06.png';
import highlight_icon_03 from '../images/ireland/icon-07.png';
import highlight_icon_04 from '../images/ireland/icon-08.png';
import highlight_icon_05 from '../images/ireland/icon-08.png';
import highlight_icon_06 from '../images/ireland/icon-09.png';
import highlight_icon_07 from '../images/ireland/icon-10.png';
import education_system_usa from '../images/ireland/education-system.jpg';
import admission_requirement from '../images/ireland/admission-requirement.jpg';
import admission_aus from '../images/ireland/admission-requirement-2.jpg';
import poststudy_usa from '../images/ireland/education-system-3.jpg';
import poststudy_usa_02 from '../images/ireland/education-system-4.jpg';
import workopportunities_usa from '../images/work-opportunities-usa.png';
import workopportunities_usa_02 from '../images/ireland/workopportunities-ire.jpg';
import getintouch_usa from '../images/getin-touch-usa.jpg';
import opportunities_icon_01 from '../images/ireland/enginerring.png';
import opportunities_icon_02 from '../images/ireland/social.png';
import opportunities_icon_03 from '../images/ireland/transport.png';
import opportunities_icon_04 from '../images/ireland/medical.png';
import opportunities_icon_05 from '../images/ireland/managers.png';
import opportunities_icon_06 from '../images/ireland/hospitality.png';
import map_usa from '../images/usa-map.png';
import exam_01 from '../images/exam-01.png';
import exam_02 from '../images/exam-02.png';
import exam_03 from '../images/exam-03.png';
import exam_04 from '../images/exam-04.png';
import exam_05 from '../images/exam-05.png';
import exam_06 from '../images/exam-06.png';
import exam_07 from '../images/exam-07.png';
import visa_uk from '../images/ireland/document-required.png';
import studentvisa_usa from '../images/ireland/student-visa.jpg';
import './style.css';
import "react-bootstrap-submenu/dist/index.css";
import '../css/verticals.min.css';
import { getheaderandfooterdata, getaboutusdata} from '../Actions/Pics';
import { useDispatch, useSelector } from "react-redux";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Modal from '@mui/material/Modal';
import {Helmet} from "react-helmet";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #ddd',
    boxShadow: 24,
    p: 3,
};

const StudyAbroadIreland = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const [value, setValue] = React.useState('1');
    const [menuValue, setMenuValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [loading, setLoading] = React.useState(false);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = React.useState(false);
    const dispatch = useDispatch();
    const aboutusdata = useSelector((state) => state?.Pics?.aboutusdata?.data);
    const headandfooterdata = useSelector((state) => state?.Pics?.headandfooterdata?.data);
    
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

   const activeMenu = (str) => () => {
    setMenuValue(str);
  };
           
    const isSticky = (e) => {
        const header = document.querySelector('.stickymenu');
        const scrollTop = window.scrollY;
        scrollTop >= 10 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
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

    return (
        <>
        <Helmet onChangeClientState={(newState) => {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Studying in Ireland is more than just books and classes. PICS is the Top education consultants in Chennai will handpick the perfect university and program to suit your academic and personal goals, ensuring you make the most of this transformative journey.' || '');
            }
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', 'Ireland Education Consultants in Chennai, Best Ireland Universities, Ireland Universities for International Students, Ireland Study Abroad, Study in Ireland for International Students' || '');
            }
            }}><title>{ 'Study in Ireland: Top education consultants in Chennai' }</title>
        </Helmet>
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
                        <a href="#main" className="btn skip-to-content">Skip to Content</a>
                        <div className="page" id="top">
                            <Navbar expand="lg" className="main-nav">
                                <Container>
                                    <Navbar.Brand>
                                        <a href="/" className="logo">
                                            <img src={Logo} alt="PICS Study Abroad" />
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
                                            <NavDropdown.Item href="study-in-usa">Study in USA</NavDropdown.Item>
                                            <NavDropdown.Item href="study-in-uk">Study in UK</NavDropdown.Item>
                                            <NavDropdown.Item href="study-in-australia">Study in Australia</NavDropdown.Item>
                                            <NavDropdown.Item href="study-in-canada">Study in Canada</NavDropdown.Item>
                                            <NavDropdown.Item href="study-in-ireland">Study in Ireland</NavDropdown.Item>
                                            <NavDropdown.Item href="study-in-new-zealand">Study in New Zealand</NavDropdown.Item>
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
                                    <section className="home-section bg-scroll abroad-pages-height" style={{
                                        background: `url(${usa_bg})`,
                                    }}>
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <h1 className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                Study in Ireland
                                                            </h1>
                                                            <h2 className="hs-line-2 text-center">
                                                                Top Education Consultants
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <section className='bg-blue pt-20 pb-20 stickymenu'>
                                    <div className='container-1400 relative'>
                                        <div className='addonMenu'>
                                            <ul>
                                                <li><a href='#about-ire' className={menuValue == "1"?'active':''} onClick={activeMenu("1")}>About IRE</a></li>
                                                <li><a href='#ire-highlights' className={menuValue == "2"?'active':''} onClick={activeMenu("2")}>IRE Highlights</a></li>
                                                <li><a href='#education-system' className={menuValue == "3"?'active':''} onClick={activeMenu("3")}>Education System</a></li>
                                                <li><a href='#top-courses' className={menuValue == "4"?'active':''} onClick={activeMenu("4")}>Top Courses</a></li>
                                                <li><a href='#faqs' className={menuValue == "5"?'active':''} onClick={activeMenu("5")}>FAQs</a></li>
                                                <li><a href='#timelines' className={menuValue == "6"?'active':''} onClick={activeMenu("6")}>Intake & Timelines</a></li>
                                                <li><a href='#for-visa' className={menuValue == "7"?'active':''} onClick={activeMenu("7")}>For Visa</a></li>
                                                <li><a href='#work-opportunities' className={menuValue == "8"?'active':''} onClick={activeMenu("8")}>Work Opportunities</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pb-40' id='about-ire'>
                                    <div className='container relative'>
                                    
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-5'>
                                                <h3 className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                    About Ireland
                                                </h3>
                                                <div className='section-text mb-20'>
                                                    <span className='color-2 uppercase'>Study in Ireland:</span> Ireland has over the years become a popular study-abroad destination. The country enjoys a worldwide reputation for their superior quality of education that is built on the foundation of commitment to excellence. Ireland is home to multiple institutions of higher education that are internationally renowned and offers a variety of programmes in areas such as medicine, science, technology, engineering, business and law among others. International students looking to study in Ireland would be pleased to know that the majority of the courses taught in Ireland are in the English language thus making the country one of the most viable destinations for studying abroad. 
                                                </div>

                                                <div className='section-text'>
                                                    Candidates looking to pursue higher education in Ireland would be happy to know that pursuing a full-time master’s programme in Ireland would entitle them to up to two years of post-study stay-back option to look for suitable employment in their area of study....
                                                    <div className='read-more' onClick={handleOpen}>Read more</div>
                                                </div>

                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                    >
                                                    <Box sx={style}>
                                                        <Typography className='modal-bx-body-3' id="modal-modal-description" sx={{ mt: 2 }}>
                                                        <div className='section-text'>
                                                            <p className='mb-10'>Candidates looking to pursue higher education in Ireland would be happy to know that pursuing a full-time master’s programme in Ireland would entitle them to up to two years of post-study stay-back option to look for suitable employment in their area of study. One of the fastest growing economies and an integral part of the European Union, Ireland provides lucrative career opportunities as it is home to more than 1,500 MNCs such as Google, Facebook, Apple, Cocoa Cola, and Amazon to name a few.</p>

                                                            <div className='color-2 uppercase mb-10'>Why Study in Ireland?</div>
                                                            <p className='mb-10'>Ireland is a popular destination for Indian students looking to study abroad. The country is home to top-ranked universities that  provide  quality  education  and  a  High  Return  on Investments (ROI). The English language is widely spoken in the country with top universities in Ireland opting for English as the medium of education. Many of Ireland’s institutions of higher education are internationally ranked, offering many strong programmes in a variety of areas.</p>
                                                            <p className='mb-10'>The education system followed by the country is student- friendly offering up to 2 years of post-study stay-back options. With close proximity to Europe, Ireland is an upcoming business hub offering very good career opportunities as it is home to multiple corporate titans.</p>

                                                        </div>
                                                        </Typography>
                                                    </Box>
                                                </Modal>
                                            </div>

                                            <div className='col-md-7 mt-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-700 italic mb-10'><b>Key Facts About Ireland</b></h3>

                                                    <div className='row mb-20'>
                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>30+ </div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Universities &<br/> Colleges</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>5K</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Indian Students<br/> at 2022</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>20 Hrs/Week</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Part Time<br/> Work Permit</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-10'>
                                                                <div className='count'>0%</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Economic Growth<br/> Rate at 2023</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-10'>
                                                                <div className='count'>5.28M</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Total Population<br/> at 2023</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={washington_icon} alt="DUBLIN" />
                                                                <div>
                                                                    <div className='location'>DUBLIN</div>
                                                                    <div className='white'>Capital</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={months_icon} alt="2 Years" />
                                                                <div>
                                                                    <div className='location'>2 Years</div>
                                                                    <div className='white'>Post Study Work Permit</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4 mb-xs-0'>
                                                            <div className='key-benefits-2'>
                                                                <img src={english_icon} alt="ENGLISH" />
                                                                <div>
                                                                    <div className='location'>ENGLISH</div>
                                                                    <div className='white'>Primary Language</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-center mt-30'>
                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={key_benefits_01} alt="Quality of Education" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Quality of<br/> Education</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Diverse range of world-renowned institutions, offering cutting-edge program.</li>
                                                            <li>Access to top-notch faculty, resources, and extensive alumni nebworks.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 mb-30 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={key_benefits_02} alt="English is Widely Used" />
                                                        </div>
                                                        <h3 className='alt-services-title'>English is Widely<br/> Used</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Vibrant multicultural environment, fostering tolerance and global exposure.</li>
                                                            <li>Stringent safety measures with campus police and emergency protocols</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 mb-30 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={key_benefits_03} alt="Friendly and Safe" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Friendly and<br/> Safe</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>High living standards, comprehensive healthcare, and excellent infra.</li>
                                                            <li>Access to diverse recreational activities and natural attractions.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 mb-30 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={key_benefits_04} alt="High Return on Investments" />
                                                        </div>
                                                        <h3 className='alt-services-title'>High Return on<br/> Investments</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Vibrant multicultural environment, fostering tolerance and global exposure.</li>
                                                            <li>Stringent safety measures with campus police and emergency protocols</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={key_benefits_05} alt="Upcoming Business Hub" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Upcoming Business<br/> Hub</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>High living standards, comprehensive healthcare, and excellent infra.</li>
                                                            <li>Access to diverse recreational activities and natural attractions.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-pos-topcenter bg-scroll pb-100 pb-xs-50' style={{
                                        background: `url(${highlights_bg})`,
                                }} id='ire-highlights'>
                                    <div className='container-1400 relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-40 mb-xs-30">
                                            Study in Ireland Highlights
                                        </h3>
                                        <div className='row mb-70'>
                                            <div className='col-6 col-md-2 mb-20 mb-xs-20'>
                                                <div className='highlights'>
                                                    <div className='desc'>Universities in<br/> Ireland</div>
                                                    <div className='icon'><img src={highlight_icon_01} /></div>
                                                    <div className='desc'>10 Universities | 10 Institutes Of Technology | 7+ Private Higher Education Institutions</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-20 mb-xs-20'>
                                                <div className='highlights'>
                                                    <div className='desc'>Average Living<br/> Expense</div>
                                                    <div className='icon'><img src={highlight_icon_02} /></div>
                                                    <div className='desc'>INR 9.6 Lakhs<br/> Or €10,000</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-20 mb-xs-20'>
                                                <div className='highlights'>
                                                    <div className='desc'>Popular Courses in<br/> Ireland</div>
                                                    <div className='icon'><img src={highlight_icon_03} /></div>
                                                    <div className='desc'>Business Analytics | Computing & IT | Engineering</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-20 mb-xs-20'>
                                                <div className='highlights'>
                                                    <div className='desc'>Part-Time Work<br/> Allowance</div>
                                                    <div className='icon'><img src={highlight_icon_04} /></div>
                                                    <div className='desc'>20Hrs/Week</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-20 mb-xs-20'>
                                                <div className='highlights'>
                                                    <div className='desc'>Work Permit In Ireland<br/> Post-Study</div>
                                                    <div className='icon'><img src={highlight_icon_06} /></div>
                                                    <div className='desc'>Up To 24 Months</div>
                                                </div>
                                            </div>
                                            
                                            <div className='col-6 col-md-2 mb-20 mb-xs-20'>
                                                <div className='highlights'>
                                                    <div className='desc'>Ireland Study<br/> Visa Cost</div>
                                                    <div className='icon'><img src={highlight_icon_07} /></div>
                                                    <div className='desc'>Single Entry: €60| Multiple Entry: €100</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='container'>
                                        <div className='row d-flex align-items-center'>
                                            <div className='col-md-8'>
                                                <h3 className="hs-line-3 color text-left font-alt mb-10 mb-xs-10">
                                                    Education System in Ireland
                                                </h3>

                                                <div className='section-text mb-30'>
                                                    In this section, we are going to be talking about the education system followed in Ireland. The country is broadly divided into Primary Education, Secondary Education and Tertiary Education. Tertiary Education is often referred to as pursuing higher education in Ireland which splits into 10 universities, 10 Institutes of Technology (IOTs) and 7+ private higher education institutions. Ireland follows the National Framework of Qualifications (NFQ). The Irish National Framework of Qualifications (NFQ) is a 10-level system used to describe qualifications in the Irish education and training system. The NFQ shows how General Education Awards, Further Education and Training and Higher Education Awards are mapped against the 10 levels of the framework.
                                                </div>
                                            </div>

                                            <div className='col-md-4 mt-xs-20'>
                                                <div className='img-round'><img src={education_system_usa} className='img-fluid' /></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-light-gray' id='top-courses'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center m-left font-alt mb-20 mb-xs-10">
                                            Top Courses in Ireland
                                        </h3>
                                        <div className='section-text text-center m-left mb-40 mb-xs-20'>
                                            Ireland is home to some of the top universities in the world offering a multitude of courses fit for anyone looking to study higher education in Ireland. Popular courses in Ireland are determined by a number of factors; these could vary from the candidates' own interests to job prospects available in a particular county. When we talk about top courses in Ireland, we have
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            
                                            <div className='col-md-6'>
                                                <div className='img-round'><img src={admission_requirement} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-6 mb-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-600 italic mb-20'>Some of the popular courses in the Ireland are:</h3>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Biotech, Bio-processing & Food Processing</li>
                                                                    <li>Business Analytics</li>
                                                                    <li>Journalism and Mass communication</li>
                                                                    <li>Construction</li>
                                                                    <li>Nursing, Pharma, Healthcare</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Business and Economics (Finance & MBA-most popular)</li>
                                                                    <li>Computing & IT courses</li>
                                                                    <li>Engineering courses (Electrical, Mechanical & Civil)</li>
                                                                    <li>Law</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-8 mb-xs-20'>
                                                <h3 className='fw-600 italic mb-20'>Admission Requirements to Study in Irish Universities</h3>
                                                <div className='section-text'>
                                                    Irish universities have one major enrolment season, which is the autumn intake in September. Some universities admit students for January sessions as well. For undergraduate courses, Irish universities accept applications through Central Applications Office (CAO) an online enrolment system. For postgraduate courses, candidates are required to apply directly to the university. The documents required as part of your admission requirements to Irish universities are as follows:
                                                </div>

                                                <div className='read-more' onClick={handleOpen3}>Read more</div>

                                                <Modal
                                                    open={open3}
                                                    onClose={handleClose3}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                    >
                                                    <Box sx={style}>
                                                        <Typography className='modal-bx-body-3' id="modal-modal-description" sx={{ mt: 2 }}>
                                                        <div className='section-text'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Academic Transcripts: Mark Sheets of Standard X, XII, and the bachelor’s degree (if applicable)</li>
                                                                    <li>Internet-based TOEFL or IELTS scores</li>
                                                                    <li>If you have work experience then two letters of recommendation (LOR) from the employer/manager who knows you well and can comment on your professional abilities</li>
                                                                    <li>Statement of Purpose (SOP)</li>
                                                                    <li>Academic Resume</li>
                                                                    <li>Portfolio (in case of students applying for art and design courses or architecture programs)</li> 
                                                                    <li>Others (Certificates/achievements at the state and national level and extracurricular activities) </li>
                                                                    <li>Proof of funds</li>
                                                                    <li>Health insurance</li>
                                                                    <li>A copy of your passport</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        </Typography>
                                                    </Box>
                                                </Modal>
                                            </div>
                                            
                                            <div className='col-md-4'>
                                                <div className='inner-column'>
                                                    <div className='img-round'><img src={admission_aus} className='img-fluid' /></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mb-60 mb-xs-20'>
                                            <div className='col-md-12'>
                                                <div className='highlights-2'>
                                                    <div className='d-flex align-items-center justify-content-center mb-20'>
                                                        <div className='me-4'>
                                                            <img src={highlight_icon_07} alt="Scholarships to Study in Ireland" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Scholarships to Study in Ireland</h3>
                                                    </div>

                                                    <div className='section-text'>
                                                        One of the biggest drawbacks of studying abroad is the high tuition fee. However, a lot of Irish universities are happy to waive application fees and also provide scholarships to students who have strong academic backgrounds. Candidates looking to study in Ireland can also check our website for a list of Scholarships to study in Ireland.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='img-round'><img src={poststudy_usa} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-600 italic mb-20'>Education Loan for studying in Ireland</h3>
                                                    <div className='section-text'>
                                                        Candidates who are not able to get their hands on a fee waiver can definitely apply for an education loan. Studying abroad promises a high return on investments and this would mean paying back your education loan in a matter of years. Candidates can take a look at Education Loan providers on our website.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-7'>
                                                <h3 className='fw-600 italic mb-20'>Part-time work options for International students in Irelandd</h3>
                                                <div className='section-text'>
                                                    <p>Indian students in Ireland on an Irish Student Visa and enrolled on a full-time course that’s included on the Interim List of Eligible Programmes (ILEP) would be allowed to work part-time up to 20 hours a week during the school year and up to 40 hours a week on holidays (summer and winter holidays).</p>

                                                    <div className='color-title mb-10'>Post-study work permit in Ireland</div>
                                                    <p>Students who have enrolled as full-time students, with an Irish accredited degree would qualify for a non-renewable extension of up to 2 years after course completion as a post-study work permit. This extension is granted for the purpose of finding suitable employment.</p>
                                                </div>
                                            </div>
                                            <div className='col-md-5 mb-xs-20'>
                                                <div className='inner-column'>
                                                    <div className='img-round'><img src={poststudy_usa_02} className='img-fluid' /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section faqs pb-0' id='faqs'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center m-left font-alt mb-40 mb-xs-30">
                                            Study in Ireland FAQs
                                        </h3>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Accordion defaultExpanded>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Why should Indians study in Ireland?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Ireland is home to world-class universities and the education system in Ireland is very different from the Indian education system. Studying in Ireland would allow students to live among Europeans who are famous for their rich lifestyle. Close proximity to Europe would also allow students to travel to nearby countries on a Schengen Visa. Part-time work opportunities and post- study work permits make studying in Ireland a dream come true for many Indians.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How to apply to universities in Ireland?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        For undergraduate admissions, candidates would be required to apply through the Central Applications Office (CAO). And for postgraduate admissions, students are required to apply online directly with the university. Indian students looking to study in Ireland can get in touch with our Shiksha Study Abroad Counsellors for assistance with university admissions.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>    
                                </section>

                                <section className='page-section pt-70 pt-xs-40' id='timelines'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-20 mb-xs-30">
                                            Intake in Ireland
                                        </h3>
                                        <div className='section-text text-center mb-50 mb-xs-30'>
                                            Applicants should be aware that Ireland has two primary admission periods: Spring and Fall intakes. Spring admissions typically commence in June/ July , whereas Fall intake consistently begin in September/ October. Some institutions adopt a rolling application system, resulting in various courses having distinct start dates and keeping their application processes active throughout the year. The majority of candidates concentrate on applying for either the Spring or Fall intakes. Fall is notably a significant intake, with all courses available, unlike the Spring intake or other rolling admissions that may be limited to specific courses.
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <TabContext value={value}>
                                                    <Box className='customTabs d-flex justify-content-center'>
                                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                        <Tab label="Fall Intake & Timeline" value="1" />
                                                        <Tab label="Spring Intake &  Timeline" value="2" />
                                                    </TabList>
                                                    </Box>
                                                    <TabPanel value="1">
                                                        <div className='row mb-50'>
                                                            <div className='col-md-6 mb-xs-20'>
                                                                <div className='pros'>
                                                                    <p className='mb-10 white fs-16'><b>PROS OF FALL INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        All top universities are open for admissions during this time.
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        More universities mean more courses are on offer for students looking to apply for Fall intake.
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        High acceptance rate across universities and bigger class size.
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF FALL INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Huge competition among students for seats.
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Lower chance of getting admission to preferred university.
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Larger number of applications mean a longer wait time for university acceptance decisions.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Fall Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="SEP - OCT">
                                                                    <div className='title'>Know your University and Register for Tests</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Start gathering information on universities and courses available in Ireland.</li>
                                                                            <li>Get your Application Kit ready.</li>
                                                                            <li>Register for standard exams like the GRE or GMAT and English proficiency exams like TOEFL or IELTS.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="OCT - JAN">
                                                                    <div className='title'>Apply to your University</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Apply to your preferred top universities before the course closures.</li>
                                                                            <li>Candidates should submit their college applications before the first deadline.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="FEB - APR">
                                                                    <div className='title'>Accept University Offer and Look for Grants</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Obtain the Letter of Acceptance.</li>
                                                                            <li>Apply for education loans and scholarships.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="MAY - JUN">
                                                                    <div className='title'>Finance and PCC</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Pay 70 per cent or full tuition cost to book seat.</li>
                                                                            <li>Apply for Police Clearance Certificate (PCC)</li>
                                                                            <li>Prepare Visa File. Submit AVATS form and book your visa dates.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUN - AUG">
                                                                    <div className='title'>Student Visa and Departure</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Apply for Student Visa</li>
                                                                            <li>Complete all Pre- departure formalities and preparation.</li>
                                                                            <li>Leave for Ireland</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </TabPanel>
                                                    <TabPanel value="2">
                                                    <div className='row mb-50'>
                                                            <div className='col-md-6 mb-xs-20'>
                                                                <div className='pros'>
                                                                    <p className='mb-10 white fs-16'><b>PROS OF SPRING INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Less competition for seats as fewer students apply.
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Small class size which means more attention and	personalised approach to the programme.
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Spring intake is a blessing for candidates who have missed the fall intake.

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF SPRING INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Fewer	universities participate in the Spring intake.
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Fewer universities mean lesser variety of courses on offer for international students.
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Lesser	on-campus employment and part- time jobs as compared to Fall intake.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Spring Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="JUN - JUL">
                                                                    <div className='title'>Know your University and Register for Exams</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Start gathering information on universities and courses available in Ireland.</li>
                                                                            <li>Get your Application Kit ready.</li>
                                                                            <li>Register and appear for standard exams like the GRE or GMAT and English proficiency exams like TOEFL or IELTS.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="AUG - SEP">
                                                                    <div className='title'>Apply to your Univeristy</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Candidates should submit their college applications.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="OCT - NOV">
                                                                    <div className='title'>PCC and Prepare for Visa</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Apply for Police Clearance Certificate (PCC).</li>
                                                                            <li>Prepare Student Visa File.</li>
                                                                            <li>Submit AVATS form and book your visa dates.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="NOV - JAN">
                                                                    <div className='title'>Student Visa and Departure</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Apply for Student Visa</li>
                                                                            <li>Complete all Pre- departure formalities and preparation.</li>
                                                                            <li>Leave for Ireland.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </TabPanel>
                                                </TabContext>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-pos-topcenter bg-dark-alfa bg-scroll' style={{
                                        background: `url(${studentvisa_usa})`,
                                }} id='for-visa'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-end'>
                                            <div className='col-md-7'>
                                                <h3 className="hs-line-3 white text-left font-alt mb-20 mb-xs-10">
                                                    Student Visa in Ireland
                                                </h3>
                                                <div className='section-text white'>
                                                    <p>Candidates who are planning to pursue a course of study for more than 3 months are required to apply for an Ireland Study Visa. Candidates would be required to visit the official website of the Irish Immigration Service to complete their online student visa application. Ireland Study Visa applicants would be required to complete the online application form, submit supporting documents, and follow instructions on the summary application form generated by the system.</p>
                                                    <p>Students can apply for their Ireland study Visa up to 3 months before their date of travel to Ireland. The Ireland visa processing time is roughly 8 weeks from the date on which you lodge your application. Students are advised not to buy travel tickets before they know the outcome of their visa application.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section pb-0'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-40 mb-xs-30">
                                            Documents Required for Visa Application
                                        </h3>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='text-center'><img src={visa_uk} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section bg-pos-topcenter fixed-height-small bg-scroll pb-100 pb-xs-20' style={{
                                        background: `url(${map_usa})`,
                                }}>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-60 mb-xs-10">
                                            Exams Required to Study in Ireland
                                        </h3>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='exam_list'>
                                                    <div className='exam_nam'>
                                                        <div><img src={exam_01} /></div>
                                                    </div>
                                                    <div className='exam_nam'>
                                                        <div><img src={exam_02} /></div>
                                                    </div>
                                                    <div className='exam_nam'>
                                                        <div><img src={exam_03} /></div>
                                                    </div>
                                                    <div className='exam_nam'>
                                                        <div><img src={exam_04} /></div>
                                                    </div>
                                                    <div className='exam_nam'>
                                                        <div><img src={exam_05} /></div>
                                                    </div>
                                                    <div className='exam_nam'>
                                                        <div><img src={exam_06} /></div>
                                                    </div>
                                                    <div className='exam_nam'>
                                                        <div><img src={exam_07} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-pos-topcenter bg-scroll pb-100 pt-xs-0 pb-xs-50' style={{
                                        background: `url(${workopportunities_usa})`,
                                }} id='work-opportunities'>
                                    <div className='container relative'>
                                        <div className='right-container-2'>
                                            <div className='row g-0 d-flex align-items-center'>
                                                <div className='col-md-4'>
                                                    <div className='img-round'><img src={workopportunities_usa_02} className='img-fluid' /></div>
                                                </div>
                                                <div className='col-md-8'>
                                                    <div className='inner-column'>
                                                        <h3 className="hs-line-3 color text-left font-alt mb-20 mb-xs-20">
                                                            Work Opportunities in Ireland
                                                        </h3>
                                                        <div className='section-text mb-30 mb-xs-20'>
                                                            Candidates can opt for Skill Shortage Jobs in Ireland. Critical Skill Employment Permit Ireland allows students to work in an occupation where there is a shortage of skills in the country. The Critical Skills Employment Permit in Ireland acts as an incentive to attract and encourage highly skilled people from foreign countries to contribute to the economy of Ireland. The list is periodically updated by the government and you can access the same on the official website.
                                                        </div>

                                                        <h3 className='fw-700 italic mb-30'>In-demand skills and job opportunities in Ireland include:</h3>

                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_01} /></div>
                                                                            <div>Science & Engineering</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_02} /></div>
                                                                            <div>Social Care</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_03} /></div>
                                                                            <div>Transport and Logistics</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_04} /></div>
                                                                            <div>Healthcare</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_05} /></div>
                                                                            <div>Business and Finance</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_06} /></div>
                                                                            <div>Hospitality</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='color-title mb-10'>Popular Job Sectors in Ireland</div>

                                                        <div className='section-text mb-10 mb-xs-20'>Broadly speaking, the job sector in Ireland can be classified into the following professions</div>

                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div class="list-style-3">
                                                                    <ul>
                                                                        <li>Primary Industries</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div class="list-style-3">
                                                                    <ul>
                                                                        <li>Software & ICT Industries</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div class="list-style-3">
                                                                    <ul>
                                                                        <li>Financial Service Industrys</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div class="list-style-3">
                                                                    <ul>
                                                                        <li>Pharmaceutical & Medical Tech Industriess</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section pt-20'>
                                    <div className="container">
                                        <div className='row g-0 d-flex align-items-end'>
                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='img-round zindex'><img src={getintouch_usa} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='right-container'>
                                                    <div className='row d-flex align-items-center'>
                                                        <div className='col-md-8 mb-xs-10'>
                                                            <h3 class="fw-700 italic mb-0">Get in Touch</h3>
                                                            <p>For a more personalised consultation,<br/> get in touch with a PICS consultant today!</p>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <a href="contact" class="btn btn-mod btn-color btn-round btn-medium">EXPLORE NOW <svg xmlns="http://www.w3.org/2000/svg" width="30.229" height="14.961" viewBox="0 0 30.229 14.961">
                                                                <g id="Group_356" data-name="Group 356" transform="translate(1 1.414)">
                                                                    <path id="Path_11813" data-name="Path 11813" d="M6153.84,809.385l6.065,6.066-6.065,6.066" transform="translate(-6131.677 -809.385)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                                    <path id="Path_11814" data-name="Path 11814" d="M6134.66,839.186h-28.229" transform="translate(-6106.431 -833.12)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                                                                </g>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </main>

                            <footer className="small-section bg-gray-lighter footer pb-60">
                                <div className='sticky-whatsapp'>
                                    <a href={headandfooterdata?.whatsapp} target='_blank'><img src={whatsappSticky} /></a>
                                </div>
                                <div className="container-1400">
                                    <div className="row">
                                        <div className="col-md-3 text-center m-center mb-xs-20">
                                            <a href="#top"><img src={FooterLogo} alt="PICS Study Abroad" /></a>
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
                                                            <a className='map-link' href='https://maps.app.goo.gl/APoby4Foxrjwssyb7' target='_blank'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                                    <path id="Path_12433" data-name="Path 12433" d="M7.575,13.657,20.769,9.231,16.343,22.425l-2.874-5.59a.7.7,0,0,0-.3-.3ZM30,15A15,15,0,1,1,15,0,15.017,15.017,0,0,1,30,15ZM22.382,7.618a.7.7,0,0,0-.721-.169l-16.113,5.4a.7.7,0,0,0-.1,1.292l6.872,3.533,3.533,6.872a.7.7,0,0,0,.625.382l.053,0a.7.7,0,0,0,.614-.477l5.4-16.113a.7.7,0,0,0-.169-.721Z" fill="#182e46"/>
                                                                </svg>  <span>Get Directions</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget '> 
                                                            <h5>PICS UK, Chelmsford</h5>
                                                            Head Quarters : 27, Duke<br/> 
                                                            Street, Chelmsford,<br/> 
                                                            England, CM1 1HT, UK
                                                            <a className='map-link' href='https://maps.app.goo.gl/fLKKPtgbhgVL3eCNA' target='_blank'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                                    <path id="Path_12433" data-name="Path 12433" d="M7.575,13.657,20.769,9.231,16.343,22.425l-2.874-5.59a.7.7,0,0,0-.3-.3ZM30,15A15,15,0,1,1,15,0,15.017,15.017,0,0,1,30,15ZM22.382,7.618a.7.7,0,0,0-.721-.169l-16.113,5.4a.7.7,0,0,0-.1,1.292l6.872,3.533,3.533,6.872a.7.7,0,0,0,.625.382l.053,0a.7.7,0,0,0,.614-.477l5.4-16.113a.7.7,0,0,0-.169-.721Z" fill="#182e46"/>
                                                                </svg>  <span>Get Directions</span>
                                                            </a>
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
                                                            <a className='map-link' href='https://maps.app.goo.gl/APoby4Foxrjwssyb7' target='_blank'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                                    <path id="Path_12433" data-name="Path 12433" d="M7.575,13.657,20.769,9.231,16.343,22.425l-2.874-5.59a.7.7,0,0,0-.3-.3ZM30,15A15,15,0,1,1,15,0,15.017,15.017,0,0,1,30,15ZM22.382,7.618a.7.7,0,0,0-.721-.169l-16.113,5.4a.7.7,0,0,0-.1,1.292l6.872,3.533,3.533,6.872a.7.7,0,0,0,.625.382l.053,0a.7.7,0,0,0,.614-.477l5.4-16.113a.7.7,0,0,0-.169-.721Z" fill="#182e46"/>
                                                                </svg>  <span>Get Directions</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-3 m-center mb-xs-20'>
                                                        <div className='footer-widget '> 
                                                            <h5>PICS UK, Chelmsford</h5>
                                                            Head Quarters : 27, Duke<br/> 
                                                            Street, Chelmsford,<br/> 
                                                            England, CM1 1HT, UK
                                                            <a className='map-link' href='https://maps.app.goo.gl/fLKKPtgbhgVL3eCNA' target='_blank'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                                    <path id="Path_12433" data-name="Path 12433" d="M7.575,13.657,20.769,9.231,16.343,22.425l-2.874-5.59a.7.7,0,0,0-.3-.3ZM30,15A15,15,0,1,1,15,0,15.017,15.017,0,0,1,30,15ZM22.382,7.618a.7.7,0,0,0-.721-.169l-16.113,5.4a.7.7,0,0,0-.1,1.292l6.872,3.533,3.533,6.872a.7.7,0,0,0,.625.382l.053,0a.7.7,0,0,0,.614-.477l5.4-16.113a.7.7,0,0,0-.169-.721Z" fill="#182e46"/>
                                                                </svg>  <span>Get Directions</span>
                                                            </a>
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

export default StudyAbroadIreland;