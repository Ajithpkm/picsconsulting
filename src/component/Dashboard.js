import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WOW from 'wowjs';
import { Grow, Card, CardContent, Box, Grid, Radio, RadioGroup, Chip, FormControlLabel, FormControl, ListItemText, ListItemIcon, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import university_01 from '../images/united-kingdom.png';
import university_02 from '../images/united-states.png';
import university_03 from '../images/canada.png';
import university_04 from '../images/australia.png';
import pics_consultants from '../images/pics_consultants.jpg';
import footer_logo from '../images/footer-logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import slider_01 from '../images/home-bg.jpg';
import application_service_bg from '../images/application-service-bg.jpg';
import unversity_bg from '../images/university-bg.jpg';
import icon_01 from '../images/university-offer.svg';
import icon_02 from '../images/dedicated-pics-consultant.svg';
import icon_03 from '../images/professional-service.svg';
import university_list from '../images/university-list.jpg';
import uk_01 from '../images/uk1.jpg';
import uk_02 from '../images/uk2.jpg';
import uk_03 from '../images/uk3.jpg';
import uk_04 from '../images/uk4.jpg';
import uk_05 from '../images/uk5.jpg';
import uk_06 from '../images/uk6.jpg';
import uk_07 from '../images/uk7.jpg';
import uk_08 from '../images/uk8.jpg';
import uk_09 from '../images/uk9.jpg';
import uk_10 from '../images/uk10.jpg';
import usa_01 from '../images/usa1.jpg';
import usa_02 from '../images/usa2.jpg';
import usa_03 from '../images/usa3.jpg';
import usa_04 from '../images/usa4.jpg';
import usa_05 from '../images/usa5.jpg';
import usa_06 from '../images/usa6.jpg';
import usa_07 from '../images/usa7.jpg';
import usa_08 from '../images/usa8.jpg';
import usa_09 from '../images/usa9.jpg';
import usa_10 from '../images/usa10.jpg';
import free_consultation from '../images/free_consultation.jpg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SimpleBar from 'react-custom-scrollbars';
import './style.css';
import '../css/verticals.min.css';
import { Height } from '@material-ui/icons';
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

const Dashboard = () => {
    const [value, setValue] = React.useState(0);
    const [ukModelopen, setukModelopen] = React.useState(false);
    const [usaModelopen, setusaModelopen] = React.useState(false);
    const [contactopen, setContactOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleUkOpen = () => setukModelopen(true);
    const handleUkClose = () => setukModelopen(false);
    const handleUsaOpen = () => setusaModelopen(true);
    const handleUsaClose = () => setusaModelopen(false);
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

    new WOW.WOW({
        live: false
    }).init();

    return (
        <>
            <div>
                {loading === false ?
                    <div className='page-loader'>
                        <span class="loader"></span>
                    </div> :
                    <div>
                        <Modal
                            open={ukModelopen}
                            onClose={handleUkClose}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='university-list-bx'>
                                <Typography className='modal-bx-header' id="modal-modal-title" variant="h6" component="h2">
                                    <div className='row d-flex align-items-center'>
                                        <div className='col-md-2'>
                                            <img src={university_01} alt="" />
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='country-name font-alt'>UK<br />University list</div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='text-center'>
                                                <a href='javascript:;' className='btn btn-mod btn-w btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </div>
                                    </div>
                                </Typography>
                                <SimpleBar id="RSC-Example" style={{ height: 450 }}>
                                    <Typography className='modal-bx-body' id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div className='font-alt hs-line-5'>A</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Aberdeen University</li>
                                                        <li>Abertay Dundee University</li>
                                                        <li>Aberystwyth University of Wales</li>
                                                        <li>Anglia Ruskin University</li>
                                                        <li>Arts University Bournemouth</li>
                                                        <li>Ashridge</li>
                                                        <li>Aston University</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>B</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>BANGOR BUSINESS SCHOOL Bangor University</li>
                                                        <li>Bangor University</li>
                                                        <li>Bath Spa University</li>
                                                        <li>Bedfordshire University</li>
                                                        <li>Birkbeck University of London</li>
                                                        <li>Birmingham City University</li>
                                                        <li>Bolton University</li>
                                                        <li>Bournemouth University</li>
                                                        <li>Bradford University</li>
                                                        <li>Brighton University</li>
                                                        <li>Bristol University</li>
                                                        <li>Brunel University</li>
                                                        <li>Buckingham University</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>C</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Cambridge Education Group (All Centres)</li>
                                                        <li>Canterbury Christ Church University</li>
                                                        <li>Cardiff Metropolitan University</li>
                                                        <li>Cardiff University</li>
                                                        <li>Central Lancashire University</li>
                                                        <li>Chester University of</li>
                                                        <li>Chichester University</li>
                                                        <li>Coventry University</li>
                                                        <li>Coventry University - London Campus</li>
                                                        <li>Cranfield University</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>D</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>De Montfort University</li>
                                                        <li>Derby University</li>
                                                        <li>Dundee University</li>
                                                        <li>Durham University</li>
                                                        <li>Durham University English Language Centre</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>E</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>East Anglia University</li>
                                                        <li>East London University</li>
                                                        <li>Edge Hill University</li>
                                                        <li>Edinburgh Business School</li>
                                                        <li>Edinburgh Napier University</li>
                                                        <li>Edinburgh University</li>
                                                        <li>Essex University</li>
                                                        <li>Exeter University</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>F</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Falmouth University</li>
                                                        <li>Falmouth University of Arts</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>G</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Glasgow  University</li>
                                                        <li>Glasgow Caledonian London Campus</li>
                                                        <li>Glasgow Caledonian University</li>
                                                        <li>Glasgow School of Art</li>
                                                        <li>Gloucestershire University</li>
                                                        <li>Glyndwr University</li>
                                                        <li>Goldsmiths University of London</li>
                                                        <li>Greenwich University</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>H</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Heriot-Watt University</li>
                                                        <li>Hertfordshire University</li>
                                                        <li>Huddersfield University</li>
                                                        <li>Hull University</li>
                                                        <li>Hult International Business School AG</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>I</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>INTO University Partnerships (All Centres)</li>
                                                        <li>Istituto Marangoni</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>K</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Kaplan (All Centres)</li>
                                                        <li>Kaplan Open Learning</li>
                                                        <li>Keele University</li>
                                                        <li>Kent University</li>
                                                        <li>King's College London (KCL)</li>
                                                        <li>Kingston University</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>L</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Lancaster University</li>
                                                        <li>LCA Business School London</li>
                                                        <li>Leeds Beckett University</li>
                                                        <li>Leeds Trinity University
                                                        </li>
                                                        <li>Leeds University
                                                        </li>
                                                        <li>Leicester University
                                                        </li>
                                                        <li>Lincoln University
                                                        </li>
                                                        <li>Liverpool Hope University
                                                        </li>
                                                        <li>Liverpool John Moores University
                                                        </li>
                                                        <li>Liverpool University
                                                        </li>
                                                        <li>Liverpool University (London Campus)
                                                        </li>
                                                        <li>London College of Communication (Univ of the Arts)
                                                        </li>
                                                        <li>London College of Contemporary Arts
                                                        </li>
                                                        <li>London Metropolitan University
                                                        </li>
                                                        <li>London South Bank University
                                                        </li>
                                                        <li>Loughborough University
                                                        </li>
                                                        <li>Loughborough University - London Campus
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>M</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Manchester Metropolitan University
                                                        </li>
                                                        <li>Middlesex University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>N</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Navitas Parent
                                                        </li>
                                                        <li>Newcastle University
                                                        </li>
                                                        <li>Northampton University
                                                        </li>
                                                        <li>Northumbria University
                                                        </li>
                                                        <li>Norwich University Of The Arts
                                                        </li>
                                                        <li>Nottingham Trent University
                                                        </li>
                                                        <li>Nottingham University
                                                        </li>
                                                        <li>Nottingham University Ningbo China
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>O</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Oxford Brookes University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>P</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Plymouth University
                                                        </li>
                                                        <li>Portsmouth University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>Q</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>QA Higher Education (Roehampton/Northumbria Lon campus/Ulster University)
                                                        </li>
                                                        <li>Queen Margaret University
                                                        </li>
                                                        <li>Queen Mary University of London
                                                        </li>
                                                        <li>Queen's University Belfast
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>R</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Ravensbourne</li>
                                                        <li>Reading University
                                                        </li>
                                                        <li>Regents University London
                                                        </li>
                                                        <li>Richmond The American International University in London
                                                        </li>
                                                        <li>Robert Gordon University
                                                        </li>
                                                        <li>Roehampton University
                                                        </li>
                                                        <li>Royal Agricultural University
                                                        </li>
                                                        <li>Royal Holloway University of London
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> <div className='font-alt hs-line-5'>S</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Salford University
                                                        </li>
                                                        <li>School of Oriental and African Studies London (SOAS)
                                                        </li>
                                                        <li>Sheffield Hallam University
                                                        </li>
                                                        <li>Sheffield University
                                                        </li>
                                                        <li>Southampton Solent University
                                                        </li>
                                                        <li>Southampton University
                                                        </li>
                                                        <li>St Mary's University Twickenham
                                                        </li>
                                                        <li>Staffordshire University
                                                        </li>
                                                        <li>Stirling University
                                                        </li>
                                                        <li>Strathclyde University
                                                        </li>
                                                        <li>Study Group/International Study Centres (All Centres)
                                                        </li>
                                                        <li>Sunderland University
                                                        </li>
                                                        <li>Sunderland University - London Campus
                                                        </li>
                                                        <li>Surrey University
                                                        </li>
                                                        <li>Sussex University
                                                        </li>
                                                        <li>Swansea University of Wales
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> <div className='font-alt hs-line-5'>T</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Teesside University
                                                        </li>
                                                        <li>Trinity Laban Conservatoire of Music & Dance
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> <div className='font-alt hs-line-5'>U</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Ulster University (London and Birmingham Campuses QA)
                                                        </li>
                                                        <li>Ulster University Coleraine Campus
                                                        </li>
                                                        <li>University College Birmingham
                                                        </li>
                                                        <li>University for the Creative Arts
                                                        </li>
                                                        <li>University of Bath
                                                        </li>
                                                        <li>University of Birmingham
                                                        </li>
                                                        <li>University of Law London Bloomsbury
                                                        </li>
                                                        <li>University of Manchester
                                                        </li>
                                                        <li>University of South Wales
                                                        </li>
                                                        <li>University of Suffolk
                                                        </li>
                                                        <li>University of the Highlands and Islands
                                                        </li>
                                                        <li>University of Wales Trinity Saint David
                                                        </li>
                                                        <li>University of Warwick & WMG
                                                        </li>
                                                        <li>University of West London
                                                        </li>
                                                        <li>University of West of Scotland(London Campus)
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>W</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>West of England University (Bristol)
                                                        </li>
                                                        <li>Westminster University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>Y</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>York University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </SimpleBar>
                            </Box>
                        </Modal>

                        <Modal
                            open={usaModelopen}
                            onClose={handleUsaClose}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='university-list-bx'>
                                <Typography className='modal-bx-header' id="modal-modal-title" variant="h6" component="h2">
                                    <div className='row d-flex align-items-center'>
                                        <div className='col-md-2'>
                                            <img src={university_01} alt="" />
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='country-name font-alt'>USA<br />University list</div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='text-center'>
                                                <a href='javascript:;' className='btn btn-mod btn-w btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </div>
                                    </div>
                                </Typography>
                                <SimpleBar id="RSC-Example" style={{ height: 450 }}>
                                    <Typography className='modal-bx-body' id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div className='font-alt hs-line-5'>A</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Adelphi University
                                                        </li>
                                                        <li>American Collegiate DC
                                                        </li>
                                                        <li>American Collegiate LA
                                                        </li>
                                                        <li>American Collegiate Live
                                                        </li>
                                                        <li>American University
                                                        </li>
                                                        <li>Auburn University
                                                        </li>
                                                        <li>Auburn University at Montgomery
                                                        </li>
                                                        <li>Austin College
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>B</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Barton College
                                                        </li>
                                                        <li>Bellarmine University
                                                        </li>
                                                        <li>Belmont University
                                                        </li>
                                                        <li>Blackburn College
                                                        </li>
                                                        <li>Bridgewater College
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>C</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Carroll University
                                                        </li>
                                                        <li>Central Methodist University
                                                        </li>
                                                        <li>Cleveland State University
                                                        </li>
                                                        <li>Cornish College of the Arts
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>D</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Dakota Wesleyan University
                                                        </li>
                                                        <li>Dean College
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>E</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Edgewood College
                                                        </li>
                                                        <li>Eureka College
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>F</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Fairfield University
                                                        </li>
                                                        <li>Florida International University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>G</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Gonzaga University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>H</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Hanover College
                                                        </li>
                                                        <li>Hiram College
                                                        </li>
                                                        <li>Holy Cross College at Notre Dame
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>J</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Johns Hopkins University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>L</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Lakeland University
                                                        </li>
                                                        <li>Lewis University
                                                        </li>
                                                        <li>Louisiana State University
                                                        </li>
                                                        <li>Lycoming College

                                                        </li>
                                                        <li>Lynn University

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>M</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>McMurry University

                                                        </li>
                                                        <li>Missouri University of Science & Technology

                                                        </li>
                                                        <li>Moravian University

                                                        </li>
                                                        <li>Mount St. Mary’s University

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>O</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Ohio Wesleyan University
                                                        </li>
                                                        <li>Oklahoma City University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>P</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Palm Beach Atlantic University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>R</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Randolph College
                                                        </li>
                                                        <li>Robert Morris University

                                                        </li>
                                                        <li>Roosevelt University

                                                        </li>
                                                        <li>Rutgers University–Camden

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> <div className='font-alt hs-line-5'>S</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Salve Regina University

                                                        </li>
                                                        <li>Schreiner University

                                                        </li>
                                                        <li>Shenandoah University

                                                        </li>
                                                        <li>Southwestern University

                                                        </li>
                                                        <li>St. Catherine University

                                                        </li>
                                                        <li>St. Thomas Aquinas College

                                                        </li>
                                                        <li>Stony Brook University

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> <div className='font-alt hs-line-5'>T</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Trinity Christian College

                                                        </li>
                                                        <li>Tulane University

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> <div className='font-alt hs-line-5'>U</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>University at Buffalo

                                                        </li>
                                                        <li>University of Central Florida

                                                        </li>
                                                        <li>University of Charleston

                                                        </li>
                                                        <li>University of Dayton

                                                        </li>
                                                        <li>University of Dubuque

                                                        </li>
                                                        <li>University of Illinois at Chicago

                                                        </li>
                                                        <li>University of Illinois Springfield

                                                        </li>
                                                        <li>University of Kansas

                                                        </li>
                                                        <li>University of Massachusetts Boston

                                                        </li>
                                                        <li>University of Nevada, Reno

                                                        </li>
                                                        <li>University of Portland

                                                        </li>
                                                        <li>University of Saint Mary

                                                        </li>
                                                        <li>University of South Carolina

                                                        </li>
                                                        <li>University of the Pacific

                                                        </li>
                                                        <li>University of Utah

                                                        </li>
                                                        <li>University of Wyoming

                                                        </li>
                                                        <li>Utah Tech University
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>W</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Washington & Jefferson College

                                                        </li>
                                                        <li>Wentworth Institute of Technology

                                                        </li>
                                                        <li>Western New England University

                                                        </li>
                                                        <li>Western Oregon University

                                                        </li>
                                                        <li>Whittier College

                                                        </li>
                                                        <li>Wilson College

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>Y</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>York College of Pennsylvania

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </SimpleBar>
                            </Box>
                        </Modal>

                        <Modal
                            open={contactopen}
                            onClose={handleCloseContact}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='contactmodal-bx'>
                                <Typography className='modal-bx-header' id="modal-modal-title" variant="h6" component="h2">
                                    <div className='country-name font-alt'>Get in touch</div>
                                </Typography>
                                <Typography className='modal-bx-body' id="modal-modal-description" sx={{ mt: 2 }}>
                                    <div className='content'> Send us a email to <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>contact@pics.global</button> and one of our consultants will contact you.</div>
                                </Typography>
                            </Box>
                        </Modal>
                        <title>PICS Consultants</title>
                        <a href="#main" className="btn skip-to-content">Skip to Content</a>
                        <div className="page" id="top">
                            <nav className={isScrollValueMoreThanHeaderHeight ? "main-nav stick-fixed sticky-header" : "main-nav stick-fixed"}>
                                <div className="container relative clearfix">
                                    <div className="nav-logo-wrap local-scroll">
                                        <a href="index" className="logo">
                                            <img src={Logo} alt="PICS Consultants" />
                                        </a>
                                    </div>
                                    <div className="mobile-nav" role="button" tabIndex={0}>
                                        <i className="fa fa-bars" />
                                        <span className="sr-only">Menu</span>
                                    </div>
                                    <div className="inner-nav desktop-nav">
                                        <ul className="clearlist">
                                            {/* <li className="active"><a href="/">study international</a></li>
                                            <li><a href="about">About</a></li>
                                            <li><a href="faq">FAQ</a></li> */}
                                            <li><button onClick={handleOpenContact} className='btn btn-mod btn-w btn-circle btn-medium'>Get in Touch</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <main id="main">
                                <div className="home-section fullwidth-slider" id="home">
                                    <section className="home-section bg-scroll fixed-height-medium" style={{
                                        background: `url(${slider_01})`,
                                    }}>
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <div className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                PICS<br />Your pathway to STUDY in UK, USA,<br />Canada & Australia
                                                            </div>
                                                            <div className="hs-line-2 text-center">
                                                                Includes admissions to top institutions like Oxford, Cambridg <br />and 225+ Universities across the globeasd
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <section className="small-section bg-white pt-30 pb-30">
                                    <div className="container relative">
                                        <div className="row d-flex justify-content-between">
                                            <div className='col-md-5'>
                                                <h2 className="banner-title mb-0 mb-xs-0">
                                                    Degree Programs include
                                                </h2>
                                                <div className="banner-desc">
                                                    UG, PG, Phd & Foundation,  Engineering, Management, Medicine, Law, Research & English Program
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='universities'>
                                                    <ul>
                                                        <li><img src={university_01} alt="" /></li>
                                                        <li><img src={university_02} alt="" /></li>
                                                        <li><img src={university_03} alt="" /></li>
                                                        <li><img src={university_04} alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pb-250'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-7'>
                                                <div className='image-rounded wow fadeInDown' data-wow-delay="0.1s"><img src={pics_consultants} alt="" className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='inner-container'>
                                                    <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                        PICS Consultants
                                                    </div>
                                                    <div className='section-text'>
                                                        PICS Consultants takes a <b>Student- Centred Approach (P-I-C-S approach)</b> and our mission is to provide right guidance by having a transparent discussion with the student. We discuss with you to understand your requirement, Use our knowledge and provide you a list of university that’s well-matched and we help you to make the right decision that meet your requirement. Here is our exclusive PICS approach,
                                                    </div>

                                                    <div className='pics-abbr mt-30'>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt wow fadeInDown' data-wow-delay="0.1s">P</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>Prepare for the meeting</div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt wow fadeInDown' data-wow-delay="0.2s">I</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>Identify your Requirement</div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt wow fadeInDown' data-wow-delay="0.3s">C</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>Choose the University</div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt wow fadeInDown' data-wow-delay="0.4s">S</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>Submit the application</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='mt-40 mb-0'>
                                                        <a href='javascript:;' className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pt-50 bg-scroll bg-pos-bottom pb-160 overflow' style={{
                                    background: `url(${application_service_bg})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='image-rounded pull-top'>
                                                    <img src={unversity_bg} alt='' />
                                                </div>
                                                <div className='mt-30'>
                                                    <div className="hs-line-3 white text-center font-alt mb-20 mb-xs-10">
                                                        PICS FREE University Application Service
                                                    </div>
                                                    <div className='row d-flex justify-content-center mb-40'>
                                                        <div className='col-md-9'>
                                                            <div className='section-text text-center white'>
                                                                Applying to an university can be time-consuming and challenging for an international student. That is why the PICS FREE University Application Service does the hard work for you with offerings like;
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Box className="mt-10">
                                                        <Grid sx={{ mb: 2 }} className="comp-bx" container spacing={2}>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service wow fadeInDown" data-wow-delay="0.1s">
                                                                    <div className='icon'><img src={icon_01} /></div>
                                                                    <h4>100% PICS Guaranteed University offer</h4>
                                                                    <p>PICS will provide you with an offer from an university when eligibility criteria are met.</p>
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service wow fadeInDown" data-wow-delay="0.2s">
                                                                    <div className='icon'><img src={icon_02} /></div>
                                                                    <h4>Your dedicated PICS<br />Consultant</h4>
                                                                    <p>From first contact to admission, your PICS consultant will work with you through all the processes.</p>
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service wow fadeInDown" data-wow-delay="0.3s">
                                                                    <div className='icon'><img src={icon_03} /></div>
                                                                    <h4>Reliable & Professional<br />Service</h4>
                                                                    <p>From writing personal statements to understanding eligibility criteria, we will strive to provide the best result.</p>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <div className='mt-40 mb-20 text-center'>
                                                        <a href='javascript:;' className='btn btn-mod btn-w btn-round btn-medium'>Get in touch</a>
                                                    </div>
                                                    {/* <Card className='cardinfo' sx={{ minWidth: 275 }} >
                                                <CardContent className='listrdo mb-listrdo' >
                                                    <h4 className='title-head'> Which fuel does it use?</h4>
                                                    
                                                </CardContent>
                                            </Card> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-center' style={{
                                    background: `url(${university_list})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className="hs-line-3 color text-center font-alt mb-20 mb-xs-10">
                                                    PICS Global University List
                                                </div>
                                                <div className='row d-flex justify-content-center mb-20'>
                                                    <div className='col-md-8'>
                                                        <div className='section-text text-center mb-30'>
                                                            PICS can help students in gaining entry to some of world’s leading universities. Students success is our success and we want the best outcomes for them
                                                        </div>

                                                        <div className='hs-line-4'>
                                                            Click to view Universities by Country
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='container'>
                                        <Tabs
                                            orientation="horizontal"
                                            value={value}
                                            onChange={handleChange}
                                            className='pics-tabs'
                                            aria-label="horizontal tabs example"
                                        >
                                            <Tab className='tab-single uk' label="UK" {...a11yProps(0)} />
                                            <Tab className='tab-single usa' label="USA" {...a11yProps(1)} />
                                            {/* <Tab className='tab-single canada' label="Canada" {...a11yProps(2)} />
                                            <Tab className='tab-single australia' label="Australia" {...a11yProps(3)} /> */}
                                        </Tabs>
                                        <TabPanel value={value} index={0}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_01} /></div>
                                                        <h4>University of Bristol</h4>
                                                        {/* <p>Oxford, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_02} /></div>
                                                        <h4>University of Cambridge</h4>
                                                        {/* <p>Cambridge, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_03} /></div>
                                                        <h4>University of Edinburgh</h4>
                                                        {/* <p>London, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_04} /></div>
                                                        <h4>University of Glasgow</h4>
                                                        {/* <p>Edinburgh, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_05} /></div>
                                                        <h4>Imperial College London</h4>
                                                        {/* <p>Bristol, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_06} /></div>
                                                        <h4>King's College London</h4>
                                                        {/* <p>London, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_07} /></div>
                                                        <h4>University of Manchester</h4>
                                                        {/* <p>Manchester, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_08} /></div>
                                                        <h4>University of Oxford</h4>
                                                        {/* <p>Glasgow, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_09} /></div>
                                                        <h4>University College London</h4>
                                                        {/* <p>Oxford, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={uk_10} /></div>
                                                        <h4>University of Warwick</h4>
                                                        {/* <p>Cambridge, UK</p> */}
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={handleUkOpen} className='buttonlink2'>View More</Button></div>
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_01} /></div>
                                                        <h4>Adelphi University</h4>
                                                        {/* <p>Oxford, UK</p> */}
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_02} /></div>
                                                        <h4>University at Buffalo</h4>
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_03} /></div>
                                                        <h4>University of Dayton</h4>
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_04} /></div>
                                                        <h4>Gonzaga University</h4>
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_05} /></div>
                                                        <h4>University of Illinois at Chicago</h4>
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_06} /></div>
                                                        <h4>University of Illinois Springfield</h4>
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_07} /></div>
                                                        <h4>Johns Hopkins University</h4>
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_08} /></div>
                                                        <h4>University of Kansas</h4>
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_09} /></div>
                                                        <h4>University of the Pacific</h4>
                                                    </Grid>
                                                    <Grid item className="univ-box">
                                                        <div className='icon'><img src={usa_10} /></div>
                                                        <h4>University of Utah</h4>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={handleUsaOpen} className='buttonlink2'>View More</Button></div>
                                        </TabPanel>
                                    </div>
                                </section>

                                <section className='small-section bg-scroll bg-pos-center' style={{
                                    background: `url(${free_consultation})`,
                                }}>
                                    <div className='container relative'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className="hs-line-3 color text-center font-alt mb-60 mb-xs-10">
                                                    Steps to a FREE PICS Consultation
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='step-container'>
                                                    <div className='count font-alt'>01</div>
                                                    <div className='description'>
                                                        <h4>Prepare for the meeting</h4>
                                                        <p>Just click Get in Touch button and submit the form and your dedicated PICS consultant will contact you soon</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='step-container'>
                                                    <div className='count font-alt'>03</div>
                                                    <div className='description'>
                                                        <h4>Choose the university</h4>
                                                        <p>Your PICS consultants will match your requirements and will provide a list of university for you to choose and make a life time decision</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='step-container'>
                                                    <div className='count font-alt'>02</div>
                                                    <div className='description'>
                                                        <h4>Identify your university requirements</h4>
                                                        <p>Your PICS consultant will identify and understand your requirements like  degree, country, financials & more</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='step-container'>
                                                    <div className='count font-alt'>04</div>
                                                    <div className='description'>
                                                        <h4>Submit the application</h4>
                                                        <p>Submit the application for an university offer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-40 mb-0 text-center'>
                                            <a href='javascript:;' className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                        </div>
                                    </div>
                                </section>
                            </main>

                            <footer className="small-section bg-gray-lighter footer pb-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 text-center">
                                            <a href="#top"><img src={footer_logo} alt="PICS Consultants" /></a>
                                        </div>
                                        <div className="col-md-9">
                                            {/* <div className="footer-menu">
                                                <ul className="clearlist">
                                                    <li><a href="#">Study International</a></li>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact</a></li>
                                                    <li><a href="#">Terms & conditions</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Cookie Policy</a></li>
                                                </ul>
                                            </div> */}

                                            <div className='row pt-40 pb-40'>
                                                <div className='col-md-4'>
                                                    <div className='footer-widget'>
                                                        <div className='title'>PICS - Headquarters</div>
                                                        Head Quarters : 27, Duke Street, Chelmsford, England, CM1 1HT, UK
                                                        {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className='footer-widget'>
                                                        <div className='title'>india</div>
                                                        Head Quarters : 27, Duke Street, Chelmsford, England, CM1 1HT, UK
                                                        {/* <button className='map-link' onClick=''>Get Directions</button> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className='footer-widget'>
                                                        <div className="social-icons mb-10">
                                                            <ul>
                                                                <li><a href="https://www.facebook.com/pappaconsultants" target='_blank'><img src={facebook} /></a></li>
                                                                <li><a href="https://www.instagram.com/picsconsultants/" target='_blank'><img src={instagram} /></a></li>
                                                                <li><a href="#"><img src={whatsapp} /></a></li>
                                                            </ul>
                                                        </div>
                                                        @PICSConsultants
                                                    </div>
                                                </div>
                                            </div>

                                            <button className='buttonlink' onClick={() => window.location = 'mailto:contact@pics.global'}>contact@pics.global</button>

                                            <div className="footer-copy pt-20 pb-0">
                                                Copyright@2024 Pappa International LTD t/a PICS | REG NO: 13199591
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

export default Dashboard;