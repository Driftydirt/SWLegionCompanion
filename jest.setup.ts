import { expect } from "@jest/globals";
export function toBeWithin(recieved: number, expected: number, range: number) {
  const pass = Math.abs(expected - recieved) <= range;
  return {
    pass: pass,
    message: () =>
      `Actual value is outside of expected range\nExpected: ${expected}\n Actual: ${recieved}\n Difference: ${
        expected - recieved
      }`,
  };
}
expect.extend({
  toBeWithin,
});
expect.extend({
  toBeWithinRange(actual, min, max) {
    if (typeof actual !== "number") {
      throw new Error("Actual value must be a number");
    }
    const pass = actual >= min && actual <= max;
    return {
      pass,
      message: pass
        ? () => `expected ${actual} not to be within range (${min}..${max})`
        : () => `expected ${actual} to be within range (${min}..${max})`,
    };
  },
});
