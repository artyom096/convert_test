import { CALCULATE, QUANTITY_EXCHANGE, SET_AREA1, SET_AREA2 } from "../types"

const initialState = {
    area1: '',
    area2: '',
    quintity: 0,
}

export const ConverterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AREA1:
            return {
                ...state,
                area1: action.payload
            }
        case SET_AREA2:
            return {
                ...state,
                area2: action.payload
            }
        case QUANTITY_EXCHANGE:
            return {
                ...state,
                quintity: action.payload
            }
        case CALCULATE:
            return {
                ...state,
                totalPrice: action.payload
            }
        default:
            return state
    }
}
