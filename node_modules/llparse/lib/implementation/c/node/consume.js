"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consume = void 0;
const base_1 = require("./base");
class Consume extends base_1.Node {
    doBuild(out) {
        const ctx = this.compilation;
        const index = ctx.stateField(this.ref.field);
        const ty = ctx.getFieldType(this.ref.field);
        let fieldTy;
        if (ty === 'i64') {
            fieldTy = 'uint64_t';
        }
        else if (ty === 'i32') {
            fieldTy = 'uint32_t';
        }
        else if (ty === 'i16') {
            fieldTy = 'uint16_t';
        }
        else if (ty === 'i8') {
            fieldTy = 'uint8_t';
        }
        else {
            throw new Error(`Unsupported type ${ty} of field ${this.ref.field} for consume node`);
        }
        out.push('size_t avail;');
        out.push(`${fieldTy} need;`);
        out.push('');
        out.push(`avail = ${ctx.endPosArg()} - ${ctx.posArg()};`);
        out.push(`need = ${index};`);
        // Note: `avail` or `need` are going to coerced to the largest
        // datatype needed to hold either of the values.
        out.push('if (avail >= need) {');
        out.push(`  p += need;`);
        out.push(`  ${index} = 0;`);
        const tmp = [];
        this.tailTo(tmp, this.ref.otherwise);
        ctx.indent(out, tmp, '  ');
        out.push('}');
        out.push('');
        out.push(`${index} -= avail;`);
        this.pause(out);
    }
}
exports.Consume = Consume;
//# sourceMappingURL=consume.js.map