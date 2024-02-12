import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import university_01 from '../images/united-kingdom.png';
import university_02 from '../images/united-states.png';
import university_03 from '../images/canada.png';
import university_04 from '../images/australia.png';
import pics_consultants from '../images/pics_consultants.jpg';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import slider_01 from '../images/home-bg.jpg';
import application_service_bg from '../images/application-service-bg.jpg';
import unversity_bg from '../images/university-bg.jpg';
import icon_01 from '../images/university-offer.svg';
import icon_02 from '../images/dedicated-pics-consultant.svg';
import icon_03 from '../images/professional-service.svg';
import university_list from '../images/university-list.jpg';
import uk_01 from '../images/uk-01.png';
import uk_02 from '../images/uk-02.png';
import uk_03 from '../images/uk-03.png';
import uk_04 from '../images/uk-04.png';
import uk_05 from '../images/uk-05.png';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal'
import './style.css';
import '../css/verticals.min.css';
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
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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

    return (
        <div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
                <title>PICS Consultants</title>
                <a href="#main" className="btn skip-to-content">Skip to Content</a>
                <div className="page" id="top">
                    <nav className={isScrollValueMoreThanHeaderHeight ? "main-nav stick-fixed sticky-header" : "main-nav stick-fixed"}>
                        <div className="full-wrapper relative clearfix">
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
                                    <li className="active"><a href="index">study international</a></li>
                                    <li><a href="about">About</a></li>
                                    <li><a href="careers">FAQ</a></li>
                                    <li><a href="#"><span className="btn btn-mod btn-w btn-circle btn-medium">Get in Touch</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <main id="main">
                        <div className="home-section fullwidth-slider" id="home">
                            <section className="home-section bg-scroll fixed-height-medium" style={{
                                background: `url(${slider_01})`,
                            }}>
                                <div className="js-height-parent container-1400">
                                    <div className="home-content">
                                        <div className="home-text">
                                            <div className="row d-flex align-items-center justify-content-center">
                                                <div className="col-md-8">
                                                    <div className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10 pt-40">
                                                        PICS<br />Your pathway to STUDY in UK, USA,<br />Canada & Australia
                                                    </div>
                                                    <div className="hs-line-2 text-center">
                                                        Includes admissions to top institutions like Oxford, Cambridg <br />and 225+ Universities across the globeasd
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
                                <div className="row d-flex justify-content-between">
                                    <div className='col-md-5'>
                                        <h2 className="banner-title mb-0 mb-xs-0">
                                            Degree Programs include
                                        </h2>
                                        <div className="banner-desc">
                                            UG, PG, Phd & Foundation,  Engineering, Management, Medicine, Law, Research & English Program
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='universities'>
                                            <ul>
                                                <li><img src={university_01} alt="" /></li>
                                                <li><img src={university_02} alt="" /></li>
                                                <li><img src={university_03} alt="" /></li>
                                                <li><img src={university_04} alt="" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='small-section pb-250'>
                            <div className='container relative'>
                                <div className='row d-flex justify-content-between'>
                                    <div className='col-md-7'>
                                        <div className='image-rounded'><img src={pics_consultants} alt="" className='img-fluid' /></div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='inner-container'>
                                            <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                PICS Consultants
                                            </div>
                                            <div className='section-text'>
                                                PICS Consultants takes a <b>Student- Centred Approach (P-I-C-S approach)</b> and our mission is to provide right guidance by having a transparent discussion with the student. We discuss with you to understand your requirement, Use our knowledge and provide you a list of university that’s well-matched and we help you to make the right decision that meet your requirement. Here is our exclusive PICS approach,
                                            </div>

                                            <div className='pics-abbr mt-30'>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='capital font-alt'>P</div>
                                                    <div className='desc'>
                                                        <div className='desc-btn'>Prepare for the meeting</div>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='capital font-alt'>I</div>
                                                    <div className='desc'>
                                                        <div className='desc-btn'>Identify your Requirement</div>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='capital font-alt'>C</div>
                                                    <div className='desc'>
                                                        <div className='desc-btn'>Choose the University</div>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='capital font-alt'>S</div>
                                                    <div className='desc'>
                                                        <div className='desc-btn'>Submit the application</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mt-40 mb-0'>
                                                <a href='javascript:;' className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
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
                                            <img src={unversity_bg} alt='' />
                                        </div>
                                        <div className='mt-30'>
                                            <div className="hs-line-3 white text-center font-alt mb-20 mb-xs-10">
                                                PICS FREE University Application Service
                                            </div>
                                            <div className='row d-flex justify-content-center mb-40'>
                                                <div className='col-md-9'>
                                                    <div className='section-text text-center white'>
                                                        Applying to an university can be time-consuming and challenging for an international student. That is why the PICS FREE University Application Service does the hard work for you with offerings like;
                                                    </div>
                                                </div>
                                            </div>
                                            <Box className="mt-10">
                                                <Grid sx={{ mb: 2 }} className="comp-bx" container spacing={2}>
                                                    <Grid item xs={12} sm={4}>
                                                        <div className="pics-service">
                                                            <div className='icon'><img src={icon_01} /></div>
                                                            <h4>100% PICS Guaranteed University offer</h4>
                                                            <p>PICS will provide you with an offer from an university when eligibility criteria are met.</p>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <div className="pics-service">
                                                            <div className='icon'><img src={icon_02} /></div>
                                                            <h4>Your dedicated PICS<br />Consultant</h4>
                                                            <p>From first contact to admission, your PICS consultant will work with you through all the processes.</p>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <div className="pics-service">
                                                            <div className='icon'><img src={icon_03} /></div>
                                                            <h4>Reliable & Professional<br />Service</h4>
                                                            <p>From writing personal statements to understanding eligibility criteria, we will strive to provide the best result.</p>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <div className='mt-40 mb-20 text-center'>
                                                <a href='javascript:;' className='btn btn-mod btn-w btn-round btn-medium'>Get in touch</a>
                                            </div>
                                            {/* <Card className='cardinfo' sx={{ minWidth: 275 }} >
                                                <CardContent className='listrdo mb-listrdo' >
                                                    <h4 className='title-head'> Which fuel does it use?</h4>
                                                    
                                                </CardContent>
                                            </Card> */}
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
                                        <div className="hs-line-3 color text-center font-alt mb-20 mb-xs-10">
                                            PICS Global University List 
                                        </div>
                                        <div className='row d-flex justify-content-center mb-20'>
                                            <div className='col-md-8'>
                                                <div className='section-text text-center mb-30'>
                                                PICS can help students in gaining entry to some of world’s leading universities. Students success is our success and we want the best outcomes for them
                                                </div>

                                                <div className='hs-line-4'>
                                                    Click to view Universities by Country
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <Button onClick={handleOpen}>Open modal</Button> */}
                            <div className='container'>
                                <Tabs
                                    orientation="horizontal"
                                    variant="scrollable"
                                    value={value}
                                    onChange={handleChange}
                                    className='pics-tabs'
                                    aria-label="horizontal tabs example"
                                >
                                    <Tab className='tab-single uk' label="UK" {...a11yProps(0)} />
                                    <Tab className='tab-single usa' label="USA" {...a11yProps(1)} />
                                    <Tab className='tab-single canada' label="Canada" {...a11yProps(2)} />
                                    <Tab className='tab-single australia' label="Australia" {...a11yProps(3)} />
                                </Tabs>
                                <TabPanel value={value} index={0}>
                                    <Box className='mt-10'>
                                        <Grid sx={{ mb: 2 }} container  direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                            <Grid item className="univ-box">
                                                <div className='icon'><img src={uk_01} /></div>
                                                <h4>University of oxford</h4>
                                                <p>Oxford, UK</p>
                                            </Grid>
                                            <Grid item className="univ-box">
                                                <div className='icon'><img src={uk_02} /></div>
                                                <h4>University of Cambridge</h4>
                                                <p>Cambridge, UK</p>
                                            </Grid>
                                            <Grid item className="univ-box">
                                                <div className='icon'><img src={uk_03} /></div>
                                                <h4>Imperial College</h4>
                                                <p>London, UK</p>
                                            </Grid>
                                            <Grid item className="univ-box">
                                                <div className='icon'><img src={uk_04} /></div>
                                                <h4>University of Edinburgh</h4>
                                                <p>Edinburgh, UK</p>
                                            </Grid>
                                            <Grid item className="univ-box">
                                                <div className='icon'><img src={uk_05} /></div>
                                                <h4>University of Bristol</h4>
                                                <p>Bristol, UK</p>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    Item Four
                                </TabPanel>
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
                                    <div className="footer-menu">
                                        <ul className="clearlist">
                                            <li><a href="#">Study International</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Terms & conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Cookie Policy</a></li>
                                        </ul>
                                    </div>

                                    <div className='row pt-40 pb-40'>
                                        <div className='col-md-4'>
                                            <div className='footer-widget'>
                                                <div className='title'>PICS - Headquarters</div>
                                                Head Quarters : 27, Duke Street, Chelmsford, England, CM1 1HT, UK
                                                <button className='map-link' onClick=''>Get Directions</button>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='footer-widget'>
                                                <div className='title'>india</div>
                                                Head Quarters : 27, Duke Street, Chelmsford, England, CM1 1HT, UK
                                                <button className='map-link' onClick=''>Get Directions</button>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='footer-widget'>
                                                <div className="social-icons mb-10">
                                                    <ul>
                                                        <li><a href="#"><img src={facebook} /></a></li>
                                                        <li><a href="#"><img src={instagram} /></a></li>
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
        </div>
    );
};

export default Dashboard;