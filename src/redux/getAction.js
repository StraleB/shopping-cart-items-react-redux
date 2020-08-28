import {GET_NUMBER_BASKET} from './itemsTypes'

export const getItems = () => {
    return (dispatch) => {
        dispatch({
        type:GET_NUMBER_BASKET
        })
    }
}