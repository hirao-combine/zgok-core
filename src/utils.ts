import { z } from "zod";

/**
 * Defines a Zod schema for date validation. It preprocesses the input:
 * - If the input is a string or a Date instance, it converts the input to a Date object.
 * - Returns the input as is if it does not match the above conditions.
 * Then, it validates whether the processed input is a valid Date object.
 */
export const zgokDate = () =>
  z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) {
      return new Date(arg);
    }
    return arg;
  }, z.date());
