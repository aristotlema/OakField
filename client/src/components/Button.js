import React from 'react';
import './Button.scss';

const Button = ({ text }) => {
    return <button className="site-button">{text}</button>;
};

export default Button;