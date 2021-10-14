import { combineReducers } from "redux";
import { gotProductReducer, productReducer, addToCartReducer } from "./product_reducers";

const reducers = combineReducers ({
    allProducts: productReducer,
    gotProducts: gotProductReducer,
    cartProducts: addToCartReducer,
});

export default reducers;