
import shop from '../../api/shop';
import { ADD_TO_CART } from './cartTypes';

export const addToCart = (itemId) => async dispatch => {
    console.log(itemId)
    const response = await shop.post(`/cart`, {addedIds: itemId});
    console.log(response);
    dispatch({ type: ADD_TO_CART, payload: response.data });
};