import { describe, it, expect } from "vitest";
import {
  testCaseTitle,
  retryCount,
  isAutomated,
  timeoutMs,
  browserName,
  isSkipped,
  tags,
  maxUsers,
} from "../starter/task-01-annotations";

describe("Task 1: type annotations and type inference", () => {
  it("testCaseTitle is a string", () => {
    expect(typeof testCaseTitle).toBe("string");
  });

  it("retryCount is a number", () => {
    expect(typeof retryCount).toBe("number");
  });

  it("isAutomated is a boolean", () => {
    expect(typeof isAutomated).toBe("boolean");
  });

  it("timeoutMs is fixed to number 5000", () => {
    expect(typeof timeoutMs).toBe("number");
    expect(timeoutMs).toBe(5000);
  });

  it("browserName is fixed to a string", () => {
    expect(typeof browserName).toBe("string");
  });

  it("isSkipped is fixed to a boolean", () => {
    expect(typeof isSkipped).toBe("boolean");
  });

  it("tags is an array of strings", () => {
    expect(Array.isArray(tags)).toBe(true);
    tags.forEach((tag) => expect(typeof tag).toBe("string"));
  });

  it("maxUsers equals 50", () => {
    expect(maxUsers).toBe(50);
  });
});
