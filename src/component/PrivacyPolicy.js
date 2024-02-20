import React, { useEffect } from 'react';
import { TextField, Checkbox, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import contact_step_1 from '../images/contact-step-1.jpg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css'; import './style.css';
import '../css/verticals.min.css';

const PrivacyPolicy = () => {

    const [loading, setLoading] = React.useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);

    return (
        <>
            <div>
                {loading === false ?
                    <div classNameName='page-loader'>
                        <span classNameName="loader"></span>
                    </div> :
                    <div>
                        <title>Privacy Policy</title>
                    </div>
                }
            </div>
        </>
    );
};

export default PrivacyPolicy;