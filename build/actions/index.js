"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectedEvent = function (event) {
    console.log("event clicked");
    return {
        type: "EVENT_SELECTED",
        payload: event
    };
};
exports.increamentDate = function (date) {
    return {
        type: "INCREMENT_DATE_CLICKED",
        payload: date.target.dataset.val
    };
};
exports.decrementDate = function (date) {
    return {
        type: "DECREMENT_DATE_CLICKED",
        payload: date.target.dataset.val
    };
};
exports.getTodaysData = function (date) {
    return {
        type: "GET_TODAYS_DATA",
        payload: date.target.dataset.val
    };
};
exports.getInitialData = function () {
    return {
        type: "GET_TODAYS_DATA",
        payload: ""
    };
};
exports.addEvent = function (event) {
    var eventObj = {
        startDate: new Date(exports.getTimezoneDifference(event.target["0"].valueAsNumber)) || "",
        endDate: new Date(exports.getTimezoneDifference(event.target["1"].valueAsNumber)) || "",
        agenda: event.target["2"].value || ""
    };
    return {
        type: "ADD_EVENT",
        payload: eventObj
    };
};
exports.deleteEvent = function (event) {
    return {
        type: "DELETE_EVENT",
        payload: event.target.attributes[0].value
    };
};
exports.updateEvent = function (event) {
    return {
        type: "UPDATE_EVENT",
        payload: event
    };
};
exports.getTimezoneDifference = function (time) {
    return time + new Date().getTimezoneOffset() * 60 * 1000;
};
exports.adjustDatepickerTime = function (date) {
    var myDate = new Date(date);
    var month = (myDate.getMonth() + 1) < 10 ? "0" + (myDate.getMonth() + 1) : "" + (myDate.getMonth() + 1);
    var hours = (myDate.getHours()) < 10 ? "0" + myDate.getHours() : "" + myDate.getHours();
    var minuts = (myDate.getMinutes()) < 10 ? "0" + myDate.getMinutes() : "" + myDate.getMinutes();
    var seconds = (myDate.getSeconds()) < 10 ? "0" + myDate.getSeconds() : "" + myDate.getSeconds();
    return myDate.getFullYear() + "-" + month + "-" + myDate.getDate() + "T" + hours + ":" + minuts + ":" + seconds + "." + myDate.getMilliseconds();
};
//# sourceMappingURL=index.js.map