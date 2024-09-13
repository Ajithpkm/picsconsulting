import React, { useEffect } from 'react';
import Tooltip from "./Tooltip";
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
import whatsappwhite from '../images/whatsapp-w.png';
import statement from '../images/statement.png';
import letter from '../images/letter.png';
import student from '../images/student.png';
import admission from '../images/admission.png';
import studentcv from '../images/studentcv.png';
import englishtest from '../images/englishtest.png';
import preloader from '../images/preloader.gif';
import application_service_bg from '../images/application-service-bg.jpg';
import home_bg from '../images/home-bg.jpg';
import icon_01 from '../images/university-offer.svg';
import icon_02 from '../images/dedicated-pics-consultant.svg';
import icon_03 from '../images/professional-service.svg';
import infoicon from '../images/info.png';
import university_list from '../images/university-list.jpg';
import free_consultation from '../images/free_consultation.jpg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SimpleBar from 'react-custom-scrollbars';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
import '../css/verticals.min.css';
import '../css/style-responsive.css';
import { Height } from '@material-ui/icons';
import { gethomedata, getheaderandfooterdata, getcountrydata, getuniversitydata } from '../Actions/Pics';
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
    const [ukModelopen, setukModelopen] = React.useState(false);
    const [usaModelopen, setusaModelopen] = React.useState(false);
    const [contactopen, setContactOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [selectedUniversity, setSelectedUniversity] = React.useState(false);

    const handleUkOpen = (val) => {
        setukModelopen(true);
        setSelectedUniversity(val);
        dispatch(getcountrydata(val));
    }

    const handleUkClose = () => setukModelopen(false);
    const handleUsaOpen = () => setusaModelopen(true);
    const handleUsaClose = () => setusaModelopen(false);
    const handleOpenContact = () => setContactOpen(true);
    const handleCloseContact = () => setContactOpen(false);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = React.useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const headandfooterdata = useSelector((state) => state?.Pics?.headandfooterdata?.data);
    const universitydata = useSelector((state) => state?.Pics?.universitydata?.data);
    const homedata = useSelector((state) => state?.Pics?.homedata?.data);
    const countrydata = useSelector((state) => state?.Pics?.countrydata?.data);

    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        dispatch(gethomedata());
        dispatch(getheaderandfooterdata());
        dispatch(getuniversitydata());
        dispatch(getcountrydata());
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
        setTimeout(() => {
            setusaModelopen(true);
        }, 7000);
    }, []);

    return (
        <>
            {homedata && <CookieConsent
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
                expires={99}
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
                </p>
            </CookieConsent>
            }
            <div>
                {loading === false ?
                    <div className='page-loader'>
                        <span className="loader">
                            <img src={preloader} alt="PICS Consultants" />
                        </span>
                    </div> :
                    <div>
                        <Modal
                            open={ukModelopen}
                            onClose={handleUkClose}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='university-list-bx'>
                                <Typography className='modal-bx-header' id="modal-modal-title" variant="h6" component="h2">
                                    <div onClick={handleUkClose} className='closemodal'><CloseIcon /></div>
                                    <div className='row d-flex align-items-center'>
                                        <div className='col-2 col-md-2'>
                                            <img src={selectedUniversity == 1 ? university_01 : selectedUniversity == 2 ? university_02 :
                                                selectedUniversity == 3 ? university_03 : university_04} alt="" />
                                        </div>
                                        <div className='col-6 col-md-6'>
                                            <div className='country-name font-alt'>
                                                {selectedUniversity == 1 ? 'UK' : selectedUniversity == 2 ? 'USA' :
                                                    selectedUniversity == 3 ? 'CANADA' : 'AUSTRALIA'}<br />University list</div>
                                        </div>
                                        <div className='col-4 col-md-4'>
                                            <div className='text-center'><a href="contact" className='btn btn-mod btn-w btn-circle btn-medium'>Get in Touch</a></div>
                                        </div>
                                    </div>
                                </Typography>
                                <SimpleBar id="RSC-Example" style={{ height: 450 }}>
                                    <Typography className='modal-bx-body' id="modal-modal-description" sx={{ mt: 2 }}>
                                        {
                                            countrydata?.length > 0 && countrydata?.map((x, i) => (
                                                <>
                                                    <div className='font-alt hs-line-5'>{x?.name}</div>
                                                    <div className='row'>
                                                        <div className='col-md-8'>
                                                            <ul>
                                                                {x?.list?.length > 0 && x?.list?.map((v) => (
                                                                    <li>{v?.name}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </Typography>
                                </SimpleBar>
                            </Box>
                        </Modal>

                        <Modal
                            open={usaModelopen}
                            onClose={handleUsaClose}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='university-list-bx nobg-shadow'>
                                <Typography className='modal-bx-body p-0' id="modal-modal-description" sx={{ mt: 2 }}>
                                    <div onClick={handleUsaClose} className='closemodal'><CloseIcon /></div>
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/PpmD5vUlpCQ?si=u6WHnsqUHv1lnJN_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </Typography>
                            </Box>
                        </Modal>

                        <Modal
                            open={contactopen}
                            onClose={handleCloseContact}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='contactmodal-bx'>
                                <Typography className='modal-bx-header' id="modal-modal-title" variant="h6" component="h2">
                                    <div className='country-name font-alt'>Get in touch</div>
                                </Typography>
                                <Typography className='modal-bx-body' id="modal-modal-description" sx={{ mt: 2 }}>
                                    <div className='content'> Send us a email to <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>contact@pics.global</button> and one of our consultants will contact you.</div>
                                </Typography>
                            </Box>
                        </Modal>
                        <title>Study Abroad Consultants | Overseas Education Consultants | PICS Consultants</title>
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
                                            <li className="active"><a href="/">Home</a></li>
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
                                    <section className="home-section bg-scroll fixed-height-medium"
                                        style={{ background: `url(${!homedata?.section1?.image ? home_bg : homedata?.section1?.image})` }}
                                    >
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <h1 className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                <div dangerouslySetInnerHTML={{ __html: homedata?.section1?.title }}></div>
                                                            </h1>
                                                            <div className="hs-line-2 text-center">
                                                                <div dangerouslySetInnerHTML={{ __html: homedata?.section1?.description }}></div>
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
                                            <div className='col-md-5 mb-xs-20'>
                                                <h2 className="banner-title mb-0 mb-xs-0">
                                                    {homedata?.section2?.title}
                                                </h2>
                                                <div className="banner-desc">
                                                    <span dangerouslySetInnerHTML={{ __html: homedata?.section2?.description }}></span>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='universities'>
                                                    <ul>
                                                        <li><img src={homedata?.section2?.image1} alt="" /></li>
                                                        <li><img src={homedata?.section2?.image2} alt="" /></li>
                                                        <li><img src={homedata?.section2?.image3} alt="" /></li>
                                                        <li><img src={homedata?.section2?.image4} alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pb-250 pt-xs-30 pb-xs-120'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-7 mb-xs-20'>
                                                <div className='image-rounded'><img src={homedata?.section2?.large_image} alt="" className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='inner-container'>

                                                    <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                        {homedata?.section2?.title1}
                                                    </div>
                                                    <div className='section-text'>
                                                        <span dangerouslySetInnerHTML={{ __html: homedata?.section2?.description1 }}></span>
                                                    </div>
                                                    <div className='pics-abbr mt-30'>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>P</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>
                                                                    {homedata?.section2?.list1}
                                                                    <div className='desc-info'>
                                                                        <Tooltip text="Just click Get in Touch button and submit the form and your dedicated PICS consultant will contact you soon">
                                                                            <img src={infoicon} /> Read more
                                                                        </Tooltip>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>I</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>
                                                                    {homedata?.section2?.list2}
                                                                    <div className='desc-info'>
                                                                        <Tooltip text="Your PICS consultant will identify and understand your requirements like  degree, country, financials & more">
                                                                            <img src={infoicon} /> Read more
                                                                        </Tooltip>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>C</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>
                                                                    {homedata?.section2?.list3}
                                                                    <div className='desc-info'>
                                                                        <Tooltip text="Your PICS consultants will match your requirements and will provide a list of university for you to choose and make a life time decision">
                                                                            <img src={infoicon} /> Read more
                                                                        </Tooltip>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>S</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>
                                                                    {homedata?.section2?.list4}
                                                                    <div className='desc-info'>
                                                                        <Tooltip text="Submit the application for an university offer">
                                                                            <img src={infoicon} /> Read more
                                                                        </Tooltip>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='m-center mt-40 mb-0'>
                                                        <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
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
                                                    <img src={homedata?.section3?.image} alt='' />
                                                </div>
                                                <div className='mt-30'>
                                                    <h3 className="hs-line-3 white text-center font-alt mb-20 mb-xs-10">
                                                        {homedata?.section3?.title}
                                                    </h3>
                                                    <div className='row d-flex justify-content-center mb-40'>
                                                        <div className='col-md-9'>
                                                            <div className='section-text text-center white'>
                                                                <span dangerouslySetInnerHTML={{ __html: homedata?.section3?.description }}></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Box className="mt-10">
                                                        <Grid sx={{ mb: 2 }} className="comp-bx" container spacing={2}>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service">
                                                                    <div className='icon'><img src={homedata?.section3?.box1_image} /></div>
                                                                    <h2 dangerouslySetInnerHTML={{ __html: homedata?.section3?.box1_title }}></h2>
                                                                    <p>{homedata?.section3?.box1_desc}</p>
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service">
                                                                    <div className='icon'><img src={homedata?.section3?.box2_image} /></div>
                                                                    <h2 dangerouslySetInnerHTML={{ __html: homedata?.section3?.box2_title }}></h2>
                                                                    <p>{homedata?.section3?.box2_desc}</p>
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service">
                                                                    <div className='icon'><img src={homedata?.section3?.box3_image} /></div>
                                                                    <h2 dangerouslySetInnerHTML={{ __html: homedata?.section3?.box3_title }}></h2>
                                                                    <p>{homedata?.section3?.box3_desc}</p>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <div className='mt-40 mb-20 text-center'>
                                                        <a href='contact' className='btn btn-mod btn-w btn-round btn-medium'>Get in touch</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-center' style={{
                                    background: `url(${free_consultation})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h4 className="hs-line-3 color text-center font-alt mb-60 mb-xs-30">
                                                    {homedata?.section5?.title}
                                                </h4>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-8'>
                                                <div className='row d-flex justify-content-center'>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={statement} />
                                                                <p>Statement of<br />Purpose</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={letter} />
                                                                <p>Letter of<br />Recommendation</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={student} />
                                                                <p>student visa</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={admission} />
                                                                <p>admission essayS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={studentcv} />
                                                                <p>student cV</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <img src={englishtest} />
                                                                <p>English test</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className='col-md-6 xs-order-3'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <h4>03. {homedata?.section5?.title3}</h4>
                                                                <p dangerouslySetInnerHTML={{ __html: homedata?.section5?.desc3 }}></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6 xs-order-2'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <h4>02. {homedata?.section5?.title2}</h4>
                                                                <p dangerouslySetInnerHTML={{ __html: homedata?.section5?.desc2 }}></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6 xs-order-4'>
                                                        <div className='step-container'>
                                                            <div className='description'>
                                                                <h4>04. {homedata?.section5?.title4}</h4>
                                                                <p dangerouslySetInnerHTML={{ __html: homedata?.section5?.desc4 }}></p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-40 mb-20 text-center'>
                                            <a href='faq' className='btn btn-mod btn-w btn-round btn-medium'>FAQ</a>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-center' style={{
                                    background: `url(${university_list})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h5 className="hs-line-3 color text-center font-alt mb-20 mb-xs-10">
                                                    {homedata?.section4?.title}
                                                </h5>
                                                <div className='row d-flex justify-content-center mb-0'>
                                                    <div className='col-md-8'>
                                                        <div className='section-text text-center mb-30'>
                                                            <span dangerouslySetInnerHTML={{ __html: homedata?.section4?.description }}></span>
                                                        </div>

                                                        <h6 className='hs-line-4 mb-0'>
                                                            <b>Click to view Universities by Country</b>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='container'>
                                        <Tabs
                                            orientation="horizontal"
                                            value={value}
                                            onChange={handleChange}
                                            className='pics-tabs'
                                            aria-label="horizontal tabs example"
                                        >
                                            {
                                                universitydata?.length > 0 && universitydata?.map((x, i) => (
                                                    <Tab className={`tab-single ${(x?.name?.toLowerCase())}`} label={x?.name} {...a11yProps(i)} />
                                                ))
                                            }
                                        </Tabs>
                                        <TabPanel value={value} index={0}>
                                            <Box className='mt-10 xs-padding-12'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[0]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[0]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>UK data coming soon...</p>
                                                        </>
                                                    }

                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(1)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[1]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[1]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>USA data coming soon...</p>
                                                        </>
                                                    }

                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(2)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' onClick={handleOpenContact} className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[2]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[2]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>CANADA data coming soon...</p>
                                                        </>
                                                    }

                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(3)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' onClick={handleOpenContact} className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={3}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[3]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[3]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>AUSTRALIA data coming soon...</p>
                                                        </>
                                                    }
                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(4)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='contact' className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </TabPanel>
                                    </div>
                                </section>
                            </main>

                            <footer className="small-section bg-gray-lighter footer pb-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 text-center m-center mb-xs-20">
                                            <a href="#top"><img src={headandfooterdata?.logo} alt="PICS Consultants" /></a>
                                        </div>
                                        <div className="col-md-9">
                                            <div className='dblock'>
                                                <div className="footer-menu m-center mt-xs-20 mb-40 mb-xs-20">
                                                    <ul className="clearlist">
                                                        <li><a href="/">Home</a></li>
                                                        <li><a href="/about">About</a></li>
                                                        <li><a href="/faq">FAQ</a></li>
                                                        <li><a href="/contact">Contact</a></li>
                                                        <li><a href="/term-condition">Terms & conditions</a></li>
                                                        <li><a href="/policy">Privacy Policy</a></li>
                                                        <li><a href="#">Cookie Policy</a></li>
                                                    </ul>
                                                </div>

                                                <div className='footer-widget mb-3'>
                                                    <div className='title m-center'>{headandfooterdata?.address_title}</div>
                                                </div>
                                                <div className='row pt-0 pb-10 pt-xs-20 pb-xs-10'>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget '>
                                                            <h5>United Kingdom (Headquarters)</h5>
                                                            {/* {headandfooterdata?.address} */}
                                                            27 Duke St, Vision Offices,<br />Chelmsford, CM1 1HT<br /><br />
                                                            <b>Call & WhatsApp</b> <a href='tel:+447510830896'>+44 7510 830896</a>
                                                            {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 m-center mb-xs-20'>
                                                        <div className='footer-widget'>
                                                            <h5>India</h5>
                                                            1st Floor, Elsa Plaza, No 2,<br />Rajiv Gandhi Salai, Padur, OMR<br />Chennai 603 103, India<br />
                                                            <b>Call & WhatsApp</b> <a href='tel:+919444094442'>+91 94440 94442</a>
                                                            {/* {headandfooterdata?.country} */}

                                                            {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                        </div>
                                                    </div>
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

                                                <div className='m-center mt-30'>
                                                    <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>{headandfooterdata?.email}</button>
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
                                                {headandfooterdata?.copyright}
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