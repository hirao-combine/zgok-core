import { z } from "zod";

type Methods = "get" | "post" | "patch" | "put" | "delete";

export type ZgokConfig = {
  [namespace: string]: {
    [method: string]: {
      method: Methods;
      req: z.ZodType<any>;
      res: z.ZodType<any>;
    };
  };
};
function createFunction(method: Methods) {
  return function <Req extends z.ZodType<any>, Res extends z.ZodType<any>>({
    req,
    res,
  }: {
    req: Req;
    res: Res;
  }): { method: Methods; req: Req; res: Res } {
    return { method, req, res };
  };
}

export const getFunction = createFunction("get");
export const postFunction = createFunction("post");
export const patchFunction = createFunction("patch");
export const putFunction = createFunction("put");
export const deleteFunction = createFunction("delete");

/** リクエスト処理の引数・戻り値の型 */
export type ZgokMethod<
  Schema extends { req: z.ZodType<any>; res: z.ZodType<any> },
> = {
  method: Methods;
  req: z.infer<Schema["req"]>;
  res: z.infer<Schema["res"]>;
};

export { zgokDate } from "./utils";
