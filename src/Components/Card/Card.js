import React from 'react';
import './Card.css'
function Card({icon, title, subtitle, style}) {
    return (
        <div className='card' style={style}>
            <div className="icon">
                {icon}
            </div>
            <div className="info">
                <h3 className='title'> {title} </h3>
                <p className='subtitle'> {subtitle} </p>
            </div>
        </div>
    );
}

export default Card;