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
import whatsapp from '../images/whatsapp.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';
import whatsappSticky from '../images/whatsapp-big.png';
import mail from '../images/mail.png';
import call from '../images/call.png';
import usa_bg from '../images/study-usa-bg.jpg';
import highlights_bg from '../images/usa-bg.png';
import whatsappwhite from '../images/whatsapp-w.png';
import washington_icon from '../images/washington.png';
import months_icon from '../images/12-months.png';
import english_icon from '../images/english.png';
import topranker_icon from '../images/top-ranked.png';
import campus_icon from '../images/campus-culture.png';
import goodquality_icon from '../images/good-quality.png';
import highlight_icon_01 from '../images/icon-01.png';
import highlight_icon_02 from '../images/icon-02.png';
import highlight_icon_03 from '../images/icon-03.png';
import highlight_icon_04 from '../images/icon-04.png';
import highlight_icon_05 from '../images/icon-05.png';
import highlight_icon_06 from '../images/icon-06.png';
import education_system_usa from '../images/education-sytem-usa.jpg';
import popular_couses_usa from '../images/popular-course-usa.jpg';
import highlight_icon_07 from '../images/icon-07.png';
import admission_usa from '../images/admission-usa.jpg';
import highlight_icon_08 from '../images/icon-08.png';
import poststudy_usa from '../images/post-study-usa.jpg';
import workopportunities_usa from '../images/work-opportunities-usa.png';
import workopportunities_usa_02 from '../images/work-opportunities-usa-02.jpg';
import getintouch_usa from '../images/getin-touch-usa.jpg';
import opportunities_icon_01 from '../images/icon-09.png';
import opportunities_icon_02 from '../images/icon-10.png';
import opportunities_icon_03 from '../images/icon-11.png';
import opportunities_icon_04 from '../images/icon-12.png';
import opportunities_icon_05 from '../images/icon-13.png';
import opportunities_icon_06 from '../images/icon-14.png';
import map_usa from '../images/usa-map.png';
import exam_01 from '../images/exam-01.png';
import exam_02 from '../images/exam-02.png';
import exam_03 from '../images/exam-03.png';
import exam_04 from '../images/exam-04.png';
import exam_05 from '../images/exam-05.png';
import exam_06 from '../images/exam-06.png';
import exam_07 from '../images/exam-07.png';
import visa_usa from '../images/visa-usa.png';
import studentvisa_usa from '../images/student-visa.jpg';
import './style.css';
import "react-bootstrap-submenu/dist/index.css";
import '../css/verticals.min.css';
import { getheaderandfooterdata, getaboutusdata} from '../Actions/Pics';
import { useDispatch, useSelector } from "react-redux";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Pdf from '../documents/employee-company-handbook-ver-one.pdf';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import {Helmet} from "react-helmet";

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

