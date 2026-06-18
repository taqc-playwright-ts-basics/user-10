# Домашня робота. Тема 1: TypeScript Basics for Playwright

*Homework. Topic 1: TypeScript Basics for Playwright*

---

## Мета / Goal

**UA:** Освоїти базову механіку TypeScript — анотації типів, типізація
функцій, union/literal types, interface/type, типізація масивів об'єктів —
без запуску Playwright. Playwright тут лише мотивація для останнього
завдання: імпорту чи запуску фреймворку немає.

**EN:** Practice the core mechanics of TypeScript — type annotations,
function typing, union/literal types, interface/type, typing arrays of
objects — without running Playwright. Playwright is only the motivation for
the last task: there is no framework import or execution here.

---

## Як запустити перевірку / How to run the checks

```bash
npm install
npm test
```

`npm test` runs three checks in sequence:

| Step | Command | What it checks |
|---|---|---|
| 1 | `npm run test:unit` | Vitest runtime tests — actually call your functions and check the result |
| 2 | `npm run typecheck` | `tsc --noEmit` over `starter/` |
| 3 | `npm run typecheck:types-test` | confirms your types reject invalid values (e.g. `Browser` rejects `"safari"`), via `tests/types/` |

**UA:** Одразу після `npm install` команда покаже помилки — це нормально,
вони навмисні й знаходяться у `starter/`, доки ви їх не виправите
(детальніше — у шапці кожного файлу).

**EN:** Right after `npm install` the command will show errors — that's
expected, they're intentional and live in `starter/` until you fix them
(see the header of each file for details).

---

## Структура / Structure

```
starter/      ← files you edit            / файли, які ви редагуєте
tests/        ← runtime tests, do not edit / runtime-тести, не редагувати
tests/types/  ← type-level tests, do not edit / type-level тести, не редагувати
```

**UA:** У шапці кожного файлу — умова завдання українською та англійською,
TODO-коментарі вказують, що треба зробити.

**EN:** Each file's header has the task description in both Ukrainian and
English; TODO comments mark what needs to be done.

---

## Завдання / Tasks

| # | Файл / File | Що перевіряється / What's checked |
|---|---|---|
| 1. Анотації та виведення типів / Type annotations & inference | `starter/task-01-annotations.ts` | явні анотації типів; виправлення 3 навмисних помилок / explicit type annotations; fixing 3 intentional errors |
| 2. Типізація функцій / Function typing | `starter/task-02-functions.ts` | типи параметрів і return type; різниця optional (`?`) vs default value / parameter and return types; optional (`?`) vs default value |
| 3. Union та literal types | `starter/task-03-unions.ts` | union literal type `Browser`; звуження типу через `typeof` / narrowing via `typeof` |
| 4. interface / type | `starter/task-04-interfaces.ts` | структура з 5 полями (опціональне поле + union для статусу) / a 5-field structure (optional field + status union) |
| 5. Місток до Playwright / Bridge to Playwright | `starter/task-05-test-data.ts` | типізація масиву тестових даних; функція `countByStatus` / typing an array of test data; the `countByStatus` function |

---

## Підказки від Claude / Hints from Claude

**UA:** У репозиторії є файл `CLAUDE.md` — він налаштовує Claude Code як
тьютора, який пояснює помилки компілятора й підказує напрямок, але не пише
розв'язання за вас.

**EN:** The repo includes a `CLAUDE.md` file that configures Claude Code as
a tutor — it explains compiler errors and points you in the right direction,
but it will not write the solution for you.

---

## Критерії здачі / Pass criteria

- `npm test` проходить без помилок (усі три перевірки) / `npm test` passes
  with no errors (all three checks);
- усі TODO в `starter/` замінено на код / every TODO in `starter/` is
  replaced with code.
