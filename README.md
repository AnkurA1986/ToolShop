# ToolShop Test Automation
End-to-end and API test automation framework for the ToolShop application, built with Playwright and TypeScript.

## Toolshop URL
https://practicesoftwaretesting.com/

## Tech Stack
- Playwright
- TypeScript
- Node.js (see `.nvmrc` for the required version)
- GitHub Actions (CI)

## Prerequisites
- Node.js 20+ (or the version listed in `.nvmrc`)
- Git

## Getting Started
```bash
git clone <repo-url>
cd ToolShop
npm ci
npx playwright install --with-deps
cp .env.example .env
```

Then open `.env` and fill in the values.

## Environment Variables
| Variable | Description | Example |
|----------|-------------|---------|
| BASE_URL | Application URL | https://example.com |
| API_URL | API base URL | https://api.example.com |
| USER_EMAIL | Test user email | test@example.com |
| USER_PASSWORD | Test user password | (ask the project owner) |

> Never commit your real `.env` file. Only `.env.example` is tracked.

## Running Tests

| Command | What it does |
|---------|--------------|
| `npm test` | Run all tests |
| `npm run test:smoke` | Run smoke tests (`@smoke`) |
| `npm run test:sanity` | Run sanity tests (`@sanity`) |
| `npm run test:regression` | Run regression tests (`@regression`) |
| `npx playwright test tests/e2e/<file>.spec.ts` | Run a single file |
| `npx playwright test --headed` | Run with the browser visible |
| `npx playwright test --ui` | Run in interactive UI mode |
| `npx playwright test --debug` | Debug step by step |

## Viewing Reports

```bash
npx playwright show-report
```

## Project Structure

```
ToolShop/
├── .github/workflows/   CI pipelines
├── src/
│   ├── config/          Environment and config helpers
│   ├── data/            Test data
│   ├── fixtures/        Custom Playwright fixtures
│   ├── pages/           Page Object Models
│   └── utils/           Reusable helpers
├── tests/
│   ├── api/             API tests
│   └── e2e/             UI end-to-end tests
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## Writing Tests

- Use the Page Object pattern: locators and actions live in `src/pages`, assertions live in the tests.
- Tag every test with `@smoke`, `@sanity` or `@regression`.
- Name files `<feature>.spec.ts`.
- Never hardcode URLs or credentials; use config and `.env`.

Example:

```ts
test('user can log in', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
  // ...
});
```

## Git Workflow

1. Pull the latest `main` (or `develop`).
2. Create a branch: `feature/<short-description>` or `bugfix/<short-description>`.
3. Commit small, with clear messages.
4. Push and open a Pull Request.
5. Wait for CI to pass and for a review before merging.

## CI/CD

- Pull requests: smoke tests run automatically.
- Nightly: full regression suite.

## Troubleshooting

- **Browsers not found**: run `npx playwright install --with-deps`.
- **Tests can't reach the app**: check `BASE_URL` in `.env`.
- **Auth failures**: delete `playwright/.auth/` and re-run.

## Contact

Project owner: `<your name / email>`