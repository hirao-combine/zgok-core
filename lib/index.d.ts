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
export declare const getFunction: <Req extends z.ZodType<any, z.ZodTypeDef, any>, Res extends z.ZodType<any, z.ZodTypeDef, any>>({ req, res, }: {
    req: Req;
    res: Res;
}) => {
    method: Methods;
    req: Req;
    res: Res;
};
export declare const postFunction: <Req extends z.ZodType<any, z.ZodTypeDef, any>, Res extends z.ZodType<any, z.ZodTypeDef, any>>({ req, res, }: {
    req: Req;
    res: Res;
}) => {
    method: Methods;
    req: Req;
    res: Res;
};
export declare const patchFunction: <Req extends z.ZodType<any, z.ZodTypeDef, any>, Res extends z.ZodType<any, z.ZodTypeDef, any>>({ req, res, }: {
    req: Req;
    res: Res;
}) => {
    method: Methods;
    req: Req;
    res: Res;
};
export declare const putFunction: <Req extends z.ZodType<any, z.ZodTypeDef, any>, Res extends z.ZodType<any, z.ZodTypeDef, any>>({ req, res, }: {
    req: Req;
    res: Res;
}) => {
    method: Methods;
    req: Req;
    res: Res;
};
export declare const deleteFunction: <Req extends z.ZodType<any, z.ZodTypeDef, any>, Res extends z.ZodType<any, z.ZodTypeDef, any>>({ req, res, }: {
    req: Req;
    res: Res;
}) => {
    method: Methods;
    req: Req;
    res: Res;
};
/** リクエスト処理の引数・戻り値の型 */
export type ZgokMethod<Schema extends {
    req: z.ZodType<any>;
    res: z.ZodType<any>;
}> = {
    method: Methods;
    req: z.infer<Schema["req"]>;
    res: z.infer<Schema["res"]>;
};
export { zgokDate } from "./utils";
//# sourceMappingURL=index.d.ts.map