import React from 'react';
import Button from '../../../components/Button';

const Card = ({ item }) => {
    return(
        <div className="product-card card mtb-2">
            <div className="product-card-image">
                <img src={item.imageURL} alt={item.name}/>
            </div>
            <div className="product-card-details">
                <h3 className="product-cart-title">{item.name}</h3>
                <div>${item.price}</div>
                <div className="product-card-buttons">
                    <Button text="Details" />
                    <Button text="Add to Cart" buttonType="addToCart" item={item}/>
                </div>
            </div>
        </div>
    );
};

export default Card;