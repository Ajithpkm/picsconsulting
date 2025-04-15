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
import mail from '../images/mail.png';
import call from '../images/call.png';
import usa_bg from '../images/aus/banner-bg.jpg';
import highlights_bg from '../images/usa-bg.png';
import whatsappwhite from '../images/whatsapp-w.png';
import washington_icon from '../images/washington.png';
import months_icon from '../images/12-months.png';
import english_icon from '../images/english.png';
import topranker_icon from '../images/aus/exceptional-education.png';
import campus_icon from '../images//aus/high-standards.png';
import goodquality_icon from '../images/aus/safe-place.png';
import highlight_icon_01 from '../images/icon-01.png';
import highlight_icon_02 from '../images/aus/icon-02.png';
import highlight_icon_03 from '../images/aus/icon-03.png';
import highlight_icon_04 from '../images/aus/icon-04.png';
import highlight_icon_05 from '../images/aus/icon-05.png';
import highlight_icon_06 from '../images/aus/icon-06.png';
import highlight_icon_07 from '../images/aus/icon-07.png';
import highlight_icon_08 from '../images/aus/icon-08.png';
import highlight_icon_09 from '../images/aus/icon-09.png';
import education_system_usa from '../images/aus/education-system.jpg';
import admission_requirement from '../images/aus/admission-requirement.jpg';
import admission_aus from '../images/aus/admission-requirement-2.jpg';
import poststudy_usa from '../images/post-study-usa.jpg';
import workopportunities_usa from '../images/work-opportunities-usa.png';
import workopportunities_usa_02 from '../images/aus/workopportunities-australia.jpg';
import getintouch_usa from '../images/getin-touch-usa.jpg';
import opportunities_icon_01 from '../images/icon-09.png';
import opportunities_icon_02 from '../images/icon-10.png';
import opportunities_icon_03 from '../images/icon-11.png';
import opportunities_icon_04 from '../images/icon-12.png';
import opportunities_icon_05 from '../images/icon-13.png';
import opportunities_icon_12 from '../images/aus/icon-12.png';
import opportunities_icon_10 from '../images/aus/icon-10.png';
import opportunities_icon_11 from '../images/aus/icon-11.png';
import map_usa from '../images/usa-map.png';
import exam_01 from '../images/exam-01.png';
import exam_02 from '../images/exam-02.png';
import exam_03 from '../images/exam-03.png';
import exam_04 from '../images/exam-04.png';
import exam_05 from '../images/exam-05.png';
import exam_06 from '../images/exam-06.png';
import exam_07 from '../images/exam-07.png';
import visa_uk from '../images/aus/document-required.png';
import studentvisa_usa from '../images/aus/student-visa.jpg';
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

