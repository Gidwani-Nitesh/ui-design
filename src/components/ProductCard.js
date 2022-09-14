import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className="item">
            <div className={props.itempic}></div>
            <div className="item__desc-container">
              <div className="item__name">{props.itemname}</div>
              <div className="item__price">$ {props.itemprice}</div>
            </div>
          </div>
    );
}

export default ProductCard;
