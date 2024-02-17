import React, { useEffect, useRef } from 'react';
import WOW from 'wowjs';
import { TextField, Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import faq_bg from '../images/faq-bg.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import general from '../images/general.svg';
import uk_02 from '../images/uk-02.png';
import uk_03 from '../images/uk-03.png';
import uk_04 from '../images/uk-04.png';
import uk_05 from '../images/uk-05.png';
import search_icon from '../images/search-icon.png';

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
                                        background: `url(${faq_bg})`,
                                    }}>
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <div className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                FAQS
                                                            </div>
                                                            <div className="hs-line-2 text-center">
                                                                Frequently Asked Questions
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
                                        <div className="hs-line-3 text-center color font-alt mb-20 mb-xs-10">
                                            How can we help?
                                        </div>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-9'>
                                                <div className='search-form'>
                                                    <div className='search-icon'>
                                                        <img src={search_icon} />
                                                    </div>
                                                    <TextField type="text"
                                                        value={searchInput}
                                                        className='form-control'
                                                        onChange={handleChange}
                                                        fullWidth
                                                        label="Ask a question..."
                                                        id="fullWidth" />
                                                    <Button className='search-btn' onClick={() => searchClick()} variant="contained">Search</Button>
                                                </div>

                                                <div className='text-center mt-40'>or choose a category to quickly find the help you need</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='small-section pt-0 pb-0'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-12'>
                                                <div className='d-flex'>
                                                    <Button
                                                        onClick={() => {
                                                            handleHorizantalScroll(elementRef.current, 25, 100, -10);
                                                        }}
                                                        disabled={arrowDisable}
                                                    >
                                                        <ArrowBackIosIcon />
                                                    </Button>
                                                    <div className="img-container" ref={elementRef}>
                                                        <Box className='mt-10 xs-padding-12'>
                                                            <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                                <Grid item className="faq-filter">
                                                                    <div className='icon'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62">
                                                                            <g id="set" transform="translate(1 1)">
                                                                                <path id="Path_11260" data-name="Path 11260" d="M64,38.939V29.061l-8.079-.675a22.5,22.5,0,0,0-2.443-5.9l5.229-6.193-6.986-7-6.193,5.229a22.5,22.5,0,0,0-5.9-2.443L38.939,4H29.061l-.675,8.079a22.5,22.5,0,0,0-5.9,2.443l-6.2-5.229L9.293,16.279l5.229,6.193a22.5,22.5,0,0,0-2.443,5.9L4,29.061V38.95l8.079.675a22.5,22.5,0,0,0,2.443,5.9L9.293,51.721l6.986,6.986,6.193-5.229a22.5,22.5,0,0,0,5.9,2.443L29.061,64H38.95l.675-8.079a22.5,22.5,0,0,0,5.9-2.443l6.193,5.229,6.986-6.986-5.229-6.193a22.5,22.5,0,0,0,2.443-5.9Z" transform="translate(-4 -4)" fill="none" stroke="#8f8f8f" stroke-miterlimit="10" stroke-width="2"/>
                                                                                <ellipse id="Ellipse_41" data-name="Ellipse 41" cx="15.623" cy="15.069" rx="15.623" ry="15.069" transform="translate(14.384 14.923)" fill="none" stroke="#8f8f8f" stroke-miterlimit="10" stroke-width="2"/>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <h4>General</h4>
                                                                </Grid>
                                                                <Grid item className="faq-filter">
                                                                    <div className='icon'>
                                                                        <svg id="interview" xmlns="http://www.w3.org/2000/svg" width="66.427" height="60" viewBox="0 0 66.427 60">
                                                                            <path id="Path_11261" data-name="Path 11261" d="M1.171,62.341A1.049,1.049,0,0,0,1.2,63.529a1.082,1.082,0,0,0,.878.461.919.919,0,0,0,.236-.021l9.843-2.185A20.331,20.331,0,0,0,41.7,43.961,20.58,20.58,0,0,0,56.277,42.5l9.843,2.174a.84.84,0,0,0,.236.021,1.079,1.079,0,0,0,.91-1.649L63.249,36.7a20.346,20.346,0,1,0-36.5-12.692A20.347,20.347,0,0,0,5.188,55.989Zm45.884-56.2A18.2,18.2,0,0,1,61.086,35.95,1.064,1.064,0,0,0,61,37.2l3.052,4.82-7.712-1.7a1.1,1.1,0,0,0-.739.1,18.435,18.435,0,0,1-14.009,1.275A20.379,20.379,0,0,0,28.847,24.725c0-.129-.011-.257-.011-.386A18.234,18.234,0,0,1,47.044,6.132ZM3.142,43.629A18.222,18.222,0,1,1,12.792,59.7a1.066,1.066,0,0,0-.5-.129.879.879,0,0,0-.236.021l-7.7,1.7L7.4,56.471a1.079,1.079,0,0,0-.075-1.253,18.223,18.223,0,0,1-4.177-11.61Z" transform="translate(-1 -3.99)" fill="#8f8f8f"/>
                                                                            <circle id="Ellipse_42" data-name="Ellipse 42" cx="1.62" cy="1.62" r="1.62" transform="translate(18.735 46.044)" fill="#8f8f8f"/>
                                                                            <path id="Path_11262" data-name="Path 11262" d="M20.4,33.16a3.24,3.24,0,0,1,0,6.481,1.083,1.083,0,0,0-1.08,1.08v5.4h2.16V41.693A5.4,5.4,0,1,0,15,36.4h2.16A3.25,3.25,0,0,1,20.4,33.16Z" transform="translate(-0.03 -2.153)" fill="#8f8f8f"/>
                                                                            <path id="Path_11263" data-name="Path 11263" d="M36,16H53.282v2.16H36Z" transform="translate(1.376 -3.141)" fill="#8f8f8f"/>
                                                                            <path id="Path_11264" data-name="Path 11264" d="M36,22H53.282v2.16H36Z" transform="translate(1.376 -2.717)" fill="#8f8f8f"/>
                                                                            <path id="Path_11265" data-name="Path 11265" d="M40,28H52.961v2.16H40Z" transform="translate(1.686 -2.292)" fill="#8f8f8f"/>
                                                                        </svg>
                                                                    </div>
                                                                    <h4>Consultancy</h4>
                                                                </Grid>
                                                                <Grid item className="faq-filter">
                                                                    <div className='icon'>
                                                                        <svg id="identification" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
                                                                            <path id="Path_11254" data-name="Path 11254" d="M3,60H57a3.031,3.031,0,0,0,3-3.054V23.054A3.031,3.031,0,0,0,57,20H38.414L43.23,3.743A2.85,2.85,0,0,0,42.773,1.2,2.994,2.994,0,0,0,40.349,0h-5.84a3.008,3.008,0,0,0-2.883,2.115L30,7.609,28.371,2.122A2.993,2.993,0,0,0,25.49,0H19.65a2.992,2.992,0,0,0-2.428,1.208,2.846,2.846,0,0,0-.451,2.536L21.59,20H3a3.031,3.031,0,0,0-3,3.054V56.946A3.031,3.031,0,0,0,3,60ZM33.544,2.683A1,1,0,0,1,34.509,2h5.84a1.015,1.015,0,0,1,.822.4.865.865,0,0,1,.141.774L34.456,26.317a1,1,0,0,1-.965.683h-5.84a1.015,1.015,0,0,1-.822-.4.868.868,0,0,1-.142-.774ZM24.822,27a2.891,2.891,0,0,0,.4.8A2.994,2.994,0,0,0,27.651,29h5.84a3.007,3.007,0,0,0,2.838-2H41a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H19a1,1,0,0,1-1-1V28a1,1,0,0,1,1-1ZM18.687,3.172a.86.86,0,0,1,.14-.77A1.01,1.01,0,0,1,19.65,2h5.84a.987.987,0,0,1,.962.684l2.5,8.443L26.327,20h-2.65ZM2,23.054A1.03,1.03,0,0,1,3,22H25.735l-.889,3H19a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H41a3,3,0,0,0,3-3V28a3,3,0,0,0-3-3H36.932l.9-3.034A.955.955,0,0,0,38,22H57a1.03,1.03,0,0,1,1,1.054V56.946A1.03,1.03,0,0,1,57,58H3a1.03,1.03,0,0,1-1-1.054Z" transform="translate(0 0)" fill="#8f8f8f"/>
                                                                            <path id="Path_11255" data-name="Path 11255" d="M12.169,51.238h7.877a2.042,2.042,0,0,0,1.978-2.546,6.1,6.1,0,0,0-2.97-3.822,4.073,4.073,0,1,0-5.894,0,6.1,6.1,0,0,0-2.97,3.822,2.042,2.042,0,0,0,1.978,2.546Zm1.9-9.164a2.037,2.037,0,1,1,2.037,2.037A2.037,2.037,0,0,1,14.071,42.073Zm2.037,4.073A4.058,4.058,0,0,1,20.046,49.2H12.162A4.073,4.073,0,0,1,16.107,46.146Z" transform="translate(-0.045 -0.24)" fill="#8f8f8f"/>
                                                                            <path id="Path_11256" data-name="Path 11256" d="M32.018,40.037H44.237a1.018,1.018,0,0,0,0-2.037H32.018a1.018,1.018,0,0,0,0,2.037Z" transform="translate(-0.172 -0.024)" fill="#8f8f8f"/>
                                                                            <path id="Path_11257" data-name="Path 11257" d="M32.018,46.037h22.4a1.018,1.018,0,1,0,0-2.037h-22.4a1.018,1.018,0,0,0,0,2.037Z" transform="translate(-0.529 -0.028)" fill="#8f8f8f"/>
                                                                            <path id="Path_11258" data-name="Path 11258" d="M32.018,52.037h22.4a1.018,1.018,0,1,0,0-2.037h-22.4a1.018,1.018,0,0,0,0,2.037Z" transform="translate(-0.529 -0.183)" fill="#8f8f8f"/>
                                                                            <path id="Path_11259" data-name="Path 11259" d="M7.055,56.4H25.383a3.055,3.055,0,0,0,3.055-3.055V37.055A3.055,3.055,0,0,0,25.383,34H7.055A3.055,3.055,0,0,0,4,37.055V53.347A3.055,3.055,0,0,0,7.055,56.4ZM6.037,37.055a1.018,1.018,0,0,1,1.018-1.018H25.383A1.018,1.018,0,0,1,26.4,37.055V53.347a1.018,1.018,0,0,1-1.018,1.018H7.055a1.018,1.018,0,0,1-1.018-1.018Z" transform="translate(0.073 -0.475)" fill="#8f8f8f"/>
                                                                        </svg>
                                                                    </div>
                                                                    <h4>School Admissions</h4>
                                                                </Grid>
                                                                <Grid item className="faq-filter">
                                                                    <div className='icon'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="58.345" height="60.5" viewBox="0 0 58.345 60.5">
                                                                            <path id="admission" d="M66.725,70.9a10.905,10.905,0,0,1-4.481-20.849l.22-.1v-20.3H28.553V53.834h.857a1.654,1.654,0,0,1,1.653,1.653v1.824a1.654,1.654,0,0,1-1.653,1.653H21.453A1.654,1.654,0,0,1,19.8,57.311V55.5a1.654,1.654,0,0,1,1.653-1.653h.857V29.655H21.5a1.7,1.7,0,0,1-1.7-1.7V26.117a.617.617,0,0,1,.306-.526L45.2,10.986a.677.677,0,0,1,.306-.086.526.526,0,0,1,.306.086l25.1,14.605a.617.617,0,0,1,.306.526v1.836a1.7,1.7,0,0,1-1.7,1.7h-.808V49.268l.294.061A10.9,10.9,0,0,1,66.725,70.9Zm0-20.579A9.684,9.684,0,1,0,76.409,60,9.7,9.7,0,0,0,66.725,50.321Zm-45.273,4.75a.426.426,0,0,0-.428.428v1.812a.426.426,0,0,0,.428.428H29.4a.426.426,0,0,0,.428-.428V55.5a.426.426,0,0,0-.428-.428Zm2.081-1.224h3.8V29.655h-3.8Zm40.155-4.334.453-.11a10.8,10.8,0,0,1,2.583-.306c.122,0,.245,0,.367.012l.38.012V29.655h-3.8V49.513ZM21.024,27.954a.478.478,0,0,0,.477.477H69.517a.478.478,0,0,0,.477-.477V26.729H21.024v1.224Zm1.653-2.436H68.329L45.509,12.234Zm42.7,39.69a2.129,2.129,0,0,1-1.518-.624L60.482,61.2a2.147,2.147,0,0,1,3.036-3.036l1.861,1.861,4.566-4.615a2.164,2.164,0,0,1,1.506-.637,2.129,2.129,0,0,1,1.518.624,2.154,2.154,0,0,1,.012,3.024c-.22.22-.735.735-1.371,1.383-1.518,1.53-3.807,3.856-4.713,4.762A2.091,2.091,0,0,1,65.379,65.207ZM62,58.768a.918.918,0,0,0-.649,1.567l3.379,3.379a.916.916,0,0,0,1.3,0c.918-.918,3.256-3.281,4.8-4.848.6-.612,1.077-1.09,1.285-1.3a.913.913,0,0,0-1.3-1.285l-5.007,5.056a.623.623,0,0,1-.428.184.574.574,0,0,1-.428-.184l-2.3-2.3A.917.917,0,0,0,62,58.768Zm-4.9-8.79a.667.667,0,0,1-.269-.061.627.627,0,0,1-.343-.551V44.273a.617.617,0,0,1,.306-.526l1.359-.784V36.842l-2.5.661v7.468a.6.6,0,0,1-.5.6c-1.714.318-3.159.588-4.211.8a32.773,32.773,0,0,1-5.84.845,31.661,31.661,0,0,1-5.84-.845h-.024c-1.114-.22-2.51-.49-4.187-.8a.6.6,0,0,1-.5-.6V37.5l-4.138-1.1a.614.614,0,0,1-.453-.588.6.6,0,0,1,.453-.588l14.532-3.856a.62.62,0,0,1,.159-.024.717.717,0,0,1,.159.024L59.8,35.226a.614.614,0,0,1,.453.588.593.593,0,0,1-.453.588l-.428.11v6.452l1.359.784a.617.617,0,0,1,.306.526v5.093a.627.627,0,0,1-.343.551.716.716,0,0,1-.269.061.578.578,0,0,1-.367-.122l-1.3-.979-1.3.979A.592.592,0,0,1,57.1,49.978Zm.612-5.362v3.514l.686-.514a.612.612,0,0,1,.735,0l.686.514V44.616L58.768,44Zm-21.926-.171.306.061c1.347.245,2.5.477,3.416.649a30.613,30.613,0,0,0,5.607.808,30.613,30.613,0,0,0,5.607-.808c.918-.184,2.069-.4,3.416-.649l.306-.061V37.809l-9.17,2.436a.53.53,0,0,1-.318,0l-9.17-2.436Zm-2.828-8.655,12.157,3.232,12.157-3.232L45.117,32.557ZM45.509,24.073a3.783,3.783,0,1,1,3.783-3.783A3.793,3.793,0,0,1,45.509,24.073Zm0-6.342a2.559,2.559,0,1,0,2.559,2.559A2.565,2.565,0,0,0,45.509,17.731Z" transform="translate(-19.55 -10.65)" fill="#8f8f8f" stroke="#8f8f8f" stroke-width="0.5"/>
                                                                        </svg>
                                                                    </div>
                                                                    <h4>University Admissions</h4>
                                                                </Grid>
                                                                <Grid item className="faq-filter">
                                                                    <div className='icon'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="53.081" height="60.5" viewBox="0 0 53.081 60.5">
                                                                            <path id="mentor" d="M42.882,62.976a.587.587,0,0,1-.593-.593V53.435a.587.587,0,0,1,.593-.593H45.17V52.32a1.223,1.223,0,0,0-.273-.77,35.322,35.322,0,0,0-2.785-2.809c-1.434-1.363-3.39-3.224-6.092-5.938a7.271,7.271,0,0,1-1.825-6.009c.107-1.339.32-3.023.593-5.168.427-3.39,1.008-8.036,1.482-13.856A2.9,2.9,0,0,1,37.074,16a2.862,2.862,0,0,1,4.054-.047,2.077,2.077,0,0,1,.64,1.268c.071.557.2,1.328.367,2.311.308,1.79.77,4.5,1.221,8l.047.391.379-.083a.6.6,0,0,1,.142-.024A2.116,2.116,0,0,1,44.2,27.8a1.709,1.709,0,0,1,1.28.581c1.209,1.375,4.706,6.164,10.371,14.235a5.109,5.109,0,0,1,.794,2.833c0,2.335,0,5.239.024,7.064v.356h1.719a.587.587,0,0,1,.593.593l.012,8.949A.587.587,0,0,1,58.4,63l-15.516-.024Zm.581-8.949v7.764l14.307-.012V54.015ZM39.1,16.323a1.687,1.687,0,0,0-1.671,1.541c-.474,5.844-1.055,10.5-1.482,13.9-.273,2.122-.474,3.8-.581,5.121a6.079,6.079,0,0,0,1.493,5.073c2.691,2.7,4.635,4.552,6.057,5.915a33.216,33.216,0,0,1,2.916,2.94,2.4,2.4,0,0,1,.522,1.482l.012.533,9.115-.012v-.356c-.012-1.814-.024-4.717-.024-7.053a3.842,3.842,0,0,0-.581-2.145c-7.029-10-9.471-13.2-10.277-14.129a.46.46,0,0,0-.178-.13.481.481,0,0,0-.225-.047.564.564,0,0,0-.5.32,13.582,13.582,0,0,0-.984,2.75l-.024.119.059.107A104.156,104.156,0,0,1,47.6,42.708a.572.572,0,0,1-.059.462.547.547,0,0,1-.356.273.694.694,0,0,1-.154.024.584.584,0,0,1-.569-.439,101.175,101.175,0,0,0-4.848-10.4c-.083-.166-.344-.664.747-3.224l.036-.095-.012-.107V29.2c-.51-4.22-1.043-7.373-1.4-9.459-.166-1-.308-1.778-.379-2.347a.921.921,0,0,0-.3-.581,1.623,1.623,0,0,0-1.031-.462A1.488,1.488,0,0,0,39.1,16.323ZM62.522,62.964a.587.587,0,0,1-.593-.593V53.423a.587.587,0,0,1,.593-.593h1.719v-.356c.012-1.814.024-4.717.024-7.064a5.109,5.109,0,0,1,.794-2.833c5.666-8.072,9.151-12.861,10.36-14.235a1.68,1.68,0,0,1,1.28-.593,2.116,2.116,0,0,1,.273.024.6.6,0,0,0,.142.024l.379.095.047-.391c.45-3.508.913-6.211,1.221-8,.166-.984.3-1.754.367-2.311a2.159,2.159,0,0,1,.628-1.268,2.9,2.9,0,0,1,1.766-.806,1.588,1.588,0,0,1,.237-.012,2.884,2.884,0,0,1,2.857,2.631c.474,5.808,1.055,10.454,1.482,13.844v.012c.273,2.145.486,3.829.593,5.168a7.271,7.271,0,0,1-1.825,6.009c-2.691,2.7-4.658,4.575-6.081,5.927a36.173,36.173,0,0,0-2.8,2.809,1.2,1.2,0,0,0-.273.77v.51H78a.587.587,0,0,1,.593.593v8.949a.587.587,0,0,1-.593.593Zm.593-1.185,14.307.012V54.027l-14.307-.012ZM76.722,28.958a.524.524,0,0,0-.4.19c-.818.925-3.26,4.125-10.277,14.129a3.874,3.874,0,0,0-.581,2.145c0,2.347,0,5.251-.024,7.053v.356l9.115.012v-.533a2.4,2.4,0,0,1,.522-1.482,31.577,31.577,0,0,1,2.916-2.94c1.422-1.351,3.378-3.212,6.069-5.915A6.079,6.079,0,0,0,85.553,36.9c-.107-1.3-.32-2.975-.581-5.1v-.024c-.427-3.414-1.008-8.072-1.482-13.9a1.69,1.69,0,0,0-2.857-1.067.921.921,0,0,0-.3.581c-.071.569-.213,1.351-.379,2.323v.024c-.356,2.086-.9,5.239-1.4,9.459v.024l-.012.095.036.095c1.09,2.56.83,3.058.747,3.224a101.18,101.18,0,0,0-4.848,10.4.594.594,0,0,1-.569.439.8.8,0,0,1-.166-.024.6.6,0,0,1-.415-.735A102.658,102.658,0,0,1,78.18,32.253l.059-.107-.024-.119a13.581,13.581,0,0,0-.984-2.75.691.691,0,0,0-.13-.178A.683.683,0,0,0,76.722,28.958ZM49.638,30.938a.587.587,0,0,1-.593-.593v-4.67a10.686,10.686,0,0,1,7.74-10.217l.747-.213-.652-.427a6.451,6.451,0,1,1,8.961-8.925,6.465,6.465,0,0,1-1.825,8.937l-.652.427.747.213a10.661,10.661,0,0,1,7.74,10.217v4.67a.587.587,0,0,1-.593.593H49.638Zm4.492-6.922a.587.587,0,0,1,.593.593v5.156h11.45V24.608a.593.593,0,1,1,1.185,0v5.156h3.307V25.687a9.447,9.447,0,0,0-7.693-9.257l-.486-.095,1.067,7.693a.594.594,0,0,1-.13.462l-2.513,3-.071.071a.559.559,0,0,1-.379.142h0a.586.586,0,0,1-.45-.213l-2.525-3a.594.594,0,0,1-.13-.462l1.008-7.23v-.45l-.427.083a9.424,9.424,0,0,0-7.693,9.257v4.077H53.55V24.608A.577.577,0,0,1,54.13,24.015Zm4.421-.083,1.9,2.252,1.9-2.252-1.067-7.669H59.618Zm1.9-19.747A5.261,5.261,0,1,0,64.17,5.726,5.266,5.266,0,0,0,60.448,4.185Z" transform="translate(-33.902 -2.75)" fill="#8f8f8f" stroke="#8f8f8f" stroke-width="0.5"/>
                                                                        </svg>
                                                                    </div>
                                                                    <h4>Mentoring</h4>
                                                                </Grid>
                                                                <Grid item className="faq-filter">
                                                                    <div className='icon'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="53.081" height="60.5" viewBox="0 0 53.081 60.5">
                                                                            <path id="mentor" d="M42.882,62.976a.587.587,0,0,1-.593-.593V53.435a.587.587,0,0,1,.593-.593H45.17V52.32a1.223,1.223,0,0,0-.273-.77,35.322,35.322,0,0,0-2.785-2.809c-1.434-1.363-3.39-3.224-6.092-5.938a7.271,7.271,0,0,1-1.825-6.009c.107-1.339.32-3.023.593-5.168.427-3.39,1.008-8.036,1.482-13.856A2.9,2.9,0,0,1,37.074,16a2.862,2.862,0,0,1,4.054-.047,2.077,2.077,0,0,1,.64,1.268c.071.557.2,1.328.367,2.311.308,1.79.77,4.5,1.221,8l.047.391.379-.083a.6.6,0,0,1,.142-.024A2.116,2.116,0,0,1,44.2,27.8a1.709,1.709,0,0,1,1.28.581c1.209,1.375,4.706,6.164,10.371,14.235a5.109,5.109,0,0,1,.794,2.833c0,2.335,0,5.239.024,7.064v.356h1.719a.587.587,0,0,1,.593.593l.012,8.949A.587.587,0,0,1,58.4,63l-15.516-.024Zm.581-8.949v7.764l14.307-.012V54.015ZM39.1,16.323a1.687,1.687,0,0,0-1.671,1.541c-.474,5.844-1.055,10.5-1.482,13.9-.273,2.122-.474,3.8-.581,5.121a6.079,6.079,0,0,0,1.493,5.073c2.691,2.7,4.635,4.552,6.057,5.915a33.216,33.216,0,0,1,2.916,2.94,2.4,2.4,0,0,1,.522,1.482l.012.533,9.115-.012v-.356c-.012-1.814-.024-4.717-.024-7.053a3.842,3.842,0,0,0-.581-2.145c-7.029-10-9.471-13.2-10.277-14.129a.46.46,0,0,0-.178-.13.481.481,0,0,0-.225-.047.564.564,0,0,0-.5.32,13.582,13.582,0,0,0-.984,2.75l-.024.119.059.107A104.156,104.156,0,0,1,47.6,42.708a.572.572,0,0,1-.059.462.547.547,0,0,1-.356.273.694.694,0,0,1-.154.024.584.584,0,0,1-.569-.439,101.175,101.175,0,0,0-4.848-10.4c-.083-.166-.344-.664.747-3.224l.036-.095-.012-.107V29.2c-.51-4.22-1.043-7.373-1.4-9.459-.166-1-.308-1.778-.379-2.347a.921.921,0,0,0-.3-.581,1.623,1.623,0,0,0-1.031-.462A1.488,1.488,0,0,0,39.1,16.323ZM62.522,62.964a.587.587,0,0,1-.593-.593V53.423a.587.587,0,0,1,.593-.593h1.719v-.356c.012-1.814.024-4.717.024-7.064a5.109,5.109,0,0,1,.794-2.833c5.666-8.072,9.151-12.861,10.36-14.235a1.68,1.68,0,0,1,1.28-.593,2.116,2.116,0,0,1,.273.024.6.6,0,0,0,.142.024l.379.095.047-.391c.45-3.508.913-6.211,1.221-8,.166-.984.3-1.754.367-2.311a2.159,2.159,0,0,1,.628-1.268,2.9,2.9,0,0,1,1.766-.806,1.588,1.588,0,0,1,.237-.012,2.884,2.884,0,0,1,2.857,2.631c.474,5.808,1.055,10.454,1.482,13.844v.012c.273,2.145.486,3.829.593,5.168a7.271,7.271,0,0,1-1.825,6.009c-2.691,2.7-4.658,4.575-6.081,5.927a36.173,36.173,0,0,0-2.8,2.809,1.2,1.2,0,0,0-.273.77v.51H78a.587.587,0,0,1,.593.593v8.949a.587.587,0,0,1-.593.593Zm.593-1.185,14.307.012V54.027l-14.307-.012ZM76.722,28.958a.524.524,0,0,0-.4.19c-.818.925-3.26,4.125-10.277,14.129a3.874,3.874,0,0,0-.581,2.145c0,2.347,0,5.251-.024,7.053v.356l9.115.012v-.533a2.4,2.4,0,0,1,.522-1.482,31.577,31.577,0,0,1,2.916-2.94c1.422-1.351,3.378-3.212,6.069-5.915A6.079,6.079,0,0,0,85.553,36.9c-.107-1.3-.32-2.975-.581-5.1v-.024c-.427-3.414-1.008-8.072-1.482-13.9a1.69,1.69,0,0,0-2.857-1.067.921.921,0,0,0-.3.581c-.071.569-.213,1.351-.379,2.323v.024c-.356,2.086-.9,5.239-1.4,9.459v.024l-.012.095.036.095c1.09,2.56.83,3.058.747,3.224a101.18,101.18,0,0,0-4.848,10.4.594.594,0,0,1-.569.439.8.8,0,0,1-.166-.024.6.6,0,0,1-.415-.735A102.658,102.658,0,0,1,78.18,32.253l.059-.107-.024-.119a13.581,13.581,0,0,0-.984-2.75.691.691,0,0,0-.13-.178A.683.683,0,0,0,76.722,28.958ZM49.638,30.938a.587.587,0,0,1-.593-.593v-4.67a10.686,10.686,0,0,1,7.74-10.217l.747-.213-.652-.427a6.451,6.451,0,1,1,8.961-8.925,6.465,6.465,0,0,1-1.825,8.937l-.652.427.747.213a10.661,10.661,0,0,1,7.74,10.217v4.67a.587.587,0,0,1-.593.593H49.638Zm4.492-6.922a.587.587,0,0,1,.593.593v5.156h11.45V24.608a.593.593,0,1,1,1.185,0v5.156h3.307V25.687a9.447,9.447,0,0,0-7.693-9.257l-.486-.095,1.067,7.693a.594.594,0,0,1-.13.462l-2.513,3-.071.071a.559.559,0,0,1-.379.142h0a.586.586,0,0,1-.45-.213l-2.525-3a.594.594,0,0,1-.13-.462l1.008-7.23v-.45l-.427.083a9.424,9.424,0,0,0-7.693,9.257v4.077H53.55V24.608A.577.577,0,0,1,54.13,24.015Zm4.421-.083,1.9,2.252,1.9-2.252-1.067-7.669H59.618Zm1.9-19.747A5.261,5.261,0,1,0,64.17,5.726,5.266,5.266,0,0,0,60.448,4.185Z" transform="translate(-33.902 -2.75)" fill="#8f8f8f" stroke="#8f8f8f" stroke-width="0.5"/>
                                                                        </svg>
                                                                    </div>
                                                                    <h4>Mentoring</h4>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
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
                                        </div>
                                    </div>
                                </section>
                                <section className='small-section pt-0 faqs'>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<AddCircleOutlineIcon />}
                                                        aria-controls="panel2-content"
                                                        id="panel2-header"
                                                    >
                                                        <Typography className='Lato faq-question'>Can lessons take place on a weekend and during the holidays?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato faq-answer'>
                                                            We speak with you as a family to understand exactly what your child's need are in term of subject,
                                                            exam board availability and their long term goals. We then hand-pick the best tutor for you based
                                                            on their experience and teaching style.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<AddCircleOutlineIcon />}
                                                        aria-controls="panel3-content"
                                                        id="panel3-header"
                                                    >
                                                        <Typography className='Lato faq-question'>What happens if the tutor isn't the right match for my child?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato'>
                                                            We speak with you as a family to understand exactly what your child's need are in term of subject,
                                                            exam board availability and their long term goals. We then hand-pick the best tutor for you based
                                                            on their experience and teaching style.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<AddCircleOutlineIcon />}
                                                        aria-controls="panel4-content"
                                                        id="panel4-header"
                                                    >
                                                        <Typography className='Lato faq-question'>Do you offer short-term tuition?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato'>
                                                            We speak with you as a family to understand exactly what your child's need are in term of subject,
                                                            exam board availability and their long term goals. We then hand-pick the best tutor for you based
                                                            on their experience and teaching style.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<AddCircleOutlineIcon />}
                                                        aria-controls="panel5-content"
                                                        id="panel5-header"
                                                    >
                                                        <Typography className='Lato faq-question'>Do I have to commit to a minimum number of lessons?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato'>
                                                            We speak with you as a family to understand exactly what your child's need are in term of subject,
                                                            exam board availability and their long term goals. We then hand-pick the best tutor for you based
                                                            on their experience and teaching style.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<AddCircleOutlineIcon />}
                                                        aria-controls="panel6-content"
                                                        id="panel6-header"
                                                    >
                                                        <Typography className='Lato faq-question'>What is included in the hourly rate?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato'>
                                                            We speak with you as a family to understand exactly what your child's need are in term of subject,
                                                            exam board availability and their long term goals. We then hand-pick the best tutor for you based
                                                            on their experience and teaching style.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<AddCircleOutlineIcon />}
                                                        aria-controls="panel7-content"
                                                        id="panel7-header"
                                                    >
                                                        <Typography className='Lato faq-question'>Do I have to commit to a minimum number of lessons?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography className='Lato'>
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