import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import DehazeIcon from '@mui/icons-material/Dehaze';
import logoImage from '../../image/download.png'

import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className='home-main-container'>
                <div className='home-main-container-card1'>

                    <img src={logoImage} alt='logo' />

                    <div className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown}>
                            Solutions <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                        {isOpen && (
                            <div className="dropdown-content">
                                <a href="item1">Item 1</a>
                                <a href="item2">Item 2</a>
                                <a href="item">Item 3</a>
                            </div>
                        )}
                    </div>
                    <p>Pricing</p>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown}>
                            Resources <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                        {isOpen && (
                            <div className="dropdown-content">
                                <a href="item1">Item 1</a>
                                <a href="item2">Item 2</a>
                                <a href="item">Item 3</a>
                            </div>
                        )}
                    </div>
                </div>

                <div className='home-main-container-card2'>
                    <p>Log In</p>
                    <button className='start-free-trail-btn'>Start free trail</button>
                </div>


            </div>

            <div className='home-list-cards'>
                <div className='home-main-container1'>
                    <div className='home-main-container-for-mobile'>
                        <img src={logoImage} alt='logo' />

                        <div className='home-main-container-card2-for-mobile'>
                            <a href='#'>Start free trail</a>
                            <DehazeIcon />
                        </div>
                    </div>
                </div> 

                <div className='list-card-container-for-mobile'>
                 <ul className='unorder-list-card-container-for-mobile'> 
                     <Link to='/basic'>
                     <li>Basic</li>
                     
                     </Link>
                     <Link to='/shopify'>
                     <li>Shopify</li>

                     </Link>
                     <Link to='/advanced'>
                     <li>Advanced</li>
                     </Link>
                   
                   
                   
                 </ul>
            </div> 

            </div>


        </div>


    );
};

export default Navbar;