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
var index_1 = require("../actions/index");
var EventList = (function (_super) {
    __extends(EventList, _super);
    function EventList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createList = function () {
            var _a = _this.props, events = _a.events, selectedEvent = _a.selectedEvent;
            return events.map(function (event) {
                return React.createElement("li", { key: event.id, onClick: selectedEvent }, event.startTime);
            });
        };
        return _this;
    }
    EventList.prototype.render = function () {
        return (React.createElement("ul", null, this.createList()));
    };
    return EventList;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        events: state.events
    };
};
var matchDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ selectedEvent: index_1.selectedEvent }, dispatch);
};
exports.default = react_redux_1.connect(mapStateToProps, matchDispatchToProps)(EventList);
//# sourceMappingURL=event-list.js.map