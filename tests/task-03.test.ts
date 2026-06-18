import { describe, it, expect } from "vitest";
import { launch, describeValue } from "../starter/task-03-unions";

describe("Task 3: union and literal types", () => {
  it("launch builds a message for each browser", () => {
    expect(launch("chromium")).toBe("Launching chromium...");
    expect(launch("firefox")).toBe("Launching firefox...");
    expect(launch("webkit")).toBe("Launching webkit...");
  });

  it("describeValue distinguishes between a number and a string", () => {
    expect(describeValue(42)).toBe("Number: 42");
    expect(describeValue("smoke")).toBe("String: smoke");
  });
});
