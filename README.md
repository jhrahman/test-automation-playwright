# Playwright Practices — Web Automation

A hands-on collection of Playwright end-to-end tests and examples for learning Playwright APIs, locators, frames, dropdowns, forms, and test reporting.

## About this repository

- Purpose: Demonstration and practice repository for Playwright test scenarios and automation patterns.
- Contents: Playwright test specs in [tests/](tests), Playwright configuration in [playwright.config.js](playwright.config.js), and example HTML report in `playwright-report/`.

## Tests

- All automated tests live under [tests/](tests). Tests are designed to demonstrate common Playwright patterns (locators, form interactions, frames, dropdowns, assertions, device emulation, and test reporting). New tests may be added over time; the instructions below show how to run and debug them locally and in CI.

## Playwright configuration highlights

See [playwright.config.js](playwright.config.js) for full details. Key highlights:

- Parallel execution with worker tuning for CI.
- Retries enabled on CI, disabled locally.
- Timeouts tuned for network interactions.
- HTML reporter enabled; screenshots/videos retained on failures; traces collected on retries.
- Primary browser configured to run with Chromium.

## Dependencies

Key dependencies referenced in `package.json`:

- `@playwright/test` — Playwright test runner
- `dotenv` — environment variable loading

Note: `package.json` currently has no `test` npm script; tests are executed using the Playwright CLI.

## Local quickstart

Install dependencies and Playwright browsers, then run tests:

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
npx playwright test tests/your-test.spec.js
```

Run headed (interactive) for debugging:

```bash
npx playwright test --headed
```

Run with a single worker and retries disabled (useful for debugging flaky tests):

```bash
npx playwright test --workers=1 --retries=0
```

## GitHub Actions CI

This repository includes a GitHub Actions workflow at [.github/workflows/playwright.yml](.github/workflows/playwright.yml) that installs dependencies and Playwright browsers, runs tests, and uploads the Playwright HTML report as an artifact. The workflow in this repo runs on `develop` and supports manual dispatch.

Example workflow (as present in this repository):

```yaml
name: Playwright Tests
env:
	TEST_USERNAME: ${{ secrets.TEST_USERNAME }}
	TEST_PASSWORD: ${{ secrets.TEST_PASSWORD }}
on:
	workflow_dispatch:
	push:
		branches:
			- develop

jobs:
	test:
		timeout-minutes: 60
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- uses: actions/setup-node@v4
				with:
					node-version: lts/*
			- name: Install dependencies
				run: npm ci
			- name: Install Playwright Browsers
				run: npx playwright install --with-deps
			- name: Run Playwright tests
				run: npx playwright test
			- uses: actions/upload-artifact@v4
				if: ${{ !cancelled() }}
				with:
					name: playwright-report
					path: playwright-report/
					retention-days: 30
```

Badge (add after CI is enabled):

```markdown
![Playwright Tests](https://github.com/<OWNER>/<REPO>/actions/workflows/playwright.yml/badge.svg)
```

## CI secrets & environment

- The workflow uses `TEST_USERNAME` and `TEST_PASSWORD` from repository secrets; set these if CI tests require credentials.
- Ensure external services required by tests are reachable from `ubuntu-latest`.

## Troubleshooting & tips

- If browsers fail to install on CI, ensure `npx playwright install --with-deps` runs and inspect runner logs for missing system libraries.
- Use `--workers=1` and `--retries=0` when debugging locally.
- For flaky tests, collect traces and use retries in CI:

```bash
npx playwright test --trace on-first-retry
```

- For interactive debugging:

```bash
npx playwright test tests/your-test.spec.js --headed --debug
```

## Contributing

- Create a branch, add or update tests under [tests/](tests), verify `npx playwright test` locally, and open a PR. CI runs on pushes to `develop` and on manual dispatch.

---
