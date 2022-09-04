import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationA.css'

function NavigationA({screen}) {
    const local = useLocation();
    const isLocal = (location) => { return location === local.pathname ? 'selected' : null };
    return (
        <div className={'NavigationA '+isLocal(screen.route)}>
            <Link className='link' to={screen.route}>{screen.title}</Link>
        </div>
    );
}

export default NavigationA;