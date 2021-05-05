import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className="top-navbar">
            <h2 className="main-logo">
                OakField
            </h2>
            <div class="main-navigation">
                <a>Home</a>
                <a>About</a>
                <a>Products</a>
            </div>
            <div className="session-control">
                <div>Cart</div>
                <div>Log in</div>
            </div>
        </nav>
    );
};

export default NavBar;