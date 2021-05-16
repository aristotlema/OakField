import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './ProductList.scss';
import { fetchProducts } from '../../../state/product/productActions';
import ViewSelector from './ViewSelector';
import CardList from './CardList';
import Card from './Card';

const ProductList = ({ products, fetchProducts }) => {
    const [productView, setProductView] = useState('list');

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);
    
    
    const selectedView = productView === 'grid' ? 'grid' : 'list'; 

    const renderProducts = () => {
        return products.map((item) => {
            if(productView === 'list') {
                return <CardList item={item} key={item.id}/>
            } 
            else if (productView === 'grid') {
                return <Card item={item} key={item.id}/>
            } 
            else {
                console.error('you messed up');
                return <CardList item={item} key={item.id}/>
            }
        });
    };

    return (
    <section>
        <ViewSelector setProductView={setProductView}/>
        <div className={`card-list-container ${selectedView}`}>
            {renderProducts()}
        </div>
    </section>);
};

const mapStateToProps = state => {
    return { products: Object.values(state.products) };
};

export default connect(
    mapStateToProps, 
    { fetchProducts }
)(ProductList);