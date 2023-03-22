// name: .test.ts

//
import { describe, test, expect } from "@jest/globals";

import { sumNumbers } from "../src/sum/sum";

// test
// string: name of the test
// function
// test suits => tests
describe("sum function", () => {
  // test: string +function
  // it
  test("add 1 + 3 to equal to 4", () => {
    const result = sumNumbers(1, 3);
    // matcherL toBe(4)
    expect(result).toBe(4);
  });
});
