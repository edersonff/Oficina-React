import React from 'react';
import './Item.css'
import { AiFillCaretRight } from 'react-icons/ai'

function Item(props) {
    return (
        <div className='item-container'>
            <div className="image">
                <img src="img/product/00.png" alt="" srcset="" />
            </div>
            <div className="info">
                <h1>Item Item Item</h1>
                <p>Item Item Item Item Item Item Item Item Item Item Item Item</p>
            </div>
            <div className="button">
                <AiFillCaretRight />
            </div>
        </div>
    );
}

export default Item;