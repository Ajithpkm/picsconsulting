import React, { useEffect } from 'react';
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
                {
                    loading === false ?
                        <div className='page-loader'>
                            <span className="loader"></span>
                        </div> :
                        <div>
                            <p>Privacy Policy</p>
                        </div>
                }
            </div>
        </>
    );
};

export default PrivacyPolicy;