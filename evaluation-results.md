# Evaluation Results

## Evaluation Goal

The goal of this evaluation was to check whether NoteLens can answer supported course-related questions accurately and complete the full user flow from input to answer.

---

## Metrics Used

I used simple correctness and relevance metrics because NoteLens is a focused question-answering application.

- Correctness: Does the answer match the expected meaning?
- Relevance: Is the answer related to the user question?
- Task success: Does the full UI → API → logic → response flow complete?

---

## Output Quality Evaluation

I tested 5 total cases.

Results:
- 3 successful cases
- 2 failure cases

Supported questions returned correct and relevant answers.

Unsupported questions failed because the required information was not available in the notes file.

---

## End-to-End Task Success

For supported questions, the full pipeline worked successfully:

User → UI → API → notes.txt → answer logic → response → UI

Result:
- Supported queries completed successfully
- Unsupported queries returned "No relevant answer found."

---

## Upstream Component Evaluation

The upstream component evaluated was the keyword matching logic.

Strengths:
- Fast
- Deterministic
- Easy to debug
- Works well for exact or supported synonym matches

Weaknesses:
- Still limited to known keywords
- Does not understand full semantic meaning
- Cannot answer topics not stored in notes.txt

---

## Failure Analysis

Failure Case 1:
- Input: "What is deep learning?"
- Reason: Deep learning content is not included in the current notes file.

Failure Case 2:
- Input: "What are neural networks?"
- Reason: Neural network content is not included in the current notes file.

---

## Baseline Comparison

Baseline:
- Return the full notes file without filtering.

Baseline result:
- Too much irrelevant information
- Poor user experience
- User has to manually find the answer

Final system:
- Uses keyword matching to return a targeted answer.

Final system result:
- More precise answers
- Faster user experience
- Easier to understand output

---

## Evidence-Based Improvement

Evaluation showed that the original system failed when users used the phrase "artificial intelligence" instead of "AI."

Improvement made:
- Added synonym handling for "AI" and "artificial intelligence"
- Added synonym handling for "ML" and "machine learning"

Result:
- The system now correctly answers "Explain artificial intelligence."

---

## Remaining Weakness

The system still does not use semantic retrieval or embeddings, so it cannot understand all paraphrases or answer questions outside the stored notes.