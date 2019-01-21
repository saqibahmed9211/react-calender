"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
require("../app.css");
var event_details_1 = require("../components/event-details");
var component_index_1 = require("../components/component-index");
var index_1 = require("../actions/index");
var EventDetails = (function (_super) {
    __extends(EventDetails, _super);
    function EventDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createList = function () {
            var todaysRecords = component_index_1.getTodaysRecords(_this.props.events, _this.props.currentSelectedDate);
            return component_index_1.timeLine.map(function (time) {
                var recordWithInTimeRange = component_index_1.getRecordsWithinTimeRange(todaysRecords, time);
                return React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-3 time-line content-padding center" },
                        time.hour,
                        " ",
                        time.type),
                    React.createElement("div", { className: "col-7" }, event_details_1.details_of_event(recordWithInTimeRange, _this.props.deleteEvent, _this.props.updateEvent)));
            });
        };
        return _this;
    }
    EventDetails.prototype.render = function () {
        var events = this.props.events;
        return (React.createElement("div", { className: "row data-container " }, this.createList()));
    };
    return EventDetails;
}(React.Component));
var mapStateToProp = function (state) {
    var events = state.actionReducer.events;
    var currentSelectedDate = state.actionReducer.currentSelectedDate;
    return {
        events: events,
        currentSelectedDate: currentSelectedDate
    };
};
var matchDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ deleteEvent: index_1.deleteEvent, updateEvent: index_1.updateEvent }, dispatch);
};
exports.default = react_redux_1.connect(mapStateToProp, matchDispatchToProps)(EventDetails);
//# sourceMappingURL=timeline.js.map