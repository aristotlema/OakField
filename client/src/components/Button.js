import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../state/cart/cartActions';
import './Button.scss';

const Button = ({ text, buttonType, item, addToCart }) => {
    if(buttonType === "addToCart") {
        return (
            <button 
                className="site-button"
                onClick={() => addToCart(item)}
            >
                {text}
            </button>
            );
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