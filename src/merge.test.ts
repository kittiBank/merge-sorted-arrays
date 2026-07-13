import { merge } from "./merge";

describe("merge function", () => {
  // Case: simple sorted arrays
  test("should merge three simple sorted arrays", () => {
    const result = merge([5, 3, 1], [2, 4], [0, 6]);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  // Case: single arrays
  test("should handle single element arrays", () => {
    const result = merge([5], [3], [1]);
    expect(result).toEqual([1, 3, 5]);
  });

  // Case: negative numbers
  test("should handle empty arrays", () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  // Case: positive and negative numbers
  test("should handle when one array is empty", () => {
    const result = merge([9, 6, 3], [1, 5], []);
    expect(result).toEqual([1, 3, 5, 6, 9]);
  });

  // Case: duplicate values
  test("should handle duplicate values", () => {
    const result = merge([5, 3, 1], [2, 3], [1, 3]);
    expect(result).toEqual([1, 1, 2, 3, 3, 3, 5]);
  });
});
