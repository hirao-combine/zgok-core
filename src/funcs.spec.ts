import { z } from "zod";
import {
  ZgokConfig,
  ZgokMethod,
  ZgokMethodReq,
  ZgokMethodRes,
  deleteFunction,
  getFunction,
  patchFunction,
  postFunction,
  putFunction,
} from "./index";

describe("functions", () => {
  it("test get", () => {
    const f = getFunction({
      req: z.object({ name: z.string() }),
      res: z.object({ id: z.number() }),
    });
    expect(f.method).toEqual("get");
  });
  it("test post", () => {
    const f = postFunction({
      req: z.object({ name: z.string() }),
      res: z.object({ id: z.number() }),
    });
    expect(f.method).toEqual("post");
  });
  it("test patch", () => {
    const f = patchFunction({
      req: z.object({ name: z.string() }),
      res: z.object({ id: z.number() }),
    });
    expect(f.method).toEqual("patch");
  });
  it("test put", () => {
    const f = putFunction({
      req: z.object({ name: z.string() }),
      res: z.object({ id: z.number() }),
    });
    expect(f.method).toEqual("put");
  });
  it("test delete", () => {
    const f = deleteFunction({
      req: z.object({ name: z.string() }),
      res: z.object({ id: z.number() }),
    });
    expect(f.method).toEqual("delete");
  });
  it("req can be omitted", () => {
    const f = getFunction({ res: z.object({ id: z.number() }) });
    expect(f.method).toEqual("get");
    expect("req" in f).toBe(false);
    expect(f.res.parse({ id: 1 })).toEqual({ id: 1 });
  });
});

// req の有無で引数の形が変わるクライアント型の見本（zgok-axios と同じ形）
function checker<T extends ZgokConfig>(
  apiConfig: T
): {
  [N in keyof T]: {
    [K in keyof T[N]]: (
      ...args: T[N][K] extends { req: z.ZodType<any> }
        ? [data: ZgokMethodReq<T[N][K]>]
        : []
    ) => Promise<ZgokMethodRes<T[N][K]>>;
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
        get2: getFunction({
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
    const checks = checker(schema);
    // 型レベルの確認（実行はされない）
    const _typeCheck = () => {
      checks.dir1.get({ id: 1 });
      checks.dir1.get2();
      // @ts-expect-error req が無い API に引数は渡せない
      checks.dir1.get2({ id: 1 });
      // @ts-expect-error req がある API は引数必須
      checks.dir1.get();
      const m: ZgokMethod<typeof schema.dir1.get2> = {
        method: "get",
        req: undefined,
        res: { name1: "x" },
      };
      return m;
    };
    expect(typeof _typeCheck).toBe("function");
  });
});
