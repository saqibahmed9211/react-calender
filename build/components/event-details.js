"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../app.css");
var react_router_dom_1 = require("react-router-dom");
exports.details_of_event = function (events, delete_fun, updateFun) {
    return (events.map(function (event, index) {
        return React.createElement("div", { className: "row green-background" },
            React.createElement("div", { className: "col-6 content-padding" },
                index + 1,
                " ",
                event.agenda || ""),
            React.createElement("div", { className: "col-3 content-padding" },
                React.createElement("button", { onClick: delete_fun, "data-val": event.id }, "Delete"),
                React.createElement(react_router_dom_1.Link, { to: {
                        pathname: "/update",
                        params: { event: event, updateFun: updateFun }
                    } },
                    React.createElement("button", null, "Update"))));
    }));
};
//# sourceMappingURL=event-details.js.map