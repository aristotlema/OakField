import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../state/product/productActions';
import './ProductList.scss';

const ProductList = ({ products, fetchProducts }) => {
    useEffect(() => {
        fetchProducts();
        console.log(products);
        // eslint-disable-next-line
    }, []);

    const renderProducts = () => {
        return products.map(({ id, name, imageURL, price, description }) => {
            return (
                <div key={id} className="product-card mtb-2">
                    <div className="product-card-image">
                        <img src={imageURL} alt={name}/>
                    </div>
                    <div className="product-card-details">
                        <h3>{name}</h3>
                        <div>{price}</div>
                        <div>{description}</div>
                    </div>
                </div>
            );
        })
    };

    return <section>{renderProducts()}</section>;
};

const mapStateToProps = state => {
    return { products: state.products };
};

export default connect(
    mapStateToProps,
    { fetchProducts }
)(ProductList);