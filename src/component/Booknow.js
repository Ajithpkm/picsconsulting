import React, { useEffect, useRef } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WOW from 'wowjs';
import { Checkbox, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, TextField, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import homebg from '../images/home-bg.jpg';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import university_01 from '../images/united-kingdom.png';
import university_02 from '../images/united-states.png';
import university_03 from '../images/canada.png';
import university_04 from '../images/australia.png';
import whatsappwhite from '../images/whatsapp-w.png';
import admission from '../images/university.svg';
import application from '../images/application.svg';
import ielts from '../images/ielts.svg';
import scholarships from '../images/scholarships.svg';
import whychoose from '../images/why-choose.jpg';
import prepare from '../images/prepare.svg';
import identity from '../images/identity.svg';
import choose from '../images/choose.svg';
import submit from '../images/submit.svg';
import guaranteed from '../images/guaranteed.jpg';
import additionalservices from '../images/additional-services.jpg';
import statement from '../images/statement.png';
import letter from '../images/letter.png';
import student from '../images/student.png';
import admission2 from '../images/admission.png';
import studentcv from '../images/studentcv.png';
import englishtest from '../images/englishtest.png';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import university_icon_01 from '../images/universities/university-of-bristol.jpg';
import Modal from '@mui/material/Modal';
import SimpleBar from 'react-custom-scrollbars';
import './style.css';
import '../css/verticals.min.css';
import { Height } from '@material-ui/icons';
import { gethomedata, getheaderandfooterdata, getaboutusdata, getfaqcategorydata, getuniversitydata } from '../Actions/Pics';
import { useDispatch, useSelector } from "react-redux";
import CookieConsent, { Cookies } from "react-cookie-consent";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { postcontactdata } from '../Actions/Pics';
import Alert from '@mui/material/Alert';
import { useHistory, useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();
    let [firstName, setFirstName] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [phonecode, setPhonecode] = React.useState('91');
    let [phoneNumber, setPhoneNumber] = React.useState('');
    let [studyDestination, setStudyDestination] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = React.useState(true);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = React.useState(false);
    let [checked, setChecked] = React.useState(false);
    const [searchButtonLoading, setSearchButtonLoading] = React.useState(false);


    let [firstNameError, setfirstNameError] = React.useState(false);
    let [emailError, setemailError] = React.useState(false);
    let [emailValidationError, setEmailValidationError] = React.useState(false);
    let [phoneCodeError, setphoneCodeError] = React.useState(false);
    let [phoneNumberError, setphoneNumberError] = React.useState(false);
    let [studyDestinationError, setstudyDestinationError] = React.useState(false);
    let [checkboxError, setCheckboxError] = React.useState(false);

    const handleChange = (event) => {
        if (event.target.name === 'firstName') setFirstName(event.target.value);
        else if (event.target.name === 'phoneNumber') setPhoneNumber(event.target.value);
        else if (event.target.name === 'studyDestination') setStudyDestination(event.target.value);
    }


    const submitButton = () => {
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!firstName) {
            setfirstNameError(true);
            return null;
        }
        else {
            setfirstNameError(false);
        }
        if (!email) {
            setemailError(true);
            return null;
        }
        else {
            setemailError(false);
        }
        if (email && email?.includes('@')) {
            setEmailValidationError(false);
        }
        else {
            setEmailValidationError(true);
            return null;
        }
        if (!phonecode) {
            setphoneCodeError(true);
            return null;
        }
        else {
            setphoneCodeError(false);
        }
        if (!phoneNumber) {
            setphoneNumberError(true);
            return null;
        }
        else {
            setphoneNumberError(false);
        }
        if (!studyDestination) {
            setstudyDestinationError(true);
            return null;
        } else {
            setstudyDestinationError(false);
        }
        if (!checked) {
            setCheckboxError(true);
            return null;
        }
        else {
            setCheckboxError(false);
        }
        setSearchButtonLoading(true);
        let payload = {
            first_name: firstName,
            last_name: firstName,
            email: email,
            phone_code: phonecode,
            phone_number: phoneNumber,
            destination: studyDestination,
            checked: checked,
            module: 'book'
        }
        dispatch(postcontactdata(payload));
    }
    const contactdata = useSelector((state) => state?.Pics?.contactdata);
    let [apiErrorFlag, setApiErrorFlag] = React.useState(false);
    let [apiSuccessFlag, setApiSuccessFlag] = React.useState(false);
    let [apiErrorMessage, setApiErrorMessage] = React.useState('');

    useEffect(() => {
        setSearchButtonLoading(false);
        setTimeout(() => {
            if (contactdata?.status == 'success') {
                setApiSuccessFlag(true);
                setApiErrorMessage('Your contact details have been saved.');
                setFirstName('');
                setEmail('');
                setPhoneNumber('');
                setStudyDestination('');
                setChecked(false);
                navigate('/booknowsuccesspage');
            }
            else if (contactdata?.status == "validation") {
                setApiErrorFlag(true);
                setApiSuccessFlag(false);
                setApiErrorMessage(contactdata?.validation);
            }
            else if (contactdata?.status == "error") {
                setApiErrorFlag(true);
                setApiSuccessFlag(false);
                setApiErrorMessage(contactdata?.message);
            }
        }, 1000);
    }, [contactdata]);

    useEffect(() => {
        setSearchButtonLoading(false);
        setTimeout(() => {
            setApiSuccessFlag(false);
            setApiErrorFlag(false);
        }, 1000);
    }, [apiSuccessFlag, apiErrorFlag]);

    const emailHandleChange = (e) => {
        setEmail(e.target.value);
    }

    const policyHandleChange = (e) => {
        setChecked(e.target.checked);
    }

    useEffect(() => {
        dispatch(getuniversitydata());
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);


    const dispatch = useDispatch();
    const headandfooterdata = useSelector((state) => state?.Pics?.headandfooterdata?.data);
    const universitydata = useSelector((state) => state?.Pics?.universitydata?.data);

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

    new WOW.WOW({
        live: false
    }).init();

    const articles = [
        {
            content: [
                `I have read and agree to Term and Conditions`,
            ]
        }
    ];

    let universityLogo1 = universitydata && (universitydata?.[0]?.university?.slice(0, 5));
    let universityLogo2 = universitydata && (universitydata?.[1]?.university?.slice(0, 5));
    let universityLogo3 = universitydata && (universitydata?.[2]?.university?.slice(0, 5));
    let universityLogo4 = universitydata && [...universityLogo1, ...universityLogo2, ...universityLogo3];

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
                            <nav className={isScrollValueMoreThanHeaderHeight ? "main-nav stick-fixed sticky-header" : "main-nav menu-bg stick-fixed"}>
                                <div className="container-1400 relative clearfix">
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
                                            <div class="whatsapp-icon">
                                                <a href="https://api.whatsapp.com/send?phone=919444094442" target="_blank">
                                                    <span className='menu-item'>connect on whatsapp</span>
                                                    <img src={whatsappwhite} />
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <main id="main">
                                <section className="home-section bg-scroll fixed-height-small overflowz99" id='home' style={{
                                    backgroundImage: `url(${homebg})`
                                }}>
                                    <div className="js-height-parent-book container-1400">
                                        <div className="home-content">
                                            <div className="home-text">
                                                <div className="row d-flex align-items-center justify-content-between pt-xs-80">
                                                    <div className="col-md-6">
                                                        <div className="hs-line-1 text-left m-center no-transp font-alt mt-30 mb-20 mb-xs-10">
                                                            Study abroad with PICS
                                                        </div>
                                                        <div className='m-center d-flex mt-20 mb-10 m-justifyy-center'>
                                                            <div className='home-banner'>
                                                                <div><img src={university_01} /></div>
                                                                <h3>UK</h3>
                                                            </div>
                                                            <div className='home-banner'>
                                                                <div><img src={university_02} /></div>
                                                                <h3>US</h3>
                                                            </div>
                                                            <div className='home-banner'>
                                                                <div><img src={university_03} /></div>
                                                                <h3>Canada</h3>
                                                            </div>
                                                            <div className='home-banner'>
                                                                <div><img src={university_04} /></div>
                                                                <h3>Australia</h3>
                                                            </div>
                                                        </div>
                                                        <div className='m-center banner-desc white mb-20'>
                                                            UG, PG, PHD, FOUNDATION<br />
                                                            ENGINEERING, MANAGEMENT, MEDICINE,<br />
                                                            LAW, ARTS & SCIENCE & ENGLISH PROGRAMS
                                                        </div>

                                                        <div className='row mt-30 mb-xs-20'>
                                                            <div className='col-6 col-md-6'>
                                                                <div className='headerlist mb-30'>
                                                                    <div className='me-3'><img src={admission} /></div>
                                                                    <h4>University Admissions</h4>
                                                                </div>
                                                            </div>

                                                            <div className='col-6 col-md-6'>
                                                                <div className='headerlist mb-30'>
                                                                    <div className='me-3'><img src={application} /></div>
                                                                    <h4>Application Service</h4>
                                                                </div>
                                                            </div>

                                                            <div className='col-6 col-md-6'>
                                                                <div className='headerlist'>
                                                                    <div className='me-3'><img src={ielts} /></div>
                                                                    <h4>IELTS Prep</h4>
                                                                </div>
                                                            </div>

                                                            <div className='col-6 col-md-6'>
                                                                <div className='headerlist'>
                                                                    <div className='me-3'><img src={scholarships} /></div>
                                                                    <h4>Scholarships</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-5'>
                                                        <div className='contactForm'>
                                                            <div className='row'>
                                                                <div className='col-md-12'>
                                                                    <TextField
                                                                        fullWidth
                                                                        error={firstNameError}
                                                                        helperText={firstNameError ? 'Full Name is required' : ''}
                                                                        className='form-control'
                                                                        id="standard-basic"
                                                                        label="Full Name*"
                                                                        variant="standard"
                                                                        name='firstName'
                                                                        value={firstName}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                                <div className='col-md-12'>
                                                                    <TextField
                                                                        fullWidth
                                                                        error={emailError || emailValidationError}
                                                                        helperText={emailError ? 'Email is required' : emailValidationError ? 'Invalid email address' : ''}
                                                                        className='form-control'
                                                                        id="standard-basic"
                                                                        label="Email Address*"
                                                                        variant="standard"
                                                                        type="email"
                                                                        name='email'
                                                                        value={email}
                                                                        onChange={emailHandleChange}
                                                                    />
                                                                </div>
                                                                <div className='col-4 col-md-4 pr-0'>
                                                                    <PhoneInput
                                                                        country={'us'}
                                                                        value={phonecode}
                                                                        onChange={phone => setPhonecode(phone)}
                                                                    />
                                                                    {phoneCodeError && <span style={{ color: 'red', fontSize: '10px' }}>Country is required</span>}
                                                                </div>
                                                                <div className='col-8 col-md-8 pl-0'>
                                                                    <TextField
                                                                        fullWidth
                                                                        error={phoneNumberError}
                                                                        helperText={phoneNumberError ? 'Phone Number is required' : ''}
                                                                        className='form-control'
                                                                        id="standard-basic"
                                                                        label="Phone Number*"
                                                                        variant="standard"
                                                                        type='number'
                                                                        name='phoneNumber'
                                                                        value={phoneNumber}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                                <div className='col-md-12 mb-30 selectBox'>
                                                                    <FormControl className='form-control mt-10'
                                                                        id="standard-basic" variant="standard">
                                                                        <InputLabel id="demo-simple-select-standard-label">Study Destination*</InputLabel>
                                                                        <Select
                                                                            labelId="demo-simple-select-standard-label"
                                                                            id="demo-simple-select-standard"
                                                                            name='studyDestination'
                                                                            value={studyDestination}
                                                                            onChange={handleChange}
                                                                        >
                                                                            {
                                                                                universitydata?.length > 0 && universitydata?.map((x) => (
                                                                                    <MenuItem value={x?.id}>{x?.name}</MenuItem>
                                                                                ))
                                                                            }
                                                                        </Select>
                                                                        {studyDestinationError && <span style={{ color: 'red', fontSize: '12px' }}>Study Destination is required</span>}
                                                                    </FormControl>
                                                                </div>
                                                                <div className='col-md-12'>
                                                                    <div className='terms-label mt-0 mb-10'>
                                                                        <FormControlLabel key='policy' control={<Checkbox key='policy' checked={checked} onChange={policyHandleChange} />}
                                                                            label={
                                                                                articles[0].content.map(paragraph =>
                                                                                    (<p dangerouslySetInnerHTML={{ __html: paragraph }} />)
                                                                                )
                                                                            } />
                                                                        <span style={{ color: 'red', fontSize: '12px' }}>{checkboxError ? 'Select the consent form checkbox' : ''}</span>
                                                                    </div>
                                                                </div>
                                                                {apiErrorFlag && <Alert severity='error'>{apiErrorMessage}</Alert>}
                                                                {apiSuccessFlag && <Alert severity='success'>{apiErrorMessage}</Alert>}
                                                                <div className='col-md-12'>
                                                                    <a onClick={submitButton} className='btn btn-mod btn-color btn-round btn-large  w-100'><span>{searchButtonLoading ? 'Processing...' : 'BOOK YOUR FREE CONSULTATION'} </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-center m-push-xs-top' style={{
                                    backgroundImage: `url(${whychoose})`
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className="hs-line-3 color text-center font-alt mb-40 mb-xs-30">
                                                    Why choose PICS?
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-12'>
                                                <div className='row d-flex justify-content-center'>
                                                    <div className='col-6 col-md-3'>
                                                        <div className='why-choose'>
                                                            <div className='description'>
                                                                <img src={prepare} />
                                                                <h4>Prepare</h4>
                                                                <p>We help you prepare for the meetings/interviews</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-3'>
                                                        <div className='why-choose'>
                                                            <div className='description'>
                                                                <img src={identity} />
                                                                <h4>Identify</h4>
                                                                <p>Your PICS consultant will identify and understand your requirements</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-3'>
                                                        <div className='why-choose'>
                                                            <div className='description'>
                                                                <img src={choose} />
                                                                <h4>Choose</h4>
                                                                <p>You consultant will help you choose your ideal university</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-3'>
                                                        <div className='why-choose'>
                                                            <div className='description'>
                                                                <img src={submit} />
                                                                <h4>Submit</h4>
                                                                <p>Submit the application for an university offer </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-50 mb-0 mt-xs-20 text-center"><a href="#home" class="btn btn-mod btn-color btn-round btn-large-lg">enquire</a></div>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-bottom pt-80 pb-80' style={{
                                    backgroundImage: `url(${guaranteed})`
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className="hs-line-3 white text-center font-alt mb-0 mb-xs-0">
                                                    We offer 100% guaranteed Admission
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-center' style={{
                                    backgroundImage: `url(${additionalservices})`
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className="hs-line-3 color text-center font-alt mb-60 mb-xs-30">
                                                    Additional PICS Services
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-12'>
                                                <div className='row d-flex justify-content-center'>
                                                    <div className='col-6 col-md-2'>
                                                        <div className='additional-services'>
                                                            <div className='description'>
                                                                <img src={statement} />
                                                                <p>Statement of<br />Purpose</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-2'>
                                                        <div className='additional-services'>
                                                            <div className='description'>
                                                                <img src={letter} />
                                                                <p>Letter of<br />Recommendation</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-2'>
                                                        <div className='additional-services'>
                                                            <div className='description'>
                                                                <img src={student} />
                                                                <p>student visa</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-2'>
                                                        <div className='additional-services'>
                                                            <div className='description'>
                                                                <img src={admission2} />
                                                                <p>admission essayS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-2'>
                                                        <div className='additional-services'>
                                                            <div className='description'>
                                                                <img src={studentcv} />
                                                                <p>student cV</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-2'>
                                                        <div className='additional-services'>
                                                            <div className='description'>
                                                                <img src={englishtest} />
                                                                <p>English test</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-50 mb-0 mt-xs-20 text-center"><a href="#home" class="btn btn-mod btn-color btn-round btn-large-lg">enquire</a></div>
                                    </div>
                                </section>

                                <section className='small-section'>
                                    <div className='container-1400 relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className="hs-line-3 color text-center font-alt mb-60 mb-xs-30">
                                                    225+ Global University Partners
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-12'>
                                                <div className='d-flex md-block faq-categories booknow-section'>
                                                    <Button
                                                        onClick={() => {
                                                            handleHorizantalScroll(elementRef.current, 25, 100, -10);
                                                        }}
                                                        disabled={arrowDisable}
                                                    >
                                                        <ArrowBackIcon className='color' />
                                                    </Button>
                                                    <div className="img-container" ref={elementRef}>
                                                        <div className='d-flex md-block2'>
                                                            {universityLogo4?.length > 0 &&
                                                                <>
                                                                    {
                                                                        (universityLogo4)?.map((x) => (
                                                                            <Grid item className="univ_logo">
                                                                                <div className='icon'><img src={x?.image} /></div>
                                                                            </Grid>
                                                                        ))
                                                                    }
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                    <Button
                                                        onClick={() => {
                                                            handleHorizantalScroll(elementRef.current, 25, 100, 10);
                                                        }}
                                                    >
                                                        <ArrowForwardIcon className='color' />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </main>

                            <footer className="small-section bg-footer footer pb-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className='m-center'>

                                                <div className='footer-widget mb-4 mb-xs-20'>
                                                    <div className='title text-center m-center'>{headandfooterdata?.address_title}</div>
                                                </div>
                                                <div className='row d-flex justify-content-center pt-0 pb-10 pt-xs-20 pb-xs-10'>
                                                    <div className='col-md-4 text-center m-center mb-xs-20'>
                                                        <div className='footer-widget '>
                                                            <h5>United Kingdom (Headquarters)</h5>
                                                            27 Duke St, Vision Offices,<br />Chelmsford, CM1 1HT<br /><br />
                                                            <b>Call & WhatsApp</b> +44 7510 830896
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 text-center m-center mb-xs-20'>
                                                        <div className='footer-widget'>
                                                            <h5>India</h5>
                                                            1st Floor, Elsa Plaza, No 2,<br />Rajiv Gandhi Salai, Padur, OMR<br />Chennai 603 103, India<br />
                                                            <b>Call & WhatsApp</b> +91 94440 94442
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="footer-copy text-center pt-40 pb-0 pt-xs-20 m-center">
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