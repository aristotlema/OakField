import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../state/cart/cartActions';
import './Button.scss';

const Button = ({ text, buttonType, item, addToCart }) => {
    if(buttonType === "addToCart") {
        return (
            <button 
                className="site-button"
                onClick={() => addToCart(item.id)}
            >
                {text}
            </button>
            );
    } else if (buttonType === "itemDetails") {
        return <Link to={`/products/${item.id}`} className="site-button">{text}</Link>;
    } else {
        return <button className="site-button">{text}</button>;
    }
    
};

// const mapStateToProps = (state) => {
//     return { cart: state.cart };
// };

export default connect(
    null,
    { addToCart }
)(Button);