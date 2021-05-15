import React from 'react';
import ProductList from './components/ProductList';

const ProductsPage = () => {
    return (
        <div className="wrapper">
            <h2 className="mtb-2">
                Welcome to Products
            </h2>
            <div className="mtb-2">
                <ProductList />
            </div>
        </div>
    );
};

export default ProductsPage;