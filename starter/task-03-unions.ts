/**
 * Завдання 3 / Task 3: Union та literal types
 *
 * UA:
 * 1. Визначте тип Browser, який дозволяє лише три конкретні рядкові значення:
 *    "chromium", "firefox" та "webkit".
 * 2. Реалізуйте функцію launch, яка приймає значення типу Browser і повертає
 *    рядок у форматі "Launching <browser>...".
 * 3. Реалізуйте функцію describeValue, яка приймає значення, що може бути або
 *    рядком, або числом, і повертає:
 *    - "Number: <value>", якщо передано число
 *    - "String: <value>", якщо передано рядок
 *
 * EN:
 * 1. Define a type Browser that allows only three specific string values:
 *    "chromium", "firefox", and "webkit".
 * 2. Implement the launch function, which accepts a Browser value and returns
 *    a string in the format "Launching <browser>...".
 * 3. Implement the describeValue function, which accepts a value that can be
 *    either a string or a number, and returns:
 *    - "Number: <value>" if a number is passed
 *    - "String: <value>" if a string is passed
 *
 * Критерії / Criteria:
 * - Browser обмежує лише три конкретні значення, не довільний рядок
 *   / Browser restricts to exactly three values, not an arbitrary string
 * - launch відхиляє значення поза типом Browser
 *   / launch rejects values outside Browser
 * - describeValue розрізняє рядок і число без використання any
 *   / describeValue distinguishes string from number without using any
 */

export type Browser = string; // TODO: звузь тип / narrow the type

export function launch(browser: Browser): string {
  // TODO: реалізуй / implement
  return "";
}

// launch("safari"); // TypeError: "safari" is not assignable to type Browser

export function describeValue(value: string | number): string {
  // TODO: реалізуй / implement
  return "";
}

export {};
