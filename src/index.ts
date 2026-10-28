import { z } from "zod";

type Methods = "get" | "post" | "patch" | "put" | "delete";

/** 1エンドポイント分のスキーマ定義。req は省略可、res は必須 */
export type ZgokSchema = {
  method: Methods;
  req?: z.ZodType<any>;
  res: z.ZodType<any>;
};

export type ZgokConfig = {
  [namespace: string]: {
    [key: string]: ZgokSchema;
  };
};

function createFunction<M extends Methods>(method: M) {
  // payload に req があればその型を、無ければ req キー自体を持たない型を返す
  return function <P extends { req?: z.ZodType<any>; res: z.ZodType<any> }>(
    payload: P
  ): { method: M } & P {
    return { method, ...payload };
  };
}

export const getFunction = createFunction("get");
export const postFunction = createFunction("post");
export const patchFunction = createFunction("patch");
export const putFunction = createFunction("put");
export const deleteFunction = createFunction("delete");

/** req スキーマがあればその推論型、無ければ undefined */
export type ZgokMethodReq<S extends ZgokSchema> = S extends {
  req: z.ZodType<any>;
}
  ? z.infer<S["req"]>
  : undefined;

/** res スキーマの推論型 */
export type ZgokMethodRes<S extends ZgokSchema> = z.infer<S["res"]>;

/** リクエスト処理の引数・戻り値の型 */
export type ZgokMethod<S extends ZgokSchema> = {
  method: S["method"];
  req: ZgokMethodReq<S>;
  res: ZgokMethodRes<S>;
};

export { zgokDate } from "./utils";
