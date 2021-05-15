import shop from '../../api/shop';
import { FETCH_PRODUCTS, FETCH_PRODUCT } from './productTypes';
// import history from '../../history';

export const fetchProducts = () => async dispatch => {
    const response = await shop.get('/products');
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProductDetails = (itemId) => async dispatch => {
    const response = await shop.get(`/products/${itemId}`);
    dispatch({ type: FETCH_PRODUCT, payload: response.data });
};