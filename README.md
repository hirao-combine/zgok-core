zgok-api is an API developed in TypeScript for both front-end and back-end, ensuring safe request and response code through schema definitions using zod.

# Usage

npm install --save zgok-core

## Creating Schemas

Define schemas using zod.
The schemas should be shared between the front-end and back-end.
You can use symlinks or submodules.

```typescript
import { z } from "zod";
import { postFunction, getFunction, patchFunction } from "@zgok-api/zgok-core";

export const SampleSchema = {
  dir1: {
    hoge1: postFunction({
      req: z.object({ id: z.number() }),
      res: z.object({ name1: z.string() }),
    }),
    hoge2: getFunction({
      req: z.object({ id: z.number() }),
      res: z.object({ name2: z.string() }),
    }),
  },
  dir2: {
    moge: patchFunction({
      req: z.object({ key: z.string() }),
      res: z.object({ kind: z.object({ name: z.string() }) }),
    }),
  },
};
```

## Backend Setup

npm install --save zgok-express
or
yarn add zgok-express

zgok-express generates middleware from zgokSchema for handling processes in Express.
Requests are validated by zod and set to req.zbody.
Responses are validated by zod and sent with res.send.

This code creates a route for POST: /api/zgokExpress/dir1/hoge1.

```typescript
const router = express.Router();
import { ZgokExpress } from "@zgok-api/zgok-express";

const zgokExpress = ZgokExpress(SampleSchema);
router.use(
  zgokExpress.dir1.hoge1(async (req, res) => {
    console.log("hoge3 zbody", req.zbody);
    return { name3: `${req.zbody.id}さん` };
  })
);
app.use("/api", router);
```

## Frontend Setup

npm install --save zgok-axios
yarn add zgok-axios

zgok-axios generates functions from zgokSchema to handle axios processes.
Both requests and responses are validated by zod.

```typescript
import { ZgokAxios } from "@zgok-api/zgok-axios";

export const zgokAxios = ZgokAxios(
  Axios.create({ baseURL: "http://localhost:3000/base" }),
  SampleSchema
);

const hoge1 = async () => {
  const res = await zgokAxios.dir1.hoge1({ id: 1 });
  console.log("res", res);
};
```
