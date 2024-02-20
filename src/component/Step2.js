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

const Dashboard = () => {

    let [loading, setLoading] = React.useState(false);
    let [firstName, setFirstName] = React.useState('');
    let [lastName, setLastName] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [phonecode, setPhonecode] = React.useState('+91');
    let [phoneNumber, setPhoneNumber] = React.useState('');
    let [studyDestination, setStudyDestination] = React.useState('');
    let [fromDate, setFromDate] = React.useState(null);
    let [time, setTime] = React.useState(dayjs('2022-04-17T00:00'));
    let [checked, setChecked] = React.useState(true);

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
        else if (event.target.name === 'lastName') setLastName(event.target.value);
        else if (event.target.name === 'phoneNumber') setPhoneNumber(event.target.value);
        else if (event.target.name === 'studyDestination') setStudyDestination(event.target.value);
        else if (event.target.name === 'phonecode') setPhonecode(event.target.value);
    }

    const emailHandleChange = (e) => {
        // const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        // if (e.target?.value && e.target.value.match(isValidEmail)) {
        // showNoValidEmail(false);
        setEmail(e.target.value);
        // } else {
        // showNoValidEmail(true);
        // }
    }

    useEffect(() => {
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
                                                <div className='hs-line-7'>SET UP A FREE CONSULTATION</div>
                                                <div className="hs-line-3 color font-alt mb-10 mb-xs-10">
                                                    Hello Praveen!
                                                </div>
                                                <div className='mb-20'>We need a little more information to understand you better!</div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <TextField
                                                            fullWidth
                                                            className='form-control'
                                                            id="standard-basic"
                                                            label="First Name*"
                                                            variant="standard"
                                                            name='firstName'
                                                            value={firstName}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <TextField
                                                            fullWidth
                                                            className='form-control'
                                                            id="standard-basic"
                                                            label="Last Name*"
                                                            variant="standard"
                                                            name='lastName'
                                                            value={lastName}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <TextField
                                                            fullWidth
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
                                                    <div className='col-md-2 mt-20'>
                                                        <FormControl className='selectBox' variant="standard" sx={{ m: 1, minWidth: 100 }}>
                                                            <Select
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='phonecode'
                                                                value={phonecode}
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value='+91'>+91</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-4'>
                                                        <TextField
                                                            fullWidth
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
                                                    <div className='col-md-6 mb-30'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">Study Destination</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='studyDestination'
                                                                value={studyDestination}
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={10}>UK</MenuItem>
                                                                <MenuItem value={20}>USA</MenuItem>
                                                                <MenuItem value={30}>Canada</MenuItem>
                                                                <MenuItem value={30}>Australia</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='section-title-alt text-gray mb-10'>Preferred time to connect with you</div>
                                                    <div className='col-md-5'>
                                                        <DatePicker
                                                            className='datepicker'
                                                            name="From Date"
                                                            selected={fromDate}
                                                            onChange={(newValue) => setFromDate(newValue)}
                                                            dateFormat={'dd/MM/yyyy'}
                                                            placeholderText='DD/MM/YYYY'
                                                            label={<contact_step_1 />}
                                                        />
                                                    </div>
                                                    <div className='col-md-5 timepicker'>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <TimePicker
                                                                value={time}
                                                                onChange={(newValue) => setTime(newValue)}
                                                                renderInput={(params) => <TextField {...params} />}
                                                            />
                                                        </LocalizationProvider>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='terms-label mt-30 mb-10'>
                                                            <FormControlLabel key='policy' control={<Checkbox key='policy' value={checked} onChange={policyHandleChange} defaultChecked />}
                                                                label={
                                                                    articles[0].content.map(paragraph =>
                                                                        (<p dangerouslySetInnerHTML={{ __html: paragraph }} />)
                                                                    )
                                                                } />
                                                        </div>
                                                    </div>

                                                    <div className='col-md-12'>
                                                        <a href='./step2' className='btn btn-mod btn-color btn-round btn-large inline-flex'><span>Next </span>
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