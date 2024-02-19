import React, { useEffect, useRef } from 'react';
import WOW from 'wowjs';
import { TextField, Button, Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import faq_bg from '../images/faq-bg.jpg';
import './style.css';
import '../css/verticals.min.css';

const Contact = () => {

    const [open, setOpen] = React.useState(false);
    const [contactopen, setContactOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenContact = () => setContactOpen(true);
    const handleCloseContact = () => setContactOpen(false);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = React.useState(false);
    let [searchInput, setSearchInput] = React.useState('');
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = React.useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);

    new WOW.WOW({
        live: false
    }).init();

    return (
        <>
            <div>
                <p>contact page</p>
            </div>
        </>
    );
};

export default Contact;