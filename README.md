# 🎉 Party Games

Party Games is a web-based collection of social games designed to be played together with friends.

The project starts with **Impostor**, a simple local party game, and will gradually evolve into a platform containing multiple party games.

This project is also being used as a learning environment to practice modern web development, collaboration, Git, and real-world development workflows.

## 🎮 Games

### Impostor

One player is secretly selected as the impostor while the other players receive the same word.

Players must discover who the impostor is without revealing the secret word.

> 🚧 Currently in development.

More games will be added as the project evolves.

## 🛠️ Tech Stack

- TypeScript
- React
- Vite

## 🚀 Getting Started

### Requirements

Make sure you have installed:

- Git
- Node.js 24

Recommend using **NVM (Node Version Manager)** to install and manage Node.js versions.

**macOS / Linux**

https://github.com/nvm-sh/nvm

**Windows**

https://github.com/coreybutler/nvm-windows

After installing NVM, install and use Node.js 24:

```bash
nvm install 24
nvm use 24
```

You can verify your installation with:

```bash
node --version
npm --version
```

The supported Node.js version is also defined in the `engines` field of `package.json`.

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd party-games
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL in your terminal.

## 📜 Available Scripts

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Automatically fix supported ESLint problems:

```bash
npm run lint:fix
```

Format the project with Prettier:

```bash
npm run format
```

Check formatting without changing files:

```bash
npm run format:check
```

## 📚 Documentation

Project documentation can be found in [`docs/`](docs/):

- [`Git Workflow`](docs/git-workflow.md) — Git, branches, commits, rebases, and Pull Requests.
- [`Coding Guidelines`](docs/coding-guidelines.md) — coding conventions used in the project.
- [`Learning Resources`](docs/learning-resources.md) — recommended resources for learning the technologies used by the project.

If you want to contribute, read [`CONTRIBUTING.md`](CONTRIBUTING.md).

## 📄 License

This project is licensed under the terms described in the [`LICENSE`](LICENSE) file.
