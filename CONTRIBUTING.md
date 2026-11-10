# Contributing to ibuku

Thank you for considering a contribution to ibuku. We welcome bug reports, feature suggestions, documentation improvements, and code contributions from writers, developers, and designers alike.

## Step-by-Step Contribution Protocol

### 1. Fork & Clone

```bash
git clone https://github.com/mwakidenis/ibuku.git
cd ibuku
```

### 2. Create a Feature Branch

Use a descriptive branch name:

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bug-fix
# or
git checkout -b docs/your-documentation-update
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Make Your Changes

- Follow the existing TypeScript/React patterns in `src/`.
- Keep commits atomic and scoped to a single concern.
- Run the linter and type checker before committing:
  ```bash
  npm run lint
  npx tsc --noEmit -p tsconfig.app.json
  ```

### 5. Commit with a Conventional Message

Use one of the following prefixes:

| Prefix | Purpose |
| ------ | ------- |
| `feat:` | New feature or capability |
| `fix:` | Bug fix |
| `docs:` | Documentation-only change |
| `ci:` | CI/CD or workflow change |
| `refactor:` | Code restructure without behavior change |
| `chore:` | Maintenance or dependency update |

Example:
```
git commit -m "feat: weave dual-view annotations into the chapter canvas"
```

### 6. Push & Open a Pull Request

```bash
git push origin feat/your-feature-name
```

Then open a PR against `main` on GitHub. Your PR must:

- Reference any related issue.
- Include a summary of changes.
- Pass all CI checks (lint, typecheck, Tauri build).
- Receive at least one maintainer approval before merging.

### 7. Merge

Maintainers will squash-merge approved PRs into `main`. Delete your feature branch after merging.

## Branching Rules

- `main` is the production branch — never commit directly to it.
- All work happens on feature branches created from `main`.
- Branch names must follow the pattern: `<type>/<short-description>`.
- Long-running feature branches must be rebased onto `main` regularly.

## Pull Request Sequence

1. Fork the repository.
2. Create a feature branch from `main`.
3. Implement changes with tests and documentation updates.
4. Run lint and typecheck locally.
5. Commit with a conventional, unique message.
6. Push the branch to your fork.
7. Open a PR against `main`.
8. Address review feedback.
9. Maintainer approves and merges.
10. Delete the feature branch.

## Code Style

- TypeScript strict mode is enforced.
- Prettier formatting via ESLint.
- No mojibake or encoding errors in source files.
- Components must be functional, not class-based.

## License

By contributing, you agree that your contributions will be licensed under the AGPL v3.
