"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToLower = void 0;
const base_1 = require("./base");
class ToLower extends base_1.Transform {
    build(ctx, value) {
        return `((${value}) >= 'A' && (${value}) <= 'Z' ? ` +
            `(${value} | 0x20) : (${value}))`;
    }
}
exports.ToLower = ToLower;
//# sourceMappingURL=to-lower.js.map