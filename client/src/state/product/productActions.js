import shop from '../../api/shop';
import { FETCH_PRODUCTS } from './productTypes';

export const fetchProducts = () => async dispatch => {
    const response = await shop.get('/products');
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};