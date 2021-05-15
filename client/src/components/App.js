import React from 'react';
import { Router, Route } from "react-router-dom";

import NavBar from './NavBar';
import './App.scss';
import history from '../history';

import HomePage from '../pages/HomePage/HomePage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import CartPage from '../pages/CartPage/CartPage'
import DetailsPage from '../pages/DetailsPage/DetailsPage';


const App = () => {
    return (
        <div className="main-container">
            <Router history={history}>
                <div>
                    <NavBar />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/products" exact component={ProductsPage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/cart" exact component={CartPage} />
                    <Route path="/products/:id" extact component={DetailsPage} />
                </div>
            </Router>
        </div>
    )
};

export default App;