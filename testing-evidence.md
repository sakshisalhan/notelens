# Testing Evidence

## TDD (Vitest)
- Created unit tests for API logic
- Tested:
  - AI question
  - machine learning question
  - unknown question
- Tests validate real supported behavior

Test file:
- tests/api.unit.ts

## Playwright MCP (UI Testing)
- Used Playwright during development to test the real user flow
- Simulated real user behavior:
  - user opens the app
  - user enters a question
  - user clicks the Ask button
  - user receives an answer on screen

Test file:
- e2e/app.spec.ts

## Evidence
- Vitest tests passed
- Playwright end-to-end test passed
- Playwright was used intentionally to validate the UI → API → response flow

## Summary
Both unit testing and browser-based end-to-end testing were used during development to validate the system.