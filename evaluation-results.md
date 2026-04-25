# Evaluation Results

## Output Quality

The system was evaluated on 5 representative queries.

All 5 supported queries returned correct and relevant answers.

Metric used:
- Correctness (answer matches expected meaning)
- Relevance (answer relates to the question)

Result:
- 5/5 correct answers
- High relevance for supported queries


## End-to-End Task Success

All supported queries successfully completed the full pipeline:

User → UI → API → notes.txt → answer logic → response → UI

Result:
- 100% success for supported queries


## Upstream Component Evaluation (Keyword Matching)

The keyword matching logic works well for exact keyword matches.

Strengths:
- Fast
- Deterministic
- Easy to debug

Weaknesses:
- Fails on synonyms
- Requires exact keyword presence


## Failure Analysis

Failure Case 1:
- Input: "Explain artificial intelligence"
- Issue: Keyword mismatch (AI vs artificial intelligence)

Failure Case 2:
- Input: "What is blockchain?"
- Issue: No relevant data in notes.txt


## Baseline Comparison

Baseline:
- Return entire notes.txt without filtering

Issues:
- Too much irrelevant information
- Poor user experience

Improved System:
- Keyword-based filtering

Result:
- More precise answers
- Better user experience