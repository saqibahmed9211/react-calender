"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeLine = [
    { hour: 9, type: "am" }, { hour: 10, type: "am" },
    { hour: 11, type: "am" }, { hour: 12, type: "pm" },
    { hour: 13, type: "pm" }, { hour: 14, type: "pm" },
    { hour: 15, type: "pm" }, { hour: 16, type: "pm" },
    { hour: 17, type: "pm" }, { hour: 18, type: "pm" },
    { hour: 19, type: "pm" }, { hour: 20, type: "pm" },
    { hour: 21, type: "pm" },
];
exports.getRecordsWithinTimeRange = function (records, time) {
    return records.filter(function (rec) {
        return (new Date(rec.startTime).getHours() == time.hour);
    });
};
exports.getTodaysRecords = function (events, currentSelectedDate) {
    var todaysDate = currentSelectedDate.toLocaleDateString();
    return events.filter(function (event) {
        var eventStartDate = new Date(event.startTime).toLocaleDateString();
        var eventEndDate = new Date(event.endTime).toLocaleDateString();
        return (eventStartDate === todaysDate && eventEndDate == todaysDate);
    });
};
exports.formatDate = function (date) {
    var month = date.toLocaleString('en-us', { month: 'short' });
    var day = date.getDate();
    var year = date.getFullYear();
    return day + " " + month + ", " + year;
};
//# sourceMappingURL=component-index.js.map