import { SET_AREA1, SET_AREA2, QUANTITY_EXCHANGE } from "../types"

export const setAction1 = (value) => {
    return {
        type: SET_AREA1,
        payload: value
    }
}

export const setAction2 = (value) => {
    return {
        type: SET_AREA2,
        payload: value
    }
}

export const quantityExchange = (value) => {
    return {
        type: QUANTITY_EXCHANGE,
        payload: value
    }
}