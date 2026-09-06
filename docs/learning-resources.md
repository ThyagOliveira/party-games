# Learning Resources

This document contains recommended resources for learning the technologies and concepts used in the Party Games project.

You are **not expected to learn everything before starting the project**.

Learn things as you need them.

When you receive a task involving something you do not know yet, use this document as a starting point, learn the necessary concepts, and then try to apply them to the project.

---

## 1. Git & GitHub

Git is the version control system used by the project, while GitHub hosts the repository and helps us collaborate.

### Start Here

**GitHub — Introduction to Git**

https://docs.github.com/en/get-started/using-git/about-git

A short introduction to what Git is and why it is used.

**GitHub — Set up Git**

https://docs.github.com/en/get-started/git-basics/set-up-git

How to install and configure Git.

**GitHub Skills**

https://skills.github.com/

Interactive exercises created by GitHub for learning GitHub workflows.

### Useful Reference

**Git Documentation**

https://git-scm.com/doc

Official Git documentation and command reference.

For the Git workflow used specifically in this project, read:

```text
docs/git-workflow.md
```

---

## 2. HTML

HTML defines the structure and content of a web page.

Before worrying about React components, it is important to understand the basic elements that make up a page.

### Learn & Practice

**W3Schools — HTML Tutorial**

https://www.w3schools.com/html/

Beginner-friendly lessons with simple examples and interactive exercises that you can run directly in the browser.

**MDN — HTML**

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content

A more detailed guide to HTML and web standards.

Focus initially on:

- HTML document structure
- headings and paragraphs
- links
- images
- lists
- buttons
- forms and inputs
- semantic HTML

### Reference

**MDN — HTML Elements**

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements

Use this when you need to understand a specific HTML element.

---

## 3. CSS

CSS controls how HTML elements are displayed.

It is responsible for things such as layout, spacing, colors, typography, and responsive design.

### Learn & Practice

**W3Schools — CSS Tutorial**

https://www.w3schools.com/css/

Beginner-friendly lessons with examples that can be edited and tested directly in the browser.

**MDN — CSS Styling Basics**

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics

A more detailed guide to the fundamentals of CSS.

Focus initially on:

- selectors
- colors
- units
- margin and padding
- the box model
- display
- positioning
- Flexbox
- Grid

### Important Topics

**MDN — Box Model**

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model

**MDN — Flexbox**

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox

**MDN — CSS Grid**

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids

Do not try to memorize every CSS property.

Learn the fundamentals and use the documentation as a reference when you need something.

---

## 4. JavaScript

JavaScript provides the programming logic used by web applications.

### Learn & Practice

**W3Schools — JavaScript Tutorial**

https://www.w3schools.com/js/

A practical introduction to JavaScript with small examples and interactive exercises.

**MDN — JavaScript Guide**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

A more detailed guide to JavaScript and its core concepts.

Important topics for this project include:

- variables (`const`, `let`, and `var`)
- primitive types
- arrays
- objects
- functions
- arrow functions
- conditionals
- loops
- destructuring
- spread syntax
- modules (`import` / `export`)
- promises
- `async` / `await`

### Reference

**MDN — JavaScript Reference**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

Use this when you need detailed information about a specific JavaScript feature.

---

## 5. TypeScript

TypeScript extends JavaScript by adding static typing.

The Party Games project uses TypeScript instead of plain JavaScript.

You do not need to master JavaScript before starting TypeScript, but understanding the JavaScript fundamentals is important.

### Start Here

**TypeScript — The Basics**

https://www.typescriptlang.org/docs/handbook/2/basic-types.html

Then continue with:

**TypeScript — Everyday Types**

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

Important topics include:

- type annotations
- type inference
- object types
- arrays
- union types
- type aliases
- interfaces
- functions
- optional properties
- narrowing

### Reference

**TypeScript Handbook**

https://www.typescriptlang.org/docs/handbook/intro.html

Do not try to learn the entire TypeScript type system at once.

Start with the basic types and learn more advanced features when the project requires them.

---

## 6. React

React is the library used to build the user interface of Party Games.

Before starting React, you should be comfortable with the basic concepts of HTML, CSS, JavaScript, and TypeScript.

### Start Here

**React — Quick Start**

https://react.dev/learn

Start with the sections covering:

- components
- JSX
- displaying data
- conditional rendering
- rendering lists
- events
- state

After understanding the basics, continue through the React Learn documentation.

### Important Concepts

As the project grows, you will encounter concepts such as:

- props
- state
- hooks
- sharing state between components
- forms
- component composition

Learn these concepts when they become necessary for your tasks.

### Reference

**React Reference**

https://react.dev/reference/react

Use the reference when you need details about a specific React API or Hook.

---

## 7. Vite

Vite is the build tool and development server used by the project.

You will interact with it mostly through the project's npm scripts.

### Documentation

**Vite Guide**

https://vite.dev/guide/

You do not need to study Vite in depth before contributing.

Learn more about it when you need to understand or modify the project's build configuration.

---

## 8. npm

npm is used to manage the project's JavaScript dependencies and scripts.

### Documentation

**npm Documentation**

https://docs.npmjs.com/

Some commands you will frequently use in this project:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run format
```

You do not need to memorize npm commands. Learn the basic workflow and use the documentation when necessary.

---

## 9. ESLint & Prettier

The project uses ESLint and Prettier to help maintain consistent and clean code.

### ESLint

**ESLint Documentation**

https://eslint.org/docs/latest/

ESLint analyzes the code and detects potential problems.

### Prettier

**Prettier Documentation**

https://prettier.io/docs/

Prettier automatically formats the code according to the project's formatting configuration.

In most cases, you will not need to configure these tools. You mainly need to understand why they are used and how to run them.

For the coding conventions used by the project, read:

```text
docs/coding-guidelines.md
```

---

## 10. Browser Developer Tools

Modern browsers provide development tools that are extremely useful when building web applications.

Learn how to use at least:

- Elements
- Console
- Network
- Sources

### Chrome DevTools

**Chrome DevTools Documentation**

https://developer.chrome.com/docs/devtools/

The browser console will become one of your most useful tools when debugging frontend problems.

---

## 11. How to Learn During the Project

You do not need to understand an entire technology before using it.

A good workflow is:

```text id="jv6d9e"
Receive a task
      ↓
Identify what you do not know
      ↓
Read the relevant documentation
      ↓
Try a small example
      ↓
Apply it to the task
      ↓
Ask questions when necessary
```

When learning something new:

1. Try to understand **what problem the concept solves**.
2. Read the basic documentation.
3. Experiment with it.
4. Try implementing the task yourself.
5. If you get stuck, identify exactly what you do not understand.
6. Ask for help with that specific problem.

Making mistakes is part of the process.

The goal is not only to finish the task, but also to understand the code you are writing.

---

## 12. Additional Resources

The resources in this document are intentionally limited.

Official documentation should usually be the primary reference, but tutorials and interactive learning resources can be extremely useful when learning a new concept.

A useful approach is:

- **W3Schools** — learn the basics and experiment with simple examples.
- **MDN** — understand web technologies in more depth and use as a reference.
- **Official documentation** — learn how the specific tools and libraries used by the project work.

Other tutorials, videos, articles, and courses can also be useful.

New resources can be added here as we discover material that is particularly helpful for the project.

Avoid adding resources just because they exist.

A resource should be added when it provides real value to someone learning or working with the technologies used by Party Games.
