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
import whatsappSticky from '../images/whatsapp-big.png';
import usa_bg from '../images/nz/banner-bg.jpg';
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
import education_system_usa from '../images/nz/education-system.jpg';
import admission_requirement from '../images/nz/admission-requirement.jpg';
import admission_aus from '../images/nz/admission-requirement-2.jpg';
import poststudy_usa from '../images/nz/post-study-nz.jpg';
import workopportunities_usa from '../images/work-opportunities-usa.png';
import workopportunities_usa_02 from '../images/nz/workopportunities-nz.jpg';
import getintouch_usa from '../images/getin-touch-usa.jpg';
import opportunities_icon_01 from '../images/nz/icon-01.png';
import opportunities_icon_02 from '../images/nz/icon-02.png';
import opportunities_icon_03 from '../images/nz/icon-03.png';
import opportunities_icon_04 from '../images/nz/icon-04.png';
import opportunities_icon_05 from '../images/nz/icon-05.png';
import opportunities_icon_06 from '../images/nz/icon-06.png';
import opportunities_icon_07 from '../images/nz/icon-07.png';
import opportunities_icon_08 from '../images/nz/icon-08.png';
import opportunities_icon_09 from '../images/nz/icon-09.png';
import opportunities_icon_10 from '../images/nz/icon-10.png';
import opportunities_icon_11 from '../images/nz/icon-11.png';
import map_usa from '../images/usa-map.png';
import exam_01 from '../images/exam-01.png';
import exam_02 from '../images/exam-02.png';
import exam_03 from '../images/exam-03.png';
import exam_04 from '../images/exam-04.png';
import exam_05 from '../images/exam-05.png';
import exam_06 from '../images/exam-06.png';
import exam_07 from '../images/exam-07.png';
import visa_uk from '../images/nz/document-required.png';
import studentvisa_usa from '../images/nz/student-visa.jpg';
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

