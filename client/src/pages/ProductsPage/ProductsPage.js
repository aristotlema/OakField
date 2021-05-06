import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../state/product/productActions';

const ProductsPage = ({ fetchProducts }) => {
    useEffect(() => {
        console.log('i Loaded');
        fetchProducts();
        // eslint-disable-next-line
    }, []);

    return <div>Welcome to Products</div>;
};

const mapStateToProps = state => {
    return { products: state.products };
};

export default connect(
    mapStateToProps,
    { fetchProducts }
)(ProductsPage);