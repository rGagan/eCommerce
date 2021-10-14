import { ActionTypes } from "../actions/action_types"
import api from "../../services/FakeStoreApi"

//These are the functions that take the requests from our app and sends them to reducers

export const fetchData = url => {
    return async (dispatch, getState) => {
        const response = await api.get(url)
        console.log(response.data)
        dispatch({type:ActionTypes.SET_PRODUCTS, payload:response.data})
        dispatch({type:ActionTypes.GOT_PRODUCTS, value:true})
    }
}

export const gotProducts = value => {

    return  {
        type: ActionTypes.GOT_PRODUCTS,
        value: value
    }
}

export const removeArray = () => {

    return  {
        type: ActionTypes.REMOVE_ARRAY,
    }
}

export const addToCart = (payload) => {

    return  {
        type: ActionTypes.ADD_CART,
        payload: payload,
    }
}
