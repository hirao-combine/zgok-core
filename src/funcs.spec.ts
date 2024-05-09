import { z } from "zod";
import {
  ZgokConfig,
  ZgokMethod,
  deleteFunction,
  getFunction,
  patchFunction,
  postFunction,
  putFunction,
} from "./index";

describe("functions", () => {
  it("test get", () => {
    const f = getFunction({ req: { name: "string" }, res: { id: "number" } });
    expect(f.method).toEqual("get");
  });
  it("test post", () => {
    const f = postFunction({ req: { name: "string" }, res: { id: "number" } });
    expect(f.method).toEqual("post");
  });
  it("test patch", () => {
    const f = patchFunction({ req: { name: "string" }, res: { id: "number" } });
    expect(f.method).toEqual("patch");
  });
  it("test put", () => {
    const f = putFunction({ req: { name: "string" }, res: { id: "number" } });
    expect(f.method).toEqual("put");
  });
  it("test delete", () => {
    const f = deleteFunction({
      req: { name: "string" },
      res: { id: "number" },
    });
    expect(f.method).toEqual("delete");
  });
});

function checker<T extends ZgokConfig>(
  apiConfig: T
): {
  [N in keyof T]: {
    [K in keyof T[N]]: (
      data: ZgokMethod<T[N][K]>["req"]
    ) => Promise<ZgokMethod<T[N][K]>["res"]>;
  };
} {
  const apiMethods: any = {};
  return apiMethods;
}

describe("checker", () => {
  it("check", () => {
    const schema = {
      dir1: {
        get: getFunction({
          req: z.object({ id: z.number() }),
          res: z.object({ name1: z.string() }),
        }),
        post: postFunction({
          req: z.object({ id: z.number() }),
          res: z.object({ name1: z.string() }),
        }),
        put: putFunction({
          req: z.object({ id: z.number() }),
          res: z.object({ name1: z.string() }),
        }),
        patch: patchFunction({
          req: z.object({ id: z.number() }),
          res: z.object({ name1: z.string() }),
        }),
        delete: deleteFunction({
          req: z.object({ id: z.number() }),
          res: z.object({ name1: z.string() }),
        }),
      },
    };
    checker(schema);
  });
});