const Dashboard = () => {
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
                metaDescription.setAttribute('content', 'Studying abroad is a transformative experience that can catapult your personal and professional trajectory. Our Best Study Abroad Education Consultants in Chennai are passionate about empowering ambitious students like you to reach new heights. With our unwavering support, you will navigate the entire study abroad process with confidence, positioning yourself for unparalleled opportunities that will shape the rest of your life.' || '');
            }
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', 'Phd in USA, Masters Degree Courses in USA, Universities in USA for Masters, Study Masters in USA, Phd Universities in USA, University for International Students in USA, USA University Without IELTS' || '');
            }
            }}><title>{ 'Study in USA: Best Study Abroad Education Consultants in Chennai' }</title>
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
                                                                Study in USA
                                                            </h1>
                                                            <h2 className="hs-line-2 text-center">
                                                                Best Study Abroad Education Consultants
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
                                                <li><a href='#about-usa' className={menuValue == "1"?'active':''} onClick={activeMenu("1")}>About USA</a></li>
                                                <li><a href='#usa-highlights' className={menuValue == "2"?'active':''} onClick={activeMenu("2")}>USA Highlights</a></li>
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

                                <section className='small-section pb-40' id='about-usa'>
                                    <div className='container relative'>
                                    
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-5'>
                                                <h3 className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                    About USA
                                                </h3>
                                                <div className='section-text mb-20'>
                                                    The USA has always been the top choice for higher studies among international students. According to the US Citizenship and Immigration Services (USCIS), over 465,700 Indian students pursued higher education in the USA in 2022, marking a 19% increase from the previous year. With the highest number of top-ranked universities globally, the USA attracts students eager to experience its world-class education system. Many international students aim to <strong>study Masters in USA</strong> or pursue a <strong>PhD in USA</strong> at prestigious institutions.
                                                </div>

                                                <h3 className='fw-700 italic mb-10'><b>Studying in the USA</b></h3>
                                                <div className='section-text'>
                                                    <p>US universities have established themselves as leaders in STEM courses. Students worldwide prefer the USA for higher education in science, technology, engineering, and mathematics. Besides STEM, students interested in business, management, and the arts can also find top <strong>Universities in USA for Masters</strong> and other advanced programs. The <strong>Best Study Abroad Education Consultants in Chennai</strong> can guide students in selecting the ideal <strong>University for International Students in USA</strong> that suits their academic goals.</p>
                                                </div>
                                            </div>

                                            <div className='col-md-7 mt-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-700 italic mb-10'><b>Key Facts About USA</b></h3>

                                                    <div className='row mb-20'>
                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>963+</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Universities &<br/> Colleges</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>4.66 L</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Indian Students<br/> at 2022</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>20 Hrs</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Week Part Time<br/> Work Permit</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-10'>
                                                                <div className='count'>2%</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Economic Growth<br/> Rate at 2023</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-10'>
                                                                <div className='count'>334.23M</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Total Population<br/> at 2023</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={washington_icon} alt="WASHINGTON" />
                                                                <div>
                                                                    <div className='location'>WASHINGTON</div>
                                                                    <div className='white'>D.C Capital</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={months_icon} alt="12 MONTHS" />
                                                                <div>
                                                                    <div className='location'>12 MONTHS</div>
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

                                        <div className='row mt-30'>
                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={topranker_icon} alt="Top Ranked and Reputed Universities" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Top Ranked and Reputed Universities</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Diverse range of world-renowned institutions, offering cutting-edge program.</li>
                                                            <li>Access to top-notch faculty, resources, and extensive alumni nebworks.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={campus_icon} alt="Campus Culture Safety" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Campus Culture<br/> Safety</h3>
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
                                                            <img src={goodquality_icon} alt="Good Quality of Life" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Good Quality of<br/> Life</h3>
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
                                }} id='usa-highlights'>
                                    <div className='container-1400 relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-40 mb-xs-30">
                                            Study in USA Highlights
                                        </h3>
                                        <div className='row mb-80'>
                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Universities in<br/> the USA</div>
                                                    <div className='icon'><img src={highlight_icon_01} /></div>
                                                    <div className='desc'>3,000+</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Average Living<br/> Expense</div>
                                                    <div className='icon'><img src={highlight_icon_02} /></div>
                                                    <div className='desc'>INR 10.5 Lakhs<br/> (Per annum) </div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Popular Courses<br /> in USA</div>
                                                    <div className='icon'><img src={highlight_icon_03} /></div>
                                                    <div className='desc'>MS | MBA |<br/> B.Tech | MIM </div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Part-Time Work <br/>Allowance</div>
                                                    <div className='icon'><img src={highlight_icon_04} /></div>
                                                    <div className='desc'>20 Hours/Week</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Work Permit In<br/> USA Post-Study</div>
                                                    <div className='icon'><img src={highlight_icon_05} /></div>
                                                    <div className='desc'>12 Months</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>USA Study Visa<br/>Cost</div>
                                                    <div className='icon'><img src={highlight_icon_06} /></div>
                                                    <div className='desc'>INR 15,430</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='container'>
                                        <div className='row d-flex align-items-center'>
                                            <div className='col-md-8'>
                                                <h3 className="hs-line-3 color text-left font-alt mb-10 mb-xs-10">
                                                    Education System in USA
                                                </h3>
                                                <div className='section-text mb-30'>
                                                    US Education System is categorised into different groups. First, it is primary school followed by middle school, and then post-secondary education. When it comes to the higher education system in the USA,
                                                </div>

                                                <h3 className='fw-600 italic mb-20'>There are 4 types of institutions in the</h3>

                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>USA namely State College or Universities</li>
                                                                <li>Community Colleges</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>Private Colleges of Universities</li>
                                                                <li>Technology Institutes.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
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
                                            Top Courses in USA
                                        </h3>
                                        <div className='section-text text-center m-left mb-40 mb-xs-20'>
                                            Business and management, engineering, mathematics, computer science and social sciences are<br/> some of the popular courses in the USA. US universities are known to offer STEM<br/> (Science, Technology, Engineering, and Mathematics) courses.
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-6 mb-xs-20'>
                                                <div className='img-round'><img src={popular_couses_usa} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-600 italic mb-20'>Some of the popular courses in the USA are:</h3>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>MBA</li>
                                                                    <li>Computer Science</li>
                                                                    <li>Mechanical Engineering</li>
                                                                    <li>Electrical Engineering</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Computer Engineering</li>
                                                                    <li>Finance</li>
                                                                    <li>Biotechnology</li>
                                                                    <li>Data Science and Analytics</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mb-60 mb-xs-20'>
                                            <div className='col-md-12'>
                                                <div className='highlights-2'>
                                                    <div className='d-flex align-items-center justify-content-center mb-20'>
                                                        <div className='me-4'>
                                                            <img src={highlight_icon_07} alt="USA Permanent Residence Permit" />
                                                        </div>
                                                        <h3 className='alt-services-title'>USA Permanent Residence Permit</h3>
                                                    </div>

                                                    <div className='section-text'>
                                                        A USA Permanent Residence card or a green card in the USA gives you official immigration status in the United States. It entitles you to certain rights and responsibilities. A green card is required if you want to become a US citizen. Your status as an immigrant or as a citizen determines who you can bring (sponsor) to live and work in the US. If you are a permanent resident, you can sponsor your spouse and unmarried children.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-8'>
                                                <h3 className='fw-600 italic mb-20'>Admission Requirements to Study in US Universities</h3>
                                                <div className='section-text mb-30 mb-xs-20'>
                                                    Admission requirements for a UG and PG program are different for US universities. Below we have mentioned the general admission requirements to study at USA universities.
                                                </div>

                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>Academic Transcripts</li>
                                                                <li>Standardized test scores(SAT or ACT)</li>
                                                                <li>Standardized test scores – GMAT,</li>
                                                                <li>English proficiency test scores (TOEFL, iTEP, IELTS, PTE Academic)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>Essay</li>
                                                                <li>Statement of purpose</li>
                                                                <li>Letter of Recommendations</li>
                                                                <li>Copy of your valid passport</li>
                                                                <li>Proof of finances</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='col-md-4 mt-xs-20'>
                                                <div className='img-round'><img src={admission_usa} className='img-fluid' /></div>
                                            </div>
                                        </div>

                                        <div className='row mb-60 mb-xs-20'>
                                            <div className='col-md-12'>
                                                <div className='highlights-2'>
                                                    <div className='d-flex align-items-center justify-content-center mb-20'>
                                                        <div className='me-4'>
                                                            <img src={highlight_icon_08} alt="Scholarships to Study in USA" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Scholarships to Study in USA</h3>
                                                    </div>

                                                    <div className='section-text'>
                                                        Candidates looking for scholarships to study in the USA can check out the most comprehensive study-abroad scholarships on our website. Our website currently enlists over 200 scholarships spread across 11 Countries amounting to over INR 1,315 crores in the total amount.
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
                                                    <h3 className='fw-600 italic mb-20'>Post-Study Work Permit in USA</h3>
                                                    <div className='section-text'>
                                                        <p>International students require an F1-Visa to <strong>study Masters in USA</strong> or enroll in other programs. This visa allows students to stay for 60 days post-graduation. F1 visa holders can apply for <strong>Optional Practical Training (OPT)</strong>, which permits them to work in the USA for a year after completing their studies. Those who complete STEM courses can extend OPT for an additional two years. Many students choose the USA for higher education due to these post-study work opportunities. For students looking to study at a <strong>USA University Without IELTS</strong>, there are several institutions that accept alternate English proficiency tests.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section faqs pb-0' id='faqs'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center m-left font-alt mb-40 mb-xs-30">
                                            Study in USA FAQs
                                        </h3>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Accordion defaultExpanded>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                    >
                                                    <Typography className='Lato faq-question'>When can Indian students apply for admission to US universities?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        There are two intakes in USA, the main US intake is Fall intake and the second intake is Spring intake. There is also a Summer intake in the USA but very few full-time course options are available during that time, it is mostly for short-term courses or commonly referred to as summer programs. International students can apply for Fall intake in USA during the month of September each year and applicants begin preparing from July onwards. 90% of the US universities have admissions open during the Fall intake. The Spring intake of USA also opens admissions for international students but for limited courses and universities. Thus, those who are able to apply by Fall intake can take admissions or if not, then apply during Spring intake.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Are all US universities test-optional for undergraduate admissions?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        No, not all US universities are test-optional for
                                                        undergraduate admissions, most of the Ivy League
                                                        schools like - Yale University, and Princeton University do
                                                        require an SAT or ACT score. There are universities like
                                                        Columbia University which have officially announced the
                                                        scrapping of SAT and ACT scores for undergraduate
                                                        admissions. Some US universities may require SAT or ACT
                                                        scores based on admission to a specific course.
                                                        Applicants are required to check the test optionality option
                                                        if it is available or not
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel3-content"
                                                    id="panel3-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How much is the acceptance rate for the top 10 US universities?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Top universities in USA acceptance rates for the 2023 intake are as follows:
                                                        • Stanford University: 3.75%<br/>
                                                        • Harvard University: 4.7%<br/>
                                                        • Columbia University: 5.4%<br/>
                                                        • Princeton University: 5.5%<br/>
                                                        • CalTech: 6.4%<br/>
                                                        • Massachusetts Institute of Technology: 6.7%<br/>
                                                        • University of Chicago: 7.3%
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel4-content"
                                                    id="panel4-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Which are some of the top paying jobs in USA?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Some of the top-paying jobs in the USA are majorly in
                                                        Finance and Technology related professions. The following
                                                        occupations in the USA are highly paid and are also
                                                        popular jobs in USA
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel5-content"
                                                    id="panel5-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How to prepare F-1 interview for US student visa?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        The applicants need to be confident and must be able to
                                                        answer all questions with honesty when going in for an F-1 visa
                                                        interview. Applicants must have full knowledge of their course
                                                        and US university they have applied to. They must show interest
                                                        in coming back to home country and must explain well as to
                                                        why they wish to study in USA. Get full details about USA F-1 Visa
                                                        Interview Guide for international students and also check out US
                                                        Student Visa Interview Tips.
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
                                            Intake in USA
                                        </h3>
                                        <div className='section-text text-center mb-50 mb-xs-30'>
                                            <p>Planning to study in the USA requires proper preparation and organization. This guide will help students navigate the application timelines for <strong>Fall 2024 US intake</strong> and <strong>Spring 2024 US intake</strong>. Understanding the right time to apply ensures a smooth admission process into the best <strong>PhD Universities in USA</strong> or master's programs.</p>
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
                                                                        Wide range of programs and courses to choose from
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Most number of scholarships and financial aid
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Better possibilities of getting part-time jobs and internships during the break
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF FALL INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        High competition, seats fill out fast
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        The cost of living may be higher
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Difficult to get accommodation due to the high demand
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Fall Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="APR – JUN">
                                                                    <div className='title'>Shortlist the universities based on preference</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Gather complete information on finances, loans, scholarships</li>
                                                                            <li>Check for courses on offer</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUL – AUG">
                                                                    <div className='title'>Apply and appear for necessary exams</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Give standardized tests based on level of course admission</li>
                                                                            <li>Also appear for ELP tests based on requirement</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="SEP – DEC">
                                                                    <div className='title'>Begin the application process</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Universities will begin accepting admission applications from applicants</li>
                                                                            <li>Adhere to the deadlines</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JAN – FEB">
                                                                    <div className='title'>Deadline for application and document uploading</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Document uploading deadlines close</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="FEB – APR">
                                                                    <div className='title'>Admission decisions from universities</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Accept admission offer</li>
                                                                            <li>Prepare necessary documents for I-20 process</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="MAY – JUL">
                                                                    <div className='title'>Acceptance of I-20</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Apply for student visa for USA</li>
                                                                            <li>Prepare for interviews</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="AUG">
                                                                    <div className='title'>Make travel plans</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Get ready for departure</li>
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
                                                                        If missed on applying in July, applicants can try in Spring for the same year
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Competition is lower in comparison to Fall intake
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Batch sizes for Spring intake are usually smaller
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF SPRING INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Acceptance cannot be deferred in Spring, new applications will be required for next academic year
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Lower financial aids are offered during this intak
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Courses on offer are usually lower for Spring in comparison to Fall intake
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Spring Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="JUL - AUG">
                                                                    <div className='title'>Begin shortlisting universities and courses</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Shortlist two to three US universities you wish to apply to</li>
                                                                            <li>Check course availability for Spring intake</li>
                                                                            <li>Also understand the admission requirements</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="SEP - OCT">
                                                                    <div className='title'>Prepare and appear for the exams</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Appear for standardised tests based on level of study</li>
                                                                            <li>Also appear for English Language Proficiency tests</li>
                                                                            <li>Keep some scope for reappearing for the exams if needed</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="OCT">
                                                                    <div className='title'>Start applying to the universities</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Check for deadlines and begin your applications to the shortlisted universities</li>
                                                                            <li>Check out the possible scholarship options and apply</li>
                                                                            <li>Adhere to the course, university and scholarship application deadlines.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="NOV - DEC">
                                                                    <div className='title'>Wait for admission decisions</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>In case offers are released, accept or reject based on preference</li>
                                                                            <li>Apply for I-20 and book visa appointments in case of offer acceptance</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="DEC">
                                                                    <div className='title'>Make travel plans for USA</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>When the student visa is approved, applicants can book their tickets</li>
                                                                            <li>Prepare to fly to US to study</li>
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

                                <section className='page-section bg-pos-topcenter bg-dark-alfa bg-scroll' style={{
                                        background: `url(${studentvisa_usa})`,
                                }} id='for-visa'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-end'>
                                            <div className='col-md-5'>
                                                <h3 className="hs-line-3 white text-left font-alt mb-20 mb-xs-10">
                                                    Student Visa in USA
                                                </h3>
                                                <div className='section-text white'>
                                                    <p>There are different types of student visas for studying in the USA, with the F1 visa being the most common. Students pursuing a <strong>Masters Degree Courses in USA</strong> or a <strong>PhD in USA</strong> require an F1 visa if their program exceeds 18 hours of study per week. For vocational or technical courses, an M1 visa is required.</p>
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
                                                <div className='text-center'><img src={visa_usa} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section bg-pos-topcenter fixed-height-small bg-scroll pb-0 pb-xs-20' style={{
                                        background: `url(${map_usa})`,
                                }}>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-60 mb-xs-10">
                                            Exams Required to Study in USA
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
                                <section className='small-section pt-0 pb-xs-20'>
                                    <div className='container relative'>

                                        <h3 className="hs-line-3 color text-center font-alt mb-60 mb-xs-10">
                                            Test Preparation for Studying in the USA
                                        </h3>

                                        <div className='row d-flex justify-content-center text-center'>
                                            <div className='col-md-8'>
                                                <div className='section-text'>
                                                    <p>Students planning to study in the USA often need to take standardized tests like the <strong>TOEFL practice test</strong>, <strong>ETS TOEFL</strong>, <strong>TOEFL preparation</strong>, and <strong>TOEFL mock test</strong> to meet language proficiency requirements. Many universities also require GRE scores, making <strong>GRE registration</strong>, <strong>GRE vocabulary</strong>, and <strong>GRE online course</strong> essential for applicants. Free resources such as <strong>TOEFL practice test free</strong>, <strong>TOEFL reading practice</strong>, <strong>TOEFL speaking practice</strong>, and <strong>GRE preparation online free</strong> can help students achieve competitive scores.</p>
                                                    <p>For IELTS test-takers, resources like <strong>IELTS mock test free</strong>, <strong>IELTS online classes</strong>, <strong>IELTS online test free</strong>, <strong>IELTS mock test online</strong>, <strong>IELTS training online</strong>, and <strong>IELTS practice test free</strong> can assist in exam preparation. These tests play a crucial role in securing admission to top universities in the USA.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-pos-topcenter bg-scroll pb-100 pt-xs-0' style={{
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
                                                        <h3 className="hs-line-3 color text-left font-alt mb-20 mb-xs-30">
                                                            Work Opportunities in USA
                                                        </h3>
                                                        <div className='section-text mb-30'>
                                                            Presently, there are 8.7 million jobs available in USA after closing of October 2023. Thus, there are ample job opportunities for Indian students in USA.
                                                        </div>

                                                        <h3 className='fw-700 italic mb-30'>Some of the most popular job sectors in USA for employment are</h3>

                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_01} /></div>
                                                                            <div>Science & Technology</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_02} /></div>
                                                                            <div>Real Estate</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_03} /></div>
                                                                            <div>Education</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_04} /></div>
                                                                            <div>Medicine & Healthcare</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_05} /></div>
                                                                            <div>Business  Development & Analytics</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_06} /></div>
                                                                            <div>Retail</div>
                                                                        </li>
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
                                                <div className='m-center mt-xs-10'>
                                                    <button className='buttonlink' onClick={() => window.location = 'tel:+919444094442'}>
                                                        +91 94440 94442
                                                    </button>
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

                                            <div className="footer-copy pt-20 pb-10 m-center">
                                                COPYRIGHT@ 2025 PICS Global Consultants Ltd. Trading as PICS Global  |  REG NO: 13199591 
                                            </div>
                                            <div className='pb-0'>
                                                <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                                                    <button trailingIcon="picture_as_pdf" className='noBtn' label="Resume">
                                                        Employee Company Handbook (Internal)
                                                    </button>
                                                </a>
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