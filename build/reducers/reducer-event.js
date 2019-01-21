"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../actions/index");
var dataArray = [
    {
        "startTime": "Sun Jan 20 2019 14:39:02 GMT+0530 (India Standard Time)",
        "endTime": "Sun Jan 20 2019 14:52:02 GMT+0530 (India Standard Time)",
        "title": "Event 1091",
        "id": 1091,
        "agenda": "Meeting with zz"
    },
    {
        "startTime": "Sun Jan 21 2019 17:39:02 GMT+0530 (India Standard Time)",
        "endTime": "Sun Jan 21 2019 17:52:02 GMT+0530 (India Standard Time)",
        "title": "Event 1091",
        "id": 1092,
        "agenda": "Meeting with zz"
    },
    {
        "startTime": "Sun Jan 22 2019 20:39:02 GMT+0530 (India Standard Time)",
        "endTime": "Sun Jan 22 2019 20:52:02 GMT+0530 (India Standard Time)",
        "title": "Event 1091",
        "id": 1093,
        "agenda": "Meeting with zz"
    }
];
var initialState = {
    events: dataArray,
    currentSelectedDate: new Date()
};
exports.actionReducer = function (state, action) {
    switch (action.type) {
        case "INCREMENT_DATE_CLICKED":
            var incSelDate = new Date(action.payload);
            var incCurrentSelectedDate = new Date(new Date(action.payload).setDate(incSelDate.getDate() + 1));
            return __assign({}, state, { currentSelectedDate: incCurrentSelectedDate });
        case "GET_TODAYS_DATA":
            return __assign({}, state, { currentSelectedDate: new Date() });
        case "DECREMENT_DATE_CLICKED":
            var decSelDate = new Date(action.payload);
            var decCurrentSelectedDate = new Date(new Date(action.payload).setDate(decSelDate.getDate() - 1));
            return __assign({}, state, { currentSelectedDate: decCurrentSelectedDate });
        case "ADD_EVENT":
            var startDate = new Date(action.payload.startDate);
            var endDate = new Date(action.payload.endDate);
            var eventObj = {
                startTime: startDate,
                endTime: endDate,
                id: state.events[state.events.length - 1].id + 1,
                title: "new Event added",
                agenda: action.payload.agenda
            };
            return __assign({}, state, { events: state.events.concat([eventObj]) });
        case "DELETE_EVENT":
            var filteredArray = state.events.filter(function (ele) { return ele.id != parseInt(action.payload); });
            return __assign({}, state, { events: filteredArray });
        case "UPDATE_EVENT":
            var updateObj_1 = {
                startDate: new Date(index_1.getTimezoneDifference(action.payload.target["0"].valueAsNumber)).toString() || "",
                endDate: new Date(index_1.getTimezoneDifference(action.payload.target["1"].valueAsNumber)).toString() || "",
                agenda: action.payload.target["2"].value || "",
                id: parseInt(action.payload.target["3"].value) || ""
            };
            var foundItem = state.events.find(function (ele) { return ele.id == updateObj_1.id; });
            foundItem.id = updateObj_1.id;
            foundItem.startTime = updateObj_1.startDate;
            foundItem.endTime = updateObj_1.endDate;
            foundItem.agenda = updateObj_1.agenda;
            state.events = state.events.filter(function (ele) { return ele.id != updateObj_1.id; });
            return __assign({}, state, { events: state.events.concat([foundItem]) });
        default:
            return initialState;
    }
};
//# sourceMappingURL=reducer-event.js.map