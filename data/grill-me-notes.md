## Skill Usage Evidence

Applied Matt Pocock’s 5-skill workflow in development::

- grill-me → evaluated idea and simplified scope
- write-a-prd → created PRD GitHub issue
- prd-to-issues → created smaller GitHub issues
- tdd → implemented tests using Vitest
- improve-codebase-architecture → refactored logic into lib module

These steps were followed intentionally as part of development workflow.

## Evidence Links

- PRD GitHub Issue: 
https://github.com/sakshisalhan/notelens/issues/1
- Derived Issues:
  - https://github.com/sakshisalhan/notelens/issues/2
  - https://github.com/sakshisalhan/notelens/issues/3
  - https://github.com/sakshisalhan/notelens/issues/4
  - https://github.com/sakshisalhan/notelens/issues/5
  - https://github.com/sakshisalhan/notelens/issues/6

- Test Files:
  - tests/api.unit.ts
  - e2e/app.spec.ts

- Refactor File:
  - lib/answer.ts


## Grill-Me Skill Usage

Used the grill-me skill concept to evaluate the project idea before development.
Identified key risks and simplified the approach.

---

## Grill Me Notes

### Questions
- Is this too simple?
- Does it really use AI?
- What if notes don’t match?

### Improvements
- Added keyword matching logic
- Ensured data flows from file → API → UI
- Kept scope small but complete