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
                                        <a href="index" className="logo">
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
                                                    <p>PICS mission is to provide Personalised, Transparent and Dedicated consulting service that helps you make the make right decision and empowers you to reach your full potential and meet your needs. AT PICS we want the best outcomes for ALL.</p>
                                                    <p>Whether the student wanted to attend a top university in UK, USA, Canada or Australia, our PICS Consultant is here to support each student with a tailored approach and highest standard of educational consultation service. A service that helps you make a lifetime decision.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pt-0'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-4'>
                                                <div className='image-rounded wow fadeInDown' data-wow-delay="0.1s"><img src={vetri} alt="" className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='inner-container'>
                                                    <div className='hs-line-7'>Meet the Founder</div>
                                                    <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                        Vetri Pappa
                                                    </div>
                                                    <div className='section-text'>
                                                        <p>Vetri is from India and founded PICS ( Pappa International Consultants) a pathway to Study or Work Consultancy. Pappa is a family name , an informal term for a father.</p>
                                                        <p>Vetri, after completing his Bachelors in India and travelled to UK in 2007 for his Masters Degree in Business Management and graduated from Heriot-Watt University . From being a student to CEO at PICS , Pappa groups Ltd , lives and resides in UK over 15 years , Married, Owns a home in UK and also recently elected City Councillor and a father of one.
                                                            <a onClick={() => setvertriPapaReadMore(!vertriPapaReadMore)} href='javascript:;' className='readmore'>{vertriPapaReadMore ? '' : 'Read more'}</a>
                                                        </p>

                                                        {vertriPapaReadMore && <div className='additonal-content'>
                                                            <p>“As a student who came to the UK for a degree program, I know firsthand how beneficial and life-changing it can be to receive a support in making a lifetime decision to choose an International university to study or even an International country to work”</p>

                                                            <p>Vetri Co-founded PICS with Andre and handful of his other contacts who he built life-long relationships with, in the belief that together they could positively impact students all over the world.</p>

                                                            <p>Our PICS Consultants is a team of experts who have experience in helping applicants achieving their long-term goals is the most effective approach in helping them be successful. Vetri’s international experience continues to be motivation behind providing the highest standard of educational services and advice to students around the world, sharing the knowledge and support he was so grateful to have received himself.
                                                                <a onClick={() => setvertriPapaReadMore(!vertriPapaReadMore)} href='javascript:;' className='readmore'>{vertriPapaReadMore ? 'Read Less' : ''}</a>
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
                                                    <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                        Andre
                                                    </div>
                                                    <div className='section-text'>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id odio et metus faucibus tempor vel ac neque. Vestibulum rhoncus mauris non velit efficitur convallis. Nam congue, nisi eget semper efficitur, felis tortor vulputate risus, in imperdiet nisi diam ac augue. Etiam in orci vel mauris vestibulum rhoncus sit amet sollicitudin nulla. Nulla ex dui, scelerisque a ligula nec, tincidunt imperdiet tellus. Maecenas egestas, risus a interdum semper, sem ex fermentum ante, in commodo ex arcu gravida.
                                                            <a onClick={() => setandreReadMore(!andreReadMore)} href='javascript:;' className='readmore'>{andreReadMore ? '' : 'Read more'}</a>
                                                        </p>

                                                        {andreReadMore && <div className='additonal-content'>
                                                            <p>Sed mi ex, convallis id tempus sit amet, dictum at nunc. Quisque ut ipsum scelerisque, volutpat mauris nec, egestas lorem. Duis hendrerit elit at venenatis hendrerit. Sed consectetur laoreet tristique. Nam eu nibh fringilla, iaculis nunc placerat, accumsan purus. Duis eu nisl in leo iaculis venenatis ac quis risus. Nulla nec urna dignissim, rutrum augue sed, rhoncus nulla. Fusce lacinia erat enim. Cras vel elit condimentum, euismod metus a, lobortis ligula. Cras cursus interdum posuere.</p>

                                                            <p>Sed mi ex, convallis id tempus sit amet, dictum at nunc. Quisque ut ipsum scelerisque, volutpat mauris nec, egestas lorem. Duis hendrerit elit at venenatis hendrerit. Sed consectetur laoreet tristique. Nam eu nibh fringilla, iaculis nunc placerat.
                                                                <a onClick={() => setandreReadMore(!andreReadMore)} href='javascript:;' className='readmore'>{andreReadMore ? 'Read Less' : ''}</a>
                                                            </p>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='image-rounded wow fadeInDown' data-wow-delay="0.1s"><img src={andre} alt="" className='img-fluid' /></div>
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
                                                <div className='row d-flex justify-content-center mb-20'>
                                                    <div className='col-md-8'>
                                                        <div className='section-text text-center'>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Box className="mt-10">
                                                    <Grid sx={{ mb: 2 }} className="comp-bx" container spacing={2}>
                                                        <Grid item xs={12} sm={4}>
                                                            <div className="pics-values wow fadeInDown" data-wow-delay="0.1s">
                                                                <div className='icon'><img src={optimization} /></div>
                                                                <h4>Speed</h4>
                                                                <p>Communication is key. We aim to provide a tailored, dedicated consulting support and one of the main aspect is responding faster and ensuring the applicant is kept updated at all levels and times.</p>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <div className="pics-values wow fadeInDown" data-wow-delay="0.2s">
                                                                <div className='icon'><img src={outsourcing} /></div>
                                                                <h4>Lead Together</h4>
                                                                <p>PICS employees and the applicants are the heart of the PICS operation. We strongly believe giving the right guidance to applicants and growing the team is key. We welcome new ideas and learn from each other and grow together.</p>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <div className="pics-values wow fadeInDown" data-wow-delay="0.3s">
                                                                <div className='icon'><img src={outline} /></div>
                                                                <h4>Transparency</h4>
                                                                <p>Transparency lead to Trust. At PICS we place value in doing things right, right things, establishing trust and enduring relationships with applicants, ensuring the trust is kept.</p>
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
                                        <div className="col-md-3 text-center">
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

                                            <div className='row pt-40 pb-40'>
                                                <div className='col-md-4'>
                                                    <div className='footer-widget'>
                                                        <div className='title'>PICS - Headquarters</div>
                                                        Head Quarters : 27, Duke Street, Chelmsford, England, CM1 1HT, UK
                                                        {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className='footer-widget'>
                                                        <div className='title'>india</div>
                                                        Head Quarters : 27, Duke Street, Chelmsford, England, CM1 1HT, UK
                                                        {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className='footer-widget'>
                                                        <div className="social-icons mb-10">
                                                            <ul>
                                                                <li><a href="https://www.facebook.com/pappaconsultants" target='_blank'><img src={facebook} /></a></li>
                                                                <li><a href="https://www.instagram.com/picsconsultants/" target='_blank'><img src={instagram} /></a></li>
                                                                <li><a href="#"><img src={whatsapp} /></a></li>
                                                            </ul>
                                                        </div>
                                                        @PICSConsultants
                                                    </div>
                                                </div>
                                            </div>

                                            <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>contact@pics.global</button>

                                            <div className="footer-copy pt-20 pb-0">
                                                Copyright@2024 Pappa International LTD t/a PICS | REG NO: 13199591
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