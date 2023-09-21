import React, { useState } from 'react';
import logoImage from '../../image/download.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar/>

            <div className='payment-home-card-container'>
                <div className='payment-month-year-card-container'>
                    <button className='pay-month-only-btn'>Pay Monthly</button>
                    <p>Pay Yearly(Save 25%)</p>
                </div>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3} columns={12}>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <div class="grid-item">
                                <div className='basic-card-container'>
                                    <button className='most-popular-btn'>MOST POPULAR</button>
                                    <div className='basic-card-container-top'>
                                        <h1 className='basic-heading'>Basic</h1>
                                        <p className='para-individual'>FOR INDIVIDUAL & SMALL BUSINESSES</p>
                                        <p style={{ fontSize: '10px' }}>Everythning you need to create your store,ship,products,and process payments</p>
                                    </div>
                                    <h1 style={{ fontSize: '30px', color: '#000' }}>
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
                        </Grid>

                        <Grid item lg={4} md={12}>
                        <div class="grid-item">
                        <div className='basic-card-container'>
                            <div className='basic-card-container-top'>
                                <h1 className='basic-heading'>Shopify</h1>
                                <p className='para-individual'>FOR SMALL BUSINESSES</p>
                                <p style={{ fontSize: '10px' }}>Level up yout business with professional reporting and more staff process payments</p>
                            </div>

                            <h1 style={{ fontSize: '30px', color: '#000' }}>
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
                        </Grid>
                        <Grid item lg={4} md={12}>
                        <div class="grid-item">
                        <div className='basic-card-container'>
                            <div className='basic-card-container-top'>
                                <h1 className='basic-heading'>Advanced</h1>
                                <p className='para-individual'>FOR  MEDIUM TO LARGE BUSINESSES</p>
                                <p style={{ fontSize: '10px' }}>Get the best of shopify with custom reporting and our lowest transaction fees</p>
                            </div>
                            <h1 style={{ fontSize: '30px', color: '#000' }}>
                                ₹30,164 <span className="currency">INR
                                    /mo</span>
                            </h1>
                        </div>

                        <div className='para-free-for-three-months-container'>
                            <p className='para-free-for-three-months'>Get your first 3 months for $20/mo</p>
                        </div>

                        <div className='basic-card-container'>
                            <div className='basics-card-container-lower'>
                                <h1 className='para-individual'>What's Included on Advanced</h1>
                                <div className='basic-reapors-card-container'>
                                    <p><FontAwesomeIcon icon={faCheck} /> Custom report builder</p>
                                    <p><FontAwesomeIcon icon={faCheck} /> Up to 1,000 inventory locations</p>
                                    <p><FontAwesomeIcon icon={faCheck} /> 15 staff accounts</p>
                                </div>

                            </div>

                            <button className='try-for-free-container-btn-container'>Try for free</button>
                        </div>

                    </div>
                        </Grid>

                       
                    </Grid>
                </Box>


            </div> 
           
        </div>

    );
};

export default Home;