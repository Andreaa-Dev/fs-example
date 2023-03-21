import { sumNumbers } from "../src/sum/sum";
import { describe, test, expect } from "@jest/globals";

describe("sum function", () => {
  // Define a test case using the test function
  test("adds 1 + 2 to equal 3", () => {
    // Call the sum function with arguments
    const result = sumNumbers(1, 2);

    // Use the expect function to make an assertion
    expect(result).toBe(3);
  });

  // Define another test case
  test("adds 0 + 0 to equal 0", () => {
    const result = sumNumbers(0, 0);
    expect(result).toBe(0);
  });

  // Add more test cases as needed
});
