import React from 'react';
import { Link } from 'react-router-dom'
import './Error.css'

function Error(props) {
    return (
        <div className='center-container flex align'>
            <div className="center flex align">
                <h1>Não encontrado :(</h1>
                <Link to="/" className="btn fill flex align">Voltar pro incio</Link>
            </div>
        </div>
    );
}

export default Error;