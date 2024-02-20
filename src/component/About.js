import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WOW from 'wowjs';
import { Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import vetri from '../images/vetri.jpg';
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, [])

    new WOW.WOW({
        live: false
    }).init();

    return (
        <>
            <div>
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
                                            {/* <li className="active"><a href="/">study international</a></li>
                                            <li><a href="about">About</a></li>
                                            <li><a href="faq">FAQ</a></li> */}
                                            <li><button onClick={handleOpenContact} className='btn btn-mod btn-w btn-circle btn-medium'>Get in Touch</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <main id="main">
                                <div className="home-section fullwidth-slider" id="home">
                                    <section className="home-section bg-scroll fixed-height-medium" style={{
                                        background: `url(${about_bg})`,
                                    }}>
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <div className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                About Us
                                                            </div>
                                                            <div className="hs-line-2 text-center">
                                                                We have walked this path many times before<br />and we are here to help you find your path
                                                            </div>
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
                                                <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                    Our Mission
                                                </div>
                                                <div className='section-text'>
                                                    <p>PICS mission is to provide Personalized, Transparent and Dedicated consulting service that helps you make the make right decision which empowers you to reach your full potential and meet your needs. <b>AT PICS we want the best outcomes for ALL.</b></p>
                                                    <p>Whether the student wanted to attend a top university in UK, USA, Canada or Australia, our PICS Consultant is here to support each student with a tailored approach and highest standard of educational consultation service. <b>A service that helps you make a lifetime decision.</b></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pt-0'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-4'>
                                                <div className='image-rounded'><img src={vetri} alt="" className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='inner-container'>
                                                    <div className='hs-line-7'>Meet the Founder</div>
                                                    <div className="hs-line-8 color font-alt mb-20 mb-xs-10">
                                                        Vetri Pappa MSc (UK), B.Tech (India)
                                                    </div>
                                                    <div className='section-text'>
                                                        <p>Vetri is from India and founded PICS ( Pappa International Consultants) a pathway to International Study & Work Consultancy. Pappa is a family name , Pappa is an informal term for a father in India.</p>
                                                        <p>Vetri, after completing his Bachelors in India and travelled to UK in 2007 for his master’s degree in business management and graduated from Heriot-Watt University . From being a student to Founder & Director at PICS , Pappa groups Ltd (Management & IT Consultants) , lives and resides in UK over 15 years , Married, Father of one , Homeowner in UK and also recently elected City Councilor. <a onClick={() => setvertriPapaReadMore(!vertriPapaReadMore)} href='javascript:;' className='readmore'>{vertriPapaReadMore ? '' : 'Read more'}</a>
                                                        </p>

                                                        {vertriPapaReadMore && <div className='additonal-content'>
                                                            <p><b>“As an international student who came for a UK degree program, I truly understand how beneficial and life-changing it can be to receive a support from an educational consultant in making a lifetime decision to choose an International university to study or even an International country to work” </b></p>

                                                            <p>Vetri Co-founded PICS with Andre and handful of his other contacts who he built life-long relationships with, in the belief that together they could positively impact students all over the world.</p>

                                                            <p>Our PICS Consultants is a team of experts who have experience in helping applicants achieving their long-term goals is the most effective approach in helping them be successful. Vetri’s international experience continues to be motivation behind providing the highest standard of educational services and advice to students around the world, sharing the knowledge and support he was so grateful to have received himself. <a onClick={() => setvertriPapaReadMore(!vertriPapaReadMore)} href='javascript:;' className='readmore'>{vertriPapaReadMore ? 'Read less' : ''}</a>
                                                            </p>
                                                        </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pt-0'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>

                                            <div className='col-md-8'>
                                                <div className='inner-container-right'>
                                                    <div className='hs-line-7'>Meet the co-Founder</div>
                                                    <div className="hs-line-8 color font-alt mb-20 mb-xs-10">
                                                        Andre Ribeiro
                                                    </div>
                                                    <div className='section-text'>
                                                        <p>Born in Portugal, an Economics Student that had to move over to Uk in the search of an opportunity and a better life, Andre spent the last decade, since moving to the Uk in 2002, working in the hospitality industry.</p>  
                                                        <p>Recruitment, Training, Developing and Mentoring a wide range of diversified teams, all over the UK, are the strongest skills set that he adds to PICS. He is focused on people and ensuring that everyone has the opportunity to excel and follow their dreams and ambitions. <a onClick={() => setandreReadMore(!andreReadMore)} href='javascript:;' className='readmore'>{andreReadMore ? '' : 'Read more'}</a></p>

                                                        {andreReadMore && <div className='additonal-content'>
                                                            <p><b>"PICS allows us to provide opportunities for all the students across the world that want to have access to the best education systems. These students will be able to go out there and make a life for themselves. We want to be remembered as the ones who helped them to do so. We want to provide them with their life changing opportunity and help them all along the way."</b></p>

                                                            <p>Vetri and Andre crossed paths in 2023 and soon after they're first encounter, they understood that together they would be able to build something big, PICS. Join us in our mission today and let us guide you on this life changing pathway. <a onClick={() => setandreReadMore(!andreReadMore)} href='javascript:;' className='readmore'>{andreReadMore ? 'Read less' : ''}</a>
                                                            </p>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='image-rounded'><img src={andre} alt="" className='img-fluid' /></div>
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
                                                <div className="hs-line-3 color-2 text-center font-alt mb-20 mb-xs-10">
                                                    PICS Values
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Box className="mt-10">
                                                    <Grid sx={{ mb: 2 }} className="comp-bx" container spacing={2}>
                                                        <Grid item xs={12} sm={4}>
                                                            <div className="pics-values">
                                                                <div className='icon'><img src={optimization} /></div>
                                                                <h4>Speed</h4>
                                                                <p>Communication is key. We aim to provide a tailored, dedicated consulting support and one of the main aspect is responding faster and ensuring the applicant is kept updated at all levels and times of this process.</p>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <div className="pics-values">
                                                                <div className='icon'><img src={outsourcing} /></div>
                                                                <h4>Lead Together</h4>
                                                                <p>PICS employees and the applicants are the heart of the PICS operation. We strongly believe giving the right guidance to applicants and growing the team is key. We welcome new ideas and learn from each other and grow together.</p>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <div className="pics-values">
                                                                <div className='icon'><img src={outline} /></div>
                                                                <h4>Transparency</h4>
                                                                <p>Transparency leads to Trust. At PICS we place value in doing things right, right things, establishing trust and enduring relationships with applicants, ensuring the trust is kept.</p>
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <div className='mt-30 mb-20 text-center'>
                                                    <a href='javascript:;' className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
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
                                            <a href="#top"><img src={footer_logo} alt="PICS Consultants" /></a>
                                        </div>
                                        <div className="col-md-9">
                                            {/* <div className="footer-menu">
                                                <ul className="clearlist">
                                                    <li><a href="#">Study International</a></li>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact</a></li>
                                                    <li><a href="#">Terms & conditions</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Cookie Policy</a></li>
                                                </ul>
                                            </div> */}
                                            <div className='footer-widget'>
                                                <div className='title'>PICS Offices</div>
                                            </div>
                                            <div className='row pt-0 pb-10 pt-xs-20 pb-xs-10'>
                                                <div className='col-md-4 m-center mb-xs-20'>
                                                    <div className='footer-widget '>
                                                        UK - 27 Duke St, Vision Offices, <br />Chelmsford, CM1 1HT
                                                        {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-4 m-center mb-xs-20'>
                                                    <div className='footer-widget'>
                                                        India - Launching Soon
                                                        {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-4 m-center mb-xs-20'>
                                                    <div className='footer-widget'>
                                                        <div className="social-icons mb-10">
                                                            <ul>
                                                                <li><a href="https://www.facebook.com/pappaconsultants" target='_blank'><img src={facebook} /></a></li>
                                                                <li><a href="https://www.instagram.com/picsconsultants/" target='_blank'><img src={instagram} /></a></li>
                                                                <li><a href="https://api.whatsapp.com/send?phone=447510830896" target='_blank'><img src={whatsapp} /></a></li>
                                                            </ul>
                                                        </div>
                                                        @PICSConsultants
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='m-center'>
                                                <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>contact@pics.global</button>
                                            </div>
                                            <div className="footer-copy pt-20 pb-0 m-center">
                                                Copyright@2024 Pappa International LTD. T/A PICS Consultants | REG NO: 13199591
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