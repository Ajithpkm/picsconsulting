import React, { useEffect } from 'react';
import { TextField, Checkbox, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import contact_step_1 from '../images/contact-step-1.jpg';
import './style.css';
import '../css/verticals.min.css';
import EastIcon from '@mui/icons-material/East';

const Dashboard = () => {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [contactopen, setContactOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenContact = () => setContactOpen(true);
    const handleCloseContact = () => setContactOpen(false);
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
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, [])
    return (
        <>
            <div>
                {loading === false ?
                    <div classNameName='page-loader'>
                        <span classNameName="loader"></span>
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
                                                    <div className='col-md-6'>
                                                        <TextField
                                                            fullWidth
                                                            className='form-control'
                                                            id="standard-basic"
                                                            label="First Name*"
                                                            variant="standard"
                                                        />
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <TextField
                                                            fullWidth
                                                            className='form-control'
                                                            id="standard-basic"
                                                            label="Last Name*"
                                                            variant="standard"
                                                        />
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <TextField
                                                            fullWidth
                                                            className='form-control'
                                                            id="standard-basic"
                                                            label="Email Address*"
                                                            variant="standard"
                                                        />
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                                    </div>

                                                    <div className='col-md-12'>
                                                        <a href='javascript:;' className='btn btn-mod btn-color btn-round btn-large inline-flex'><span>Next </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30.229" height="14.961" viewBox="0 0 30.229 14.961">
                                                                <g id="Group_356" data-name="Group 356" transform="translate(1 1.414)">
                                                                    <path id="Path_11813" data-name="Path 11813" d="M6153.84,809.385l6.065,6.066-6.065,6.066" transform="translate(-6131.677 -809.385)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                                    <path id="Path_11814" data-name="Path 11814" d="M6134.66,839.186h-28.229" transform="translate(-6106.431 -833.12)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
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