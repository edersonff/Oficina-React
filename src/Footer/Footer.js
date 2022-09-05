import { useEffect, useState } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom'
import {AiFillClockCircle} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import './Footer.css'
import Navbar from '../Navbar/Navbar';
import Card from '../Components/Card/Card';

function Footer() {  
    
    const location = useLocation();
    return (
        <>
            <footer className="footer">
                <h1>Nelson Auto Peças</h1>
                <p>R. João Januário Ayroso, 2306 - Jaraguá Esquerdo, Jaraguá do Sul - SC</p>
            </footer>
        </>
    );
}

export default Footer;