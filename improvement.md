# System Improvement

## Problem Identified

During evaluation, the system failed to answer:

- "Explain artificial intelligence"

Reason:
- The system only matched exact keywords like "AI"
- It did not handle synonyms

---

## Evidence

From evaluation cases:

Failure Case:
- Input: "Explain artificial intelligence"
- Output: No relevant answer found

---

## Improvement Made

Updated keyword matching logic to include synonyms.

Example:
- "AI" OR "artificial intelligence"
- "ML" OR "machine learning"

---

## Result After Improvement

- The system now correctly answers:
  "Explain artificial intelligence"

- Improved answer coverage
- Better user experience

---

## Remaining Limitations

- Still relies on keyword matching
- Does not understand full semantic meaning
- Does not support large datasets

---

## Future Improvement

- Add RAG (retrieval with embeddings)
- Improve semantic understanding