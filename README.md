# NoteLens – End-to-End AI Application
## Overview
NoteLens is a simple AI-powered application that allows users to ask questions based on course documents and receive answers.

It demonstrates a complete AI workflow from data ingestion to user interface.

---

## Live Demo

Vercel URL: https://notelens-seven.vercel.app
GitHub Repo: https://github.com/sakshisalhan/notelens

---

## Features

* Ask questions using a simple UI
* Backend processes questions using stored data
* Returns relevant answers to the user

---

## Architecture

Data (notes.txt) → API → Processing Logic → UI

* Data ingestion: notes.txt
* Processing: keyword matching logic
* Storage: local file
* API: Next.js route (`/api/ask`)
* UI: Next.js frontend
* Deployment: Vercel

---

## 5-Skill Workflow

### grill-me

* Evaluated project idea
* Simplified scope

### write-a-prd

* Created PRD GitHub Issue

### prd-to-issues

* Created smaller GitHub Issues

### tdd

* Unit tests using Vitest (`tests/api.unit.ts`)

### improve-codebase-architecture

* Refactored logic into `lib/answer.ts`

---

## Testing

### Unit Testing

* Tested API logic using Vitest

### End-to-End Testing

* Playwright test simulating:

  * user input
  * button click
  * answer display

---

## Project Structure

* app/ → frontend + API
* lib/ → logic
* data/ → input data
* tests/ → unit tests
* e2e/ → Playwright tests

---

## What the App Supports

* Simple question answering
* End-to-end workflow

---

## Limitations

* Uses keyword matching
* Limited dataset

---

## Conclusion

This project demonstrates a complete AI pipeline including planning, testing, architecture, and deployment.
