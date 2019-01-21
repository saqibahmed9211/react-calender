"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var index_1 = require("./reducers/index");
var app_1 = require("./components/app");
var react_router_dom_1 = require("react-router-dom");
var add_event_1 = require("./container/add-event");
var update_event_1 = require("./container/update-event");
var store = redux_1.createStore(index_1.allReducers);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: app_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/addEvent", component: add_event_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/update", component: update_event_1.default })))), document.getElementById("root"));
//# sourceMappingURL=index.js.map