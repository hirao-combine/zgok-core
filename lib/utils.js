"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zgokDate = void 0;
const zod_1 = require("zod");
/**
 * Defines a Zod schema for date validation. It preprocesses the input:
 * - If the input is a string or a Date instance, it converts the input to a Date object.
 * - Returns the input as is if it does not match the above conditions.
 * Then, it validates whether the processed input is a valid Date object.
 */
const zgokDate = () => zod_1.z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) {
        return new Date(arg);
    }
    return arg;
}, zod_1.z.date());
exports.zgokDate = zgokDate;
