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
var index_1 = require("../actions/index");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var AddNewEvent = (function (_super) {
    __extends(AddNewEvent, _super);
    function AddNewEvent(props) {
        return _super.call(this, props) || this;
    }
    AddNewEvent.prototype.render = function () {
        var _this = this;
        var handleSubmit = function (event) {
            _this.props.addEvent(event);
            _this.props.history.push('/');
        };
        return (React.createElement("div", { className: "row add-from-padding" },
            React.createElement("div", { className: "col-4" }),
            React.createElement("div", { className: "col-4 add-form-padding" },
                React.createElement("form", { onSubmit: handleSubmit, className: "row" },
                    React.createElement("div", { className: "row content-padding" },
                        React.createElement("div", { className: "col-3 center" },
                            React.createElement("label", { htmlFor: "startDate" }, "Start Date")),
                        React.createElement("div", { className: "col-7" },
                            React.createElement("input", { id: "startDate", name: "startDate", type: "datetime-local" }))),
                    React.createElement("div", { className: "row content-padding" },
                        React.createElement("div", { className: "col-3 center" },
                            React.createElement("label", { htmlFor: "endDate" }, "End Date")),
                        React.createElement("div", { className: "col-7" },
                            React.createElement("input", { id: "endDate", name: "endDate", type: "datetime-local" }))),
                    React.createElement("div", { className: "row content-padding" },
                        React.createElement("div", { className: "col-3 center" },
                            React.createElement("label", { htmlFor: "agenda" }, "Agenda")),
                        React.createElement("div", { className: "col-7" },
                            React.createElement("input", { id: "agenda", name: "agenda", type: "text", autoComplete: "off" }))),
                    React.createElement("div", { className: "row center content-padding" },
                        React.createElement("div", { className: "col-3" }),
                        React.createElement("div", { className: "col-7 left" },
                            React.createElement("input", { type: "submit", className: "save-btn", value: "submit" }))))),
            React.createElement("div", { className: "col-4" })));
    };
    return AddNewEvent;
}(React.Component));
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ addEvent: index_1.addEvent }, dispatch);
};
exports.default = react_redux_1.connect(null, mapDispatchToProps)(AddNewEvent);
//# sourceMappingURL=add-event.js.map