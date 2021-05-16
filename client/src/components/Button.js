import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../state/cart/cartActions';
import './Button.scss';

const Button = ({ text, buttonType, item, addToCart, linkTo }) => {
    switch (buttonType) {
        case 'addToCart':
            return  <button className="site-button" onClick={() => addToCart(item.id)}>{text}</button>;
        case 'itemDetails':
            return  <Link to={`/products/${item.id}`} className="site-button">{text}</Link>;
        case 'linkToProducts':
            return <Link to={linkTo} className="site-button">{text}</Link>
        default:
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