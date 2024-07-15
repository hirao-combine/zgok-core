import { z } from "zod";
type Methods = "get" | "post" | "patch" | "put" | "delete";
export type ZgokMethod<Schema extends {
    req: any;
    res: any;
}> = {
    method: Methods;
    req: Schema["req"] extends z.ZodType<any> ? z.infer<Schema["req"]> : never;
    res: Schema["res"] extends z.ZodType<any> ? z.infer<Schema["res"]> : never;
};
export type ZgokConfig = {
    [namespace: string]: {
        [method: string]: {
            method: Methods;
            req: z.ZodType<any>;
            res: z.ZodType<any>;
        };
    };
};
export declare function getFunction<Req, Res>({ req, res, }: {
    req: Req;
    res: Res;
}): {
    method: Methods;
    req: Req;
    res: Res;
};
export declare function postFunction<Req, Res>({ req, res, }: {
    req: Req;
    res: Res;
}): {
    method: Methods;
    req: Req;
    res: Res;
};
export declare function patchFunction<Req, Res>({ req, res, }: {
    req: Req;
    res: Res;
}): {
    method: Methods;
    req: Req;
    res: Res;
};
export declare function putFunction<Req, Res>({ req, res, }: {
    req: Req;
    res: Res;
}): {
    method: Methods;
    req: Req;
    res: Res;
};
export declare function deleteFunction<Req, Res>({ req, res, }: {
    req: Req;
    res: Res;
}): {
    method: Methods;
    req: Req;
    res: Res;
};
export { zgokDate } from "./utils";
//# sourceMappingURL=index.d.ts.map