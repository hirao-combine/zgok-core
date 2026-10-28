import { z } from "zod";
import { zgokDate } from "./utils";

describe("zgokDate", () => {
  const iso = "2024-07-15T10:42:21.070Z";

  it("parses an ISO string into a Date", () => {
    const d = zgokDate().parse(iso);
    expect(d).toBeInstanceOf(Date);
    expect(d.toISOString()).toBe(iso);
  });

  it("passes a Date through as a Date", () => {
    const input = new Date(iso);
    const d = zgokDate().parse(input);
    expect(d).toBeInstanceOf(Date);
    expect(d.getTime()).toBe(input.getTime());
  });

  it("rejects an invalid date string", () => {
    expect(zgokDate().safeParse("not a date").success).toBe(false);
  });

  it("rejects non-date values", () => {
    expect(zgokDate().safeParse(123).success).toBe(false);
    expect(zgokDate().safeParse(null).success).toBe(false);
  });

  it("round-trips through JSON inside an object schema", () => {
    const schema = z.object({ at: zgokDate() });
    const json = JSON.stringify({ at: new Date(iso) });
    expect(schema.parse(JSON.parse(json))).toEqual({ at: new Date(iso) });
  });
});
