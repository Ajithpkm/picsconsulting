import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { Box, Typography } from '@mui/material';
import { NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
import { NavDropdownMenu } from "react-bootstrap-submenu";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import whatsappSticky from '../images/whatsapp-big.png';
import Logo from '../images/logo.png';
import FooterLogo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';
import mail from '../images/mail.png';
import call from '../images/call.png';
import usa_bg from '../images/canada/banner-bg.jpg';
import whatsappwhite from '../images/whatsapp-w.png';
import washington_icon from '../images/washington.png';
import months_icon from '../images/12-months.png';
import english_icon from '../images/english.png';
import topranker_icon from '../images/top-ranked.png';
import campus_icon from '../images/campus-culture.png';
import goodquality_icon from '../images/good-quality.png';
import highlight_icon_07 from '../images/aus/icon-07.png';
import education_system_usa from '../images/canada/education-system.jpg';
import admission_requirement from '../images/canada/admission-requirement.jpg';
import admission_aus from '../images/canada/admission-requirement-2.jpg';
import admission_aus_03 from '../images/canada/admission-requirement-3.jpg';
import poststudy_usa from '../images/canada/admission-requirement-4.jpg';
import poststudy_usa_02 from '../images/canada/admission-requirement-5.jpg';
import workopportunities_usa from '../images/work-opportunities-usa.png';
import workopportunities_usa_02 from '../images/canada/workopportunities-canada.jpg';
import getintouch_usa from '../images/getin-touch-usa.jpg';
import opportunities_icon_01 from '../images/canada/managers.png';
import opportunities_icon_02 from '../images/canada/nurses.png';
import opportunities_icon_03 from '../images/canada/medical.png';
import opportunities_icon_04 from '../images/canada/consultant.png';
import opportunities_icon_05 from '../images/canada/software-engineer.png';
import opportunities_icon_06 from '../images/canada/data-scientist.png';
import opportunities_icon_07 from '../images/canada/marketing.png';
import map_usa from '../images/usa-map.png';
import exam_01 from '../images/exam-01.png';
import exam_02 from '../images/exam-02.png';
import exam_03 from '../images/exam-03.png';
import exam_04 from '../images/exam-04.png';
import exam_05 from '../images/exam-05.png';
import exam_06 from '../images/exam-06.png';
import exam_07 from '../images/exam-07.png';
import visa_uk from '../images/canada/document-required.png';
import studentvisa_usa from '../images/canada/student-visa.jpg';
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

const StudyAbroadCanada = () => {
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
                metaDescription.setAttribute('content', 'Studying abroad is a life-changing opportunity that can open doors to unparalleled personal and professional growth. Our Study Abroad Education Consultant in Chennai will be your dedicated partners, leveraging decades of expertise to make your study abroad dreams a reality. From finding the perfect university fit to acing the application process, we handle every step so you can focus on embarking on the adventure of a lifetime.' || '');
            }
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', 'overseas education consultants, study abroad consultants, abroad education consultants, abroad consultancy, study abroad agency, abroad consultancy near me, overseas consultancy, study abroad consultants near me, foreign education consultants' || '');
            }
            }}><title>{ 'Study in Canada: Study Abroad Education Consultant in Chennai' }</title>
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
                                    <section className="home-section bg-scroll abroad-pages-height" style={{
                                        background: `url(${usa_bg})`,
                                    }}>
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <h1 className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                Study Abroad CAN
                                                            </h1>
                                                            <h2 className="hs-line-2 text-center">
                                                                Canada
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
                                                <li><a href='#about-uk' className={menuValue == "1"?'active':''} onClick={activeMenu("1")}>About CAN</a></li>
                                                <li><a href='#uk-highlights' className={menuValue == "2"?'active':''} onClick={activeMenu("2")}>CAN Highlights</a></li>
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
                                    
                                        <div className='row d-flex align-items-center justify-content-between'>
                                            <div className='col-md-5'>
                                                <h3 className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                    About Canada
                                                </h3>
                                                <div className='section-text mb-20'>
                                                    Canada is one of the most preferred destinations for international students. According to the Immigration, Refugees and Citizenship Canada (IRCC) data for the year 2022, Canada saw 551,405 international students from 184 countries. Out of these, 1,83,310 students were Indian students. As of December 31, 2022, India ranked amongst the top 10 countries in terms of source nations for foreign students studying in Canada. 
                                                </div>

                                                <div className='section-text'>
                                                    <p>Every year, Canada welcomes hundreds of thousands of international students from around the globe. Some of the reasons to study in Canada include a high standard of living, flexible and quality education options, a diverse and inclusive environment, affordable education, and long-term return on investment. As per the U.S. News & World Report 2022, Canada ranks at 3rd place globally for the best quality of life. Let us look at an overview of studying in Canada for international students.</p>
                                                    
                                                    Many top-ranked universities of Canada have made it to the top 200 in the world according to the Times Higher Education and QS WUR rankings for 2024. With ample state-of-the-art education institutes present and affordable tuition fees, Canada has become a major study destination for international students who want to pursue higher education.
                                                </div>
                                            </div>

                                            <div className='col-md-7 mt-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-700 italic mb-10'><b>Key Facts About Canada</b></h3>

                                                    <div className='row mb-20'>
                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>156+  </div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Universities &<br/> Colleges</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>3.2L</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Indian Students<br/> at 2022</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>24 Hrs/Week</div>
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
                                                                <div className='count'>40.5M</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Total Population<br/> at 2023</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-4 mb-xs-20'>
                                                            <div className='key-benefits-2'>
                                                                <img src={washington_icon} alt="OTTAWA" />
                                                                <div>
                                                                    <div className='location'>OTTAWA</div>
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
                                                            <img src={topranker_icon} alt="Reputed Universities" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Reputed<br/> Universities</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Canadian universities offer globally respected qualifications</li>
                                                            <li>Access to abundant research programs and a broad range of disciplines</li>
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
                                                            <li>Stringent safety measures ensure a secure campus atmosphere</li>
                                                            <li>Campus services aid students promoting well-being and academic success</li>
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
                                                        <h3 className='alt-services-title'>Safe Place to<br/> Study</h3>
                                                    </div>
                                                    
                                                    <div className='list-style-2'>
                                                        <ul>
                                                            <li>Stunning landscapes offer o peaceful and picturesque to daily life</li>
                                                            <li>Robust economy provides diverse employment prospects for students</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pb-xs-50' id='uk-highlights'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-left font-alt mb-20 mb-xs-30">
                                            Top Reasons to Study in the Canada
                                        </h3>
                                        <h3 className='fw-600 italic mb-20'>Some of the benefits of studying in Canada<br/> for international students include:</h3>
                                    </div>
                                    
                                    <div className='container'>
                                        <div className='row d-flex align-items-center'>
                                            <div className='col-md-12'>

                                                <div className='list-style-3 mb-20'>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <ul>
                                                                <li><span className='uppercase color-2'>World-class universities:</span> Canadian universities are ranked among the top universities in the world. In the QS World University Rankings 2024, a total of 9 Canadian universities are within the first 200 ranks. Whereas, in the Times Higher Education (THE) World Universities Rankings 2023, a total of 7 universities are in the 200 ranks.</li>
 
                                                                <li><span className='uppercase color-2'>WAffordable education:</span> Compared to the US and UK, the tuition fee in Canada is fairly cheaper. If we consider the return on investment, Canada is quite a viable option for Indian students. One can also apply for a range of Canadian scholarships to cut down the educational expenses.</li> 
                                                            
                                                                <li><span className='uppercase color-2'>WCultural diversity:</span> There are very welcoming and warm people who come from varied ethnic groups with different cultures and lifestyles. This multicultural environment in Canada is one of the noteworthy factors that attract international students as it promotes friendliness and peaceful living like no other country. In Canada, there are more than 250 ethnic origins along with 200 languages from around the world and 70 indigenous languages spoken.</li>
                                                            
                                                                <li><span className='uppercase color-2'>WLively and vibrant campus life:</span> At Canadian universities, students can expect fests, events, and activities to be conducted throughout the year. This creates a lively and happy environment for all the students as it helps in making a network and meeting new people, whilst keeping the homesickness away.</li>
                                                            
                                                                <li><span className='uppercase color-2'>WImmigration opportunities:</span> The Post-Graduation Work Permit (PGWP Canada) in Canada shall allow students to stay there and get some work experience after the completion of graduation. The maximum length of a PGWP is three years.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pb-xs-30'>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-8'>
                                                <h3 className="hs-line-3 color text-left font-alt mb-20 mb-xs-30">
                                                    Education System in Canada
                                                </h3>
                                                <div className='section-text mb-20'>
                                                    As mentioned above, Canada is recognized for providing affordable education. The education system in Canada is managed by the provincial governments. The study levels and educational stages may vary across different clusters.
                                                </div>
                                                <h3 className='fw-600 italic mb-20'>Check the details for the same given below.</h3>

                                                <div className='education-system'>
                                                    <table className='table'>
                                                        <thead>
                                                            <tr>
                                                                <th>Qualification</th>
                                                                <th>Duration</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Certificates and Diplomas</td>
                                                                <td>1-2 years</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Associate Degree</td>
                                                                <td>2 years</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Bachelor’s degree</td>
                                                                <td>1-2 years</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Associate Degree</td>
                                                                <td>3- 4 years</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Post Graduate Diploma</td>
                                                                <td>1 - 2years</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Master’s Degree</td>
                                                                <td>1 - 2 years</td>
                                                            </tr>
                                                            <tr>
                                                                <td>PhD or Doctorate</td>
                                                                <td>1 - 2 years</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Post Doctoral Program</td>
                                                                <td>No time limit</td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>

                                            <div className='col-md-4'>
                                                <div className='inner-column'>
                                                    <div className='img-round'><img src={education_system_usa} className='img-fluid' /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>

                                <section className='small-section bg-light-gray' id='top-courses'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center m-left font-alt mb-20 mb-xs-10">
                                            Top Courses in Canada
                                        </h3>
                                        <div className='section-text text-center m-left mb-40 mb-xs-20'>
                                            Canada is the most popular destination for undergraduate and postgraduate studies. Certificate / Diploma courses are also offered at Canadian universities. Given below is a list of the courses in Canada that remain high in demand.
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            
                                            <div className='col-md-6 mb-xs-20'>
                                                <div className='img-round'><img src={admission_requirement} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-6 mb-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-600 italic mb-20'>The top-ranking courses in Canada for international students are:</h3>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Business Management</li>
                                                                    <li>IT & Computer Science</li>
                                                                    <li>Engineering</li>
                                                                    <li>Media & Journalism</li>
                                                                    <li>Law in Australia</li>
                                                                    <li>Health, Biosciences & Pharmacy</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Agriculture Science</li>
                                                                    <li>Architecture</li>
                                                                    <li>Culinary Management</li>
                                                                    <li>Hospitality Management</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-7 mb-xs-20 xs-order-2'>
                                                <h3 className='fw-600 italic mb-20'>Admission Requirements to Study in Canada Universities</h3>
                                                <div className='section-text'>
                                                    The eligibility requirements to study in Canada will vary from course to course and from university to university. Some of the basic eligibility requirements are given below.
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>Academic transcripts</li>
                                                                <li>Standardized test scores - SAT</li>
                                                                <li>Standardized test scores - GMAT / GRE / LSAT</li>
                                                                <li>English language proficiency test scores: TOEFL / IELTS / PTE / Duolingo / CAEL</li>
                                                                <li>Statement of Purpose</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='list-style-3'>
                                                            <ul>
                                                                <li>Essays</li>
                                                                <li>Provincial Attestation Letter (PAL)</li>
                                                                <li>Letter of Recommendation</li>
                                                                <li>Proof of finances (Guaranteed Investment Certificate)</li>
                                                                <li>Copy of your valid passport</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className='col-md-5 xs-order-1 mb-xs-20'>
                                                <div className='inner-column'>
                                                    <div className='img-round'><img src={admission_aus} className='img-fluid' /></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            
                                            <div className='col-md-5 mb-xs-20'>
                                                <div className='img-round'><img src={admission_aus_03} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-7 mb-xs-20'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-600 italic mb-20'>Top Cities Preferred by  Students in Canada</h3>
                                                    <div className='section-text'>
                                                        Canada is home to some of the top-ranked universities in the world as per many global ranking providers. These universities are located in some of the popular cities like Toronto, Montreal, Ottawa, etc. Many big and small cities are there for students to study in Canada. In addition, these cities offer a lifestyle similar to that of the U.S. and provide employment opportunities to students. Check the popular student cities in canada below.
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Montreal</li>
                                                                    <li>Toronto</li>
                                                                    <li>Vancouver</li>
                                                                    <li>Ottawa</li>
                                                                    <li>Quebec</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='list-style-3'>
                                                                <ul>
                                                                    <li>Edmonton</li>
                                                                    <li>Winnipeg</li>
                                                                    <li>Calgary</li>
                                                                    <li>Saskatoon</li>
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
                                                            <img src={highlight_icon_07} alt="Scholarships to Study in Canada" />
                                                        </div>
                                                        <h3 className='alt-services-title'>Scholarships to Study in Canada</h3>
                                                    </div>

                                                    <div className='section-text'>
                                                        At the time of deciding to study abroad, one thing that lingers generally in the minds of international students is the cost of studying. However, the tuition fee in Canada is less than in other developed countries like the U.S. and the U.K. There are some scholarships available for meritorious students who want to study in Canada. In order to avail of the scholarships to study in canada students need to have a track of good academics and extra-curricular achievements. Need-based scholarships are also available for students.
                                                    </div>

                                                    <h4 className='color-title mb-10'>Some of the Canada scholarships for Indian students are given below:</h4>
                                                    <div className='list-style-3 mb-20'>
                                                        <ul>
                                                            <li>QS Undergraduate Scholarship: Maximum scholarship per student is USD 5,000 </li>
                                                            <li>Jared J. Davis Grant: Maximum scholarship per student is USD 1,000</li>
                                                            <li>Hani Zeini Scholarships: The maximum scholarship amount per student is USD 1,000</li>
                                                            <li>University of Calgary international entrance scholarship: Maximum scholarship amount per student is CAD 15,000</li>
                                                            <li>UBC Karen Mckellin International Leader of Tomorrow Award.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-8 xs-order-2'>
                                                <h3 className='fw-600 italic mb-20'>Education Loans for Studying in Canada</h3>
                                                <div className='section-text'>
                                                    <p className='mb-10'>Canada is the most preferred destination to study abroad by international students. The cost of studying in canada entirely depends on the course, university, duration of the course, and the cost of living. Not everyone can afford to study and live in Canada. This is why various banks and financial institutions offer education loans to students who want to study in Canada.</p>

                                                    <p className='mb-10'>Before applying for an educational loan to study in canada, check the eligibility criteria in advance in order to get the loan approval. Note that different types of expenses are covered under different schemes, so check with the banks to know what expenses are covered in the education loan scheme. Some of the expenses covered under the educational loan are:</p>

                                                    <div className='list-style-3 mb-20'>
                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <ul>
                                                                    <li>Tuition fees</li>
                                                                    <li>Travel expenses</li>
                                                                    <li>Cost of buying books and other study material</li>
                                                                    <li>Hostel fee</li>
                                                                </ul>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <ul>
                                                                    <li>Laboratory fee</li>
                                                                    <li>Purchase of laptop</li>
                                                                    <li>Expenses for study tours or project tours</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 xs-order-1 mb-xs-20'>
                                                <div className='inner-column'>
                                                    <div className='img-round'><img src={poststudy_usa} className='img-fluid' /></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-4 mb-xs-20'>
                                                <div className='img-round'><img src={poststudy_usa_02} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-600 italic mb-20'>Part-time Work Options for International Students in Canada</h3>
                                                    <div className='section-text'>
                                                        <p className='mb-10'>On the Canadian student visa, students can work for 20 hours/week on a paid job, while studying. Generally, for part time jobs in canada, students are paid by hours. On average, the rate of pay is around $13-16 an hour.</p> 
                                                    
                                                        <p>However, recently, international students who are in Canada and who have off-campus work authorization on their study permit shall not be restricted by the rule of 20 hours per week. Generally, students can work full-time during school breaks.</p>

                                                        <h3 className='color-title mb-10'>Post-Study Work Permit in Canada</h3>
                                                        
                                                        <p className='mb-10'>Obtaining a post-graduation work permit while studying in Canada depends a lot on the course and its duration. A work permit under the PGWP Canada is generally issued for the length of the study program. The maximum length of PGWP Canada is 3 years.</p>
                                                        
                                                        <p>A Post Graduation work permit in Canada allows students to stay there and gain some work experience after completing their graduation. In the long run, getting skilled Canadian work experience through PGWP allows graduates to qualify for PR in Canada within Express Entry.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section faqs pb-0' id='faqs'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center m-left font-alt mb-40 mb-xs-30">
                                            Study in Canada FAQs
                                        </h3>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Accordion defaultExpanded>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How much does it cost to study in Canada?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        The cost of studying in Canada can range from CAD 6,800 to CAD 112,500 per year depending on your course, university, and university campus. When it comes to the average cost of studying in Canada, it may range from CAD 12,000 to CAD 35,000. Living Expenses in Canada range average around CAD 19,000 per year; however, these depend on your location, lifestyle, dietary habits, etc. Keep in mind that these prices represent averages and may change based on the institution and area. Furthermore, foreign students should be aware of additional charges such as application fees, health insurance, textbooks, and other costs.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Is Canada cheap to study in?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Studying in Canada is more affordable than studying in other countries. In Canada, students can apply for scholarships and work opportunities in order to pay for their education. Many eligible international students are eligible to work during their studies and can get a post-graduation work permit after their studies. The tuition fee in Canada is generally lower than in colleges and universities in the UK, USA, and Australia.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel3-content"
                                                    id="panel3-header"
                                                    >
                                                    <Typography className='Lato faq-question'>How can I go to study in Canada?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        In order to go to study in Canada, you are first required to apply for a study permit before you come to Canada. To apply for a study permit, make sure you meet all the eligibility requirements. Apart from this, submit documents like proof of acceptance from the designated university, proof of identity, proof of financial support, etc.
 
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel4-content"
                                                    id="panel4-header"
                                                    >
                                                    <Typography className='Lato faq-question'>What are the top courses to study in Canada?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className='Lato faq-answer'>
                                                        Some of the top courses to study in Canada are Engineering; Information Technology; Biosciences, Medical and Healthcare; MBA, Media & Journalism; Human Resources, etc. It should be noted that this is not a comprehensive list and that Canada offers a wide variety of additional courses and programmes. What course is suitable for you will depend on your interests, abilities, and professional objectives. On the websites of Canadian universities and colleges, you can get more details about certain programmes and courses.
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandCircleDownIcon />}
                                                    aria-controls="panel5-content"
                                                    id="panel5-header"
                                                    >
                                                    <Typography className='Lato faq-question'>Which are the top universities in Canada?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato faq-answer'>
                                                        Canada has many top-ranked universities, and here are some of the highest-ranked universities in Canada based on various global rankings: University of Toronto; University of British Columbia; McGill University; University of Alberta; University of Montreal; McMaster University; University of Waterloo; Western University; University of Calgary; and Queen's University.<br/><br/>Please take note that the rankings are subject to change each year and are determined by the methods employed by the ranking organisation. Before making any judgements, it is crucial to do some study and comprehend the intricacies of each ranking. Students who are interested in studying in Canada can visit the websites of these universities to learn more about their programmes.

                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>    
                                </section>

                                <section className='page-section pt-70 pb-50 pt-xs-40' id='timelines'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-20 mb-xs-30">
                                            Intake in Canada
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
                                                        <Tab label="Winter Intake &  Timeline" value="2" />
                                                    </TabList>
                                                    </Box>
                                                    <TabPanel value="1">
                                                        <div className='row mb-50'>
                                                            <div className='col-md-6 mb-xs-20'>
                                                                <div className='pros'>
                                                                    <p className='mb-10 white fs-16'><b>PROS OF FALL INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        More scholarship opportunities
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Better job prospects after graduation
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Great exposure to a diverse	student community
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF FALL INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Cost of living and tuition fees can be expensive
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Long and cold winter seasons majority of Canada
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabPanel>
                                                    <TabPanel value="2">
                                                    <div className='row mb-50'>
                                                            <div className='col-md-6 mb-xs-20'>
                                                                <div className='pros'>
                                                                    <p className='mb-10 white fs-16'><b>PROS OF WINTER INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Next best intake after Fall intake cycle of Canada
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Competition	is	slightly lower than Fall intake
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Accommodation	prices are lower for applicants
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='cons'>
                                                                    <p className='mb-10 white fs-16'><b>CONS OF WINTER INTAKE</b></p>

                                                                    <div className='list-intake'>
                                                                        Not the primary intake, hence lower course options
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Weather conditions are tougher during this time
                                                                    </div>
                                                                    <div className='list-intake'>
                                                                        Lower funding options for applicants
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-10 m-center'>Winter Intake Timelines</h3>

                                                        <div className='timelines'>
                                                            <ul className="timeline">
                                                                <li className="timeline-item" data-date="APR - JUN">
                                                                    <div className='title'>Research and analyze</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Research universities in Canada with Spring Intake</li>
                                                                            <li>Understand the eligibility criteria and admission requirements</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JUL - SEP">
                                                                    <div className='title'>Prepare and attempt tests</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Appear for the tests such as the GMAT, GRE, etc.</li>
                                                                            <li>Appear for English Language tests such as IELTS, TOEFL, etc.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="SEP - JAN">
                                                                    <div className='title'>Fill out application form</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Apply to Canadian universities offering spring intake courses.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="JAN- FEB">
                                                                    <div className='title'>Offer Acceptance</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Accept admission and start working on your Canada student visa.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="MAR - APR">
                                                                    <div className='title'>Make Arrangements</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Make all the necessary arrangements such as accommodation, tickets, etc.</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li className="timeline-item" data-date="MAY">
                                                                    <div className='title'>Intake starts</div>
                                                                    <div class="list-style-3">
                                                                        <ul>
                                                                            <li>Start your study abroad journey.</li>
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
                                                    Student Visa in Canada
                                                </h3>
                                                <div className='section-text white'>
                                                    <p>If you wish to take academic, professional or vocational training at a university, college or other educational institution in Canada, you will need a Canada student visa before you enter Canada.</p>
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
                                            Exams Required to Study in Canada
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
                                                            Work Opportunities in Canada
                                                        </h3>
                                                        <div className='section-text mb-30 mb-xs-20'>
                                                            <p className='mb-10'>According to a recent study 60% of international students who were employed during their period of study or after graduation became landed immigrants within 10 years of having obtained their first study permit as per Statistics Canada, 2021.</p>

                                                            <p className='mb-10'>According to the Organisation for Economic Co-operation and Development (OECD), economic growth in Canada in real GDP is projected to slow from 3.2% in 2022 to 1% in 2023, before strengthening to 1.3% in 2024. Some of the popular job sectors In canada are Education, healthcare, and IT.</p>
                                                        </div>

                                                        <h3 className='fw-700 italic mb-30'>Some of the most popular job sectors in Canada for employment are:</h3>

                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_01} /></div>
                                                                            <div>Project Managers</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_02} /></div>
                                                                            <div>Registered Nurses</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_03} /></div>
                                                                            <div>Cardiologist</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_04} /></div>
                                                                            <div>Management Consultant</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className='icon-listing'>
                                                                    <ul>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_05} /></div>
                                                                            <div>Software Engineer</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_06} /></div>
                                                                            <div>Data Scientist</div>
                                                                        </li>
                                                                        <li>
                                                                            <div><img src={opportunities_icon_07} /></div>
                                                                            <div>Marketing Officer</div>
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

export default StudyAbroadCanada;