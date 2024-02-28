import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
import free_consultation from '../images/free_consultation.jpg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SimpleBar from 'react-custom-scrollbars';
import './style.css';
import '../css/verticals.min.css';
import '../css/style-responsive.css';
import { Height } from '@material-ui/icons';
import { gethomedata, getheaderandfooterdata, getcountrydata, getuniversitydata } from '../Actions/Pics';
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

const Dashboard = () => {
    const [value, setValue] = React.useState(0);
    const [ukModelopen, setukModelopen] = React.useState(false);
    const [usaModelopen, setusaModelopen] = React.useState(false);
    const [canadaModelopen, setcanadaModelopen] = React.useState(false);
    const [contactopen, setContactOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [selectedUniversity, setSelectedUniversity] = React.useState(false);

    const handleUkOpen = (val) => {
        setukModelopen(true);
        setSelectedUniversity(val);
        dispatch(getcountrydata(val));
    }

    const handleUkClose = () => setukModelopen(false);
    const handleUsaOpen = () => setusaModelopen(true);
    const handleUsaClose = () => setusaModelopen(false);
    const handleCanadaOpen = () => setcanadaModelopen(true);
    const handleCanadaClose = () => setcanadaModelopen(false);
    const handleOpenContact = () => setContactOpen(true);
    const handleCloseContact = () => setContactOpen(false);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = React.useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const headandfooterdata = useSelector((state) => state?.Pics?.headandfooterdata?.data);
    const universitydata = useSelector((state) => state?.Pics?.universitydata?.data);
    const homedata = useSelector((state) => state?.Pics?.homedata?.data);
    const countrydata = useSelector((state) => state?.Pics?.countrydata?.data);

    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        dispatch(gethomedata());
        dispatch(getheaderandfooterdata());
        dispatch(getuniversitydata());
        dispatch(getcountrydata());
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, []);

    return (
        <>
            <div>
                {loading === false ?
                    <div className='page-loader'>
                        <span className="loader"></span>
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
                                        <div className='col-2 col-md-2'>
                                            <img src={university_01} alt="" />
                                        </div>
                                        <div className='col-10 col-md-10'>
                                            <div className='country-name font-alt'>
                                                {selectedUniversity == 1 ? 'UK' : selectedUniversity == 2 ? 'USA' :
                                                    selectedUniversity == 3 ? 'CANADA' : 'AUSTRALIA'}<br />University list</div>
                                        </div>
                                    </div>
                                </Typography>
                                <SimpleBar id="RSC-Example" style={{ height: 450 }}>
                                    <Typography className='modal-bx-body' id="modal-modal-description" sx={{ mt: 2 }}>
                                        {
                                            countrydata?.length > 0 && countrydata?.map((x, i) => (
                                                <>
                                                    <div className='font-alt hs-line-5'>{x?.name}</div>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <ul>
                                                                {x?.list?.length > 0 && x?.list?.map((v) => (
                                                                    <li>{v?.name}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
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
                                        <div className='col-2 col-md-2'>
                                            <img src={university_02} alt="" />
                                        </div>
                                        <div className='col-10 col-md-10'>
                                            <div className='country-name font-alt'>USA<br />University list</div>
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
                            open={canadaModelopen}
                            onClose={handleCanadaClose}
                            className="university-list"
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='university-list-bx'>
                                <Typography className='modal-bx-header' id="modal-modal-title" variant="h6" component="h2">
                                    <div className='row d-flex align-items-center'>
                                        <div className='col-2 col-md-2'>
                                            <img src={university_02} alt="" />
                                        </div>
                                        <div className='col-10 col-md-10'>
                                            <div className='country-name font-alt'>CANADA<br />University list</div>
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
                                                        <li>Acadia University

                                                        </li>
                                                        <li>Alexander College

                                                        </li>
                                                        <li>Algoma University

                                                        </li>
                                                        <li>Algonquin College
                                                        </li>
                                                        <li>ALI - Académie Linguistique Internationale
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
                                                        <li>Brescia University College

                                                        </li>
                                                        <li>British Columbia Institute of Technology

                                                        </li>
                                                        <li>Brock University

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
                                                        <li>Cambrian College

                                                        </li>
                                                        <li>Cape Breton University

                                                        </li>
                                                        <li>Capilano University

                                                        </li>
                                                        <li>Conestoga College

                                                        </li>
                                                        <li>Crandall University

                                                        </li>
                                                        <li>Culture & Language Connections

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
                                                        <li>Durham College

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
                                                        <li>Fairleigh Dickinson University

                                                        </li>
                                                        <li>Fanshawe College

                                                        </li>
                                                        <li>Fanshawe@ILAC

                                                        </li>
                                                        <li>Fleming College

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
                                                        <li>Georgian College

                                                        </li>
                                                        <li>Georgian@ILAC

                                                        </li>
                                                        <li>Global Village Canada

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
                                                        <li>Humber College

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>I</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>ILAC International College

                                                        </li>
                                                        <li>ILAC International Language Academy of Canada

                                                        </li>
                                                        <li>ILSC Education Group

                                                        </li>
                                                        <li>International House Vancouver

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>K</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Kaplan Canada

                                                        </li>
                                                        <li>Kwantlen Polytechnic University

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
                                                        <li>Lakehead University

                                                        </li>
                                                        <li>Langara College

                                                        </li>
                                                        <li>Laurentian University

                                                        </li>
                                                        <li>LCI Education Network
                                                        </li>
                                                        <li>Le Cordon Bleu - Canada
                                                        </li>
                                                        <li>Loyalist College

                                                        </li>
                                                        <li>LSI Canada

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
                                                        <li>Medicine Hat
                                                        </li>
                                                        <li>Memorial University of Newfoundland
                                                        </li>
                                                        <li>Mount Royal University
                                                        </li>
                                                        <li>Mount Saint Vincent University
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
                                                        <li>Navitas Canada

                                                        </li>
                                                        <li>Niagara College

                                                        </li>
                                                        <li>Niagara University in Ontario

                                                        </li>
                                                        <li>Norquest College

                                                        </li>
                                                        <li>North Island College

                                                        </li>
                                                        <li>Northern Alberta Institute of Technology

                                                        </li>
                                                        <li>Northern Lights College

                                                        </li>
                                                        <li>NSCAD University

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
                                                        <li>Oxford International Education Group Services Limited Canada

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
                                                        <li>Red Deer Polytechnic
                                                        </li>
                                                        <li>Royal Roads University

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> <div className='font-alt hs-line-5'>S</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Saskatchewan Colleges
                                                        </li>
                                                        <li>Saskatchewan Polytechnic
                                                        </li>
                                                        <li>Southern Alberta Institute of Technology
                                                        </li>
                                                        <li>St. George International College (SGIC)
                                                        </li>
                                                        <li>St. Lawrence College
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> <div className='font-alt hs-line-5'>T</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Thompson Rivers University (TRU)

                                                        </li>
                                                        <li>Toronto Metropolitan University

                                                        </li>
                                                        <li>Trent University

                                                        </li>
                                                        <li>Trinity Western University

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> <div className='font-alt hs-line-5'>U</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>University Canada West
                                                        </li>
                                                        <li>University of Alberta
                                                        </li>
                                                        <li>University of Lethbridge
                                                        </li>
                                                        <li>University of Niagara Falls Canada (GUS)
                                                        </li>
                                                        <li>University of Northern British Columbia
                                                        </li>
                                                        <li>University of Regina
                                                        </li>
                                                        <li>University of the Fraser Valley
                                                        </li>
                                                        <li>University of Windsor
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-alt hs-line-5'>V</div>
                                        <div className='desc mb-20'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Vancouver Film School
                                                        </li>
                                                        <li>Vancouver Island University
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
                                                        <li>Yorkville Education LP
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
                                    <section className="home-section bg-scroll fixed-height-medium"
                                        style={{ background: `url(${homedata?.section1?.image})` }}
                                    >
                                        <div className="js-height-parent container-1400">
                                            <div className="home-content">
                                                <div className="home-text">
                                                    <div className="row d-flex align-items-center justify-content-center">
                                                        <div className="col-md-8">
                                                            <div className="hs-line-1 text-center no-transp font-alt mb-30 mb-xs-10">
                                                                <div dangerouslySetInnerHTML={{ __html: homedata?.section1?.title }}></div>
                                                            </div>
                                                            <div className="hs-line-2 text-center">
                                                                <div dangerouslySetInnerHTML={{ __html: homedata?.section1?.description }}></div>
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
                                            <div className='col-md-5 mb-xs-20'>
                                                <h2 className="banner-title mb-0 mb-xs-0">
                                                    {homedata?.section2?.title}
                                                </h2>
                                                <div className="banner-desc">
                                                    <span dangerouslySetInnerHTML={{ __html: homedata?.section2?.description }}></span>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='universities'>
                                                    <ul>
                                                        <li><img src={homedata?.section2?.image1} alt="" /></li>
                                                        <li><img src={homedata?.section2?.image2} alt="" /></li>
                                                        <li><img src={homedata?.section2?.image3} alt="" /></li>
                                                        <li><img src={homedata?.section2?.image4} alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='small-section pb-250 pt-xs-30 pb-xs-120'>
                                    <div className='container relative'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className='col-md-7 mb-xs-20'>
                                                <div className='image-rounded'><img src={homedata?.section2?.large_image} alt="" className='img-fluid' /></div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='inner-container'>
                                                    <div className="hs-line-3 color font-alt mb-20 mb-xs-10">
                                                        {homedata?.section2?.title1}
                                                    </div>
                                                    <div className='section-text'>
                                                        <span dangerouslySetInnerHTML={{ __html: homedata?.section2?.description1 }}></span>
                                                    </div>
                                                    <div className='pics-abbr mt-30'>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>P</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>{homedata?.section2?.list1}</div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>I</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>{homedata?.section2?.list2}</div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>C</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>{homedata?.section2?.list3}</div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center mb-1'>
                                                            <div className='capital font-alt'>S</div>
                                                            <div className='desc'>
                                                                <div className='desc-btn'>{homedata?.section2?.list4}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='mt-40 mb-0'>
                                                        <a href='javascript:;' onClick={handleOpenContact} className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
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
                                                    <img src={homedata?.section3?.image} alt='' />
                                                </div>
                                                <div className='mt-30'>
                                                    <div className="hs-line-3 white text-center font-alt mb-20 mb-xs-10">
                                                        {homedata?.section3?.title}
                                                    </div>
                                                    <div className='row d-flex justify-content-center mb-40'>
                                                        <div className='col-md-9'>
                                                            <div className='section-text text-center white'>
                                                                <span dangerouslySetInnerHTML={{ __html: homedata?.section3?.description }}></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Box className="mt-10">
                                                        <Grid sx={{ mb: 2 }} className="comp-bx" container spacing={2}>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service">
                                                                    <div className='icon'><img src={homedata?.section3?.box1_image} /></div>
                                                                    <h4 dangerouslySetInnerHTML={{ __html: homedata?.section3?.box1_title }}></h4>
                                                                    <p>{homedata?.section3?.box1_desc}</p>
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service">
                                                                    <div className='icon'><img src={homedata?.section3?.box2_image} /></div>
                                                                    <h4 dangerouslySetInnerHTML={{ __html: homedata?.section3?.box2_title }}></h4>
                                                                    <p>{homedata?.section3?.box2_desc}</p>
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4}>
                                                                <div className="pics-service">
                                                                    <div className='icon'><img src={homedata?.section3?.box3_image} /></div>
                                                                    <h4 dangerouslySetInnerHTML={{ __html: homedata?.section3?.box3_title }}></h4>
                                                                    <p>{homedata?.section3?.box3_desc}</p>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <div className='mt-40 mb-20 text-center'>
                                                        <a href='javascript:;' onClick={handleOpenContact} className='btn btn-mod btn-w btn-round btn-medium'>Get in touch</a>
                                                    </div>
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
                                                    {homedata?.section4?.title}
                                                </div>
                                                <div className='row d-flex justify-content-center mb-0'>
                                                    <div className='col-md-8'>
                                                        <div className='section-text text-center mb-30'>
                                                            <span dangerouslySetInnerHTML={{ __html: homedata?.section4?.description }}></span>
                                                        </div>

                                                        <div className='hs-line-4 mb-0'>
                                                            <b>Click to view Universities by Country</b>
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
                                            {
                                                universitydata?.length > 0 && universitydata?.map((x, i) => (
                                                    <Tab className={`tab-single ${(x?.name?.toLowerCase())}`} label={x?.name} {...a11yProps(i)} />
                                                ))
                                            }
                                        </Tabs>
                                        <TabPanel value={value} index={0}>
                                            <Box className='mt-10 xs-padding-12'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[0]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[0]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>UK data coming soon...</p>
                                                        </>
                                                    }

                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(1)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='javascript:;' onClick={handleOpenContact} className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[1]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[1]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>USA data coming soon...</p>
                                                        </>
                                                    }

                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(2)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='javascript:;' onClick={handleOpenContact} className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[2]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[2]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>CANADA data coming soon...</p>
                                                        </>
                                                    }

                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(3)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='javascript:;' onClick={handleOpenContact} className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={3}>
                                            <Box className='mt-10'>
                                                <Grid sx={{ mb: 2 }} container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    {universitydata?.[3]?.university?.length > 0 ?
                                                        <>
                                                            {
                                                                universitydata?.[3]?.university?.map((x) => (
                                                                    <Grid item className="univ-box">
                                                                        <div className='icon'><img src={x?.image} /></div>
                                                                        <h4>{x?.name}</h4>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </> :
                                                        <>
                                                            <p>AUSTRALIA data coming soon...</p>
                                                        </>
                                                    }
                                                </Grid>
                                            </Box>
                                            <div className='mt-20 text-center'><Button onClick={() => handleUkOpen(4)} className='buttonlink2'>View More</Button></div>
                                            <div className='mt-20 mb-0 mt-xs-20 text-center'>
                                                <a href='javascript:;' onClick={handleOpenContact} className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
                                            </div>
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
                                                    {homedata?.section5?.title}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-6 xs-order-1'>
                                                <div className='step-container'>
                                                    <div className='count font-alt'>01</div>
                                                    <div className='description'>
                                                        <h4>{homedata?.section5?.title1}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: homedata?.section5?.desc1 }}></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 xs-order-3'>
                                                <div className='step-container'>
                                                    <div className='count font-alt'>03</div>
                                                    <div className='description'>
                                                        <h4>{homedata?.section5?.title2}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: homedata?.section5?.desc2 }}></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 xs-order-2'>
                                                <div className='step-container'>
                                                    <div className='count font-alt'>02</div>
                                                    <div className='description'>
                                                        <h4>{homedata?.section5?.title3}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: homedata?.section5?.desc3 }}></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 xs-order-4'>
                                                <div className='step-container'>
                                                    <div className='count font-alt'>04</div>
                                                    <div className='description'>
                                                        <h4>{homedata?.section5?.title4}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: homedata?.section5?.desc4 }}></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-40 mb-0 mt-xs-20 text-center'>
                                            <a href='javascript:;' onClick={handleOpenContact} className='btn btn-mod btn-color btn-round btn-medium'>Get in touch</a>
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
                                            <div className="footer-menu">
                                                <ul className="clearlist">
                                                    <li><a href="#">Study International</a></li>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact</a></li>
                                                    <li><a href="#">Terms & conditions</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
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

export default Dashboard;