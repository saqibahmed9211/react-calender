import { combineReducers } from "redux";
// import {EventReducer, currentSelectedDate, } from "./reducer-event";
// import { dateChangeReducer } from "./reducer-event"
// import {events as EventReducer} from "./reducer-event"
import { actionReducer } from "./reducer-event"

export const allReducers = combineReducers({
    actionReducer : actionReducer
})