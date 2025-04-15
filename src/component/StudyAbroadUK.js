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
import whatsappSticky from '../images/whatsapp-big.png';
import youtube from '../images/youtube.png';
import mail from '../images/mail.png';
import call from '../images/call.png';
import usa_bg from '../images/uk/banner-bg.jpg';
import highlights_bg from '../images/usa-bg.png';
import whatsappwhite from '../images/whatsapp-w.png';
import washington_icon from '../images/washington.png';
import months_icon from '../images/12-months.png';
import english_icon from '../images/english.png';
import topranker_icon from '../images/uk/higher-education.png';
import campus_icon from '../images/campus-culture.png';
import goodquality_icon from '../images/good-quality.png';
import highlight_icon_01 from '../images/icon-01.png';
import highlight_icon_02 from '../images/icon-02.png';
import highlight_icon_uk from '../images/uk/cost-of-studying.png';
import highlight_icon_03 from '../images/icon-03.png';
import highlight_icon_04 from '../images/icon-04.png';
import highlight_icon_05 from '../images/icon-05.png';
import highlight_icon_06 from '../images/icon-06.png';
import education_system_usa from '../images/uk/education-system.jpg';
import admission_requirement from '../images/uk/admission-requirement.jpg';
import highlight_icon_07 from '../images/uk/uk-scholarship.png';
import admission_usa from '../images/admission-usa.jpg';
import highlight_icon_08 from '../images/icon-08.png';
import poststudy_usa from '../images/post-study-usa.jpg';
import workopportunities_usa from '../images/work-opportunities-usa.png';
import workopportunities_usa_02 from '../images/uk/workopportunities_uk.jpg';
import getintouch_usa from '../images/getin-touch-usa.jpg';
import opportunities_icon_01 from '../images/icon-09.png';
import opportunities_icon_02 from '../images/icon-10.png';
import opportunities_icon_03 from '../images/icon-11.png';
import opportunities_icon_04 from '../images/icon-12.png';
import opportunities_icon_05 from '../images/icon-13.png';
import opportunities_icon_06 from '../images/icon-14.png';
import opportunities_icon_07 from '../images/uk/icon-01.png';
import opportunities_icon_08 from '../images/uk/icon-02.png';
import opportunities_icon_09 from '../images/uk/icon-03.png';
import opportunities_icon_10 from '../images/uk/icon-04.png';
import opportunities_icon_11 from '../images/uk/icon-05.png';
import map_usa from '../images/usa-map.png';
import exam_01 from '../images/exam-01.png';
import exam_02 from '../images/exam-02.png';
import exam_03 from '../images/exam-03.png';
import exam_04 from '../images/exam-04.png';
import exam_05 from '../images/exam-05.png';
import exam_06 from '../images/exam-06.png';
import exam_07 from '../images/exam-07.png';
import visa_uk from '../images/uk/document-required.png';
import studentvisa_usa from '../images/uk/student-visa.jpg';
import Pdf from '../documents/employee-company-handbook-ver-one.pdf';
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

