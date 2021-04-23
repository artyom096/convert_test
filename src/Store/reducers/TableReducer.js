import { GET_CURRENCY, FILTER_CURRENCY, SET_INPUT } from "../types";

const initialState = {
    allCoins: [],
    coins: [],
    inputValue: '',
}

export const TableReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCY:
            return {
                ...state,
                coins: { ...action.payload },
                allCoins: { ...action.payload }
            }
        case FILTER_CURRENCY:
            return {
                ...state,
                coins: { ...action.payload }
            }
        case SET_INPUT:
            return {
                ...state,
                inputValue: action.payload
            }
        default:
            return state
    }
}
