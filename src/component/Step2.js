import React, { useEffect } from 'react';
import { TextField, FormControl } from '@mui/material';
import contact_step_2 from '../images/contact-step-2.jpg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useHistory, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postcontactdata } from '../Actions/Pics';
import Alert from '@mui/material/Alert';
import './style.css';
import '../css/verticals.min.css';

const type_of_stydy_options = [
    'Undergraduate',
    'Postgraduate',
    'PHD',
    'Foundation',
    'A-Level',
    'Boarding School',
    'Diploma',
    'English Study (ELT/EFL)',
    'IB',
    'IELTS at SI-UK',
    'IGCSE',
    'Other',
    'Summer Course',
];

const year_of_stydy_options = [
    ' Apr/May/June 2024',
    'Sep/Oct/Nov 2024',
    'Jan/Feb/Mar 2025',
    'Apr/May/June 2025',
    'Sep/Oct/Nov 2025',
    'Jan/Feb/Mar 2026',
    'Apr/May/June 2026',
    'Sep/Oct/Nov 2026',
    'Jan/Feb/Mar 2027',
    'Apr/May/June 2027',
    'Sep/Oct/Nov 2027',
];

const how_did_hear_options = [
    'Facebook',
    'Instagram',
    'Word of mouth',
    'PICS Consultant',
    'PICS Students',
    'Walk-in',
    'College',
    'Other please mention',
];

const appointment_location_options = [
    'New Delhi -CP',
    'New Delhi - Nehru Place',
    'Ahmedabad',
    'Bangalore',
    'Chandigarh',
    'Ludhiana',
    'Chennai',
    'Coimbatore',
    'Gurugram',
    'Hyderabad',
    'Indore',
    'Jaipur',
    'Kochi',
    'Calicut (Kozhikode)',
    'Mysore',
    'Kolkata',
    'Lucknow',
    'Mumbai',
    'Mumbai - Andheri',
    'Calicut (Kozhikode)',
    'Mysore',
    'Kolkata',
    'Lucknow',
    'Mumbai',
    'Mumbai - Andheri',
    'Nagpur',
    'Pune',
    'Thane',
    'Vijayawada',
    'Vadodara',
];

const subject_options = [
    'Accounting',
    'Accounting & Finance',
    'Agriculture & Forestry',
    'Animal Science',
    'Anthropology',
    'Archaeology',
    'Architecture',
    'Art, Performing Arts & Design',
    'Arts',
    'Biological Sciences',
    'Biology',
    'BSc Occupational Therapy',
    'Building',
    'Business & Management',
    'Business Studies',
    'Chemical Engineering',
    'Chemistry',
    'Chemistry / Biochemistry',
    'Cinematic and Photography',
    'Civil engineering',
    'Communication & Media Studies',
    'Communication and Information Science',
    'Computer science',
    'Culinary Arts',
    'Dentistry',
    'Design Studies',
    'Development studies',
    'Drama',
    'Earth & Marine Sciences',
    'Economics',
    'Economics & Econometrics',
    'Education',
    'Education Studies',
    'Electrical & Electronic Engineering',
    'Engineering',
    'English Studies',
    'Environmental',
    'Fashion',
    'Finance',
    'General Engineering',
    'Geography',
    'Geography: Environmental Science',
    'Geology',
    'Geology, Environmental, Earth & Marine Sciences',
    'Health Studies',
    'History',
    'History, Philosophy & Theology',
    'HR management',
    'Journalism',
    'Landscape Design',
    'Languages, Literature & Linguistics',
    'Law',
    'Linguistics',
    'Literary Studies',
    'Management Studies',
    'Marketing',
    'Materials Science',
    'Math',
    'Mathematics & Statistics',
    'MBA',
    'Mechanical & Aerospace Engineering',
    'Media Studies',
    'Medicine',
    'Medicine & Dentistry',
    'Modern Languages and European Studies',
    'MSc Occupational Therapy (pre-reg)',
    'Music',
    'Not decided',
    'Not Set',
    'Nursing',
    'Nutrition',
    'Other Health',
    'Pharmacology, Toxicology & Pharmacy',
    'Photography',
    'Physics',
    'Physics & Astronomy',
    'Physiotherapy',
    'Planning (Urban, Rural & Regional)',
    'Politics',
    'Politics & International Studies (incl Development Studies)',
    'Psychology',
    'Social Policy',
    'Social Work',
    'Sociology',
    'Software Engineering',
    'Sport Science',
    'Tourism, Transport & Travel',
    'Translation',
    'Veterinary'
]

