import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WOW from 'wowjs';
import { Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import sunil from '../images/sunil.jpg';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import about_bg from '../images/about-bg.jpg';
import andre from '../images/andre.jpg';
import unversity_bg from '../images/university-bg.jpg';
import optimization from '../images/optimization.svg';
import outsourcing from '../images/outsourcing.svg';
import outline from '../images/outline.svg';
import university_list from '../images/university-list.jpg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SimpleBar from 'react-custom-scrollbars';
import './style.css';
import '../css/verticals.min.css';
import { Height } from '@material-ui/icons';
import { gethomedata, getheaderandfooterdata, getaboutusdata, getcountrydata, getuniversitydata } from '../Actions/Pics';
import { useDispatch, useSelector } from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const TermCondition = () => {
    const [showFullDescription, setFullDescription] = React.useState(false);
    const [showFullDescription2, setFullDescription2] = React.useState(false);
    const [vertriPapaReadMore, setvertriPapaReadMore] = React.useState(false);
    const [andreReadMore, setandreReadMore] = React.useState(false);
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
    const dispatch = useDispatch();
    const aboutusdata = useSelector((state) => state?.Pics?.aboutusdata?.data);
    const headandfooterdata = useSelector((state) => state?.Pics?.headandfooterdata?.data);

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

    new WOW.WOW({
        live: false
    }).init();

    const showFullDescriptionHandler = () => {
        setFullDescription(!showFullDescription);
    };

    const showFullDescriptionHandler2 = () => {
        setFullDescription2(!showFullDescription2);
    };

    const description = showFullDescription
        ? aboutusdata?.section1?.description1
        : aboutusdata?.section1?.description1?.slice(0, 598);
        const description2 = showFullDescription2
        ? aboutusdata?.section2?.description2
        : aboutusdata?.section2?.description2?.slice(0, 500);

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
                            <nav className={isScrollValueMoreThanHeaderHeight ? "main-nav stick-fixed sticky-header" : "main-nav stick-fixed"}>
                                <div className="container relative clearfix">
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
                                            <li className="active xs-hide"><a href="/">study international</a></li>
                                            <li><a href="about">About</a></li>
                                            <li><a href="faq">FAQ</a></li>
                                            <li><a href="contact" className='btn btn-mod btn-w btn-circle btn-medium'>Get in Touch</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <main id="main">
                            <div className="home-section fullwidth-slider" id="home">
                                    <section className="home-section bg-scroll fixed-height-small" style={{
                                        background: `url(${about_bg})`,
                                    }}>
                                        <div className="js-height-parent-text container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <div className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                Terms and Conditions
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>


                                <section className='small-section'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-11'>
                                                <div className='terms-text'>
                                                    <p><span>Welcome to PICS Consultants!</span></p>

                                                    <p><span>These terms and conditions outline the rules and regulations for the use of PAPPA INTERNATIONAL LTD's Website, located at https://www.pics.global/.</span></p>

                                                    <p><span>By accessing this website we assume you accept these terms and conditions. Do not continue to use PICS Consultants if you do not agree to take all of the terms and conditions stated on this page.</span></p>

                                                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of gb. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                                                    <p><b><span>Cookies</span></b></p>

                                                    <p>We employ the use of cookies. By accessing PICS Consultants, you agreed to use cookies in agreement with the PAPPA INTERNATIONAL LTD's Privacy Policy.</p>

                                                    <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

                                                    <p><b><span>License</span></b></p>

                                                    <p>Unless otherwise stated, PAPPA INTERNATIONAL LTD and/or its licensors own the intellectual property rights for all material on PICS Consultants. All intellectual property rights are reserved. You may access this from PICS Consultants for your own personal use subjected to restrictions set in these terms and conditions.</p>

                                                    <p><span>You must not:</span></p>
                                                    <ul>
                                                    <li><span>Republish material fromPICS Consultants</span></li>
                                                    <li><span>Sell, rent or sub-license material from PICS Consultants</span></li>
                                                    <li><span>Reproduce, duplicate or copy material from PICS Consultants</span></li>
                                                    <li><span>Redistribute content from PICS Consultants</span></li>
                                                    </ul>

                                                    <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. PAPPA INTERNATIONAL LTD does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of PAPPA INTERNATIONAL LTD,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, PAPPA INTERNATIONAL LTD shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

                                                    <p><span>PAPPA INTERNATIONAL LTD reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</span></p>
                                                    <p><span>You warrant and represent that:</span></p>

                                                    <ul>
                                                        <li><span>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</span></li>
                                                        <li><span>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</span></li>
                                                        <li><span>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</span></li>
                                                        <li><span>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</span></li>
                                                    </ul>


                                                    <p><span>You hereby grant PAPPA INTERNATIONAL LTD a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</span></p>
                                                    <p>
                                                        <b><span>Hyperlinking to our Content</span></b>
                                                    </p>
                                                    <p><span>The following organizations may link to our Website without prior written approval:</span></p>
                                                    <ul>
                                                        <li><span>Government agencies;</span></li>
                                                        <li><span>Search engines;</span></li>
                                                        <li><span>News organizations;</span></li>
                                                        <li><span>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</span></li>
                                                        <li><span>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</span></li>
                                                    </ul>

                                                    <p>
                                                        <span>
                                                            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking
                                                            party and its products and/or services; and (c) fits within the context of the linking party's site.
                                                        </span>
                                                    </p>

                                                    <p><span>We may consider and approve other link requests from the following types of organizations:</span></p>
                                                    <ul>
                                                        <li><span>commonly-known consumer and/or business information sources;</span></li>
                                                        <li><span>dot.com community sites;</span></li>
                                                        <li><span>associations or other groups representing charities;</span></li>
                                                        <li><span>online directory distributors;</span></li>
                                                        <li><span>internet portals;</span></li>
                                                        <li><span>accounting, law and consulting firms; and</span></li>
                                                        <li><span>educational institutions and trade associations.</span></li>
                                                    </ul>
                                                    <p>
                                                        <span>
                                                            We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us;
                                                            (c) the benefit to us from the visibility of the hyperlink compensates the absence of PAPPA INTERNATIONAL LTD; and (d) the link is in the context of general resource information.
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span>
                                                            These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits
                                                            within the context of the linking party's site.
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span>
                                                            If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to PAPPA INTERNATIONAL LTD. Please include your name, your organization name,
                                                            contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                                                        </span>
                                                    </p>
                                                    <p><span>Approved organizations may hyperlink to our Website as follows:</span></p>
                                                    <ul>
                                                        <li><span>By use of our corporate name; or</span></li>
                                                        <li><span>By use of the uniform resource locator being linked to; or</span></li>
                                                        <li><span>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</span></li>
                                                    </ul>
                                                    <p><span>No use of PAPPA INTERNATIONAL LTD's logo or other artwork will be allowed for linking absent a trademark license agreement.</span></p>
                                                    <p>
                                                        <b><span>iFrames</span></b>
                                                    </p>
                                                    <p><span>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</span></p>
                                                    <p>
                                                        <b><span>Content Liability</span></b>
                                                    </p>
                                                    <p>
                                                        <span>
                                                            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as
                                                            libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <b><span>Reservation of Rights</span></b>
                                                    </p>
                                                    <p>
                                                        <span>
                                                            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions
                                                            and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <b><span>Removal of links from our website</span></b>
                                                    </p>
                                                    <p>
                                                        <span>
                                                            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span>
                                                            We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <b><span>Disclaimer</span></b>
                                                    </p>
                                                    <p><span>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</span></p>

                                                    <ul>
                                                        <li><span>limit or exclude our or your liability for death or personal injury;</span></li>
                                                        <li><span>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</span></li>
                                                        <li><span>limit any of our or your liabilities in any way that is not permitted under applicable law; or</span></li>
                                                        <li><span>exclude any of our or your liabilities that may not be excluded under applicable law.</span></li>
                                                    </ul>
                                                    <p>
                                                        <span>
                                                            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities
                                                            arising in contract, in tort and for breach of statutory duty.
                                                        </span>
                                                    </p>
                                                    <p><span>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</span></p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </main>

                            <footer className="small-section bg-gray-lighter footer pb-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 text-center m-center mb-xs-20">
                                            <a href="#top"><img src={headandfooterdata?.logo} alt="PICS Consultants" /></a>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="footer-menu m-center mt-xs-20 mb-40 mb-xs-20">
                                                <ul className="clearlist">
                                                    <li><a href="/">Study International</a></li>
                                                    <li><a href="/about">About</a></li>
                                                    <li><a href="/faq">FAQ</a></li>
                                                    <li><a href="/contact">Contact</a></li>
                                                    <li><a href="/term-condition">Terms & conditions</a></li>
                                                    <li><a href="/policy">Privacy Policy</a></li>
                                                    <li><a href="#">Cookie Policy</a></li>
                                                </ul>
                                            </div>
                                            <div className='footer-widget'>
                                                <div className='title m-center'>{headandfooterdata?.address_title}</div>
                                            </div>
                                            <div className='row pt-0 pb-10 pt-xs-20 pb-xs-10'>
                                                <div className='col-md-4 m-center mb-xs-20'>
                                                    <div className='footer-widget '>
                                                        {headandfooterdata?.address}
                                                        {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-4 m-center mb-xs-20'>
                                                    <div className='footer-widget'>
                                                        {headandfooterdata?.country}

                                                        {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-4 m-center mb-xs-20'>
                                                    <div className='footer-widget'>
                                                        <div className="social-icons mb-10">
                                                            <ul>
                                                                <li><a href={headandfooterdata?.facebook_link} target='_blank'><img src={facebook} /></a></li>
                                                                <li><a href={headandfooterdata?.instagram} target='_blank'><img src={instagram} /></a></li>
                                                                <li><a href={headandfooterdata?.whatsapp} target='_blank'><img src={whatsapp} /></a></li>
                                                            </ul>
                                                        </div>
                                                        @PICSConsultants
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='m-center'>
                                                <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>{headandfooterdata?.email}</button>
                                            </div>
                                            <div className="footer-copy pt-20 pb-0 m-center">
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

export default TermCondition;