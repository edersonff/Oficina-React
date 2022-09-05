import React from 'react';
import './Navbar.css';
import screens from '../data/screens';
import NavigationA from '../Components/NavigationA/NavigationA';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import NavigationAList from '../Components/NavigationA/NavigationAList/NavigationAList';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="elements-container">
                {screens.map((screen)=>{
                    return screen.sub ? ( 
                        <NavigationAList screen={screen} />
                    ) : (
                        <NavigationA screen={screen} />
                    )
                })}
                <div className="social-medias">
                    <a href='https://facebook.com' className="social-media">
                        <FaFacebookF />
                    </a>
                    <a href='https://whatsapp.com' className="social-media">
                        <FaWhatsapp />
                    </a>
                    <a href='https://instagram.com' className="social-media">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;