import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';
import './Shopify.css'
const Shopify = () => {
    return (
        <div> 
               <Navbar/>
            <div class="grid-item">
                <div className='basic-card-container'>
                    <div className='basic-card-container-top'>
                        
                    </div>

                    <h1 style={{ fontSize: '60px', color: '#000' }}>
                        ₹7,447<span className="currency">INR
                            /mo</span>
                    </h1>

                </div>

                <div className='para-free-for-three-months-container'>
                    <p className='para-free-for-three-months'>Get your first 3 months for ₹20/mo</p>
                </div>

                <div className='basic-card-container'>
                    <div className='basics-card-container-lower'>
                        <h1 className='para-individual'>What's Included on Shopify</h1>
                        <div className='basic-reapors-card-container'>
                            <p><FontAwesomeIcon icon={faCheck} /> professional Reports</p>
                            <p><FontAwesomeIcon icon={faCheck} /> Up to 1,000 inventory locations</p>
                            <p><FontAwesomeIcon icon={faCheck} /> 5 staff accounts</p>
                        </div>

                    </div>

                    <button className='try-for-free-container-btn-container'>Try for free</button>
                </div></div>
        </div>

    );
};

export default Shopify;