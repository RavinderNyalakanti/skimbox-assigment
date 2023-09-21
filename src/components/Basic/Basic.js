import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';
import './Basic.css'
const Basic = () => {
    return (
        <div>
            <Navbar />
            <div class="grid-item">
                <div className='basic-card-container'>


                    <h1 style={{ fontSize: '60px', color: '#000' }}>
                        ₹1,999 <span className="currency">INR
                            /mo</span>
                    </h1>
                </div>

                <div className='para-free-for-three-months-container'>
                    <p className='para-free-for-three-months'>Get your first 3 months for ₹20/mo</p>
                </div>

                <div className='basic-card-container'>
                    <div className='basics-card-container-lower'>
                        <h1 className='para-individual'>What's Included on Basic</h1>
                        <div className='basic-reapors-card-container'>
                            <p><FontAwesomeIcon icon={faCheck} /> Basic Reports</p>
                            <p><FontAwesomeIcon icon={faCheck} /> Up to 1,000 inventory locations</p>
                            <p><FontAwesomeIcon icon={faCheck} /> 2 staff accounts</p>
                        </div>

                    </div>

                    <button className='try-for-free-container-btn-container'>Try for free</button>
                </div>
            </div>
        </div>
    );
};

export default Basic;