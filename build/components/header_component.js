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
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var component_index_1 = require("../components/component-index");
var index_1 = require("../actions/index");
var react_router_dom_1 = require("react-router-dom");
require("../app.css");
var HeaderComp = (function (_super) {
    __extends(HeaderComp, _super);
    function HeaderComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderComp.prototype.render = function () {
        var date = component_index_1.formatDate(this.props.currentSelectedDate);
        return (React.createElement("div", { className: "row container" },
            React.createElement("div", { className: "col-3 center" },
                React.createElement("button", { className: "add-btn", onClick: this.props.getTodaysData, "data-val": this.props.currentSelectedDate }, "Today")),
            React.createElement("div", { className: "col-3" },
                React.createElement("button", { className: "navigate-btn", onClick: this.props.decrementDate, "data-val": this.props.currentSelectedDate }, "Prev"),
                React.createElement("button", { className: "navigate-btn", onClick: this.props.increamentDate, "data-val": this.props.currentSelectedDate }, "Next")),
            React.createElement("div", { className: "col-3 date-padding" }, component_index_1.formatDate(this.props.currentSelectedDate)),
            React.createElement("div", { className: "col-3" },
                React.createElement(react_router_dom_1.Link, { to: '/addEvent' },
                    React.createElement("button", { className: "add-btn" }, "Add Me")))));
    };
    return HeaderComp;
}(React.Component));
var matchStateToProps = function (state) {
    return {
        currentSelectedDate: state.actionReducer.currentSelectedDate
    };
};
var matchDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ increamentDate: index_1.increamentDate, decrementDate: index_1.decrementDate, getTodaysData: index_1.getTodaysData }, dispatch);
};
exports.default = react_redux_1.connect(matchStateToProps, matchDispatchToProps)(HeaderComp);
//# sourceMappingURL=header_component.js.map