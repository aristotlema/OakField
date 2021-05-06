import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar';
import HomePage from '../pages/HomePage/HomePage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import CartPage from '../pages/CartPage/CartPage'
import './App.scss';

const App = () => {
    return (
        <div className="main-container">
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/products" exact component={ProductsPage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/cart" exact component={CartPage} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;