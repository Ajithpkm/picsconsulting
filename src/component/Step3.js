import React, { useEffect } from 'react';
import contact_step_3 from '../images/contact-step-3.jpg';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
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
                                                background: `url(${contact_step_3})`,
                                            }}></div>
                                        </div>
                                    </div>

                                    <div className="split-section-content">
                                        <div className="split-section-wrapper">
                                            <div className="text align-left">
                                                <div className="hs-line-3 color font-alt mb-10 mb-xs-10">
                                                    Thanks Praveen!
                                                </div>
                                                <div className='mb-10 black'>We are happy to serve your interest to study abroad.<br />One of our PICS consultants will get in touch with you shortly.</div>
                                                <div className='fs-18 black fw-600'>Your PICS reference ID is <span className='color-2'>PICSUSA</span><span className='color'>2024001</span></div>
                                                <div className='mb-20'>
                                                    A copy of your submission with reference ID is sent to your mail. <br />Check your spam folder as well.
                                                </div>
                                                <div className='box-one mb-20'>
                                                    <div className='fs-24 lh-2 black fw-700 mb-10'>Stay connected with PICS</div>
                                                    <p className='black lh-4 mb-10'>Students like you make us grow by word of mouth.<br />Follow us on social media</p>
                                                    <div className='footer-widget'>
                                                        <div className="social-icons mb-0">
                                                            <ul>
                                                                <li><a href="https://www.facebook.com/pappaconsultants" target='_blank'><img src={facebook} /></a></li>
                                                                <li><a href="https://www.instagram.com/picsconsultants/" target='_blank'><img src={instagram} /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='box-one'>
                                                    <div className='fs-24 lh-2 black fw-700 mb-10'>You can now pre-book your FREE consultation</div>
                                                    <button className='btn btn-mod btn-color btn-round btn-medium'>book appointment</button>
                                                    <div className='mt-10'>Refer the <a href='/faq' className='color-2 underline' target='_blank'>FAQs section</a> for more information.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-footer'>
                                            <ul>
                                                <li><span className='dot active'></span></li>
                                                <li><span className='dot active'></span></li>
                                                <li><span className='dot active'></span></li>
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