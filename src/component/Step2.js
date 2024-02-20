import React, { useEffect } from 'react';
import { TextField, FormControl } from '@mui/material';
import contact_step_2 from '../images/contact-step-2.jpg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs, { Dayjs } from 'dayjs';
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
                                                background: `url(${contact_step_2})`,
                                            }}></div>
                                        </div>
                                    </div>

                                    <div className="split-section-content">
                                        <div className="split-section-wrapper">
                                            <div className="text align-left">
                                                <a href='/contact' className='go-back'>
                                                    <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="30.229" height="14.961" viewBox="0 0 30.229 14.961">
                                                        <g id="Group_356" data-name="Group 356" transform="translate(1 1.414)">
                                                            <path id="Path_11813" data-name="Path 11813" d="M6159.906,809.385l-6.065,6.066,6.065,6.066" transform="translate(-6153.839 -809.385)" fill="none" stroke="#8f8f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                            <path id="Path_11814" data-name="Path 11814" d="M6106.431,839.186h28.229" transform="translate(-6106.431 -833.12)" fill="none" stroke="#8f8f8f" stroke-linecap="round" stroke-width="2"/>
                                                        </g>
                                                    </svg>
                                                    <span>Back</span>

                                                </a>
                                                <div className='hs-line-7'>SET UP A FREE CONSULTATION</div>
                                                <div className="hs-line-3 color font-alt mb-10 mb-xs-10">
                                                    Hello Praveen!
                                                </div>
                                                <div className='mb-20'>We need a little more information to understand you better!</div>
                                                <div className='row'>
                                                    <div className='col-md-6 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">Type of Study *</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='studyDestination'
                                                                value={studyDestination}
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={10}>Option 1</MenuItem>
                                                                <MenuItem value={20}>Option 2</MenuItem>
                                                                <MenuItem value={30}>Option 3</MenuItem>
                                                                <MenuItem value={30}>Option 4</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-6 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">Year of Study *</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='studyDestination'
                                                                value={studyDestination}
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={10}>2024</MenuItem>
                                                                <MenuItem value={20}>2025</MenuItem>
                                                                <MenuItem value={30}>2026</MenuItem>
                                                                <MenuItem value={30}>2027</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-6 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">Subject interested *</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='studyDestination'
                                                                value={studyDestination}
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={10}>Option 1</MenuItem>
                                                                <MenuItem value={20}>Option 2</MenuItem>
                                                                <MenuItem value={30}>Option 3</MenuItem>
                                                                <MenuItem value={30}>Option 4</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-6 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">How did you hear about PICS? *</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='studyDestination'
                                                                value={studyDestination}
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={10}>Friends</MenuItem>
                                                                <MenuItem value={20}>Google</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-12 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">Appointment Location *</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='studyDestination'
                                                                value={studyDestination}
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={10}>Option 1</MenuItem>
                                                                <MenuItem value={20}>Option 1</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <TextField
                                                            fullWidth
                                                            className='form-control'
                                                            id="standard-basic"
                                                            label="Additional Notes"
                                                            variant="standard"
                                                            name='firstName'
                                                            value={firstName}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className='col-md-12 mt-30'>
                                                        <a href='./step3' className='btn btn-mod btn-color btn-round btn-large'>Submit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-footer'>
                                            <ul>
                                                <li><span className='dot active'></span></li>
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