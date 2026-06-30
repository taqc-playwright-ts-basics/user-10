/**
 * Завдання 5 / Task 5: Місток до Playwright — типізовані тестові дані
 *                      / Bridge to Playwright — typed test data
 *
 * UA:
 * 1. Додайте явний тип до масиву testCases нижче. Кожен елемент має числовий
 *    ідентифікатор, назву та статус, який може приймати лише три конкретні
 *    значення: passed, failed, skipped.
 * 2. Реалізуйте функцію countByStatus, яка приймає масив тест-кейсів і статус,
 *    та повертає кількість кейсів із цим статусом.
 *
 * Примітка: Playwright тут не імпортується — це підготовка типізованих даних
 * для наступних тем курсу.
 *
 * EN:
 * 1. Add an explicit type to the testCases array below. Each element has a
 *    numeric identifier, a name, and a status that can only be one of three
 *    specific values: passed, failed, skipped.
 * 2. Implement the countByStatus function, which takes an array of test cases
 *    and a status, and returns the count of cases with that status.
 *
 * Note: Playwright is not imported here — this is preparation of typed data
 * for the upcoming topics in the course.
 *
 * Критерії / Criteria:
 * - testCases має явний або коректно виведений тип, без any
 *   / testCases has an explicit or correctly inferred type, no any
 * - countByStatus має типи параметрів і тип повернення, повертає правильний результат
 *   / countByStatus has typed parameters and return type, returns the correct result
 */

import { TestCase } from "./task-04-interfaces";

// TODO: додай тип / add a type
export const testCases: TestCase[] = [
  { id: 1, name: "Login with valid credentials", status: "passed", tags: ["auth"] },
  { id: 2, name: "Login with invalid password", status: "failed", tags: ["auth"] },
  { id: 3, name: "Logout from dashboard", status: "passed", tags: ["smoke"] },
  { id: 4, name: "Reset password flow", status: "skipped", tags: ["regression"] },
];

  
export function countByStatus(
  // TODO: реалізуй / implement
  cases: TestCase[],
  status: "passed" | "failed" | "skipped"
): number {
  return cases.filter(c => c.status === status).length;
}
export {};

