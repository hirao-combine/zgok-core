import { z } from "zod";
/**
 * Defines a Zod schema for date validation. It preprocesses the input:
 * - If the input is a string or a Date instance, it converts the input to a Date object.
 * - Returns the input as is if it does not match the above conditions.
 * Then, it validates whether the processed input is a valid Date object.
 */
export declare const zgokDate: () => z.ZodEffects<z.ZodDate, Date, unknown>;
//# sourceMappingURL=utils.d.ts.map