const Step2 = () => {

    let [loading, setLoading] = React.useState(false);
    let [typeofstudy, setTypeofstudy] = React.useState('');
    let [yearofstudy, setYearofstudy] = React.useState('');
    let [subject, setSubject] = React.useState('');
    let [howdidhear, setHowdidhear] = React.useState('');
    let [appointmentlocation, setAppointmentlocation] = React.useState('');
    let [notes, setNotes] = React.useState('');
    let [apiErrorFlag, setApiErrorFlag] = React.useState(false);
    let [apiErrorMessage, setApiErrorMessage] = React.useState('');
    const contactdata = useSelector((state) => state?.Pics?.contactdata);
    const [searchButtonLoading, setSearchButtonLoading] = React.useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const backButtonClick = () => {
        navigate('/contact', {
            replace: true, state: {
                firstName: location?.state?.firstName,
                lastName: location?.state?.lastName,
                email: location?.state?.email,
                phoneNumber: location?.state?.phoneNumber,
                studyDestination: location?.state?.studyDestination,
                fromDate: location?.state?.fromDate,
                time: location?.state?.time
            }
        });
        return true;
    }

    const handleChange = (event) => {
        if (event.target.name === 'typeofstudy') setTypeofstudy(event.target.value);
        else if (event.target.name === 'yearofstudy') setYearofstudy(event.target.value);
        else if (event.target.name === 'subject') setSubject(event.target.value);
        else if (event.target.name === 'howdidhear') setHowdidhear(event.target.value);
        else if (event.target.name === 'appointmentlocation') setAppointmentlocation(event.target.value);
        else if (event.target.name === 'notes') setNotes(event.target.value);
    }

    let [typeofstudyError, setTypeofstudyError] = React.useState(false);
    let [yearofstudyError, setYearofstudyError] = React.useState(false);
    let [subjectError, setSubjectError] = React.useState(false);
    let [howdidhearError, setHowdidhearError] = React.useState(false);
    let [appointmentlocationError, setAppointmentlocationError] = React.useState(false);

    const submit = () => {
        if (!typeofstudy) {
            setTypeofstudyError(true);
            return null;
        }
        else {
            setTypeofstudyError(false);
        }
        if (!yearofstudy) {
            setYearofstudyError(true);
            return null;
        }
        else {
            setYearofstudyError(false);
        }
        if (!subject) {
            setSubjectError(true);
            return null;
        }
        else {
            setSubjectError(false);
        }
        if (!howdidhear) {
            setHowdidhearError(true);
            return null;
        }
        else {
            setHowdidhearError(false);
        }
        if (!appointmentlocation) {
            setAppointmentlocationError(true);
            return null;
        }
        else {
            setAppointmentlocationError(false);
        }

        setSearchButtonLoading(true);
        const payload = {
            first_name: location?.state?.firstName,
            last_name: location?.state?.lastName,
            email: location?.state?.email,
            phone_number: 8825732125,
            destination: location?.state?.studyDestination,
            preferred_date: location?.state?.fromDate,
            preferred_time: location?.state?.time,
            type_of_study: typeofstudy,
            year_of_study: yearofstudy,
            subject: subject,
            how_did_you_hear: howdidhear,
            notes: notes,
            appointment_location: appointmentlocation
        }
        dispatch(postcontactdata(payload));
    }

    useEffect(()=>{
        setTimeout(() => {
            if (contactdata?.status == 'success') {
                navigate('/step3', {
                    replace: true, state: {
                        unique_id: contactdata.unique_id,
                        firstName: location?.state?.firstName
                    }
                });
                setApiErrorFlag(false);
                setApiErrorMessage('');
                setSearchButtonLoading(false);
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
    },[contactdata])

    useEffect(() => {
        setTimeout(() => {
            setApiErrorFlag(false);
            setApiErrorMessage('');
        }, 3000);
    }, [apiErrorFlag]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);

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
                                                <a onClick={() => backButtonClick()} className='go-back'>
                                                    <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="30.229" height="14.961" viewBox="0 0 30.229 14.961">
                                                        <g id="Group_356" data-name="Group 356" transform="translate(1 1.414)">
                                                            <path id="Path_11813" data-name="Path 11813" d="M6159.906,809.385l-6.065,6.066,6.065,6.066" transform="translate(-6153.839 -809.385)" fill="none" stroke="#8f8f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                            <path id="Path_11814" data-name="Path 11814" d="M6106.431,839.186h28.229" transform="translate(-6106.431 -833.12)" fill="none" stroke="#8f8f8f" stroke-linecap="round" stroke-width="2" />
                                                        </g>
                                                    </svg>
                                                    <span>Back</span>

                                                </a>
                                                <div className='hs-line-7'>SET UP A FREE CONSULTATION</div>
                                                <div className="hs-line-3 color font-alt mb-10 mb-xs-10">
                                                    Hello {location?.state?.firstName}!
                                                </div>
                                                <div className='mb-20'>We need a little more information to understand you better!</div>
                                                <div className='row'>
                                                    <div className='col-md-6 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">Type of Study *</InputLabel>
                                                            <Select
                                                                error={typeofstudyError}
                                                                helperText={typeofstudyError ? 'This is required' : ''}
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='typeofstudy'
                                                                value={typeofstudy}
                                                                onChange={handleChange}
                                                            >
                                                                {
                                                                    type_of_stydy_options?.map((x) => (
                                                                        <MenuItem value={x}>{x}</MenuItem>
                                                                    ))
                                                                }
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-6 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">Year of Study *</InputLabel>
                                                            <Select
                                                                error={yearofstudyError}
                                                                helperText={yearofstudyError ? 'This is required' : ''}
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='yearofstudy'
                                                                value={yearofstudy}
                                                                onChange={handleChange}
                                                            >
                                                                {
                                                                    year_of_stydy_options?.map((x) => (
                                                                        <MenuItem value={x}>{x}</MenuItem>
                                                                    ))
                                                                }
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-6 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">Subject interested *</InputLabel>
                                                            <Select
                                                                error={subjectError}
                                                                helperText={subjectError ? 'This is required' : ''}
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='subject'
                                                                value={subject}
                                                                onChange={handleChange}
                                                            >
                                                                {
                                                                    subject_options?.map((x) => (
                                                                        <MenuItem value={x}>{x}</MenuItem>
                                                                    ))
                                                                }
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-6 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">How did you hear about PICS? *</InputLabel>
                                                            <Select
                                                                error={howdidhearError}
                                                                helperText={howdidhearError ? 'This is required' : ''}
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='howdidhear'
                                                                value={howdidhear}
                                                                onChange={handleChange}
                                                            >
                                                                {
                                                                    how_did_hear_options?.map((x) => (
                                                                        <MenuItem value={x}>{x}</MenuItem>
                                                                    ))
                                                                }
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='col-md-12 selectBox'>
                                                        <FormControl className='form-control mt-10'
                                                            id="standard-basic" variant="standard">
                                                            <InputLabel id="demo-simple-select-standard-label">Appointment Location *</InputLabel>
                                                            <Select
                                                                error={appointmentlocationError}
                                                                helperText={appointmentlocationError ? 'This is required' : ''}
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                name='appointmentlocation'
                                                                value={appointmentlocation}
                                                                onChange={handleChange}
                                                            >
                                                                {
                                                                    appointment_location_options?.map((x) => (
                                                                        <MenuItem value={x}>{x}</MenuItem>
                                                                    ))
                                                                }
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
                                                            name='notes'
                                                            value={notes}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className='col-md-12 mt-30'>
                                                        <a onClick={submit} className='btn btn-mod btn-color btn-round btn-large'>{searchButtonLoading ? 'Processing...' : 'Submit'}</a>
                                                    </div>
                                                    {apiErrorFlag && <Alert severity="error">{apiErrorMessage}</Alert>}
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

export default Step2;