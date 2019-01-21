"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var index_1 = require("../actions/index");
var updateComponent = function (event, updateFun) {
    var startPickerValue = index_1.adjustDatepickerTime(event.location.params.event.startTime);
    var endPickerValue = index_1.adjustDatepickerTime(event.location.params.event.endTime);
    var handleSubmit = function (data) {
        try {
            event.location.params.updateFun(data);
            event.history.push('/');
        }
        catch (error) {
            console.log(error);
        }
    };
    return (React.createElement("div", { className: "row add-from-padding" },
        React.createElement("div", { className: "col-4" }),
        React.createElement("div", { className: "col-4 add-form-padding" },
            React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("div", { className: "row content-padding" },
                    React.createElement("div", { className: "col-3 center" },
                        React.createElement("label", { htmlFor: "startDate" }, "Start Date")),
                    React.createElement("div", { className: "col-7" },
                        React.createElement("input", { id: "startDate", name: "startDate", type: "datetime-local", defaultValue: startPickerValue }))),
                React.createElement("div", { className: "row content-padding" },
                    React.createElement("div", { className: "col-3 center" },
                        React.createElement("label", { htmlFor: "endDate" }, "End Date")),
                    React.createElement("div", { className: "col-7" },
                        React.createElement("input", { id: "endDate", name: "endDate", type: "datetime-local", defaultValue: endPickerValue }))),
                React.createElement("div", { className: "row content-padding" },
                    React.createElement("div", { className: "col-3 center" },
                        React.createElement("label", { htmlFor: "agenda" }, "Agenda")),
                    React.createElement("div", { className: "col-7" },
                        React.createElement("input", { id: "agenda", name: "agenda", type: "text", defaultValue: event.location.params.event.agenda || "", autoComplete: "off" }))),
                React.createElement("input", { type: "hidden", name: "id", id: "id", defaultValue: event.location.params.event.id }),
                React.createElement("div", { className: "row center content-padding" },
                    React.createElement("div", { className: "col-3" }),
                    React.createElement("div", { className: "col-7 left" },
                        React.createElement("input", { type: "submit", className: "save-btn", value: "submit" }))))),
        React.createElement("div", { className: "col-4" })));
};
var mapDispatchToProps = function (dispatch) {
};
exports.default = react_redux_1.connect(null, mapDispatchToProps)(updateComponent);
//# sourceMappingURL=update-event.js.map