const StudyAbroadAUS = () => {
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
                metaDescription.setAttribute('content', 'PICS Overseas Education Consultants is the right educational path in a bustling city like Chennai can be a daunting task. But with the guidance of our seasoned consultants, you can rest assured your child is on the fast track to success.' || '');
            }
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', 'Education Consultants for Australia, Deakin University Melbourne, Universities in Australia for International Students, Scholarship in Australia, MBA Scholarships Australia, Australia Scholarships for International Students' || '');
            }
            }}><title>{ 'Study in Australia: Top 5 Overseas Education Consultants in Chennai' }</title>
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
                                                                Study in Australia
                                                            </h1>
                                                            <h2 className="hs-line-2 text-center">
                                                                Overseas Education Consultants
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
                                                <li><a href='#about-uk' className={menuValue == "1"?'active':''} onClick={activeMenu("1")}>About AUS</a></li>
                                                <li><a href='#uk-highlights' className={menuValue == "2"?'active':''} onClick={activeMenu("2")}>AUS Highlights</a></li>
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
                                                    About Australia
                                                </h3>
                                                <div className='section-text mb-20'>
                                                    Ranked among the favourite study-abroad destinations, Australia is among the <strong>Top 5 Overseas Education Consultants in Chennai</strong> recommended study locations where international students seek admission. In 2022, Australia recorded a footfall of 5,27,529 international students, out of which around 1,00,009 were Indian students. It is predicted that in 2023 and the upcoming years, Australia will witness a 5% increase in its international student population.
                                                </div>

                                                <div className='section-text'>
                                                    More and more international students are choosing to study in Australia because of the high number of job openings in Business, Healthcare, Engineering, and Medicine. Australia offers good remuneration to its workforce, and its stringent labour laws make it a viable place for Indian students to work post-studies.
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
                                                                <p>Ranked among the favourite study-abroad destinations, Australia is among the <strong>Top 5 Overseas Education Consultants in Chennai</strong> recommended study locations where international students seek admission. In 2022, Australia recorded a footfall of 5,27,529 international students, out of which around 1,00,009 were Indian students. It is predicted that in 2023 and the upcoming years, Australia will witness a 5% increase in its international student population.</p>

                                                                <p>More and more international students are choosing to study in Australia because of the high number of job openings in Business, Healthcare, Engineering, and Medicine. Australia offers good remuneration to its workforce, and its stringent labour laws make it a viable place for Indian students to work post-studies. Many <strong>Universities in Australia for International Students</strong> offer great post-study opportunities.</p>

                                                                <h3 className='fw-700 italic mb-10'><b>Top Reasons to Study in Australia</b></h3>
                                                                <p>There are numerous reasons to study in Australia as an international student. One of the major attractive factors is Australia&rsquo;s cost-effective education, with over 100,000+ <strong>Scholarship in Australia</strong> opportunities available. Other reasons include:</p>
                                                                <div className='list-style-3'> 
                                                                    <ul>
                                                                        <li>The higher education qualifications in Australia are globally recognized.</li>
                                                                        <li>Most courses encourage students to gain professional experience while studying.</li>
                                                                        <li>All 38 Australian universities offer internship and full-time job opportunities.</li>
                                                                        <li>An international student can work part-time for more than 40 hours a fortnight and full-time during holidays.</li>
                                                                        <li>Over 64,000+ jobs are added every six to seven months to attract new workforce.</li>
                                                                        <li><strong>MBA Scholarships Australia</strong> are widely available for students pursuing management degrees.</li>
                                                                        <li><strong>Australia Scholarships for International Students</strong> make studying more affordable.</li>
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                        </Typography>
                                                    </Box>
                                                </Modal>
                                            </div>

                                            <div className='col-md-7 mt-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-700 italic mb-10'><b>Key Facts About Australia</b></h3>

                                                    <div className='row mb-20'>
                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>118+  </div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Universities &<br/> Colleges</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>1L</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Indian Students<br/> at 2022</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>40 Hrs/Fortnight</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Week Part Time<br/> Work Permit</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-10'>
                                                                <div className='count'>3%</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Economic Growth<br/> Rate at 2022</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-10'>
                                                                <div className='count'>26.47M</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Total Population<br/> at 2023</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={washington_icon} alt="CANBERRA" />
                                                                <div>
                                                                    <div className='location'>CANBERRA</div>
                                                                    <div className='white'>Capital</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={months_icon} alt="6 Years" />
                                                                <div>
                                                                    <div className='location'>6 Years</div>
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
                                                            <img src={topranker_icon} alt="Exceptional Education" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Exceptional<br/> Education</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Australian higher education is globally renowned and ecognised</li>
                                                            <li>There are over 3,000 courses to choose from across all fields of study</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={campus_icon} alt="High Standards of Living" />
                                                        </div>
                                                        <h3 className='alt-services-title'>High Standards of<br/> Living</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>The educated workforce in Australia enjoy the high standard of iving</li>
                                                            <li>Education intro and government services are above international averages</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={goodquality_icon} alt="Safe Place to Study" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Safe Place to<br/> Study</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Big international student community in Australia fosters respect</li>
                                                            <li>Backed by a strong law system. Australia is a safe place to study and live</li>
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
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-40 mb-xs-30">
                                            Study in Australia Highlights
                                        </h3>
                                        <div className='wrc-grid'>
                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Universities in<br/> Australia</div>
                                                    <div className='icon'><img src={highlight_icon_01} /></div>
                                                    <div className='desc'>43+</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Universities Ranking in Top 100 Globally</div>
                                                    <div className='icon'><img src={highlight_icon_02} /></div>
                                                    <div className='desc'>9TH Rank (in 2024)</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Education Levels</div>
                                                    <div className='icon'><img src={highlight_icon_03} /></div>
                                                    <div className='desc'>Primary, Secondary & Tertiary</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Tertiary Education Regulator</div>
                                                    <div className='icon'><img src={highlight_icon_04} /></div>
                                                    <div className='desc'>Australian Qualifications Framework (AQF)</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>ELP Test Scores Required</div>
                                                    <div className='icon'><img src={highlight_icon_05} /></div>
                                                    <div className='desc'>TOEFL / IELTS / PTE / Duolingo</div>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Standardised Test Scores Accepted</div>
                                                    <div className='icon'><img src={highlight_icon_06} /></div>
                                                    <div className='desc'>UG: SAT & PG: GRE / GMAT</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Undergraduate Admission Eligibility</div>
                                                    <div className='icon'><img src={highlight_icon_07} /></div>
                                                    <div className='desc'>ATAR (12THscores) + Entrance Test scores + ELP scores</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Postgraduate (Taught & Research) Admission Eligibility</div>
                                                    <div className='icon'><img src={highlight_icon_07} /></div>
                                                    <div className='desc'>Bachelor’s degree + Entrance Test scores + ELP scores</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Australian Qualifications Recognised</div>
                                                    <div className='icon'><img src={highlight_icon_08} /></div>
                                                    <div className='desc'>In over 140+ countries globally</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Australia University Acceptance Rate</div>
                                                    <div className='icon'><img src={highlight_icon_09} /></div>
                                                    <div className='desc'>Moderate to highly selective (90%)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='container'>
                                        <div className='row d-flex align-items-center'>
                                            <div className='col-md-8'>
                                                <h3 className="hs-line-3 color text-left font-alt mb-10 mb-xs-10">
                                                    Education System in Australia
                                                </h3>
                                                
                                                <h3 className='fw-600 italic mb-20'>The education system in Australia is<br/> divided into three levels</h3>

                                                <div className='list-style-3 mb-20'>
                                                    <div className='row'>
                                                        <div className='col-md-4'>
                                                            <ul>
                                                                <li>Primary education</li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <ul>
                                                                <li>Secondary education</li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <ul>
                                                                <li>Tertiary education</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='section-text mb-30'>
                                                    <p>Higher education in Australia includes undergraduate, postgraduate, and doctoral courses. Many students prepare for admission using <strong>TOEFL practice test free</strong> and <strong>IELTS practice test online</strong> to meet language requirements. <strong>Deakin University Melbourne</strong> and other top institutions provide a structured education regulated by the Australian Qualifications Framework (AQF).</p>
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
                                            Top Courses in Australia
                                        </h3>
                                        <div className='section-text text-center m-left mb-40 mb-xs-20'>
                                            Australian universities are ranked for various courses across 51 disciplines of Engineering in<br/> Australia, Business courses, Arts & Humanities, also Medicine courses in Australia and Sciences.
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            
                                            <div className='col-md-6'>
                                                <div className='img-round'><img src={admission_requirement} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-6 mb-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-600 italic mb-20'>The top-ranking courses in Australia for international students:</h3>
                                                    <p>Australian universities rank highly across 51 disciplines, including Engineering, Business, Medicine, and the Arts. Some notable rankings include:</p>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Curtin University ranks #2 for Mining &amp; Mineral Engineering.</li>
                                                                    <li>Australian National University ranks at #6 for Anthropology.</li>
                                                                    <li>The University of Adelaide ranks #10 for Petroleum Engineering.</li>
                                                                    <li>The University of Melbourne ranks #12 for Law.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>The University of Sydney ranks #12 for Nursing.</li>
                                                                    <li>UNSW ranks #13 for Civil &amp; Structural Engineering.</li>
                                                                    <li>RMIT University ranks at #15 for Arts and Design.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-6 mb-xs-20'>
                                                <h3 className='fw-600 italic mb-20'>Admission Requirements to Study in Australian Universities:</h3>
                                                <div className='section-text'>
                                                    Admission requirements vary based on the level of study, but common requirements include:
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>Transcripts</li>
                                                                <li>Statement of Purpose (SOP)</li>
                                                                <li>Letters of Recommendation (LOR)</li>
                                                                <li>English language proficiency test scores such as <strong>TOEFL test preparation</strong>, <strong>ETS TOEFL</strong>, or <strong>IELTS preparation online free</strong></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>Standardized test scores like <strong>GRE General Test Sample</strong> for postgraduate studies</li>
                                                                <li>Essays and resumes</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='section-text'>
                                                    <div className='read-more' onClick={handleOpen3}>Read more</div>
                                                </div>

                                                <Modal
                                                    open={open3}
                                                    onClose={handleClose3}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                    >
                                                    <Box sx={style}>
                                                        <Typography className='modal-bx-body-3' id="modal-modal-description" sx={{ mt: 2 }}>
                                                        <div className='section-text'>
                                                            
                                                            <h3 className='color-title mb-10'>Undergraduate Admission Requirements:</h3>

                                                            <p>Applicants must submit SAT or MCAT/NEET UG scores and fulfill equivalent ATAR or Class 12th requirements.</p>

                                                            <h3 className='color-title mb-10'>Postgraduate Admission Requirements:</h3>
                                                            <p><p>For master&rsquo;s programs, applicants may need <strong>GRE registration</strong>, <strong>GRE vocabulary</strong>, or <strong>GMAT scores</strong>. Law courses may require LSAT scores.</p></p>
                                                        </div>
                                                        </Typography>
                                                    </Box>
                                                </Modal>
                                            </div>
                                            
                                            <div className='col-md-6'>
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
                                                            <img src={highlight_icon_07} alt="Scholarships to Study in Australia" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Scholarships to Study in Australia</h3>
                                                    </div>

                                                    <div className='section-text'>
                                                        There are over 120,000+ scholarships available for international students to study in Australia. Scholarships in Australia for international students are either offered by the education providers or are externally offered scholarships. Following is a list of university scholarships and externally funded scholarships offered to international students in Australia
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
                                                    <h3 className='fw-600 italic mb-20'>Post-Study Work Permit in Australia</h3>
                                                    <div className='section-text'>
                                                        <p>International students can apply for the <strong>Temporary Graduate 485 (subclass) visa</strong> after completing their studies. Eligibility criteria include:</p>
                                                        <ul>
                                                            <li>Must be below 50 years of age</li>
                                                            <li>Applied for their first student visa on or after 5 November 2011</li>
                                                            <li>Held a student visa in the past six months</li>
                                                        </ul>
                                                        <p>The Temporary Graduate 485 visa costs AUD 1,895 and allows students to bring family members on a separate application.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section faqs pb-0' id='faqs'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center m-left font-alt mb-40 mb-xs-30">
                                            Study in Australia FAQs
                                        </h3>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Accordion defaultExpanded>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                    >
                                                    <Typography className='Lato faq-question'>If applicants miss submitting CoE for a student visa application, will the visa be denied?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        The CoE or the confirmation of enrollment is an integral part of a student visa application to Australia. Since this document is proof that the international student has accepted his/her offer and carries details of the education provider along with the course of admission, it is absolutely necessary to keep a copy of the CoE along with the student visa application form.

                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Which is the cheapest university in Australia for international students?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        There are around eight to nine cheap or affordable universities in Australia for international students. The course fee varies from AUD 14,000 to AUD 17,00,000 for undergraduate courses and between AUD 16,000 to AUD 38,000.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel3-content"
                                                    id="panel3-header"
                                                    >
                                                    <Typography className='Lato faq-question'>What exam scores are required for applying to Australian universities from international students?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        For entry into undergraduate programs Indian students are assessed based on their class 12th scores, they may be required to submit entrance scores if applying for professional courses in Australia or SAT if applying for other programs.

                                                        <p>For graduate admissions in Australia, students must submit their GRE or GMAT scores.</p>
                                                        <p>For both levels of admission, the English language exams needed for studying in Australia include either TOEFL / IELTS / PTE / Duolingo.</p>
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel4-content"
                                                    id="panel4-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How much is the application fee for applying to Australian universities?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Most of the universities in Australia don’t charge application fees for international students. Even if they apply on their own or apply through agents. However, if students apply via agents they may have to pay a nominal fee or may not have to in some cases also. Check out the difference between self-apply vs outside agents for studying abroad.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel5-content"
                                                    id="panel5-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Which professionals are the highest paid in Australia?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato faq-answer'>
                                                            Some of the highly paid professionals in Australia are from medical backgrounds. Surgeons rank in the top spot among highest paid professionals in Australia and they earn an average of AUD 394,303 annually. The second highest-paid professionals in Australia are anesthetists who earn an average of AUD 386,065 annually.
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
                                            Intake in Australia
                                        </h3>
                                        <div className='section-text text-center mb-50 mb-xs-30'>
                                            There are three intakes in Australia, but only two of them are considered as the major ones. The Jan/Feb intake and the July intake in Australia are the most popular intakes, while the November intake is a smaller intake and not a lot of universities offer admission during this intake. Check out in detail about the intakes in Australia and other corresponding details for reference.
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
                                                                        All Australian universities offer admission
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Major courses offered in this intake for admission
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Maximum	students receive funding in this intake
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF FALL INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        A lot of competition among applicants who apply
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Higher competition thus, stricter admission criteria
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Temporary accommodation	options may be lesser than usual
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Fall Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="MAY - JUN">
                                                                    <div className='title'>Begin shortlisting universities for study</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Check out the universities and the courses on offer</li>
                                                                            <li>Check the deadlines of university and course</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUL - AUG">
                                                                    <div className='title'>Prepare and appear for the relevant exams</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Appear for ELP and standardised tests</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="AUG - OCT">
                                                                    <div className='title'>Begin application process for desired university</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Apply before the deadline</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="NOV - DEC">
                                                                    <div className='title'>Wait for admission application assessment</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Also wait for the admission decision</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="DEC - JAN">
                                                                    <div className='title'>Accept admission offer</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Obtain Confirmation of Enrolment</li>
                                                                            <li>Begin student visa application</li>
                                                                            <li>Look for education sponsors and apply for loan</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                                <li className="timeline-item" data-date="JAN - FEB">
                                                                    <div className='title'>Time to fly to Australia</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Keep all documents safely before flying</li>
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
                                                                        Less competition among applicants
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Lesser competition, thus, higher chances for selection
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Conditional admissions are possible during this intake
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF SPRING INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Not all courses are offered for admission
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Timeline for July intake is shorter, hence there is not much time
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Admissions may be affected if results are not announced in time
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Spring Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="AUG - NOV">
                                                                    <div className='title'>Shortlist universities to apply to</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Check out the courses on offer for admission</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="DEC - FEB">
                                                                    <div className='title'>Prepare for the necessary exams</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Appear for ELP tests and standardized exams</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="FEB - MAR">
                                                                    <div className='title'>Time to apply to the shortlisted universities</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Check the deadlines of the universities</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="MAR - APR">
                                                                    <div className='title'>Appear for college interviews</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Prepare your documents</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="ARP - JUN">
                                                                    <div className='title'>Respond to admission offer letter</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Get Confirmation of Enrolment</li>
                                                                            <li>Apply for student visa</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUN - JUL">
                                                                    <div className='title'>Plan your travel to Australia</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Travel to Australia</li>
                                                                            <li>Find temporary accommodation</li>
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
                                            <div className='col-md-8'>
                                                <h3 className="hs-line-3 white text-left font-alt mb-20 mb-xs-10">
                                                    Student Visa in Australia
                                                </h3>
                                                <div className='section-text white'>
                                                    <p>Students must apply for a <strong>Student Visa</strong> based on the course duration. The <strong>Simplified Student Visa Framework (SSVF)</strong> is commonly used. International students need a <strong>subclass 500 visa</strong> for undergraduate courses and a <strong>subclass 485 visa</strong> for graduate studies.</p>

                                                    <h3 className='color-title mb-10'>Subclass 500 Visa:</h3>
                                                    <div class="list-style-3">
                                                        <ul>
                                                            <li className='white'>Cost: AUD 710</li>
                                                            <li className='white'>Duration: Up to five years based on enrollment</li>
                                                        </ul>
                                                    </div>

                                                    <h3 className='color-title mb-10'>Subclass 485 Visa:</h3> 
                                                    <div class="list-style-3 mb-20">
                                                        <ul>
                                                            <li className='white'>Cost: AUD 1,895</li>
                                                            <li className='white'>Stay duration: Two to four years</li>
                                                        </ul>
                                                    </div>

                                                    <p>Both visas allow extensions if required. Applicants can enhance their profiles with TOEFL speaking practice, TOEFL reading practice, and IELTS listening practice online to ensure smooth admission. Universities like Deakin University Melbourne support international students through various resources, making Australia a top destination for higher education.</p>
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
                                            Exams Required to Study in Australia
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
                                                            Work Opportunities in Australia
                                                        </h3>
                                                        <div className='section-text mb-30 mb-xs-20'>
                                                            After graduation, students who pursue an undergrad course from an Australian university and wish to work will have to first apply for a Temporary Graduate 485 (subclass) visa. This visa would in turn permit international or Indian students in Australia to look for a job or pursue a post-graduate stay in Australia.
                                                        </div>

                                                        <h3 className='fw-700 italic mb-30'>There are a couple of jobs in demand in Australia, they are:</h3>

                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_02} /></div>
                                                                            <div>Civil engineers or construction experts</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_11} /></div>
                                                                            <div>Architects & designers</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_03} /></div>
                                                                            <div>Teachers - early & secondary education</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div className='d-flex align-items-center me-4'>
                                                                                <div><img src={opportunities_icon_10} /></div>
                                                                                <div>Miners</div>
                                                                            </div>
                                                                            <div className='d-flex align-items-center'>
                                                                                <div><img src={opportunities_icon_12} /></div>
                                                                                <div>Nurses</div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_04} /></div>
                                                                            <div>Healthcare professionals</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_05} /></div>
                                                                            <div>Financial experts</div>
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

export default StudyAbroadAUS;