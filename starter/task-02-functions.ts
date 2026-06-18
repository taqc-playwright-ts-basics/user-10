/**
 * Завдання 2 / Task 2: Типізація функцій / Function Types
 *
 * UA:
 * 1. Додайте явні типи параметрів і тип повернення до функції formatTestName.
 * 2. Реалізуйте функцію sumDurations, яка приймає масив тривалостей тестів
 *    (у мілісекундах) і повертає їхню суму.
 * 3. Реалізуйте дві версії функції, що формують рядок повідомлення про retries
 *    у форматі "<name> retries: <N>":
 *    - withOptionalRetries — параметр retries є опціональним; якщо його не
 *      передано, функція має використати 0 у повідомленні.
 *    - withDefaultRetries — параметр retries має значення за замовчуванням 1,
 *      коли аргумент не передано.
 *
 * EN:
 * 1. Add explicit parameter types and return type to the formatTestName function.
 * 2. Implement the sumDurations function, which takes an array of test durations
 *    (in milliseconds) and returns their total sum.
 * 3. Implement two versions of a function that produces a retry message string
 *    in the format "<name> retries: <N>":
 *    - withOptionalRetries — the retries parameter is optional; if not provided,
 *      the function should use 0 in the message.
 *    - withDefaultRetries — the retries parameter has a default value of 1 when
 *      no argument is provided.
 *
 * Критерії / Criteria:
 * - formatTestName має явні типи параметрів і return type, без any
 *   / formatTestName has explicit parameter and return types, no any
 * - sumDurations коректно типізована і повертає правильну суму
 *   / sumDurations is correctly typed and returns the correct sum
 * - реалізована різниця між optional і default-value параметром
 *   / the difference between an optional and a default-value parameter is implemented
 */

// TODO: додай типи параметрів і тип повернення / add parameter types and return type
export function formatTestName(name, suite) {
  return `[${suite}] ${name}`;
}

export function sumDurations(durations: number[]): number {
  // TODO: реалізуй / implement
  return 0;
}

export function withOptionalRetries(name: string, retries?: number): string {
  // TODO: реалізуй / implement
  return "";
}

export function withDefaultRetries(name: string, retries: number = 1): string {
  // TODO: реалізуй / implement
  return "";
}

export {};
