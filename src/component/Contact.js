import React, { useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, FormControl } from '@mui/material';
import contact_step_1 from '../images/contact-step-1.jpg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './style.css';
import '../css/verticals.min.css';
import { getuniversitydata, postcontactdata } from '../Actions/Pics';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import countriesCode from './PhoneCode.json';
import PhoneInput from 'react-phone-input-2';
import Alert from '@mui/material/Alert';
import 'react-phone-input-2/lib/style.css'

let countries = countriesCode?.map(x => x?.code);
let customLabels = {}
for (let index = 0; index < countriesCode.length; index++) {
    const element = countriesCode[index];
    let obj = {
        [element?.code]:
            { primary: element?.name, secondary: element?.dial_code }
    }
    Object?.assign(customLabels, obj);
}

const Dashboard = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    let [loading, setLoading] = React.useState(false);
    let [firstName, setFirstName] = React.useState('');
    let [lastName, setLastName] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [phonecode, setPhonecode] = React.useState('');
    let [phoneNumber, setPhoneNumber] = React.useState('');
    let [studyDestination, setStudyDestination] = React.useState('');
    let [fromDate, setFromDate] = React.useState(null);
    let [time, setTime] = React.useState('');
    let [checked, setChecked] = React.useState(false);
    const defaultTime = dayjs()?.set('hour', 12)?.startOf('hour');
    const contactdata = useSelector((state) => state?.Pics?.contactdata);
    const universitydata = useSelector((state) => state?.Pics?.universitydata?.data);

    useEffect(() => {
        setFirstName(location?.state?.firstName);
        // setLastName(location?.state?.lastName);
        setEmail(location?.state?.email);
        setPhoneNumber(location?.state?.phoneNumber);
        setPhonecode(location?.state?.phonecode ? location?.state?.phonecode : '91');
        setStudyDestination(location?.state?.studyDestination);
        setChecked(location?.state?.checked);
        setFromDate(location?.state?.fromDate ? new Date(location?.state?.fromDate) : null);
        let hours = location?.state?.time?.substring(0, location?.state?.time?.indexOf(":"));
        let minutes = location?.state?.time?.substring(2, location?.state?.time?.lastIndexOf(":"))?.replaceAll(':', '');
        let times = dayjs()?.set('hour', hours)?.startOf('hour')?.set('minute', minutes)?.startOf('minute');
        let ampm = location?.state?.time?.replace(/[^A-Za-z]/g, '');
        setTime(location?.state?.time ? dayjs(`${times?.toDate()}${ampm}`) : defaultTime);
    }, []);

    function onCheck(event) {
        console.log('onCheck: ', event); // always called
    }

    function onLinkClick(event) {
        console.log('onLinkClick'); // never called
    }

    const label = (
        <span>I have read and agree to the&nbsp;
            <a
                href="/terms_and_conditions"
                target="_blank"
                onClick={onLinkClick}
            >
                Terms and Conditions
            </a>
        </span>
    )

    const policyHandleChange = (e) => {
        setChecked(e.target.checked);
    }

    const handleChange = (event) => {
        if (event.target.name === 'firstName') setFirstName(event.target.value);
        // else if (event.target.name === 'lastName') setLastName(event.target.value);
        else if (event.target.name === 'phoneNumber') setPhoneNumber(event.target.value);
        else if (event.target.name === 'studyDestination') setStudyDestination(event.target.value);
    }

    let [firstNameError, setfirstNameError] = React.useState(false);
    let [lastNameError, setlastNameError] = React.useState(false);
    let [emailError, setemailError] = React.useState(false);
    let [emailValidationError, setEmailValidationError] = React.useState(false);
    let [phoneCodeError, setphoneCodeError] = React.useState(false);
    let [phoneNumberError, setphoneNumberError] = React.useState(false);
    let [studyDestinationError, setstudyDestinationError] = React.useState(false);
    let [fromDateError, setfromDateError] = React.useState(false);
    let [checkboxError, setCheckboxError] = React.useState(false);
    const [searchButtonLoading, setSearchButtonLoading] = React.useState(false);
    let [apiErrorFlag, setApiErrorFlag] = React.useState(false);
    let [apiErrorMessage, setApiErrorMessage] = React.useState('');

    const navigate = useNavigate();

    const step1NextButtonClick = () => {
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!firstName) {
            setfirstNameError(true);
            return null;
        }
        else {
            setfirstNameError(false);
        }
        // if (!lastName) {
        //     setlastNameError(true);
        //     return null;
        // }
        // else {
        //     setlastNameError(false);
        // }
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
        // if (!fromDate) {
        //     setfromDateError(true);
        //     return null;
        // }
        // else {
        //     setfromDateError(false);
        // }
        if (!checked) {
            setCheckboxError(true);
            return null;
        }
        else {
            setCheckboxError(false);
        }
        let payload = {
            first_name: firstName,
            last_name: firstName,
            email: email,
            phone_code: phonecode,
            phone_number: phoneNumber,
            destination: studyDestination,
        }
        setSearchButtonLoading(true);
        if (!searchButtonLoading) dispatch(postcontactdata(payload));
    }

    useEffect(() => {
        setTimeout(() => {
            if (contactdata?.status == 'success') {
                navigate('/step2', {
                    replace: true, state: {
                        firstName: firstName,
                        email: email,
                        phonecode: phonecode,
                        phoneNumber: phoneNumber,
                        studyDestination: studyDestination,
                        checked: checked
                    }
                });
                setApiErrorFlag(false);
                setApiErrorMessage('');
                setSearchButtonLoading(false);
                return true;
            }
            else if (contactdata?.status == "validation") {
                setSearchButtonLoading(false);
                setApiErrorFlag(true);
                setApiErrorMessage(contactdata?.validation);
            }
            else if (contactdata?.status == "error") {
                setSearchButtonLoading(false);
                setApiErrorFlag(true);
                setApiErrorMessage(contactdata?.message);
            }
        }, 1000);
    }, [contactdata]);

    const emailHandleChange = (e) => {
        setEmail(e.target.value);
    }

    useEffect(() => {
        dispatch(getuniversitydata());
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);

    const articles = [
        {
            content: [
                `I consent to receive digital and telecommunications from PICS Consultants regarding our university application services. 
            I understand I may change my preferences or opt out at any time using the unsubscribe link on all PICS Consultants emails.
            <span className='terms-link'>View <a href='/policy' target='_blank'>Privacy Policy</a></span>`,
            ]
        }
    ];

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
                            <main id="main">
                                <section className="split-section contact-section">
                                    <div className="split-section-headings left">
                                        <div className="ssh-table">
                                            <div className="ssh-cell bg-scroll" style={{
                                                background: `url(${contact_step_1})`,
                                            }}></div>
                                        </div>
                                    </div>

                                    <div className="split-section-content">
                                        <div className="split-section-wrapper">
                                            <div className="text align-left">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <a href="/" className='go-back'>
                                                        <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="30.229" height="14.961" viewBox="0 0 30.229 14.961">
                                                            <g id="Group_356" data-name="Group 356" transform="translate(1 1.414)">
                                                                <path id="Path_11813" data-name="Path 11813" d="M6159.906,809.385l-6.065,6.066,6.065,6.066" transform="translate(-6153.839 -809.385)" fill="none" stroke="#8f8f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                                <path id="Path_11814" data-name="Path 11814" d="M6106.431,839.186h28.229" transform="translate(-6106.431 -833.12)" fill="none" stroke="#8f8f8f" stroke-linecap="round" stroke-width="2" />
                                                            </g>
                                                        </svg>
                                                        <span>Back</span>
                                                    </a>
                                                    <a href="/" className='go-back'>
                                                        <span>Close</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.505" height="15.505" viewBox="0 0 15.505 15.505">
                                                            <path id="Union_1" data-name="Union 1" d="M-5744.248,37.752-5751,44.5l6.752-6.753L-5751,31l6.752,6.753L-5737.5,31l-6.752,6.753,6.752,6.753Z" transform="translate(5752 -29.999)" fill="none" stroke="#8f8f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <h1 className='hs-line-7 mb-0'>SET UP A FREE CONSULTATION</h1>
                                                <h2 className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                    We’d love to speak to you!
                                                </h2>
                                                <div className='row'>
                                                    <div className='col-md-6'>
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
                                                    <div className='col-md-6'>
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
                                                        {/* <TextField
                                                            fullWidth
                                                            error={lastNameError}
                                                            helperText={lastNameError ? 'Last Name is required' : ''}
                                                            className='form-control'
                                                            id="standard-basic"
                                                            label="Last Name*"
                                                            variant="standard"
                                                            name='lastName'
                                                            value={lastName}
                                                            onChange={handleChange}
                                                        /> */}
                                                    </div>
                                                    {/* <div className='col-md-12'>
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
                                                    </div> */}
                                                    <div className='col-4 col-md-3 mt-20 pr-0'>
                                                        <PhoneInput
                                                            country={'us'}
                                                            value={phonecode}
                                                            onChange={phone => setPhonecode(phone)}
                                                        />
                                                        {phoneCodeError && <span style={{ color: 'red', fontSize: '10px' }}>Country is required</span>}
                                                    </div>
                                                    <div className='col-8 col-md-5 pl-0 mt-t4'>
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
                                                    <div className='col-md-4 mb-30 selectBox'>
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
                                                    {/* <div className='section-title-alt text-gray mb-10'>Preferred time to connect with you</div>
                                                    <div className='col-6 col-md-5 mb-xs-20'>
                                                        <DatePicker
                                                            className='datepicker'
                                                            minDate={new Date()}
                                                            value={fromDate}
                                                            name="From Date"
                                                            selected={fromDate}
                                                            onChange={(newValue) => {
                                                                setFromDate(newValue);
                                                                setfromDateError(false);
                                                            }}
                                                            dateFormat={'dd/MM/yyyy'}
                                                            placeholderText='DD/MM/YYYY'
                                                            label={<contact_step_1 />}
                                                        />
                                                        <span style={{ color: 'red', fontSize: '12px' }}>{fromDateError ? 'Date is required' : ''}</span>
                                                    </div>
                                                    <div className='col-6 col-md-5 timepicker'>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <TimePicker
                                                                value={time}
                                                                onChange={(newValue) => {
                                                                    setTime(newValue);
                                                                }}
                                                                renderInput={(newValue) => <TextField {...newValue} />}
                                                            />
                                                        </LocalizationProvider>
                                                    </div> */}
                                                    <div className='col-md-12'>
                                                        <div className='terms-label mt-10 mb-10'>
                                                            <FormControlLabel key='policy' control={<Checkbox key='policy' checked={checked} onChange={policyHandleChange} />}
                                                                label={
                                                                    articles[0].content.map(paragraph =>
                                                                        (<p dangerouslySetInnerHTML={{ __html: paragraph }} />)
                                                                    )
                                                                } />
                                                            <span style={{ color: 'red', fontSize: '12px' }}>{checkboxError ? 'Select the consent form checkbox' : ''}</span>
                                                        </div>
                                                    </div>
                                                    {apiErrorFlag && <Alert severity="error">{apiErrorMessage}</Alert>}
                                                    <div className='col-md-12'>
                                                        <a onClick={step1NextButtonClick} className='btn btn-mod btn-color btn-round btn-large inline-flex'><span>{searchButtonLoading ? 'Processing...' : 'Next'} </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30.229" height="14.961" viewBox="0 0 30.229 14.961">
                                                                <g id="Group_356" data-name="Group 356" transform="translate(1 1.414)">
                                                                    <path id="Path_11813" data-name="Path 11813" d="M6153.84,809.385l6.065,6.066-6.065,6.066" transform="translate(-6131.677 -809.385)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                                    <path id="Path_11814" data-name="Path 11814" d="M6134.66,839.186h-28.229" transform="translate(-6106.431 -833.12)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2" />
                                                                </g>
                                                            </svg>
                                                        </a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-footer'>
                                            <ul>
                                                <li><span className='dot active'></span></li>
                                                <li><span className='dot'></span></li>
                                                <li><span className='dot'></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Dashboard;