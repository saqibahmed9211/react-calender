"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "EVENT_SELECTED":
            return action.payload;
            break;
    }
    return state;
}
exports.default = default_1;
//# sourceMappingURL=event-reducer.js.map