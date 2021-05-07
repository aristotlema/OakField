import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './ProductList.scss';
import Button from '../../../components/Button';

const ProductList = ({ products }) => {
     const renderProducts = () => {
        return products.map((item) => {
            return (
                <div key={item.id} className="product-card mtb-2">
                    <div className="product-card-image">
                        <img src={item.imageURL} alt={item.name}/>
                    </div>
                    <div className="product-card-details">
                        <h3 className="product-cart-title">{item.name}</h3>
                        <div>${item.price}</div>
                        <div className="product-card-description">{item.description}</div>
                        <div className="product-card-buttons">
                            <Button text="Details" />
                            <Button text="Add to Cart" buttonType="addToCart" item={item}/>
                        </div>
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
    mapStateToProps
)(ProductList);