const StudyAbroadUK = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                metaDescription.setAttribute('content', 'Studying abroad is a once-in-a-lifetime chance to expand your mindset, build an international network, and accelerate your growth. Our Best Study Abroad Consultants in Chennai are your dedicated partners, drawing on decades of experience to guide you through every step. Whether you aspire to study at an Ivy League institution or a leading European university, we will create a personalized roadmap to help you overcome obstacles and achieve your goals.' || '');
            }
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', 'UK Universities for International Students, Masters in UK, MBA in UK for Indian Students, UK Universities for Masters, Master Degree in UK, UK Scholarships, Best Colleges in London, UK Scholarships for Indian Students' || '');
            }
            }}><title>{ 'Study in UK: Best Study Abroad Consultants in Chennai' }</title>
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
                                                                Study in UK
                                                            </h1>
                                                            <h2 className="hs-line-2 text-center">
                                                                Best Study Abroad Consultants
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
                                                <li><a href='#about-uk' className={menuValue == "1"?'active':''} onClick={activeMenu("1")}>About UK</a></li>
                                                <li><a href='#uk-highlights' className={menuValue == "2"?'active':''} onClick={activeMenu("2")}>UK Highlights</a></li>
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

                                <section className='small-section pb-40' id='about-uk'>
                                    <div className='container relative'>
                                    
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-5'>
                                                <h3 className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                    About UK
                                                </h3>
                                                <div className='section-text mb-20'>
                                                    The UK offers an excellent academic experience for students looking to learn in world-leading universities known for their high quality of academics and research. As per the Ministry of External Affairs data, of Indian students studying abroad, 55,465 Indian students were studying in the UK in 2022. These statistics reveal that the UK is becoming a popular destination for international students. Some of the UK Universities for International Students, such as Imperial College London and University College London, have had academic and research ties with Indian universities for a long period. Universities in the UK have recorded an excellent career outcome rate, making it an ideal choice for those pursuing a Master Degree in UK or an MBA in UK for Indian Students.
                                                </div>

                                                <div className='section-text'>
                                                    According to the ‘What Do Graduates Do?’ report from Prospects and AGCAS, career outcomes 15 months after graduation in the UK for first-degree graduates were as follows: 57.3% were working full-time in the UK, 11.4% were working part-time, 10.6% were working and studying, 9.2% pursued further studies, 5.7% engaged in other activities
                                                    <div className='read-more' onClick={handleOpen}>Read more</div>
                                                </div>

                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                    >
                                                    <Box sx={style}>
                                                        <Typography className='modal-bx-body-2' id="modal-modal-description" sx={{ mt: 2 }}>
                                                        <div className='section-text'>
                                                        <p>The UK offers an excellent academic experience for students looking to learn in world-leading universities known for their high quality of academics and research. As per the Ministry of External Affairs data, of Indian students studying abroad, 55,465 Indian students were studying in the UK in 2022. These statistics reveal that the UK is becoming a popular destination for international students. Some of the UK Universities for International Students, such as Imperial College London and University College London, have had academic and research ties with Indian universities for a long period. Universities in the UK have recorded an excellent career outcome rate, making it an ideal choice for those pursuing a Master Degree in UK or an MBA in UK for Indian Students.</p> 

                                                        <p>According to the ‘What Do Graduates Do?’ report from Prospects and AGCAS, career outcomes 15 months after graduation in the UK for first-degree graduates were as follows: 57.3% were working full-time in the UK, 11.4% were working part-time, 10.6% were working and studying, 9.2% pursued further studies, 5.7% engaged in other activities, and 5.9% were unemployed or about to start work. This makes the UK an attractive option for international students looking for career growth.</p>
                                                        
                                                        <h3 className='fw-700 italic mb-10'><b>Top Reasons to Study in the UK</b></h3>
                                                        <p>Studying abroad is a life-changing decision for every student. Choosing the Best Study Abroad Consultants in Chennai can help students navigate their options. Below are a few reasons to consider the UK for higher studies:</p>

                                                        <p><b>Academic Quality:</b> According to the QS World University Rankings 2023, four UK Universities for Masters are in the top 10: University of Cambridge, University of Oxford, Imperial College London, and University College London. The Times World University Rankings 2023 places the University of Oxford in the 1st position. These rankings showcase the high quality of education in the UK.</p>

                                                        <p><b>Research Excellence:</b> The Research Excellence Framework 2021 assessed research work at 157 UK universities. Research quality was categorized as world-leading (41%), internationally excellent (43%), internationally recognized (14%), and nationally recognized (2%). This makes the UK an excellent choice for students pursuing research-intensive degrees.</p>

                                                        <p><b>Student-friendly Destination:</b> In the academic year 2020-21, nearly 605,000 international students, including those from the EU and non-EU regions, were studying in UK higher education institutions. Nearly 16% (approximately 55,000) of new enrollments were from India, showcasing the UK’s growing appeal as a study abroad destination.</p>

                                                        <p><b>Scholarships:</b> UK Scholarships provide financial aid to international students. Some of the Best Colleges in London offer scholarships like International Scholarships Award, Commonwealth Scholarship and Fellowship, Chevening Scholarships, GREAT Scholarships, and Charles Wallace India Trust Scholarships.</p> 

                                                        <p><b>Leisure and Travel:</b> The UK offers a rich cultural experience, with historical landmarks, music festivals, diverse cuisines, and other cultural events. Studying at prestigious institutions allows students to be part of this heritage.</p>
                                                        </div>
                                                        </Typography>
                                                    </Box>
                                                </Modal>
                                            </div>

                                            <div className='col-md-7 mt-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-700 italic mb-10'><b>Key Facts About UK</b></h3>

                                                    <div className='row mb-20'>
                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>167+ </div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Universities &<br/> Colleges</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>55.47K</div>
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
                                                                <div className='count'>1%</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Economic Growth<br/> Rate at 2023</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-10'>
                                                                <div className='count'>67.03M</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Total Population<br/> at 2023</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={washington_icon} alt="LONDON" />
                                                                <div>
                                                                    <div className='location'>LONDON</div>
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

                                        <div className='row mt-30'>
                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={topranker_icon} alt="Reputed Higher Education" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Reputed Higher<br/> Education</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Globally recognized degrees and top ranking colleges</li>
                                                            <li>Cutting-edge research opportunitios with good number of course options</li>
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
                                                            <li>Robust Safety Measures</li>
                                                            <li>Vibrant Student life and inclusive Environment</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={goodquality_icon} alt="Better Quality of Life" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Better Quality of<br/> Life</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Accessible healthcare and public services in UK for students.</li>
                                                            <li>Abundont cultural experiences enhance overall lifestyle for indians</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-pos-topcenter bg-scroll pb-100 pb-xs-50' style={{
                                        background: `url(${highlights_bg})`,
                                }} id='uk-highlights'>
                                    <div className='container-1400 relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-40 mb-xs-30">
                                            Study in UK Highlights
                                        </h3>
                                        <div className='row mb-80'>
                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Universities in<br/> the UK</div>
                                                    <div className='icon'><img src={highlight_icon_01} /></div>
                                                    <div className='desc'>160+</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Cost of Studying<br/> in the UK</div>
                                                    <div className='icon'><img src={highlight_icon_uk} /></div>
                                                    <div className='desc'>£8,000 To £38,000<br/> (Per Year)</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Average Living<br/> Expense</div>
                                                    <div className='icon'><img src={highlight_icon_02} /></div>
                                                    <div className='desc'>£1,000 To £1,800<br/> (Per annum) </div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Top 5 Universities<br/> (QS)</div>
                                                    <div className='icon'><img src={highlight_icon_03} /></div>
                                                    <div className='desc'>Cambridge, Oxford,<br/> Harvard , Stanford</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Part-Time<br/> Work Allowance</div>
                                                    <div className='icon'><img src={highlight_icon_04} /></div>
                                                    <div className='desc'>20 Hours/Week</div>
                                                </div>
                                            </div>

                                            <div className='col-6 col-md-2 mb-xs-10'>
                                                <div className='highlights'>
                                                    <div className='desc'>Post-study Work Visa (PSW UK or Graduate Route Visa)</div>
                                                    <div className='icon'><img src={highlight_icon_06} /></div>
                                                    <div className='desc'>2 Yrs (3 Yrs In Case Of Doctoral Qualification)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='container'>
                                        <div className='row d-flex align-items-center'>
                                            <div className='col-md-8'>
                                                <h3 className="hs-line-3 color text-left font-alt mb-10 mb-xs-10">
                                                    Education System in UK
                                                </h3>
                                                
                                                <h3 className='fw-600 italic mb-20'>The education system in the UK includes</h3>
                                                <div className='section-text mb-30'>
                                                    <ul>
                                                        <li><strong>Early Years Education</strong>: Available for children up to 5 years of age.</li>
                                                        <li><strong>Primary Education</strong>: Covers children aged 5 to 11 years and is divided into two key stages.</li>
                                                        <li><strong>Secondary Education</strong>: Covers students aged 11 to 16 years, leading to external exams like GCSE.</li>
                                                        <li><strong>Further Education</strong>: For students aged 16 to 18, covering vocational and non-advanced courses.</li>
                                                        <li><strong>Higher Education</strong>: Includes undergraduate and postgraduate degrees, such as a Masters in UK.</li>
                                                    </ul>
                                                    <p>The UK’s education system is similar to India’s, making it easier for Indian students to adjust.</p>
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
                                            Top Courses in UK
                                        </h3>
                                        <div className='section-text text-center m-left mb-40 mb-xs-20'>
                                            Universities in the UK offer a wide range of courses that cover every available academic discipline.<br/> However, certain courses are very popular amongst students. The table given below provides a list of<br/> popular academic disciplines and various courses that are offered under those disciplines:
                                        </div>

                                        <div className='row mb-60 mb-xs-20'>
                                            <div className='col-md-12 mb-xs-20'>
                                                <div className='custom-table'>
                                                    <table>
                                                        <tr>
                                                            <th>Business & Administrative  studies</th>
                                                            <td>Economics</td>
                                                            <td>Finance & Accountancy</td>
                                                            <td>Business & Management Studies</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Engineering, Technology &  Mathematics</th>
                                                            <td>Computer 
                                                            Science</td>
                                                            <td>Mathematics</td>
                                                            <td>Civil Engineering</td>
                                                            <td>Electrical & Electronic Engineering</td>
                                                            <td>Mechanical Engineering</td>
                                                            <td>Chemical Engineering</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Humanities</th>
                                                            <td>History</td>
                                                            <td>Languages</td>
                                                            <td>Philosophy</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Natural Science</th>
                                                            <td>Biology</td>
                                                            <td>Physics</td>
                                                            <td>Chemistry</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Social Science</th>
                                                            <td>Sociology</td>
                                                            <td>Law</td>
                                                            <td>Politics</td>
                                                            <td>Education</td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Creative Arts</th>
                                                            <td>Art and Design</td>
                                                            <td>Media</td>
                                                            <td>Performing Arts</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-8 mb-xs-20'>
                                                <h3 className='fw-600 italic mb-20'>Admission Requirements to Study in UK Universities</h3>
                                                <div className='section-text mb-30 mb-xs-20'>
                                                    Admission requirements to study in UK Universities vary depending on the course and academic level of the students. However, the following points will provide you an overview of requirements to study in the UK: Academic Transcripts
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>Formal Schooling</li>
                                                                <li>Graduate/ Postgraduate Degree (if application)</li>
                                                                <li>Academic Transcripts</li>
                                                                <li>Test Score of SAT/ GMAT/ GRE (as per the course)</li>
                                                                <li>English proficiency test scores of IELTS/ TOEFL/ PTE/ Other (as per the course)</li>
                                                                <li>Personal Statement (UCAS Personal Statement in case of undergraduate applicants)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>Essays</li>
                                                                <li>Resume</li>
                                                                <li>Letters of Recommendation</li>
                                                                <li>Portfolio (in case of creative courses)</li>
                                                                <li>ID Proofs</li>
                                                                <li>Financial Proofs</li>
                                                                <li>Medical Proofs</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='inner-column'>
                                                    <div className='img-round'><img src={admission_requirement} className='img-fluid' /></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mb-60 mb-xs-20'>
                                            <div className='col-md-12'>
                                                <div className='highlights-2'>
                                                    <div className='d-flex align-items-center justify-content-center mb-20'>
                                                        <div className='me-4'>
                                                            <img src={highlight_icon_07} alt="Scholarships to Study in UK" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Scholarships to Study in UK</h3>
                                                    </div>

                                                    <div className='section-text'>
                                                        Scholarships are a great way to reduce your cost of studying abroad. In addition, they are a recognition of your academic and/ or extracurricular talent as well. Students can apply for a number of scholarships in the UK. Some of the scholarships are offered by the Universities, while others are offered by organizations. Some of the top scholarships to study in UK include.
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
                                                    <h3 className='fw-600 italic mb-20'>Post-Study Work Permit in UK</h3>
                                                    <div className='section-text'>
                                                        International students who complete a Master Degree in UK or an MBA in UK for Indian Students can apply for a UK Graduate Route Visa (PSW UK). This visa allows them to stay and work for two years post-graduation (three years for doctoral students). The UK post study work visa requires an application fee of £715 and an annual healthcare surcharge of £624. After the visa expires, students can apply for a skilled work visa or Tier 2 general work visa.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section faqs pb-0' id='faqs'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center m-left font-alt mb-40 mb-xs-30">
                                            Study in UK FAQs
                                        </h3>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Accordion defaultExpanded>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Is UK good for studies?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        UK to study abroad is one of the most sought-after destinations for pursuing academics and research. UK universities have been well-received by various ranking indices such as QS World University Rankings and Times Higher Education Rankings. 4 Universities have made it to the top 10 list on the QS rankings. In addition, UK universities have performed very well on Research Excellence Framework for their research quality and output. As a destination, UK consists of more than 55,000 Indian students and more than 605,000 international students. It is a multicultural country that has rich heritage and leisure and travel options. Students, who wish to study abroad, can definitely consider the UK as an option.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Can you give me a brief on UK student visa?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        UK student visa allows a student to stay in the UK and
                                                        pursue an academic course for up to 5 years. In order to
                                                        apply for UK student visa, a student needs to have an
                                                        unconditional offer to pursue a course with a licensed
                                                        student sponsor. For this purpose, he/ she needs to
                                                        provide Confirmation of Acceptance for Studies (CAS).
                                                        Other conditions include proficiency in English, medical
                                                        tests, financial proof, etc. UK student visa fee stands at
                                                        £363, if a student is applying from outside the UK.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel3-content"
                                                    id="panel3-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How can I stay back in the UK after completing my academics?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Students, who wish to stay back in the UK after completion of
                                                        their course, need to apply for UK post study work visa (PSW
                                                        UK) or UK Graduate Visa. With the UK Graduate Visa, students
                                                        can stay back in the UK for 2 years (3 years in case if they
                                                        have completed a Doctoral qualification) and work.
                                                        Application fee for UK Graduate Visa is £715. In addition, you
                                                        are required to pay an annual healthcare surcharge of £624.
                                                        After the expiry of the Graduate Visa, you can apply for other
                                                        relevant visa such as Tier-2 visa.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel4-content"
                                                    id="panel4-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Which are the top Universities in the UK?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        As per the QS World University Rankings and Times Higher
                                                        Education Rankings, following are the top universities in the
                                                        UK: University of Cambridge, University of Oxford, Imperial
                                                        College London, University College London, University of
                                                        Edinburgh, University of Manchester, King’s College London,
                                                        London School of Economics, University of Bristol, and
                                                        University of Warwick. All these Universities have performed
                                                        well on academics and research. In addition to academics,
                                                        Universities in the UK offer various facilities such as labs,
                                                        accommodation, sports and recreation facilities, etc.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel5-content"
                                                    id="panel5-header"
                                                    >
                                                    <Typography className='Lato faq-question'>What is the approximate cost of living in the UK for international students?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato faq-answer'>
                                                                International students choosing UK to study abroad can expect
                                                                to spend anywhere between £1,000 and £1,800 per month
                                                                depending on their location, type of accommodation, dietary
                                                                habits, lifestyle, course requirements, University fees (such as
                                                                library fees, gym fees, etc.), leisure activities, travel, etc.
                                                                Students can apply for scholarships and/ or work part-time in
                                                                order to reduce their cost of living in the UK. Students must note
                                                                that they are allowed to work for a maximum of 20 hours per
                                                                week when their classes are in session.
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
                                            Intake in UK
                                        </h3>
                                        <div className='section-text text-center mb-50 mb-xs-30'>
                                            Overseas students wishing to apply for higher education in the UK should note that there are generally three available intakes - Fall or September intake, Winter or January intake, and Summer or May intake. The article explains the step-by-step procedure that prospective applicants should follow before applying for a university/college in the UK.
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <TabContext value={value}>
                                                    <Box className='customTabs d-flex justify-content-center'>
                                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                        <Tab label="September Intake & Timeline" value="1" />
                                                        <Tab label="Winter Intake &  Timeline" value="2" />
                                                    </TabList>
                                                    </Box>
                                                    <TabPanel value="1">
                                                        <div className='row mb-50'>
                                                            <div className='col-md-6 mb-xs-20'>
                                                                <div className='pros'>
                                                                    <p className='mb-10 white fs-16'><b>PROS OF SEPTEMBER INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        September is the primary intake of UK
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Maximum enrollments happen during this time in UK
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF SEPTEMBER INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        High competition because maximum applicants apply this time
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Admission chances are lower due to high competition
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>September Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="APR – MAY">
                                                                    <div className='title'>Begin shortlisting UK universities and courses</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Check the deadlines for the university and course of study</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUN - DEC">
                                                                    <div className='title'>Begin preparing for ELP and standardized tests</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Appear for these exams based on university requirement</li>
                                                                            <li>Prepare for admission documents during this time</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="OCT – DEC">
                                                                    <div className='title'>Applications submission time</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Deadline for conservatoire music applications</li>
                                                                            <li>Deadline for applications to the universities of Oxford and Cambridge</li>
                                                                            <li>Also for most courses in medicine, dentistry, and veterinary medicine and science</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="MAR - JUL">
                                                                    <div className='title'>tick to the deadlines and apply for the courses</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Wait for universities to revert on admission decision</li>
                                                                            <li>Look out for education loans and scholarships to fund education</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUN - AUG">
                                                                    <div className='title'>Accept or defer offers, complete other formalities</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Submit student visa applications</li>
                                                                            <li>Appear for the student visa interview</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                                <li className="timeline-item" data-date="AUG">
                                                                    <div className='title'>Receive your student visa application</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Plan your travel and stay in UK</li>
                                                                            <li>Fly to UK upon formalities completion for admission and visa</li>
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
                                                                    <p className='mb-10 white fs-16'><b>PROS OF WINTER INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Shorter and faster application filing and processing
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Those who missed applying for September intake can aim for this intake
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF WINTER INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                            This is not the primary intake of UK
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        A limited number of courses are available for admission
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Winter Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="APR – AUG">
                                                                    <div className='title'>Applicants can begin shortlisting universities</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Gather relevant information about university deadlines and requirements.</li>
                                                                            <li>Select desirable courses to apply to</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUN - SEP">
                                                                    <div className='title'>Prepare for exams and admission documents</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Appear for ELP and standardized tests</li>
                                                                            <li>Begin writing your admission essays for submission</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUL – SEP">
                                                                    <div className='title'>Start filling your applications</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Submit the applications to universities well within the set deadlines</li>
                                                                            <li>Also send the required documents per the university guidelines</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="OCT - NOV">
                                                                    <div className='title'>Post application submission formalities</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Ensure to reply to the emails before the deadline and participate in the selection process.</li>
                                                                            <li>Upon receiving an offer from the university, either accept or reject the offer.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="OCT - DEC">
                                                                    <div className='title'>Apply for funding like for loans or scholarships</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Apply for student visa and appear for interview if called</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="DEC – JAN">
                                                                    <div className='title'>Plan your travel to UK</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>• Prepare all your documents and plan for accommodation</li>
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
                                                    Student Visa in UK
                                                </h3>
                                                <div className='section-text white'>
                                                    UK Student visa was two student categories under Tier 4 of the points-based system: Tier 4 (General) student and Tier 4 (Child) student. Formerly called as Tier 4 (General) Student Visa or Tier 4 Student Visa, is applicable for those who want to pursue higher education in the UK. Students can apply for UK Student Visa 6 months before the commencement of their course, and not before that. Students can expect to receive a decision within 3 weeks of application. On the UK Student Visa, students can stay in the UK for up to 5 years if their course is at degree level. If a student is applying from outside the UK, he/ she needs to pay a visa processing fee of £490. Moreover, students are also required to a healthcare surcharge.
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

                                <section className='page-section bg-pos-topcenter fixed-height-small bg-scroll pb-0 pb-xs-20' style={{
                                        background: `url(${map_usa})`,
                                }}>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-60 mb-xs-10">
                                            Exams Required to Study in UK
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

                                        <h3 className="hs-line-3 color text-left font-alt mb-40 mb-xs-10">
                                            Language Proficiency Tests for<br/> Studying in the UK
                                        </h3>

                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-12'>
                                                <div className='section-text'>
                                                    <p>Students planning to study in the UK must take English proficiency tests like TOEFL and IELTS:</p>
                                                    <ul>
                                                        <li><strong>TOEFL Test</strong>: The TOEFL iBT assesses English proficiency in reading, writing, listening, and speaking. Students can prepare using TOEFL speaking exercises. The TOEFL test cost varies by country.</li>
                                                        <li><strong>IELTS Online Tests</strong>: IELTS mock tests and IELTS online coaching help students prepare. Many institutions offer IELTS preparation online through an IELTS online course.</li>
                                                        <li><strong>GRE Tests</strong>: Some UK universities require GRE scores. Students can take a GRE practice test, GRE exam, GRE mock test, or use Magoosh GRE for preparation. The ETS GRE website provides official resources to practice GRE skills.</li>
                                                    </ul>
                                                    <p>Choosing the Best Study Abroad Consultants in Chennai can help students streamline their application process, identify UK Scholarships, and secure admission to UK Universities for International Students. The UK remains a top destination for higher education, offering excellent career prospects, world-class research opportunities, and a diverse student experience.</p>
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
                                                            Work Opportunities in UK
                                                        </h3>
                                                        <div className='section-text mb-30 mb-xs-20'>
                                                            Students, who have completed their education from UK Universities, were placed in different sectors on the basis of their course, major, electives, previous work experience, etc.
                                                        </div>

                                                        <h3 className='fw-700 italic mb-30'>Some of the most popular job sectors in UK for employment are:</h3>

                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_01} /></div>
                                                                            <div>Science and Research</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_02} /></div>
                                                                            <div>Engineering & Building</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_03} /></div>
                                                                            <div>Education & Teaching</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_07} /></div>
                                                                            <div>Arts, Design & Media</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_08} /></div>
                                                                            <div>Technology & Telecommunications</div>
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
                                                                            <div className='d-flex align-items-center me-4'>
                                                                                <div><img src={opportunities_icon_06} /></div>
                                                                                <div>Retail</div>
                                                                            </div>
                                                                            <div className='d-flex align-items-center'>
                                                                                <div><img src={opportunities_icon_11} /></div>
                                                                                <div>Legal</div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_09} /></div>
                                                                            <div>Social Welfare</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_10} /></div>
                                                                            <div>Government</div>
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

export default StudyAbroadUK;