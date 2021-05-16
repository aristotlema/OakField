import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetails } from '../../state/product/productActions';
import './ProductDetailsPage.scss';
import Button from '../../components/Button';

const ProductDetailsPage = ({ fetchProductDetails, match, product }) => {
    useEffect(() => {
        fetchProductDetails(match.params.id);
        // eslint-disable-next-line
    }, []);

    if(!product) {
        return <div>Loading ...</div>;
    } else {
        return (
            <div className="wrapper">
                <section className="mtb-2">
                    <Button text="Back to Products" buttonType="linkToProducts" linkTo="/products"/>
                    <img src={product.imageURL} className="mtb-2"/>
                    <div className="product-details mtb-2">
                        <h2 className="product-details-title">{product.name}</h2>
                        <div>${product.price}</div>
                        <div>{product.description}</div>
                    </div>
                </section>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { product: state.products[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchProductDetails }
)(ProductDetailsPage);