import React from 'react';
import './SocialMedia.css';

function SocialMedia({Icon}) {
    return (
        <div className='social-media'>
            <Icon />
        <Iframe iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.450016410544!2d-49.1014938!3d-26.5056476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de94c03b2c8b85%3A0xa0fcd9b662dcdac9!2sNelson%20Auto%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1662307091851!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>' />
        </div>
    );
}

export default SocialMedia;