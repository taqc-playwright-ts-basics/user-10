/**
 * Завдання 1 / Task 1: Анотації та виведення типів / Type Annotations and Inference
 *
 * UA:
 * 1. Додайте явні анотації типів до змінних, позначених TODO нижче.
 * 2. У коді є навмисні помилки типів — знайдіть їх і виправте значення
 *    так, щоб тип відповідав анотації.
 *
 * EN:
 * 1. Add explicit type annotations to the variables marked with TODO below.
 * 2. There are intentional type errors in the code — find them and fix the
 *    values so that the assigned value matches the declared type.
 *
 * Критерії / Criteria:
 * - усі змінні мають коректний тип, код проходить `npm run typecheck` без помилок
 * - all variables have a correct type, code passes `npm run typecheck` with no errors
 * - усі навмисні помилки знайдено й виправлено / all intentional errors are found and fixed
 */

// TODO: додай явну анотацію типу / add an explicit type annotation
export let testCaseTitle = "Login with valid credentials";

// TODO: додай явну анотацію типу / add an explicit type annotation
export let retryCount = 3;

// TODO: додай явну анотацію типу / add an explicit type annotation
export let isAutomated = true;

// Навмисна помилка / Intentional error:
export let timeoutMs: number = "5000";

// Навмисна помилка / Intentional error:
export let browserName: string = 404;

// Навмисна помилка / Intentional error:
export let isSkipped: boolean = "false";

export const tags = ["smoke", "regression"];
export const maxUsers = 50;


console.log(typeof testCaseTitle, "→", testCaseTitle);
console.log(typeof retryCount,    "→", retryCount);
console.log(typeof isAutomated,   "→", isAutomated);
console.log(typeof tags,          "→", tags);
console.log(typeof maxUsers,      "→", maxUsers);

export {};
