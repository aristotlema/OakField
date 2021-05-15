import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetails } from '../../state/product/productActions';

const DetailsPage = ({ fetchProductDetails, match, product }) => {
    useEffect(() => {
        fetchProductDetails(match.params.id);
        // eslint-disable-next-line
    }, []);

    return <div>Products Details for: </div>;
};

const mapStateToProps = (state, ownProps) => {
    return { product: state.products[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchProductDetails }
)(DetailsPage);