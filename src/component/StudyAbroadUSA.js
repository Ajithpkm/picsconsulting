import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import FooterLogo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
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
import './style.css';
import '../css/verticals.min.css';
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
                                        background: `url(${usa_bg})`,
                                    }}>
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <h1 className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                Study Abroad USA
                                                            </h1>
                                                            <h2 className="hs-line-2 text-center">
                                                                United States of America
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
                                            <div className='col-md-5'>
                                                <h3 className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                    About USA
                                                </h3>
                                                <div className='section-text mb-20'>
                                                    The USA has always remained the top choice for higher studies among international students. According to the US Citizenship and Immigration Services (USCIS), 4,65,700+ Indian students went to the USA for higher studies in 2022. The number of Indian students in the US increased by more than 19% in 2022. The US is home to the maximum number of top universities in the world. There is always an eagerness among international students for going to the US and experience the higher education system there.
                                                </div>

                                                <h3 className='fw-700 italic mb-10'><b>Studying in the USA</b></h3>
                                                <div className='section-text'>
                                                    US universities have carved a niche for themselves in STEM courses. International students looking to pursue higher studies in STEM courses prefer to go to the USA over other options. Also, it is not just the STEM courses, students looking to study business, management or arts courses can also find top universities in the US.
                                                </div>
                                            </div>

                                            <div className='col-md-7'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-700 italic mb-10'><b>Key Facts About USA</b></h3>

                                                    <div className='row mb-20'>
                                                        <div className='col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>963+</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Universities &<br/> Colleges</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>4.66 L</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Indian Students<br/> at 2022</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4'>
                                                            <div className='key-benefits mb-20'>
                                                                <div className='count'>20 Hrs</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Week Port Time<br/> Work Permit</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4'>
                                                            <div className='key-benefits mb-10'>
                                                                <div className='count'>2%</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Economic Growth<br/> Rate at 2023</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4'>
                                                            <div className='key-benefits mb-10'>
                                                                <div className='count'>334.23M</div>
                                                                <div className='divider'></div>
                                                                <div className='desc'>Total Population<br/> at 2023</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-4'>
                                                            <div className='key-benefits-2'>
                                                                <img src={washington_icon} alt="WASHINGTON" />
                                                                <div className='location'>WASHINGTON</div>
                                                                <div className='white'>D.C Capital</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4'>
                                                            <div className='key-benefits-2'>
                                                                <img src={months_icon} alt="12 MONTHS" />
                                                                <div className='location'>12 MONTHS</div>
                                                                <div className='white'>Post Study Work Permit</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-4'>
                                                            <div className='key-benefits-2'>
                                                                <img src={english_icon} alt="ENGLISH" />
                                                                <div className='location'>ENGLISH</div>
                                                                <div className='white'>Primary Language</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-30'>
                                            <div className='col-md-4'>
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

                                            <div className='col-md-4'>
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

                                            <div className='col-md-4'>
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

                                <section className='small-section bg-pos-topcenter bg-scroll pb-100' style={{
                                        background: `url(${highlights_bg})`,
                                }}>
                                    <div className='container-1400 relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-40 mb-xs-10">
                                            Study in USA Highlights
                                        </h3>
                                        <div className='row mb-80'>
                                            <div className='col-md-2'>
                                                <div className='highlights'>
                                                    <div className='desc'>Universities in<br/> the USA</div>
                                                    <div className='icon'><img src={highlight_icon_01} /></div>
                                                    <div className='desc'>3,000+</div>
                                                </div>
                                            </div>

                                            <div className='col-md-2'>
                                                <div className='highlights'>
                                                    <div className='desc'>Average Living<br/> Expense</div>
                                                    <div className='icon'><img src={highlight_icon_02} /></div>
                                                    <div className='desc'>INR 10.5 Lakhs<br/> (Per annum) </div>
                                                </div>
                                            </div>

                                            <div className='col-md-2'>
                                                <div className='highlights'>
                                                    <div className='desc'>Popular Courses<br /> in USA</div>
                                                    <div className='icon'><img src={highlight_icon_03} /></div>
                                                    <div className='desc'>MS | MBA |<br/> B.Tech | MIM </div>
                                                </div>
                                            </div>

                                            <div className='col-md-2'>
                                                <div className='highlights'>
                                                    <div className='desc'>Part-Time Work <br/>Allowance</div>
                                                    <div className='icon'><img src={highlight_icon_04} /></div>
                                                    <div className='desc'>20 Hours/Week</div>
                                                </div>
                                            </div>

                                            <div className='col-md-2'>
                                                <div className='highlights'>
                                                    <div className='desc'>Work Permit In<br/> USA Post-Study</div>
                                                    <div className='icon'><img src={highlight_icon_05} /></div>
                                                    <div className='desc'>12 Months</div>
                                                </div>
                                            </div>

                                            <div className='col-md-2'>
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

                                            <div className='col-md-4'>
                                                <div className='img-round'><img src={education_system_usa} className='img-fluid' /></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-light-gray'>
                                    <div className='container relative'>
                                        <h3 className="hs-line-3 color text-center font-alt mb-20 mb-xs-10">
                                            Top Courses in USA
                                        </h3>
                                        <div className='section-text text-center mb-40'>
                                            Business and management, engineering, mathematics, computer science and social sciences are<br/> some of the popular courses in the USA. US universities are known to offer STEM<br/> (Science, Technology, Engineering, and Mathematics) courses.
                                        </div>

                                        <div className='row d-flex align-items-center mb-60 mb-xs-20'>
                                            <div className='col-md-6'>
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
                                                <div className='section-text mb-30'>
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

                                            <div className='col-md-4'>
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
                                            <div className='col-md-4'>
                                                <div className='img-round'><img src={poststudy_usa} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='inner-column'>
                                                    <h3 className='fw-600 italic mb-20'>Post-Study Work Permit in USA</h3>
                                                    <div className='section-text'>
                                                        International students require an F1-Visa to study in the USA. This visa allows them to stay for 60 days in the USA after their graduation date. F1 visa holders can apply for OPT (Optional Practical Training) after completing their studies. Optional Practical Training (OPT) is a one-year work and stay-back permit given to international students on completion of a degree program in the US. Working after studies in the USA is one of the most important factors that students choose to pursue higher education in the USA. Students should know everything about the post-study work visa in the USA before applying for the program.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='page-section bg-pos-topcenter fixed-height-small bg-scroll pb-100' style={{
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

                                <section className='small-section bg-pos-topcenter bg-scroll pb-100' style={{
                                        background: `url(${workopportunities_usa})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='right-container-2'>
                                            <div className='row g-0 d-flex align-items-center'>
                                                <div className='col-md-4'>
                                                    <div className='img-round'><img src={workopportunities_usa_02} className='img-fluid' /></div>
                                                </div>
                                                <div className='col-md-8'>
                                                    <div className='inner-column'>
                                                        <h3 className="hs-line-3 color text-left font-alt mb-20 mb-xs-10">
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

                                <section className='small-section pt-20'>
                                    <div className="container">
                                        <div className='row g-0 d-flex align-items-end'>
                                            <div className='col-md-4'>
                                                <div className='img-round'><img src={getintouch_usa} className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='right-container'>
                                                    <div className='row d-flex align-items-center'>
                                                        <div className='col-md-8'>
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
                                                    <div className='col-md-3 m-center mb-xs-20'>
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
                                                    <div className='col-md-3 m-center mb-xs-20'>
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
                                                    <div className='col-md-3 m-center mb-xs-20'>
                                                        <div className='footer-widget '> 
                                                            <h5>PICS India, Pondicherry</h5>
                                                            Content to be provided<br/>  by the client <br/> <br/> 
                                                            <button className='map-link' onClick=''>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                                    <path id="Path_12433" data-name="Path 12433" d="M7.575,13.657,20.769,9.231,16.343,22.425l-2.874-5.59a.7.7,0,0,0-.3-.3ZM30,15A15,15,0,1,1,15,0,15.017,15.017,0,0,1,30,15ZM22.382,7.618a.7.7,0,0,0-.721-.169l-16.113,5.4a.7.7,0,0,0-.1,1.292l6.872,3.533,3.533,6.872a.7.7,0,0,0,.625.382l.053,0a.7.7,0,0,0,.614-.477l5.4-16.113a.7.7,0,0,0-.169-.721Z" fill="#182e46"/>
                                                                </svg>  <span>Get Directions</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-3 m-center mb-xs-20'>
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