"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const index_1 = require("./index");
describe("functions", () => {
    it("test get", () => {
        const f = (0, index_1.getFunction)({ req: { name: "string" }, res: { id: "number" } });
        expect(f.method).toEqual("get");
    });
    it("test post", () => {
        const f = (0, index_1.postFunction)({ req: { name: "string" }, res: { id: "number" } });
        expect(f.method).toEqual("post");
    });
    it("test patch", () => {
        const f = (0, index_1.patchFunction)({ req: { name: "string" }, res: { id: "number" } });
        expect(f.method).toEqual("patch");
    });
    it("test put", () => {
        const f = (0, index_1.putFunction)({ req: { name: "string" }, res: { id: "number" } });
        expect(f.method).toEqual("put");
    });
    it("test delete", () => {
        const f = (0, index_1.deleteFunction)({
            req: { name: "string" },
            res: { id: "number" },
        });
        expect(f.method).toEqual("delete");
    });
});
function checker(apiConfig) {
    const apiMethods = {};
    return apiMethods;
}
describe("checker", () => {
    it("check", () => {
        const schema = {
            dir1: {
                get: (0, index_1.getFunction)({
                    req: zod_1.z.object({ id: zod_1.z.number() }),
                    res: zod_1.z.object({ name1: zod_1.z.string() }),
                }),
                post: (0, index_1.postFunction)({
                    req: zod_1.z.object({ id: zod_1.z.number() }),
                    res: zod_1.z.object({ name1: zod_1.z.string() }),
                }),
                put: (0, index_1.putFunction)({
                    req: zod_1.z.object({ id: zod_1.z.number() }),
                    res: zod_1.z.object({ name1: zod_1.z.string() }),
                }),
                patch: (0, index_1.patchFunction)({
                    req: zod_1.z.object({ id: zod_1.z.number() }),
                    res: zod_1.z.object({ name1: zod_1.z.string() }),
                }),
                delete: (0, index_1.deleteFunction)({
                    req: zod_1.z.object({ id: zod_1.z.number() }),
                    res: zod_1.z.object({ name1: zod_1.z.string() }),
                }),
            },
        };
        checker(schema);
    });
});
