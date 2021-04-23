import { combineReducers } from "redux";
import { ConverterReducer } from "./ConverterReducer";
import { TableReducer } from "./TableReducer";

export const RootReducer = combineReducers({
    table: TableReducer,
    converter: ConverterReducer
})
