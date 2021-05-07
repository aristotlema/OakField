import { ADD_TO_CART } from './cartTypes';

const INITIAL_STATE = {
    cart: [],
    addedIds: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return state;
        default:
            return state;
    }
};