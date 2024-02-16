import React, { useEffect, useRef } from 'react';
import WOW from 'wowjs';
import { TextField, Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import about_bg from '../images/about-bg.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import uk_01 from '../images/uk-01.png';
import uk_02 from '../images/uk-02.png';
import uk_03 from '../images/uk-03.png';
import uk_04 from '../images/uk-04.png';
import uk_05 from '../images/uk-05.png';

import './style.css';
import '../css/verticals.min.css';
import { Height } from '@material-ui/icons';

const Faq = () => {

    const [open, setOpen] = React.useState(false);
    const [contactopen, setContactOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenContact = () => setContactOpen(true);
    const handleCloseContact = () => setContactOpen(false);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = React.useState(false);
    let [searchInput, setSearchInput] = React.useState('');
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = React.useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    const searchClick = () => {
        console.log('Search Input', searchInput);
    }

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
                                                                Frequently Asked Questions
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
                                        <div className='row d-flex align-items-center justify-content-center'>
                                            <div className='col-md-12'>
                                                <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                    How can we help?
                                                </div>
                                                <div className='d-flex section-text'>
                                                    <Box
                                                        sx={{
                                                            width: 500,
                                                            maxWidth: '100%',
                                                        }}
                                                    >
                                                        <TextField type="text"
                                                            value={searchInput}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            label="Ask a question..."
                                                            id="fullWidth" />
                                                    </Box>
                                                    <Button onClick={() => searchClick()} variant="contained">Search</Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='small-section pt-0'>
                                    <div className='container relative'>
                                        <div className='d-flex'>
                                            <Button
                                                onClick={() => {
                                                    handleHorizantalScroll(elementRef.current, 25, 100, -10);
                                                }}
                                                disabled={arrowDisable}
                                            >
                                                <ArrowBackIosIcon />
                                            </Button>

                                            <div className='col-md-8'>
                                                <div className="img-container" ref={elementRef}>
                                                    <div style={{display: 'grid'}}>
                                                    <img src={uk_01} />
                                                    <span style={{position: 'relative', left: '50px'}}>001</span>
                                                    </div>
                                                    <div style={{display: 'grid'}}>
                                                    <img src={uk_02} />
                                                    <span style={{position: 'relative', left: '50px'}}>002</span>
                                                    </div>
                                                    <div style={{display: 'grid'}}>
                                                    <img src={uk_03} />
                                                    <span style={{position: 'relative', left: '50px'}}>003</span>
                                                    </div>
                                                    <div style={{display: 'grid'}}>
                                                    <img src={uk_04} />
                                                    <span style={{position: 'relative', left: '50px'}}>004</span>
                                                    </div>
                                                    <div style={{display: 'grid'}}>
                                                    <img src={uk_05} />
                                                    <span style={{position: 'relative', left: '50px'}}>005</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button
                                                onClick={() => {
                                                    handleHorizantalScroll(elementRef.current, 25, 100, 10);
                                                }}
                                            >
                                                <ArrowForwardIosIcon />
                                            </Button>
                                        </div>
                                    </div>
                                </section>
                                <section className='small-section pt-0'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-8'>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel2-content"
                                                        id="panel2-header"
                                                    >
                                                        <Typography>How do you select my child's tutor?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            We speak with you as a family to understand exactly what your child's need are in term of subject,
                                                            exam board availability and their long term goals. We then hand-pick the best tutor for you based
                                                            on their experience and teaching style.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
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

export default Faq;