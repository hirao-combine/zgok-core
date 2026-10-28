"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zgokDate = exports.deleteFunction = exports.putFunction = exports.patchFunction = exports.postFunction = exports.getFunction = void 0;
function createFunction(method) {
    return function ({ req, res, }) {
        return { method, req, res };
    };
}
exports.getFunction = createFunction("get");
exports.postFunction = createFunction("post");
exports.patchFunction = createFunction("patch");
exports.putFunction = createFunction("put");
exports.deleteFunction = createFunction("delete");
var utils_1 = require("./utils");
Object.defineProperty(exports, "zgokDate", { enumerable: true, get: function () { return utils_1.zgokDate; } });
