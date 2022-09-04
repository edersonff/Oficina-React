import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi'
import '../NavigationA.css'
import { useEffect } from 'react';

function NavigationAList({screen}) {
    const [ mouseOverHead, setMouseOverHead ] = useState(false);
    const [ mouseOverList, setMouseOverList ] = useState(false);

    const falseList = () => { setMouseOverList(false) }
    const falseHead = () => { setMouseOverHead(false) }
    const trueList = () => { setMouseOverList(true) }
    const trueeHead = () => { setMouseOverHead(true) }

    useEffect(()=>{
        console.log(mouseOverHead);
    }, [mouseOverHead])

    const local = useLocation();
    const isLocal = (location) => { return location === local.pathname ? 'selected' : null };
    return (
        <div className={'NavigationA '+isLocal(screen.route)} onMouseOver={()=>{ trueList() }} onMouseLeave={()=>{ falseList() }}>
            <a className='disabled' to={screen.route}>{screen.title} <BiDownArrow /></a>

            <div className="list" style={{display: mouseOverHead || mouseOverList ? 'flex' : 'none'}} onMouseOver={()=>{ trueeHead() }} onMouseLeave={()=>{ falseHead() }}>
                {screen.sub.map((sub)=>{
                    return(
                        <Link className={'NavigationA '+isLocal(sub.route)} to={sub.route}>{sub.title} {sub.sub ? <BiDownArrow /> : null}</Link>
                    )
                })}
            </div>
            
        </div>
    );
}

export default NavigationAList;