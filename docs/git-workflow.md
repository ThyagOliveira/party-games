# Git Workflow

This document describes the Git and GitHub workflow used in the Party Games project.

The goal is to keep development organized, make changes easy to review, and ensure that everyone follows the same process when working on a task.

---

## 1. Development Workflow

Development work is organized through the **GitHub Project board**.

The standard workflow is:

```text
Task → Branch → Code → Commit → Push → Pull Request → Review → Merge
```

On the GitHub Project board, tasks move through:

```text
Backlog → Ready → In Progress → QA → Done
```

### What each status means

- **Backlog** — Work planned for the future.
- **Ready** — The task is ready to be worked on.
- **In Progress** — Someone is currently working on the task.
- **QA** — The implementation is finished and waiting for review/testing.
- **Done** — The work has been reviewed, merged, and completed.

Only start working on tasks that are in **Ready**.

---

## 2. Starting a Task

Before writing code:

1. Choose a task from **Ready**.
2. Move the task to **In Progress**.
3. Make sure your local `develop` branch is up to date.
4. Create a new branch from `develop`.

```bash
git switch develop
git pull
git switch -c <branch-name>
```

Do not develop directly on `main` or `develop`.

---

## 3. Branches

The project uses two permanent branches:

### `main`

Contains stable code.

Changes should not be developed directly on this branch.

### `develop`

Contains the latest development version of the project.

New development branches should normally be created from `develop`.

### Working branches

Use a short prefix that describes the type of change:

```text
feature/
fix/
docs/
refactor/
```

Examples:

```text
feature/player-setup
feature/random-impostor
fix/player-name-validation
docs/update-git-workflow
refactor/game-setup
```

Keep branch names:

- lowercase;
- short and descriptive;
- separated with hyphens.

### Branch lifecycle

Branches should be temporary.

After the Pull Request is merged, the working branch can be deleted.

---

## 4. Commits

Commits should represent meaningful steps in the implementation.

Avoid creating one huge commit containing unrelated changes.

At the same time, you do not need to create a commit for every small edit.

### Commit messages

Use the following format:

```text
<type>: <description>
```

Common types:

```text
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
refactor: Code restructuring without changing behavior
test:     Adding or updating tests
chore:    Maintenance or tooling changes
```

Examples:

```text
feat: add player name input
feat: update random impostor selection
fix: prevent empty player names
docs: update coding guidelines
refactor: simplify player validation
test: add player validation tests
chore: update eslint configuration
```

Keep commit descriptions short and clear.

Use the imperative style when possible:

```text
feat: add player validation
```

instead of:

```text
feat: added player validation
```

or:

```text
feat: adding player validation
```

---

## 5. Before Pushing

Before pushing your changes, make sure the code is formatted and passes the project checks.

Run:

```bash
npm run format
npm run lint
npm run build
```

Fix any errors before opening a Pull Request.

Then push your branch:

```bash
git push origin <branch-name>
```

---

## 6. Pull Requests

When the implementation is ready:

1. Push your latest changes.
2. Open a Pull Request on GitHub.
3. Set the target branch to `develop`.
4. Fill out the Pull Request template.
5. Move the task to **QA**.

A Pull Request should contain only changes related to its task.

Avoid mixing unrelated fixes or features into the same Pull Request.

### Pull Request title

Use a clear title that describes the change.

Examples:

```text
Add player setup screen
Implement random impostor selection
Fix empty player name validation
```

---

## 7. Code Review

Code should be reviewed before it is merged.

During review, changes may be requested.

If changes are requested:

1. Make the changes on the same branch.
2. Commit them.
3. Push the branch again.

```bash
git add .
git commit -m "fix: address player validation review"
git push
```

The Pull Request will update automatically.

Do not create another Pull Request for review changes.

---

## 8. Merging

Once the Pull Request has been approved and the required checks pass, it can be merged into `develop`.

After the merge:

1. Delete the working branch.
2. Move the task to **Done**.
3. Update your local repository.

```bash
git switch develop
git pull origin develop
```

You are now ready to start another task.

---

## 9. Keeping Your Branch Updated

While you are working, other Pull Requests may be merged into `develop`.

If your branch needs the latest changes:

```bash
git switch develop
git pull origin develop

git switch <your-branch>
git rebase develop
```

Rebase moves your branch commits on top of the latest develop, keeping the history linear.

If Git reports conflicts, resolve them carefully before continuing.

If Git reports conflicts, resolve them before continuing the rebase.

After resolving a conflict:

```bash
git add <file>
git rebase --continue
```

Repeat this process until the rebase is complete.

If you need to cancel the rebase and return to the state before it started:

git rebase --abort

Do not guess when resolving a conflict. If you are unsure which changes should be kept, ask for help.

Pushing after a rebase

A rebase rewrites commit history.

If the branch was already pushed before the rebase, a normal git push may be rejected.

Use:

```bash
git push origin <your-branch> --force-with-lease

Prefer --force-with-lease over --force.
```

--force-with-lease adds an extra safety check and helps avoid accidentally overwriting remote changes made by someone else.

---

## 10. Rebase Conflicts

A conflict can happen during a rebase when Git cannot automatically apply one of your commits on top of the latest develop.

Git will mark the conflicting sections:

```text
<<<<<<< HEAD
const maxPlayers = 10;
=======
const maxPlayers = 8;
>>>>>>>
```

During a rebase:

HEAD usually represents the version from the branch you are rebasing onto.
The other side represents the commit Git is currently trying to apply.

Your job is to decide what the final code should look like.

For example:

```ts
const maxPlayers = 10;
```

After resolving the file:

```bash
git add <file>
git rebase --continue
```

If another conflict appears, resolve it and continue again.

To cancel the entire rebase:

```bash
git rebase --abort
```

Important: Never remove conflict markers without understanding both versions of the code.

VS Code can also show actions such as Accept Current Change, Accept Incoming Change, or Accept Both Changes. During a rebase, these labels can sometimes be confusing, so always read the actual code before choosing an option.

If you are unsure which changes should be kept, ask for help.

Then continue working normally.

---

## 11. Useful Git Commands

Check the current repository status:

```bash
git status
```

See your branches:

```bash
git branch
```

Switch branches:

```bash
git switch <branch-name>
```

Create and switch to a new branch:

```bash
git switch -c <branch-name>
```

See commit history:

```bash
git log --oneline
```

See your changes:

```bash
git diff
```

Stage changes:

```bash
git add <file>
```

Stage all changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "feat: add player setup"
```

Download and integrate remote changes:

```bash
git pull origin <remote-branch>
```

Upload your commits:

```bash
git push origin <your-branch>
```

---

## 12. If Something Goes Wrong

Git mistakes happen.

If you are unsure about the state of your repository, **do not start running random commands from the internet**.

Start by checking:

```bash
git status
```

Read what Git is telling you and understand the situation before trying to fix it.

Be especially careful with commands that can delete or overwrite work, such as:

```text
git reset --hard
git clean
git push --force
```

Do not use destructive Git commands unless you understand exactly what they will do.

When in doubt, ask for help. Most Git problems can be fixed without losing your work.

---

## 13. Quick Reference

When starting a task:

```bash
git switch develop
git pull origin develop
git switch -c feature/my-feature
```

While working:

```bash
git status
git add .
git commit -m "feat: implement my feature"
git push origin feature/my-feature
```

Then:

```text
Open Pull Request
        ↓
Target: develop
        ↓
Move Task to QA
        ↓
Code Review
        ↓
Merge
        ↓
Move Task to Done
```

After the Pull Request is merged:

```bash
git switch develop
git pull origin develop
```

Then pick the next task from **Ready**.
