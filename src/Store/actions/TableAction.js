import axios from "axios"
import { FILTER_CURRENCY, GET_CURRENCY, SET_INPUT } from "../types"
import { setAction1, setAction2 } from "./ConverterAction"

export const getCurrencyAction = () => {
    return dispatch => {
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(res => {
            dispatch(getCurrency(res.data.Valute))
            dispatch(setAction1(Object.values(res.data.Valute)[0]))
            dispatch(setAction2(Object.values(res.data.Valute)[0]))
        })
    }
}

export const getCurrency = (coins) => {
    return {
        type: GET_CURRENCY,
        payload: coins
    }
}

export const filterCoinsAction = (inputValue, allCoins) => {
    const filteredCoins = Object.values(allCoins).filter(item => {
        if (item.Name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 ||
            item.CharCode.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
            return item
        } else {
            return
        }
    })
    return {
        type: FILTER_CURRENCY,
        payload: filteredCoins
    }
}

export const setInput = (valueInput) => {
    return {
        type: SET_INPUT,
        payload: valueInput
    }
}