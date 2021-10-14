import { ActionTypes } from "../actions/action_types";

const initialState = {
    products: []
};

export const productReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        case ActionTypes.REMOVE_ARRAY:
            return {};
        default:
            return state;
    }
};

export const gotProductReducer = ( state=false, {type, value}) => {
    switch(type) {
        case ActionTypes.GOT_PRODUCTS:
            return {...state, value};
        default:
            return state;
    }
};

export const addToCartReducer = ( state=initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_CART:
            return {...state, products:payload};
        default:
            return state;
    }
};


