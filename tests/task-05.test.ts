import { describe, it, expect } from "vitest";
import { testCases, countByStatus } from "../starter/task-05-test-data";

describe("Task 5: typed test data", () => {
  it("countByStatus correctly counts cases by status", () => {
    expect(countByStatus(testCases, "passed")).toBe(2);
    expect(countByStatus(testCases, "failed")).toBe(1);
    expect(countByStatus(testCases, "skipped")).toBe(1);
  });
});
