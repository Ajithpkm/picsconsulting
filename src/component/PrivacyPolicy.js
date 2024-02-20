import React, { useEffect } from 'react';
import contact_step_1 from '../images/contact-step-1.jpg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './style.css';
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