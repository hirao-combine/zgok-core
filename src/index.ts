import { z } from "zod";

type Methods = "get" | "post" | "patch" | "put" | "delete";

export type ZgokMethod<Schema extends { req: any; res: any }> = {
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

export function getFunction<Req, Res>({
  req,
  res,
}: {
  req: Req;
  res: Res;
}): {
  method: Methods;
  req: Req;
  res: Res;
} {
  return { method: "get", req, res };
}

export function postFunction<Req, Res>({
  req,
  res,
}: {
  req: Req;
  res: Res;
}): {
  method: Methods;
  req: Req;
  res: Res;
} {
  return { method: "post", req, res };
}

export function patchFunction<Req, Res>({
  req,
  res,
}: {
  req: Req;
  res: Res;
}): {
  method: Methods;
  req: Req;
  res: Res;
} {
  return { method: "patch", req, res };
}

export function putFunction<Req, Res>({
  req,
  res,
}: {
  req: Req;
  res: Res;
}): {
  method: Methods;
  req: Req;
  res: Res;
} {
  return { method: "put", req, res };
}

export function deleteFunction<Req, Res>({
  req,
  res,
}: {
  req: Req;
  res: Res;
}): {
  method: Methods;
  req: Req;
  res: Res;
} {
  return { method: "delete", req, res };
}
