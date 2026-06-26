# Playwright Practices — Web Automation

A hands-on collection of Playwright end-to-end tests written in **TypeScript** for learning Playwright APIs, locators, frames, dropdowns, forms, and test reporting.

## About this repository

- Purpose: Demonstration and practice repository for Playwright test scenarios and automation patterns.
- Language: TypeScript with strict type checking enabled.
- Contents: Playwright test specs in [tests/](tests), Playwright configuration in [playwright.config.ts](playwright.config.ts), TypeScript configuration in [tsconfig.json](tsconfig.json), and example HTML report in `playwright-report/`.

## Tests

- All automated tests live under [tests/](tests) with `.spec.ts` extension.
- Tests are designed to demonstrate common Playwright patterns: locators, form interactions, frames, dropdowns, assertions, device emulation, and test reporting.
- All test files have full type annotations for parameters and variables.

## Configuration

**TypeScript Configuration** ([tsconfig.json](tsconfig.json)):
- Strict mode enabled for full type safety
- ES2020 target with Node module resolution
- Includes Playwright and Node.js type definitions

**Playwright Configuration** ([playwright.config.ts](playwright.config.ts)):
- Parallel execution with worker tuning for CI
- Retries enabled on CI, disabled locally
- Timeouts tuned for network interactions
- HTML reporter enabled; screenshots/videos retained on failures
- Primary browser: Chromium

## Dependencies

Key dependencies in `package.json`:

- `@playwright/test` — Playwright test runner
- `@types/node` — Node.js type definitions
- `dotenv` — environment variable loading

## Local quickstart

Install dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Open the HTML report:

```bash
npx playwright show-report
```

Run a single test file:

```bash
npx playwright test tests/your-test.spec.ts
```

Run in headed mode (interactive):

```bash
npx playwright test --headed
```

Run with single worker and retries disabled (for debugging):

```bash
npx playwright test --workers=1 --retries=0
```

## GitHub Actions CI

This repository includes a GitHub Actions workflow at [.github/workflows/playwright.yml](.github/workflows/playwright.yml) that installs dependencies, runs tests, and uploads the HTML report as an artifact.

Workflow uses `TEST_USERNAME` and `TEST_PASSWORD` from repository secrets if your tests require credentials.

## Troubleshooting

- Use `--workers=1` and `--retries=0` when debugging locally.
- Run in debug mode:

```bash
npx playwright test tests/your-test.spec.ts --headed --debug
```

- For detailed trace collection:

```bash
npx playwright test --trace on-first-retry
```

---
