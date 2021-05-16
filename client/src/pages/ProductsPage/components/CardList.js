import React from 'react';
import Button from '../../../components/Button';

const CardList = ({ item }) => {
    return(
        <div className="product-card list mtb-2">
            <div className="product-card-image">
                <img src={item.imageURL} alt={item.name}/>
            </div>
            <div className="product-card-details">
                <h3 className="product-card-title">{item.name}</h3>
                <div>${item.price}</div>
                <div className="product-card-description">{item.description}</div>
                <div className="product-card-buttons">
                    <Button text="Details" buttonType="itemDetails" item={item}/>
                    <Button text="Add to Cart" buttonType="addToCart" item={item}/>
                </div>
            </div>
        </div>
    )
};

export default CardList;