# Architecture Improvement (improve-codebase-architecture)

## Before Refactor
- API route handled everything:
  - reading file
  - processing logic
  - keyword matching
- Logic was tightly coupled with API
- Hard to test and maintain

## After Refactor
- Created separate module: `lib/answer.ts`
- Moved logic into reusable function: `getAnswerFromNotes`
- API now only:
  - reads input
  - calls helper function
  - returns response

## Improvements
- Better separation of concerns
- Easier to test logic independently
- Cleaner and more maintainable structure
- Reusable logic for future features

## Summary
Refactored code from monolithic API logic → modular architecture