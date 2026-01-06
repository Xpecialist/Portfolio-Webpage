# Deployment Plan - GitHub Pages

## Goal
Deploy the React portfolio to GitHub Pages.

## Steps
1. **Git Initialization**: Ensure the project is a git repository.
2. **Configuration**:
   - Update `vite.config.ts` with `base` URL (or relative path `./`).
   - Install `gh-pages` package: `npm install gh-pages --save-dev`.
3. **Scripts**:
   - Add `predeploy` and `deploy` scripts to `package.json`.
4. **Execution**:
   - Commit all changes.
   - Run `npm run deploy`.

## Requirements
- User must have a GitHub repository created (or I will instruct them to).
- `git remote add origin <url>` must be set.
