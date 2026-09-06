# Coding Guidelines

This document defines the coding conventions used in the Party Games project.

The goal of these guidelines is to keep the codebase **consistent, readable, and easy to maintain**. These rules should be followed by everyone contributing to the project.

Some conventions may evolve as the project grows.

---

## 1. General Principles

### Keep it simple

Prefer simple and readable solutions over clever or unnecessarily complex ones.

Code is read much more often than it is written.

```ts
// Avoid
const isAllowed = age >= 18 ? true : false;

// Prefer
const isAllowed = age >= 18;
```

### Write clean code

Use clear names and structure your code so that another developer can understand what it does without having to decode it.

Avoid unnecessary abbreviations.

```ts
// Avoid
const usrCnt = 5;

// Prefer
const userCount = 5;
```

### Avoid unnecessary duplication

If the same logic starts appearing in multiple places, consider extracting it into a reusable function or component.

However, do not create abstractions before they are actually needed.

---

## 2. Naming Conventions

Use descriptive names that clearly communicate the purpose of variables, functions, components, and files.

### Variables and functions

Use `camelCase`.

```ts
const playerName = "John";
const maximumPlayers = 8;

function calculateScore() {
  // ...
}
```

Boolean variables should usually read like a question.

Prefer prefixes such as:

- `is`
- `has`
- `can`
- `should`

```ts
const isActive = true;
const hasWinner = false;
const canStartGame = true;
```

### Constants

Use `UPPER_SNAKE_CASE` for values that are true application-level constants.

```ts
const MAX_PLAYERS = 10;
const DEFAULT_ROUND_TIME = 60;
```

Regular variables declared with `const` should still use `camelCase`.

```ts
const playerName = "John";
```

### React components

Use `PascalCase`.

```tsx
function PlayerCard() {
  return <div>Player</div>;
}
```

Component filenames should also use `PascalCase`.

```text
PlayerCard.tsx
GameLobby.tsx
StartGameButton.tsx
```

### Types and interfaces

Use `PascalCase`.

```ts
type Player = {
  id: string;
  name: string;
};

interface GameSettings {
  maxPlayers: number;
  roundTime: number;
}
```

---

## 3. Variables

Prefer `const` by default.

Use `let` only when the variable needs to be reassigned.

```ts
const playerName = "John";

let score = 0;
score += 10;
```

---

## 4. Functions

Functions should have a clear purpose and descriptive name.

```ts
// Avoid
function process() {
  // ...
}

// Prefer
function calculatePlayerScore() {
  // ...
}
```

Whenever possible, keep functions focused on a single responsibility.

If a function becomes difficult to understand, consider splitting it into smaller functions.

Avoid deeply nested logic.

```ts
// Avoid
if (player) {
  if (player.isActive) {
    if (player.score > 10) {
      // ...
    }
  }
}
```

Prefer early returns when they make the code easier to read.

```ts
if (!player) return;
if (!player.isActive) return;
if (player.score <= 10) return;

// ...
```

---

## 5. TypeScript

Take advantage of TypeScript's type system.

Avoid using `any` unless there is a strong reason for it.

```ts
// Avoid
function greetPlayer(player: any) {
  return `Hello ${player.name}`;
}

// Prefer
type Player = {
  name: string;
};

function greetPlayer(player: Player) {
  return `Hello ${player.name}`;
}
```

---

## 6. React

Use functional components.

```tsx
function PlayerCard() {
  return <div>Player</div>;
}
```

Keep components focused on a clear responsibility.

If a component becomes too large or handles multiple unrelated responsibilities, consider splitting it into smaller components.

Do not extract components only to reduce the number of lines in a file. Extract them when doing so improves readability, reuse, or responsibility separation.

Keep state as close as possible to where it is used.

Avoid unnecessary state when a value can be calculated from existing data.

```tsx
// Avoid
const [firstName, setFirstName] = useState("John");
const [lastName, setLastName] = useState("Doe");
const [fullName, setFullName] = useState("John Doe");

// Prefer
const [firstName, setFirstName] = useState("John");
const [lastName, setLastName] = useState("Doe");

const fullName = `${firstName} ${lastName}`;
```

---

## 7. Comments

Comments should explain **why** something is done, not simply repeat what the code already says.

```ts
// Avoid

// Increase score by 10
score += 10;
```

Useful comments provide context that cannot easily be understood from the code itself.

```ts
// Keep the previous player order so reconnecting players
// return to the same position in the lobby.
restorePlayerOrder();
```

Prefer clear code over comments whenever possible.

Do not keep commented-out code in the repository. Git already keeps the history of previous versions.

---

## 8. Files and Folders

Use meaningful names for files and folders.

Avoid generic names such as:

```text
stuff.ts
helpers2.ts
test123.ts
component-new.tsx
```

Prefer names that describe their responsibility.

```text
calculateScore.ts
PlayerCard.tsx
gameRules.ts
```

Keep related files close to each other when it improves organization.

The project structure may evolve as the application grows. Do not introduce new architectural patterns without discussing them first.

---

## 9. Imports

Keep imports organized and remove unused imports.

Do not import modules that are not being used.

ESLint should catch many of these issues automatically.

---

## 10. Formatting

Code formatting is handled by **Prettier**.

Do not manually format code differently from the project's Prettier configuration.

Before committing, formatting can be checked with:

```bash
npm run format:check
```

To automatically format the project:

```bash
npm run format
```

The project currently follows these main formatting rules:

- Semicolons are required.
- Double quotes are used.
- Maximum line width is 100 characters.
- Trailing commas are used where supported.

The Prettier configuration is the source of truth for formatting rules.

---

## 11. Linting

The project uses **ESLint** to detect common problems and enforce code quality rules.

Before opening a Pull Request, run:

```bash
npm run lint
```

Some problems can be fixed automatically with:

```bash
npm run lint:fix
```

Do not disable ESLint rules just to make an error disappear.

If a rule needs to be disabled or changed, understand why the rule exists and discuss the change first.

---

## 12. Before Submitting Code

Before opening a Pull Request:

1. Make sure the application works as expected.
2. Remove temporary code, debug logs, and commented-out code.
3. Run the formatter.
4. Run ESLint.
5. Make sure the project builds successfully.

```bash
npm run format
npm run lint
npm run build
```

Fix any errors before submitting the Pull Request.

---

## 13. Keep the Guidelines Updated

These guidelines are not meant to define every possible coding decision.

As the project grows, new conventions may become necessary.

When a recurring pattern or problem appears, we can update this document so that the decision becomes part of the project's shared conventions.
