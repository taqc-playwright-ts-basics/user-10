import { launch } from "../../starter/task-03-unions";

// @ts-expect-error — Browser має дозволяти лише "chromium" | "firefox" | "webkit"
launch("safari");
