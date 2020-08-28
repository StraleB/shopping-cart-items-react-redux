import {ADD_TO_CART,GET_NUMBER_BASKET} from './itemsTypes';

const initialState = {
    numOfItems :0
}

const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: return{
            ...state,
            numOfItems : state.numOfItems + 1
        }

        case GET_NUMBER_BASKET:
            return{
                ...state
            }

        default: return state
    }
}

export default itemReducer