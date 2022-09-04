import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import {AiFillClockCircle} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import './Header.css'
import Navbar from '../Navbar/Navbar';
import Card from '../Components/Card/Card';

function Header() {  
    
    const location = useLocation();
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img className='src' src="img/Logo.png" alt="Logo" />
                </div>
                <div className="cards">
                    <Card style={{borderRight: '4px solid #E6E6E6'}} icon={(<BsFillTelephoneFill />)} title='Ligue para a gente' subtitle='(47) 3273-1176' />
                    <Card icon={(<AiFillClockCircle />)} title='Aberto entre:' subtitle='Seg a Sex - 12:00 a 24:00' />
                </div>
                {/* <div className="title" style={{color: functions.checkPageWhite("projetos")}}>
                    Ederson Franzen Fagundes
                </div> */}
            </header>
            <Navbar />
        </>
    );
}

export default Header;