"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducer_event_1 = require("./reducer-event");
exports.allReducers = redux_1.combineReducers({
    actionReducer: reducer_event_1.actionReducer
});
//# sourceMappingURL=index.js.map