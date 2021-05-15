import { FETCH_PRODUCT, FETCH_PRODUCTS } from './productTypes';

export const productReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return action.payload;
        case FETCH_PRODUCT:
            return action.payload;
        default:
            return state;
    }
};