const StudyAbroadNZ = () => {
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
                metaDescription.setAttribute('content', 'Studying abroad is a transformative experience that can propel your personal and professional trajectory to new heights. Our Best Overseas Education Consultants in Chennai are passionate about empowering ambitious students like you to reach your full potential. With our unwavering support, you will navigate the entire process with confidence, positioning yourself for life-changing opportunities that will shape your future.' || '');
            }
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', 'MBA in New Zealand, Best Universities in New Zealand, New Zealand phd' || '');
            }
            }}><title>{ 'Study in New Zealand: Best Overseas Education Consultants in Chennai' }</title>
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
                        <title>PICS Consultants</title>
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
                                                                Study in New Zealand
                                                            </h1>
                                                            <h2 className="hs-line-2 text-center">
                                                                Best Overseas Education Consultants
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
                                                <li><a href='#about-uk' className={menuValue == "1"?'active':''} onClick={activeMenu("1")}>About NZ</a></li>
                                                <li><a href='#uk-highlights' className={menuValue == "2"?'active':''} onClick={activeMenu("2")}>NZ Highlights</a></li>
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
                                                    About New Zealand
                                                </h3>
                                                <div className='section-text mb-20'>
                                                    <p>New Zealand is one of the top study destinations for Indian students. World class education, globally recognized degrees, growing job market and friendly people, there are multiple reasons to study in New Zealand. In 2024, around 59,000+ international students were enrolled across eight New Zealand universities along with its ITPs and PTEs. 10% of these 59,000+ students, were Indian-origin students.</p>
                                                    <p>With 20,000+ vacancies opening up each year, studying in New Zealand for international students has become one of the preferred choices. The introduction of Green List Occupations in New Zealand after the pandemic has also encouraged international students to study in New Zealand and apply for full-time job roles.</p>
                                                </div>
                                            </div>

                                            <div className='col-md-7 mt-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-700 italic mb-10'><b>Key Facts About New Zealand</b></h3>

                                                    <div className='row mb-20'>
                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>71+</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Universities &<br/> Colleges</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>1.2L</div>
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
                                                                <div className='count'>5.27M</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Total Population<br/> at 2023</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={washington_icon} alt="WELLINGTON" />
                                                                <div>
                                                                    <div className='location'>WELLINGTON</div>
                                                                    <div className='white'>Capital</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={months_icon} alt="3 Years" />
                                                                <div>
                                                                    <div className='location'>3 Years</div>
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
                                            <div className='col-md-6 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={topranker_icon} alt="Globally Recognised Education" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Globally Recognised<br/> Education</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Education system of New Zealand is an amalgamation of  different ideologies</li>
                                                            <li>Degrees from New Zealand are recognised globally for jobs or education</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-6 mb-xs-20'>
                                                <div className='key-benefits-3'>
                                                    <div className='alt-service-item mb-10'>
                                                        <div className='alt-service-icon'>
                                                            <img src={campus_icon} alt="Friendly and Safe" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Friendly and<br/> Safe</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>There are various campuses of the eight universities in New Zealand</li>
                                                            <li>The international student community in New Zealand is bigger than natives</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-40 mb-xs-30">
                                            Top Reasons to Study in the New Zealand
                                        </h3>
                                        <div className='section-text'>
                                            <p>There are top reasons that encourage international students to pursue higher education in New Zealand, including academic as well as post-study work options. From being lower in terms of studying costs, availability of numerous scholarships to ease of finding a job and working while in</p>
                                            <h3 className='fw-600 italic mb-20'>New Zealand are some of the major reasons along<br/> with the following ones as well:</h3>
                                            <div className='list-style-3'>
                                                <ul>
                                                    <li>The learning experience in New Zealand is qualitative and easier for Indian students to learn in that model.</li>
                                                    <li>Also, the cost of living in New Zealand is lower than the cost of living in Australia by almost 12%.</li>
                                                    <li>Pursuing higher education and research in New Zealand is propitious for international students with various benefits of PR, stipends and cost of living exemption.</li>
                                                    <li>All qualifications of New Zealand are globally recognised, thus, international students can work anywhere in the world.</li>
                                                    <li>Healthcare and Engineering sectors which hire skilled workers are bound to be paid higher than those in Australia by almost 25%.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-pos-topcenter bg-scroll pb-100 pb-xs-50' style={{
                                        background: `url(${highlights_bg})`,
                                }} id='uk-highlights'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-40 mb-xs-30">
                                            Study in New Zealand Highlights
                                        </h3>
                                        <div className='wrc-grid'>
                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Universities in the Zealand</div>
                                                    <div className='icon'><img src={highlight_icon_01} /></div>
                                                    <div className='desc'>08+</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>Universities Ranking in Top 100 Globally</div>
                                                    <div className='icon'><img src={highlight_icon_02} /></div>
                                                    <div className='desc'>8TH Rank (in 2024)</div>
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
                                                    <div className='desc'>NZ Qualifications Framework (NZQF)</div>
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
                                                    <div className='desc'>UG: SAT / NEET UG / LSAT, PG: GRE / GMAT / MCAT</div>
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
                                                    <div className='desc'>NZ Qualifications Recognised</div>
                                                    <div className='icon'><img src={highlight_icon_08} /></div>
                                                    <div className='desc'>Globally</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='highlights highlights_2'>
                                                    <div className='desc'>NZ University Acceptance Rate</div>
                                                    <div className='icon'><img src={highlight_icon_09} /></div>
                                                    <div className='desc'>Highly selective (90%)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='container'>
                                        <div className='row d-flex align-items-center'>
                                            <div className='col-md-8'>
                                                <h3 className="hs-line-3 color text-left font-alt mb-10 mb-xs-10">
                                                    Education System in New Zealand
                                                </h3>
                                                
                                                <div className='section-text mb-20'>
                                                    As mentioned above, Canada is recognized for providing affordable education. The education system in Canada is managed by the provincial governments. The study levels and educational stages may vary across different clusters.
                                                </div>

                                                <div className='list-style-3 mb-20'>
                                                    <ul>
                                                        <li><span className='color-2 uppercase'>Technical & Vocational Education:</span> These institutions are for those students who are studying at the Senior Secondary school level, plus also those, who can pursue a course and specialize, in order to earn a living.</li>

                                                        <li><span className='color-2 uppercase'>Youth Guarantee:</span> These courses are for students aged between 16-19. Gives them an opportunity to study NCEA Level 1-3 or Certificate Level 1-3 which are tertiary courses provided free of cost</li>

                                                        <li><span className='color-2 uppercase'>Trades Academies:</span> These academies run through schools and other education providers and teach trades and technology-related programmes to students aged between 15-18.</li>

                                                        <li><span className='color-2 uppercase'>Institutes of Technology:</span> These are government or industry-funded institutions which offer basic or introductory courses in vocational education.</li>

                                                        <li><span className='color-2 uppercase'>Private Training:</span> Such training institutions offer specific vocational courses at both certificate and diploma levels.</li>

                                                        <li><span className='color-2 uppercase'>Universities:</span> There are eight state-funded Universities in New Zealand offering a variety of courses across all major subjects.</li>

                                                        <li>As per the levels of education in New Zealand designated by NZQF for tertiary education, each level consists of the following level of certificate or diploma or degree awarded to the student upon completion. The following is the level-wise degree/certificate/diploma award in tertiary education</li>
                                                    </ul>
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
                                            Top Courses in New Zealand
                                        </h3>
                                        <div className='section-text text-center m-left mb-40 mb-xs-20'>
                                            Some of the top courses in New Zealand are offered in areas of management & business, engineering,<br/> medicine, social sciences and science-related subjects. 
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            
                                            <div className='col-md-6'>
                                                <div className='img-round'><img src={admission_requirement} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-6 mb-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-600 italic mb-20'>Check out the most demanding courses in
                                                    New Zealand for international students, below:</h3>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>MBA</li>
                                                                    <li>Information Technology</li>
                                                                    <li>Graphic Designing</li>
                                                                    <li>MBBS</li>
                                                                    <li>Supply Chain Management</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Computer Science</li>
                                                                    <li>Aeronautical Engineeringg</li>
                                                                    <li>Mechanical Engineering</li>
                                                                    <li>Nursing</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-8 mb-xs-20'>
                                                <h3 className='fw-600 italic mb-20'>Admission Requirements to Study in New Zealand Universities</h3>
                                                <div className='section-text'>
                                                    The admission requirements for studying in New Zealand universities vary with each level of study for international students. A brief is as follows:
                                                </div>
                                                <div className='color-title mb-10'>Undergraduate Admissions in New Zealand</div>
                                                <div className='section-text'>
                                                    At the UG level, international students’ admission applications are assessed based on class XII scores. In a few cases, the applicants may be required to submit an entrance test score of SAT. if applying for medical courses, MCAT would be required or LSAT would be required for law-related courses admission at UG level in New Zealand.<br/><br/>
                                                    The applicants are required to submit English language test scores of TOEFL / IELTS / PTE unless exempted.

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
                                                            <h3 className='color-title mb-10'>Postgraduate Admissions in New Zealand</h3>

                                                            <p className='mb-10'>For admission to a postgraduate course in New Zealand, international students will be required to submit undergraduate degree scores and submit their transcripts as well.</p>

                                                            <p className='mb-10'>English language test scores will also be required, TOEFL / IELTS / PTE are accepted. If students have already pursued an undergraduate course from New Zealand, then they may be exempted from submitting these scores.</p>

                                                            <p className='mb-10'>Apart from these, standardised test scores on GRE or GMAT may also be required while applying for a postgraduate course in New Zealand from international students.</p>
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
                                                            <img src={highlight_icon_07} alt="Scholarships to Study in New Zealand" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Scholarships to Study in New Zealand</h3>
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
                                                    <h3 className='fw-600 italic mb-20'>Post-Study Work Permit in New Zealand</h3>
                                                    <div className='section-text'>
                                                        <h3 className='color-title mb-10'>In order to apply for a post-study work permit in New Zealand, international students must fulfil the following criteria:</h3>

                                                        <div className='list-style-3 mb-20'>
                                                            <ul>
                                                                <li>Should have studied a Level 7 degree qualification or</li>
                                                                <li>Should have studied non-degree qualification below Level 7, but the qualification must be listed on the Qualifications Eligible for a Post Study Work Visa list.</li>
                                                                <li>Having a job related to study subjects would be mandatory if applying through the non-degree Level 7 option.</li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className='section-text'>
                                                            It is mandatory to have an acceptable qualification while applying for a PSW in New Zealand.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section faqs pb-0' id='faqs'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center m-left font-alt mb-40 mb-xs-30">
                                            Study in New Zealand FAQs
                                        </h3>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Accordion defaultExpanded>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Is it better to study in New Zealand or Australia?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Australia and New Zealand both come with their perks. There is no specific answer to which is the best, however looking at the course options, universities and scholarship availability, Australia outrank New Zealand. But in terms of post-study options, jobs and better remuneration, New Zealand is a preferred choice. Also, check out: New Zealand vs Australia: Country Comparison
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                    >
                                                    <Typography className='Lato faq-question'>For how long can international students stay on a New Zealand student visa?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        The length of stay for an international student on a student visa in New Zealand is for up to four years. The stay duration depends upon the applicant’s course of study and its period as well.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel3-content"
                                                    id="panel3-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Which factors should influence an applicant’s choice of university in New Zealand?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        There are various factors which influence an applicant’s choice of New Zealand university selection. These include the type of course option for study, post-study-work opportunities, faculty, the scope of the course, etc. Get more details at: Selecting a College in New Zealand for Study.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel4-content"
                                                    id="panel4-header"
                                                    >
                                                    <Typography className='Lato faq-question'>What is the average annual salary of designers in New Zealand?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        The average salary in New Zealand of those who have graduated with various design courses is as follows:<br/>
                                                        •	Web Designer: NZD 54,500<br/>
                                                        •	UX Designer: NZD 47,000<br/>
                                                        •	Industrial Designer: NZD 40,600<br/>
                                                        •	Interior Designer: NZD 35,800<br/>
                                                        •	Graphics Designer: NZD 32,100<br/>
                                                        •	Fashion Designer: NZD 30,700

                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel5-content"
                                                    id="panel5-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How much funds are needed as proof for studying in New Zealand?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato faq-answer'>
                                                            International students will have to submit proof that they have NZD 20,000 per year of the tertiary, English language, or other non-compulsory school study or NZD 1,667 per month if their study is shorter than 1 year.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel6-content"
                                                    id="panel6-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Where can international students enrol in New Zealand for higher education?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato faq-answer'>
                                                            For higher education in New Zealand, international students can enrol across universities in New Zealand or English language schools, private training establishments (PTEs) or Institutes of Polytechnics (ITPs).
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
                                            Intake in New Zealand
                                        </h3>
                                        <div className='section-text text-center mb-50 mb-xs-30'>
                                            Ideally, there are three intakes in Canada namely - Fall intake, Spring intake and the Winter intake. Each of these intakes in Canada follow a different timeline altogether. Check out the section below for the timelines for each of these intakes and how an applicant should prepare.
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
                                                                        All universities almost all courses of study during this intake
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Admission	rates	are higher in this intake
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF FALL INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Maximum applicants apply,  thus,  high competition
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Lower chances	for deferring admissions
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Fall Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="AUG - NOV">
                                                                    <div className='title'>Shortlisting of universities and courses</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Check for courses offered and deadlines to apply</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="OCT - NOV">
                                                                    <div className='title'>Prepare for the tests required for admissions</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Appear for the relevant exams and obtain scores</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="NOV">
                                                                    <div className='title'>Apply for the shortlisted universities</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Mind the deadlines and the courses on offer</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="DEC">
                                                                    <div className='title'>Wait for universities to release admission offers</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Make a decision to accept or reject the offer</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="DEC - JAN">
                                                                    <div className='title'>Accept the offer and apply for student visa</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Appear for visa interviews</li>
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
                                                                        Applications for July intake are also on the higher side
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Admissions are higher in this case also        
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF SPRING INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        High	competition,	thus, lower admit rates
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Not a lot of courses are offered in this intake
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Spring Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="AUG - DEC">
                                                                    <div className='title'>Shortlist the universities you wish to apply to</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Select the course of study and check for deadlines.</li>
                                                                            <li>Also check for eligibility criteria for admission at the university chosen</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="DEC - FEB">
                                                                    <div className='title'>Prepare for ELP tests and other exams too</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Appear for the exams and get a score in hand</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="FEB - MAR">
                                                                    <div className='title'>Begin applications to universities</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Prepare admission essays and other documents which need to be submitted</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="MAR - APR">
                                                                    <div className='title'>Post submissions, respond to mails if any</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Submit any pending documents if the university asks for it</li>
                                                                            <li>In case of interview, then be prepared</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="ARP - JUN">
                                                                    <div className='title'>Complete post selection formalities</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Apply for student visa</li>
                                                                            <li>Start applying for education loans, scholarships</li>
                                                                            <li>Appear for student visa interview</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUN - JUL">
                                                                    <div className='title'>Wait for student visa to arrive</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Upon receiving student visa, plan your travel</li>
                                                                            <li>Finally, prepare to fly for New Zealand</li>
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
                                            <div className='col-md-6'>
                                                <h3 className="hs-line-3 white text-left font-alt mb-20 mb-xs-10">
                                                    Student Visa in<br/> New Zealand
                                                </h3>
                                                <div className='section-text white'>
                                                    <p>Indian students who get a confirmation letter for enrollment at New Zealand universities or PTEs for admission can then apply for a student visa. One application for a student visa in New Zealand costs Indian students NZD 430 if students choose to apply online. 90% of the student visa application forms in New Zealand are assessed within 53 working days, while the average time taken by the New Zealand High Commission for the visa procedure is anywhere between 8 to 12 weeks depending on the individual’s background. So the students need to apply for their visas at least three months prior to their course commencement.</p>
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
                                                        <h3 className="hs-line-3 color text-left font-alt mb-10 mb-xs-20">
                                                            Work Opportunities in New Zealand
                                                        </h3>
                                                        <div className='section-text mb-30 mb-xs-20'>
                                                            There are good chances of finding a job in New Zealand, the reason being that over 20,000+ vacancies open up each year. More and more job opportunities are available for international students to bridge the unemployment gap. In 2022 the unemployment rate as last recorded in the September quarter was 3.3%. Along with this, it was also noted that the wages have also gone up for those working in New Zealand by an average of 2.5% per annum.
                                                        
                                                            <h3 className='fw-700 italic mt-10 mb-10'>Popular Job Sectors in New Zealand</h3>

                                                            There are a variety of popular job sectors in New Zealand in which international applicants can apply for a job opportunity.

                                                            <div className='color-title mb-20'>Some of these popular job sectors of New Zealand are as follows</div>
                                                        </div>

                                                        <div className='row'>
                                                            <div className='col-md-4'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_01} /></div>
                                                                            <div>Construction</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_02} /></div>
                                                                            <div>Business & Finance</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_03} /></div>
                                                                            <div>ICT & Electronics</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_04} /></div>
                                                                            <div>Health & Social Services</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-4'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_05} /></div>
                                                                            <div>Education</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_06} /></div>
                                                                            <div>Engineering</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_07} /></div>
                                                                            <div>Transport</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_08} /></div>
                                                                            <div>Oil & Gas</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-4'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_09} /></div>
                                                                            <div>Science</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_10} /></div>
                                                                            <div>Trade</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_11} /></div>
                                                                            <div>Agriculture & Forestry</div>
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

export default StudyAbroadNZ;