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

const Step4 = () => {

    let [loading, setLoading] = React.useState(false);

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
                                           <div className="ssh-cell page-section bg-scroll" style={{
                                               background: `url(${contact_step_1})`,
                                           }}></div>
                                       </div>
                                   </div>

                                   <div className="split-section-content page-section">
                                       <div className="split-section-wrapper">
                                           <div className="text align-left">
                                               <div className='hs-line-7'>SET UP A FREE CONSULTATION</div>
                                               <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                   We’d love to speak to you!
                                               </div>
                                               <div className='row'>
                                                   <div className='col-md-12'>
                                                       <a href='#' className='btn btn-mod btn-color btn-round btn-large inline-flex'><span>Next </span>
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
                                               <li><span className='dot'></span></li>
                                               <li><span className='dot'></span></li>
                                               <li><span className='dot'></span></li>
                                               <li><span className='dot active'></span></li>
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

export default Step4;