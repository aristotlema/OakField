import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar';
import HomePage from '../pages/HomePage/HomePage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import CartPage from '../pages/CartPage/CartPage'
import { fetchProducts } from '../state/product/productActions';
import './App.scss';
import { connect } from 'react-redux';

const App = () => {
    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);
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

export default connect(null, fetchProducts)(App);