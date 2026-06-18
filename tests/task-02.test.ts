import { describe, it, expect } from "vitest";
import {
  formatTestName,
  sumDurations,
  withOptionalRetries,
  withDefaultRetries,
} from "../starter/task-02-functions";

describe("Task 2: function typing", () => {
  it("formatTestName builds a string in [suite] name format", () => {
    expect(formatTestName("login test", "auth")).toBe("[auth] login test");
  });

  it("sumDurations returns the sum of durations", () => {
    expect(sumDurations([100, 200, 300])).toBe(600);
    expect(sumDurations([])).toBe(0);
  });

  it("withOptionalRetries uses 0 when retries is not provided", () => {
    expect(withOptionalRetries("test")).toBe("test retries: 0");
    expect(withOptionalRetries("test", 3)).toBe("test retries: 3");
  });

  it("withDefaultRetries uses default value of 1", () => {
    expect(withDefaultRetries("test")).toBe("test retries: 1");
    expect(withDefaultRetries("test", 5)).toBe("test retries: 5");
  });
});
