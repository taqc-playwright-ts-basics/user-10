import { describe, it, expect } from "vitest";
import { firstCase, secondCase } from "../starter/task-04-interfaces";

describe("Task 4: interface / type TestCase", () => {
  it("firstCase has all required fields and no owner", () => {
    expect(typeof firstCase.id).toBe("number");
    expect(typeof firstCase.name).toBe("string");
    expect(["passed", "failed", "skipped"]).toContain(firstCase.status);
    expect(Array.isArray(firstCase.tags)).toBe(true);
    expect(firstCase.owner).toBeUndefined();
  });

  it("secondCase has an owner field", () => {
    expect(typeof secondCase.id).toBe("number");
    expect(typeof secondCase.owner).toBe("string");
  });
});
