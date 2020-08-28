import {ADD_TO_CART} from './itemsTypes'

export const addCart = () => {
    return (dispatch) => {
        dispatch({
        type:ADD_TO_CART
        })
    }
}