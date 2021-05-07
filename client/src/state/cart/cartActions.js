
import shop from '../../api/shop';
import { ADD_TO_CART } from './cartTypes';

export const addToCart = (itemId) => async dispatch => {
    const response = await shop.post(`/cart`, {addedIds: itemId});
    dispatch({ type: ADD_TO_CART, payload: response.data });
};