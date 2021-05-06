import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className="top-navbar">
            <h2 className="main-logo">
                <Link to="/">Oak Field</Link>
            </h2>
            <div className="main-navigation">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                {/* <a>Home</a>
                <a>About</a>
                <a>Products</a> */}
            </div>
            <div className="session-control">
                <Link to="/cart">Cart</Link>
                <div>Log in</div>
            </div>
        </nav>
    );
};

export default NavBar;