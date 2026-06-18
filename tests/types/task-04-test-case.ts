import type { TestCase } from "../../starter/task-04-interfaces";

const base = { id: 1, name: "x", tags: [] as string[] };

// @ts-expect-error — status має приймати лише "passed" | "failed" | "skipped"
const invalidStatus: TestCase = { ...base, status: "blocked" };
