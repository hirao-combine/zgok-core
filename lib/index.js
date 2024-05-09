"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFunction = exports.putFunction = exports.patchFunction = exports.postFunction = exports.getFunction = void 0;
function getFunction({ req, res, }) {
    return { method: "get", req, res };
}
exports.getFunction = getFunction;
function postFunction({ req, res, }) {
    return { method: "post", req, res };
}
exports.postFunction = postFunction;
function patchFunction({ req, res, }) {
    return { method: "patch", req, res };
}
exports.patchFunction = patchFunction;
function putFunction({ req, res, }) {
    return { method: "put", req, res };
}
exports.putFunction = putFunction;
function deleteFunction({ req, res, }) {
    return { method: "delete", req, res };
}
exports.deleteFunction = deleteFunction;
